/**
 * Resource catalogue - categories and articles for the site index, filters, and cards.
 * Add or rename categories here; the homepage grid and /resources filter both read from this file.
 */

window.RESOURCE_CATEGORIES = [
  {
    slug: "leaving-safely",
    label: "Leaving Safely",
    short: "Still deciding, or just left?",
    description:
      "Practical, judgement-free guidance for every stage of leaving - including safety planning.",
    imageClass: "resource-img-leaving",
  },
  {
    slug: "emotional-wellbeing",
    label: "Emotional Wellbeing",
    short: "Support for the weight of it all",
    description:
      "Grief, anxiety, and identity change are normal here. Start understanding what you're feeling.",
    imageClass: "resource-img-emotional",
  },
  {
    slug: "career-employment",
    label: "Career & Employment",
    short: "Building a working life your way",
    description:
      "CVs, interviews, and navigating gaps - without over-explaining your past.",
    imageClass: "resource-img-career",
  },
  {
    slug: "financial-stability",
    label: "Financial Stability",
    short: "Money basics, no assumptions",
    description:
      "Budgeting, credit, and banking, explained for anyone starting later than most.",
    imageClass: "resource-img-financial",
  },
  {
    slug: "housing",
    label: "Housing",
    short: "Somewhere of your own",
    description:
      "Renting, deposits, contracts, and knowing your rights - for anyone sorting out housing without family backing.",
    imageClass: "resource-img-housing",
  },
  {
    slug: "family-relationships",
    label: "Family & Relationships",
    short: "When family feels far away",
    description:
      "Navigating estrangement, shunning, and rebuilding trust - with others and yourself.",
    imageClass: "resource-img-family",
  },
  {
    slug: "recovery-from-shunning",
    label: "Recovery from Shunning",
    short: "You're not imagining how hard this is",
    description:
      "A dedicated space for a loss that's rarely understood outside this experience.",
    imageClass: "resource-img-shunning",
  },
  {
    slug: "addiction-family-recovery",
    label: "Addiction & Family Recovery",
    short: "Understanding coping mechanisms",
    description:
      "Honest information on addiction, without shame, for you or someone you love.",
    imageClass: "resource-img-addiction",
  },
  {
    slug: "education-training",
    label: "Education & Training",
    short: "It's not too late to learn",
    description:
      "Routes back into education, from GCSEs to vocational training.",
    imageClass: "resource-img-education",
  },
  {
    slug: "personal-growth",
    label: "Personal Growth",
    short: "Figuring out who you are now",
    description:
      "Identity, values, and building a life that's actually yours.",
    imageClass: "resource-img-growth",
  },
  {
    slug: "lgbtq-support",
    label: "LGBTQ+ Support",
    short: "Identity, community, and belonging",
    description:
      "Support for understanding who you are, finding community, and rebuilding after high-control teaching on sexuality and gender.",
    imageClass: "resource-img-lgbtq",
  },
  {
    slug: "for-teenagers",
    label: "For Teenagers",
    short: "If you're still at home",
    description:
      "Written for young people growing up in a high-control group - your questions, your options, and where to get help.",
    imageClass: "resource-img-teenagers",
  },
];

window.RESOURCE_ARTICLES = [
  {
    slug: "explaining-employment-gaps",
    path: "/resources/career-employment/explaining-employment-gaps",
    title: "Explaining employment gaps in interviews",
    category: "Career & Employment",
    categorySlug: "career-employment",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "How to answer honestly without oversharing - and what employers actually want to hear.",
    thumbClass: "latest-thumb-1",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    heroAlt:
      "A calm desk with a notebook and laptop, suggesting thoughtful preparation for a job interview",
    hasSafetyNote: false,
  },
  {
    slug: "figuring-out-what-you-actually-want-to-do",
    path: "/resources/career-employment/figuring-out-what-you-actually-want-to-do",
    title: "Figuring out what you actually want to do",
    category: "Career & Employment",
    categorySlug: "career-employment",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "When you didn't get years to explore careers - how to notice what fits, try things at low stakes, and find direction gradually.",
    thumbClass: "latest-thumb-12",
    heroImage: "images/career-what-you-want.jpg",
    heroAlt:
      "A quiet view through a window at soft morning light - space to think about what comes next",
    hasSafetyNote: false,
  },
  {
    slug: "networking-without-a-network",
    path: "/resources/career-employment/networking-without-a-network",
    title: "Networking without a network",
    category: "Career & Employment",
    categorySlug: "career-employment",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "When your whole social world was inside one group - how to build genuine professional connections from scratch.",
    thumbClass: "latest-thumb-13",
    heroImage: "images/career-networking.jpg",
    heroAlt:
      "Two coffee cups on a cafe table by a window - space for a conversation still to come",
    hasSafetyNote: false,
  },
  {
    slug: "talking-to-your-children-about-why-things-have-changed",
    path: "/resources/family-relationships/talking-to-your-children-about-why-things-have-changed",
    title: "Talking to your children about why things have changed",
    category: "Family & Relationships",
    categorySlug: "family-relationships",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "How to explain big changes to your children - age-appropriate, honest, and without putting them in the middle.",
    thumbClass: "latest-thumb-14",
    heroImage: "images/family-talking-to-children.jpg",
    heroAlt: "A parent and child sitting together on a sofa in soft afternoon light",
    hasSafetyNote: false,
  },
  {
    slug: "co-parenting-when-you-and-your-ex-dont-agree-on-faith-anymore",
    path: "/resources/family-relationships/co-parenting-when-you-and-your-ex-dont-agree-on-faith-anymore",
    title: "Co-parenting when you and your ex don't agree on faith anymore",
    category: "Family & Relationships",
    categorySlug: "family-relationships",
    readTime: "7 min read",
    updated: "August 2026",
    excerpt:
      "When one of you has left and the other hasn't - navigating co-parenting, communication, and two different worlds for your children.",
    thumbClass: "latest-thumb-15",
    heroImage: "images/family-co-parenting.jpg",
    heroAlt: "Two children's coats on separate hooks by a front door in soft morning light",
    hasSafetyNote: false,
  },
  {
    slug: "when-your-parents-are-still-in-and-getting-older",
    path: "/resources/family-relationships/when-your-parents-are-still-in-and-getting-older",
    title: "When your parents are still in and getting older",
    category: "Family & Relationships",
    categorySlug: "family-relationships",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "The quiet grief of watching parents age in the group you left - when the relationship is unresolved and still ongoing.",
    thumbClass: "latest-thumb-16",
    heroImage: "images/family-parents-aging.jpg",
    heroAlt: "An empty armchair by a window in soft afternoon light",
    hasSafetyNote: false,
  },
  {
    slug: "supporting-a-teenager-whos-questioning-their-faith",
    path: "/resources/family-relationships/supporting-a-teenager-whos-questioning-their-faith",
    title: "Supporting a teenager who's questioning their faith",
    category: "Family & Relationships",
    categorySlug: "family-relationships",
    alsoInCategorySlugs: ["for-teenagers"],
    readTime: "7 min read",
    updated: "August 2026",
    excerpt:
      "For parents: how to protect the relationship, listen well, and know when your teenager's wellbeing needs to come first.",
    thumbClass: "latest-thumb-34",
    heroImage: "images/family-supporting-teenager.jpg",
    heroAlt:
      "Two mugs of tea across from each other on a kitchen table in warm evening light - space for a conversation",
    hasSafetyNote: true,
  },
  {
    slug: "why-addiction-shows-up-so-often-after-leaving",
    path: "/resources/addiction-family-recovery/why-addiction-shows-up-so-often-after-leaving",
    title: "Why addiction shows up so often after leaving",
    category: "Addiction & Family Recovery",
    categorySlug: "addiction-family-recovery",
    readTime: "7 min read",
    updated: "August 2026",
    excerpt:
      "Why addiction and compulsive coping often appear after leaving - an understandable response, not a character flaw.",
    thumbClass: "latest-thumb-17",
    heroImage: "images/addiction-why-shows-up.jpg",
    heroAlt:
      "A quiet kitchen table with an empty chair and a mug of tea in soft morning light",
    hasSafetyNote: true,
  },
  {
    slug: "recognising-the-signs-in-yourself-or-someone-you-love",
    path: "/resources/addiction-family-recovery/recognising-the-signs-in-yourself-or-someone-you-love",
    title: "Recognising the signs, in yourself or someone you love",
    category: "Addiction & Family Recovery",
    categorySlug: "addiction-family-recovery",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Early signs of addiction in yourself or someone close - what to notice without panic, and what to do next.",
    thumbClass: "latest-thumb-18",
    heroImage: "images/addiction-recognising-signs.jpg",
    heroAlt:
      "Two coffee cups on a cafe table by a window in soft afternoon light",
    hasSafetyNote: true,
  },
  {
    slug: "healthy-coping-strategies-to-replace-whats-not-working",
    path: "/resources/addiction-family-recovery/healthy-coping-strategies-to-replace-whats-not-working",
    title: "Healthy coping strategies to replace what's not working",
    category: "Addiction & Family Recovery",
    categorySlug: "addiction-family-recovery",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "What actually replaces a harmful coping pattern - matching strategies to the job the behaviour was doing for you.",
    thumbClass: "latest-thumb-19",
    heroImage: "images/addiction-healthy-coping.jpg",
    heroAlt:
      "A person walking on a tree-lined path in soft golden morning light",
    hasSafetyNote: true,
  },
  {
    slug: "understanding-shunning-why-its-designed-to-work",
    path: "/resources/recovery-from-shunning/understanding-shunning-why-its-designed-to-work",
    title: "Understanding shunning: why it's designed to work",
    category: "Recovery from Shunning",
    categorySlug: "recovery-from-shunning",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Shunning as a deliberate system, not a personal verdict - why it works as a control mechanism, and why that can help.",
    thumbClass: "latest-thumb-20",
    heroImage: "images/shunning-understanding.jpg",
    heroAlt: "An empty chair at a dining table in soft afternoon light",
    hasSafetyNote: false,
  },
  {
    slug: "the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like",
    path: "/resources/recovery-from-shunning/the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like",
    title: "The silence after: what the first few months of being shunned actually feel like",
    category: "Recovery from Shunning",
    categorySlug: "recovery-from-shunning",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "The silence, the grief, and the disorientation of the first few months - what it actually feels like, honestly described.",
    thumbClass: "latest-thumb-21",
    heroImage: "images/shunning-silence-after.jpg",
    heroAlt: "Rain on a window with a mug of tea on the sill in soft grey light",
    hasSafetyNote: true,
  },
  {
    slug: "should-you-try-to-reconnect-or-let-it-rest-thinking-through-reinstatement-pressure",
    path: "/resources/recovery-from-shunning/should-you-try-to-reconnect-or-let-it-rest-thinking-through-reinstatement-pressure",
    title: "Should you try to reconnect, or let it rest?",
    category: "Recovery from Shunning",
    categorySlug: "recovery-from-shunning",
    readTime: "7 min read",
    updated: "August 2026",
    excerpt:
      "Thinking through reinstatement pressure honestly - questions to sit with, and why neither path is a betrayal of yourself.",
    thumbClass: "latest-thumb-22",
    heroImage: "images/shunning-reinstatement-pressure.jpg",
    heroAlt: "Two envelopes on a wooden kitchen table in soft morning light",
    hasSafetyNote: true,
  },
  {
    slug: "going-back-to-school-as-an-adult-gcses-access-courses-and-where-to-start",
    path: "/resources/education-training/going-back-to-school-as-an-adult-gcses-access-courses-and-where-to-start",
    title: "Going back to school as an adult: GCSEs, Access courses, and where to start",
    category: "Education & Training",
    categorySlug: "education-training",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "GCSEs, Access courses, and practical first steps when your formal education was limited or interrupted.",
    thumbClass: "latest-thumb-23",
    heroImage: "images/education-back-to-school.jpg",
    heroAlt: "An open notebook and textbook on a study desk in warm afternoon light",
    hasSafetyNote: false,
  },
  {
    slug: "is-university-actually-realistic-for-me",
    path: "/resources/education-training/is-university-actually-realistic-for-me",
    title: "Is university actually realistic for me?",
    category: "Education & Training",
    categorySlug: "education-training",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Separating real barriers from unfamiliarity - qualifications, money, time, and how to think through university honestly.",
    thumbClass: "latest-thumb-24",
    heroImage: "images/education-university-realistic.jpg",
    heroAlt: "A university building seen softly through trees in late afternoon light",
    hasSafetyNote: false,
  },
  {
    slug: "filling-educational-gaps-without-going-back-to-a-classroom",
    path: "/resources/education-training/filling-educational-gaps-without-going-back-to-a-classroom",
    title: "Filling educational gaps without going back to a classroom",
    category: "Education & Training",
    categorySlug: "education-training",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "Free platforms and practical ways to build knowledge on your own terms, before or instead of formal study.",
    thumbClass: "latest-thumb-25",
    heroImage: "images/education-filling-gaps.jpg",
    heroAlt: "A laptop and notebook on a kitchen table in quiet evening light",
    hasSafetyNote: false,
  },
  {
    slug: "discovering-what-you-actually-enjoy",
    path: "/resources/personal-growth/discovering-what-you-actually-enjoy",
    title: "Discovering what you actually enjoy",
    category: "Personal Growth",
    categorySlug: "personal-growth",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Rebuilding taste and pleasure on your own terms when what you liked before was shaped by the environment you left.",
    thumbClass: "latest-thumb-26",
    heroImage: "images/personal-growth-discovering-enjoyment.jpg",
    heroAlt: "Books and headphones on a windowsill in warm morning light",
    hasSafetyNote: false,
  },
  {
    slug: "setting-goals-when-youve-never-been-allowed-to-want-things-for-yourself",
    path: "/resources/personal-growth/setting-goals-when-youve-never-been-allowed-to-want-things-for-yourself",
    title: "Setting goals when you've never been allowed to want things for yourself",
    category: "Personal Growth",
    categorySlug: "personal-growth",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "When purpose was defined for you - starting with small wants before formal goals, and learning that wanting things for yourself is allowed.",
    thumbClass: "latest-thumb-27",
    heroImage: "images/personal-growth-setting-goals.jpg",
    heroAlt: "An open notebook and pen on a wooden desk in soft morning light",
    hasSafetyNote: false,
  },
  {
    slug: "celebrating-how-far-youve-come",
    path: "/resources/personal-growth/celebrating-how-far-youve-come",
    title: "Celebrating how far you've come",
    category: "Personal Growth",
    categorySlug: "personal-growth",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "A deliberate pause to notice real progress - and a practical exercise for seeing how far you've actually come.",
    thumbClass: "latest-thumb-28",
    heroImage: "images/personal-growth-celebrating-progress.jpg",
    heroAlt: "A hand resting on a stack of journals beside a window in warm afternoon light",
    hasSafetyNote: false,
  },
  {
    slug: "opening-bank-account",
    path: "/resources/financial-stability/opening-bank-account",
    title: "Opening a bank account for the first time",
    category: "Financial Stability",
    categorySlug: "financial-stability",
    readTime: "4 min read",
    updated: "August 2026",
    excerpt:
      "What you'll need, what to ask, and how to avoid the fees nobody warns you about.",
    thumbClass: "latest-thumb-2",
    hasSafetyNote: false,
  },
  {
    slug: "budgeting-when-youre-starting-from-zero",
    path: "/resources/financial-stability/budgeting-when-youre-starting-from-zero",
    title: "Budgeting when you're starting from zero",
    category: "Financial Stability",
    categorySlug: "financial-stability",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "Nobody taught you how to manage money? Start with tracking, a simple split, and habits that build over time.",
    thumbClass: "latest-thumb-10",
    heroImage: "images/financial-budgeting-zero.jpg",
    heroAlt:
      "A notebook, a few coins, and a mug of tea on a wooden table - starting to track money simply",
    hasSafetyNote: false,
  },
  {
    slug: "when-money-was-never-really-yours-to-control",
    path: "/resources/financial-stability/when-money-was-never-really-yours-to-control",
    title: "When money was never really yours to control",
    category: "Financial Stability",
    categorySlug: "financial-stability",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "The guilt, paralysis, and small steps toward owning your financial decisions - when you've never been in charge before.",
    thumbClass: "latest-thumb-11",
    heroImage: "images/financial-money-control.jpg",
    heroAlt: "Hands opening a simple wallet on a kitchen table in soft morning light",
    hasSafetyNote: false,
  },
  {
    slug: "who-am-i-if-im-not-that-anymore",
    path: "/resources/emotional-wellbeing/who-am-i-if-im-not-that-anymore",
    title: "Who am I, if I'm not that anymore?",
    category: "Emotional Wellbeing",
    categorySlug: "emotional-wellbeing",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "When you're not sure what's yours and what was shaped for you - and how to start finding out, slowly.",
    thumbClass: "latest-thumb-7",
    heroImage: "images/emotional-who-am-i.jpg",
    heroAlt:
      "A coat on a hook and soft window light in a quiet room - space to figure out who you are now",
    hasSafetyNote: false,
  },
  {
    slug: "learning-to-trust-your-own-judgement-again",
    path: "/resources/emotional-wellbeing/learning-to-trust-your-own-judgement-again",
    title: "Learning to trust your own judgement again",
    category: "Emotional Wellbeing",
    categorySlug: "emotional-wellbeing",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "When second-guessing becomes automatic - and small, everyday ways to start trusting your own read on things again.",
    thumbClass: "latest-thumb-8",
    heroImage: "images/emotional-trust-judgement.jpg",
    heroAlt:
      "A quiet fork in a tree-lined path in soft morning light - space to choose for yourself",
    hasSafetyNote: false,
  },
  {
    slug: "why-some-days-are-harder-than-others-for-no-clear-reason",
    path: "/resources/emotional-wellbeing/why-some-days-are-harder-than-others-for-no-clear-reason",
    title: "Why some days are harder than others, for no clear reason",
    category: "Emotional Wellbeing",
    categorySlug: "emotional-wellbeing",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "When a hard day arrives out of nowhere - why recovery isn't a straight line, and what helps when it happens.",
    thumbClass: "latest-thumb-9",
    heroImage: "images/emotional-hard-days.jpg",
    heroAlt:
      "Soft grey morning light through a rain-streaked window, with a mug of tea on the sill",
    hasSafetyNote: true,
  },
  {
    slug: "when-grief-doesnt-look-like-grief",
    path: "/resources/emotional-wellbeing/when-grief-doesnt-look-like-grief",
    title: "When grief doesn't look like grief",
    category: "Emotional Wellbeing",
    categorySlug: "emotional-wellbeing",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "The feelings that catch people off guard after leaving - and what's normal when it happens.",
    thumbClass: "latest-thumb-3",
    hasSafetyNote: true,
    comingSoon: true,
  },
  {
    slug: "planning-your-exit",
    path: "/resources/leaving-safely/planning-your-exit",
    title: "Planning your exit without tipping anyone off",
    category: "Leaving Safely",
    categorySlug: "leaving-safely",
    readTime: "8 min read",
    updated: "August 2026",
    excerpt:
      "Practical steps for protecting your safety, documents, and finances before you go.",
    thumbClass: "latest-thumb-4",
    heroImage: "images/leaving-planning-exit.jpg",
    heroAlt:
      "A passport, notebook, and keys on a table by a window - quietly gathering what you need before you go",
    hasSafetyNote: true,
  },
  {
    slug: "first-48-hours-after-leaving",
    path: "/resources/leaving-safely/first-48-hours-after-leaving",
    title: "What to expect in the first 48 hours after you leave",
    category: "Leaving Safely",
    categorySlug: "leaving-safely",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "What the first two days actually feel like - and what to prioritise if you're starting from very little.",
    thumbClass: "latest-thumb-5",
    heroImage: "images/leaving-first-48-hours.jpg",
    heroAlt:
      "Early morning light through a window onto a packed bag by the door - the quiet start of the first day out",
    hasSafetyNote: true,
  },
  {
    slug: "how-do-you-know-if-youre-ready-to-leave",
    path: "/resources/leaving-safely/how-do-you-know-if-youre-ready-to-leave",
    title: "How do you know if you're ready to leave?",
    category: "Leaving Safely",
    categorySlug: "leaving-safely",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Honest questions, normal doubts, and what it actually feels like when you're still deciding.",
    thumbClass: "latest-thumb-6",
    heroImage: "images/leaving-ready-to-leave.jpg",
    heroAlt:
      "A chair by a window with an open notebook on a side table - quiet space for honest reflection",
    hasSafetyNote: true,
  },
  {
    slug: "leaving-when-youre-also-coming-out",
    path: "/resources/lgbtq-support/leaving-when-youre-also-coming-out",
    title: "Leaving when you're also coming out",
    category: "LGBTQ+ Support",
    categorySlug: "lgbtq-support",
    readTime: "7 min read",
    updated: "August 2026",
    excerpt:
      "When leaving a high-control group and coming out happen together - why it's its own kind of hard, and what helps.",
    thumbClass: "latest-thumb-29",
    heroImage: "images/lgbtq-leaving-coming-out.jpg",
    heroAlt:
      "An open front door with soft morning light and a coat on the hook - a quiet threshold between leaving and beginning again",
    hasSafetyNote: true,
  },
  {
    slug: "unlearning-shame-that-was-taught-as-fact",
    path: "/resources/lgbtq-support/unlearning-shame-that-was-taught-as-fact",
    title: "Unlearning shame that was taught as fact",
    category: "LGBTQ+ Support",
    categorySlug: "lgbtq-support",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "When shame about your identity was taught as religious fact - why it's different from ordinary self-doubt, and what actually helps.",
    thumbClass: "latest-thumb-31",
    heroImage: "images/lgbtq-unlearning-shame.jpg",
    heroAlt:
      "Rain on a window beside a mug of tea and sage bedding - a quiet moment for reflection and unlearning",
    hasSafetyNote: true,
  },
  {
    slug: "finding-lgbtq-community-when-you-missed-out-on-it-growing-up",
    path: "/resources/lgbtq-support/finding-lgbtq-community-when-you-missed-out-on-it-growing-up",
    title: "Finding LGBTQ+ community when you missed out on it growing up",
    category: "LGBTQ+ Support",
    categorySlug: "lgbtq-support",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Practical first steps for building LGBTQ+ community as an adult, when you missed the gradual build-up most people get growing up.",
    thumbClass: "latest-thumb-30",
    heroImage: "images/lgbtq-finding-community.jpg",
    heroAlt:
      "A group of friends laughing together outdoors - finding community and belonging",
    hasSafetyNote: true,
  },
  {
    slug: "having-doubts-about-what-youve-been-taught",
    path: "/resources/for-teenagers/having-doubts-about-what-youve-been-taught",
    title: "Having doubts about what you've been taught? You're not alone",
    category: "For Teenagers",
    categorySlug: "for-teenagers",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "Questioning what you grew up with is a normal part of growing up - and you don't have to decide anything right now.",
    thumbClass: "latest-thumb-32",
    heroImage: "images/teenagers-having-doubts.jpg",
    heroAlt:
      "A quiet bedroom window seat with an open notebook and soft afternoon light - a private space to think",
    hasSafetyNote: true,
  },
  {
    slug: "you-dont-have-to-have-it-all-figured-out-yet",
    path: "/resources/for-teenagers/you-dont-have-to-have-it-all-figured-out-yet",
    title: "You don't have to have it all figured out yet",
    category: "For Teenagers",
    categorySlug: "for-teenagers",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "There's no rush to decide what you believe - why uncertainty is okay, and why your safety comes first while you work it out.",
    thumbClass: "latest-thumb-33",
    heroImage: "images/teenagers-figured-out.jpg",
    heroAlt:
      "A quiet back doorstep in soft evening light with a mug of tea and a garden beyond - a private spot to sit and think",
    hasSafetyNote: true,
  },
  {
    slug: "renting-for-the-first-time-deposits-contracts-and-what-to-watch-for",
    path: "/resources/housing/renting-for-the-first-time-deposits-contracts-and-what-to-watch-for",
    title: "Renting for the first time: deposits, contracts, and what to watch for",
    category: "Housing",
    categorySlug: "housing",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Deposits, tenancy agreements, banned fees, and the red flags worth knowing about before you sign anything.",
    thumbClass: "latest-thumb-35",
    heroImage: "images/housing-renting-first-time.jpg",
    heroAlt:
      "A set of keys and a tenancy agreement on a kitchen table in a bright, nearly empty flat",
    hasSafetyNote: true,
  },
  {
    slug: "what-to-do-if-youre-at-risk-of-homelessness",
    path: "/resources/housing/what-to-do-if-youre-at-risk-of-homelessness",
    title: "What to do if you're at risk of homelessness",
    category: "Housing",
    categorySlug: "housing",
    readTime: "6 min read",
    updated: "August 2026",
    excerpt:
      "Your legal right to help from the council, who to contact first, and why reaching out early widens your options.",
    thumbClass: "latest-thumb-36",
    heroImage: "images/housing-risk-of-homelessness.jpg",
    heroAlt:
      "A phone, an open notebook and a mug of tea on a table by a sunlit window - getting ready to make the call",
    hasSafetyNote: true,
  },
  {
    slug: "setting-up-a-home-from-nothing",
    path: "/resources/housing/setting-up-a-home-from-nothing",
    title: "Setting up a home from nothing",
    category: "Housing",
    categorySlug: "housing",
    readTime: "5 min read",
    updated: "August 2026",
    excerpt:
      "Start with sleep, a kettle, and what's actually needed - then build the rest gradually, cheaply or free.",
    thumbClass: "latest-thumb-37",
    heroImage: "images/housing-setting-up-home.jpg",
    heroAlt:
      "A made bed and a small bedside table with a lamp - a simple first space taking shape",
    hasSafetyNote: true,
  },
];

/**
 * @param {string} [categorySlug]
 * @returns {string}
 */
window.resourceCategoryUrl = function resourceCategoryUrl(categorySlug) {
  if (!categorySlug) return "/resources";
  return `/resources?category=${encodeURIComponent(categorySlug)}`;
};

/**
 * @param {string} slug
 * @returns {{ slug: string, label: string } | undefined}
 */
window.getResourceCategory = function getResourceCategory(slug) {
  return window.RESOURCE_CATEGORIES.find(function (cat) {
    return cat.slug === slug;
  });
};

/**
 * An article belongs to its own category plus any listed in `alsoInCategorySlugs`,
 * so cross-audience pieces can appear under more than one topic.
 *
 * @param {{ categorySlug: string, alsoInCategorySlugs?: string[] }} article
 * @param {string} categorySlug
 * @returns {boolean}
 */
window.resourceArticleInCategory = function resourceArticleInCategory(
  article,
  categorySlug
) {
  if (article.categorySlug === categorySlug) return true;
  var also = article.alsoInCategorySlugs || [];
  return also.indexOf(categorySlug) !== -1;
};

/**
 * @returns {typeof window.RESOURCE_ARTICLES}
 */
window.getPublishedResourceArticles = function getPublishedResourceArticles() {
  return window.RESOURCE_ARTICLES.filter(function (article) {
    return !article.comingSoon;
  });
};

/**
 * @param {string} str
 * @returns {string}
 */
window.escapeHtml = function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

/**
 * @typedef {Object} ResourceCategory
 * @property {string} slug
 * @property {string} label
 * @property {string} short
 * @property {string} description
 * @property {string} imageClass
 */

/**
 * @typedef {Object} ResourceArticleContent
 * @property {string} slug
 * @property {string} path
 * @property {string} title
 * @property {string} category
 * @property {string} categorySlug
 * @property {string[]} [alsoInCategorySlugs]
 * @property {string} readTime
 * @property {string} updated
 * @property {string} excerpt
 * @property {string} [heroImage]
 * @property {string} [heroAlt]
 * @property {string} [thumbClass]
 * @property {boolean} hasSafetyNote
 * @property {boolean} [comingSoon]
 * @property {string} [safetyNoteHtml]
 * @property {string[]} [relatedSlugs]
 */
