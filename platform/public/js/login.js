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

const errEl = document.getElementById("error");
function showError(msg) {
  errEl.textContent = msg;
  errEl.classList.remove("hidden");
}

document.getElementById("show-register").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
  errEl.classList.add("hidden");
});

document.getElementById("show-login").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
  errEl.classList.add("hidden");
});

document.getElementById("btn-login").addEventListener("click", async () => {
  try {
    await api("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    });
    window.location.href = "/course.html";
  } catch (e) {
    showError(e.message);
  }
});

document.getElementById("btn-register").addEventListener("click", async () => {
  try {
    await api("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: document.getElementById("reg-name").value,
        email: document.getElementById("reg-email").value,
        password: document.getElementById("reg-password").value,
      }),
    });
    window.location.href = "/course.html";
  } catch (e) {
    showError(e.message);
  }
});

api("/api/auth/me").then(({ user }) => {
  if (user) window.location.href = user.role === "admin" ? "/admin.html" : "/course.html";
}).catch(() => {});
