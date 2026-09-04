(function (global) {
  "use strict";

  const DEMO_KEY = "eua-demo";
  const COURSE_KEY = "eua-demo-course-v3";
  const catalog = global.EuaCourseCatalog;

  function isDemo() { return sessionStorage.getItem(DEMO_KEY) === "1"; }
  function enterDemo() { sessionStorage.setItem(DEMO_KEY, "1"); }
  function exitDemo() { sessionStorage.removeItem(DEMO_KEY); }

  function baseModules() {
    return catalog.modules.map((module) => ({
      id: module.id,
      sort_order: module.sort_order,
      title_en: module.title_en,
      title_hy: module.title_hy,
      lessons: module.lessons.map((item) => ({
        id: item.id,
        sort_order: item.sort_order,
        title_en: item.title_en,
        title_hy: item.title_hy,
        embed_url: null,
        completed: false
      })),
      all_lessons_done: false,
      quiz_passed: false
    }));
  }

  function quizFor(moduleId) {
    const module = catalog.modules.find((item) => item.id === Number(moduleId));
    if (!module) return [];
    const source = [
      {
        question_en: module.quiz_focus_en,
        question_hy: module.quiz_focus_hy,
        options_en: module.quiz_options_en,
        options_hy: module.quiz_options_hy,
        correct_index: module.quiz_correct
      },
      ...catalog.universalQuiz
    ];
    return source.map((question, index) => ({ id: module.id * 10 + index + 1, ...question }));
  }

  function getCourseState() {
    const raw = sessionStorage.getItem(COURSE_KEY);
    if (raw) {
      try { return JSON.parse(raw); } catch (_error) { /* use a fresh state */ }
    }
    const state = baseModules();
    saveCourseState(state);
    return state;
  }

  function saveCourseState(state) {
    sessionStorage.setItem(COURSE_KEY, JSON.stringify(state));
  }

  function profile() {
    return {
      user: { id: 0, email: "demo@eua.am", name: "Demo Student", first_name: "Demo", last_name: "Student", phone: "", role: "student" },
      courses: [
        {
          slug: "ai-explorers", title: "AI Explorers", audience: "Final-year school and college students",
          summary: "Understand, verify, and build with modern AI through bilingual lessons and practical challenges.",
          video_minutes: 0, module_count: catalog.modules.length, lesson_count: catalog.lesson_count, exam_count: catalog.modules.length,
          course_status: "available", enrollment_status: "active", enrollment_id: 1, payment_status: "discounted", amount_amd: 0, telegram_url: null
        },
        { slug: "students", title: "AI for Students", audience: "University students", summary: "Research, study, and create with academic integrity.", video_minutes: 360, module_count: 6, lesson_count: 18, exam_count: 6, course_status: "coming_soon", enrollment_status: null, enrollment_id: null, payment_status: null, amount_amd: 0, telegram_url: null },
        { slug: "educators", title: "AI for Educators", audience: "Teachers and faculty", summary: "Design learning, feedback, and classroom AI practice.", video_minutes: 300, module_count: 5, lesson_count: 15, exam_count: 5, course_status: "coming_soon", enrollment_status: null, enrollment_id: null, payment_status: null, amount_amd: 0, telegram_url: null },
        { slug: "government", title: "AI for Public Sector & Governance", audience: "Public service professionals", summary: "Apply AI responsibly in public-sector work.", video_minutes: 270, module_count: 5, lesson_count: 14, exam_count: 5, course_status: "coming_soon", enrollment_status: null, enrollment_id: null, payment_status: null, amount_amd: 0, telegram_url: null }
      ]
    };
  }

  function handle(path, options = {}) {
    const method = (options.method || "GET").toUpperCase();
    const body = options.body ? JSON.parse(options.body) : {};

    if (path === "/api/auth/me") return { user: profile().user };
    if (path === "/api/auth/logout" && method === "POST") { exitDemo(); return { ok: true }; }
    if (path === "/api/profile" && method === "GET") return profile();
    if (path === "/api/profile" && method === "PUT") return { ok: true, name: `${body.first_name || "Demo"} ${body.last_name || "Student"}`.trim() };
    if (path === "/api/course") return { modules: getCourseState() };
    if (path === "/api/course/access") {
      const state = getCourseState();
      return { access: state.map((module, index) => ({ module_id: module.id, unlocked: index === 0 || state[index - 1].quiz_passed })) };
    }
    if (path.startsWith("/api/progress/") && method === "POST") {
      const lessonId = Number(path.split("/").pop());
      const state = getCourseState();
      state.forEach((module) => {
        const item = module.lessons.find((lesson) => lesson.id === lessonId);
        if (item) {
          item.completed = true;
          module.all_lessons_done = module.lessons.every((lesson) => lesson.completed);
        }
      });
      saveCourseState(state);
      return { ok: true };
    }
    if (path.startsWith("/api/quiz/") && path.endsWith("/submit") && method === "POST") {
      const moduleId = Number(path.split("/")[3]);
      const questions = quizFor(moduleId);
      const correct = questions.reduce((total, question) => total + (Number(body.answers?.[question.id]) === question.correct_index ? 1 : 0), 0);
      const score = questions.length ? correct / questions.length : 0;
      const passed = score >= 0.7;
      if (passed) {
        const state = getCourseState();
        const module = state.find((item) => item.id === moduleId);
        if (module) module.quiz_passed = true;
        saveCourseState(state);
      }
      return { passed, score, correct, total: questions.length };
    }
    if (path.startsWith("/api/quiz/")) {
      const moduleId = Number(path.split("/")[3]);
      return { questions: quizFor(moduleId).map(({ correct_index, ...question }) => question) };
    }
    if (path === "/api/enrollments" && method === "POST") return { ok: true, payment_required: false };

    const error = new Error("Demo route not found");
    error.status = 404;
    throw error;
  }

  global.EuaDemo = { DEMO_KEY, isDemo, enterDemo, exitDemo, handle, profile };
})(window);
