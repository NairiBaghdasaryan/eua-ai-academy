(function () {
  "use strict";

  const LANG_KEY = "eua-ai-language";

  function t(key) {
    const lang = localStorage.getItem(LANG_KEY) || "hy";
    return translations[lang]?.[key] ?? translations.en[key] ?? key;
  }

  async function api(path, opts = {}) {
    const res = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      ...opts,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  let user = null;
  let courseData = [];
  let accessMap = {};
  let flatLessons = [];
  let currentLessonId = null;

  const els = {
    barHint: document.getElementById("course-access-hint"),
    barCta: document.getElementById("course-access-cta"),
    progressPill: document.getElementById("course-progress-pill"),
    headerAuth: document.getElementById("header-auth"),
    playerEmpty: document.getElementById("player-empty"),
    playerActive: document.getElementById("player-active"),
    playerQuiz: document.getElementById("player-quiz"),
    playerModule: document.getElementById("player-module"),
    playerLessonNum: document.getElementById("player-lesson-num"),
    playerTitle: document.getElementById("player-title"),
    playerVideo: document.getElementById("player-video"),
    playerProgressFill: document.getElementById("player-progress-fill"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
  };

  function buildFlatLessons() {
    flatLessons = [];
    let n = 0;
    for (const mod of courseData) {
      for (const lesson of mod.lessons) {
        n += 1;
        flatLessons.push({
          ...lesson,
          globalNumber: n,
          module: mod,
        });
      }
    }
  }

  function lessonTitle(lesson) {
    const lang = localStorage.getItem(LANG_KEY) || "hy";
    return lang === "hy" && lesson.title_hy ? lesson.title_hy : lesson.title_en;
  }

  function moduleTitle(mod) {
    const lang = localStorage.getItem(LANG_KEY) || "hy";
    return lang === "hy" && mod.title_hy ? mod.title_hy : mod.title_en;
  }

  function updateAuthUI() {
    if (user) {
      if (els.barHint) els.barHint.textContent = t("course.bar.hintLoggedIn");
      if (els.barCta) {
        els.barCta.textContent = user.name;
        els.barCta.href = "#curriculum";
        els.barCta.classList.remove("btn-primary");
        els.barCta.classList.add("btn-secondary", "player-btn-light");
      }
      if (els.headerAuth) {
        els.headerAuth.textContent = t("nav.logout");
        els.headerAuth.href = "#";
        els.headerAuth.onclick = async (e) => {
          e.preventDefault();
          await api("/api/auth/logout", { method: "POST" });
          window.location.reload();
        };
      }
    } else {
      if (els.barHint) els.barHint.textContent = t("course.bar.hint");
      if (els.headerAuth) {
        els.headerAuth.textContent = t("nav.login");
        els.headerAuth.href = "/login.html";
        els.headerAuth.onclick = null;
      }
    }
  }

  function updateProgressUI() {
    if (!user || !flatLessons.length) return;
    const done = flatLessons.filter((l) => l.completed).length;
    const pct = Math.round((done / flatLessons.length) * 100);
    if (els.progressPill) {
      els.progressPill.textContent = `${pct}%`;
      els.progressPill.classList.remove("hidden");
    }
    if (els.playerProgressFill) {
      els.playerProgressFill.style.width = `${pct}%`;
    }
  }

  function enhanceWatchButtons() {
    document.querySelectorAll(".btn-lesson-watch").forEach((btn) => {
      const num = parseInt(btn.dataset.lessonNumber, 10);
      const lesson = flatLessons.find((l) => l.globalNumber === num);

      if (!user) {
        btn.disabled = false;
        btn.onclick = () => {
          window.location.href = `/login.html?return=${encodeURIComponent("/#curriculum")}`;
        };
        return;
      }

      if (!lesson) return;

      const unlocked = accessMap[lesson.module.id];
      btn.disabled = !unlocked;

      if (lesson.completed) {
        btn.textContent = t("curriculum.done");
        btn.classList.add("is-done");
      } else {
        btn.textContent = t("curriculum.watch");
      }

      if (!unlocked) {
        btn.textContent = t("curriculum.locked");
        return;
      }

      btn.onclick = () => {
        openLesson(lesson.id);
        document.getElementById("course-player-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      };
    });
  }

  function showPanel(mode) {
    els.playerEmpty?.classList.toggle("hidden", mode !== "empty");
    els.playerActive?.classList.toggle("hidden", mode !== "lesson");
    els.playerQuiz?.classList.toggle("hidden", mode !== "quiz");
  }

  function openLesson(lessonId) {
    currentLessonId = lessonId;
    const lesson = flatLessons.find((l) => l.id === lessonId);
    if (!lesson || !accessMap[lesson.module.id]) return;

    showPanel("lesson");

    if (els.playerModule) els.playerModule.textContent = moduleTitle(lesson.module);
    if (els.playerLessonNum) {
      els.playerLessonNum.textContent = `${t("curriculum.lesson")} ${lesson.globalNumber}`;
    }
    if (els.playerTitle) els.playerTitle.textContent = lessonTitle(lesson);

    if (els.playerVideo) {
      els.playerVideo.innerHTML = lesson.embed_url
        ? `<iframe src="${lesson.embed_url}" title="${lesson.title_en}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        : `<div class="player-video-empty"><span>▶</span><p>${t("course.player.noVideo")}</p></div>`;
    }

    const idx = flatLessons.findIndex((l) => l.id === lessonId);
    if (els.btnPrev) els.btnPrev.disabled = idx <= 0;
    if (els.btnNext) {
      const isLast = idx === flatLessons.length - 1;
      const isModuleLast = lesson.sort_order === lesson.module.lessons.length;
      els.btnNext.textContent = isModuleLast && !isLast ? t("course.player.finish") : t("course.player.next");
    }

    document.querySelectorAll(".lesson-card").forEach((card) => card.classList.remove("is-playing"));
    document.querySelector(`.btn-lesson-watch[data-lesson-number="${lesson.globalNumber}"]`)?.closest(".lesson-card")?.classList.add("is-playing");
  }

  async function markCompleteAndAdvance() {
    if (!currentLessonId) return;
    await api(`/api/progress/${currentLessonId}`, { method: "POST" });

    const lesson = flatLessons.find((l) => l.id === currentLessonId);
    if (lesson) {
      lesson.completed = true;
      lesson.module.lessons.find((l) => l.id === currentLessonId).completed = true;
      lesson.module.all_lessons_done = lesson.module.lessons.every((l) => l.completed);
    }

    updateProgressUI();
    enhanceWatchButtons();

    const idx = flatLessons.findIndex((l) => l.id === currentLessonId);
    const isModuleLast =
      lesson && lesson.sort_order === lesson.module.lessons.length;

    if (isModuleLast && lesson.module.all_lessons_done && !lesson.module.quiz_passed) {
      openQuiz(lesson.module.id);
      return;
    }

    if (idx < flatLessons.length - 1) {
      openLesson(flatLessons[idx + 1].id);
    }
  }

  async function openQuiz(moduleId) {
    showPanel("quiz");
    const mod = courseData.find((m) => m.id === moduleId);
    const { questions } = await api(`/api/quiz/${moduleId}`);

    if (!els.playerQuiz) return;

    els.playerQuiz.innerHTML = `
      <div class="quiz-panel">
        <p class="eyebrow">${moduleTitle(mod)}</p>
        <h3>${t("course.quiz.title")}</h3>
        <p class="quiz-intro">${t("course.quiz.intro")}</p>
        <form id="module-quiz-form" class="quiz-form">
          ${questions
            .map(
              (q, qi) => `
            <fieldset class="quiz-field">
              <legend>${qi + 1}. ${localStorage.getItem(LANG_KEY) === "hy" ? q.question_hy : q.question_en}</legend>
              ${q.options
                .map(
                  (opt, oi) => `
                <label class="quiz-option">
                  <input type="radio" name="q${q.id}" value="${oi}" required>
                  <span>${opt}</span>
                </label>`
                )
                .join("")}
            </fieldset>`
            )
            .join("")}
          <button type="submit" class="btn btn-primary">${t("course.quiz.submit")}</button>
          <div id="quiz-result-msg" class="quiz-result-msg"></div>
        </form>
      </div>
    `;

    document.getElementById("module-quiz-form").addEventListener("submit", async (e) => {
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
      const msg = document.getElementById("quiz-result-msg");
      msg.className = `quiz-result-msg ${result.passed ? "pass" : "fail"}`;
      msg.textContent = result.passed
        ? `${t("course.quiz.pass")} ${Math.round(result.score * 100)}%`
        : `${t("course.quiz.fail")} (${Math.round(result.score * 100)}%)`;

      if (result.passed) {
        mod.quiz_passed = true;
        const nextMod = courseData.find((m) => m.sort_order === mod.sort_order + 1);
        if (nextMod) accessMap[nextMod.id] = true;
        enhanceWatchButtons();
        setTimeout(() => {
          const next = flatLessons.find((l) => l.module.id === nextMod?.id);
          if (next) openLesson(next.id);
          else showPanel("empty");
        }, 1200);
      }
    });
  }

  els.btnPrev?.addEventListener("click", () => {
    const idx = flatLessons.findIndex((l) => l.id === currentLessonId);
    if (idx > 0) openLesson(flatLessons[idx - 1].id);
  });

  els.btnNext?.addEventListener("click", () => markCompleteAndAdvance());

  async function initCourse() {
    try {
      const me = await api("/api/auth/me");
      user = me.user;
    } catch {
      user = null;
    }

    updateAuthUI();

    if (!user || user.role === "admin") return;

    const [{ modules }, { access }] = await Promise.all([
      api("/api/course"),
      api("/api/course/access"),
    ]);

    courseData = modules;
    accessMap = Object.fromEntries(access.map((a) => [a.module_id, a.unlocked]));
    buildFlatLessons();
    updateProgressUI();
    enhanceWatchButtons();

    const params = new URLSearchParams(window.location.search);
    const lessonParam = params.get("lesson");
    if (lessonParam) {
      const id = parseInt(lessonParam, 10);
      if (flatLessons.some((l) => l.id === id)) openLesson(id);
    }
  }

  document.addEventListener("eua:page-rendered", () => {
    enhanceWatchButtons();
  });

  initCourse();
})();
