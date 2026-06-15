# Module 04: Modern JavaScript & TypeScript

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 2–3 weeks
> Phase: Phase 2 — Frontend Development
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Write idiomatic modern JavaScript using ES2015+ features (modules, destructuring, async/await)
- [ ] Add static types to JavaScript with TypeScript and understand why types matter
- [ ] Model real-world data with advanced TypeScript types (unions, generics, narrowing)
- [ ] Manage project dependencies and scripts confidently with npm
- [ ] Bundle and serve a frontend project with Vite, understanding the dev/build pipeline
- [ ] Enforce consistent, error-free code with ESLint and Prettier
- [ ] Convert an existing vanilla JS project to a typed, tooled TypeScript codebase

---

## Topics
- [4.1 Modern JavaScript (ES2015+)](4.1-modern-javascript-es2015.md) — the language features every React project assumes you know.
- [4.2 TypeScript Basics](4.2-typescript-basics.md) — annotate variables, functions, and objects with types.
- [4.3 TypeScript Types Deep Dive](4.3-typescript-types-deep-dive.md) — unions, generics, narrowing, and utility types.
- [4.4 npm & Package Management](4.4-npm-and-package-management.md) — install, version, and script your dependencies.
- [4.5 Bundlers & Tooling (Vite)](4.5-bundlers-and-tooling-vite.md) — the modern dev server and build tool.
- [4.6 Linting & Formatting (ESLint, Prettier)](4.6-linting-and-formatting.md) — automated code quality and style.

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 4.1: Refactor a callback-heavy script to use modules, destructuring, arrow functions, and async/await.
- [ ] Exercise 4.2: Add type annotations to a small JS utility library so it compiles with `tsc --strict`.
- [ ] Exercise 4.3: Model a "shopping cart" domain using union types and a generic `Result<T>` wrapper.
- [ ] Exercise 4.4: Initialize a `package.json`, add scripts, and pin dependency versions; explain the lockfile.
- [ ] Exercise 4.5: Scaffold a Vite + TypeScript project and configure a path alias and an env variable.
- [ ] Exercise 4.6: Wire up ESLint + Prettier so `npm run lint` and `npm run format` both pass on your code.

---

## Module Assessment
- Pass when: all exercises done + a converted TypeScript project repository reviewed by mentor
- Milestone: Convert your Phase 1 vanilla JS project to TypeScript with a Vite build, ESLint, and Prettier configured. Fix every type error properly (no `any` escape hatches).
- Unlocks: Module 05 — React Fundamentals
