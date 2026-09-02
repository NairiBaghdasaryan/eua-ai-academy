(function () {
  "use strict";

  const STORAGE_KEY = "eua-ai-language";
  const supportedLanguages = ["hy", "en"];

  function storedLanguage() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return supportedLanguages.includes(value) ? value : "hy";
    } catch (_error) {
      return "hy";
    }
  }

  let currentLanguage = storedLanguage();

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function translate(key) {
    return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLanguage;
    document.title = translate("meta.title");

    const description = document.getElementById("meta-description");
    if (description) description.setAttribute("content", translate("meta.description"));

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = translate(element.dataset.i18n);
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const isActive = button.dataset.lang === currentLanguage;
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function renderProgrammes() {
    const container = document.getElementById("programme-grid");
    if (!container) return;

    container.innerHTML = programmeData[currentLanguage]
      .map((programme) => `
        <article class="programme-card${programme.featured ? " featured" : ""}">
          <span class="card-status">${escapeHtml(programme.status)}</span>
          <h3>${escapeHtml(programme.title)}</h3>
          <p>${escapeHtml(programme.description)}</p>
        </article>
      `)
      .join("");
  }

  function renderProjects() {
    const container = document.getElementById("project-grid");
    if (!container) return;

    container.innerHTML = projectData[currentLanguage]
      .map((project, index) => `
        <article class="project-card">
          <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
        </article>
      `)
      .join("");
  }

  function renderModules() {
    const container = document.getElementById("module-list");
    if (!container) return;

    container.innerHTML = modules[currentLanguage]
      .map((module, index) => `
        <details class="module-item"${index === 0 ? " open" : ""}>
          <summary>
            <span class="module-summary">
              <span>${escapeHtml(module.title)}</span>
              <small>${module.totalMinutes} ${escapeHtml(translate("curriculum.video"))} · ${module.lessons.length} ${escapeHtml(translate("curriculum.lessonsUnit"))} · ${escapeHtml(module.badge)}</small>
            </span>
          </summary>
          <div class="module-lessons">
            <p class="module-goal"><strong>${escapeHtml(translate("curriculum.moduleGoal"))}:</strong> ${escapeHtml(module.goal)}</p>
            <ol class="lesson-list">${module.lessons.map((lesson) => `
              <li class="lesson-card">
                <article>
                  <div class="lesson-header">
                    <div>
                      <span class="lesson-number">${escapeHtml(translate("curriculum.lesson"))} ${lesson.number}</span>
                      <h3>${escapeHtml(lesson.title)}</h3>
                    </div>
                    <div class="lesson-timing">
                      <span>${lesson.videoMinutes} ${escapeHtml(translate("curriculum.video"))}</span>
                      <span>${lesson.practiceMinutes} ${escapeHtml(translate("curriculum.practice"))}</span>
                    </div>
                  </div>
                  <p class="lesson-outcome"><strong>${escapeHtml(translate("curriculum.outcome"))}:</strong> ${escapeHtml(lesson.outcome)}</p>
                  <div class="lesson-actions">
                    <button type="button" class="btn btn-primary btn-lesson-watch" data-lesson-number="${lesson.number}" disabled>
                      ${escapeHtml(translate("curriculum.watch"))}
                    </button>
                  </div>
                  <div class="lesson-detail-grid">
                    <div>
                      <h4>${escapeHtml(translate("curriculum.chapters"))}</h4>
                      <ul class="lesson-chapters">${lesson.chapters.map((chapter) => `<li>${escapeHtml(chapter)}</li>`).join("")}</ul>
                    </div>
                    <div class="lesson-assignment">
                      <h4>${escapeHtml(translate("curriculum.assignment"))}</h4>
                      <p>${escapeHtml(lesson.assignment)}</p>
                    </div>
                  </div>
                </article>
              </li>
            `).join("")}</ol>
          </div>
        </details>
      `)
      .join("");
  }

  function renderSteps() {
    const container = document.getElementById("step-grid");
    if (!container) return;

    container.innerHTML = lessonSteps[currentLanguage]
      .map((step, index) => `
        <article class="step-card">
          <span>0${index + 1}</span>
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.description)}</p>
        </article>
      `)
      .join("");
  }

  function renderCredentials() {
    const container = document.getElementById("credential-grid");
    if (!container) return;

    container.innerHTML = credentials[currentLanguage]
      .map((credential) => `
        <article class="credential-card${credential.featured ? " featured" : ""}">
          <span class="credential-level">${escapeHtml(credential.level)}</span>
          <h3>${escapeHtml(credential.title)}</h3>
          <ul>${credential.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
        </article>
      `)
      .join("");
  }

  function renderBadges() {
    const container = document.getElementById("badge-grid");
    if (!container) return;

    container.innerHTML = badges
      .map((badge, index) => `
        <div class="badge-card">
          <span class="badge-mark">${index + 1}</span>
          <strong>${escapeHtml(badge)}</strong>
        </div>
      `)
      .join("");
  }

  function renderSafety() {
    const container = document.getElementById("safety-grid");
    if (!container) return;

    container.innerHTML = safetyData[currentLanguage]
      .map((item) => `
        <article class="safety-card">
          <span>${escapeHtml(item.code)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `)
      .join("");
  }

  function renderLaunch() {
    const container = document.getElementById("launch-grid");
    if (!container) return;

    container.innerHTML = launchPhases[currentLanguage]
      .map((phase) => `
        <article class="launch-card">
          <span class="launch-range">${escapeHtml(phase.range)}</span>
          <h3>${escapeHtml(phase.title)}</h3>
          <p>${escapeHtml(phase.description)}</p>
        </article>
      `)
      .join("");
  }

  function renderFaqs() {
    const container = document.getElementById("faq-list");
    if (!container) return;

    container.innerHTML = faqs[currentLanguage]
      .map((item) => `
        <details class="faq-item">
          <summary>${escapeHtml(item.q)}</summary>
          <p>${escapeHtml(item.a)}</p>
        </details>
      `)
      .join("");
  }

  function renderPage() {
    applyStaticTranslations();
    renderProgrammes();
    renderProjects();
    renderModules();
    renderSteps();
    renderCredentials();
    renderBadges();
    renderSafety();
    renderLaunch();
    renderFaqs();
    document.dispatchEvent(new CustomEvent("eua:page-rendered"));
  }

  function setLanguage(language) {
    if (!supportedLanguages.includes(language)) return;
    currentLanguage = language;

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
      // Language selection still works for this session when storage is unavailable.
    }

    renderPage();
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  renderPage();
})();
