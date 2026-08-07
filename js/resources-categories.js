/**
 * Renders homepage resource category cards from RESOURCE_CATEGORIES.
 */
(function () {
  var grid = document.getElementById("resource-category-grid");
  if (!grid || !window.RESOURCE_CATEGORIES) return;

  grid.innerHTML = window.RESOURCE_CATEGORIES.map(function (cat) {
    return (
      '<a class="resource-card" href="' +
      window.resourceCategoryUrl(cat.slug) +
      '">' +
      '<div class="resource-card-image ' +
      cat.imageClass +
      '"></div>' +
      '<div class="resource-card-body">' +
      "<h3>" +
      window.escapeHtml(cat.label) +
      "</h3>" +
      '<p class="resource-short">' +
      window.escapeHtml(cat.short) +
      "</p>" +
      '<p class="resource-desc">' +
      window.escapeHtml(cat.description) +
      "</p>" +
      '<span class="btn btn-teal resource-btn">View resources <span class="resource-arrow" aria-hidden="true">→</span></span>' +
      "</div>" +
      "</a>"
    );
  }).join("");
})();
