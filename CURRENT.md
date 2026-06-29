# Current Session Snapshot
> Updated by mentor after every session. Read this at session start instead of `progress/log.md` + `plan/roadmap.md`.

| Field | Value |
|-------|-------|
| **Profile** | Senior frontend dev (6 yrs, React/Next) → goal: Software Architect |
| **Current Phase** | Phase 1 — Foundations |
| **Current Module** | Module 05 — React Fundamentals |
| **Status** | Module 02 complete ✅ (6/6); Module 03 complete ✅ (8/8); Module 04 complete ✅ (6/6); Module 05: 5.1 ✅, 5.2 ✅, 5.3 ✅, 5.4 ✅ |
| **Week Goal** | Work through Module 05 — React Fundamentals |
| **Last Session Date** | 2026-06-29 |
| **Last Session Summary** | Completed 5.4 — Hooks: useState & useEffect (architect lens; `useState` already fluent, so ~all session on `useEffect`). One reframe carried the whole topic: **`useEffect` is a synchronization primitive, not a lifecycle hook** — it keeps something *outside* React's world (network, `document.title`, a subscription, a timer) in sync with state, run after the DOM commits (`externalSystem = f(state)`). That reframe answers three questions at once: (1) deps = a *declaration of what the synced output depends on*, not a trigger list — lying with `[]` when the effect reads `trackId` breaks the invariant `externalSystem === f(state)` (stale lyrics); (2) cleanup = *undo the previous sync before the next*, unmount is just the final sync to nothing; (3) double-run under StrictMode = a smoke test that the effect is a true sync. Real-world: Spotify "now playing" track change re-syncs tab title / OS media-session / lyrics WebSocket / `<audio> src`, each its own effect keyed on `currentTrack`. No formal exercise this session (student opted to skip). Guiding-question drill on the fast `A→B` fetch race: student nailed the core race ("A resolves after B") but got the `cancelled`-flag comparison backwards — corrected that a boolean flag *does* fix the visual bug (cleanup sets `cancelled=true`, guards the stale `setLyrics`); `AbortController` is strictly better because it *tears down the in-flight request* (bandwidth, ~6-conn-per-host cap, server work) rather than just ignoring the result — "flag makes it invisible, abort makes it not happen." Articulation: answers came as clause-fragments again; re-modeled the 3-beat (claim → mechanism → payoff) shape on the flag-vs-abort point. |
| **Homework** | None assigned |
| **Homework Status** | — |
| **Next Action** | Teach 5.5 — Lists & Conditional Rendering (next topic in Module 05 README) |
