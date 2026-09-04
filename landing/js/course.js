const language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
const t = language === "hy" ? {
  academy: "← Իմ ակադեմիան", logout: "Ելք", loading: "Դասընթացը բեռնվում է…", course: "ԱԲ բացահայտողներ", courseMeta: "22 դաս · սլայդներ և տեքստ", quizPassed: "✓ Մոդուլի թեստը հանձնված է", quiz: "→ Մոդուլի թեստ", previous: "← Նախորդ դաս", next: "Հաջորդ դաս →", finish: "Ավարտել մոդուլը", noQuiz: "Այս մոդուլի համար թեստ դեռ չկա։", quizTitle: "Մոդուլի թեստ", quizIntro: "Հաջորդ մոդուլը բացելու համար հավաքեք առնվազն 70%։", submit: "Ուղարկել թեստը", passed: "Հանձնված է", unlocked: "Հաջորդ մոդուլը բացված է։", notYet: "Դեռ ոչ", need: "Պետք է հավաքեք 70%։ Փորձեք կրկին։", completed: "դասն ավարտված է", of: "-ից", failed: "Հարցումը չհաջողվեց",
  slideOf: "Սլայդ", slidePrev: "← Նախորդ սլայդ", slideNext: "Հաջորդ սլայդ →", readTitle: "Կարդալ և կիրառել", practiceTitle: "Փորձեք", takeawayTitle: "Հիմնական եզրակացություն", markComplete: "Նշել որպես ավարտված և շարունակել"
} : {
  academy: "← My academy", logout: "Log out", loading: "Loading course…", course: "EUA AI Explorers", courseMeta: "22 lessons · slides & text", quizPassed: "✓ Module quiz passed", quiz: "→ Module quiz", previous: "← Previous lesson", next: "Next lesson →", finish: "Finish module", noQuiz: "No quiz for this module yet.", quizTitle: "Module quiz", quizIntro: "Pass with 70% or higher to unlock the next module.", submit: "Submit quiz", passed: "Passed", unlocked: "Next module unlocked.", notYet: "Not yet", need: "You need 70%. Try again.", completed: "lessons completed", of: "of", failed: "Request failed",
  slideOf: "Slide", slidePrev: "← Previous slide", slideNext: "Next slide →", readTitle: "Read and apply", practiceTitle: "Try this", takeawayTitle: "Key takeaway", markComplete: "Mark complete and continue"
};
const optionHy = {
  "Understand, question, and apply AI responsibly": "Հասկանալ, հարցադրել և պատասխանատու կերպով կիրառել ԱԲ-ը",
  "Memorise tool brand names only": "Միայն անգիր սովորել գործիքների անունները",
  "Use AI for every answer without checking": "ԱԲ-ի բոլոր պատասխաններն օգտագործել առանց ստուգելու",
  "Avoid AI completely": "Ամբողջությամբ խուսափել ԱԲ-ից",
  "Submit it immediately": "Անմիջապես հանձնել",
  "Check, verify, or question before using it": "Օգտագործելուց առաջ ստուգել, հաստատել կամ հարցադրել",
  "Share it publicly without reading": "Հանրայնացնել՝ առանց կարդալու",
  "Assume it is always true": "Ենթադրել, որ այն միշտ ճիշտ է",
  "The AI company": "ԱԲ ընկերությունը",
  "Your teacher only": "Միայն ձեր դասավանդողը",
  "You are": "Դուք",
  "Nobody": "Ոչ ոք"
};
const questionHy = [
  "Ո՞րն է այս մոդուլի հիմնական ուսումնական նպատակը։",
  "Երբ ԱԲ-ի արդյունքը կատարյալ է թվում, ի՞նչ պետք է անել առաջին հերթին։",
  "Ո՞վ է պատասխանատու ԱԲ-ի օգնությամբ ձեր ներկայացրած աշխատանքի համար։"
];
const armenianize = (value) => String(value || "").replace(/\bAI\b/g, "ԱԲ");
document.documentElement.lang = language;
document.title = language === "hy" ? "ԱԲ բացահայտողներ - Դասընթաց" : "EUA AI Explorers - Course";
document.getElementById("academy-link").textContent = t.academy;
document.getElementById("btn-logout").textContent = t.logout;
document.getElementById("course-loading").textContent = t.loading;

async function api(path, opts = {}) {
  if (window.EuaDemo?.isDemo()) return window.EuaDemo.handle(path, opts);
  try {
    const res = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      ...opts,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      window.EuaDemo?.enterDemo();
      return window.EuaDemo.handle(path, opts);
    }
    return data;
  } catch (_error) {
    window.EuaDemo?.enterDemo();
    return window.EuaDemo.handle(path, opts);
  }
}

let courseData = [];
let accessMap = {};
let currentLesson = null;
let slideIndex = 0;

function escapeHtml(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function lessonPayload(lessonId) {
  return window.EuaLessonContent?.get(lessonId, language) || {
    slides: [{ title: language === "hy" ? "Բովանդակությունը շուտով" : "Content coming soon", points: [] }],
    paragraphs: [language === "hy" ? "Այս դասի ընթերցանությունը շուտով կավելացվի։" : "Reading content for this lesson will be added soon."],
    practice: "",
    takeaway: ""
  };
}

async function init() {
  if (!window.EuaDemo?.isDemo()) window.EuaDemo?.enterDemo();
  const { user } = await api("/api/auth/me");
  if (!user) {
    window.location.href = "login.html";
    return;
  }
  document.getElementById("user-name").textContent = user.name;

  const [{ modules }, { access }] = await Promise.all([
    api("/api/course"),
    api("/api/course/access"),
  ]);
  courseData = modules;
  accessMap = Object.fromEntries(access.map((a) => [a.module_id, a.unlocked]));

  renderSidebar();
  pickInitialLesson();
  updateProgress();
}

function allLessons() {
  return courseData.flatMap((m) => m.lessons.map((l) => ({ ...l, module: m })));
}

function pickInitialLesson() {
  const flat = allLessons();
  const next = flat.find((l) => accessMap[l.module.id] && !l.completed) || flat[0];
  if (next) openLesson(next.id);
}

function renderSidebar() {
  const sb = document.getElementById("sidebar");
  sb.innerHTML = `<div class="sidebar-header"><h1>${t.course}</h1><p>${t.courseMeta}</p></div>`;

  for (const mod of courseData) {
    const unlocked = accessMap[mod.id];
    const block = document.createElement("div");
    block.className = "module-block";
    block.innerHTML = `<div class="module-title ${unlocked ? "" : "locked"}">${language === "hy" ? armenianize(mod.title_hy) : mod.title_en}</div>`;

    for (const lesson of mod.lessons) {
      const a = document.createElement("div");
      a.className = `lesson-link ${lesson.completed ? "done" : ""} ${unlocked ? "" : "locked"}`;
      a.dataset.id = lesson.id;
      a.textContent = language === "hy" ? armenianize(lesson.title_hy) : lesson.title_en;
      if (unlocked) a.addEventListener("click", () => openLesson(lesson.id));
      block.appendChild(a);
    }

    if (mod.all_lessons_done || mod.quiz_passed) {
      const q = document.createElement("div");
      q.className = "quiz-link";
      q.textContent = mod.quiz_passed ? t.quizPassed : t.quiz;
      if (unlocked && mod.all_lessons_done) {
        q.addEventListener("click", () => openQuiz(mod.id));
      }
      block.appendChild(q);
    }

    sb.appendChild(block);
  }
}

function openLesson(lessonId) {
  const flat = allLessons();
  currentLesson = flat.find((l) => l.id === lessonId);
  if (!currentLesson || !accessMap[currentLesson.module.id]) return;
  slideIndex = 0;

  document.querySelectorAll(".lesson-link").forEach((el) => {
    el.classList.toggle("active", parseInt(el.dataset.id, 10) === lessonId);
  });

  renderLessonView();
}

function renderLessonView() {
  const { module } = currentLesson;
  const payload = lessonPayload(currentLesson.id);
  const slides = payload.slides || [];
  const slide = slides[Math.min(slideIndex, Math.max(slides.length - 1, 0))] || { title: "", points: [] };
  const main = document.getElementById("main-content");

  main.innerHTML = `
    <p class="module-label">${language === "hy" ? armenianize(module.title_hy) : module.title_en}</p>
    <h2 class="lesson-title">${language === "hy" ? armenianize(currentLesson.title_hy) : currentLesson.title_en}</h2>

    <section class="lesson-stage" aria-label="Lesson slides">
      <div class="slide-card">
        <div class="slide-meta">${t.slideOf} ${slides.length ? slideIndex + 1 : 0} / ${slides.length}</div>
        <h3>${escapeHtml(slide.title)}</h3>
        <ul>${(slide.points || []).map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      </div>
      <div class="slide-nav">
        <button class="btn btn-outline" type="button" id="btn-slide-prev" ${slideIndex <= 0 ? "disabled" : ""}>${t.slidePrev}</button>
        <button class="btn btn-secondary" type="button" id="btn-slide-next" ${slideIndex >= slides.length - 1 ? "disabled" : ""}>${t.slideNext}</button>
      </div>
      <div class="slide-dots" aria-hidden="true">
        ${slides.map((_, index) => `<span class="${index === slideIndex ? "active" : ""}"></span>`).join("")}
      </div>
    </section>

    <section class="lesson-reading">
      <h3>${t.readTitle}</h3>
      ${(payload.paragraphs || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      ${payload.practice ? `<div class="lesson-callout practice"><strong>${t.practiceTitle}</strong><p>${escapeHtml(payload.practice)}</p></div>` : ""}
      ${payload.takeaway ? `<div class="lesson-callout takeaway"><strong>${t.takeawayTitle}</strong><p>${escapeHtml(payload.takeaway)}</p></div>` : ""}
    </section>

    <div class="nav-row">
      <button class="btn btn-outline" id="btn-prev" ${prevLesson() ? "" : "disabled"}>${t.previous}</button>
      <button class="btn btn-primary" id="btn-next">${nextLesson() ? t.markComplete : t.finish}</button>
    </div>
  `;

  document.getElementById("btn-slide-prev")?.addEventListener("click", () => {
    if (slideIndex <= 0) return;
    slideIndex -= 1;
    renderLessonView();
  });
  document.getElementById("btn-slide-next")?.addEventListener("click", () => {
    if (slideIndex >= slides.length - 1) return;
    slideIndex += 1;
    renderLessonView();
  });

  document.getElementById("btn-prev").addEventListener("click", () => {
    const p = prevLesson();
    if (p) openLesson(p.id);
  });

  document.getElementById("btn-next").addEventListener("click", async () => {
    const lessonId = currentLesson.id;
    await api(`/api/progress/${lessonId}`, { method: "POST" });
    currentLesson.completed = true;
    const mod = courseData.find((m) => m.id === module.id);
    const les = mod.lessons.find((l) => l.id === lessonId);
    les.completed = true;
    mod.all_lessons_done = mod.lessons.every((l) => l.completed);
    const [{ modules }, { access }] = await Promise.all([api("/api/course"), api("/api/course/access")]);
    courseData = modules;
    accessMap = Object.fromEntries(access.map((a) => [a.module_id, a.unlocked]));
    renderSidebar();
    document.querySelector(`.lesson-link[data-id="${lessonId}"]`)?.classList.add("done", "active");
    updateProgress();

    const n = nextLesson();
    if (n) openLesson(n.id);
    else if (mod.all_lessons_done) openQuiz(module.id);
  });
}

function prevLesson() {
  const flat = allLessons();
  const i = flat.findIndex((l) => l.id === currentLesson.id);
  return i > 0 ? flat[i - 1] : null;
}

function nextLesson() {
  const flat = allLessons();
  const i = flat.findIndex((l) => l.id === currentLesson.id);
  return i < flat.length - 1 ? flat[i + 1] : null;
}

async function openQuiz(moduleId) {
  const mod = courseData.find((m) => m.id === moduleId);
  const { questions } = await api(`/api/quiz/${moduleId}`);
  const main = document.getElementById("main-content");

  if (!questions.length) {
    main.innerHTML = `<p>${t.noQuiz}</p>`;
    return;
  }

  main.innerHTML = `
    <p class="module-label">${language === "hy" ? armenianize(mod.title_hy) : mod.title_en}</p>
    <h2 class="lesson-title">${t.quizTitle}</h2>
    <p style="color:var(--muted);margin-bottom:1.5rem">${t.quizIntro}</p>
    <form class="quiz-box" id="quiz-form">
      ${questions
        .map(
          (q, qi) => `
        <div class="quiz-question" data-qid="${q.id}">
          <h3>${qi + 1}. ${language === "hy" ? questionHy[qi] : q.question_en}</h3>
          ${q.options
            .map(
              (opt, oi) => `
            <label class="quiz-option">
              <input type="radio" name="q${q.id}" value="${oi}" required>
              <span>${language === "hy" ? (optionHy[opt] || opt) : opt}</span>
            </label>`
            )
            .join("")}
        </div>`
        )
        .join("")}
      <button type="submit" class="btn btn-primary">${t.submit}</button>
      <div id="quiz-result"></div>
    </form>
  `;

  document.getElementById("quiz-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const answers = {};
    questions.forEach((q) => {
      const sel = document.querySelector(`input[name="q${q.id}"]:checked`);
      if (sel) answers[q.id] = parseInt(sel.value, 10);
    });
    const result = await api(`/api/quiz/${moduleId}/submit`, {
      method: "POST",
      body: JSON.stringify({ answers }),
    });
    const el = document.getElementById("quiz-result");
    el.className = `quiz-result ${result.passed ? "pass" : "fail"}`;
    el.textContent = result.passed
      ? `${t.passed}! ${Math.round(result.score * 100)}% (${result.correct}/${result.total}). ${t.unlocked}`
      : `${t.notYet} - ${Math.round(result.score * 100)}%. ${t.need}`;
    if (result.passed) {
      const [{ modules }, { access }] = await Promise.all([api("/api/course"), api("/api/course/access")]);
      courseData = modules;
      accessMap = Object.fromEntries(access.map((a) => [a.module_id, a.unlocked]));
      renderSidebar();
    }
  });
}

function updateProgress() {
  const flat = allLessons();
  const done = flat.filter((l) => l.completed).length;
  const pct = flat.length ? Math.round((done / flat.length) * 100) : 0;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").textContent = language === "hy"
    ? `${flat.length}${t.of} ${done} ${t.completed} (${pct}%)`
    : `${done} ${t.of} ${flat.length} ${t.completed} (${pct}%)`;
}

document.getElementById("btn-logout").addEventListener("click", async () => {
  await api("/api/auth/logout", { method: "POST" });
  window.EuaDemo?.exitDemo();
  window.location.href = "login.html";
});

init().catch(() => {
  window.location.href = "login.html";
});
