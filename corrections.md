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

### 2026-06-17 — Semantic HTML (2.1)
- **Misconception:** A user comment should not be an `<article>` — `<article>` is for blog-post-like standalone content only.
- **Correction:** The test for `<article>` is the *syndication test* — could this unit stand alone or be distributed independently? A comment has its own author, timestamp, and meaning out of context, so it qualifies. `<article>` nests: a post is an `<article>` and each comment is a nested `<article>`. (Comments are the HTML spec's textbook example of `<article>`.)
- **Why it matters:** Correct article nesting drives how assistive tech and feed/syndication tooling segment a page; getting it wrong flattens distinct authored units into undifferentiated content.
- **Revisit:** During Module 02's landing-page build and again when building React feed/comment components — confirm posts and comments use nested `<article>`s.
