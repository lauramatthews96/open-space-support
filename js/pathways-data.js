/**
 * Pathways survey content and matching.
 * Used by the popup (js/pathways.js) and the results page (js/pathways-results.js).
 * Answers are matched to specific article slugs - never to a whole category hub.
 */
(function () {
  window.PATHWAYS_ANSWERS_KEY = "oss_pathways_answers_v1";
  window.PATHWAYS_PREF_KEY = "oss_pathways_v1";

  window.PATHWAY_CHOICES = [
    { id: "thinking", label: "I'm thinking about leaving" },
    { id: "recently-left", label: "I've recently left" },
    { id: "shunned", label: "I've been shunned" },
    { id: "practical-help", label: "I need practical help" },
    { id: "struggling", label: "I'm struggling" },
    { id: "supporting", label: "I'm supporting someone else" },
    { id: "want-to-help", label: "I want to help" },
  ];

  window.PATHWAY_TOPICS = [
    {
      id: "right-decision",
      label: "Am I making the right decision?",
      for: ["thinking"],
      reason: "You're still deciding whether to leave.",
      articles: [
        "how-do-you-know-if-youre-ready-to-leave",
        "learning-to-trust-your-own-judgement-again",
      ],
    },
    {
      id: "what-happens",
      label: "What will happen if I leave?",
      for: ["thinking"],
      reason: "You want a clearer picture of what comes next.",
      articles: ["first-48-hours-after-leaving", "planning-your-exit"],
    },
    {
      id: "lose-family",
      label: "Will I lose my family?",
      for: ["thinking"],
      reason: "You're worried about family if you leave.",
      articles: [
        "when-your-parents-are-still-in-and-getting-older",
        "understanding-shunning-why-its-designed-to-work",
        "talking-to-your-children-about-why-things-have-changed",
      ],
    },
    {
      id: "prepare-safely",
      label: "How can I prepare safely?",
      for: ["thinking"],
      reason: "You want a quiet, practical plan before anyone else knows.",
      articles: ["planning-your-exit", "opening-bank-account"],
    },
    {
      id: "where-to-start",
      label: "I don't know where to start",
      for: ["recently-left"],
      reason: "You've recently left and need a first step, not a whole plan.",
      articles: [
        "first-48-hours-after-leaving",
        "setting-goals-when-youve-never-been-allowed-to-want-things-for-yourself",
      ],
    },
    {
      id: "isolated",
      label: "I feel isolated",
      for: ["recently-left", "shunned"],
      reason: "You're feeling cut off from people.",
      articles: [
        "the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like",
        "why-some-days-are-harder-than-others-for-no-clear-reason",
      ],
    },
    {
      id: "uncertain",
      label: "Everything feels uncertain",
      for: ["recently-left"],
      reason: "The old identity has gone and nothing solid has replaced it yet.",
      articles: [
        "who-am-i-if-im-not-that-anymore",
        "discovering-what-you-actually-enjoy",
      ],
    },
    {
      id: "practical",
      label: "I need practical guidance",
      for: ["recently-left"],
      reason: "Day-to-day life is the immediate problem.",
      articles: [
        "opening-bank-account",
        "renting-for-the-first-time-deposits-contracts-and-what-to-watch-for",
        "explaining-employment-gaps",
      ],
    },
    {
      id: "understand",
      label: "I want to understand what's happening",
      for: ["shunned"],
      reason: "You want shunning explained as a system, not a personal verdict.",
      articles: ["understanding-shunning-why-its-designed-to-work"],
    },
    {
      id: "cope-silence",
      label: "I don't know how to cope with the silence",
      for: ["shunned"],
      reason: "The silence after leaving is what you're sitting with.",
      articles: [
        "the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like",
        "why-some-days-are-harder-than-others-for-no-clear-reason",
      ],
    },
    {
      id: "alone",
      label: "I feel completely alone",
      for: ["shunned"],
      reason: "You're carrying this without a community around you.",
      articles: [
        "the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like",
        "why-some-days-are-harder-than-others-for-no-clear-reason",
      ],
    },
    {
      id: "reconnect",
      label: "Should I try to reconnect?",
      for: ["shunned"],
      reason: "You're weighing reinstatement or reaching back.",
      articles: [
        "should-you-try-to-reconnect-or-let-it-rest-thinking-through-reinstatement-pressure",
      ],
    },
    {
      id: "employment",
      label: "Employment",
      for: ["practical-help"],
      reason: "Work is one of the things you asked for help with.",
      articles: [
        "figuring-out-what-you-actually-want-to-do",
        "explaining-employment-gaps",
        "networking-without-a-network",
      ],
    },
    {
      id: "education",
      label: "Education",
      for: ["practical-help"],
      reason: "You want a route back into learning.",
      articles: [
        "going-back-to-school-as-an-adult-gcses-access-courses-and-where-to-start",
        "is-university-actually-realistic-for-me",
        "filling-educational-gaps-without-going-back-to-a-classroom",
      ],
    },
    {
      id: "money",
      label: "Money",
      for: ["practical-help", "recently-left", "thinking"],
      reason: "Money is part of what you ticked.",
      articles: [
        "opening-bank-account",
        "budgeting-when-youre-starting-from-zero",
        "when-money-was-never-really-yours-to-control",
      ],
    },
    {
      id: "housing",
      label: "Housing",
      for: ["practical-help", "recently-left", "thinking"],
      reason: "Somewhere to live is part of what you ticked.",
      articles: [
        "what-to-do-if-youre-at-risk-of-homelessness",
        "renting-for-the-first-time-deposits-contracts-and-what-to-watch-for",
      ],
    },
    {
      id: "drinking",
      label: "I'm drinking or using more than I want",
      for: ["struggling"],
      reason: "Coping has started to cost you.",
      articles: [
        "why-addiction-shows-up-so-often-after-leaving",
        "recognising-the-signs-in-yourself-or-someone-you-love",
        "healthy-coping-strategies-to-replace-whats-not-working",
      ],
    },
    {
      id: "emotionally",
      label: "I'm struggling emotionally",
      for: ["struggling"],
      reason: "The emotional weight is what you named.",
      articles: [
        "why-some-days-are-harder-than-others-for-no-clear-reason",
        "who-am-i-if-im-not-that-anymore",
        "learning-to-trust-your-own-judgement-again",
      ],
    },
    {
      id: "relationships",
      label: "My relationships are suffering",
      for: ["struggling"],
      reason: "The people around you are part of this.",
      articles: [
        "talking-to-your-children-about-why-things-have-changed",
        "co-parenting-when-you-and-your-ex-dont-agree-on-faith-anymore",
        "why-addiction-shows-up-so-often-after-leaving",
      ],
    },
    {
      id: "nowhere",
      label: "I don't know where to turn",
      for: ["struggling"],
      reason: "You asked for a next step when nothing feels obvious.",
      articles: [
        "why-some-days-are-harder-than-others-for-no-clear-reason",
        "first-48-hours-after-leaving",
      ],
      actions: [
        {
          href: "apply.html",
          title: "Apply for support",
          why: "If you'd rather talk to us than read another page.",
        },
      ],
    },
    {
      id: "understand-them",
      label: "I don't understand what they're going through",
      for: ["supporting"],
      reason: "You're supporting someone and want the picture in plain English.",
      articles: [
        "understanding-shunning-why-its-designed-to-work",
        "who-am-i-if-im-not-that-anymore",
        "why-addiction-shows-up-so-often-after-leaving",
      ],
    },
    {
      id: "help-without-harm",
      label: "How can I help without making things worse?",
      for: ["supporting"],
      reason: "You want to support someone without pushing.",
      articles: [
        "talking-to-your-children-about-why-things-have-changed",
        "co-parenting-when-you-and-your-ex-dont-agree-on-faith-anymore",
        "when-your-parents-are-still-in-and-getting-older",
      ],
    },
    {
      id: "teenager",
      label: "I'm supporting a teenager",
      for: ["supporting"],
      reason: "You're the adult supporting a young person.",
      articles: [
        "supporting-a-teenager-whos-questioning-their-faith",
        "having-doubts-about-what-youve-been-taught",
        "you-dont-have-to-have-it-all-figured-out-yet",
      ],
    },
    {
      id: "grief-trauma",
      label: "They're dealing with grief, trauma, or addiction",
      for: ["supporting"],
      reason: "The person you're supporting is also dealing with grief, trauma, or addiction.",
      articles: [
        "why-addiction-shows-up-so-often-after-leaving",
        "recognising-the-signs-in-yourself-or-someone-you-love",
        "healthy-coping-strategies-to-replace-whats-not-working",
      ],
    },
    {
      id: "volunteer",
      label: "Volunteer",
      for: ["want-to-help"],
      reason: "You'd like to volunteer.",
      articles: [],
      actions: [
        {
          href: "apply.html",
          title: "Apply / get in touch",
          why: "Tell us how you'd like to help.",
        },
        { href: "about.html", title: "About Us", why: "Who we are and how the work is run." },
      ],
    },
    {
      id: "donate",
      label: "Donate",
      for: ["want-to-help"],
      reason: "You want to help keep this free.",
      articles: [],
      actions: [
        { href: "donate.html", title: "Donate", why: "Help keep this free." },
        {
          href: "our-mission.html",
          title: "Our Mission",
          why: "What the work is for, in plain terms.",
        },
      ],
    },
    {
      id: "professional",
      label: "Offer professional expertise",
      for: ["want-to-help"],
      reason: "You have professional expertise to offer.",
      articles: [],
      actions: [
        {
          href: "contact.html",
          title: "Contact",
          why: "The best place to introduce yourself and what you can offer.",
        },
      ],
    },
    {
      id: "story",
      label: "Share my story",
      for: ["want-to-help"],
      reason: "You might want to share your story.",
      articles: [],
      actions: [
        {
          href: "contact.html",
          title: "Contact",
          why: "Send a note. There's no pressure to publish anything.",
        },
      ],
    },
    {
      id: "teen",
      label: "I'm under 18",
      for: ["thinking", "recently-left", "shunned", "practical-help", "struggling"],
      reason: "This is for you as a young person. We don't contact parents.",
      articles: [
        "having-doubts-about-what-youve-been-taught",
        "you-dont-have-to-have-it-all-figured-out-yet",
      ],
    },
    {
      id: "lgbtq",
      label: "Sexuality or gender is part of this",
      for: ["thinking", "recently-left", "shunned", "struggling", "supporting"],
      reason: "Sexuality or gender is part of what you ticked.",
      articles: [
        "unlearning-shame-that-was-taught-as-fact",
        "leaving-when-youre-also-coming-out",
        "finding-lgbtq-community-when-you-missed-out-on-it-growing-up",
      ],
    },
    {
      id: "private",
      label: "I need to be careful who sees this",
      for: ["thinking", "recently-left", "shunned"],
      reason: "You need to look at this quietly.",
      articles: ["planning-your-exit"],
    },
    {
      id: "family",
      label: "Family still in, or children involved",
      for: ["thinking", "recently-left", "shunned", "struggling"],
      reason: "Family is still in the picture.",
      articles: [
        "when-your-parents-are-still-in-and-getting-older",
        "talking-to-your-children-about-why-things-have-changed",
        "co-parenting-when-you-and-your-ex-dont-agree-on-faith-anymore",
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
      "what-to-do-if-youre-at-risk-of-homelessness",
    ],
    struggling: [
      "why-some-days-are-harder-than-others-for-no-clear-reason",
      "recognising-the-signs-in-yourself-or-someone-you-love",
    ],
    supporting: [
      "supporting-a-teenager-whos-questioning-their-faith",
      "talking-to-your-children-about-why-things-have-changed",
    ],
    "want-to-help": [],
  };

  var COMBOS = [
    {
      pathways: ["thinking"],
      topics: ["lgbtq"],
      slugs: ["leaving-when-youre-also-coming-out"],
      reason: "You're thinking about leaving and coming out is part of this.",
      weight: 8,
    },
    {
      topics: ["teen", "right-decision"],
      slugs: [
        "having-doubts-about-what-youve-been-taught",
        "you-dont-have-to-have-it-all-figured-out-yet",
      ],
      reason: "You're under 18 and still deciding. You don't have to decide today.",
      weight: 9,
    },
    {
      topics: ["housing", "prepare-safely"],
      slugs: ["planning-your-exit", "what-to-do-if-youre-at-risk-of-homelessness"],
      reason: "You're preparing to leave and housing is one of the live problems.",
      weight: 8,
    },
    {
      topics: ["money", "prepare-safely"],
      slugs: ["planning-your-exit", "opening-bank-account"],
      reason: "You're preparing to leave and money needs to be in your own name.",
      weight: 8,
    },
    {
      topics: ["housing", "where-to-start"],
      slugs: [
        "first-48-hours-after-leaving",
        "what-to-do-if-youre-at-risk-of-homelessness",
      ],
      reason: "You've recently left and housing is urgent.",
      weight: 8,
    },
    {
      topics: ["lose-family", "reconnect"],
      slugs: [
        "should-you-try-to-reconnect-or-let-it-rest-thinking-through-reinstatement-pressure",
      ],
      reason: "Family silence and the question of reconnecting are both in play.",
      weight: 7,
    },
    {
      topics: ["drinking", "relationships"],
      slugs: ["why-addiction-shows-up-so-often-after-leaving"],
      reason: "Coping and relationships are both under strain.",
      weight: 7,
    },
    {
      topics: ["lgbtq", "isolated"],
      slugs: ["finding-lgbtq-community-when-you-missed-out-on-it-growing-up"],
      reason: "You're looking for people after missing that community growing up.",
      weight: 7,
    },
    {
      topics: ["employment", "uncertain"],
      slugs: ["figuring-out-what-you-actually-want-to-do"],
      reason: "Work is on the table and you don't yet know what you'd actually want.",
      weight: 6,
    },
    {
      pathways: ["recently-left"],
      topics: ["family"],
      slugs: ["talking-to-your-children-about-why-things-have-changed"],
      reason: "You've left, and family or children are still in the picture.",
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

  window.topicsForPathways = function (pathwayIds) {
    var selected = pathwayIds || [];
    return (window.PATHWAY_TOPICS || []).filter(function (topic) {
      return topic.for.some(function (id) {
        return has(selected, id);
      });
    });
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

  function bump(scores, slug, weight, reason) {
    if (!scores[slug]) scores[slug] = { slug: slug, score: 0, reasons: [] };
    scores[slug].score += weight;
    if (reason && scores[slug].reasons.indexOf(reason) === -1) {
      scores[slug].reasons.push(reason);
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
    var pathways = unique(answers.pathways || []);
    var topics = unique(answers.topics || []);
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
        bump(scores, slug, combo.weight || 6, combo.reason);
      });
    });

    if (has(topics, "teen")) {
      ["having-doubts-about-what-youve-been-taught", "you-dont-have-to-have-it-all-figured-out-yet"].forEach(function (slug, i) {
        bump(scores, slug, 8 - i, "Written for you, not for the adults around you.");
      });
    }

    if (has(pathways, "struggling") || capacity === "overwhelm" || has(topics, "nowhere") || has(topics, "emotionally")) {
      addAction({
        href: "apply.html",
        title: "Apply for support",
        why: "A confidential way to ask us for help if you'd rather a person than another article.",
      });
    }

    if (has(topics, "private") || has(topics, "prepare-safely")) {
      addAction({
        href: "#",
        title: "",
        why: "",
        note: "If you need to leave this page quickly, use Exit now in the corner. It goes to Google.",
      });
    }

    var ranked = Object.keys(scores)
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
    if (has(topics, "private") || has(topics, "prepare-safely")) {
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
