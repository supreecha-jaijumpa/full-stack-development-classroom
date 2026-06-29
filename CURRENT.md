# Current Session Snapshot
> Updated by mentor after every session. Read this at session start instead of `progress/log.md` + `plan/roadmap.md`.

| Field | Value |
|-------|-------|
| **Profile** | Senior frontend dev (6 yrs, React/Next) → goal: Software Architect |
| **Current Phase** | Phase 1 — Foundations |
| **Current Module** | Module 05 — React Fundamentals |
| **Status** | Module 02 complete ✅ (6/6); Module 03 complete ✅ (8/8); Module 04 complete ✅ (6/6); Module 05: 5.1 ✅, 5.2 ✅, 5.3 ✅, 5.4 ✅, 5.5 ✅ |
| **Week Goal** | Work through Module 05 — React Fundamentals |
| **Last Session Date** | 2026-06-29 |
| **Last Session Summary** | Completed 5.5 — Lists & Conditional Rendering (architect lens; `.map()` mechanics skipped — student is fluent). Two ideas carried it, both reframed from "syntax" to **identity/correctness**: (1) **A `key` is an identity claim, not a label** — it tells React's reconciler *which element is the same element across renders*, binding DOM nodes + local state to a piece of *data*, not a *position*. Index keys glue state to a *slot*, so on reorder/filter React reuses the slot's instance with new props (text updates correctly!) but its local state (open menu, focus, input) stays behind on the wrong row — the bug is never "wrong text," it's "stateful UI on the wrong item." Corrected the student's wrong mechanism ("index keys won't re-render") — it *does* re-render; state is what desyncs. Stable keys = correctness first, the reduced DOM work is a side effect (same shape as 5.4's "sync primitive, not lifecycle hook" — React perf tools are often really identity tools). (2) **Conditional rendering `&&` footgun** — student had no prior exposure; taught the falsy-leak: `&&` returns its falsy left operand, and React renders `0`/`""` (but skips `false`/`null`/`undefined`), so `{count && <Badge/>}` leaks a literal `0`; fix with `count > 0 &&` or a ternary (forces an explicit else-branch, can't leak). Empty/"no results" state framed as a first-class branch. No exercise (taught + discussed; ran `/done` after). Articulation: answers still arriving as fused clause-fragments — re-modeled the 3-beat (claim → mechanism → payoff) explicitly on both the index-key bug and the GitHub-filter point; student is starting to echo the shape back. |
| **Homework** | None assigned |
| **Homework Status** | — |
| **Next Action** | Teach 5.6 — Routing (React Router) (next topic in Module 05 README). Optional cement: Exercise 5.5 (filterable list + empty state) or Exercise 5.4 (fetch-on-mount), both skipped — offer at start of next session if the student wants code reps. |
