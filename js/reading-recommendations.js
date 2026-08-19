/**
 * Renders reading recommendation cards on /reading-recommendations.html
 */
(function () {
  var grid = document.getElementById("reading-grid");
  if (!grid || !window.READING_RECOMMENDATIONS) return;

  function escape(str) {
    if (window.escapeHtml) return window.escapeHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderBookCard(book) {
    var fallback = window.readingCoverFallbackUrl(book.isbn);
    var coverAlt = "Cover of " + book.title + " by " + book.author;
    var buyLabel = "Buy " + book.title + " on Amazon UK, opens in new tab";

    return (
      '<article class="reading-card" id="book-' +
      escape(book.slug) +
      '">' +
      '<div class="reading-cover-wrap">' +
      '<img class="reading-cover" src="' +
      escape(book.cover) +
      '" alt="' +
      escape(coverAlt) +
      '" width="160" height="240" loading="lazy" data-fallback="' +
      escape(fallback) +
      '" />' +
      "</div>" +
      '<div class="reading-card-body">' +
      "<h2>" +
      escape(book.title) +
      " <span class=\"reading-author\">— " +
      escape(book.author) +
      "</span></h2>" +
      '<p class="reading-blurb">' +
      escape(book.blurb) +
      "</p>" +
      '<a class="btn btn-gold reading-buy-btn" href="' +
      escape(book.amazonUrl) +
      '" target="_blank" rel="noopener noreferrer sponsored" aria-label="' +
      escape(buyLabel) +
      '">' +
      "Buy now <span class=\"reading-buy-arrow\" aria-hidden=\"true\">→</span>" +
      "</a>" +
      "</div>" +
      "</article>"
    );
  }

  grid.innerHTML = window.READING_RECOMMENDATIONS.map(renderBookCard).join("");

  grid.querySelectorAll(".reading-cover[data-fallback]").forEach(function (img) {
    img.addEventListener("error", function onCoverError() {
      var fallback = img.getAttribute("data-fallback");
      if (!fallback || img.getAttribute("data-using-fallback") === "true") return;
      img.setAttribute("data-using-fallback", "true");
      img.src = fallback;
    });
  });

  var disclosure = window.READING_DISCLOSURE;
  var disclosureEl = document.getElementById("reading-disclosure");
  if (disclosure && disclosureEl) {
    disclosureEl.innerHTML =
      "<h2 id=\"reading-disclosure-heading\">" +
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
