# Session Log — Archive

> Old session entries are moved here from `progress/log.md` once there are more than 20 sessions.
> This file is for your personal reference only. The mentor does NOT read this automatically.

---

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
