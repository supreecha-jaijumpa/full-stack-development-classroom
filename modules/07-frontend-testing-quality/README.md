# Module 07: Frontend Testing & Quality

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 2–3 weeks
> Phase: Phase 2 — Frontend Development
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Explain the testing pyramid and choose the right test type for a given case
- [ ] Write fast, isolated unit tests with Vitest
- [ ] Test components the way users use them with React Testing Library
- [ ] Automate end-to-end user flows with Playwright
- [ ] Audit and fix accessibility issues with automated and manual checks
- [ ] Measure and improve Core Web Vitals and Lighthouse scores
- [ ] Define and document a coherent testing strategy for an app

---

## Topics
- [7.1 Testing Fundamentals](7.1-testing-fundamentals.md) — why and what to test, and the testing pyramid.
- [7.2 Unit Testing (Vitest)](7.2-unit-testing-vitest.md) — testing pure logic in isolation.
- [7.3 Component Testing (React Testing Library)](7.3-component-testing-rtl.md) — testing UI from the user's perspective.
- [7.4 E2E Testing (Playwright)](7.4-e2e-testing-playwright.md) — testing whole flows in a real browser.
- [7.5 Accessibility Testing](7.5-accessibility-testing.md) — making the app usable by everyone.
- [7.6 Web Performance & Core Web Vitals](7.6-web-performance-core-vitals.md) — measuring and improving real-world speed.

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 7.1: Write a test plan classifying which parts of your dashboard need unit, component, or E2E tests.
- [ ] Exercise 7.2: Unit-test a pure utility/reducer with Vitest, covering edge cases.
- [ ] Exercise 7.3: Component-test a form with RTL, asserting on roles, labels, and user events.
- [ ] Exercise 7.4: Write a Playwright test for one critical user flow (e.g. browse → add to cart → checkout).
- [ ] Exercise 7.5: Run an axe accessibility audit and fix the reported issues.
- [ ] Exercise 7.6: Run Lighthouse, record Core Web Vitals, and make one measurable improvement.

---

## Module Assessment
- Pass when: all exercises done + a tested, audited dashboard with a documented test strategy reviewed by mentor
- Milestone: Take your Module 06 dashboard to production quality: unit tests for logic, component tests for key UI, one E2E flow with Playwright, a passing accessibility audit, and a Lighthouse performance pass. Document your testing strategy.
- Unlocks: Module 08 — Backend with Node.js (Phase 3)
