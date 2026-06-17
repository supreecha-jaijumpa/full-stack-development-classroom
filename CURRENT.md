# Current Session Snapshot
> Updated by mentor after every session. Read this at session start instead of `progress/log.md` + `plan/roadmap.md`.

| Field | Value |
|-------|-------|
| **Profile** | Senior frontend dev (6 yrs, React/Next) → goal: Software Architect |
| **Current Phase** | Phase 1 — Foundations |
| **Current Module** | Module 02 — HTML & CSS |
| **Status** | Module 02 in progress — 2.1 complete; 2.2 in progress (cascade algorithm done) |
| **Week Goal** | Work through Module 02 (HTML & CSS), skipping anything already solid — toward the deployed responsive landing-page milestone |
| **Last Session Date** | 2026-06-17 |
| **Last Session Summary** | Covered the cascade as a 4-step resolution algorithm: origin/importance → layer → specificity → order. Drilled the two inversions — `!important` flips both the origin order (UA/user beat author) and the `@layer` order (earliest layer wins; unlayered drops to lowest). Key insight locked: specificity is the *third* question, not the first — an unlayered low-specificity selector beats a high-specificity layered one for normal declarations, and the inversion is the same consistent flip at every cascade level. Exercise: ranked 6 declarations (mixed layers + `!important`) — full ranking correct (F>C>E>A>D>B); gap was *narrating* the steps, now filled. |
| **Homework** | None assigned |
| **Homework Status** | — |
| **Next Action** | Continue 2.2 — specificity as a tuple `(id, class, type)`, how `:is()`/`:where()`/`:not()` affect the count (`:where()` = 0), then stacking contexts (z-index as a hierarchy), then custom-property architecture. Then the profile-card hands-on. |
