/**
 * Pathways survey popup. Multi-select answers are stored in this tab only,
 * then the visitor is sent to your-resources.html for specific articles.
 */
(function () {
  var PREF_KEY = window.PATHWAYS_PREF_KEY || "oss_pathways_v1";
  var ANSWERS_KEY = window.PATHWAYS_ANSWERS_KEY || "oss_pathways_answers_v1";
  var AUTO_DELAY_MS = 7000;
  var AUTO_DELAY_REDUCED_MS = 1200;

  var root =
    window.location.pathname.indexOf("/resources/") !== -1 ? "../../" : "";

  function href(path) {
    return root + path;
  }

  function escapeHtml(str) {
    if (window.escapeHtml) return window.escapeHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var state = {
    open: false,
    screen: "invite",
    pathways: [],
    topics: [],
    capacity: "",
    lastFocus: null,
  };

  var els = {};

  function readPref() {
    try {
      var raw = localStorage.getItem(PREF_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writePref(status) {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify({ status: status, at: Date.now() }));
    } catch (e) {
      /* blocked storage */
    }
  }

  function saveAnswers() {
    try {
      sessionStorage.setItem(
        ANSWERS_KEY,
        JSON.stringify({
          pathways: state.pathways.slice(),
          topics: state.topics.slice(),
          capacity: state.capacity,
          at: Date.now(),
        })
      );
    } catch (e) {
      /* blocked storage */
    }
  }

  function currentPage() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function shouldAutoOpen() {
    var page = currentPage();
    if (window.location.hash === "#pathways") return true;
    if (page === "your-resources.html") return false;
    if (page !== "index.html" && page !== "resources.html") return false;
    if (page === "resources.html" && new URLSearchParams(window.location.search).get("category")) {
      return false;
    }
    var pref = readPref();
    if (pref && (pref.status === "dismissed" || pref.status === "done")) return false;
    return true;
  }

  function toggleId(list, id) {
    var i = list.indexOf(id);
    if (i === -1) list.push(id);
    else list.splice(i, 1);
  }

  function lockScroll(lock) {
    document.body.classList.toggle("pathways-open", lock);
  }

  function resetAnswers() {
    state.pathways = [];
    state.topics = [];
    state.capacity = "";
  }

  function questionCount() {
    var n = 2;
    if (showsTopics()) n += 1;
    if (showsCapacity()) n += 1;
    return n;
  }

  function showsTopics() {
    return topicsForCurrent().length > 0;
  }

  function showsCapacity() {
    if (state.pathways.length === 0) return true;
    return !(state.pathways.length === 1 && state.pathways[0] === "want-to-help");
  }

  function questionIndex() {
    if (state.screen === "pathway") return 0;
    if (state.screen === "topics") return 1;
    if (state.screen === "capacity") return showsTopics() ? 2 : 1;
    return 0;
  }

  function topicsForCurrent() {
    if (!window.topicsForPathways) return [];
    return window.topicsForPathways(state.pathways);
  }

  function updateProgress() {
    var hide = state.screen === "invite";
    els.bar.hidden = hide;
    els.progress.hidden = hide;
    if (hide) return;
    var total = questionCount();
    var index = questionIndex();
    var hint = state.screen === "capacity" ? "pick one" : "tick all that apply";
    els.progress.textContent = "Question " + (index + 1) + " of " + total + " · " + hint;
    els.barFill.style.width = ((index + 1) / total) * 100 + "%";
  }

  function choiceButton(id, label, selected, attr) {
    return (
      '<button type="button" class="pathways-choice pathways-choice-multi' +
      (selected ? " is-selected" : "") +
      '" aria-pressed="' +
      (selected ? "true" : "false") +
      '" ' +
      attr +
      '="' +
      escapeHtml(id) +
      '"><span class="pathways-check" aria-hidden="true"></span>' +
      escapeHtml(label) +
      "</button>"
    );
  }

  function continueRow(enabled, extra) {
    return (
      '<div class="pathways-actions">' +
      '<button type="button" class="btn btn-gold" data-pathways-action="next"' +
      (enabled ? "" : " disabled") +
      ">Continue</button>" +
      (extra || "") +
      "</div>"
    );
  }

  function backRow(show) {
    if (!show) return "";
    return (
      '<div class="pathways-actions pathways-actions-back">' +
      '<button type="button" class="pathways-text-btn" data-pathways-action="back">Back</button>' +
      "</div>"
    );
  }

  function renderInvite() {
    els.title.textContent = "Would you like us to recommend some resources?";
    els.body.innerHTML =
      "<p>Tick everything that applies and we'll build you a page of specific articles - not the whole library. Nothing is sent to us. It stays in this browser tab.</p>" +
      '<div class="pathways-actions">' +
      '<button type="button" class="btn btn-gold" data-pathways-action="start">Yes, take the survey</button>' +
      '<button type="button" class="btn btn-outline-dark" data-pathways-action="dismiss">No, just browsing thanks</button>' +
      "</div>";
  }

  function renderPathway() {
    els.title.textContent = "Where are you on your journey today?";
    var html =
      '<p class="pathways-hint">You can tick more than one. Plenty of people are recently out <em>and</em> need practical help.</p>' +
      '<div class="pathways-choices" role="group" aria-label="Where you are">';
    (window.PATHWAY_CHOICES || []).forEach(function (item) {
      html += choiceButton(
        item.id,
        item.label,
        state.pathways.indexOf(item.id) !== -1,
        "data-pathways-pathway"
      );
    });
    html += "</div>" + continueRow(state.pathways.length > 0);
    els.body.innerHTML = html;
  }

  function renderTopics() {
    var topics = topicsForCurrent();
    els.title.textContent = "What's in the mix right now?";
    var html =
      '<p class="pathways-hint">Tick everything that applies. The more specific you are, the more specific the page we build.</p>' +
      '<div class="pathways-choices" role="group" aria-label="What applies">';
    topics.forEach(function (item) {
      html += choiceButton(
        item.id,
        item.label,
        state.topics.indexOf(item.id) !== -1,
        "data-pathways-topic"
      );
    });
    html +=
      "</div>" +
      continueRow(
        true,
        '<button type="button" class="pathways-text-btn" data-pathways-action="skip-topics">Skip this one</button>'
      ) +
      backRow(true);
    els.body.innerHTML = html;
  }

  function renderCapacity() {
    els.title.textContent = "How does looking at this feel today?";
    var html =
      '<p class="pathways-hint">This only changes how much we put on the page.</p>' +
      '<div class="pathways-choices" role="list">';
    (window.PATHWAY_CAPACITY || []).forEach(function (item) {
      html +=
        '<button type="button" class="pathways-choice pathways-choice-stack' +
        (state.capacity === item.id ? " is-selected" : "") +
        '" role="listitem" data-pathways-capacity="' +
        item.id +
        '"><span class="pathways-choice-label">' +
        escapeHtml(item.label) +
        '</span><span class="pathways-choice-desc">' +
        escapeHtml(item.desc) +
        "</span></button>";
    });
    html += "</div>" + backRow(true);
    els.body.innerHTML = html;
  }

  function render() {
    if (state.screen === "invite") renderInvite();
    else if (state.screen === "pathway") renderPathway();
    else if (state.screen === "topics") renderTopics();
    else renderCapacity();
    updateProgress();
    els.title.focus();
  }

  function finish() {
    saveAnswers();
    writePref("done");
    window.location.href = href("your-resources.html");
  }

  function goNext() {
    if (state.screen === "pathway") {
      if (!state.pathways.length) return;
      state.topics = state.topics.filter(function (id) {
        return topicsForCurrent().some(function (topic) {
          return topic.id === id;
        });
      });
      if (showsTopics()) state.screen = "topics";
      else if (showsCapacity()) state.screen = "capacity";
      else finish();
      render();
      return;
    }
    if (state.screen === "topics") {
      if (showsCapacity()) state.screen = "capacity";
      else finish();
      render();
    }
  }

  function goBack() {
    if (state.screen === "topics") {
      state.screen = "pathway";
    } else if (state.screen === "capacity") {
      state.screen = showsTopics() ? "topics" : "pathway";
      state.capacity = "";
    }
    render();
  }

  function openModal(screen) {
    state.open = true;
    state.screen = screen || "invite";
    state.lastFocus = document.activeElement;
    els.root.hidden = false;
    lockScroll(true);
    render();
  }

  function closeModal(status) {
    state.open = false;
    els.root.hidden = true;
    lockScroll(false);
    if (status) writePref(status);
    if (state.lastFocus && typeof state.lastFocus.focus === "function") {
      state.lastFocus.focus();
    }
  }

  function onClick(event) {
    var actionBtn = event.target.closest("[data-pathways-action]");
    if (actionBtn) {
      if (actionBtn.disabled) return;
      var action = actionBtn.getAttribute("data-pathways-action");
      if (action === "start") {
        state.screen = "pathway";
        render();
      } else if (action === "dismiss" || action === "close") {
        closeModal("dismissed");
      } else if (action === "next") {
        goNext();
      } else if (action === "skip-topics") {
        state.topics = [];
        goNext();
      } else if (action === "back") {
        goBack();
      }
      return;
    }

    var pathwayBtn = event.target.closest("[data-pathways-pathway]");
    if (pathwayBtn) {
      toggleId(state.pathways, pathwayBtn.getAttribute("data-pathways-pathway"));
      renderPathway();
      updateProgress();
      return;
    }

    var topicBtn = event.target.closest("[data-pathways-topic]");
    if (topicBtn) {
      toggleId(state.topics, topicBtn.getAttribute("data-pathways-topic"));
      renderTopics();
      updateProgress();
      return;
    }

    var capBtn = event.target.closest("[data-pathways-capacity]");
    if (capBtn) {
      state.capacity = capBtn.getAttribute("data-pathways-capacity");
      finish();
    }
  }

  function onKeydown(event) {
    if (!state.open) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal("dismissed");
      return;
    }
    if (event.key !== "Tab") return;
    var focusable = els.panel.querySelectorAll(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function build() {
    var wrap = document.createElement("div");
    wrap.className = "pathways-root";
    wrap.hidden = true;
    wrap.innerHTML =
      '<div class="pathways-backdrop" data-pathways-action="dismiss"></div>' +
      '<div class="pathways-panel" role="dialog" aria-modal="true" aria-labelledby="pathways-title">' +
      '<button type="button" class="pathways-close" data-pathways-action="close" aria-label="Close">' +
      '<span aria-hidden="true">&times;</span></button>' +
      '<p class="pathways-kicker">A quick steer</p>' +
      '<div class="pathways-bar" hidden><div class="pathways-bar-fill"></div></div>' +
      '<p class="pathways-progress" hidden></p>' +
      '<h2 class="pathways-title" id="pathways-title" tabindex="-1"></h2>' +
      '<div class="pathways-body"></div>' +
      "</div>";
    document.body.appendChild(wrap);
    els.root = wrap;
    els.panel = wrap.querySelector(".pathways-panel");
    els.title = wrap.querySelector(".pathways-title");
    els.body = wrap.querySelector(".pathways-body");
    els.progress = wrap.querySelector(".pathways-progress");
    els.bar = wrap.querySelector(".pathways-bar");
    els.barFill = wrap.querySelector(".pathways-bar-fill");
    wrap.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeydown);
  }

  function bindOpeners() {
    document.addEventListener("click", function (event) {
      var opener = event.target.closest("[data-open-pathways]");
      if (!opener) return;
      event.preventDefault();
      resetAnswers();
      openModal("invite");
    });
  }

  function scheduleAutoOpen() {
    if (window.location.hash === "#pathways") {
      openModal("invite");
      return;
    }
    if (!shouldAutoOpen()) return;
    var reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(function () {
      if (state.open) return;
      if (!shouldAutoOpen()) return;
      openModal("invite");
    }, reduced ? AUTO_DELAY_REDUCED_MS : AUTO_DELAY_MS);
  }

  window.openPathwaysSurvey = function () {
    resetAnswers();
    openModal("invite");
  };

  build();
  bindOpeners();
  scheduleAutoOpen();
})();
