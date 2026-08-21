/**
 * Pathways survey content and matching.
 * Used by the popup (js/pathways.js) and the results page (js/pathways-results.js).
 * Answers are matched to specific article slugs - never to a whole category hub.
 */
(function () {
  window.PATHWAYS_ANSWERS_KEY = "oss_pathways_answers_v1";
  window.PATHWAYS_PREF_KEY = "oss_pathways_v1";

  // Every journey tick has published articles in PATHWAY_DEFAULTS.
  // The second question is the same short list for everyone - no empty branches.
  window.PATHWAY_CHOICES = [
    { id: "thinking", label: "I'm thinking about leaving" },
    { id: "recently-left", label: "I've recently left" },
    { id: "shunned", label: "I've been shunned" },
    { id: "practical-help", label: "I need practical help" },
    { id: "struggling", label: "I'm struggling" },
  ];

  window.PATHWAY_TOPICS = [
    {
      id: "family",
      label: "Family is a big part of this",
      reason: "Family is still in the picture.",
      articles: [
        "when-your-parents-are-still-in-and-getting-older",
        "talking-to-your-children-about-why-things-have-changed",
        "co-parenting-when-you-and-your-ex-dont-agree-on-faith-anymore",
      ],
    },
    {
      id: "practical",
      label: "Money, housing, or day-to-day practical stuff",
      reason: "The practical side is part of what you ticked.",
      articles: [
        "opening-bank-account",
        "what-to-do-if-youre-at-risk-of-homelessness",
        "renting-for-the-first-time-deposits-contracts-and-what-to-watch-for",
        "setting-up-a-home-from-nothing",
        "budgeting-when-youre-starting-from-zero",
      ],
    },
    {
      id: "work",
      label: "Work or learning",
      reason: "Work or education is part of what you ticked.",
      articles: [
        "figuring-out-what-you-actually-want-to-do",
        "explaining-employment-gaps",
        "going-back-to-school-as-an-adult-gcses-access-courses-and-where-to-start",
      ],
    },
    {
      id: "feeling",
      label: "I feel isolated, stuck, or all over the place",
      reason: "How you're feeling is part of this.",
      articles: [
        "why-some-days-are-harder-than-others-for-no-clear-reason",
        "who-am-i-if-im-not-that-anymore",
        "the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like",
      ],
    },
    {
      id: "drinking",
      label: "I'm drinking or using more than I want",
      reason: "Coping has started to cost you.",
      articles: [
        "why-addiction-shows-up-so-often-after-leaving",
        "recognising-the-signs-in-yourself-or-someone-you-love",
        "healthy-coping-strategies-to-replace-whats-not-working",
      ],
    },
    {
      id: "lgbtq",
      label: "Sexuality or gender is part of this",
      reason: "Sexuality or gender is part of what you ticked.",
      articles: [
        "unlearning-shame-that-was-taught-as-fact",
        "leaving-when-youre-also-coming-out",
        "finding-lgbtq-community-when-you-missed-out-on-it-growing-up",
      ],
    },
    {
      id: "teen",
      label: "I'm under 18",
      reason: "This is for you as a young person. We don't contact parents.",
      articles: [
        "having-doubts-about-what-youve-been-taught",
        "you-dont-have-to-have-it-all-figured-out-yet",
      ],
    },
  ];

  window.PATHWAY_CAPACITY = [
    {
      id: "comfort",
      label: "Comfort",
      desc: "I can take this in. I mainly want information.",
    },
    {
      id: "stretch",
      label: "Stretch",
      desc: "It's a lot, but I can manage a bit at a time.",
    },
    {
      id: "overwhelm",
      label: "Overwhelm",
      desc: "Even this already feels like too much.",
    },
  ];

  var PATHWAY_DEFAULTS = {
    thinking: ["how-do-you-know-if-youre-ready-to-leave", "planning-your-exit"],
    "recently-left": [
      "first-48-hours-after-leaving",
      "who-am-i-if-im-not-that-anymore",
    ],
    shunned: [
      "understanding-shunning-why-its-designed-to-work",
      "the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like",
    ],
    "practical-help": [
      "opening-bank-account",
      "explaining-employment-gaps",
      "setting-up-a-home-from-nothing",
    ],
    struggling: [
      "why-some-days-are-harder-than-others-for-no-clear-reason",
      "recognising-the-signs-in-yourself-or-someone-you-love",
    ],
  };

  var FALLBACK_ARTICLES = [
    "first-48-hours-after-leaving",
    "why-some-days-are-harder-than-others-for-no-clear-reason",
    "opening-bank-account",
    "who-am-i-if-im-not-that-anymore",
  ];

  var COMBOS = [
    {
      pathways: ["thinking"],
      topics: ["lgbtq"],
      slugs: ["leaving-when-youre-also-coming-out"],
      reason: "You're thinking about leaving and coming out is part of this.",
      weight: 8,
    },
    {
      pathways: ["thinking"],
      topics: ["practical"],
      slugs: ["planning-your-exit", "opening-bank-account", "what-to-do-if-youre-at-risk-of-homelessness"],
      reason: "You're preparing to leave and the practical side needs to be in place first.",
      weight: 8,
    },
    {
      topics: ["lgbtq", "feeling"],
      slugs: ["finding-lgbtq-community-when-you-missed-out-on-it-growing-up"],
      reason: "You're looking for people after missing that community growing up.",
      weight: 7,
    },
    {
      pathways: ["recently-left"],
      topics: ["family"],
      slugs: ["talking-to-your-children-about-why-things-have-changed"],
      reason: "You've left, and family or children are still in the picture.",
      weight: 6,
    },
    {
      topics: ["work", "feeling"],
      slugs: ["figuring-out-what-you-actually-want-to-do"],
      reason: "Work is on the table and you don't yet know what you'd actually want.",
      weight: 6,
    },
  ];

  function has(list, id) {
    return list.indexOf(id) !== -1;
  }

  function unique(ids) {
    var seen = {};
    var out = [];
    ids.forEach(function (id) {
      if (!id || seen[id]) return;
      seen[id] = true;
      out.push(id);
    });
    return out;
  }

  window.getPathwayChoice = function (id) {
    var list = window.PATHWAY_CHOICES || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  };

  window.getPathwayTopic = function (id) {
    var list = window.PATHWAY_TOPICS || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return null;
  };

  function findArticle(slug) {
    var list = (window.getPublishedResourceArticles
      ? window.getPublishedResourceArticles()
      : window.RESOURCE_ARTICLES) || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].slug === slug && !list[i].comingSoon) return list[i];
    }
    return null;
  }

  window.topicsForPathways = function () {
    return (window.PATHWAY_TOPICS || []).filter(function (topic) {
      return (topic.articles || []).some(function (slug) {
        return !!findArticle(slug);
      });
    });
  };

  window.getResourcePathwayChoices = function () {
    return (window.PATHWAY_CHOICES || []).filter(function (choice) {
      return (PATHWAY_DEFAULTS[choice.id] || []).some(function (slug) {
        return !!findArticle(slug);
      });
    });
  };

  function bump(scores, slug, weight, reason, front) {
    if (!scores[slug]) scores[slug] = { slug: slug, score: 0, reasons: [] };
    scores[slug].score += weight;
    if (reason && scores[slug].reasons.indexOf(reason) === -1) {
      if (front) scores[slug].reasons.unshift(reason);
      else scores[slug].reasons.push(reason);
    }
  }

  function comboMatches(combo, answers) {
    var pathways = answers.pathways || [];
    var topics = answers.topics || [];
    if (combo.pathways && combo.pathways.some(function (id) { return !has(pathways, id); })) {
      return false;
    }
    if (combo.topics && combo.topics.some(function (id) { return !has(topics, id); })) {
      return false;
    }
    return true;
  }

  window.buildPathwayResults = function (answers) {
    answers = answers || { pathways: [], topics: [], capacity: "" };
    var knownTopics = {};
    (window.PATHWAY_TOPICS || []).forEach(function (topic) {
      knownTopics[topic.id] = true;
    });
    var pathways = unique(answers.pathways || []).filter(function (id) {
      return (PATHWAY_DEFAULTS[id] || []).some(function (slug) {
        return !!findArticle(slug);
      });
    });
    var topics = unique(answers.topics || []).filter(function (id) {
      return knownTopics[id];
    });
    var capacity = answers.capacity || "stretch";
    var scores = {};
    var actions = [];
    var seenAction = {};

    function addAction(item) {
      if (!item || !item.href || seenAction[item.href]) return;
      seenAction[item.href] = true;
      actions.push(item);
    }

    pathways.forEach(function (id) {
      var choice = window.getPathwayChoice(id);
      var reason = choice ? "You said: " + choice.label.charAt(0).toLowerCase() + choice.label.slice(1) + "." : "";
      (PATHWAY_DEFAULTS[id] || []).forEach(function (slug, i) {
        bump(scores, slug, i === 0 ? 2 : 1, reason);
      });
    });

    topics.forEach(function (id) {
      var topic = window.getPathwayTopic(id);
      if (!topic) return;
      (topic.articles || []).forEach(function (slug, i) {
        bump(scores, slug, i === 0 ? 6 : i === 1 ? 4 : 3, topic.reason);
      });
      (topic.actions || []).forEach(addAction);
    });

    COMBOS.forEach(function (combo) {
      if (!comboMatches(combo, { pathways: pathways, topics: topics })) return;
      (combo.slugs || []).forEach(function (slug) {
        bump(scores, slug, combo.weight || 6, combo.reason, true);
      });
    });

    if (has(topics, "teen")) {
      ["having-doubts-about-what-youve-been-taught", "you-dont-have-to-have-it-all-figured-out-yet"].forEach(function (slug, i) {
        bump(scores, slug, 8 - i, "Written for you, not for the adults around you.");
      });
    }

    if (has(pathways, "struggling") || capacity === "overwhelm" || has(topics, "feeling") || has(topics, "drinking")) {
      addAction({
        href: "apply.html",
        title: "Apply for support",
        why: "A confidential way to ask us for help if you'd rather a person than another article.",
      });
    }

    if (has(pathways, "thinking")) {
      addAction({
        href: "#",
        title: "",
        why: "",
        note: "If you need to leave this page quickly, use Exit now in the corner. It goes to Google.",
      });
    }

    function rankScores() {
      return Object.keys(scores)
        .map(function (slug) {
          var article = findArticle(slug);
          if (!article) return null;
          return {
            article: article,
            score: scores[slug].score,
            reasons: scores[slug].reasons.slice(0, 2),
          };
        })
        .filter(Boolean)
        .sort(function (a, b) {
          return b.score - a.score;
        });
    }

    var ranked = rankScores();
    if (!ranked.length) {
      FALLBACK_ARTICLES.forEach(function (slug, i) {
        bump(scores, slug, 5 - i, "A starting set from the library.");
      });
      ranked = rankScores();
    }

    if (has(topics, "teen")) {
      ranked.sort(function (a, b) {
        var aTeen = a.article.categorySlug === "for-teenagers" ? 1 : 0;
        var bTeen = b.article.categorySlug === "for-teenagers" ? 1 : 0;
        if (aTeen !== bTeen) return bTeen - aTeen;
        return b.score - a.score;
      });
    }

    var limit = capacity === "overwhelm" ? 4 : capacity === "comfort" ? 10 : 7;
    ranked = ranked.slice(0, limit);

    var startCount = capacity === "overwhelm" ? 2 : 3;
    var start = ranked.slice(0, startCount);
    var rest = ranked.slice(startCount);
    var groups = [];
    var groupMap = {};

    rest.forEach(function (item) {
      var slug = item.article.categorySlug;
      if (!groupMap[slug]) {
        var cat = window.getResourceCategory ? window.getResourceCategory(slug) : null;
        groupMap[slug] = {
          id: slug,
          label: cat ? cat.label : item.article.category,
          items: [],
        };
        groups.push(groupMap[slug]);
      }
      groupMap[slug].items.push(item);
    });

    var categorySlugs = unique(
      ranked.map(function (item) {
        return item.article.categorySlug;
      })
    );

    var externals = [];
    var seenExt = {};
    if (window.getExternalResourcesForCategory) {
      categorySlugs.forEach(function (slug) {
        (window.getExternalResourcesForCategory(slug) || []).forEach(function (res) {
          if (!res || !res.name || seenExt[res.name]) return;
          seenExt[res.name] = true;
          externals.push(res);
        });
      });
    }
    externals = externals.slice(0, 4);

    var notes = [];
    if (has(pathways, "struggling") || capacity === "overwhelm") {
      notes.push(
        "If you are in crisis, Samaritans are available 24/7 on 116 123 (UK, free). These pages are not emergency support."
      );
    }
    if (has(pathways, "thinking")) {
      notes.push("If you need to leave this page quickly, use Exit now in the corner. It goes to Google.");
    }
    if (has(topics, "teen")) {
      notes.push("We don't contact parents or anyone else about what you read here.");
    }

    actions = actions.filter(function (item) {
      return item.href && item.href !== "#";
    });

    return {
      start: start,
      groups: groups,
      actions: actions,
      externals: externals,
      notes: notes,
      capacity: capacity,
      answers: { pathways: pathways, topics: topics, capacity: capacity },
    };
  };
})();
