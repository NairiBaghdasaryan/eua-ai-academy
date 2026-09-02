(function () {
  "use strict";

  let language = localStorage.getItem("eua-ai-language") === "hy" ? "hy" : "en";
  const copy = {
    en: { languageLabel: "Language selection", academyName: "EUA AI Academy", initiative: "An initiative of the European University of Armenia", back: "← Back to site", title: "Understand it. Question it. Build with it.", lead: "Log in or create an account to watch lessons and take module quizzes.", email: "Email", password: "Password", login: "Log in", noAccount: "No account?", register: "Register", firstName: "First name", lastName: "Last name", newPassword: "Password (min 6 characters)", create: "Create account", haveAccount: "Have an account?", failed: "Request failed" },
    hy: { languageLabel: "Լեզվի ընտրություն", academyName: "ՀԵՀ ԱԲ ակադեմիա", initiative: "Հայաստանի Եվրոպական համալսարանի նախաձեռնություն", back: "← Վերադառնալ կայք", title: "Հասկացիր։ Հարցադրիր։ Կառուցիր։", lead: "Մուտք գործեք կամ ստեղծեք հաշիվ՝ դասերը դիտելու և մոդուլային թեստերը հանձնելու համար։", email: "Էլ. փոստ", password: "Գաղտնաբառ", login: "Մուտք", noAccount: "Հաշիվ չունե՞ք։", register: "Գրանցվել", firstName: "Անուն", lastName: "Ազգանուն", newPassword: "Գաղտնաբառ (առնվազն 6 նիշ)", create: "Ստեղծել հաշիվ", haveAccount: "Արդեն ունե՞ք հաշիվ։", failed: "Հարցումը չհաջողվեց" }
  };

  function applyLanguage() {
    document.documentElement.lang = language;
    document.title = language === "hy" ? "ՀԵՀ ԱԲ ակադեմիա - Մուտք" : "EUA AI Academy - Log in";
    document.querySelectorAll("[data-copy]").forEach((element) => { element.textContent = copy[language][element.dataset.copy]; });
    document.querySelectorAll("[data-copy-aria]").forEach((element) => { element.setAttribute("aria-label", copy[language][element.dataset.copyAria]); });
    document.querySelectorAll("[data-language]").forEach((button) => { button.setAttribute("aria-pressed", String(button.dataset.language === language)); });
  }

  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
    language = button.dataset.language;
    localStorage.setItem("eua-ai-language", language);
    applyLanguage();
  }));
  applyLanguage();

  async function api(path, opts = {}) {
    const res = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      ...opts,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || copy[language].failed);
    return data;
  }

  const errEl = document.getElementById("auth-error");
  const returnTo = new URLSearchParams(window.location.search).get("return") || "/dashboard.html";

  function showError(msg) {
    if (!errEl) return;
    errEl.textContent = msg;
    errEl.classList.remove("hidden");
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
    try {
      await api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        }),
      });
      window.location.href = returnTo;
    } catch (e) {
      showError(e.message);
    }
  });

  document.getElementById("btn-register")?.addEventListener("click", async () => {
    try {
      await api("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          first_name: document.getElementById("reg-first-name").value,
          last_name: document.getElementById("reg-last-name").value,
          email: document.getElementById("reg-email").value,
          password: document.getElementById("reg-password").value,
        }),
      });
      window.location.href = returnTo;
    } catch (e) {
      showError(e.message);
    }
  });

  api("/api/auth/me").then(({ user }) => {
    if (user) window.location.href = user.role === "admin" ? "/admin.html" : returnTo;
  }).catch(() => {});
})();
