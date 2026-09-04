const bcrypt = require("bcryptjs");
const db = require("./db");
const catalog = require("../landing/js/course-catalog");

function seedUsers() {
  if (db.prepare("SELECT COUNT(*) AS c FROM users").get().c === 0) {
    const hash = bcrypt.hashSync("admin123", 10);
    db.prepare("INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)")
      .run("admin@eua.am", hash, "Platform Admin", "admin");
    console.log("Created admin: admin@eua.am / admin123  (change before production!)");
  }

  const studentEmail = "student@eua.am";
  if (!db.prepare("SELECT id FROM users WHERE email = ?").get(studentEmail)) {
    const result = db.prepare(
      "INSERT INTO users (email, password_hash, name, first_name, last_name, role) VALUES (?, ?, ?, ?, ?, 'student')"
    ).run(studentEmail, bcrypt.hashSync("student123", 10), "Test Student", "Test", "Student");
    db.prepare(`
      INSERT OR IGNORE INTO enrollments (user_id, course_slug, status, payment_status, amount_amd, promo_code)
      VALUES (?, 'ai-explorers', 'active', 'discounted', 0, 'EUA100-DEMO')
    `).run(result.lastInsertRowid);
    console.log("Created student: student@eua.am / student123");
  }
}

function seedCourseMaterials() {
  const upsertModule = db.prepare(`
    INSERT INTO modules (id, sort_order, title_en, title_hy, active)
    VALUES (?, ?, ?, ?, 1)
    ON CONFLICT(id) DO UPDATE SET
      sort_order = excluded.sort_order,
      title_en = excluded.title_en,
      title_hy = excluded.title_hy,
      active = 1
  `);
  const upsertLesson = db.prepare(`
    INSERT INTO lessons
      (id, module_id, sort_order, title_en, title_hy, youtube_url, description_en, description_hy, active)
    VALUES (?, ?, ?, ?, ?, '', ?, ?, 1)
    ON CONFLICT(id) DO UPDATE SET
      module_id = excluded.module_id,
      sort_order = excluded.sort_order,
      title_en = excluded.title_en,
      title_hy = excluded.title_hy,
      description_en = excluded.description_en,
      description_hy = excluded.description_hy,
      active = 1
  `);
  const insertQuestion = db.prepare(`
    INSERT INTO quiz_questions
      (module_id, sort_order, question_en, question_hy, options_json, options_hy_json, correct_index)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  db.transaction(() => {
    // Preserve legacy progress rows while removing the earlier course version from navigation.
    db.prepare("UPDATE modules SET active = 0 WHERE id < 100").run();
    db.prepare("UPDATE lessons SET active = 0 WHERE id < 100").run();

    for (const module of catalog.modules) {
      upsertModule.run(module.id, module.sort_order, module.title_en, module.title_hy);
      for (const item of module.lessons) {
        upsertLesson.run(
          item.id, module.id, item.sort_order, item.title_en, item.title_hy,
          item.objective_en, item.objective_hy
        );
      }

      db.prepare("DELETE FROM quiz_questions WHERE module_id = ?").run(module.id);
      const questions = [
        {
          question_en: module.quiz_focus_en,
          question_hy: module.quiz_focus_hy,
          options_en: module.quiz_options_en,
          options_hy: module.quiz_options_hy,
          correct_index: module.quiz_correct
        },
        ...catalog.universalQuiz
      ];
      questions.forEach((question, index) => {
        insertQuestion.run(
          module.id, index + 1, question.question_en, question.question_hy,
          JSON.stringify(question.options_en), JSON.stringify(question.options_hy), question.correct_index
        );
      });
    }
  })();
}

function seedCatalog() {
  const upsertCourse = db.prepare(`
    INSERT INTO courses
      (slug, title, audience, status, summary, video_minutes, module_count, lesson_count, exam_count, price_amd, sort_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
      title = excluded.title,
      audience = excluded.audience,
      status = excluded.status,
      summary = excluded.summary,
      video_minutes = excluded.video_minutes,
      module_count = excluded.module_count,
      lesson_count = excluded.lesson_count,
      exam_count = excluded.exam_count,
      price_amd = excluded.price_amd,
      sort_order = excluded.sort_order
  `);
  [
    ["ai-explorers", "AI Explorers", "Final-year school and college students", "available", "Understand, verify, and build with modern AI through bilingual lessons and practical challenges.", 0, catalog.modules.length, catalog.lesson_count, catalog.modules.length, 35000, 1],
    ["students", "AI for Students", "University students", "coming_soon", "Research, study, and create with academic integrity.", 360, 6, 18, 6, 45000, 2],
    ["educators", "AI for Educators", "Teachers and faculty", "coming_soon", "Design learning, feedback, and classroom AI practice.", 300, 5, 15, 5, 55000, 3],
    ["government", "AI for Public Sector & Governance", "Public service professionals", "coming_soon", "Apply AI responsibly in public-sector work.", 270, 5, 14, 5, 65000, 4]
  ].forEach((course) => upsertCourse.run(...course));

  db.prepare("INSERT OR IGNORE INTO promo_codes (code, discount_percent, active) VALUES ('EUA100-DEMO', 100, 1)").run();
}

seedUsers();
seedCourseMaterials();
seedCatalog();
db.pragma("optimize");
console.log(`AI Explorers ready: ${catalog.modules.length} modules, ${catalog.lesson_count} lessons, ${catalog.modules.length * 3} quiz questions`);
