/**
 * Renders external resources on individual resource article pages.
 */
(function () {
  var mount = document.getElementById("external-resources");
  if (!mount || !window.renderResourcesExternalSection) return;

  var categorySlug = mount.getAttribute("data-category-slug") || "";
  window.renderResourcesExternalSection(categorySlug, mount);
})();
