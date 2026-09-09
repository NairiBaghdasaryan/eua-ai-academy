(function () {
  "use strict";

  const copy = {
    en: {
      brand: "EUA AI Academy", primaryNav: "Primary navigation", allCourses: "All courses", language: "Language", login: "Log in", back: "← All courses",
      courseTitle: "AI Explorers", heroTitle: "Understand.<br>Question.<br><em>Build.</em>", heroCopy: "A current, practical introduction to AI for young people - from how models work to safe, creative, and useful real-world application.",
      enroll: "Enroll now <span aria-hidden=\"true\">→</span>", courseFacts: "Course facts",
      learnEyebrow: "What you will learn", learnTitle: "AI literacy for the world students are entering now.", learnCopy: "Understand modern generative AI, write effective instructions, verify outputs, work with text and media, compare tools, and design a safe AI-assisted workflow.", curriculumAria: "Course curriculum",
      ready: "Ready to begin?", readyCopy: "Create your account, enroll, and start with your AI use agreement.", enrollCourse: "Enroll in AI Explorers <span aria-hidden=\"true\">→</span>",
      assessment: "Learning approach", assessmentTitle: "Understand, test, create, and reflect.", assessmentCopy: "Every section combines a clear explanation, a guided experiment, and a practical output. Learners finish with a tested capstone and a short statement explaining where human judgment remains essential.", ctaTitle: "Ready to explore?",
      topics: "learning topics", section: "Section overview", sections: "sections", guidedTopics: "guided topics", challenges: "hands-on challenges", capstone: "capstone", build: "Practical output", openResource: "Open resource",
      meta: "AI Explorers helps young learners understand, question, and build with AI."
    },
    hy: {
      brand: "ՀԵՀ ԱԲ ակադեմիա", primaryNav: "Հիմնական նավարկում", allCourses: "Բոլոր դասընթացները", language: "Լեզու", login: "Մուտք", back: "← Բոլոր դասընթացները",
      courseTitle: "ԱԲ բացահայտողներ", heroTitle: "Հասկացիր։<br>Հարցադրիր։<br><em>Կառուցիր։</em>", heroCopy: "ԱԲ-ի արդիական և գործնական ներածություն երիտասարդների համար՝ մոդելների աշխատանքի սկզբունքներից մինչև անվտանգ, ստեղծագործ և օգտակար կիրառություն։",
      enroll: "Գրանցվել հիմա <span aria-hidden=\"true\">→</span>", courseFacts: "Դասընթացի տվյալներ",
      learnEyebrow: "Ինչ եք սովորելու", learnTitle: "ԱԲ գրագիտություն այն աշխարհի համար, ուր մուտք են գործում այսօրվա սովորողները։", learnCopy: "Հասկացեք ժամանակակից գեներատիվ ԱԲ-ը, կազմեք արդյունավետ հրահանգներ, ստուգեք արդյունքները, աշխատեք տեքստի ու մեդիայի հետ, համեմատեք գործիքները և նախագծեք անվտանգ ԱԲ-աջակցությամբ աշխատանքային ընթացք։", curriculumAria: "Դասընթացի ծրագիր",
      ready: "Պատրա՞ստ եք սկսել։", readyCopy: "Ստեղծեք հաշիվ, գրանցվեք և սկսեք ԱԲ-ի օգտագործման ձեր համաձայնագրից։", enrollCourse: "Գրանցվել «ԱԲ բացահայտողներ» դասընթացին <span aria-hidden=\"true\">→</span>",
      assessment: "Ուսուցման մոտեցում", assessmentTitle: "Հասկանալ, փորձարկել, ստեղծել և վերլուծել։", assessmentCopy: "Յուրաքանչյուր բաժին միավորում է հստակ բացատրություն, ուղղորդվող փորձ և գործնական արդյունք։ Վերջում սովորողները ներկայացնում են փորձարկված ամփոփիչ նախագիծ և բացատրում, թե որտեղ է մարդկային դատողությունը մնում անփոխարինելի։", ctaTitle: "Պատրա՞ստ եք բացահայտել։",
      topics: "ուսումնական թեմա", section: "Բաժնի ակնարկ", sections: "բաժին", guidedTopics: "ուսումնական թեմա", challenges: "գործնական փորձ", capstone: "ամփոփիչ նախագիծ", build: "Գործնական արդյունք", openResource: "Բացել ռեսուրսը",
      meta: "«ԱԲ բացահայտողներ» դասընթացն օգնում է երիտասարդներին հասկանալ, հարցադրել և կառուցել ԱԲ-ի միջոցով։"
    }
  };

  const curriculum = {
    en: [
      { title: "START HERE: AI, YOU, AND HUMAN JUDGMENT", goal: "Begin with purpose, expectations, and a shared standard for responsible AI use.", output: "Write a personal AI use agreement: what you will delegate, verify, protect, and always decide yourself.", lessons: [
        { title: "What AI Explorers will help you do" },
        { title: "Human judgment first" },
        { title: "Baseline challenge: what would you trust AI with?" }
      ] },
      { title: "UNDERSTANDING MODERN AI", goal: "Build an intuitive, accurate mental model without getting lost in technical jargon.", output: "Explain how a generative AI response is produced using a one-page visual or a two-minute explanation.", lessons: [
        { title: "AI, machine learning, and generative AI" },
        { title: "Tokens, training, and prediction" },
        { title: "Large language models and context" },
        { title: "Memory, retrieval, and current information" },
        { title: "What reasoning models can and cannot do" }
      ] },
      { title: "TALKING TO AI", goal: "Turn vague requests into clear briefs and improve results through deliberate iteration.", output: "Create and test one reusable prompt using the CLEAR brief: Context, Limits, Expected output, Audience, and Review criteria.", lessons: [
        { title: "Prompting as clear communication" },
        { title: "The CLEAR brief" },
        { title: "Examples, constraints, and output formats" },
        { title: "Breaking complex tasks into steps" },
        { title: "Debugging weak prompts" }
      ] },
      { title: "CHECKING AI", goal: "Develop calibrated trust: useful AI output is a draft or hypothesis until the important parts are checked.", output: "Audit one AI answer with the TRACE check: Trace claims, Review sources, Assess uncertainty, Check bias, and Escalate risk.", lessons: [
        { title: "Hallucinations and confident mistakes" },
        { title: "Claims, evidence, and source quality" },
        { title: "Bias, missing perspectives, and fairness" },
        { title: "Privacy, security, copyright, and disclosure" },
        { title: "When not to use AI" }
      ] },
      { title: "USING AI FOR REAL WORK", goal: "Apply AI across common study, creative, and everyday tasks while preserving authorship and responsibility.", output: "Complete a before-and-after workflow and label what was created by you, supported by AI, and independently verified.", lessons: [
        { title: "Writing, editing, and translation" },
        { title: "Ideation, planning, and decision support" },
        { title: "Learning, tutoring, and research" },
        { title: "Working with images, audio, files, and data" },
        { title: "Building your personal prompt library" }
      ] },
      { title: "CREATING AI CHARACTERS AND TUTORS", goal: "Design purposeful characters without confusing a convincing personality with real expertise.", output: "Build and test an AI tutor or character with a role, voice, boundaries, uncertainty rules, and three test conversations.", lessons: [
        { title: "Character, role, and expertise" },
        { title: "Voice, context, and boundaries" },
        { title: "Memory, personalization, and privacy" },
        { title: "Testing consistency and safety" }
      ] },
      { title: "CHOOSING AI TOOLS", goal: "Choose tools by the task and risk, not by popularity or a static ranking.", output: "Compare three tools on the same task and recommend one using quality, evidence, privacy, speed, and cost criteria.", lessons: [
        { title: "Chat, search, research, creation, and coding tools" },
        { title: "Models, features, and multimodal inputs" },
        { title: "Free, paid, school, and workplace access" },
        { title: "A repeatable tool evaluation scorecard" }
      ] },
      { title: "FROM CHATBOTS TO AGENTS", goal: "Understand how AI can use tools and carry out multi-step work, and why autonomy requires stronger oversight.", output: "Map a safe automation with allowed actions, required inputs, human approval points, and a recovery plan.", lessons: [
        { title: "Tools, actions, workflows, and agents" },
        { title: "Research with live sources and citations" },
        { title: "Automation for repetitive tasks" },
        { title: "Permissions and human approval points" },
        { title: "Failure modes and recovery" }
      ] },
      { title: "PRACTICAL MATTERS", goal: "Create habits that make AI use economical, organized, reproducible, and appropriate for shared work.", output: "Assemble a personal AI workspace with naming rules, prompt versions, source notes, and a privacy checklist.", lessons: [
        { title: "Tokens, limits, time, and cost" },
        { title: "Managing context and files" },
        { title: "Saving, versioning, and improving prompts" },
        { title: "Team rules and responsible disclosure" }
      ] },
      { title: "CAPSTONE, GLOSSARY, AND USEFUL RESOURCES", goal: "Bring the course together in an original project and leave with reliable references for continued learning.", output: "Present a useful AI-assisted solution, its test evidence, limitations, source record, and human judgment statement.", lessons: [
        { title: "Capstone: solve a real study or community need" },
        { title: "Test, document, and improve your solution" },
        { title: "AI glossary and course recap" },
        { title: "OpenAI Academy", href: "https://academy.openai.com/" },
        { title: "UNESCO AI Competency Framework for Students", href: "https://www.unesco.org/en/articles/ai-competency-framework-students" },
        { title: "Anthropic prompting best practices", href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables" },
        { title: "Google prompt design strategies", href: "https://ai.google.dev/gemini-api/docs/prompting-strategies" }
      ] }
    ],
    hy: [
      { title: "ՍԿԻԶԲ. ԱԲ-Ը, ԴՈՒՔ ԵՎ ՄԱՐԴԿԱՅԻՆ ԴԱՏՈՂՈՒԹՅՈՒՆԸ", goal: "Սկսեք նպատակից, ակնկալիքներից և ԱԲ-ի պատասխանատու օգտագործման միասնական չափանիշից։", output: "Կազմեք ԱԲ-ի օգտագործման անձնական համաձայնագիր՝ ինչ եք փոխանցելու ԱԲ-ին, ինչ եք ստուգելու ու պաշտպանելու և ինչ եք միշտ որոշելու ինքնուրույն։", lessons: [
        { title: "Ինչի՞ն կօգնի «ԱԲ բացահայտողներ» դասընթացը" },
        { title: "Մարդկային դատողությունն առաջնային է" },
        { title: "Մեկնարկային փորձ. ի՞նչ կվստահեիք ԱԲ-ին" }
      ] },
      { title: "ՀԱՍԿԱՆԱԼ ԺԱՄԱՆԱԿԱԿԻՑ ԱԲ-Ը", goal: "Ձևավորեք պարզ և ճշգրիտ պատկերացում՝ առանց տեխնիկական բարդությունների մեջ կորելու։", output: "Մեկ էջանոց պատկերով կամ երկու րոպեանոց բացատրությամբ ներկայացրեք, թե ինչպես է գեներատիվ ԱԲ-ը պատասխանում։", lessons: [
        { title: "ԱԲ, մեքենայական ուսուցում և գեներատիվ ԱԲ" },
        { title: "Թոքեններ, ուսուցում և կանխատեսում" },
        { title: "Մեծ լեզվական մոդելներ և համատեքստ" },
        { title: "Հիշողություն, որոնում և արդիական տեղեկություն" },
        { title: "Ինչ կարող են և չեն կարող տրամաբանող մոդելները" }
      ] },
      { title: "ԶՐՈՒՑԵԼ ԱԲ-Ի ՀԵՏ", goal: "Անորոշ հարցումները վերածեք հստակ առաջադրանքների և փուլային փորձարկմամբ բարելավեք արդյունքը։", output: "Ստեղծեք և փորձարկեք կրկնակի օգտագործվող պրոմփթ՝ նշելով համատեքստը, սահմանները, սպասվող արդյունքը, լսարանը և ստուգման չափանիշները։", lessons: [
        { title: "Պրոմփթը որպես հստակ հաղորդակցություն" },
        { title: "Հստակ առաջադրանքի հինգ բաղադրիչները" },
        { title: "Օրինակներ, սահմանափակումներ և արդյունքի ձևաչափ" },
        { title: "Բարդ առաջադրանքների բաժանում փուլերի" },
        { title: "Թույլ պրոմփթների հայտնաբերում և ուղղում" }
      ] },
      { title: "ՍՏՈՒԳԵԼ ԱԲ-Ը", goal: "Ձևավորեք կշռադատված վստահություն. կարևոր մասերը պետք է ստուգվեն, որքան էլ պատասխանը համոզիչ հնչի։", output: "Ստուգեք մեկ ԱԲ պատասխան՝ առանձնացնելով պնդումները, աղբյուրները, անորոշությունը, կողմնակալությունը և բարձր ռիսկերը։", lessons: [
        { title: "Հորինվածքներ և վստահ հնչող սխալներ" },
        { title: "Պնդումներ, ապացույցներ և աղբյուրների որակ" },
        { title: "Կողմնակալություն, բացակայող տեսակետներ և արդարություն" },
        { title: "Գաղտնիություն, անվտանգություն, հեղինակային իրավունք և թափանցիկություն" },
        { title: "Երբ չպետք է օգտագործել ԱԲ" }
      ] },
      { title: "ԱԲ-Ը ԻՐԱԿԱՆ ԱՌԱՋԱԴՐԱՆՔՆԵՐՈՒՄ", goal: "Կիրառեք ԱԲ-ը ուսման, ստեղծագործ աշխատանքի և առօրյա խնդիրներում՝ պահպանելով հեղինակությունն ու պատասխանատվությունը։", output: "Կատարեք մեկ աշխատանքային ընթացք և նշեք՝ ինչն եք ստեղծել դուք, ինչին է աջակցել ԱԲ-ը և ինչը ստուգվել է անկախ աղբյուրով։", lessons: [
        { title: "Գրել, խմբագրել և թարգմանել" },
        { title: "Գաղափարներ, պլանավորում և որոշումների աջակցություն" },
        { title: "Ուսուցում, անհատական պարապմունք և հետազոտություն" },
        { title: "Պատկերներ, ձայն, ֆայլեր և տվյալներ" },
        { title: "Անձնական պրոմփթների շտեմարանի ստեղծում" }
      ] },
      { title: "ԱԲ ԿԵՐՊԱՐՆԵՐԻ ԵՎ ՈՒՍՈՒՑԻՉՆԵՐԻ ՍՏԵՂԾՈՒՄ", goal: "Նախագծեք նպատակային կերպարներ՝ համոզիչ անհատականությունը չշփոթելով իրական մասնագիտական գիտելիքի հետ։", output: "Ստեղծեք և փորձարկեք ԱԲ ուսուցիչ կամ կերպար՝ սահմանելով դերը, ոճը, սահմանները, անորոշության կանոնները և երեք փորձնական զրույց։", lessons: [
        { title: "Կերպար, դեր և մասնագիտական գիտելիք" },
        { title: "Ոճ, համատեքստ և սահմաններ" },
        { title: "Հիշողություն, անհատականացում և գաղտնիություն" },
        { title: "Հետևողականության և անվտանգության փորձարկում" }
      ] },
      { title: "ԱԲ ԳՈՐԾԻՔՆԵՐԻ ԸՆՏՐՈՒԹՅՈՒՆ", goal: "Գործիքն ընտրեք ըստ առաջադրանքի և ռիսկի, ոչ թե հանրաճանաչության կամ անփոփոխ վարկանիշի։", output: "Նույն առաջադրանքով համեմատեք երեք գործիք և ընտրությունը հիմնավորեք որակով, ապացույցներով, գաղտնիությամբ, արագությամբ ու արժեքով։", lessons: [
        { title: "Զրույցի, որոնման, հետազոտության, ստեղծման և ծրագրավորման գործիքներ" },
        { title: "Մոդելներ, հնարավորություններ և բազմամոդալ տվյալներ" },
        { title: "Անվճար, վճարովի, կրթական և աշխատանքային հասանելիություն" },
        { title: "Գործիքների գնահատման կրկնվող ստուգաթերթ" }
      ] },
      { title: "ԶՐՈՒՑԱՐԱՆՆԵՐԻՑ ՄԻՆՉԵՎ ԱԲ ԳՈՐԾԱԿԱԼՆԵՐ", goal: "Հասկացեք, թե ինչպես կարող է ԱԲ-ը գործիքներ օգտագործել և բազմափուլ աշխատանք կատարել, և ինչու է ինքնավարությունը պահանջում ավելի խիստ վերահսկողություն։", output: "Քարտեզագրեք անվտանգ ավտոմատացում՝ նշելով թույլատրելի գործողությունները, մուտքային տվյալները, մարդու հաստատման կետերը և վերականգնման պլանը։", lessons: [
        { title: "Գործիքներ, գործողություններ, աշխատանքային ընթացքներ և գործակալներ" },
        { title: "Հետազոտություն արդիական աղբյուրներով և հղումներով" },
        { title: "Կրկնվող առաջադրանքների ավտոմատացում" },
        { title: "Թույլտվություններ և մարդու հաստատման կետեր" },
        { title: "Խափանման տեսակներ և վերականգնում" }
      ] },
      { title: "ԳՈՐԾՆԱԿԱՆ ՀԱՐՑԵՐ", goal: "Ձևավորեք սովորություններ, որոնք ԱԲ-ի օգտագործումը դարձնում են խնայող, կազմակերպված, վերարտադրելի և թիմային աշխատանքի համար պատշաճ։", output: "Կազմեք անձնական ԱԲ աշխատանքային միջավայր՝ անվանման կանոններով, պրոմփթների տարբերակներով, աղբյուրների նշումներով և գաղտնիության ստուգաթերթով։", lessons: [
        { title: "Թոքեններ, սահմանաչափեր, ժամանակ և արժեք" },
        { title: "Համատեքստի և ֆայլերի կառավարում" },
        { title: "Պրոմփթների պահպանում, տարբերակում և բարելավում" },
        { title: "Թիմային կանոններ և պատասխանատու բացահայտում" }
      ] },
      { title: "ԱՄՓՈՓԻՉ ՆԱԽԱԳԻԾ, ԲԱՌԱՐԱՆ ԵՎ ՕԳՏԱԿԱՐ ՌԵՍՈՒՐՍՆԵՐ", goal: "Միավորեք սովորածը ինքնուրույն նախագծում և շարունակեք զարգանալ հուսալի աղբյուրներով։", output: "Ներկայացրեք օգտակար ԱԲ-աջակցությամբ լուծում, փորձարկման ապացույցները, սահմանափակումները, աղբյուրների գրանցումը և մարդկային դատողության մասին հայտարարությունը։", lessons: [
        { title: "Ամփոփիչ նախագիծ. լուծեք ուսումնական կամ համայնքային իրական խնդիր" },
        { title: "Փորձարկեք, փաստագրեք և բարելավեք լուծումը" },
        { title: "ԱԲ բառարան և դասընթացի ամփոփում" },
        { title: "OpenAI Academy-ի ուսումնական նյութեր", href: "https://academy.openai.com/" },
        { title: "ՅՈՒՆԵՍԿՕ-ի ԱԲ կարողությունների շրջանակը սովորողների համար", href: "https://www.unesco.org/en/articles/ai-competency-framework-students" },
        { title: "Anthropic-ի պրոմփթավորման արդիական ուղեցույց", href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables" },
        { title: "Google-ի պրոմփթների նախագծման ուղեցույց", href: "https://ai.google.dev/gemini-api/docs/prompting-strategies" }
      ] }
    ]
  };

  const languageSelect = document.getElementById("language");
  let language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
  const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

  function render() {
    const t = copy[language];
    const guidedTopicCount = curriculum[language].reduce((total, module) => total + module.lessons.length, 0);
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
      <div><strong>${guidedTopicCount}</strong><span>${escapeHtml(t.guidedTopics)}</span></div>
      <div><strong>10</strong><span>${escapeHtml(t.challenges)}</span></div>
      <div><strong>1</strong><span>${escapeHtml(t.capstone)}</span></div>`;
    document.getElementById("curriculum").innerHTML = curriculum[language].map((module, index) => `
      <article class="curriculum-module${module.lessons.length ? "" : " curriculum-module-standalone"}">
        <div class="module-identity"><span>${String(index + 1).padStart(2, "0")}</span><div><small>${module.lessons.length ? `${module.lessons.length} ${escapeHtml(t.topics)}` : escapeHtml(t.section)}</small><h3>${escapeHtml(module.title)}</h3></div></div>
        <p>${escapeHtml(module.goal)}</p>
        <div class="module-content">
          ${module.lessons.length ? `<ul>${module.lessons.map((lesson) => `<li>${lesson.href ? `<a href="${escapeHtml(lesson.href)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${lesson.title} - ${t.openResource}`)}">${escapeHtml(lesson.title)} <span aria-hidden="true">↗</span></a>` : escapeHtml(lesson.title)}</li>`).join("")}</ul>` : ""}
          <div class="module-output"><span>${escapeHtml(t.build)}</span><p>${escapeHtml(module.output)}</p></div>
        </div>
      </article>`).join("");
  }

  languageSelect?.addEventListener("change", () => {
    language = languageSelect.value;
    localStorage.setItem("eua-ai-language", language);
    render();
  });
  render();
})();
