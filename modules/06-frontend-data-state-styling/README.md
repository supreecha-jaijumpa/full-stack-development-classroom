# Module 06: Frontend Data, State & Styling

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 3–4 weeks
> Phase: Phase 2 — Frontend Development
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Fetch, cache, and synchronize server data with TanStack Query
- [ ] Choose and apply an appropriate global state solution without prop-drilling
- [ ] Build accessible, validated forms with good UX
- [ ] Style applications cohesively with Tailwind (and understand CSS-in-JS trade-offs)
- [ ] Design reusable, composable components with clean APIs
- [ ] Extract shared logic into custom hooks
- [ ] Diagnose and fix common frontend performance problems

---

## Topics
- [6.1 Data Fetching (TanStack Query)](6.1-data-fetching-tanstack-query.md) — server state, caching, and async UI states.
- [6.2 Global State Management](6.2-global-state-management.md) — sharing client state across the tree.
- [6.3 Forms & Validation](6.3-forms-and-validation.md) — robust, accessible form handling.
- [6.4 Styling Systems (Tailwind / CSS-in-JS)](6.4-styling-systems.md) — approaches to styling at scale.
- [6.5 Component Design & Reusability](6.5-component-design-reusability.md) — designing component APIs.
- [6.6 Custom Hooks](6.6-custom-hooks.md) — packaging reusable behavior.
- [6.7 Frontend Performance (memo, lazy, code-split)](6.7-frontend-performance.md) — keeping the UI fast.

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 6.1: Fetch a paginated list from a real API with TanStack Query, handling loading/error/empty states.
- [ ] Exercise 6.2: Replace prop-drilling with Context (or a store) for a theme or auth value.
- [ ] Exercise 6.3: Build a validated form with inline errors and a disabled-until-valid submit button.
- [ ] Exercise 6.4: Style a dashboard layout responsively with Tailwind utility classes.
- [ ] Exercise 6.5: Refactor a one-off component into a reusable, prop-driven design.
- [ ] Exercise 6.6: Extract data-fetching and form logic into two reusable custom hooks.
- [ ] Exercise 6.7: Code-split a route with `React.lazy` and memoize an expensive list render.

---

## Module Assessment
- Pass when: all exercises done + a working data-driven dashboard reviewed by mentor
- Milestone: Build a data-driven dashboard that fetches from a real API, handles loading/error/empty states, has a validated form, and is styled cohesively. No prop-drilling; extract at least two custom hooks.
- Unlocks: Module 07 — Frontend Testing & Quality
