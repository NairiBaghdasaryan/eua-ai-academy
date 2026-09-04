const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const path = require("path");
const db = require("./db");
require("./seed");

const LANDING_DIR = path.join(__dirname, "..", "landing");
const PLATFORM_PUBLIC_DIR = path.join(__dirname, "public");

const app = express();
const PORT = process.env.PORT || 8080;
const PASS_THRESHOLD = 0.7;
const PAYMENT_CHECKOUT_URL = process.env.PAYMENT_CHECKOUT_URL || "";

function cleanText(value, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "eua-ai-change-in-production",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true },
  })
);
app.use(express.static(LANDING_DIR));
app.use(express.static(PLATFORM_PUBLIC_DIR));

function requireAuth(req, res, next) {
  if (!req.session.userId) return res.status(401).json({ error: "Not logged in" });
  next();
}

function requireAdmin(req, res, next) {
  if (!req.session.userId || req.session.role !== "admin")
    return res.status(403).json({ error: "Admin only" });
  next();
}

function requireExplorerEnrollment(req, res, next) {
  if (req.session.role === "admin") return next();
  const enrollment = db.prepare(`
    SELECT id FROM enrollments
    WHERE user_id = ? AND course_slug = 'ai-explorers' AND status = 'active'
  `).get(req.session.userId);
  if (!enrollment)
    return res.status(403).json({ error: "Enroll in AI Explorers to access the lessons", code: "ENROLLMENT_REQUIRED" });
  next();
}

function youtubeEmbedUrl(url) {
  if (!url) return "";
  const m =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/) ||
    url.match(/^([\w-]{11})$/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : "";
}

// --- Auth ---

app.post("/api/auth/register", (req, res) => {
  const email = cleanText(req.body.email, 254).toLowerCase();
  const password = typeof req.body.password === "string" ? req.body.password : "";
  const firstName = cleanText(req.body.first_name, 80);
  const lastName = cleanText(req.body.last_name, 80);
  const name = cleanText(req.body.name, 160) || `${firstName} ${lastName}`.trim();
  if (!email || !password || !name)
    return res.status(400).json({ error: "Email, password, and name required" });
  if (!validEmail(email)) return res.status(400).json({ error: "Enter a valid email address" });
  if (password.length < 6)
    return res.status(400).json({ error: "Password must be at least 6 characters" });
  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existing) return res.status(409).json({ error: "Email already registered" });
  const hash = bcrypt.hashSync(password, 10);
  const r = db
    .prepare("INSERT INTO users (email, password_hash, name, first_name, last_name, role) VALUES (?, ?, ?, ?, ?, 'student')")
    .run(email, hash, name, firstName || null, lastName || null);
  req.session.userId = r.lastInsertRowid;
  req.session.role = "student";
  req.session.name = name;
  res.json({ ok: true, name });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (!user || !bcrypt.compareSync(password, user.password_hash))
    return res.status(401).json({ error: "Invalid email or password" });
  req.session.userId = user.id;
  req.session.role = user.role;
  req.session.name = user.name;
  res.json({ ok: true, name: user.name, role: user.role });
});

app.post("/api/auth/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get("/api/auth/me", (req, res) => {
  if (!req.session.userId) return res.json({ user: null });
  res.json({
    user: {
      id: req.session.userId,
      name: req.session.name,
      role: req.session.role,
    },
  });
});

// --- Academy catalogue, reminders, profile, and enrolment ---

app.get("/api/catalog", (_req, res) => {
  const courses = db.prepare(`
    SELECT slug, title, audience, status, summary, video_minutes, module_count,
           lesson_count, exam_count, price_amd, sort_order
    FROM courses ORDER BY sort_order
  `).all();
  res.json({ courses });
});

app.post("/api/course-interest", (req, res) => {
  const courseSlug = cleanText(req.body.course_slug, 60);
  const firstName = cleanText(req.body.first_name, 80);
  const lastName = cleanText(req.body.last_name, 80);
  const email = cleanText(req.body.email, 254).toLowerCase();
  const phone = cleanText(req.body.phone, 40);
  const message = cleanText(req.body.message, 1000);
  if (!courseSlug || !firstName || !lastName || !email)
    return res.status(400).json({ error: "First name, last name, and email are required" });
  if (!validEmail(email)) return res.status(400).json({ error: "Enter a valid email address" });
  const course = db.prepare("SELECT status FROM courses WHERE slug = ?").get(courseSlug);
  if (!course || course.status !== "coming_soon")
    return res.status(400).json({ error: "Reminders are available for upcoming courses only" });
  db.prepare(`
    INSERT INTO course_interests (course_slug, first_name, last_name, email, phone, message)
    VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(course_slug, email) DO UPDATE SET
      first_name = excluded.first_name,
      last_name = excluded.last_name,
      phone = excluded.phone,
      message = excluded.message
  `).run(courseSlug, firstName, lastName, email, phone || null, message || null);
  res.json({ ok: true });
});

app.post("/api/in-person-interest", (req, res) => {
  const allowedCourses = new Set([
    "business-management", "marketing-sales", "finance-accounting", "product-project",
    "data-decisions", "entrepreneurs-startups", "hr-recruitment", "education-teaching"
  ]);
  const courseSlug = cleanText(req.body.course_slug, 60);
  const firstName = cleanText(req.body.first_name, 80);
  const lastName = cleanText(req.body.last_name, 80);
  const email = cleanText(req.body.email, 254).toLowerCase();
  const phone = cleanText(req.body.phone, 40);
  const role = cleanText(req.body.role, 100);
  const organization = cleanText(req.body.organization, 120);
  const message = cleanText(req.body.message, 1000);
  if (!allowedCourses.has(courseSlug)) return res.status(400).json({ error: "Unknown in-person course" });
  if (!firstName || !lastName || !email || !role)
    return res.status(400).json({ error: "First name, last name, email, and role are required" });
  if (!validEmail(email)) return res.status(400).json({ error: "Enter a valid email address" });
  db.prepare(`
    INSERT INTO in_person_interests
      (course_slug, first_name, last_name, email, phone, role, organization, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(course_slug, email) DO UPDATE SET
      first_name = excluded.first_name,
      last_name = excluded.last_name,
      phone = excluded.phone,
      role = excluded.role,
      organization = excluded.organization,
      message = excluded.message
  `).run(courseSlug, firstName, lastName, email, phone || null, role, organization || null, message || null);
  res.json({ ok: true });
});

app.post("/api/contact", (req, res) => {
  const name = cleanText(req.body.name, 120);
  const email = cleanText(req.body.email, 254).toLowerCase();
  const message = cleanText(req.body.message, 2000);
  if (!name || !email || !message)
    return res.status(400).json({ error: "Name, email, and message are required" });
  if (!validEmail(email)) return res.status(400).json({ error: "Enter a valid email address" });
  db.prepare("INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)")
    .run(name, email, message);
  res.json({ ok: true });
});

app.get("/api/profile", requireAuth, (req, res) => {
  const user = db.prepare(`
    SELECT id, email, name, first_name, last_name, phone, created_at
    FROM users WHERE id = ?
  `).get(req.session.userId);
  const courses = db.prepare(`
    SELECT c.slug, c.title, c.audience, c.status AS course_status, c.summary,
           c.video_minutes, c.module_count, c.lesson_count, c.exam_count, c.price_amd,
           e.id AS enrollment_id, e.status AS enrollment_status,
           e.payment_status, e.amount_amd, e.enrolled_at,
           CASE WHEN e.status = 'active' THEN c.telegram_url ELSE NULL END AS telegram_url
    FROM courses c
    LEFT JOIN enrollments e ON e.course_slug = c.slug AND e.user_id = ?
    ORDER BY c.sort_order
  `).all(req.session.userId);
  res.json({ user, courses, payment_configured: !!PAYMENT_CHECKOUT_URL });
});

app.put("/api/profile", requireAuth, (req, res) => {
  const firstName = cleanText(req.body.first_name, 80);
  const lastName = cleanText(req.body.last_name, 80);
  const phone = cleanText(req.body.phone, 40);
  if (!firstName || !lastName)
    return res.status(400).json({ error: "First name and last name are required" });
  db.prepare("UPDATE users SET first_name = ?, last_name = ?, phone = ?, name = ? WHERE id = ?")
    .run(firstName, lastName, phone || null, `${firstName} ${lastName}`, req.session.userId);
  req.session.name = `${firstName} ${lastName}`;
  res.json({ ok: true, name: req.session.name });
});

app.post("/api/enrollments", requireAuth, (req, res) => {
  const courseSlug = cleanText(req.body.course_slug, 60);
  const promoCode = cleanText(req.body.promo_code, 80);
  const course = db.prepare("SELECT * FROM courses WHERE slug = ?").get(courseSlug);
  if (!course || course.status !== "available")
    return res.status(400).json({ error: "This course is not open for enrollment" });

  let promo = null;
  if (promoCode) {
    promo = db.prepare(`
      SELECT * FROM promo_codes
      WHERE code = ? AND active = 1
        AND (expires_at IS NULL OR datetime(expires_at) > datetime('now'))
        AND (max_uses IS NULL OR use_count < max_uses)
    `).get(promoCode);
    if (!promo) return res.status(400).json({ error: "Promo code is invalid or no longer available" });
  }

  const discount = promo ? promo.discount_percent : 0;
  const amount = Math.max(0, Math.round(course.price_amd * (100 - discount) / 100));
  const active = amount === 0;
  const existing = db.prepare("SELECT * FROM enrollments WHERE user_id = ? AND course_slug = ?")
    .get(req.session.userId, courseSlug);
  if (existing?.status === "active") return res.json({ ok: true, enrollment: existing });

  db.transaction(() => {
    db.prepare(`
      INSERT INTO enrollments
      (user_id, course_slug, status, payment_status, amount_amd, promo_code)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(user_id, course_slug) DO UPDATE SET
        status = excluded.status,
        payment_status = excluded.payment_status,
        amount_amd = excluded.amount_amd,
        promo_code = excluded.promo_code,
        enrolled_at = datetime('now')
    `).run(
      req.session.userId, courseSlug,
      active ? "active" : "payment_pending",
      active ? "discounted" : "pending",
      amount, promo ? promo.code : null
    );
    if (active && promo && (!existing || existing.promo_code !== promo.code)) {
      db.prepare("UPDATE promo_codes SET use_count = use_count + 1 WHERE code = ?").run(promo.code);
    }
  })();

  const enrollment = db.prepare("SELECT * FROM enrollments WHERE user_id = ? AND course_slug = ?")
    .get(req.session.userId, courseSlug);
  res.json({
    ok: true,
    enrollment,
    payment_required: !active,
    payment_url: !active && PAYMENT_CHECKOUT_URL ? PAYMENT_CHECKOUT_URL : null
  });
});

app.get("/api/enrollments/:id/checkout", requireAuth, (req, res) => {
  const enrollmentId = Number.parseInt(req.params.id, 10);
  const enrollment = db.prepare(`
    SELECT id, course_slug, amount_amd, status
    FROM enrollments WHERE id = ? AND user_id = ?
  `).get(enrollmentId, req.session.userId);
  if (!enrollment || enrollment.status !== "payment_pending")
    return res.status(404).json({ error: "Pending enrollment not found" });
  if (!PAYMENT_CHECKOUT_URL)
    return res.status(503).json({ error: "Online payment will be enabled when the payment provider is connected" });
  res.json({ payment_url: PAYMENT_CHECKOUT_URL, enrollment });
});

// --- Course (student) ---

app.get("/api/course", requireAuth, requireExplorerEnrollment, (req, res) => {
  const userId = req.session.userId;
  const modules = db
    .prepare("SELECT * FROM modules WHERE active = 1 ORDER BY sort_order")
    .all()
    .map((mod) => {
      const lessons = db
        .prepare(
          "SELECT l.*, CASE WHEN p.lesson_id IS NOT NULL THEN 1 ELSE 0 END AS completed FROM lessons l LEFT JOIN progress p ON p.lesson_id = l.id AND p.user_id = ? WHERE l.module_id = ? AND l.active = 1 ORDER BY l.sort_order"
        )
        .all(userId, mod.id)
        .map((l) => ({
          ...l,
          completed: !!l.completed,
          embed_url: youtubeEmbedUrl(l.youtube_url),
        }));
      const quiz = db
        .prepare("SELECT * FROM quiz_results WHERE user_id = ? AND module_id = ?")
        .get(userId, mod.id);
      const allDone = lessons.length > 0 && lessons.every((l) => l.completed);
      return {
        ...mod,
        lessons,
        quiz_passed: quiz ? !!quiz.passed : false,
        quiz_score: quiz ? quiz.score : null,
        all_lessons_done: allDone,
      };
    });
  res.json({ modules });
});

app.post("/api/progress/:lessonId", requireAuth, requireExplorerEnrollment, (req, res) => {
  const lessonId = parseInt(req.params.lessonId, 10);
  const userId = req.session.userId;
  db.prepare(
    "INSERT OR IGNORE INTO progress (user_id, lesson_id) VALUES (?, ?)"
  ).run(userId, lessonId);
  res.json({ ok: true });
});

app.get("/api/quiz/:moduleId", requireAuth, requireExplorerEnrollment, (req, res) => {
  const moduleId = parseInt(req.params.moduleId, 10);
  const questions = db
    .prepare(
      "SELECT id, question_en, question_hy, options_json, options_hy_json FROM quiz_questions WHERE module_id = ? ORDER BY sort_order"
    )
    .all(moduleId)
    .map((q) => ({
      id: q.id,
      question_en: q.question_en,
      question_hy: q.question_hy,
      options: JSON.parse(q.options_json),
      options_hy: JSON.parse(q.options_hy_json || "[]"),
    }));
  res.json({ moduleId, questions });
});

app.post("/api/quiz/:moduleId/submit", requireAuth, requireExplorerEnrollment, (req, res) => {
  const moduleId = parseInt(req.params.moduleId, 10);
  const userId = req.session.userId;
  const { answers } = req.body;
  const questions = db
    .prepare("SELECT id, correct_index FROM quiz_questions WHERE module_id = ?")
    .all(moduleId);
  if (!questions.length) return res.status(404).json({ error: "No quiz" });
  let correct = 0;
  for (const q of questions) {
    if (answers[q.id] === q.correct_index) correct++;
  }
  const score = correct / questions.length;
  const passed = score >= PASS_THRESHOLD ? 1 : 0;
  db.prepare(
    "INSERT INTO quiz_results (user_id, module_id, score, passed) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, module_id) DO UPDATE SET score = excluded.score, passed = excluded.passed, completed_at = datetime('now')"
  ).run(userId, moduleId, score, passed);
  res.json({ score, passed: !!passed, correct, total: questions.length });
});

function moduleUnlocked(userId, moduleSortOrder) {
  if (moduleSortOrder <= 1) return true;
  const prev = db
    .prepare("SELECT id FROM modules WHERE active = 1 AND sort_order = ?")
    .get(moduleSortOrder - 1);
  if (!prev) return true;
  const quiz = db
    .prepare("SELECT passed FROM quiz_results WHERE user_id = ? AND module_id = ?")
    .get(userId, prev.id);
  return quiz && quiz.passed;
}

app.get("/api/course/access", requireAuth, requireExplorerEnrollment, (req, res) => {
  const userId = req.session.userId;
  const mods = db.prepare("SELECT id, sort_order FROM modules WHERE active = 1 ORDER BY sort_order").all();
  const access = mods.map((m) => ({
    module_id: m.id,
    unlocked: moduleUnlocked(userId, m.sort_order),
  }));
  res.json({ access });
});

// --- Admin ---

app.get("/api/admin/lessons", requireAdmin, (req, res) => {
  const rows = db
    .prepare(
      `SELECT l.*, m.title_en AS module_title, m.sort_order AS module_sort
       FROM lessons l JOIN modules m ON m.id = l.module_id
       WHERE l.active = 1 AND m.active = 1
       ORDER BY m.sort_order, l.sort_order`
    )
    .all();
  res.json({ lessons: rows });
});

app.put("/api/admin/lessons/:id", requireAdmin, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title_en, title_hy, youtube_url, description_en, description_hy } = req.body;
  db.prepare(
    `UPDATE lessons SET title_en = ?, title_hy = ?, youtube_url = ?, description_en = ?, description_hy = ?
     WHERE id = ?`
  ).run(
    title_en ?? "",
    title_hy ?? "",
    youtube_url ?? "",
    description_en ?? "",
    description_hy ?? "",
    id
  );
  res.json({ ok: true });
});

app.get("/api/admin/quiz/:moduleId", requireAdmin, (req, res) => {
  const moduleId = parseInt(req.params.moduleId, 10);
  const questions = db
    .prepare("SELECT * FROM quiz_questions WHERE module_id = ? ORDER BY sort_order")
    .all(moduleId)
    .map((q) => ({ ...q, options: JSON.parse(q.options_json), options_hy: JSON.parse(q.options_hy_json || "[]") }));
  res.json({ questions });
});

app.put("/api/admin/quiz/:questionId", requireAdmin, (req, res) => {
  const id = parseInt(req.params.questionId, 10);
  const { question_en, question_hy, options, options_hy, correct_index } = req.body;
  const existing = db.prepare("SELECT options_hy_json FROM quiz_questions WHERE id = ?").get(id);
  const localizedOptions = Array.isArray(options_hy)
    ? options_hy
    : JSON.parse(existing?.options_hy_json || "[]");
  db.prepare(
    "UPDATE quiz_questions SET question_en = ?, question_hy = ?, options_json = ?, options_hy_json = ?, correct_index = ? WHERE id = ?"
  ).run(question_en, question_hy, JSON.stringify(options), JSON.stringify(localizedOptions), correct_index, id);
  res.json({ ok: true });
});

app.get("/api/admin/stats", requireAdmin, (req, res) => {
  const students = db
    .prepare("SELECT COUNT(*) AS c FROM users WHERE role = 'student'")
    .get().c;
  const completions = db
    .prepare("SELECT COUNT(DISTINCT user_id) AS c FROM progress")
    .get().c;
  res.json({ students, learners_with_progress: completions });
});

app.get("/api/admin/modules", requireAdmin, (req, res) => {
  res.json({ modules: db.prepare("SELECT * FROM modules WHERE active = 1 ORDER BY sort_order").all() });
});

app.listen(PORT, () => {
  console.log(`EUA AI Academy running at http://localhost:${PORT}`);
  console.log(`  Academy: http://localhost:${PORT}/`);
  console.log(`  Learning: http://localhost:${PORT}/course.html`);
});
