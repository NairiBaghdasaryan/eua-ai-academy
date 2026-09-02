const bcrypt = require("bcryptjs");
const db = require("./db");

const modules = [
  { sort: 1, title_en: "Module 1 · Foundations", title_hy: "Մոդուլ 1 · Հիմունքներ" },
  { sort: 2, title_en: "Module 2 · Communication", title_hy: "Մոդուլ 2 · Հաղորդակցություն" },
  { sort: 3, title_en: "Module 3 · Critical thinking", title_hy: "Մոդուլ 3 · Կրիտիկական մտածողություն" },
  { sort: 4, title_en: "Module 4 · Learning with AI", title_hy: "Մոդուլ 4 · Սովորում AI-ով" },
  { sort: 5, title_en: "Module 5 · Creation", title_hy: "Մոդուլ 5 · Ստեղծում" },
  { sort: 6, title_en: "Module 6 · Building", title_hy: "Մոդուլ 6 · Կառուցում" },
  { sort: 7, title_en: "Module 7 · What next", title_hy: "Մոդուլ 7 · Ինչ հաջորդ" },
];

const lessons = [
  [1, 1, "Is That Actually AI?", "Իսկապե՞ս AI է"],
  [1, 2, "How Machines Learn", "Ինչպես են սովորում մեքենաները"],
  [1, 3, "The Prediction Machine", "Կանխատեսման մեքենան"],
  [1, 4, "The Tool Map", "Գործիքների քարտեզ"],
  [2, 1, "CRISP: How to Ask", "CRISP՝ ինչպես հարցնել"],
  [2, 2, "The Second-Draft Rule", "Երկրորդ նախագծի կանոն"],
  [3, 1, "The Confidence Trap", "Վստահության կափան"],
  [3, 2, "Whose Data? Bias and Blind Spots", "Ո՞ւմ տվյալները"],
  [3, 3, "The Reality Test", "Իրականության թест"],
  [3, 4, "Your Data, Your Rights", "Քո տվյալները, քո իրավունքները"],
  [4, 1, "The Tutor in Your Pocket", "Դասատու ձեր ճաշակում"],
  [4, 2, "Research and the Line You Won't Cross", "Հետազոտություն և սահման"],
  [5, 1, "Seeing Ideas", "Տեսնել գաղափարները"],
  [5, 2, "Worlds, Words and Voices", "Աշխարհներ, բառեր և ձայներ"],
  [5, 3, "Motion and Message", "Շարժում և հաղորդագրություն"],
  [6, 1, "Data Detective", "Տվյալների հետաքննիչ"],
  [6, 2, "Build Without Code I", "Կառուցում առանց կոդի I"],
  [6, 3, "Build Without Code II: Test, Break, Ship", "Կառուցում առանց կոդի II"],
  [7, 1, "From Chatbot to Agent", "Չatbot-ից agent"],
  [7, 2, "AI and Your Future", "AI և քո ապագան"],
];

function defaultQuiz(moduleId, topic) {
  return [
    {
      q_en: `What is the main learning goal of ${topic}?`,
      q_hy: `${topic} - հիմնական ուսումնական նպատակ`,
      options: [
        "Understand, question, and apply AI responsibly",
        "Memorise tool brand names only",
        "Use AI for every answer without checking",
        "Avoid AI completely",
      ],
      correct: 0,
    },
    {
      q_en: "When an AI output looks perfect, what should you do first?",
      q_hy: "Երբ AI-ի արդյունքը կատարյալ է թվում, ինչ անել առաջինը",
      options: [
        "Submit it immediately",
        "Check, verify, or question before using it",
        "Share it publicly without reading",
        "Assume it is always true",
      ],
      correct: 1,
    },
    {
      q_en: "Who is responsible for work you submit after using AI?",
      q_hy: "Ո՞վ է պատասխանատու AI-ով ստեղծած աշխատանքի համար",
      options: ["The AI company", "Your teacher only", "You are", "Nobody"],
      correct: 2,
    },
  ];
}

function seed() {
  const userCount = db.prepare("SELECT COUNT(*) AS c FROM users").get().c;
  if (userCount === 0) {
    const hash = bcrypt.hashSync("admin123", 10);
    db.prepare(
      "INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)"
    ).run("admin@eua.am", hash, "Platform Admin", "admin");
    console.log("Created admin: admin@eua.am / admin123  (change before production!)");
  }

  const modCount = db.prepare("SELECT COUNT(*) AS c FROM modules").get().c;
  if (modCount === 0) {
    const insertMod = db.prepare(
      "INSERT INTO modules (sort_order, title_en, title_hy) VALUES (?, ?, ?)"
    );
    for (const m of modules) insertMod.run(m.sort, m.title_en, m.title_hy);

    const insertLesson = db.prepare(
      "INSERT INTO lessons (module_id, sort_order, title_en, title_hy, youtube_url) VALUES (?, ?, ?, ?, ?)"
    );
    for (const [modId, sort, en, hy] of lessons) {
      insertLesson.run(modId, sort, en, hy, "");
    }

    const insertQ = db.prepare(
      "INSERT INTO quiz_questions (module_id, sort_order, question_en, question_hy, options_json, correct_index) VALUES (?, ?, ?, ?, ?, ?)"
    );

    for (let i = 1; i <= 7; i++) {
      const topic = modules[i - 1].title_en;
      defaultQuiz(i, topic).forEach((q, j) => {
        insertQ.run(i, j + 1, q.q_en, q.q_hy, JSON.stringify(q.options), q.correct);
      });
    }

    console.log("Seeded 7 modules, 20 lessons, 21 quiz questions");
  }

  const insertCourse = db.prepare(`
    INSERT OR IGNORE INTO courses
    (slug, title, audience, status, summary, video_minutes, module_count, lesson_count, exam_count, price_amd, sort_order)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  [
    ["ai-explorers", "AI Explorers", "Young learners", "available", "Understand, question, create, and build with AI.", 507, 7, 20, 7, 35000, 1],
    ["students", "AI for Students", "University students", "coming_soon", "Research, study, and create with academic integrity.", 360, 6, 18, 6, 45000, 2],
    ["educators", "AI for Educators", "Teachers and faculty", "coming_soon", "Design learning, feedback, and classroom AI practice.", 300, 5, 15, 5, 55000, 3],
    ["government", "AI for Government", "Public service professionals", "coming_soon", "Apply AI responsibly in public-sector work.", 270, 5, 14, 5, 65000, 4]
  ].forEach((course) => insertCourse.run(...course));

  db.prepare(`
    UPDATE courses
    SET audience = 'Final-year school and college students',
        summary = 'Explore AI, education pathways, and changing career opportunities.'
    WHERE slug = 'ai-explorers'
  `).run();

  db.prepare(`
    INSERT OR IGNORE INTO promo_codes (code, discount_percent, active)
    VALUES ('EUA100-DEMO', 100, 1)
  `).run();
}

seed();
