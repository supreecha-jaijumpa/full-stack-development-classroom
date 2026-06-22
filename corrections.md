# Corrections Log

> The mentor records misconceptions here when they are corrected, so they can be revisited.
> Format: date, what was misunderstood, the correct understanding, and where it was clarified.

---

## Template

```
### YYYY-MM-DD — [Topic]
- **Misconception:** what was believed
- **Correction:** the accurate explanation
- **Why it matters:** the practical consequence of getting this wrong
- **Revisit:** when/how to re-check this is solid
```

---

## Corrections

### 2026-06-22 — Self-assessment calibration (Module 02 reflection)
- **Misconception:** HTML/CSS skill is ~9/10 because of 6 years of professional frontend experience.
- **Correction:** Professional experience builds pattern fluency but skips fundamentals never needed on the job. The gaps were: semantic HTML (landmark rules, `<article>` syndication test), the cascade as a resolution algorithm (`@layer`, `!important` inversions), stacking contexts, ARIA and the accessibility tree, and keyboard navigation. These are 9/10 skills — they were just never encountered in typical React/Next.js work.
- **Why it matters:** Overestimating a skill area leads to skipping fundamentals that become visible gaps in system design and code review. The areas most likely to have hidden gaps are ones where frameworks did the heavy lifting (React handles a11y and DOM structure; Tailwind handles cascade specificity conflicts).
- **Revisit:** When working on Module 05 (React Fundamentals) — check that React component markup applies the same semantic/a11y standards built here.

### 2026-06-17 — Semantic HTML (2.1)
- **Misconception:** A user comment should not be an `<article>` — `<article>` is for blog-post-like standalone content only.
- **Correction:** The test for `<article>` is the *syndication test* — could this unit stand alone or be distributed independently? A comment has its own author, timestamp, and meaning out of context, so it qualifies. `<article>` nests: a post is an `<article>` and each comment is a nested `<article>`. (Comments are the HTML spec's textbook example of `<article>`.)
- **Why it matters:** Correct article nesting drives how assistive tech and feed/syndication tooling segment a page; getting it wrong flattens distinct authored units into undifferentiated content.
- **Revisit:** During Module 02's landing-page build and again when building React feed/comment components — confirm posts and comments use nested `<article>`s.
