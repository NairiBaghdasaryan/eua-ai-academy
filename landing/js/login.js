(function () {
  "use strict";

  let language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
  let mode = "login";
  const copy = {
    en: {
      skip: "Skip to log in",
      languageLabel: "Language selection",
      academyName: "EUA AI Academy",
      initiative: "An initiative of the European University of Armenia",
      back: "← Back to site",
      asideEyebrow: "EUA AI Academy",
      motto: "Human judgment first.",
      asideLead: "Learn how AI works, use it for real tasks, and keep people responsible for the result — in English and Armenian.",
      missionLabel: "Mission",
      missionTitle: "Make responsible AI capability practical and accessible across Armenia.",
      visionLabel: "Vision",
      visionTitle: "An Armenia where AI strengthens human judgment, opportunity, and progress.",
      belief: "AI should expand human capability — not replace responsibility.",
      formEyebrow: "My academy",
      title: "Log in",
      titleRegister: "Create your account",
      lead: "Enter the demo academy with one click, or sign in with your account when the platform is available.",
      leadRegister: "Create an account for the full platform. On this demo site, registration opens the shared academy.",
      email: "Email",
      emailRequired: "Email",
      emailPlaceholder: "name@example.com",
      password: "Password",
      passwordPlaceholder: "••••••••",
      demoHint: "Demo access: leave the fields empty and continue.",
      login: "Continue to academy",
      loginLink: "Log in",
      noAccount: "Need an account?",
      register: "Register",
      firstName: "First name",
      lastName: "Last name",
      newPassword: "Password (min 6 characters)",
      create: "Create account",
      haveAccount: "Already have an account?",
      failed: "Request failed",
      offline: "Opening the shared demo…"
    },
    hy: {
      skip: "Անցնել մուտքին",
      languageLabel: "Լեզվի ընտրություն",
      academyName: "ՀԵՀ ԱԲ ակադեմիա",
      initiative: "Հայաստանի Եվրոպական համալսարանի նախաձեռնություն",
      back: "← Վերադառնալ կայք",
      asideEyebrow: "ՀԵՀ ԱԲ ակադեմիա",
      motto: "Մարդկային դատողությունն առաջնային է։",
      asideLead: "Սովորեք՝ ինչպես է աշխատում ԱԲ-ը, կիրառեք այն իրական առաջադրանքներում և պահպանեք մարդկային պատասխանատվությունը՝ հայերեն և անգլերեն։",
      missionLabel: "Առաքելություն",
      missionTitle: "Պատասխանատու ԱԲ կարողությունները դարձնել գործնական և հասանելի ամբողջ Հայաստանում։",
      visionLabel: "Տեսլական",
      visionTitle: "Հայաստան, որտեղ ԱԲ-ը ուժեղացնում է մարդկային դատողությունը, հնարավորություններն ու առաջընթացը։",
      belief: "ԱԲ-ը պետք է ընդլայնի մարդկային կարողությունները, ոչ թե փոխարինի պատասխանատվությունը։",
      formEyebrow: "Իմ ակադեմիան",
      title: "Մուտք",
      titleRegister: "Ստեղծել հաշիվ",
      lead: "Մեկ սեղմումով մտեք դեմո ակադեմիա, կամ մուտք գործեք ձեր հաշվով, երբ հարթակը հասանելի է։",
      leadRegister: "Ստեղծեք հաշիվ ամբողջական հարթակի համար։ Այս դեմո կայքում գրանցումը բացում է համօգտագործվող ակադեմիան։",
      email: "Էլ. փոստ",
      emailRequired: "Էլ. փոստ",
      emailPlaceholder: "name@example.com",
      password: "Գաղտնաբառ",
      passwordPlaceholder: "••••••••",
      demoHint: "Դեմո մուտք․ դաշտերը թողեք դատարկ և շարունակեք։",
      login: "Շարունակել դեպի ակադեմիա",
      loginLink: "Մուտք",
      noAccount: "Հաշիվ պե՞տք է։",
      register: "Գրանցվել",
      firstName: "Անուն",
      lastName: "Ազգանուն",
      newPassword: "Գաղտնաբառ (առնվազն 6 նիշ)",
      create: "Ստեղծել հաշիվ",
      haveAccount: "Արդեն ունե՞ք հաշիվ։",
      failed: "Հարցումը չհաջողվեց",
      offline: "Բացվում է համօգտագործվող դեմոն…"
    }
  };

  function applyLanguage() {
    const text = copy[language];
    document.documentElement.lang = language;
    document.title = language === "hy" ? "ՀԵՀ ԱԲ ակադեմիա - Մուտք" : "EUA AI Academy - Log in";
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const key = element.dataset.copy;
      if (key === "title") element.textContent = mode === "register" ? text.titleRegister : text.title;
      else if (key === "lead") element.textContent = mode === "register" ? text.leadRegister : text.lead;
      else if (text[key] != null) element.textContent = text[key];
    });
    document.querySelectorAll("[data-copy-placeholder]").forEach((element) => {
      const value = text[element.dataset.copyPlaceholder];
      if (value != null) element.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-copy-aria]").forEach((element) => {
      element.setAttribute("aria-label", text[element.dataset.copyAria]);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  }

  function setMode(next) {
    mode = next;
    document.getElementById("login-panel").classList.toggle("hidden", mode !== "login");
    document.getElementById("register-panel").classList.toggle("hidden", mode !== "register");
    errEl?.classList.add("hidden");
    applyLanguage();
    const focusId = mode === "register" ? "reg-first-name" : "email";
    document.getElementById(focusId)?.focus();
  }

  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
    language = button.dataset.language;
    localStorage.setItem("eua-ai-language", language);
    applyLanguage();
  }));

  const errEl = document.getElementById("auth-error");
  const requestedReturn = new URLSearchParams(window.location.search).get("return") || "dashboard.html";
  function destination() {
    const target = new URL(requestedReturn, window.location.href);
    const base = new URL(".", window.location.href);
    const name = target.pathname.slice(base.pathname.length);
    if (target.origin !== base.origin || !target.pathname.startsWith(base.pathname) || !["course.html", "dashboard.html", "admin.html", "ai-explorers.html"].includes(name)) return "dashboard.html";
    if (name === "course.html") target.searchParams.set("lang", language);
    return name + target.search;
  }

  function showError(msg) {
    if (!errEl) return;
    errEl.textContent = msg;
    errEl.classList.remove("hidden");
  }

  function enterDemoAcademy() {
    window.EuaDemo?.enterDemo();
    window.location.href = destination();
  }

  async function api(path, opts = {}) {
    let res;
    try {
      res = await fetch(path, {
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        ...opts
      });
    } catch (_error) {
      throw new Error("offline");
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      if (res.status === 404 || res.status >= 500) throw new Error("offline");
      throw new Error(data.error || copy[language].failed);
    }
    return data;
  }

  document.getElementById("show-register")?.addEventListener("click", (e) => {
    e.preventDefault();
    setMode("register");
  });

  document.getElementById("show-login")?.addEventListener("click", (e) => {
    e.preventDefault();
    setMode("login");
  });

  document.getElementById("btn-login")?.addEventListener("click", async () => {
    const email = document.getElementById("email")?.value.trim() || "";
    const password = document.getElementById("password")?.value || "";

    if (!email || !password) {
      enterDemoAcademy();
      return;
    }

    try {
      await api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      window.EuaDemo?.exitDemo();
      window.location.href = destination();
    } catch (error) {
      if (error.message === "offline") enterDemoAcademy();
      else showError(error.message);
    }
  });

  document.getElementById("btn-register")?.addEventListener("click", async () => {
    enterDemoAcademy();
  });

  document.getElementById("login-panel")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("btn-login")?.click();
    }
  });

  document.getElementById("register-panel")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("btn-register")?.click();
    }
  });

  applyLanguage();

  if (window.EuaDemo?.isDemo()) {
    window.location.href = destination();
    return;
  }

  api("/api/auth/me").then(({ user }) => {
    if (user) window.location.href = user.role === "admin" ? "admin.html" : destination();
  }).catch(() => {});
})();
