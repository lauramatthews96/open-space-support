/**
 * Builds the main nav with a Resources dropdown (categories from RESOURCE_CATEGORIES).
 */
(function () {
  var nav = document.querySelector(".nav");
  if (!nav) return;

  // Turn back on when Stripe is ready to take donations.
  var SHOW_DONATE = false;

  var root =
    window.location.pathname.indexOf("/resources/") !== -1 ? "../../" : "";

  function href(path) {
    return root + path;
  }

  function escape(str) {
    if (window.escapeHtml) return window.escapeHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function categoryLinks() {
    var categories = window.RESOURCE_CATEGORIES || [];
    return categories
      .map(function (cat) {
        return (
          '<li role="none"><a class="nav-mega-item" href="' +
          href("resources.html?category=" + encodeURIComponent(cat.slug)) +
          '" role="menuitem">' +
          '<span class="nav-mega-item-label">' +
          escape(cat.label) +
          "</span>" +
          '<span class="nav-mega-item-desc">' +
          escape(cat.short || "") +
          "</span>" +
          "</a></li>"
        );
      })
      .join("");
  }

  nav.innerHTML =
    '<a href="' +
    href("index.html") +
    '">Home</a>' +
    '<a href="' +
    href("about.html") +
    '">About Us</a>' +
    '<a href="' +
    href("our-mission.html") +
    '">Our Mission</a>' +
    '<div class="nav-dropdown" data-nav-dropdown>' +
    '<button type="button" class="nav-dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-controls="nav-resources-menu">' +
    "Resources" +
    '<span class="nav-dropdown-chevron" aria-hidden="true"></span>' +
    "</button>" +
    '<div class="nav-dropdown-menu nav-mega" id="nav-resources-menu" role="menu">' +
    '<div class="nav-mega-head" role="none">' +
    '<p class="nav-dropdown-label" role="presentation">Browse by topic</p>' +
    '<a class="nav-mega-all" href="' +
    href("resources.html") +
    '" role="menuitem">All resources <span aria-hidden="true">→</span></a>' +
    "</div>" +
    '<ul class="nav-mega-grid" role="none">' +
    categoryLinks() +
    "</ul>" +
    '<div class="nav-mega-foot" role="none">' +
    '<a class="nav-dropdown-item" href="' +
    href("external-resources.html") +
    '" role="menuitem">' +
    '<svg class="nav-mega-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10 6H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3M14 4h6v6M20 4l-9 9"/></svg>' +
    "External Resources</a>" +
    '<a class="nav-dropdown-item" href="' +
    href("reading-recommendations.html") +
    '" role="menuitem">' +
    '<svg class="nav-mega-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/></svg>' +
    "Reading Recommendations</a>" +
    '<a class="nav-dropdown-item" href="' +
    href("research-evidence.html") +
    '" role="menuitem">' +
    '<svg class="nav-mega-icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M3 3v18h18M7 16l4-5 3 3 5-7"/></svg>' +
    "Related Research &amp; Evidence</a>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<a href="' +
    href("contact.html") +
    '">Contact</a>' +
    (SHOW_DONATE
      ? '<a class="nav-donate" href="' + href("donate.html") + '">Donate</a>'
      : "");

  var applyCta = document.querySelector(".header-cta");
  if (applyCta && applyCta.childElementCount === 0) {
    applyCta.innerHTML =
      'Apply<span class="header-cta-extra">&nbsp;for Support</span>';
  }
  if (SHOW_DONATE && applyCta && !document.querySelector(".header-donate")) {
    var donateBtn = document.createElement("a");
    donateBtn.className = "btn btn-outline-dark header-donate";
    donateBtn.href = href("donate.html");
    donateBtn.textContent = "Donate";
    applyCta.parentNode.insertBefore(donateBtn, applyCta);
  }

  if (SHOW_DONATE) {
    document.querySelectorAll(".footer-heading").forEach(function (heading) {
      if (heading.textContent.trim() !== "Explore") return;
      var col = heading.parentNode;
      if (!col || col.querySelector('a[href$="donate.html"]')) return;
      var donateLink = document.createElement("a");
      donateLink.href = href("donate.html");
      donateLink.textContent = "Donate";
      col.appendChild(donateLink);
    });
  }
})();
