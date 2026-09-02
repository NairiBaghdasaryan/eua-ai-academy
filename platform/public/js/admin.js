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

document.getElementById("btn-admin-login").addEventListener("click", async () => {
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

document.getElementById("btn-admin-logout").addEventListener("click", async () => {
  await api("/api/auth/logout", { method: "POST" });
  window.location.href = "/login.html";
});

async function loadAdmin() {
  const [{ lessons }, stats] = await Promise.all([
    api("/api/admin/lessons"),
    api("/api/admin/stats"),
  ]);

  document.getElementById("stats").innerHTML = `
    <div class="stat-card"><strong>${stats.students}</strong> registered students</div>
    <div class="stat-card"><strong>${stats.learners_with_progress}</strong> started lessons</div>
  `;

  const tbody = document.getElementById("lessons-body");
  tbody.innerHTML = lessons
    .map(
      (l) => `
    <tr data-id="${l.id}">
      <td>${l.module_title}</td>
      <td>${l.sort_order}</td>
      <td><input type="text" class="title-en" value="${esc(l.title_en)}"></td>
      <td><input type="text" class="title-hy" value="${esc(l.title_hy)}"></td>
      <td><input type="text" class="youtube" value="${esc(l.youtube_url)}" placeholder="https://youtube.com/watch?v=..."></td>
      <td><button class="btn btn-secondary btn-save" style="padding:0.35rem 0.65rem;font-size:0.75rem">Save</button><div class="save-row"></div></td>
    </tr>`
    )
    .join("");

  tbody.querySelectorAll(".btn-save").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const row = btn.closest("tr");
      const id = row.dataset.id;
      try {
        await api(`/api/admin/lessons/${id}`, {
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

function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

checkSession();
