/**
 * Filterable article index for /resources.
 */
(function () {
  var filterSelect = document.getElementById("resource-category-filter");
  var countEl = document.getElementById("resources-count");
  var gridEl = document.getElementById("resources-grid");
  var emptyEl = document.getElementById("resources-empty");
  var externalEl = document.getElementById("resources-external");
  var indexSection = document.getElementById("resources-index");
  var prelaunchEl = document.getElementById("resources-prelaunch");

  if (!filterSelect || !countEl || !gridEl || !emptyEl) return;

  var published = window.getPublishedResourceArticles();
  var categories = window.RESOURCE_CATEGORIES || [];
  var fadeDuration = 220;

  function getCategoryFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var fromQuery = params.get("category");
    if (fromQuery) return fromQuery;

    var hash = window.location.hash.replace(/^#/, "");
    if (!hash || hash === "resources-external") return "";
    return hash;
  }

  function isValidCategory(slug) {
    return categories.some(function (cat) {
      return cat.slug === slug;
    });
  }

  function buildFilterOptions() {
    var options =
      '<option value="">All resources</option>' +
      categories
        .map(function (cat) {
          return (
            '<option value="' +
            window.escapeHtml(cat.slug) +
            '">' +
            window.escapeHtml(cat.label) +
            "</option>"
          );
        })
        .join("");

    filterSelect.innerHTML = options;
  }

  function filterArticles(categorySlug) {
    if (!categorySlug) return published.slice();
    return published.filter(function (article) {
      return article.categorySlug === categorySlug;
    });
  }

  function getCategoryLabel(slug) {
    var cat = window.getResourceCategory(slug);
    return cat ? cat.label : slug;
  }

  function updateCountText(categorySlug, total) {
    if (!categorySlug) {
      countEl.textContent = "Showing all " + total + " resources";
      return;
    }
    countEl.textContent =
      "Showing " + total + " resources in " + getCategoryLabel(categorySlug);
  }

  function renderArticleCard(article) {
    var thumbClass = article.thumbClass || "latest-thumb-1";
    return (
      '<a class="latest-card" href="' +
      window.escapeHtml(article.path) +
      '" role="listitem">' +
      '<div class="latest-thumb ' +
      thumbClass +
      '"></div>' +
      '<div class="latest-card-body">' +
      '<span class="latest-tag">' +
      window.escapeHtml(article.category) +
      "</span>" +
      "<h3>" +
      window.escapeHtml(article.title) +
      "</h3>" +
      '<p class="latest-excerpt">' +
      window.escapeHtml(article.excerpt) +
      "</p>" +
      '<span class="latest-meta">' +
      window.escapeHtml(article.readTime) +
      "</span>" +
      '<span class="latest-read-btn">Read now <span class="latest-arrow" aria-hidden="true">→</span></span>' +
      "</div>" +
      "</a>"
    );
  }

  function setUrlCategory(categorySlug) {
    var url = new URL(window.location.href);
    var preserveExternalAnchor = url.hash === "#resources-external";

    if (categorySlug) {
      url.searchParams.set("category", categorySlug);
    } else {
      url.searchParams.delete("category");
    }

    url.hash = preserveExternalAnchor ? "#resources-external" : "";
    window.history.replaceState({}, "", url);
  }

  function scrollToExternalResourcesIfNeeded() {
    if (window.location.hash !== "#resources-external") return;
    if (!externalEl || externalEl.hidden) return;

    window.requestAnimationFrame(function () {
      externalEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function updateExternalResources(categorySlug) {
    if (window.renderResourcesExternalSection) {
      window.renderResourcesExternalSection(categorySlug);
    }
    scrollToExternalResourcesIfNeeded();
  }

  function renderResults(categorySlug) {
    var articles = filterArticles(categorySlug);
    var hasCategory = Boolean(categorySlug);

    updateCountText(categorySlug, articles.length);

    gridEl.classList.add("is-updating");

    window.setTimeout(function () {
      if (articles.length === 0 && hasCategory) {
        gridEl.hidden = true;
        gridEl.innerHTML = "";
        emptyEl.hidden = false;
      } else {
        emptyEl.hidden = true;
        gridEl.hidden = false;
        gridEl.innerHTML = articles.map(renderArticleCard).join("");
      }

      gridEl.classList.remove("is-updating");
      updateExternalResources(categorySlug);
    }, fadeDuration);
  }

  function applyFilter(categorySlug, updateUrl) {
    var slug = isValidCategory(categorySlug) ? categorySlug : "";
    filterSelect.value = slug;

    if (updateUrl) {
      setUrlCategory(slug);
    }

    renderResults(slug);
  }

  function showPrelaunchState() {
    if (indexSection) indexSection.hidden = true;
    if (prelaunchEl) prelaunchEl.hidden = false;
  }

  function showIndexState() {
    if (prelaunchEl) prelaunchEl.hidden = true;
    if (indexSection) indexSection.hidden = false;
  }

  buildFilterOptions();

  if (published.length === 0) {
    showPrelaunchState();
    return;
  }

  showIndexState();

  var initialCategory = getCategoryFromUrl();
  if (initialCategory && !isValidCategory(initialCategory)) {
    initialCategory = "";
  }

  applyFilter(initialCategory, true);

  filterSelect.addEventListener("change", function () {
    applyFilter(filterSelect.value, true);
  });

  window.addEventListener("popstate", function () {
    applyFilter(getCategoryFromUrl(), false);
  });
})();
