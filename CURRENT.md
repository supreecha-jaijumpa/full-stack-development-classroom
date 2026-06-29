# Current Session Snapshot
> Updated by mentor after every session. Read this at session start instead of `progress/log.md` + `plan/roadmap.md`.

| Field | Value |
|-------|-------|
| **Profile** | Senior frontend dev (6 yrs, React/Next) → goal: Software Architect |
| **Current Phase** | Phase 1 — Foundations |
| **Current Module** | Module 05 — React Fundamentals |
| **Status** | Module 02 complete ✅ (6/6); Module 03 complete ✅ (8/8); Module 04 complete ✅ (6/6); Module 05: 5.1 ✅, 5.2 ✅, 5.3 ✅ |
| **Week Goal** | Work through Module 05 — React Fundamentals |
| **Last Session Date** | 2026-06-29 |
| **Last Session Summary** | Completed 5.3 — State & Events (architect lens; mechanics already known). The whole topic collapsed to one idea wearing three hats — **single source of truth**: (1) *what is state* — it qualifies for `useState` only if it both changes over time AND can't be derived; `videos.length` and Add/Added are derived, logged-in user is owned elsewhere → "don't put in state what you can calculate during render"; (2) *where it lives* — lift only what's shared, colocate everything else (`playlist` lifted to parent, `searchTerm` stays local); (3) *why async/immutable* — batching + snapshot consistency (`UI = f(state)`), mutation mid-render would tear. New vocab locked: **invariant vs affordance** — enforce invariants at the state boundary (the chokepoint every write passes through), not at the UI (`disabled` is a courtesy, the dedup guard is the law); defensive code is bad at the edges, good at the chokepoint. Exercise: `<PlaylistBuilder>` (YouTube playlist builder, two siblings + parent) — student's state model was correct first pass, applied 5.2's minimal-prop-surface lesson unprompted (passed a `Set<number>` of ids to search, full array to summary), used functional `setPlaylist` updates. Initially wrote plain JS; on request added full TS (typed `Video`, props, `React.ChangeEvent<HTMLInputElement>`). 9/10, Pass. Event-type drill: `ChangeEvent<HTMLInputElement>` not `InputEvent`. English articulation a touch looser than last session (lead-with-payoff fragments) — re-modeled the 3-beat shape; suggested refinement `readonly Video[]` on read-only props. |
| **Homework** | None assigned |
| **Homework Status** | — |
| **Next Action** | Teach 5.4 — Lists, Keys & Conditional Rendering (check Module 05 README for exact next topic) |
