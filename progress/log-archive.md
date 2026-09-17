# Session Log — Archive

> Old session entries are moved here from `progress/log.md` once there are more than 20 sessions.
> This file is for your personal reference only. The mentor does NOT read this automatically.

---

## 2026-06-26 (session 25)
- Topic: 4.4 — npm & Package Management
- Covered: `dependencies` vs `devDependencies` — nuance that in Vite/React SPAs the distinction is convention only (Vite bundles both regardless); semver ranges — `^` allows minor + patch but never major, `~` allows patch only, exact pin locks to one version; package-lock.json should always be committed in apps (not libraries) — ensures reproducible installs across developers and CI; corrected common misconception about gitignoring the lockfile; `npm ci` vs `npm install` — `npm ci` reads lockfile only, fails on mismatch, use in CI pipelines; `npx` for running binaries without global install; `npm audit` / `npm audit fix` / `npm audit fix --force` for vulnerability scanning; exercise: initialized npm project, installed dayjs + prettier, created dev/format/check-format scripts, correctly identified node_modules as the only thing to gitignore.
- Outcome: Pass
- Next: 4.5 — Bundlers & Tooling (Vite)


## 2026-06-24 (session 22)
- Topic: 4.1 — Modern JavaScript (ES2015+)
- Covered: Block scoping — `var` hoisting vs `let`/`const` Temporal Dead Zone; TDZ as a loud failure that surfaces bugs `var`'s silent `undefined` would hide; `const` locks the binding not the object value. `this` in regular functions is call-site determined — `setTimeout` callback loses object context; arrow functions have no own `this` and inherit it lexically from the enclosing scope at definition time. Tree-shaking — bundler statically analyzes named imports at build time to eliminate unused exports; default exports ship an opaque object that blocks static analysis (`lodash` vs `lodash-es` as the concrete example). Exercise: rewrote a `.then()` callback-style GitHub user fetch into 2-file module structure (api.mjs + main.mjs) using `async/await`, destructuring, template literals, named exports; caught and fixed: (1) `err` variable name mismatch in `catch (error)` block, (2) missing `response.ok` check, (3) debug `console.log` left in. Final review added: error-swallowing antipattern — `catch` that logs and returns `undefined` implicitly causes the caller to crash on destructuring with a confusing TypeError; fix is to re-throw or handle at the call site.
- Outcome: Pass
- Next: 4.2 — TypeScript Basics

## 2026-06-23 (session 21)
- Topic: 3.8 — Build an Interactive App (Module 03 capstone)
- Covered: Solo capstone build — GitHub Repo Explorer. Architecture: api.js (fetch + error handling), ui.js (renderCards, showLoading, showError, populateLanguageDropdown), filters.js (pure filterRepos function), main.js (state + event wiring). In-memory filtering: allRepos fetched once, searchTerm and selectedLanguage variables updated on each event, single applyFilters() function called by both handlers. Deployment to GitHub Pages. Code review findings: correct module split, pure filterRepos function, response.ok check, toLocaleString() for numbers, nullish coalescing on description — clean. Issue flagged: repo.description injected directly into innerHTML (XSS risk); fix is textContent or DOMPurify for external data. Module 03 complete.
- Outcome: Pass — live URL: https://supreecha-jaijumpa.github.io/github-repo-explorer/
- Next: Module 04 — Modern JS & TypeScript, starting with 4.1 — Modern JavaScript (ES2015+)

## 2026-06-23 (session 20)
- Topic: 3.7 — ES Modules
- Covered: Three import forms — named (`{ foo }`), default (no braces, any local name), namespace (`* as Foo`); corrected misconception that `import React from 'react'` imports "everything" (it's a default import of one export object, not a namespace import). Named vs default exports — many named allowed, only one default per file. Module paths — bare name resolves to node_modules, `./` resolves to a relative file on disk. Module scope — each file has its own scope, nothing leaks to `window`. Singleton rule — a module runs once regardless of how many importers; all share the same instance. Vite's approach — native ES modules served directly to the browser in dev, bundled into optimized chunks in prod. Exercise: refactored single-file script into `data.js` (users array + getTopUser), `ui.js` (renderUser), and `main.js` (entry point with no exports) — correct on first attempt.
- Outcome: Pass
- Next: 3.8 — Build an Interactive App (Module 03 capstone)

## 2026-06-23 (session 19)
- Topic: 3.6 — Async, Promises & fetch
- Covered: Single-threaded JS — blocking I/O would freeze the browser UI; the event loop delegates waiting to runtime I/O threads and calls back when done. Callbacks as the original async mechanism; callback hell as the sequential-steps problem. Promise states (pending/fulfilled/rejected); `.then`/`.catch`/`.finally` chaining; one `.catch` handles any failure in the chain. `async/await` as syntax sugar over Promises — `async` functions always return a Promise; `await` pauses the function without blocking the thread. `fetch` two-step: `await fetch(url)` gives Response headers, `await response.json()` parses body; `response.ok` check required because `fetch` does not throw on 4xx/5xx. `Promise.all` for parallel independent requests — cuts wall-clock time to the slowest request. Built a GitHub user summary: parallel user + repos fetch via `Promise.all`, `response.ok` guards on both, top-3 repos sorted by `stargazers_count`, `main().catch()` error handler.
- Outcome: Pass
- Next: 3.7 — ES Modules

## 2026-06-23 (session 18)
- Topic: 3.5 — Events
- Covered: `addEventListener(type, handler)` / `removeEventListener` (requires exact same function reference); Event object properties — `target` (element that triggered) vs `currentTarget` (element with the listener); common event types (click, input, submit, keydown). Event bubbling — events propagate up through all DOM ancestors; `stopPropagation()` halts bubbling; `preventDefault()` blocks browser default actions (form submit, link navigation) — the two are independent. Event delegation: one listener on a parent, `event.target.closest(selector)` to identify which child triggered it — efficient and handles dynamically added elements. Connected to React: React attaches one listener per event type at `#root` and dispatches to the right component via bubbling.
- Outcome: Pass
- Next: 3.6 — Async, Promises & fetch

## 2026-06-23 (session 17)
- Topic: 3.4 — DOM Manipulation
- Covered: DOM as a tree of node objects built from HTML; `document` as root entry point. `querySelector` (first match or null) vs `querySelectorAll` (NodeList — not an array, spread to use `.map`). Reading/writing `textContent` (safe) vs `innerHTML` (XSS risk with user input); `getAttribute`/`setAttribute`. `classList.add/remove/toggle/contains`. `createElement`/`appendChild`/`prepend`/`remove`. `DocumentFragment` as an in-memory container — appends inside it cost nothing, one `appendChild(fragment)` flushes to DOM in one write. Why minimizing DOM writes matters (reflow/repaint cost); `innerHTML +=` in a loop as the canonical bad pattern. React's virtual DOM as a structural solution: diffs old/new virtual tree, patches minimum real DOM changes. The `key` prop as a stable node identity for the differ — same role as `data-id` in vanilla diffing; index-as-key breaks reordering. Built a to-do list: `tasks` array as source of truth, `render()` rebuilds from array, remove via `splice(index, 1)` + re-render. Discussed ID-based diffing as the manual equivalent of React's reconciliation.
- Outcome: Pass
- Next: 3.5 — Events

## 2026-06-23 (session 16)
- Topic: 3.3 — Arrays & Objects
- Covered: Mutating vs non-mutating distinction — mutating methods change the original array in place (push/pop/splice/sort/reverse); non-mutating return new values (map/filter/reduce/find); React's re-render check compares object references, not contents — mutating state and returning the same reference skips re-render. Chained filter + map on a GitHub repos dataset (filter archived + language, map to label string). reduce for frequency counting (language count per repo) using `(acc[key] || 0) + 1` to guard the falsy-zero trap; reduce for object reshaping (array-to-lookup by id). Object spread — last property wins on key conflict; standard React state update pattern. Array spread — combine and insert items. Destructuring — already used daily in React, learned the term. `Object.entries` returns `[[key, value], ...]` tuples (not `{key, value}` objects); prefer over `for...in` to avoid inherited prototype properties. `[...arr].sort(...)` habit — sort mutates in place; always spread first when sorting state directly.
- Outcome: Pass
- Next: 3.4 — DOM Manipulation

## 2026-06-23 (session 15)
- Topic: 3.2 — Functions & Scope
- Covered: Scope chain — global, function, and block scope; `var` is function-scoped and leaks out of `if`/`for` blocks, `let`/`const` are block-scoped. Closure as a function retaining a live reference to its outer scope's binding (not a snapshot of the value); two factory-function calls create two independent scopes — same mechanism as React's per-component `useState`. `this` in regular functions is call-site determined (bare call loses object context); arrow functions have no own `this`, they inherit it lexically from the enclosing scope. Exercise: built `makeCounter(start = 0)` returning `{increment, decrement, value}` — caught reserved-keyword bug (`default` cannot be used as a parameter name).
- Outcome: Pass
- Next: 3.3 — Arrays & Array Methods

## 2026-06-22 (session 14)
- Topic: 3.1 — Variables, Types & Operators
- Covered: Calibration via live coercion predictions. `==` vs `===` algorithm — `==` runs type coercion steps (e.g., `[] == false` chain: `false→0`, `[]→""`, `""→0`, `0==0→true`). `null` arithmetic (coerces to 0, so `null + 1 = 1`) vs `null == 0` (false — spec carve-out: null only equals null/undefined). `null >= 0` is true (numeric path: `0 >= 0`) — the famous spec inconsistency. `+` operator overloaded for concatenation when either operand is a string; `-`/`*`/`/` always coerce to numbers. Six falsy values. `||` vs `??`: falsy check vs null/undefined check.
- Outcome: Pass
- Next: 3.2 — Functions & Scope

## 2026-06-22 (session 13)
- Topic: 2.6 — Build a Responsive Landing Page (Module 02 milestone)
- Covered: Code review of submitted Streamify landing page — semantic landmark structure, accessible hamburger nav (`aria-expanded` + JS toggle), `role="list"` on unstyled `<ul>`, `aria-labelledby` on sections, `blockquote`/`footer` for testimonials. CSS: fluid `clamp()` type scale (`--step-0` through `--step-4`), CSS custom property design system (global tokens → component API → context overrides), mobile-first breakpoints, `scroll-padding-top` for fixed nav offset, `width: max-content` + `overflow-x: auto` for horizontal scroll track, horizontal-scroll-to-grid pattern at 1024px, `@keyframes wave-bounce` with `--delay` CSS var for staggered animation, `prefers-reduced-motion` coverage. Issues found and fixed by student: `role="listitem"` on `<a>` (replaced link semantics — fixed to `ul/li/a`), `!important` on desktop nav (inverted media query logic), unused `player-card__album` wrapper div. Review questions passed: `aria-labelledby` vs `aria-label`, flex nowrap + overflow-x scroll mechanism, `clamp()` three arguments. Reflection: admitted overestimating HTML/CSS at 9/10 — key fundamentals (a11y, semantic HTML, CSS cascade) were untouched despite 6 years of experience.
- Outcome: Pass — live URL confirmed: https://supreecha-jaijumpa.github.io/spotify-landing/
- Next: Module 03 — JavaScript Fundamentals, starting with 3.1 — Variables, Types & Operators

## 2026-06-21 (session 12)
- Topic: 2.5 — Accessibility Basics
- Covered: The accessibility tree (role/name/state as a parallel structure to the DOM); accessible name resolution order (aria-labelledby → aria-label → label → text content → alt → title); form labels — explicit `for/id`, wrapped, `aria-label`; why `placeholder` is not a label; keyboard navigation — native focusable elements, `tabindex="0"` for custom elements, `<div onclick>` as a keyboard a11y bug; `:focus-visible` vs `:focus` — preserving the focus ring for keyboard users only; color contrast — 4.5:1 for normal text, 3:1 for large text and UI components, `aria-describedby` for error messages; ARIA first rule (prefer native HTML); `aria-label`, `aria-hidden`, `aria-describedby`, `role`. App shell exercise: `role="img"` + `aria-label` on avatar, `:focus-visible` focus ring, `aria-hidden` on emoji sidebar links.
- Outcome: Pass
- Next: 2.6 — Build a Responsive Landing Page (Module 02 milestone)

## 2026-06-16
- Topic: 1.1 — How the Web Works
- Covered: DNS resolution chain, TCP 3-way handshake, TLS handshake, HTTP request/response cycle, Critical Rendering Path, SSR vs CSR identification via DevTools
- Outcome: Pass
- Next: 1.2 — HTTP in Depth (methods, status codes, headers, REST basics)

## 2026-06-17 (session 8)
- Topic: 2.2 — CSS Fundamentals (cascade portion)
- Covered: The cascade as a 4-step resolution algorithm (origin/importance → cascade layer → specificity → order of appearance); both `!important` inversions — origin order (UA/user beat author) and `@layer` order (earliest layer wins, unlayered drops to lowest); the unifying insight that `!important` reverses priority at every level; specificity is the 3rd question not the 1st (weak unlayered selector beats strong layered one for normal rules); `@layer` as a structural fix for the design-system-vs-overrides battle. Exercise: ranked 6 declarations across mixed layers + `!important` (F>C>E>A>D>B) — full ranking correct; gap was narrating the steps, now closed.
- Outcome: Pass
- Next: Continue 2.2 — specificity as a tuple `(id, class, type)`, `:is()`/`:where()`/`:not()` effects on the count, stacking contexts (z-index hierarchy), custom-property architecture, then the profile-card hands-on

## 2026-06-17 (session 4)
- Topic: 1.4 — Dev Environment Setup
- Covered: Node Current vs LTS distinction; fnm for cross-project version management; package.json fields (type, engines, exports, scripts convention); ESLint + Prettier separation of concerns; baseline flat config (eslint.config.mjs + .prettierrc + .vscode/settings.json); lint verification exercise
- Outcome: Pass
- Next: 1.5 — Command Line Basics

## 2026-06-17 (session 6)
- Topic: 1.6 — Git & GitHub
- Covered: 3-area Git model (working tree/staging/history); HEAD as a movable pointer; branches as labels on commits; Conventional Commits format and why commit messages are machine-readable; Feature Branch vs Gitflow vs Trunk-Based strategies; why Trunk-Based + Feature Flags is right for web products; how branch protection rules + CI enforce strategy at infrastructure level; clean commit history exercise (login-feature repo pushed to GitHub)
- Outcome: Pass
- Next: Module 02 — HTML & CSS (likely fast-track given 9/10 level)

## 2026-06-17 (session 5)
- Topic: 1.5 — Command Line Basics
- Covered: Exit codes (0=success, non-zero=failure); $? shell variable; CI/CD exit code usage (GitHub Actions); && and || as exit-code branching; process.exit() in Node.js; piping | (stdout→stdin without disk); three I/O streams (stdin/stdout/stderr); redirection >, >>, 2>, 2>&1; Git Bash as Unix shell on Windows; grep pipeline exercise
- Outcome: Pass
- Next: 1.6 — Git & GitHub

## 2026-06-17 (session 7)
- Topic: 2.1 — Semantic HTML
- Covered: Markup as an API contract for the a11y tree/crawlers/next dev; document-outline model and that the HTML5 outline algorithm was never implemented (manual heading levels, no skipping); landmarks and the rule that duplicates need accessible names; the `<article>` syndication test → comments as nested articles; `<nav>` vs `<aside>` by intent not appearance; `alt=""` vs descriptive vs missing; `<time datetime>` with offset, `<address>`, `<figure>`/`<figcaption>`, `<figure>`+`<blockquote>`+`<cite>`; `<a>` needs `href` to be a link. Exercise: full blog-post page markup — passed after fixing a `<main>`-inside-`<header>` nesting bug and three completeness gaps (footer, pull-quote attribution, avatar `alt`).
- Outcome: Pass
- Next: 2.2 — CSS Fundamentals (skip box-model basics; cascade/specificity as an algorithm, stacking contexts, custom-property architecture)

## 2026-06-18 (session 9)
- Topic: 2.2 — CSS Fundamentals (complete)
- Covered: Specificity as `(A,B,C)` tuple — first column that differs decides, never arithmetic; `:is()`/`:not()`/`:has()` take the max argument specificity (not a sum — common misconception corrected); `:where()` = always zero, the zero-cost targeting tool. Stacking contexts — z-index is local not global (Photoshop layer groups mental model); full list of triggers; `isolation: isolate` as the clean explicit trigger; accidental triggers (`transform`, `opacity`) as the common z-index bug root cause; DevTools Layers panel for diagnosis. Custom-property architecture — three levels (global tokens → component API with fallbacks → context overrides); hover-via-variable mutation vs direct property override; `@property` for typed/non-inheriting/animatable vars. Profile-card exercise: passed — `isolation: isolate`, `--card-shadow` component API, `:is()`/`:where()`/`:not()` selectors all correctly applied.
- Outcome: Pass
- Next: 2.3 — Layout: Flexbox & Grid

## 2026-06-19 (session 11)
- Topic: 2.4 — Responsive Design
- Covered: Viewport meta tag — why mobile browsers simulate 980px by default and what `width=device-width, initial-scale=1` overrides; mobile-first as progressive enhancement (base = simple, add via `min-width`); `auto-fit` vs `auto-fill` with `minmax()` for breakpoint-free responsive grids; `clamp(min, preferred, max)` for fluid font-size/spacing; sidebar `display: none` + collapsing the grid track on mobile with media-query restore at 768px
- Outcome: Pass
- Next: 2.5 — Accessibility Basics

## 2026-06-19 (session 10)
- Topic: 2.3 — Layout: Flexbox & Grid
- Covered: Flexbox vs Grid as 1D vs 2D — the axis count is the deciding factor, not "flexible vs fixed"; `fr` as fraction of available space after fixed-size tracks and gaps are subtracted (vs `%` which doesn't account for gap); `min-height: auto` default on grid items — overrides flexible track constraints, causing content to blow past `100vh`; `min-height: 0` as the fix; fixed pixel tracks don't need it because they're absolute constraints regardless of item content; CSS selector scope — two selectors for the same element type in different contexts must be qualified or named to avoid unintended bleed. App shell exercise: Grid page shell (60px header / 1fr body), Flexbox header with `space-between`, sidebar + main two-column Grid, 3-column card grid, `min-height: 0` correctly applied on `.body` and `main`, `overflow-y: auto` for internal scroll.
- Outcome: Pass
- Next: 2.4 — Responsive Design
