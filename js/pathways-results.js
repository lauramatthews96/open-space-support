/**
 * Renders your-resources.html from survey answers stored in this tab.
 */
(function () {
  var answersEl = document.getElementById("pathways-answers");
  var startEl = document.getElementById("pathways-start");
  var groupsEl = document.getElementById("pathways-groups");
  var actionsEl = document.getElementById("pathways-actions");
  var externalsEl = document.getElementById("pathways-externals");
  var notesEl = document.getElementById("pathways-notes");
  var emptyEl = document.getElementById("pathways-empty");
  var resultsEl = document.getElementById("pathways-results");
  var readingEl = document.getElementById("pathways-reading");

  if (!resultsEl || !emptyEl) return;

  function readAnswers() {
    try {
      var raw = sessionStorage.getItem(window.PATHWAYS_ANSWERS_KEY || "oss_pathways_answers_v1");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function escapeHtml(str) {
    return window.escapeHtml ? window.escapeHtml(str) : String(str);
  }

  function renderCard(item) {
    var article = item.article;
    var why =
      item.reasons && item.reasons.length
        ? '<p class="pathways-results-why">' + escapeHtml(item.reasons[0]) + "</p>"
        : "";
    return (
      '<a class="latest-card" href="' +
      escapeHtml(article.path) +
      '" role="listitem">' +
      '<div class="latest-thumb ' +
      escapeHtml(article.thumbClass || "latest-thumb-1") +
      '"></div>' +
      '<div class="latest-card-body">' +
      '<span class="latest-tag">' +
      escapeHtml(article.category) +
      "</span>" +
      "<h3>" +
      escapeHtml(article.title) +
      "</h3>" +
      '<p class="latest-excerpt">' +
      escapeHtml(article.excerpt) +
      "</p>" +
      why +
      '<span class="latest-meta">' +
      escapeHtml(article.readTime) +
      "</span>" +
      '<span class="latest-read-btn">Read now <span class="latest-arrow" aria-hidden="true">→</span></span>' +
      "</div></a>"
    );
  }

  function renderPills(answers) {
    if (!answersEl) return;
    var pills = [];
    (answers.pathways || []).forEach(function (id) {
      var item = window.getPathwayChoice(id);
      if (item) pills.push(item.label);
    });
    (answers.topics || []).forEach(function (id) {
      var item = window.getPathwayTopic(id);
      if (item) pills.push(item.label);
    });
    if (!pills.length) {
      answersEl.hidden = true;
      return;
    }
    answersEl.hidden = false;
    answersEl.innerHTML =
      '<p class="pathways-results-pills-label">Built from what you ticked</p><ul class="pathways-results-pills">' +
      pills
        .map(function (label) {
          return "<li>" + escapeHtml(label) + "</li>";
        })
        .join("") +
      "</ul>";
  }

  function renderActions(actions) {
    if (!actionsEl) return;
    var extra = actions.filter(function (item) {
      return !/apply\.html(?:$|[?#])/.test(item.href);
    });
    if (!extra.length) {
      actionsEl.hidden = true;
      return;
    }
    actionsEl.hidden = false;
    actionsEl.innerHTML =
      "<h2>Other ways to get involved</h2>" +
      '<div class="pathways-results-action-grid">' +
      extra
        .map(function (item) {
          return (
            '<a class="pathways-results-action" href="' +
            escapeHtml(item.href) +
            '"><span class="pathways-results-action-title">' +
            escapeHtml(item.title) +
            "</span><span>" +
            escapeHtml(item.why || "") +
            "</span></a>"
          );
        })
        .join("") +
      "</div>";
  }

  function renderExternals(list) {
    if (!externalsEl) return;
    if (!list.length) {
      externalsEl.hidden = true;
      return;
    }
    var icon =
      '<svg class="external-resources-link-icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false"><path d="M10.5 1.75H5.25v1.75h3.34L3.06 9.03l1.24 1.24 5.53-5.53v3.34h1.75V1.75z" fill="currentColor"/><path d="M11.375 7.875v3.5h-7v-7h3.5V4.375h-3.5a.875.875 0 0 0-.875.875v7c0 .483.392.875.875.875h7a.875.875 0 0 0 .875-.875v-3.5h-1.75z" fill="currentColor"/></svg>';
    externalsEl.hidden = false;
    externalsEl.innerHTML =
      "<h2>Organisations that can help with this</h2>" +
      '<div class="external-resources-grid">' +
      list
        .map(function (resource) {
          var logo = resource.logo
            ? '<img class="external-resources-logo" src="' +
              escapeHtml(resource.logo) +
              '" alt="" width="120" height="48" loading="lazy" />'
            : "";
          return (
            '<article class="external-resources-card">' +
            logo +
            '<div class="external-resources-card-body"><h3>' +
            escapeHtml(resource.name) +
            "</h3><p>" +
            escapeHtml(resource.description) +
            '</p><a class="external-resources-link" href="' +
            escapeHtml(resource.url) +
            '" target="_blank" rel="noopener noreferrer">Visit ' +
            escapeHtml(resource.name) +
            " " +
            icon +
            "</a></div></article>"
          );
        })
        .join("") +
      "</div>";
  }

  function shortBlurb(text) {
    var str = String(text || "");
    var i = str.indexOf(". ");
    return i === -1 ? str : str.slice(0, i + 1);
  }

  function renderReading(answers) {
    if (!readingEl || !window.getReadingForPathwayAnswers) return;
    var picks = window.getReadingForPathwayAnswers(answers);
    if (!picks.length) {
      readingEl.hidden = true;
      return;
    }
    readingEl.hidden = false;
    readingEl.innerHTML =
      "<h2>If you want something to read</h2>" +
      '<p class="pathways-results-reading-lead">A few from our list that fit what you ticked. Take what helps, leave the rest. <a href="reading-recommendations.html">See the full reading list</a>.</p>' +
      '<div class="pathways-reading-grid">' +
      picks
        .map(function (item) {
          var book = item.book;
          var fallback = window.readingCoverFallbackUrl
            ? window.readingCoverFallbackUrl(book.isbn)
            : "";
          return (
            '<article class="pathways-reading-card">' +
            '<img class="pathways-reading-cover" src="' +
            escapeHtml(book.cover) +
            '" alt="Cover of ' +
            escapeHtml(book.title) +
            ' by ' +
            escapeHtml(book.author) +
            '" width="96" height="144" loading="lazy"' +
            (fallback ? ' data-fallback="' + escapeHtml(fallback) + '"' : "") +
            " />" +
            '<div class="pathways-reading-body">' +
            "<h3>" +
            escapeHtml(book.title) +
            "</h3>" +
            '<p class="pathways-reading-author">' +
            escapeHtml(book.author) +
            "</p>" +
            '<p class="pathways-results-why">' +
            escapeHtml(item.reason) +
            "</p>" +
            "<p>" +
            escapeHtml(shortBlurb(book.blurb)) +
            "</p>" +
            '<a class="btn btn-gold" href="' +
            escapeHtml(book.amazonUrl) +
            '" target="_blank" rel="noopener noreferrer sponsored">Buy on Amazon UK</a>' +
            "</div></article>"
          );
        })
        .join("") +
      "</div>";

    readingEl.querySelectorAll(".pathways-reading-cover[data-fallback]").forEach(function (img) {
      img.addEventListener("error", function onCoverError() {
        var fallback = img.getAttribute("data-fallback");
        if (!fallback || img.getAttribute("data-using-fallback") === "true") return;
        img.setAttribute("data-using-fallback", "true");
        img.src = fallback;
      });
    });
  }
    if (result.capacity === "overwhelm") {
      return "Kept short on purpose. Two or three specific pages - not a tour of the whole site.";
    }
    if (result.start.length === 0 && result.actions.length) {
      return "Based on what you ticked, the next step is to get in touch rather than read an article.";
    }
    return "Specific pages from what you ticked - not a dump of every category. Take what helps and ignore the rest.";
  }

  var answers = readAnswers();
  if (!answers || (!(answers.pathways || []).length && !(answers.topics || []).length)) {
    resultsEl.hidden = true;
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  resultsEl.hidden = false;

  var result = window.buildPathwayResults(answers);
  if (leadEl) leadEl.textContent = leadCopy(result);
  renderPills(result.answers);

  if (result.notes && notesEl) {
    notesEl.hidden = result.notes.length === 0;
    notesEl.innerHTML = result.notes
      .map(function (note) {
        return '<p class="pathways-note">' + escapeHtml(note) + "</p>";
      })
      .join("");
  }

  if (startEl) {
    if (!result.start.length) {
      startEl.hidden = true;
    } else {
      startEl.hidden = false;
      startEl.innerHTML =
        "<h2>Start here</h2>" +
        '<div class="resources-article-grid" role="list">' +
        result.start.map(renderCard).join("") +
        "</div>";
    }
  }

  if (groupsEl) {
    if (!result.groups.length) {
      groupsEl.hidden = true;
    } else {
      groupsEl.hidden = false;
      groupsEl.innerHTML = result.groups
        .map(function (group) {
          return (
            '<section class="pathways-results-group">' +
            "<h2>" +
            escapeHtml(group.label) +
            "</h2>" +
            '<div class="resources-article-grid" role="list">' +
            group.items.map(renderCard).join("") +
            "</div></section>"
          );
        })
        .join("");
    }
  }

  renderActions(result.actions);
  renderExternals(result.externals);
  renderReading(result.answers);
})();
