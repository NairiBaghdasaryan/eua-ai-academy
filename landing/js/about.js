(function () {
  "use strict";

  const copy = {
    en: {
      skip: "Skip to content", brand: "EUA AI Academy", navOnline: "Online courses", navInPerson: "In person", navAbout: "About", language: "Language", contact: "Contact",
      heroEyebrow: "About EUA AI Academy", heroTitle: "Helping Armenia move into the AI era - with knowledge, ethics, and purpose.", heroCopy: "We believe AI is a powerful general-purpose tool that will transform how people learn, work, create, manage, and serve society. That transformation should be led responsibly, with informed human judgment at its center.",
      beliefEyebrow: "What we believe", beliefQuote: "AI should expand human capability - not replace responsibility.", beliefCopy: "Successful adoption is not simply access to the newest tools. It requires knowledge, critical thinking, ethical practice, data awareness, safety, and the confidence to know when human review matters most.",
      missionLabel: "Our mission", missionTitle: "Make responsible AI capability practical and accessible across Armenia.", missionCopy: "We equip students, educators, professionals, leaders, and institutions with the knowledge and applied skills to use AI confidently, critically, ethically, and safely. Our programmes connect global advances with Armenia's real educational, economic, and public-service needs.",
      visionLabel: "Our vision", visionTitle: "An Armenia where AI strengthens human judgment, opportunity, and progress.", visionCopy: "We envision Armenia becoming a regional example of high-standard AI education and adoption - a place where people and institutions use advanced technology professionally, create local value, and earn trust through responsible practice.",
      standardsEyebrow: "How we work", standardsTitle: "A transition guided by high standards.", standardsCopy: "EUA AI Academy brings together academic discipline, industry practice, and responsible technology principles. Every programme is designed around useful outcomes and clear human accountability.",
      teamEyebrow: "Our team", teamTitle: "Professional expertise. Human perspective.", teamCopy: "Our faculty combines academic knowledge, industry experience, teaching skill, and responsible AI practice. The profiles below are structured templates ready for the final lecturer names and credentials.",
      facultyEyebrow: "Faculty standard", facultyTitle: "Every lecturer teaches from practice.", facultyCopy: "Faculty profiles should demonstrate relevant professional experience, subject expertise, teaching ability, responsible AI awareness, and a clear connection to the course outcomes they lead.",
      ctaEyebrow: "Build the future responsibly", ctaTitle: "Learn with EUA AI Academy.", explore: "Explore courses →", talk: "Talk to our team", profileLink: "Profile link placeholder ↗", meta: "The mission, vision, professional standards, and team behind EUA AI Academy."
    },
    hy: {
      skip: "Անցնել բովանդակությանը", brand: "ՀԵՀ ԱԲ ակադեմիա", navOnline: "Առցանց դասընթացներ", navInPerson: "Առկա ուսուցում", navAbout: "Մեր մասին", language: "Լեզու", contact: "Կապ",
      heroEyebrow: "ՀԵՀ ԱԲ ակադեմիայի մասին", heroTitle: "Օգնում ենք Հայաստանին մուտք գործել ԱԲ դարաշրջան՝ գիտելիքով, էթիկայով և նպատակով։", heroCopy: "Մենք հավատում ենք, որ ԱԲ-ը հզոր համընդհանուր գործիք է, որը փոխելու է մարդկանց սովորելու, աշխատելու, ստեղծագործելու, կառավարելու և հասարակությանը ծառայելու ձևերը։ Այդ անցումը պետք է ղեկավարել պատասխանատու կերպով՝ կենտրոնում պահելով տեղեկացված մարդկային դատողությունը։",
      beliefEyebrow: "Մեր համոզմունքը", beliefQuote: "ԱԲ-ը պետք է ընդլայնի մարդկային կարողությունները, ոչ թե փոխարինի պատասխանատվությունը։", beliefCopy: "Հաջող ներդրումը միայն նորագույն գործիքների հասանելիություն չէ։ Այն պահանջում է գիտելիք, քննադատական մտածողություն, էթիկական աշխատանք, տվյալների իրազեկություն, անվտանգություն և վստահություն՝ հասկանալու, թե երբ է մարդկային ստուգումն ամենակարևորը։",
      missionLabel: "Մեր առաքելությունը", missionTitle: "Պատասխանատու ԱԲ կարողությունները դարձնել գործնական և հասանելի ամբողջ Հայաստանում։", missionCopy: "Մենք ուսանողներին, դասավանդողներին, մասնագետներին, ղեկավարներին և հաստատություններին տալիս ենք գիտելիք ու կիրառական հմտություններ՝ ԱԲ-ը վստահ, քննադատաբար, էթիկապես և անվտանգ օգտագործելու համար։ Մեր ծրագրերը համաշխարհային առաջընթացը կապում են Հայաստանի իրական կրթական, տնտեսական և հանրային ծառայության կարիքների հետ։",
      visionLabel: "Մեր տեսլականը", visionTitle: "Հայաստան, որտեղ ԱԲ-ը ուժեղացնում է մարդկային դատողությունը, հնարավորություններն ու առաջընթացը։", visionCopy: "Մենք պատկերացնում ենք Հայաստանը որպես բարձր չափանիշներով ԱԲ կրթության և ներդրման տարածաշրջանային օրինակ՝ երկիր, որտեղ մարդիկ ու հաստատությունները տեխնոլոգիան կիրառում են մասնագիտորեն, ստեղծում տեղական արժեք և վստահություն վաստակում պատասխանատու աշխատանքի միջոցով։",
      standardsEyebrow: "Ինչպես ենք աշխատում", standardsTitle: "Անցում՝ առաջնորդված բարձր չափանիշներով։", standardsCopy: "ՀԵՀ ԱԲ ակադեմիան միավորում է ակադեմիական խստությունը, ոլորտային փորձը և պատասխանատու տեխնոլոգիայի սկզբունքները։ Յուրաքանչյուր ծրագիր նախագծվում է օգտակար արդյունքների և հստակ մարդկային պատասխանատվության շուրջ։",
      teamEyebrow: "Մեր թիմը", teamTitle: "Մասնագիտական փորձ։ Մարդկային տեսանկյուն։", teamCopy: "Մեր դասախոսական կազմը միավորում է ակադեմիական գիտելիքը, ոլորտային փորձը, դասավանդման հմտությունն ու պատասխանատու ԱԲ կիրառումը։ Ստորև ներկայացված պրոֆիլները կառուցվածքային ձևանմուշներ են՝ դասախոսների վերջնական անուններով և տվյալներով լրացնելու համար։",
      facultyEyebrow: "Դասախոսական չափանիշ", facultyTitle: "Յուրաքանչյուր դասախոս սովորեցնում է գործնական փորձից։", facultyCopy: "Դասախոսների պրոֆիլները պետք է ներկայացնեն համապատասխան մասնագիտական փորձ, ոլորտային գիտելիք, դասավանդման կարողություն, պատասխանատու ԱԲ իրազեկություն և հստակ կապ իրենց վարած դասընթացի արդյունքների հետ։",
      ctaEyebrow: "Կառուցենք ապագան պատասխանատու կերպով", ctaTitle: "Սովորեք ՀԵՀ ԱԲ ակադեմիայի հետ։", explore: "Դիտել դասընթացները →", talk: "Կապվել մեր թիմի հետ", profileLink: "Պրոֆիլի հղման տեղապահ ↗", meta: "ՀԵՀ ԱԲ ակադեմիայի առաքելությունը, տեսլականը, մասնագիտական չափանիշները և թիմը։"
    }
  };

  const standards = {
    en: [
      ["Knowledge first", "We teach how AI works, where it fails, and how to evaluate its output."],
      ["Human judgment", "People remain responsible for decisions, evidence, quality, and consequences."],
      ["Ethics and safety", "Privacy, fairness, transparency, security, and appropriate limits are built into practice."],
      ["Armenian relevance", "Global standards are translated into useful capability for Armenia's people and institutions."]
    ],
    hy: [
      ["Նախ՝ գիտելիքը", "Մենք սովորեցնում ենք՝ ինչպես է աշխատում ԱԲ-ը, որտեղ է սխալվում և ինչպես գնահատել դրա արդյունքը։"],
      ["Մարդկային դատողություն", "Մարդիկ շարունակում են պատասխանատու լինել որոշումների, ապացույցների, որակի և հետևանքների համար։"],
      ["Էթիկա և անվտանգություն", "Գաղտնիությունը, արդարությունը, թափանցիկությունը, անվտանգությունն ու պատշաճ սահմանները ներառված են գործնական աշխատանքում։"],
      ["Հայաստանի համատեքստ", "Համաշխարհային չափանիշները վերածվում են Հայաստանի մարդկանց և հաստատությունների համար օգտակար կարողությունների։"]
    ]
  };

  const team = {
    en: [
      ["Academy leadership", "Lecturer name", "Academy Director / Programme Lead", "Add a concise 3-4 sentence biography covering leadership experience, academic or industry background, major achievements, and responsibility within the Academy.", ["AI strategy", "Leadership", "Responsible adoption"]],
      ["Lead faculty", "Lecturer name", "Lead Lecturer / Applied AI", "Add the lecturer's years of experience, specialist background, organizations or sectors served, teaching experience, and the practical perspective they bring to participants.", ["Applied AI", "Automation", "Professional practice"]],
      ["Specialist faculty", "Lecturer name", "Industry Lecturer / Specialization", "Add a course-specific biography highlighting subject expertise, representative projects, relevant credentials, and the specialization this lecturer leads.", ["Industry expertise", "Case studies", "Course delivery"]],
      ["Learning and standards", "Lecturer name", "Learning, Ethics & Safety Lead", "Add experience in learning design, assessment, responsible technology, policy, research, or safeguarding, plus the standards this person oversees.", ["Learning design", "Ethics", "Safety and quality"]]
    ],
    hy: [
      ["Ակադեմիայի ղեկավարում", "Դասախոսի անուն", "Ակադեմիայի տնօրեն / ծրագրի ղեկավար", "Ավելացրեք 3-4 նախադասությամբ ամփոփ կենսագրություն՝ ղեկավարության փորձի, ակադեմիական կամ ոլորտային անցյալի, հիմնական ձեռքբերումների և ակադեմիայում պատասխանատվության մասին։", ["ԱԲ ռազմավարություն", "Առաջնորդություն", "Պատասխանատու ներդրում"]],
      ["Առաջատար դասախոս", "Դասախոսի անուն", "Առաջատար դասախոս / կիրառական ԱԲ", "Ավելացրեք դասախոսի աշխատանքային տարիները, մասնագիտական ուղղությունը, սպասարկած կազմակերպությունները կամ ոլորտները, դասավանդման փորձը և այն գործնական տեսանկյունը, որը նա փոխանցում է մասնակիցներին։", ["Կիրառական ԱԲ", "Ավտոմատացում", "Մասնագիտական փորձ"]],
      ["Ոլորտային դասախոս", "Դասախոսի անուն", "Ոլորտային դասախոս / մասնագիտացում", "Ավելացրեք դասընթացին համապատասխան կենսագրություն՝ ընդգծելով ոլորտային գիտելիքը, օրինակելի նախագծերը, համապատասխան որակավորումները և դասախոսի ղեկավարած մասնագիտացումը։", ["Ոլորտային գիտելիք", "Իրական դեպքեր", "Դասընթացի վարում"]],
      ["Ուսուցում և չափանիշներ", "Դասախոսի անուն", "Ուսուցման, էթիկայի և անվտանգության ղեկավար", "Ավելացրեք ուսումնական նախագծման, գնահատման, պատասխանատու տեխնոլոգիայի, քաղաքականության, հետազոտության կամ պաշտպանության փորձը և այս մասնագետի վերահսկած չափանիշները։", ["Ուսումնական նախագծում", "Էթիկա", "Անվտանգություն և որակ"]]
    ]
  };

  const select = document.getElementById("language");
  let language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
  const esc = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

  function render() {
    const text = copy[language];
    document.documentElement.lang = language;
    document.title = language === "hy" ? "Մեր մասին · ՀԵՀ ԱԲ ակադեմիա" : "About · EUA AI Academy";
    document.getElementById("meta-description").setAttribute("content", text.meta);
    select.value = language;
    document.querySelectorAll("[data-copy]").forEach((element) => { if (text[element.dataset.copy]) element.innerHTML = text[element.dataset.copy]; });
    document.getElementById("standards-grid").innerHTML = standards[language].map((item, index) => `<article class="standard-card"><span>0${index + 1}</span><h3>${esc(item[0])}</h3><p>${esc(item[1])}</p></article>`).join("");
    document.getElementById("team-grid").innerHTML = team[language].map((member) => `<article class="team-card"><div class="team-photo-placeholder" aria-hidden="true"></div><div class="team-card-meta"><span class="team-position">${esc(member[0])}</span><h3>${esc(member[1])}</h3><p class="team-headline">${esc(member[2])}</p><p class="team-bio">${esc(member[3])}</p><ul class="team-expertise">${member[4].map((item) => `<li>${esc(item)}</li>`).join("")}</ul><a class="team-profile" href="#" data-placeholder-link>${esc(text.profileLink)}</a></div></article>`).join("");
    document.querySelectorAll("[data-placeholder-link]").forEach((link) => link.addEventListener("click", (event) => event.preventDefault()));
  }

  select.addEventListener("change", () => { language = select.value; localStorage.setItem("eua-ai-language", language); render(); });
  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
