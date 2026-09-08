const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const year = document.getElementById("year");

if (year) year.textContent = String(new Date().getFullYear());

function pageKey(value) {
  const name = String(value || "")
    .split("/")
    .pop()
    .split("?")[0]
    .replace(/\.html$/, "");
  return name || "index";
}

function getCurrentPage() {
  return pageKey(window.location.pathname);
}

function isResourcesPath() {
  const path = window.location.pathname;
  const page = getCurrentPage();
  return (
    path.includes("/resources/") ||
    page === "resources" ||
    page === "external-resources" ||
    page === "reading-recommendations" ||
    page === "research-evidence" ||
    page === "your-resources"
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

    const linkPage = pageKey(href);
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
    const linkPage = pageKey(href);
    const linkCategory = href.includes("category=")
      ? new URLSearchParams(href.split("?")[1] || "").get("category")
      : "";

    let isActive = false;

    if (linkPage === currentPage) {
      if (currentPage === "resources" && linkCategory) {
        isActive = linkCategory === resourcesCategory;
      } else if (
        currentPage === "resources" &&
        !linkCategory &&
        href.split("?")[0].replace(/\/$/, "") === "/resources"
      ) {
        isActive = !resourcesCategory;
      } else if (currentPage !== "resources") {
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
    document.documentElement.classList.toggle("nav-open", !open);
    document.body.classList.toggle("nav-open", !open);
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

(function initCookieBanner() {
  var key = "oss_cookie_consent_v1";
  try {
    if (localStorage.getItem(key) === "accepted") return;
  } catch (e) {
    /* storage blocked */
  }

  var banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-label", "Cookie notice");
  banner.setAttribute("aria-describedby", "cookie-banner-text");
  banner.innerHTML =
    '<div class="cookie-banner-inner">' +
    '<p id="cookie-banner-text">' +
    "We use cookies so this site can work. We do not use them for advertising. " +
    '<a href="/cookies">Cookie Policy</a>' +
    "</p>" +
    '<button type="button" class="btn btn-gold cookie-banner-accept" data-cookie-accept>' +
    "Accept" +
    "</button>" +
    "</div>";

  document.body.appendChild(banner);
  document.body.classList.add("cookie-banner-open");

  function setBannerHeight() {
    document.body.style.setProperty(
      "--cookie-banner-h",
      banner.offsetHeight + "px"
    );
  }

  var resizeObserver = null;
  setBannerHeight();
  window.addEventListener("resize", setBannerHeight);
  if (typeof ResizeObserver === "function") {
    resizeObserver = new ResizeObserver(setBannerHeight);
    resizeObserver.observe(banner);
  }

  banner.querySelector("[data-cookie-accept]").addEventListener("click", function () {
    try {
      localStorage.setItem(key, "accepted");
    } catch (e) {
      /* storage blocked */
    }
    window.removeEventListener("resize", setBannerHeight);
    if (resizeObserver) resizeObserver.disconnect();
    banner.remove();
    document.body.classList.remove("cookie-banner-open");
    document.body.style.removeProperty("--cookie-banner-h");
  });
})();

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
