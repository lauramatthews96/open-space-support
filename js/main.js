const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const year = document.getElementById("year");

if (year) year.textContent = String(new Date().getFullYear());

function getCurrentPage() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

function setActiveNav() {
  const currentPage = getCurrentPage();

  document.querySelectorAll(".nav a, .header-cta").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const linkPage = href.split("/").pop() || "index.html";
    const isActive = linkPage === currentPage;

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

setActiveNav();

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}
