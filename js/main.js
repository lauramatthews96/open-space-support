const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const year = document.getElementById("year");

if (year) year.textContent = String(new Date().getFullYear());

function getCurrentPage() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

function isResourcesPath() {
  const path = window.location.pathname;
  return (
    path.includes("/resources/") ||
    getCurrentPage() === "resources.html" ||
    getCurrentPage() === "external-resources.html" ||
    getCurrentPage() === "reading-recommendations.html" ||
    getCurrentPage() === "research-evidence.html" ||
    getCurrentPage() === "your-resources.html"
  );
}

function getResourcesCategoryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category") || "";
}

function setActiveNav() {
  const currentPage = getCurrentPage();
  const resourcesCategory = getResourcesCategoryFromUrl();
  const onResourcesSection = isResourcesPath();

  document.querySelectorAll(".nav > a, .header-cta, .header-donate").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    const linkPage = href.split("/").pop().split("?")[0] || "index.html";
    const isActive = linkPage === currentPage;

    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const dropdownToggle = document.querySelector(".nav-dropdown-toggle");
  const dropdownLinks = document.querySelectorAll(
    ".nav-dropdown-menu a[href]"
  );

  if (dropdownToggle) {
    dropdownToggle.classList.toggle("is-active", onResourcesSection);
    if (onResourcesSection) {
      dropdownToggle.setAttribute("aria-current", "page");
    } else {
      dropdownToggle.removeAttribute("aria-current");
    }
  }

  dropdownLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const linkPage = href.split("/").pop().split("?")[0];
    const linkCategory = href.includes("category=")
      ? new URLSearchParams(href.split("?")[1] || "").get("category")
      : "";

    let isActive = false;

    if (linkPage === currentPage) {
      if (currentPage === "resources.html" && linkCategory) {
        isActive = linkCategory === resourcesCategory;
      } else if (currentPage === "resources.html" && !linkCategory && href.includes("resources.html")) {
        isActive = !resourcesCategory && href.indexOf("category=") === -1;
      } else if (currentPage !== "resources.html") {
        isActive = true;
      }
    }

    if (window.location.pathname.includes("/resources/") && linkCategory) {
      const articlePath = window.location.pathname;
      isActive =
        isActive ||
        (linkCategory &&
          articlePath.includes("/resources/" + linkCategory + "/"));
    }

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

document.querySelectorAll("[data-nav-dropdown]").forEach((dropdown) => {
  const menuToggle = dropdown.querySelector(".nav-dropdown-toggle");
  const menu = dropdown.querySelector(".nav-dropdown-menu");
  if (!menuToggle || !menu) return;

  function closeDropdown() {
    dropdown.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function openDropdown() {
    document.querySelectorAll("[data-nav-dropdown].is-open").forEach((other) => {
      if (other !== dropdown) {
        other.classList.remove("is-open");
        const otherToggle = other.querySelector(".nav-dropdown-toggle");
        if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
      }
    });
    dropdown.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  menuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = dropdown.classList.contains("is-open");
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  dropdown.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !dropdown.contains(event.relatedTarget)) {
      closeDropdown();
    }
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDropdown();
      menuToggle.focus();
    }
  });
});

(function initQuickExit() {
  var el = document.querySelector(".quick-exit");
  if (!el) return;
  var key = "oss_quick_exit_hidden_v1";
  try {
    if (localStorage.getItem(key) === "1") {
      el.hidden = true;
      return;
    }
  } catch (e) {
    /* storage blocked */
  }

  var dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.className = "quick-exit-dismiss";
  dismiss.textContent = "I'm safe, hide this";
  dismiss.addEventListener("click", function () {
    try {
      localStorage.setItem(key, "1");
    } catch (e) {
      /* storage blocked */
    }
    el.hidden = true;
  });
  el.appendChild(dismiss);
})();
