(function () {
  "use strict";

  const copy = {
    en: {
      brand: "EUA AI Academy", primaryNav: "Primary navigation", allCourses: "All courses", language: "Language", login: "Log in", back: "← All courses",
      courseTitle: "AI Explorers", heroTitle: "Understand.<br>Question.<br><em>Build.</em>", heroCopy: "A practical AI adventure for final-year school and college students exploring their next education or career direction.",
      enroll: "Enroll now <span aria-hidden=\"true\">→</span>", selfPaced: "Self-paced · Armenian and English", courseFacts: "Course facts",
      learnEyebrow: "What you will learn", learnTitle: "From understanding AI to using it with confidence.", learnCopy: "Build a clear foundation, learn to communicate with AI, apply it to everyday work, create characters, choose tools, and manage practical considerations.", curriculumAria: "Course curriculum",
      ready: "Ready to begin?", readyCopy: "Create your account, enroll, and begin with the preface.", enrollCourse: "Enroll in AI Explorers <span aria-hidden=\"true\">→</span>",
      assessment: "Learning approach", assessmentTitle: "Understand, practise, and apply.", assessmentCopy: "Section summaries, practical activities, and prompt-building exercises help you turn each concept into a skill you can use responsibly.", ctaTitle: "Ready to explore?",
      topics: "topics", section: "Section overview", sections: "sections", guidedTopics: "guided topics", practical: "Practical", activities: "activities", glossary: "glossary",
      meta: "AI Explorers helps young learners understand, question, and build with AI."
    },
    hy: {
      brand: "ՀԵՀ ԱԲ ակադեմիա", primaryNav: "Հիմնական նավարկում", allCourses: "Բոլոր դասընթացները", language: "Լեզու", login: "Մուտք", back: "← Բոլոր դասընթացները",
      courseTitle: "ԱԲ բացահայտողներ", heroTitle: "Հասկացիր։<br>Հարցադրիր։<br><em>Կառուցիր։</em>", heroCopy: "ԱԲ-ի գործնական ճանապարհորդություն ավարտական դասարանների և քոլեջների ուսանողների համար, որոնք ուսումնասիրում են իրենց կրթության կամ կարիերայի հաջորդ ուղղությունը։",
      enroll: "Գրանցվել հիմա <span aria-hidden=\"true\">→</span>", selfPaced: "Ինքնուրույն տեմպով · հայերեն և անգլերեն", courseFacts: "Դասընթացի տվյալներ",
      learnEyebrow: "Ինչ եք սովորելու", learnTitle: "ԱԲ-ը հասկանալուց մինչև վստահ կիրառություն։", learnCopy: "Ձևավորեք ամուր հիմք, սովորեք հաղորդակցվել ԱԲ-ի հետ, կիրառել այն առօրյա աշխատանքում, ստեղծել կերպարներ, ընտրել գործիքներ և կառավարել գործնական հարցերը։", curriculumAria: "Դասընթացի ծրագիր",
      ready: "Պատրա՞ստ եք սկսել։", readyCopy: "Ստեղծեք հաշիվ, գրանցվեք և սկսեք նախաբանից։", enrollCourse: "Գրանցվել «ԱԲ բացահայտողներ» դասընթացին <span aria-hidden=\"true\">→</span>",
      assessment: "Ուսուցման մոտեցում", assessmentTitle: "Հասկանալ, փորձարկել և կիրառել։", assessmentCopy: "Բաժինների ամփոփումները, գործնական առաջադրանքներն ու պրոմփթների մշակման վարժությունները կօգնեն յուրաքանչյուր գաղափար վերածել պատասխանատու կիրառվող հմտության։", ctaTitle: "Պատրա՞ստ եք բացահայտել։",
      topics: "թեմա", section: "Բաժնի ակնարկ", sections: "բաժին", guidedTopics: "ուսումնական թեմա", practical: "Գործնական", activities: "առաջադրանքներ", glossary: "բառարան",
      meta: "«ԱԲ բացահայտողներ» դասընթացն օգնում է երիտասարդներին հասկանալ, հարցադրել և կառուցել ԱԲ-ի միջոցով։"
    }
  };

  const curriculum = {
    en: [
      { title: "PREFACE", goal: "Set expectations for the course and establish a responsible, human-led approach to learning with AI.", lessons: [] },
      { title: "UNDERSTANDING AI", goal: "Build a clear mental model of artificial intelligence, large language models, and how language models generate responses.", lessons: [
        { title: "What is Artificial Intelligence?" },
        { title: "What are Large Language Models?" },
        { title: "How do Language Models work?" },
        { title: "Summary" }
      ] },
      { title: "TALKING TO AI", goal: "Learn how to communicate intent clearly and improve results through deliberate prompt design.", lessons: [
        { title: "What is Prompt Engineering?" },
        { title: "How should one talk to AI?" },
        { title: "Techniques for crafting effective prompts" },
        { title: "Common challenges and pitfalls" },
        { title: "Summary" }
      ] },
      { title: "USING AI", goal: "Apply AI to useful everyday tasks while keeping human judgment and final responsibility in the workflow.", lessons: [
        { title: "Writing and editing" },
        { title: "Ideation and Planning" },
        { title: "Everyday Activities" },
        { title: "Create your own prompts" }
      ] },
      { title: "CREATING AI CHARACTERS", goal: "Explore how text can shape a consistent AI character and support imaginative, purposeful interactions.", lessons: [
        { title: "What are AI characters?" },
        { title: "Personality just from text?" },
        { title: "Characters to get your imagination going" },
        { title: "Summary" }
      ] },
      { title: "CHOOSING AI TOOLS", goal: "Compare practical ways to access large language models and choose an appropriate tool for the task.", lessons: [
        { title: "Ways to access Large Language Models" },
        { title: "Summary" }
      ] },
      { title: "PRACTICAL MATTERS", goal: "Understand costs and build a reliable system for organising and reusing effective prompts.", lessons: [
        { title: "Calculating Language Model costs" },
        { title: "Managing your prompts efficiently" },
        { title: "Summary" }
      ] },
      { title: "EPILOGUE", goal: "Reflect on the course and identify responsible next steps for continued learning and practice.", lessons: [] },
      { title: "AI GLOSSARY", goal: "Use a concise reference for the essential AI terms introduced throughout the course.", lessons: [] },
      { title: "USEFUL RESOURCES", goal: "Continue learning with reliable references, reusable materials, and practical safety guidance.", lessons: [
        { title: "Official AI tool guides and documentation" },
        { title: "Prompt templates and reusable examples" },
        { title: "Verification, privacy, and safety checklists" },
        { title: "Recommended courses, articles, and communities" }
      ] }
    ],
    hy: [
      { title: "ՆԱԽԱԲԱՆ", goal: "Ծանոթացեք դասընթացի կառուցվածքին և ԱԲ-ի հետ աշխատելու պատասխանատու, մարդակենտրոն մոտեցմանը։", lessons: [] },
      { title: "ՀԱՍԿԱՆԱԼ ԱԲ-Ը", goal: "Ձևավորեք հստակ պատկերացում արհեստական բանականության, մեծ լեզվական մոդելների և դրանց աշխատանքի մասին։", lessons: [
        { title: "Ի՞նչ է արհեստական բանականությունը։" },
        { title: "Ի՞նչ են մեծ լեզվական մոդելները։" },
        { title: "Ինչպե՞ս են աշխատում լեզվական մոդելները։" },
        { title: "Ամփոփում" }
      ] },
      { title: "ԶՐՈՒՑԵԼ ԱԲ-Ի ՀԵՏ", goal: "Սովորեք հստակ փոխանցել ձեր նպատակը և բարելավել արդյունքները՝ մտածված պրոմփթների միջոցով։", lessons: [
        { title: "Ի՞նչ է պրոմփթների մշակումը։" },
        { title: "Ինչպե՞ս ճիշտ հաղորդակցվել ԱԲ-ի հետ։" },
        { title: "Արդյունավետ պրոմփթներ կազմելու մեթոդներ" },
        { title: "Տարածված դժվարություններ և սխալներ" },
        { title: "Ամփոփում" }
      ] },
      { title: "ՕԳՏԱԳՈՐԾԵԼ ԱԲ-Ը", goal: "Կիրառեք ԱԲ-ը օգտակար առօրյա առաջադրանքներում՝ պահպանելով մարդկային դատողությունն ու վերջնական պատասխանատվությունը։", lessons: [
        { title: "Գրավոր աշխատանք և խմբագրում" },
        { title: "Գաղափարների մշակում և պլանավորում" },
        { title: "Առօրյա գործեր" },
        { title: "Ստեղծեք ձեր սեփական պրոմփթները" }
      ] },
      { title: "ԱԲ ԿԵՐՊԱՐՆԵՐԻ ՍՏԵՂԾՈՒՄ", goal: "Բացահայտեք, թե ինչպես կարելի է տեքստի միջոցով ձևավորել հետևողական ԱԲ կերպար և զարգացնել երևակայությունը։", lessons: [
        { title: "Ի՞նչ են ԱԲ կերպարները։" },
        { title: "Անհատականություն՝ միայն տեքստի՞ միջոցով։" },
        { title: "Կերպարներ, որոնք կաշխուժացնեն ձեր երևակայությունը" },
        { title: "Ամփոփում" }
      ] },
      { title: "ԱԲ ԳՈՐԾԻՔՆԵՐԻ ԸՆՏՐՈՒԹՅՈՒՆ", goal: "Համեմատեք մեծ լեզվական մոդելներից օգտվելու եղանակները և ընտրեք առաջադրանքին համապատասխան գործիքը։", lessons: [
        { title: "Մեծ լեզվական մոդելներից օգտվելու եղանակները" },
        { title: "Ամփոփում" }
      ] },
      { title: "ԳՈՐԾՆԱԿԱՆ ՀԱՐՑԵՐ", goal: "Հասկացեք ծախսերը և ստեղծեք արդյունավետ պրոմփթները կազմակերպելու ու կրկին օգտագործելու հուսալի համակարգ։", lessons: [
        { title: "Լեզվական մոդելների ծախսերի հաշվարկ" },
        { title: "Պրոմփթների արդյունավետ կառավարում" },
        { title: "Ամփոփում" }
      ] },
      { title: "ՎԵՐՋԱԲԱՆ", goal: "Ամփոփեք սովորածը և սահմանեք պատասխանատու շարունակական ուսուցման ու կիրառության հաջորդ քայլերը։", lessons: [] },
      { title: "ԱԲ ԲԱՌԱՐԱՆ", goal: "Օգտվեք դասընթացում ներկայացված հիմնական ԱԲ եզրույթների համառոտ բացատրություններից։", lessons: [] },
      { title: "ՕԳՏԱԿԱՐ ՌԵՍՈՒՐՍՆԵՐ", goal: "Շարունակեք սովորել հուսալի աղբյուրների, կրկնակի օգտագործվող նյութերի և անվտանգության գործնական ուղեցույցների միջոցով։", lessons: [
        { title: "ԱԲ գործիքների պաշտոնական ուղեցույցներ և փաստաթղթեր" },
        { title: "Պրոմփթների ձևանմուշներ և կրկնակի օգտագործվող օրինակներ" },
        { title: "Ստուգման, գաղտնիության և անվտանգության ստուգաթերթեր" },
        { title: "Առաջարկվող դասընթացներ, հոդվածներ և համայնքներ" }
      ] }
    ]
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
      <div><strong>10</strong><span>${escapeHtml(t.sections)}</span></div>
      <div><strong>26</strong><span>${escapeHtml(t.guidedTopics)}</span></div>
      <div><strong>${escapeHtml(t.practical)}</strong><span>${escapeHtml(t.activities)}</span></div>
      <div><strong>AI</strong><span>${escapeHtml(t.glossary)}</span></div>`;
    document.getElementById("curriculum").innerHTML = curriculum[language].map((module, index) => `
      <article class="curriculum-module${module.lessons.length ? "" : " curriculum-module-standalone"}">
        <div class="module-identity"><span>${String(index + 1).padStart(2, "0")}</span><div><small>${module.lessons.length ? `${module.lessons.length} ${escapeHtml(t.topics)}` : escapeHtml(t.section)}</small><h3>${escapeHtml(module.title)}</h3></div></div>
        <p>${escapeHtml(module.goal)}</p>
        ${module.lessons.length ? `<ul>${module.lessons.map((lesson) => `<li>${escapeHtml(lesson.title)}</li>`).join("")}</ul>` : ""}
      </article>`).join("");
  }

  languageSelect?.addEventListener("change", () => {
    language = languageSelect.value;
    localStorage.setItem("eua-ai-language", language);
    render();
  });
  render();
})();
