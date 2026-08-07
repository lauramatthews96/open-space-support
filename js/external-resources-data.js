/**
 * External organisations linked from resource articles and the resources index.
 * Omit `categorySlugs` (or leave empty) to show on every article; set slugs to limit by category.
 */
window.EXTERNAL_RESOURCE_SECTIONS = {
  "leaving-safely": {
    heading: "External Resources for Leaving Safely",
    subhead:
      "We're not the only people doing this work, and we don't want to be. These organisations offer support we can't - reach out to any of them directly.",
  },
  "emotional-wellbeing": {
    heading: "External Resources for Emotional Wellbeing",
    subhead:
      "These specialists and organisations focus specifically on religious trauma and cult recovery. Reach out to any of them directly.",
  },
  "financial-stability": {
    heading: "External Resources for Financial Stability",
    subhead:
      "Free, confidential help with debt, budgeting, and understanding what financial support you might be entitled to.",
  },
  "career-employment": {
    heading: "External Resources for Career & Employment",
    subhead:
      "Free, practical support for building a career, whatever stage you're starting from.",
  },
  "family-relationships": {
    heading: "External Resources for Family & Relationships",
    subhead:
      "Practical and emotional support for navigating family relationships, co-parenting, and estrangement.",
  },
  "addiction-family-recovery": {
    heading: "External Resources for Addiction & Family Recovery",
    subhead:
      "Free, confidential support for addiction of all kinds, for you and for the people around you.",
  },
  "recovery-from-shunning": {
    heading: "External Resources for Recovery from Shunning",
    subhead:
      "Support specifically for the isolation and loss that shunning causes, whether that's religious in origin or not.",
  },
  "education-training": {
    heading: "External Resources for Education & Training",
    subhead:
      "Free advice and funding routes for returning to education at any stage or age.",
  },
  "personal-growth": {
    heading: "External Resources for Personal Growth",
    subhead:
      "Free ways to build confidence, connection, and a genuinely wider sense of what's possible.",
  },
};

window.EXTERNAL_RESOURCES = [
  {
    slug: "faith-to-faithless",
    name: "Faith to Faithless (Humanists UK)",
    description:
      "A UK helpline specifically for people who've left, or are leaving, high-control religious groups - including strong experience supporting former Jehovah's Witnesses. Free from mobiles and landlines, staffed by volunteers with lived experience, with peer support groups available too.",
    url: "https://humanists.uk/faith-to-faithless/",
    logo: "images/external/faith-to-faithless.png",
    categorySlugs: ["leaving-safely"],
  },
  {
    slug: "family-survival-trust",
    name: "The Family Survival Trust",
    description:
      "A UK charity supporting people affected by coercive and cultic groups, with a dedicated resources hub covering safe exit planning, support organisations, and emergency housing options.",
    url: "https://thefamilysurvivaltrust.org/",
    logo: "images/external/family-survival-trust.png",
    categorySlugs: ["leaving-safely"],
  },
  {
    slug: "olive-leaf-network",
    name: "Olive Leaf Network",
    description:
      'Provides aid and advocacy for former members of high-demand religious groups, including a free "Thinking of Leaving" booklet written by former members specifically for people considering an exit.',
    url: "https://oliveleaf.network/resources/",
    logo: "images/external/olive-leaf-network.png",
    categorySlugs: ["leaving-safely"],
  },
  {
    slug: "shelter",
    name: "Shelter",
    description:
      "Expert advice and emergency support for anyone facing homelessness or unsafe housing - relevant if leaving means your living situation is uncertain too.",
    url: "https://england.shelter.org.uk",
    urlNote:
      "Scotland: scotland.shelter.org.uk · Wales: sheltercymru.org.uk · Northern Ireland: housingadviceni.org",
    logo: "images/external/shelter.png",
    categorySlugs: ["leaving-safely"],
  },
  {
    slug: "hope-valley-counselling",
    name: "Hope Valley Counselling",
    description:
      "UK-based accredited psychotherapist Dr Gillie Jenkinson, specialising in counselling for coercive, cultic, and spiritual abuse.",
    url: "https://www.hopevalleycounselling.com/",
    logo: "images/external/hope-valley-counselling.png",
    categorySlugs: ["emotional-wellbeing"],
  },
  {
    slug: "encourage-survivors",
    name: "EnCourage Survivors of Cults and Abuse",
    description:
      "UK charity subsidising therapy costs for former cult members via a vetted counsellor network.",
    url: "https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/4008821/charity-overview",
    logo: "images/external/encourage-survivors.png",
    categorySlugs: ["emotional-wellbeing"],
  },
  {
    slug: "icsa",
    name: "International Cultic Studies Association (ICSA)",
    description:
      "Research and resources on post-cult effects, plus guidance for families and professionals.",
    url: "https://www.internationalculticstudies.org/",
    logo: "images/external/icsa.png",
    categorySlugs: ["emotional-wellbeing"],
  },
  {
    slug: "selfmade-religious-trauma",
    name: "SELFMADE (Religious Trauma Therapy)",
    description:
      "UK-based therapy specifically for religious trauma, including support for people still inside a group (PIMO) as well as those fully out (POMO).",
    url: "https://www.selfmadementalhealth.co.uk/religious-trauma",
    logo: "images/external/selfmade.png",
    categorySlugs: ["emotional-wellbeing"],
  },
  {
    slug: "stepchange",
    name: "StepChange Debt Charity",
    description:
      "The UK's leading debt charity, offering free and impartial debt advice online or via helpline, available across England, Scotland, Wales, and Northern Ireland, with practical debt solutions tailored to your situation. Getting advice from them doesn't affect your credit score.",
    url: "https://www.stepchange.org/",
    logo: "images/external/stepchange.png",
    categorySlugs: ["financial-stability"],
  },
  {
    slug: "national-debtline",
    name: "National Debtline",
    description:
      'A free, confidential, and independent debt advice charity, regulated by the Financial Conduct Advice Authority, offering support by phone, webchat, or their online "My Money Steps" tool. Every call and online tool is free, with no charge ever for support.',
    url: "https://nationaldebtline.org/",
    logo: "images/external/national-debtline.png",
    categorySlugs: ["financial-stability"],
  },
  {
    slug: "moneysavingexpert",
    name: "MoneySavingExpert",
    description:
      "Not a charity, but a widely trusted, genuinely free resource for comparing bills, understanding financial products, and navigating things like credit and budgeting without jargon. A good first stop for general financial literacy, alongside the debt-specific charities above.",
    url: "https://www.moneysavingexpert.com/",
    logo: "images/external/moneysavingexpert.png",
    categorySlugs: ["financial-stability"],
  },
  {
    slug: "turn2us",
    name: "Turn2us",
    description:
      "A UK charity focused on helping people access the financial support they're entitled to, benefits, grants, and hardship funds, particularly useful if you're rebuilding income from very little and aren't sure what you might qualify for.",
    url: "https://www.turn2us.org.uk/",
    logo: "images/external/turn2us.png",
    categorySlugs: ["financial-stability"],
  },
  {
    slug: "national-careers-service",
    name: "National Careers Service",
    description:
      "A free UK government service offering telephone and face-to-face careers advice, CV building, interview preparation, and training referrals, open to anyone regardless of age or background. The most broadly accessible option on this list.",
    url: "https://nationalcareers.service.gov.uk/",
    logo: "images/external/national-careers-service.png",
    categorySlugs: ["career-employment"],
  },
  {
    slug: "careers-springboard",
    name: "Careers Springboard",
    description:
      "A registered UK charity offering free job search support, including one-to-one CV coaching, LinkedIn help, and support from qualified counsellors for the anxiety and confidence knocks that often come with job searching. All services are delivered virtually, so it's accessible UK-wide despite being based in Buckinghamshire.",
    url: "https://careersspringboard.org.uk/",
    logo: "images/external/careers-springboard.png",
    categorySlugs: ["career-employment"],
  },
  {
    slug: "room-for-work",
    name: "Room for Work",
    description:
      "Specialises in helping mature jobseekers aged 40+ with previous work experience find roles, particularly relevant if you're rebuilding a career later in life rather than starting straight out of education.",
    url: "https://roomforwork.org/",
    urlNote:
      "Courses are delivered in-person in Richmond and other southwest London locations - mainly useful if you're in or near London, not a nationwide option.",
    logo: "images/external/room-for-work.png",
    categorySlugs: ["career-employment"],
  },
  {
    slug: "princes-trust",
    name: "The Prince's Trust",
    description:
      "Support for 16 to 30 year olds to gain skills and work experience, guidance on CV and interview techniques, and help starting a business with a mentor, nationwide and free.",
    url: "https://www.princes-trust.org.uk/",
    logo: "images/external/princes-trust.png",
    categorySlugs: ["career-employment"],
  },
  {
    slug: "relate",
    name: "Relate",
    description:
      "The UK's largest relationship support charity, offering relationship counselling for individuals and couples, family counselling, and counselling for children and young people, available by phone, webcam, or in person at centres across the UK. A strong first stop for both couples navigating a belief divide and family relationships more broadly.",
    url: "https://www.relate.org.uk/",
    logo: "images/external/relate.png",
    categorySlugs: ["family-relationships"],
  },
  {
    slug: "family-mediation-council",
    name: "Family Mediation Council",
    description:
      "The umbrella body overseeing family mediation services across the UK, with Legal Aid sometimes available to cover costs, useful for finding an accredited local mediator if you're trying to resolve co-parenting arrangements without going to court.",
    url: "https://www.familymediationcouncil.org.uk/",
    logo: "images/external/family-mediation-council.png",
    categorySlugs: ["family-relationships"],
  },
  {
    slug: "gingerbread",
    name: "Gingerbread",
    description:
      "A national charity supporting single parent families, relevant if you're co-parenting alone following separation, with practical guidance on everything from finances to shared care arrangements.",
    url: "https://www.gingerbread.org.uk/",
    logo: "images/external/gingerbread.png",
    categorySlugs: ["family-relationships"],
  },
  {
    slug: "family-lives",
    name: "Family Lives",
    description:
      "Offers help and information to over 85,000 parents and families each year, covering a broad range of family relationship difficulties, including a helpline for more general parenting and family support beyond formal mediation.",
    url: "https://www.familylives.org.uk/",
    logo: "images/external/family-lives.png",
    categorySlugs: ["family-relationships"],
  },
  {
    slug: "frank",
    name: "FRANK",
    description:
      "A free, confidential drugs and alcohol information and advice service, available 24 hours a day on 0300 123 6600, and a good first stop whatever stage you're at, whether you're worried about your own use or looking for options.",
    url: "https://www.talktofrank.com/",
    logo: "images/external/frank.png",
    categorySlugs: ["addiction-family-recovery"],
  },
  {
    slug: "adfam",
    name: "Adfam",
    description:
      "The leading charity in England for families affected by someone else's drinking or drug use, supporting children, parents, friends, partners, siblings, and grandparents specifically, distinct from services aimed at the person using.",
    url: "https://adfam.org.uk/",
    logo: "images/external/adfam.png",
    categorySlugs: ["addiction-family-recovery"],
  },
  {
    slug: "al-anon",
    name: "Al-Anon Family Groups",
    description:
      "Support for anyone whose life is, or has been, affected by someone else's drinking, regardless of whether that person is still drinking, run as a peer support fellowship with over 800 groups across the UK and Ireland.",
    url: "https://al-anonuk.org.uk/",
    logo: "images/external/al-anon.png",
    categorySlugs: ["addiction-family-recovery"],
  },
  {
    slug: "gamcare",
    name: "GamCare",
    description:
      "The leading provider of support for anyone affected by gambling harms, running the National Gambling Helpline on 0808 8020 133 (free, 24/7, every day of the year), plus treatment, forums, and support specifically for people affected by someone else's gambling too.",
    url: "https://www.gamcare.org.uk/",
    logo: "images/external/gamcare.png",
    categorySlugs: ["addiction-family-recovery"],
  },
  {
    slug: "stand-alone",
    name: "Stand Alone",
    description:
      "A UK charity supporting adults who are estranged from their family or a key family member, running support groups across the UK and working to reduce the isolation that comes with cut-off family ties. Not religion-specific, but directly relevant to the practical and emotional reality of shunning.",
    url: "https://www.standalone.org.uk/",
    logo: "images/external/stand-alone.png",
    categorySlugs: ["recovery-from-shunning"],
  },
  {
    slug: "faith-to-faithless-shunning",
    name: "Faith to Faithless (Humanists UK)",
    description:
      "A UK helpline specifically for people who've left, or are leaving, high-control religious groups, including strong experience with former Jehovah's Witnesses and the shunning that often follows. Free from mobiles and landlines, with peer support groups too.",
    url: "https://humanists.uk/faith-to-faithless/",
    logo: "images/external/faith-to-faithless.png",
    categorySlugs: ["recovery-from-shunning"],
  },
  {
    slug: "family-survival-trust-shunning",
    name: "The Family Survival Trust",
    description:
      "A UK charity supporting people affected by coercive and cultic groups, with resources covering the practical and emotional reality of family estrangement caused by group membership.",
    url: "https://thefamilysurvivaltrust.org/",
    logo: "images/external/family-survival-trust.png",
    categorySlugs: ["recovery-from-shunning"],
  },
  {
    slug: "hope-valley-counselling-shunning",
    name: "Hope Valley Counselling",
    description:
      "UK-based accredited psychotherapist Dr Gillie Jenkinson, specialising in counselling for coercive, cultic, and spiritual abuse, using a model developed specifically for post-cult recovery, relevant here given how often shunning-related grief needs proper therapeutic support rather than just peer connection.",
    url: "https://www.hopevalleycounselling.com/",
    logo: "images/external/hope-valley-counselling.png",
    categorySlugs: ["recovery-from-shunning"],
  },
  {
    slug: "national-careers-service-education",
    name: "National Careers Service",
    description:
      "The free careers service for adults in England, offering one-to-one advice on courses, training routes, and how to find funding to support learning, a strong first stop whether you're considering GCSEs, an Access course, or something else entirely.",
    url: "https://nationalcareers.service.gov.uk/",
    logo: "images/external/national-careers-service.png",
    categorySlugs: ["education-training"],
  },
  {
    slug: "govuk-further-education-courses",
    name: "Gov.uk: Further Education Courses and Funding",
    description:
      "Covers the full range of further education options, from basic English and maths through to Higher National Diplomas, plus what financial help is available, including whether your course might be free depending on your age and current qualifications.",
    url: "https://www.gov.uk/further-education-courses",
    logo: "images/external/govuk.png",
    categorySlugs: ["education-training"],
  },
  {
    slug: "govuk-mature-student-funding",
    name: "Gov.uk: Mature Students, University and Funding",
    description:
      "Official guidance specifically for mature students, including how to apply and what funding is available, importantly confirming that the Open University requires no qualifications to study, it's open to everyone.",
    url: "https://www.gov.uk/mature-student-university-funding",
    logo: "images/external/govuk.png",
    categorySlugs: ["education-training"],
  },
  {
    slug: "open-university",
    name: "The Open University",
    description:
      "Mentioned throughout our education articles, the OU is worth listing directly since it accepts students without traditional entry qualifications and offers flexible, part-time study that fits around work and other commitments, a genuinely accessible route into higher education.",
    url: "https://www.open.ac.uk/",
    logo: "images/external/open-university.png",
    categorySlugs: ["education-training"],
  },
  {
    slug: "mind",
    name: "Mind",
    description:
      "The UK mental health charity's helplines offer information and support by phone and email, and local Minds provide face-to-face services including talking therapies and peer support across England and Wales. Side by Side is their supportive online community for anyone experiencing a mental health problem, useful if confidence and self-esteem struggles are part of a wider picture.",
    url: "https://www.mind.org.uk/",
    logo: "images/external/mind.png",
    categorySlugs: ["personal-growth"],
  },
  {
    slug: "wea",
    name: "WEA (Workers' Educational Association)",
    description:
      "Runs friendly, supportive confidence-building courses covering self-belief, communication skills, and managing negative thinking, in small classes tailored to your goals, whether that's returning to work, building general confidence, or simply meeting people while learning something new.",
    url: "https://www.wea.org.uk/",
    logo: "images/external/wea.png",
    categorySlugs: ["personal-growth"],
  },
  {
    slug: "action-for-happiness",
    name: "Action for Happiness",
    description:
      "A UK charity running evidence-based courses and free local groups exploring practical ways to build a happier, more meaningful life, with peer-reviewed research showing real wellbeing benefits. They have no religious, political, or commercial affiliations and welcome people of all faiths or none, a genuinely neutral space to explore values and purpose.",
    url: "https://actionforhappiness.org/",
    logo: "images/external/action-for-happiness.png",
    categorySlugs: ["personal-growth"],
  },
  {
    slug: "doit",
    name: "Do-it.org",
    description:
      "The UK's biggest volunteering database, connecting people to thousands of volunteering opportunities from national charities and local community groups, free to use. A genuinely practical way to try new things, meet people, and build confidence through real experience, several of the Personal Growth articles point toward this as a low-pressure way to discover interests and build connection.",
    url: "https://doit.life/",
    logo: "images/external/doit.png",
    categorySlugs: ["personal-growth"],
  },
];

/**
 * @typedef {Object} ExternalResource
 * @property {string} slug
 * @property {string} name
 * @property {string} description
 * @property {string} url
 * @property {string} [urlNote]
 * @property {string[]} [categorySlugs]
 */

/**
 * @param {string} str
 * @returns {string}
 */
window.escapeHtml = window.escapeHtml || function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

/**
 * @param {string} [categorySlug]
 * @returns {ExternalResource[]}
 */
window.getExternalResourcesForCategory = function getExternalResourcesForCategory(categorySlug) {
  return window.EXTERNAL_RESOURCES.filter(function (resource) {
    if (!resource.categorySlugs || resource.categorySlugs.length === 0) {
      return true;
    }
    if (!categorySlug) {
      return true;
    }
    return resource.categorySlugs.indexOf(categorySlug) !== -1;
  });
};