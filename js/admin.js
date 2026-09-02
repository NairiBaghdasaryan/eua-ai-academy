(function () {
  "use strict";

  async function api(path, opts = {}) {
    const res = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      ...opts,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");
  }

  const loginEl = document.getElementById("admin-login");
  const appEl = document.getElementById("admin-app");
  const errEl = document.getElementById("admin-error");

  async function checkSession() {
    const { user } = await api("/api/auth/me");
    if (user?.role === "admin") {
      loginEl.classList.add("hidden");
      appEl.classList.remove("hidden");
      loadAdmin();
    }
  }

  document.getElementById("btn-admin-login")?.addEventListener("click", async () => {
    try {
      await api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: document.getElementById("admin-email").value,
          password: document.getElementById("admin-password").value,
        }),
      });
      const { user } = await api("/api/auth/me");
      if (user.role !== "admin") throw new Error("Not an admin account");
      loginEl.classList.add("hidden");
      appEl.classList.remove("hidden");
      loadAdmin();
    } catch (e) {
      errEl.textContent = e.message;
      errEl.classList.remove("hidden");
    }
  });

  document.getElementById("btn-admin-logout")?.addEventListener("click", async () => {
    await api("/api/auth/logout", { method: "POST" });
    window.location.href = "/login.html";
  });

  async function loadAdmin() {
    const [{ lessons }, stats] = await Promise.all([
      api("/api/admin/lessons"),
      api("/api/admin/stats"),
    ]);

    document.getElementById("stats").innerHTML = `
      <div class="stat-card"><strong>${stats.students}</strong><span>registered students</span></div>
      <div class="stat-card"><strong>${stats.learners_with_progress}</strong><span>started lessons</span></div>
    `;

    document.getElementById("lessons-body").innerHTML = lessons
      .map(
        (l) => `
      <tr data-id="${l.id}">
        <td>${esc(l.module_title)}</td>
        <td>${l.sort_order}</td>
        <td><input type="text" class="title-en" value="${esc(l.title_en)}"></td>
        <td><input type="text" class="title-hy" value="${esc(l.title_hy)}"></td>
        <td><input type="text" class="youtube" value="${esc(l.youtube_url)}" placeholder="https://www.youtube.com/watch?v=..."></td>
        <td>
          <button type="button" class="btn btn-primary btn-save">Save</button>
          <div class="save-row"></div>
        </td>
      </tr>`
      )
      .join("");

    document.querySelectorAll(".btn-save").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const row = btn.closest("tr");
        try {
          await api(`/api/admin/lessons/${row.dataset.id}`, {
            method: "PUT",
            body: JSON.stringify({
              title_en: row.querySelector(".title-en").value,
              title_hy: row.querySelector(".title-hy").value,
              youtube_url: row.querySelector(".youtube").value.trim(),
            }),
          });
          row.querySelector(".save-row").textContent = "Saved ✓";
          setTimeout(() => (row.querySelector(".save-row").textContent = ""), 2000);
        } catch (e) {
          row.querySelector(".save-row").textContent = e.message;
        }
      });
    });
  }

  checkSession();
})();
