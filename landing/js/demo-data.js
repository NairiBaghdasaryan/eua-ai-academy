(function (global) {
  "use strict";

  const DEMO_KEY = "eua-demo";

  function isDemo() {
    return sessionStorage.getItem(DEMO_KEY) === "1";
  }

  function enterDemo() {
    sessionStorage.setItem(DEMO_KEY, "1");
  }

  function exitDemo() {
    sessionStorage.removeItem(DEMO_KEY);
  }

  const modules = [
    {
      id: 1, sort_order: 1,
      title_en: "Understanding AI", title_hy: "Հասկանալ ԱԲ-ը",
      lessons: [
        { id: 1, title_en: "What is Artificial Intelligence?", title_hy: "Ի՞նչ է արհեստական բանականությունը։", embed_url: null, completed: false },
        { id: 2, title_en: "What are Large Language Models?", title_hy: "Ի՞նչ են մեծ լեզվական մոդելները։", embed_url: null, completed: false },
        { id: 3, title_en: "How do Language Models work?", title_hy: "Ինչպե՞ս են աշխատում լեզվական մոդելները։", embed_url: null, completed: false },
        { id: 4, title_en: "Summary", title_hy: "Ամփոփում", embed_url: null, completed: false }
      ],
      all_lessons_done: false, quiz_passed: false
    },
    {
      id: 2, sort_order: 2,
      title_en: "Talking to AI", title_hy: "Խոսել ԱԲ-ի հետ",
      lessons: [
        { id: 5, title_en: "What is Prompt Engineering?", title_hy: "Ի՞նչ է պրոմփթ ինժեներիան։", embed_url: null, completed: false },
        { id: 6, title_en: "How should one talk to AI?", title_hy: "Ինչպե՞ս խոսել ԱԲ-ի հետ։", embed_url: null, completed: false },
        { id: 7, title_en: "Techniques for crafting effective prompts", title_hy: "Արդյունավետ պրոմփթերի տեխնիկաներ", embed_url: null, completed: false },
        { id: 8, title_en: "Common challenges and pitfalls", title_hy: "Սովորական մարտահրավերներ և սխալներ", embed_url: null, completed: false },
        { id: 9, title_en: "Summary", title_hy: "Ամփոփում", embed_url: null, completed: false }
      ],
      all_lessons_done: false, quiz_passed: false
    },
    {
      id: 3, sort_order: 3,
      title_en: "Using AI", title_hy: "Կիրառել ԱԲ-ը",
      lessons: [
        { id: 10, title_en: "Writing and editing", title_hy: "Գրել և խմբագրել", embed_url: null, completed: false },
        { id: 11, title_en: "Ideation and Planning", title_hy: "Գաղափարներ և պլանավորում", embed_url: null, completed: false },
        { id: 12, title_en: "Everyday Activities", title_hy: "Առօրյա գործողություններ", embed_url: null, completed: false },
        { id: 13, title_en: "Create your own prompts", title_hy: "Ստեղծեք ձեր պրոմփթերը", embed_url: null, completed: false }
      ],
      all_lessons_done: false, quiz_passed: false
    },
    {
      id: 4, sort_order: 4,
      title_en: "Creating AI Characters", title_hy: "Ստեղծել ԱԲ կերպարներ",
      lessons: [
        { id: 14, title_en: "What are AI characters?", title_hy: "Ի՞նչ են ԱԲ կերպարները։", embed_url: null, completed: false },
        { id: 15, title_en: "Personality just from text?", title_hy: "Անհատականություն միայն տեքստո՞վ։", embed_url: null, completed: false },
        { id: 16, title_en: "Characters to get your imagination going", title_hy: "Կերպարներ երևակայության համար", embed_url: null, completed: false },
        { id: 17, title_en: "Summary", title_hy: "Ամփոփում", embed_url: null, completed: false }
      ],
      all_lessons_done: false, quiz_passed: false
    },
    {
      id: 5, sort_order: 5,
      title_en: "Choosing AI Tools", title_hy: "Ընտրել ԱԲ գործիքներ",
      lessons: [
        { id: 18, title_en: "Ways to access Large Language Models", title_hy: "Մեծ լեզվական մոդելների հասանելիություն", embed_url: null, completed: false },
        { id: 19, title_en: "Summary", title_hy: "Ամփոփում", embed_url: null, completed: false }
      ],
      all_lessons_done: false, quiz_passed: false
    },
    {
      id: 6, sort_order: 6,
      title_en: "Practical Matters", title_hy: "Գործնական հարցեր",
      lessons: [
        { id: 20, title_en: "Calculating Language Model costs", title_hy: "Լեզվական մոդելների արժեքի հաշվարկ", embed_url: null, completed: false },
        { id: 21, title_en: "Managing your prompts efficiently", title_hy: "Պրոմփթերի արդյունավետ կառավարում", embed_url: null, completed: false },
        { id: 22, title_en: "Summary", title_hy: "Ամփոփում", embed_url: null, completed: false }
      ],
      all_lessons_done: false, quiz_passed: false
    }
  ];

  const quizQuestions = [
    {
      id: 1,
      question_en: "What is the main learning goal of this module?",
      options: [
        "Understand, question, and apply AI responsibly",
        "Memorise tool brand names only",
        "Use AI for every answer without checking",
        "Avoid AI completely"
      ],
      correct_index: 0
    },
    {
      id: 2,
      question_en: "When an AI output looks perfect, what should you do first?",
      options: [
        "Submit it immediately",
        "Check, verify, or question before using it",
        "Share it publicly without reading",
        "Assume it is always true"
      ],
      correct_index: 1
    },
    {
      id: 3,
      question_en: "Who is responsible for work you submit after using AI?",
      options: ["The AI company", "Your teacher only", "You are", "Nobody"],
      correct_index: 2
    }
  ];

  function cloneModules() {
    return JSON.parse(JSON.stringify(modules));
  }

  function profile() {
    return {
      user: {
        id: 0,
        email: "demo@eua.am",
        name: "Demo Student",
        first_name: "Demo",
        last_name: "Student",
        phone: "",
        role: "student"
      },
      courses: [
        {
          slug: "ai-explorers",
          title: "AI Explorers",
          audience: "Final-year school and college students",
          summary: "Explore AI, education pathways, and changing career opportunities.",
          video_minutes: 507,
          module_count: 6,
          lesson_count: 22,
          exam_count: 6,
          course_status: "available",
          enrollment_status: "active",
          enrollment_id: 1,
          payment_status: "discounted",
          amount_amd: 0,
          telegram_url: null
        },
        {
          slug: "students",
          title: "AI for Students",
          audience: "University students",
          summary: "Research, study, and create with academic integrity.",
          video_minutes: 360,
          module_count: 6,
          lesson_count: 18,
          exam_count: 6,
          course_status: "coming_soon",
          enrollment_status: null,
          enrollment_id: null,
          payment_status: null,
          amount_amd: 0,
          telegram_url: null
        },
        {
          slug: "educators",
          title: "AI for Educators",
          audience: "Teachers and faculty",
          summary: "Design learning, feedback, and classroom AI practice.",
          video_minutes: 300,
          module_count: 5,
          lesson_count: 15,
          exam_count: 5,
          course_status: "coming_soon",
          enrollment_status: null,
          enrollment_id: null,
          payment_status: null,
          amount_amd: 0,
          telegram_url: null
        },
        {
          slug: "government",
          title: "AI for Public Sector & Governance",
          audience: "Public service professionals",
          summary: "Apply AI responsibly in public-sector work.",
          video_minutes: 270,
          module_count: 5,
          lesson_count: 14,
          exam_count: 5,
          course_status: "coming_soon",
          enrollment_status: null,
          enrollment_id: null,
          payment_status: null,
          amount_amd: 0,
          telegram_url: null
        }
      ]
    };
  }

  function handle(path, options = {}) {
    const method = (options.method || "GET").toUpperCase();
    const body = options.body ? JSON.parse(options.body) : {};

    if (path === "/api/auth/me") {
      return { user: profile().user };
    }
    if (path === "/api/auth/logout" && method === "POST") {
      exitDemo();
      return { ok: true };
    }
    if (path === "/api/profile" && method === "GET") {
      return profile();
    }
    if (path === "/api/profile" && method === "PUT") {
      return { ok: true, name: `${body.first_name || "Demo"} ${body.last_name || "Student"}`.trim() };
    }
    if (path === "/api/course") {
      return { modules: getCourseState() };
    }
    if (path === "/api/course/access") {
      const state = getCourseState();
      return {
        access: state.map((mod, index) => ({
          module_id: mod.id,
          unlocked: index === 0 || state[index - 1].quiz_passed
        }))
      };
    }
    if (path.startsWith("/api/progress/") && method === "POST") {
      const lessonId = Number(path.split("/").pop());
      const state = getCourseState();
      for (const mod of state) {
        const lesson = mod.lessons.find((item) => item.id === lessonId);
        if (lesson) {
          lesson.completed = true;
          mod.all_lessons_done = mod.lessons.every((item) => item.completed);
        }
      }
      saveCourseState(state);
      return { ok: true };
    }
    if (path.startsWith("/api/quiz/") && path.endsWith("/submit") && method === "POST") {
      const moduleId = Number(path.split("/")[3]);
      let correct = 0;
      quizQuestions.forEach((q) => {
        if (body.answers && Number(body.answers[q.id]) === q.correct_index) correct += 1;
      });
      const total = quizQuestions.length;
      const score = correct / total;
      const passed = score >= 0.7;
      if (passed) {
        const state = getCourseState();
        const mod = state.find((item) => item.id === moduleId);
        if (mod) mod.quiz_passed = true;
        saveCourseState(state);
      }
      return { passed, score, correct, total };
    }
    if (path.startsWith("/api/quiz/")) {
      return { questions: quizQuestions.map(({ correct_index, ...q }) => q) };
    }
    if (path === "/api/enrollments" && method === "POST") {
      return { ok: true, payment_required: false };
    }

    const error = new Error("Demo route not found");
    error.status = 404;
    throw error;
  }

  function getCourseState() {
    const raw = sessionStorage.getItem("eua-demo-course");
    if (raw) {
      try { return JSON.parse(raw); } catch (_error) { /* fall through */ }
    }
    const state = cloneModules();
    saveCourseState(state);
    return state;
  }

  function saveCourseState(state) {
    sessionStorage.setItem("eua-demo-course", JSON.stringify(state));
  }

  global.EuaDemo = { DEMO_KEY, isDemo, enterDemo, exitDemo, handle, profile };
})(window);
