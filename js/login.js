(function () {
  "use strict";

  let language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
  const copy = {
    en: {
      languageLabel: "Language selection", academyName: "EUA AI Academy",
      initiative: "An initiative of the European University of Armenia",
      back: "← Back to site",
      title: "Understand it. Question it. Build with it.",
      lead: "Click Log in to enter the demo academy — no account needed.",
      email: "Email (optional)", password: "Password (optional)", login: "Enter demo",
      noAccount: "Want the full platform later?", register: "Register",
      firstName: "First name", lastName: "Last name", newPassword: "Password (min 6 characters)",
      create: "Create account", haveAccount: "Have an account?",
      failed: "Request failed",
      offline: "Opening the shared demo…"
    },
    hy: {
      languageLabel: "Լեզվի ընտրություն", academyName: "ՀԵՀ ԱԲ ակադեմիա",
      initiative: "Հայաստանի Եվրոպական համալսարանի նախաձեռնություն",
      back: "← Վերադառնալ կայք",
      title: "Հասկացիր։ Հարցադրիր։ Կառուցիր։",
      lead: "Սեղմեք «Մուտք»՝ դեմո ակադեմիա մտնելու համար։ Հաշիվ պետք չէ։",
      email: "Էլ. փոստ (ոչ պարտադիր)", password: "Գաղտնաբառ (ոչ պարտադիր)", login: "Մտնել դեմո",
      noAccount: "Ամբողջ հարթակը հետո՞", register: "Գրանցվել",
      firstName: "Անուն", lastName: "Ազգանուն", newPassword: "Գաղտնաբառ (առնվազն 6 նիշ)",
      create: "Ստեղծել հաշիվ", haveAccount: "Արդեն ունե՞ք հաշիվ։",
      failed: "Հարցումը չհաջողվեց",
      offline: "Բացվում է համօգտագործվող դեմոն…"
    }
  };

  function applyLanguage() {
    document.documentElement.lang = language;
    document.title = language === "hy" ? "ՀԵՀ ԱԲ ակադեմիա - Մուտք" : "EUA AI Academy - Log in";
    document.querySelectorAll("[data-copy]").forEach((element) => {
      element.textContent = copy[language][element.dataset.copy];
    });
    document.querySelectorAll("[data-copy-aria]").forEach((element) => {
      element.setAttribute("aria-label", copy[language][element.dataset.copyAria]);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
  }

  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
    language = button.dataset.language;
    localStorage.setItem("eua-ai-language", language);
    applyLanguage();
  }));
  applyLanguage();

  const errEl = document.getElementById("auth-error");
  const requestedReturn = new URLSearchParams(window.location.search).get("return") || "dashboard.html";
  function destination() {
    // Keep post-login navigation within this academy, including GitHub subpaths.
    const target = new URL(requestedReturn, window.location.href);
    const base = new URL('.', window.location.href);
    const name = target.pathname.slice(base.pathname.length);
    if (target.origin !== base.origin || !target.pathname.startsWith(base.pathname) || !['course.html','dashboard.html','admin.html','ai-explorers.html'].includes(name)) return 'dashboard.html';
    if (name === 'course.html') target.searchParams.set('lang', language);
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
        ...opts,
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
    document.getElementById("login-panel").classList.add("hidden");
    document.getElementById("register-panel").classList.remove("hidden");
    errEl?.classList.add("hidden");
  });

  document.getElementById("show-login")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("register-panel").classList.add("hidden");
    document.getElementById("login-panel").classList.remove("hidden");
    errEl?.classList.add("hidden");
  });

  document.getElementById("btn-login")?.addEventListener("click", async () => {
    const email = document.getElementById("email")?.value.trim() || "";
    const password = document.getElementById("password")?.value || "";

    // Shared demo: no credentials required
    if (!email || !password) {
      enterDemoAcademy();
      return;
    }

    try {
      await api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
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

  // If already in demo, skip the form
  if (window.EuaDemo?.isDemo()) {
    window.location.href = destination();
    return;
  }

  api("/api/auth/me").then(({ user }) => {
    if (user) window.location.href = user.role === "admin" ? "admin.html" : destination();
  }).catch(() => {});
})();
