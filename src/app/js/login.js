const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  if (email === "admin@admin.com" && password === "123") {
    window.location.href = "logged.html"
  }
});
