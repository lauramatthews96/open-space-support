# Resource article template

Duplicate `career-employment/explaining-employment-gaps.html` when adding a new article.

## All Resources index (`resources.html`)

Categories live in `RESOURCE_CATEGORIES` inside `js/resources-data.js`. The homepage category grid and `/resources` filter dropdown both read from that list - add or rename a category there only.

Published articles are listed in `RESOURCE_ARTICLES`. Entries with `comingSoon: true` are excluded from the index grid.

Filter URLs use query params, e.g. `resources.html?category=leaving-safely`. Legacy hash links (`#leaving-safely`) still work on page load.

## Checklist per article

1. Copy the HTML file into the correct category folder (`resources/[category-slug]/[slug].html`).
2. Update breadcrumb, category tag, title, meta line, hero image + alt text.
3. Paste body copy into `.resource-article-body` using:
   - `<h2>` for section headings
   - `<blockquote class="resource-pullquote">` for standout lines
   - `<ul class="resource-list-bullet">` for bullet lists
   - `<ol class="resource-list-numbered">` for step sequences
4. If `has_safety_note` is true, add before related articles:

```html
<aside class="resource-safety-note" aria-labelledby="safety-note-heading">
  <h2 id="safety-note-heading">A note on this topic</h2>
  <p><!-- crisis lines --></p>
</aside>
```

5. External resources for Leaving Safely, Emotional Wellbeing, Financial Stability, Career & Employment, Housing, Family & Relationships, Addiction & Family Recovery, Recovery from Shunning, Education & Training, Personal Growth, LGBTQ+ Support, and For Teenagers live on `resources.html` when that category is selected, and on individual article pages via the block in `resources/partials/external-resources.html`. Data and section copy live in `js/external-resources-data.js`; rendering in `js/resources-external.js` and `js/external-resources.js`.

6. Update related article cards (same category first, then adjacent).
7. Add entry to `js/resources-data.js`.
8. Link from homepage / resources hub as needed.

## Article catalogue

| Slug | Category | Safety note |
|------|----------|-------------|
| explaining-employment-gaps | career-employment | no |
| figuring-out-what-you-actually-want-to-do | career-employment | no |
| networking-without-a-network | career-employment | no |
| talking-to-your-children-about-why-things-have-changed | family-relationships | no |
| co-parenting-when-you-and-your-ex-dont-agree-on-faith-anymore | family-relationships | no |
| when-your-parents-are-still-in-and-getting-older | family-relationships | no |
| supporting-a-teenager-whos-questioning-their-faith | family-relationships | yes |
| why-addiction-shows-up-so-often-after-leaving | addiction-family-recovery | yes |
| recognising-the-signs-in-yourself-or-someone-you-love | addiction-family-recovery | yes |
| healthy-coping-strategies-to-replace-whats-not-working | addiction-family-recovery | yes |
| understanding-shunning-why-its-designed-to-work | recovery-from-shunning | no |
| the-silence-after-what-the-first-few-months-of-being-shunned-actually-feel-like | recovery-from-shunning | yes |
| should-you-try-to-reconnect-or-let-it-rest-thinking-through-reinstatement-pressure | recovery-from-shunning | yes |
| going-back-to-school-as-an-adult-gcses-access-courses-and-where-to-start | education-training | no |
| is-university-actually-realistic-for-me | education-training | no |
| filling-educational-gaps-without-going-back-to-a-classroom | education-training | no |
| discovering-what-you-actually-enjoy | personal-growth | no |
| setting-goals-when-youve-never-been-allowed-to-want-things-for-yourself | personal-growth | no |
| celebrating-how-far-youve-come | personal-growth | no |
| leaving-when-youre-also-coming-out | lgbtq-support | yes |
| unlearning-shame-that-was-taught-as-fact | lgbtq-support | yes |
| finding-lgbtq-community-when-you-missed-out-on-it-growing-up | lgbtq-support | yes |
| having-doubts-about-what-youve-been-taught | for-teenagers | yes |
| you-dont-have-to-have-it-all-figured-out-yet | for-teenagers | yes |
| opening-bank-account | financial-stability | no |
| budgeting-when-youre-starting-from-zero | financial-stability | no |
| when-money-was-never-really-yours-to-control | financial-stability | no |
| when-grief-doesnt-look-like-grief | emotional-wellbeing | yes |
| who-am-i-if-im-not-that-anymore | emotional-wellbeing | no |
| learning-to-trust-your-own-judgement-again | emotional-wellbeing | no |
| why-some-days-are-harder-than-others-for-no-clear-reason | emotional-wellbeing | yes |
| planning-your-exit | leaving-safely | yes |
| first-48-hours-after-leaving | leaving-safely | yes |
| how-do-you-know-if-youre-ready-to-leave | leaving-safely | yes |
| renting-for-the-first-time-deposits-contracts-and-what-to-watch-for | housing | yes |
| what-to-do-if-youre-at-risk-of-homelessness | housing | yes |
