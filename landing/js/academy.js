(function () {
  "use strict";
  const copy = {
    en: {
      skip: "Skip to content", navCourses: "Online AI courses", navInPerson: "In person", navAbout: "About", login: "Log in", languageLabel: "Language selection",
      heroEyebrow: "European University of Armenia", heroTitle: "AI learning,<br><em>built around you.</em>",
      heroCopy: "Practical courses for the way you study, teach, and serve.", explore: "Explore courses <span aria-hidden=\"true\">↓</span>",
      coursesEyebrow: "Learn online", coursesTitle: "Online AI courses.", coursesSubtitle: "Choose your path.", explorersCopy: "For curious minds discovering how AI works.",
      available: "Enrollment open", comingSoon: "Coming soon",
      explorersTitle: "AI Explorers",
      studentsTitle: "AI for Students", studentsCopy: "Study smarter. Research better. Create responsibly.",
      educatorsTitle: "AI for Educators", educatorsCopy: "Bring thoughtful AI practice into the classroom.",
      governmentTitle: "AI for Public Sector & Governance", governmentCopy: "Use AI with confidence, care, and public purpose.",
      aboutEyebrow: "EUA AI Academy", aboutTitle: "Human judgment first.", aboutCopy: "Learn by doing, questioning, and applying AI to real work.",
      contact: "Contact us <span aria-hidden=\"true\">↗</span>",
      contactEyebrow: "Get in touch", contactTitle: "Contact EUA AI Academy",
      contactLead: "Write to us and we will get back to you.",
      contactName: "Full name", contactEmail: "Email", contactMessage: "Message",
      contactSubmit: "Submit", contactSuccess: "Thank you. Your message was sent.",
      contactRequired: "Please fill in all fields.", contactInvalidEmail: "Enter a valid email address.",
      contactFailed: "Could not send. Please try again.",
      myAcademy: "My academy", admin: "Admin",
      offlineEyebrow: "Live at EUA", offlineTitle: "In-person professional courses.", offlineIntro: "Focused two-week programmes for professionals who want practical AI workflows, expert guidance, and a workplace-ready final project.",
      formatWeeks: "weeks", formatDays: "days per week", formatSession: "per session", formatPeople: "participants maximum", viewOutline: "View course outline"
    },
    hy: {
      skip: "Անցնել բովանդակությանը", navCourses: "Առցանց ԱԲ դասընթացներ", navInPerson: "Առկա ուսուցում", navAbout: "Մեր մասին", login: "Մուտք", languageLabel: "Լեզվի ընտրություն",
      heroEyebrow: "Հայաստանի Եվրոպական Համալսարան", heroTitle: "ԱԲ կրթություն՝<br><em>ձեզ համար։</em>",
      heroCopy: "Գործնական դասընթացներ՝ սովորելու, դասավանդելու և ծառայելու համար։", explore: "Տեսնել դասընթացները <span aria-hidden=\"true\">↓</span>",
      coursesEyebrow: "Սովորեք առցանց", coursesTitle: "Առցանց ԱԲ դասընթացներ։", coursesSubtitle: "Ընտրեք ձեր ուղին։", explorersCopy: "Հետաքրքրասերների համար, ովքեր բացահայտում են ԱԲ-ը։",
      available: "Գրանցումը բաց է", comingSoon: "Շուտով",
      explorersTitle: "ԱԲ հետազոտողներ",
      studentsTitle: "ԱԲ ուսանողների համար", studentsCopy: "Սովորել, հետազոտել և ստեղծել պատասխանատու կերպով։",
      educatorsTitle: "ԱԲ դասավանդողների համար", educatorsCopy: "ԱԲ-ի մտածված կիրառումը բերել լսարան։",
      governmentTitle: "ԱԲ-ը հանրային կառավարման և պետական հատվածի համար", governmentCopy: "ԱԲ-ը կիրառել վստահ, հոգատար և հանրային նպատակով։",
      aboutEyebrow: "ՀԵՀ ԱԲ ակադեմիա", aboutTitle: "Նախ՝ մարդկային դատողությունը։", aboutCopy: "Սովորեք գործելով, հարցադրելով և ԱԲ-ը կիրառելով իրական աշխատանքում։",
      contact: "Կապվել մեզ հետ <span aria-hidden=\"true\">↗</span>",
      contactEyebrow: "Կապ", contactTitle: "Կապ ՀԵՀ ԱԲ ակադեմիայի հետ",
      contactLead: "Գրեք մեզ, և մենք կպատասխանենք։",
      contactName: "Անուն ազգանուն", contactEmail: "Էլ. փոստ", contactMessage: "Հաղորդագրություն",
      contactSubmit: "Ուղարկել", contactSuccess: "Շնորհակալություն։ Ձեր հաղորդագրությունն ուղարկված է։",
      contactRequired: "Խնդրում ենք լրացնել բոլոր դաշտերը։", contactInvalidEmail: "Մուտքագրեք վավեր էլ. փոստ։",
      contactFailed: "Չհաջողվեց ուղարկել։ Փորձեք կրկին։",
      myAcademy: "Իմ ակադեմիան", admin: "Կառավարում",
      offlineEyebrow: "Առկա՝ ՀԵՀ-ում", offlineTitle: "Մասնագիտական առկա դասընթացներ։", offlineIntro: "Երկշաբաթյա կենտրոնացված ծրագրեր մասնագետների համար՝ ԱԲ գործնական գործընթացներով, փորձագիտական ուղղորդմամբ և աշխատանքի համար պատրաստ եզրափակիչ նախագծով։",
      formatWeeks: "շաբաթ", formatDays: "օր շաբաթական", formatSession: "յուրաքանչյուր հանդիպումը", formatPeople: "առավելագույն մասնակից", viewOutline: "Դիտել դասընթացի ծրագիրը"
    }
  };

  const offlineCourses = {
    en: [
      ["business-management", "AI for Business & Management", "Managers, MBA and business students", "Turn strategy, operations, and management decisions into AI-assisted workflows."],
      ["marketing-sales", "AI in Marketing & Sales", "Marketers, sales teams and entrepreneurs", "Build sharper research, content, campaigns, and revenue workflows with AI."],
      ["finance-accounting", "AI in Finance & Accounting", "Finance, banking and economics professionals", "Accelerate analysis and reporting while strengthening controls and judgment."],
      ["product-project", "AI for Product & Project Management", "Product managers, project managers and IT/business students", "Move from discovery to delivery with AI-supported planning and execution."],
      ["data-decisions", "AI for Data Analysis & Decision Making", "Professionals across sectors", "Turn messy data into reliable analysis, clear evidence, and better decisions."],
      ["entrepreneurs-startups", "AI for Entrepreneurs & Startups", "Founders and business students", "Validate ideas, design lean operations, and build faster with responsible AI."],
      ["hr-recruitment", "AI in HR & Recruitment", "HR professionals and managers", "Improve talent workflows while protecting fairness, privacy, and human accountability."],
      ["education-teaching", "AI in Education & Teaching", "Teachers and lecturers", "Design stronger learning, feedback, and assessment without losing human judgment."]
    ],
    hy: [
      ["business-management", "ԱԲ-ը բիզնեսում և կառավարման մեջ", "Կառավարիչներ, MBA և բիզնեսի ուսանողներ", "Ռազմավարությունը, գործառույթներն ու կառավարչական որոշումները վերածեք ԱԲ-ով ուժեղացված գործընթացների։"],
      ["marketing-sales", "ԱԲ-ը մարքեթինգում և վաճառքում", "Մարքեթոլոգներ, վաճառքի թիմեր և ձեռնարկատերեր", "ԱԲ-ի միջոցով ստեղծեք ավելի ճշգրիտ հետազոտություն, բովանդակություն, արշավներ և եկամտային գործընթացներ։"],
      ["finance-accounting", "ԱԲ-ը ֆինանսներում և հաշվապահությունում", "Ֆինանսների, բանկային և տնտեսագիտական ոլորտների մասնագետներ", "Արագացրեք վերլուծությունն ու հաշվետվությունները՝ ամրապնդելով վերահսկողությունն ու դատողությունը։"],
      ["product-project", "ԱԲ-ը պրոդուկտների և նախագծերի կառավարման մեջ", "Պրոդուկտ և նախագծերի ղեկավարներ, ՏՏ ու բիզնեսի ուսանողներ", "ԱԲ-ի աջակցությամբ անցեք բացահայտումից մինչև պլանավորում և իրականացում։"],
      ["data-decisions", "ԱԲ-ը տվյալների վերլուծության և որոշումների կայացման մեջ", "Տարբեր ոլորտների մասնագետներ", "Չկարգավորված տվյալները վերածեք հուսալի վերլուծության, հստակ ապացույցների և ավելի լավ որոշումների։"],
      ["entrepreneurs-startups", "ԱԲ-ը ձեռնարկատերերի և ստարտափների համար", "Հիմնադիրներ և բիզնեսի ուսանողներ", "Ստուգեք գաղափարները, նախագծեք խնայող գործառույթներ և կառուցեք ավելի արագ՝ պատասխանատու ԱԲ-ով։"],
      ["hr-recruitment", "ԱԲ-ը մարդկային ռեսուրսներում և հավաքագրման մեջ", "ՄՌ մասնագետներ և ղեկավարներ", "Բարելավեք տաղանդների հետ աշխատանքի գործընթացները՝ պաշտպանելով արդարությունը, գաղտնիությունն ու մարդկային պատասխանատվությունը։"],
      ["education-teaching", "ԱԲ-ը կրթության և դասավանդման մեջ", "Ուսուցիչներ և դասախոսներ", "Նախագծեք ավելի արդյունավետ ուսուցում, հետադարձ կապ և գնահատում՝ պահպանելով մարդկային դատողությունը։"]
    ]
  };

  let language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";

  function t(key) {
    return copy[language][key] || copy.en[key] || key;
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = copy[language][element.dataset.copy];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-copy-aria]").forEach((element) => {
      const value = copy[language][element.dataset.copyAria];
      if (value) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    const offlineGridA = document.getElementById("offline-course-grid-a");
    const offlineGridB = document.getElementById("offline-course-grid-b");
    if (offlineGridA && offlineGridB) {
      const renderOfflineCard = (course, index) => `
        <a class="offline-card" href="in-person.html?course=${course[0]}">
          <div class="offline-card-top"><span>${String(index + 1).padStart(2, "0")}</span></div>
          <div><h3>${course[1]}</h3><p>${course[3]}</p></div>
          <div class="offline-audience"><span>${course[2]}</span><strong>${copy[language].viewOutline} →</strong></div>
        </a>`;
      const courses = offlineCourses[language];
      offlineGridA.innerHTML = courses.slice(0, 4).map((course, index) => renderOfflineCard(course, index)).join("");
      offlineGridB.innerHTML = courses.slice(4, 8).map((course, index) => renderOfflineCard(course, index + 4)).join("");
    }
  }

  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
    language = button.dataset.language;
    localStorage.setItem("eua-ai-language", language);
    applyLanguage();
  }));
  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage();
  document.querySelectorAll("[data-placeholder-link]").forEach((link) => link.addEventListener("click", (event) => event.preventDefault()));

  const contactBtn = document.getElementById("contact-btn");
  const contactModal = document.getElementById("contact-modal");
  const contactClose = document.getElementById("contact-modal-close");
  const contactForm = document.getElementById("contact-form");
  const contactError = document.getElementById("contact-error");
  const contactToast = document.getElementById("contact-toast");
  const contactSubmit = document.getElementById("contact-submit");

  function openContactModal(event) {
    event.preventDefault();
    contactModal?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    contactError?.classList.add("hidden");
    contactToast?.classList.add("hidden");
    document.getElementById("contact-name")?.focus();
  }

  function closeContactModal() {
    contactModal?.classList.add("hidden");
    document.body.style.overflow = "";
    contactError?.classList.add("hidden");
    contactToast?.classList.add("hidden");
  }

  function showError(message) {
    if (!contactError) return;
    contactError.textContent = message;
    contactError.classList.remove("hidden");
    contactToast?.classList.add("hidden");
  }

  contactBtn?.addEventListener("click", openContactModal);
  contactClose?.addEventListener("click", closeContactModal);
  contactModal?.addEventListener("click", (event) => {
    if (event.target === contactModal) closeContactModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeContactModal();
  });

  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("contact-name")?.value.trim() || "";
    const email = document.getElementById("contact-email")?.value.trim() || "";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    if (!name || !email || !message) {
      showError(t("contactRequired"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(t("contactInvalidEmail"));
      return;
    }

    contactSubmit.disabled = true;
    contactError?.classList.add("hidden");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        contactForm.reset();
        contactToast?.classList.remove("hidden");
        setTimeout(closeContactModal, 1800);
        return;
      }

      const data = await response.json().catch(() => null);
      if (data?.error) {
        showError(data.error);
        return;
      }

      // Static hosts (e.g. GitHub Pages) have no API — open email client instead.
      const subject = encodeURIComponent("EUA AI Academy contact");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:info@eua.am?subject=${subject}&body=${body}`;
      contactForm.reset();
      contactToast?.classList.remove("hidden");
      setTimeout(closeContactModal, 1200);
    } catch (error) {
      const subject = encodeURIComponent("EUA AI Academy contact");
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:info@eua.am?subject=${subject}&body=${body}`;
      contactForm.reset();
      contactToast?.classList.remove("hidden");
      setTimeout(closeContactModal, 1200);
    } finally {
      contactSubmit.disabled = false;
    }
  });

  fetch("/api/auth/me", { credentials: "same-origin" })
    .then((response) => response.json())
    .then(({ user }) => {
      if (!user) return;
      const accountLink = document.getElementById("account-link");
      accountLink.href = user.role === "admin" ? "/admin.html" : "/dashboard.html";
      accountLink.dataset.copy = user.role === "admin" ? "admin" : "myAcademy";
      applyLanguage();
    })
    .catch(() => {});
})();
