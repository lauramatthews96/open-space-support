/**
 * Renders category-specific external resources on /resources and resource articles.
 */
(function () {
  var externalIcon =
    '<svg class="external-resources-link-icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">' +
    '<path d="M10.5 1.75H5.25v1.75h3.34L3.06 9.03l1.24 1.24 5.53-5.53v3.34h1.75V1.75z" fill="currentColor"/>' +
    '<path d="M11.375 7.875v3.5h-7v-7h3.5V4.375h-3.5a.875.875 0 0 0-.875.875v7c0 .483.392.875.875.875h7a.875.875 0 0 0 .875-.875v-3.5h-1.75z" fill="currentColor"/>' +
    "</svg>";

  /**
   * @param {string} logo
   * @returns {string}
   */
  function externalLogoSrc(logo) {
    if (!logo) return "";
    if (/^(https?:|\/)/.test(logo)) return logo;
    if (window.location.pathname.indexOf("/resources/") !== -1) {
      return "../../" + logo;
    }
    return logo;
  }

  /**
   * @param {Array} resources
   * @returns {string}
   */
  function renderExternalResourceCards(resources) {
    return resources
      .map(function (resource) {
        var linkLabel = "Visit " + resource.name + ", opens in new tab";
        var logoHtml = resource.logo
          ? '<img class="external-resources-logo" src="' +
            window.escapeHtml(externalLogoSrc(resource.logo)) +
            '" alt="" width="120" height="48" loading="lazy" />'
          : "";
        var urlNote = resource.urlNote
          ? '<p class="external-resources-card-note">' +
            window.escapeHtml(resource.urlNote) +
            "</p>"
          : "";

        return (
          '<article class="external-resources-card">' +
          logoHtml +
          '<div class="external-resources-card-body">' +
          "<h3>" +
          window.escapeHtml(resource.name) +
          "</h3>" +
          "<p>" +
          window.escapeHtml(resource.description) +
          "</p>" +
          urlNote +
          '<a class="external-resources-link" href="' +
          window.escapeHtml(resource.url) +
          '" target="_blank" rel="noopener noreferrer" aria-label="' +
          window.escapeHtml(linkLabel) +
          '">' +
          "<span>Visit " +
          window.escapeHtml(resource.name) +
          " →</span>" +
          externalIcon +
          "</a>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  /**
   * @param {{ heading: string, subhead: string }} section
   * @param {Array} resources
   * @param {string} headingId
   * @returns {string}
   */
  function renderExternalResourceSectionBlock(section, resources, headingId) {
    if (!section || resources.length === 0) return "";

    return (
      '<section class="external-resources" aria-labelledby="' +
      window.escapeHtml(headingId) +
      '">' +
      '<div class="external-resources-inner">' +
      '<h2 id="' +
      window.escapeHtml(headingId) +
      '">' +
      window.escapeHtml(section.heading) +
      "</h2>" +
      '<p class="external-resources-subhead">' +
      window.escapeHtml(section.subhead) +
      "</p>" +
      '<div class="external-resources-grid">' +
      renderExternalResourceCards(resources) +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  /**
   * @returns {string[]}
   */
  function getExternalCategoryOrder() {
    var ordered = (window.RESOURCE_CATEGORIES || []).map(function (category) {
      return category.slug;
    });
    var sections = window.EXTERNAL_RESOURCE_SECTIONS || {};

    Object.keys(sections).forEach(function (slug) {
      if (ordered.indexOf(slug) === -1) {
        ordered.push(slug);
      }
    });

    return ordered;
  }

  /**
   * @param {string} [categorySlug]
   * @param {HTMLElement} [mountEl]
   */
  window.renderResourcesExternalSection = function renderResourcesExternalSection(
    categorySlug,
    mountEl
  ) {
    var mount = mountEl || document.getElementById("resources-external");
    if (!mount || !window.getExternalResourcesForCategory) return;

    var sections = window.EXTERNAL_RESOURCE_SECTIONS || {};
    var html = "";

    if (categorySlug) {
      var section = sections[categorySlug];
      var resources = window.getExternalResourcesForCategory(categorySlug);
      html = renderExternalResourceSectionBlock(
        section,
        resources,
        "external-resources-heading-" + categorySlug
      );
    } else {
      html = getExternalCategoryOrder()
        .map(function (slug) {
          return renderExternalResourceSectionBlock(
            sections[slug],
            window.getExternalResourcesForCategory(slug),
            "external-resources-heading-" + slug
          );
        })
        .filter(Boolean)
        .join("");
    }

    if (!html) {
      mount.hidden = true;
      mount.innerHTML = "";
      return;
    }

    mount.innerHTML = html;
    mount.hidden = false;
  };
})();
