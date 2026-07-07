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

### 2026-07-07 — Forms & Validation (6.3)
- **Misconception:** In a controlled input the value lives in "RHF form values," and in an uncontrolled input it lives in "parent state" — with `Controller` as React Hook Form's core mechanism. (Value-ownership backwards, and the plain React/DOM concept conflated with RHF's API.)
- **Correction:** Controlled = **React state owns the value** — the `value` prop makes the input a puppet, so every keystroke must round-trip event → setState → re-render before the character paints. Uncontrolled = **the DOM node owns the value** (native browser behavior); React reads it via a ref, and typing causes zero re-renders. RHF's default (`register`) is *uncontrolled* plus subscription-based re-renders (`formState`, `watch`) — a form-scoped store; `Controller` is the escape hatch for third-party components that must be controlled, not the core trick.
- **Why it matters:** This ownership model is the entire reason RHF exists and the mechanism behind laggy typing in large fully-controlled forms (letters trailing keystrokes on slow devices). Without it, form-library choices and form-perf fixes are cargo-culted.
- **Revisit:** During the 6.3 homework review and again in 6.7 (Frontend Performance) — ask who owns the value in each input of the submitted form and which components re-render on a keystroke.

- **Misconception:** If a hand-written TS interface and the Zod schema drift apart (a field added to one but not the other), "it may error."
- **Correction:** Nothing errors — that's the danger. TS treats the interface and the schema as unrelated declarations (the build passes), and `z.object` strips unknown keys by default (validation *succeeds* and silently deletes the field). The failure mode is **silent data loss**, discovered as unexplained nulls much later. Fix: one Zod schema as the single source of truth with `type X = z.infer<typeof schema>` and no hand-written interfaces; `.strict()` makes unknown keys a loud 400. Root gap filled: **type erasure** — types compile to zero bytes of JS, so derivation flows value → type (`z.infer`), never type → value.
- **Why it matters:** Silent-drift bugs skip every alarm (no compile error, no runtime throw, no log line) and surface as corrupt or missing data weeks later — worse than a crash, which pages someone immediately.
- **Revisit:** 6.3 homework review — confirm zero `interface`s and that the student can state the type-erasure reason for the derivation direction.

### 2026-07-06 — Global State Management (6.2)
- **Misconception:** `useMemo` on a Context `value` is unnecessary — "when the theme changes we re-render everyone anyway, so there's no re-render to prevent." (Also, earlier in the session: reaching straight for a global store as the *second* option, skipping lift-state-up.)
- **Correction:** The `useMemo` does not guard against the value changing (those changes *should* re-render every consumer). It guards against **cause #2 of a re-render**: a component re-renders when its own state/props change *or when its parent re-renders*. When the provider's parent re-renders for any unrelated reason, the provider re-renders and rebuilds the `{ ... }` object literal → new reference → Context compares by reference → **every consumer re-renders even though the value's contents are identical**. `useMemo` (plus stable `useCallback` callbacks) pins the reference so consumers only re-render on real changes.
- **Why it matters:** On a small theme context the waste is invisible; on an auth/cart context with many consumers and a chatty parent, an un-memoized `value` causes real, hard-to-spot jank from a single-line object literal. Missing "parent re-render" as a re-render cause is the root gap.
- **Revisit:** During the 6.2 hands-on and again in 6.3 (styling) / any future Context work — confirm the provider memoizes its value and stabilizes callbacks, and that the student can state *which* re-render the memo prevents.
- **Misconception:** HTML/CSS skill is ~9/10 because of 6 years of professional frontend experience.
- **Correction:** Professional experience builds pattern fluency but skips fundamentals never needed on the job. The gaps were: semantic HTML (landmark rules, `<article>` syndication test), the cascade as a resolution algorithm (`@layer`, `!important` inversions), stacking contexts, ARIA and the accessibility tree, and keyboard navigation. These are 9/10 skills — they were just never encountered in typical React/Next.js work.
- **Why it matters:** Overestimating a skill area leads to skipping fundamentals that become visible gaps in system design and code review. The areas most likely to have hidden gaps are ones where frameworks did the heavy lifting (React handles a11y and DOM structure; Tailwind handles cascade specificity conflicts).
- **Revisit:** When working on Module 05 (React Fundamentals) — check that React component markup applies the same semantic/a11y standards built here.

### 2026-06-17 — Semantic HTML (2.1)
- **Misconception:** A user comment should not be an `<article>` — `<article>` is for blog-post-like standalone content only.
- **Correction:** The test for `<article>` is the *syndication test* — could this unit stand alone or be distributed independently? A comment has its own author, timestamp, and meaning out of context, so it qualifies. `<article>` nests: a post is an `<article>` and each comment is a nested `<article>`. (Comments are the HTML spec's textbook example of `<article>`.)
- **Why it matters:** Correct article nesting drives how assistive tech and feed/syndication tooling segment a page; getting it wrong flattens distinct authored units into undifferentiated content.
- **Revisit:** During Module 02's landing-page build and again when building React feed/comment components — confirm posts and comments use nested `<article>`s.
