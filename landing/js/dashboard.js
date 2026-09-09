(function () {
  "use strict";
  const language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
  const ui = {
    en: { brand: "AI Academy", myCourses: "My courses", profile: "Profile", logout: "Log out", myAcademy: "My academy", learning: "Your learning", learningCopy: "Enroll, continue learning, or explore what is coming next.", browse: "Browse academy", loading: "Loading your courses…", yourProfile: "Your profile", profileCopy: "Keep your academy contact information up to date.", firstName: "First name", lastName: "Last name", email: "Email", phone: "Phone <span>(optional)</span>", save: "Save profile", signIn: "Sign in required", failed: "Request failed", joinTelegram: "Join Telegram group ↗", telegramLater: "Telegram access will appear here when the group is connected.", continueCourse: "Continue course", payment: "Continue to payment", promoQuestion: "Have a promo code?", reminder: "Get a reminder", enroll: "Enroll", usePromo: "Use promo code", enrolled: "Enrolled", coming: "Coming soon", available: "Available", modules: "modules", tests: "tests", promoLabel: "100% discount promo code", promoPlaceholder: "Enter code", apply: "Apply", processing: "Processing enrollment…", paymentLater: "Your enrollment is saved. Online payment will open when the payment provider is connected.", welcome: "Welcome", learner: "learner", saved: "Profile saved.", video: "video", demoNote: "Shared demo mode" },
    hy: { brand: "ԱԲ ակադեմիա", myCourses: "Իմ դասընթացները", profile: "Անձնական տվյալներ", logout: "Ելք", myAcademy: "Իմ ակադեմիան", learning: "Ձեր ուսումնառությունը", learningCopy: "Գրանցվեք, շարունակեք սովորել կամ բացահայտեք առաջիկա դասընթացները։", browse: "Դիտել ակադեմիան", loading: "Բեռնվում են ձեր դասընթացները…", yourProfile: "Ձեր անձնական տվյալները", profileCopy: "Թարմ պահեք ակադեմիայի համար ձեր կոնտակտային տվյալները։", firstName: "Անուն", lastName: "Ազգանուն", email: "Էլ. փոստ", phone: "Հեռախոս <span>(ոչ պարտադիր)</span>", save: "Պահպանել", signIn: "Մուտք գործելը պարտադիր է", failed: "Հարցումը չհաջողվեց", joinTelegram: "Միանալ Telegram խմբին ↗", telegramLater: "Telegram-ի հասանելիությունն այստեղ կհայտնվի խմբի միացումից հետո։", continueCourse: "Շարունակել դասընթացը", payment: "Շարունակել վճարումը", promoQuestion: "Ունե՞ք զեղչի կոդ։", reminder: "Ստանալ հիշեցում", enroll: "Գրանցվել", usePromo: "Օգտագործել զեղչի կոդ", enrolled: "Գրանցված եք", coming: "Շուտով", available: "Հասանելի է", modules: "մոդուլ", tests: "թեստ", promoLabel: "100% զեղչի կոդ", promoPlaceholder: "Մուտքագրեք կոդը", apply: "Կիրառել", processing: "Գրանցումն ընթացքի մեջ է…", paymentLater: "Ձեր գրանցումը պահպանված է։ Առցանց վճարումը կբացվի վճարային համակարգը միացնելուց հետո։", welcome: "Բարի գալուստ", learner: "սովորող", saved: "Տվյալները պահպանված են։", video: "տեսանյութ", demoNote: "Համօգտագործվող դեմո" }
  }[language];
  const courseHy = {
    "ai-explorers": ["ԱԲ բացահայտողներ", "Ավարտական դասարանների և քոլեջների ուսանողներ", "Բացահայտեք ԱԲ-ը սլայդներով, ընթերցանությամբ և գործնական պրոմփթերով՝ առանց տեսանյութի։"],
    students: ["ԱԲ ուսանողների համար", "Համալսարանի ուսանողներ", "Հետազոտեք, սովորեք և ստեղծեք՝ պահպանելով ակադեմիական ազնվությունը։"],
    educators: ["ԱԲ դասավանդողների համար", "Դասավանդողներ և պրոֆեսորադասախոսական կազմ", "Նախագծեք ուսումնառությունը, հետադարձ կապը և ԱԲ-ի լսարանային կիրառումը։"],
    government: ["ԱԲ-ը հանրային կառավարման և պետական հատվածի համար", "Հանրային ծառայության մասնագետներ", "Պատասխանատու կերպով կիրառեք ԱԲ-ը հանրային ոլորտի աշխատանքում։"]
  };
  document.documentElement.lang = language;
  document.title = language === "hy" ? "Իմ ակադեմիան · ՀԵՀ ԱԲ ակադեմիա" : "My Academy · EUA AI Academy";
  document.querySelectorAll("[data-copy]").forEach((element) => { element.innerHTML = ui[element.dataset.copy]; });

  async function api(path, options = {}) {
    if (window.EuaDemo?.isDemo()) return window.EuaDemo.handle(path, options);
    try {
      const response = await fetch(path, {
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        ...options
      });
      const data = await response.json().catch(() => ({}));
      if (response.status === 401) {
        window.EuaDemo?.enterDemo();
        return window.EuaDemo.handle(path, options);
      }
      if (!response.ok) throw new Error(data.error || ui.failed);
      return data;
    } catch (_error) {
      window.EuaDemo?.enterDemo();
      return window.EuaDemo.handle(path, options);
    }
  }

  function escapeHtml(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }

  function formatMinutes(minutes) {
    if (!minutes) return language === "hy" ? "սլայդներ և տեքստ" : "slides & reading";
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return language === "hy" ? `${hours} ժ${remainder ? ` ${remainder} ր` : ""} ${ui.video}` : remainder ? `${hours}h ${remainder}m video` : `${hours}h video`;
  }

  let profile;

  function courseAction(course) {
    if (course.enrollment_status === "active") {
      const telegram = course.telegram_url
        ? `<a class="course-community" href="${escapeHtml(course.telegram_url)}" target="_blank" rel="noopener">${ui.joinTelegram}</a>`
        : `<span class="course-community muted">${ui.telegramLater}</span>`;
      return `<div class="dashboard-card-actions"><a class="btn btn-primary" href="course.html">${ui.continueCourse}</a>${telegram}</div>`;
    }
    if (course.course_status === "coming_soon") {
      return `<div class="dashboard-card-actions"><a class="btn btn-outline" href="track.html?track=${course.slug}#reminder">${ui.reminder}</a></div>`;
    }
    return `<div class="dashboard-card-actions"><button class="btn btn-primary" type="button" data-enroll="${course.slug}">${ui.enroll}</button></div>`;
  }

  function renderCourses() {
    const container = document.getElementById("dashboard-courses");
    container.innerHTML = profile.courses.map((course) => {
      const localized = language === "hy" ? courseHy[course.slug] : [course.title, course.audience, course.summary];
      if (course.slug === 'ai-explorers') localized[2] = language === 'hy' ? 'Ուսումնասիրեք ԱԲ-ը երկլեզու ձեռնարկի, տեսողական բացատրությունների և գործնական աշխատանքների միջոցով։' : 'Learn with the bilingual handbook, visual explanations, practical labs, and AI tool directory.';
      const meta = course.slug === 'ai-explorers'
        ? (language === 'hy' ? '<span>8 դաս</span><span>4 գործնական աշխատանք</span><span>100 կիրառման գաղափար</span>' : '<span>8 lessons</span><span>4 practice labs</span><span>100 use cases</span>')
        : `<span>${formatMinutes(course.video_minutes)}</span><span>${course.module_count} ${ui.modules}</span><span>${course.exam_count} ${ui.tests}</span>`;
      return `
      <article class="dashboard-course-card ${course.enrollment_status === "active" ? "is-enrolled" : ""}">
        <div class="dashboard-card-top"><span>${escapeHtml(localized[1])}</span><span class="course-state">${course.enrollment_status === "active" ? ui.enrolled : course.course_status === "coming_soon" ? ui.coming : ui.available}</span></div>
        <div><h3>${escapeHtml(localized[0])}</h3><p>${escapeHtml(localized[2])}</p></div>
        <div class="course-meta">${meta}</div>
        ${courseAction(course)}
      </article>
    `; }).join("");
    bindCourseActions();
  }

  async function enroll(courseSlug) {
    try {
      await api("/api/enrollments", {
        method: "POST",
        body: JSON.stringify({ course_slug: courseSlug, promo_code: "" })
      });
      profile = await api("/api/profile");
      renderCourses();
    } catch (error) {
      console.error(error);
    }
  }

  function bindCourseActions() {
    document.querySelectorAll("[data-enroll]").forEach((button) => button.addEventListener("click", () => enroll(button.dataset.enroll)));
  }

  function populateProfile() {
    const user = profile.user;
    const parts = (user.name || "").trim().split(/\s+/);
    document.getElementById("welcome-title").textContent = `${ui.welcome}, ${user.first_name || parts[0] || ui.learner}`;
    document.getElementById("user-avatar").textContent = `${user.first_name?.[0] || parts[0]?.[0] || "D"}${user.last_name?.[0] || parts[1]?.[0] || "S"}`.toUpperCase();
    document.getElementById("profile-first-name").value = user.first_name || parts[0] || "";
    document.getElementById("profile-last-name").value = user.last_name || parts.slice(1).join(" ") || "";
    document.getElementById("profile-email").value = user.email;
    document.getElementById("profile-phone").value = user.phone || "";
  }

  document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-view]").forEach((item) => item.classList.toggle("active", item === button));
    document.getElementById("courses-view").classList.toggle("hidden", button.dataset.view !== "courses");
    document.getElementById("profile-view").classList.toggle("hidden", button.dataset.view !== "profile");
  }));

  document.getElementById("profile-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("profile-message");
    try {
      await api("/api/profile", {
        method: "PUT",
        body: JSON.stringify({
          first_name: document.getElementById("profile-first-name").value,
          last_name: document.getElementById("profile-last-name").value,
          phone: document.getElementById("profile-phone").value
        })
      });
      message.textContent = ui.saved;
    } catch (error) { message.textContent = error.message; }
  });

  document.getElementById("btn-logout").addEventListener("click", async () => {
    await api("/api/auth/logout", { method: "POST" });
    window.EuaDemo?.exitDemo();
    window.location.href = "index.html";
  });

  if (!window.EuaDemo?.isDemo()) window.EuaDemo?.enterDemo();

  api("/api/profile").then((data) => {
    profile = data;
    populateProfile();
    renderCourses();
  }).catch(() => {
    window.location.href = "login.html";
  });
})();
