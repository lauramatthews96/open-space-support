/**
 * Renders research listings on /research-evidence.html
 */
(function () {
  var mount = document.getElementById("research-list");
  if (!mount || !window.RESEARCH_CATEGORIES) return;

  function escape(str) {
    if (window.escapeHtml) return window.escapeHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderItem(item) {
    var readLabel = "Read " + item.title + ", opens in new tab";
    return (
      '<article class="research-card" id="research-' +
      escape(item.slug) +
      '">' +
      '<div class="research-card-body">' +
      "<h3>" +
      escape(item.title) +
      "</h3>" +
      '<p class="research-meta">' +
      escape(item.authors) +
      " · " +
      escape(item.source) +
      "</p>" +
      '<p class="research-summary">' +
      escape(item.summary) +
      "</p>" +
      '<a class="btn btn-teal research-read-btn" href="' +
      escape(item.url) +
      '" target="_blank" rel="noopener noreferrer" aria-label="' +
      escape(readLabel) +
      '">' +
      "Read the paper <span class=\"research-read-arrow\" aria-hidden=\"true\">→</span>" +
      "</a>" +
      "</div>" +
      "</article>"
    );
  }

  mount.innerHTML = window.RESEARCH_CATEGORIES.map(function (category) {
    return (
      '<section class="research-category" aria-labelledby="research-cat-' +
      escape(category.slug) +
      '">' +
      '<h2 class="research-category-title" id="research-cat-' +
      escape(category.slug) +
      '">' +
      escape(category.label) +
      "</h2>" +
      '<div class="research-category-grid" role="list">' +
      category.items.map(renderItem).join("") +
      "</div>" +
      "</section>"
    );
  }).join("");

  var disclosure = window.RESEARCH_DISCLOSURE;
  var disclosureEl = document.getElementById("research-disclosure");
  if (disclosure && disclosureEl) {
    disclosureEl.innerHTML =
      "<h2 id=\"research-disclosure-heading\">" +
      escape(disclosure.heading) +
      "</h2>" +
      disclosure.body
        .split("\n\n")
        .map(function (paragraph) {
          return "<p>" + escape(paragraph) + "</p>";
        })
        .join("");
  }
})();
