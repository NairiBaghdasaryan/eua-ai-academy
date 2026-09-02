(function () {
  "use strict";

  const copy = {
    en: {
      brand: "EUA AI Academy", primaryNav: "Primary navigation", allCourses: "All courses", language: "Language", login: "Log in", back: "← All courses",
      courseTitle: "AI Explorers", heroTitle: "Understand.<br>Question.<br><em>Build.</em>", heroCopy: "A practical AI adventure for final-year school and college students exploring their next education or career direction.",
      enroll: "Enroll now <span aria-hidden=\"true\">→</span>", selfPaced: "Self-paced · Armenian and English", courseFacts: "Course facts",
      learnEyebrow: "What you will learn", learnTitle: "Explore AI-and where it could take you.", learnCopy: "Understand the basics, check outputs, create responsibly, and discover how AI is changing study paths and careers.", curriculumAria: "Course curriculum",
      ready: "Ready to begin?", readyCopy: "Create your account, enroll, and start with the foundations.", enrollCourse: "Enroll in AI Explorers <span aria-hidden=\"true\">→</span>",
      assessment: "Assessment", assessmentTitle: "Progress you can prove.", assessmentCopy: "Each module ends with a short test. Complete the lessons and pass all seven tests to earn the course credential.", ctaTitle: "Ready to explore?",
      lessons: "lessons", video: "video learning", practical: "practical lessons", tests: "module tests", pathway: "Career", pathwayCopy: "and education exploration",
      meta: "AI Explorers helps young learners understand, question, and build with AI."
    },
    hy: {
      brand: "ՀԵՀ ԱԲ ակադեմիա", primaryNav: "Հիմնական նավարկում", allCourses: "Բոլոր դասընթացները", language: "Լեզու", login: "Մուտք", back: "← Բոլոր դասընթացները",
      courseTitle: "ԱԲ հետազոտողներ", heroTitle: "Հասկացիր։<br>Հարցադրիր։<br><em>Կառուցիր։</em>", heroCopy: "ԱԲ-ի գործնական ճանապարհորդություն ավարտական դասարանների և քոլեջների ուսանողների համար, որոնք ուսումնասիրում են իրենց կրթության կամ կարիերայի հաջորդ ուղղությունը։",
      enroll: "Գրանցվել հիմա <span aria-hidden=\"true\">→</span>", selfPaced: "Ինքնուրույն տեմպով · հայերեն և անգլերեն", courseFacts: "Դասընթացի տվյալներ",
      learnEyebrow: "Ինչ եք սովորելու", learnTitle: "Բացահայտեք ԱԲ-ը և այն ուղիները, ուր այն կարող է ձեզ տանել։", learnCopy: "Հասկացեք հիմունքները, ստուգեք արդյունքները, ստեղծեք պատասխանատու կերպով և բացահայտեք, թե ինչպես է ԱԲ-ը փոխում կրթությունն ու մասնագիտությունները։", curriculumAria: "Դասընթացի ծրագիր",
      ready: "Պատրա՞ստ եք սկսել։", readyCopy: "Ստեղծեք հաշիվ, գրանցվեք և սկսեք հիմունքներից։", enrollCourse: "Գրանցվել «ԱԲ հետազոտողներ» դասընթացին <span aria-hidden=\"true\">→</span>",
      assessment: "Գնահատում", assessmentTitle: "Առաջընթաց, որը կարող եք ապացուցել։", assessmentCopy: "Յուրաքանչյուր մոդուլ ավարտվում է կարճ թեստով։ Ավարտեք դասերը և հանձնեք բոլոր յոթ թեստերը՝ դասընթացի հավաստագիրը ստանալու համար։", ctaTitle: "Պատրա՞ստ եք բացահայտել։",
      lessons: "դաս", video: "տեսանյութ", practical: "գործնական դաս", tests: "մոդուլային թեստ", pathway: "Կարիերա", pathwayCopy: "և կրթական ուղղությունների բացահայտում",
      meta: "«ԱԲ հետազոտողներ» դասընթացն օգնում է երիտասարդներին հասկանալ, հարցադրել և կառուցել ԱԲ-ի միջոցով։"
    }
  };

  const languageSelect = document.getElementById("language");
  let language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

  function render() {
    const t = copy[language];
    document.documentElement.lang = language;
    document.title = `${t.courseTitle} · ${t.brand}`;
    document.getElementById("meta-description")?.setAttribute("content", t.meta);
    languageSelect.value = language;
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = t[element.dataset.copy];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-copy-aria]").forEach((element) => {
      const value = t[element.dataset.copyAria];
      if (value) element.setAttribute("aria-label", value);
    });
    document.getElementById("course-facts").innerHTML = `
      <div><strong>${language === "hy" ? "8 ժ 27 ր" : "8h 27m"}</strong><span>${escapeHtml(t.video)}</span></div>
      <div><strong>20</strong><span>${escapeHtml(t.practical)}</span></div>
      <div><strong>7</strong><span>${escapeHtml(t.tests)}</span></div>
      <div><strong>${escapeHtml(t.pathway)}</strong><span>${escapeHtml(t.pathwayCopy)}</span></div>`;
    document.getElementById("curriculum").innerHTML = modules[language].map((module, index) => `
      <article class="curriculum-module">
        <div class="module-identity"><span>${String(index + 1).padStart(2, "0")}</span><div><small>${module.lessons.length} ${escapeHtml(t.lessons)}</small><h3>${escapeHtml(module.title.replace(/^.*? · /, ""))}</h3></div></div>
        <p>${escapeHtml(module.goal)}</p>
        <ul>${module.lessons.map((lesson) => `<li>${escapeHtml(lesson.title)}</li>`).join("")}</ul>
      </article>`).join("");
  }

  languageSelect?.addEventListener("change", () => {
    language = languageSelect.value;
    localStorage.setItem("eua-ai-language", language);
    render();
  });
  render();
})();
