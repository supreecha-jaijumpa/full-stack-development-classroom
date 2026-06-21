# Session Log
> Last Updated: 2026-06-21
> Total Sessions: 12
> Current Streak: 1 day

---

## Current Status

| Field | Value |
|-------|-------|
| **Current Module** | Module 02 — HTML & CSS |
| **Current Phase** | Phase 1 — Foundations |
| **Overall Progress** | Module 01 complete (6/6) · Module 02 in progress (5/6) |
| **Next Topic** | 2.6 — Build a Responsive Landing Page |

---

## Phase 1: Foundations

| Topic | Status | Date | Notes |
|-------|--------|------|-------|
| How the Web Works | ✅ | 2026-06-16 | Full lifecycle, DevTools exercise done |
| HTTP Fundamentals | ✅ | 2026-06-16 | Methods/idempotency, status codes, headers, caching bug (public vs private), statelessness |
| Client, Server & the Browser | ✅ | 2026-06-17 | Three placement axes, browser runtime, SSG/SSR/CSR decision tree, state placement |
| Dev Environment Setup | ✅ | 2026-06-17 | Node LTS vs Current, package.json deep dive, ESLint + Prettier baseline config |
| Command Line Basics | ✅ | 2026-06-17 | Exit codes, CI/CD usage, &&/\|\|, piping, redirection, Git Bash on Windows |
| Git & GitHub | ✅ | 2026-06-17 | 3-area mental model, Conventional Commits, branching strategies, branch protection + CI |

> Modules 02–18: 🔒 Locked — complete current phase first
> See `plan/roadmap.md` for the full plan

---

## Session History

| # | Date | Topic | Outcome | Notes |
|---|------|-------|---------|-------|
| 1 | 2026-06-16 | 1.1 — How the Web Works | ✅ Pass | DNS chain, TCP/TLS handshakes, CRP, SSR vs CSR via DevTools |
| 2 | 2026-06-16 | 1.2 — HTTP Fundamentals | ✅ Pass | Request/response shape, methods, status codes, headers, caching security bug, statelessness |
| 3 | 2026-06-17 | 1.3 — Client, Server & the Browser | ✅ Pass | Placement axes, browser runtime, SSG/SSR/CSR decision tree, state location, DevTools Console exercise |
| 4 | 2026-06-17 | 1.4 — Dev Environment Setup | ✅ Pass | Node LTS vs Current, fnm, package.json (type/engines/exports/scripts), ESLint + Prettier config, lint verification exercise |
| 5 | 2026-06-17 | 1.5 — Command Line Basics | ✅ Pass | Exit codes, CI/CD usage, && and \|\| branching, piping \|, redirection >, >>, 2>, 2>&1, Git Bash on Windows |
| 6 | 2026-06-17 | 1.6 — Git & GitHub | ✅ Pass | 3-area mental model, HEAD as pointer, Conventional Commits, Feature Branch vs Gitflow vs Trunk-Based, branch protection rules, clean commit history exercise |
| 7 | 2026-06-17 | 2.1 — Semantic HTML | ✅ Pass | Markup as a11y/SEO contract, document outline (algorithm never implemented), landmarks need names, article syndication test (comments nest), nav vs aside by intent, alt="" rules, time/address/figure semantics, blog-post markup exercise |
| 8 | 2026-06-17 | 2.2 — CSS Fundamentals (cascade) | ✅ Pass | Cascade as 4-step algorithm (origin/importance → layer → specificity → order); both `!important` inversions (origin + `@layer`); specificity is the 3rd question not the 1st; 6-declaration ranking exercise (full ranking correct) |
| 9 | 2026-06-18 | 2.2 — CSS Fundamentals (complete) | ✅ Pass | Specificity as `(A,B,C)` tuple; `:is()`/`:not()`/`:has()` take max arg specificity (not sum); `:where()` = zero specificity always; stacking contexts: z-index is local not global, `isolation: isolate` as clean trigger, accidental triggers (`transform`, `opacity`); custom-property architecture: three levels (global tokens → component API with fallbacks → context overrides); `@property` for typed/non-inheriting/animatable vars. Profile-card exercise passed. |
| 10 | 2026-06-19 | 2.3 — Layout: Flexbox & Grid | ✅ Pass | Flexbox = 1D / Grid = 2D; `fr` as fraction of available space after fixed tracks + gaps; `min-height: auto` default overrides flexible track constraints — `min-height: 0` fix; fixed tracks don't need fix; CSS selector scope collision. App shell exercise passed — `min-height: 0` on `.body` + `main`, Flexbox header, 3-col card grid with internal scroll. |
| 11 | 2026-06-19 | 2.4 — Responsive Design | ✅ Pass | Viewport meta tag; mobile-first as progressive enhancement; `auto-fit` + `minmax()` for breakpoint-free grids; `clamp()` for fluid sizing; sidebar `display: none` + grid track collapse on mobile. App shell made fully responsive — no horizontal scroll 320px–1440px. |
| 12 | 2026-06-21 | 2.5 — Accessibility Basics | ✅ Pass | Accessibility tree (role/name/state); name resolution order; form labels; keyboard navigation; `:focus-visible`; contrast ratios (4.5:1 / 3:1); `aria-label`, `aria-hidden`, `aria-describedby`, `role`. App shell a11y updated. |

---

## Exercise Log

| Date | Exercise | Module | Result |
|------|----------|--------|--------|
| 2026-06-16 | DevTools Network tab — GitHub request waterfall | 1.1 | ✅ Done |
| 2026-06-16 | `curl -i https://api.github.com/users/octocat` — read raw HTTP response | 1.2 | ✅ Done |
| 2026-06-17 | DevTools Console — `navigator.userAgent` and `window.location.href` on YouTube | 1.3 | ✅ Done |
| 2026-06-17 | ESLint lint verification — unused variable error, then fix and confirm silence = success | 1.4 | ✅ Done |
| 2026-06-17 | grep pipeline — `grep -r "HTTP" modules/ \| grep "1.1" \| wc -l` — explained each pipe stage | 1.5 | ✅ Done |
| 2026-06-17 | login-feature repo — 4-commit Conventional Commits history pushed to GitHub | 1.6 | ✅ Done |
| 2026-06-17 | Blog-post page semantic markup — landmarks, outline, figure/time/address, nested-article comments | 2.1 | ✅ Done |
| 2026-06-17 | Resolve the Cascade — rank 6 declarations across mixed `@layer`s + `!important` (F>C>E>A>D>B) | 2.2 | ✅ Done |
| 2026-06-18 | Profile card — custom properties (component API + `--card-shadow` hover mutation), `isolation: isolate`, `:is()`/`:where()`/`:not()` selectors | 2.2 | ✅ Done |
| 2026-06-19 | App shell — page shell Grid (60px + 1fr), Flexbox header, sidebar + main Grid, 3-col card grid with `min-height: 0` + `overflow-y: auto` internal scroll | 2.3 | ✅ Done |
| 2026-06-19 | App shell responsive — viewport meta tag, sidebar `display: none` + grid track collapse on mobile, `auto-fit minmax(200px, 1fr)` card grid, `clamp(0.9rem, 2vw, 1.1rem)` font-size | 2.4 | ✅ Done |
| 2026-06-21 | App shell a11y — `role="img"` + `aria-label` on avatar, `:focus-visible` focus ring, `aria-hidden` on emoji sidebar links, `aria-label` on nav link | 2.5 | ✅ Done |

---

## Homework Log

| Week | Homework | Status | Feedback |
|------|----------|--------|----------|

---

## Skills Gained

### Concepts Understood
- Full web request lifecycle (DNS → TCP → TLS → HTTP → CRP)
- HTTP request/response shape: method + path + version, headers, blank line, body
- HTTP methods and semantics: GET/POST/PUT/PATCH/DELETE, safe vs idempotent
- Status code families: 2xx, 3xx, 4xx, 5xx and key codes within each
- 401 vs 403: unauthenticated vs unauthorized (different UI responses)
- Key headers: Content-Type, Authorization, Cache-Control, Set-Cookie, Location
- Cache-Control: public vs private, max-age vs s-maxage (browser vs CDN)
- Security bug: `public` Cache-Control on user-specific endpoints leaks data via CDN
- HTTP statelessness: each request self-contained, enables horizontal scaling
- DNS resolution chain (browser cache → OS → router → ISP → authoritative nameserver)
- TCP 3-way handshake (SYN / SYN-ACK / ACK)
- TLS handshake and why HTTPS costs extra round-trips
- Critical Rendering Path (DOM → CSSOM → Render Tree → Layout → Paint → Composite)
- Why CSS is render-blocking and JS is parser-blocking
- SSR vs CSR: how to identify each from the HTML response
- Browser runtime: rendering engine (Blink), JS engine (V8), Web APIs — and what each owns
- `fetch` is a Web API, not JavaScript — browser and Node.js implement it separately
- Client/server placement: three axes — data location, trust boundary, separation of concerns
- Trust boundary: client validation = UX; server validation = security/integrity (can't skip)
- SSG / ISR / SSR / CSR decision tree — driven by SEO need and whether content is user-specific
- State placement: browser (ephemeral), server (shared/temporary), database (persistent/source of truth)
- TanStack Query = browser-side cache of server state
- `User-Agent` and `Referer` HTTP headers: how browser identity flows in every request
- Exit codes: 0 = success, any non-zero = failure; range 0–255; common codes (1=generic, 127=not found, 130=Ctrl+C)
- `$?` (Bash) and `$LASTEXITCODE` (PowerShell) capture the last exit code
- CI/CD uses exit codes — not output text — to determine pass/fail
- `process.exit(0/1)` in Node.js controls the exit code of a script
- `&&` and `||` in shell commands branch on exit code (not a boolean expression)
- Piping `|`: chains stdout → stdin between commands without touching disk
- Three I/O streams: stdin (0), stdout (1), stderr (2)
- Redirection: `>` overwrites stdout to file; `>>` appends; `2>` captures stderr; `2>&1` merges both
- Git 3-area model: working tree → staging area → commit history
- HEAD is a pointer to the current commit; branches are labels on commits
- Conventional Commits: `<type>(<scope>): <description>` — machine-readable, enables changelog/release automation
- Common commit types: feat, fix, refactor, chore, docs, test, perf
- Feature Branch Workflow: one branch per story, merge via PR — good for small teams
- Gitflow: main + develop + release branches — for versioned software releases (rarely right for web)
- Trunk-Based Development: short-lived branches or direct commits to main + feature flags — default for web products deploying continuously
- Trunk-Based requires: short PRs + feature flags + fast CI — strategy and infrastructure are a package deal
- Branch protection rules: enforce CI pass + reviewer approval before merge to main
- Commit history = documentation — future teammates and tools (semantic-release, changelogs) read it
- Semantic HTML as an API contract consumed by the accessibility tree, crawlers, and the next developer — element choice encodes meaning/intent, not appearance
- Document outline: headings alone must form a usable table of contents; the HTML5 sectioning outline algorithm was never implemented, so heading levels are managed manually (no level skipping)
- Landmarks (header/nav/main/aside/footer) map to ARIA roles; duplicate landmarks require aria-label/aria-labelledby to be distinguishable
- `<article>` syndication test: independently distributable content → comments are nested `<article>`s inside a post `<article>`
- `<nav>` vs `<aside>` decided by intent (site navigation vs related/complementary content), not by visual pattern
- `alt` rules: descriptive when image is the link's only content; `alt=""` when redundant (decorative); missing `alt` makes screen readers read the filename
- Text semantics: `<time datetime>` with timezone offset, `<address>` for authorship, `<figure>`/`<figcaption>`, `<figure>`+`<blockquote>`+`<cite>` for attributed quotes; `<a>` without `href` is not a link/focusable
- The cascade is a 4-step resolution algorithm: origin/importance → cascade layer → specificity → order of appearance; each step only runs if the prior didn't pick a winner
- Origin order: UA < user < author for normal declarations; `!important` inverts it (UA/user beat author) so users can override authors for accessibility
- Cascade layers (`@layer`): for normal declarations, unlayered > later layer > earlier layer; `!important` inverts it (earlier layer > later layer > unlayered)
- Both inversions are the same rule — `!important` reverses priority order at every cascade level (origins and layers alike)
- Specificity is the 3rd question, not the 1st: it only breaks ties within the same layer/importance — a weak unlayered selector beats a strong layered one for normal rules
- `@layer` solves the design-system-vs-overrides battle structurally (no specificity arms race / `!important` wars); the important+layer inversion deliberately protects the foundational layer
- Specificity is a three-column tuple `(A, B, C)`: A = ID count, B = class/attr/pseudo-class count, C = type/pseudo-element count; compare left-to-right, first column that differs decides the winner
- `:is()`, `:not()`, `:has()` take the specificity of their **most specific argument** (not a sum); `:where()` always contributes zero specificity — the "zero-cost" targeting tool
- Stacking contexts: z-index is local to its stacking context, not global — a child can never visually escape its parent context regardless of z-index value
- What triggers a stacking context: `position` + non-`auto` `z-index`, `opacity < 1`, `transform`, `filter`, `will-change`, `isolation: isolate`, `position: fixed/sticky`
- `isolation: isolate` is the clean explicit trigger — no side effects (no repaint promotion, no opacity change)
- Common accidental triggers: `transform` and `opacity` — adding a CSS animation can silently trap child z-index
- Custom-property architecture: three levels — global tokens (`:root`), component API vars (set on component root with fallbacks to tokens), context overrides (consumer sets vars from a parent)
- Mutating a custom property on `:hover` is better than overriding the property directly — consumers who override the var still get correct hover behavior
- `@property`: typed (`syntax`), non-inheriting (`inherits: false`), and animatable custom properties — required to transition or `@keyframes` a custom property
- Flexbox = 1D layout (one axis); Grid = 2D layout (rows and columns simultaneously) — the axis count is the deciding factor, not "flexible vs fixed"
- `fr` unit: fraction of available space after all fixed-size tracks and `gap` values are subtracted; `%` doesn't participate in gap arithmetic, `fr` does
- `min-height: auto` default on grid items: items resist shrinking below their content size, which overrides `fr` track constraints and causes overflow past `100vh`
- `min-height: 0` on a grid item: overrides `auto`, lets the track constraint win — required before `overflow-y: auto` can trigger internal scroll
- Fixed-size tracks (`px`, `rem`) enforce an absolute ceiling; `min-height: auto` cannot override them — only flexible tracks (`fr`, `auto`) are affected
- CSS selector scope: when the same element type appears in multiple layout contexts (e.g., two `<nav>` elements), rules must be scoped with a parent qualifier or distinct class to prevent unintended bleed
- Viewport meta tag: mobile browsers default to a fake 980px viewport — `width=device-width` makes them use the real pixel width; `initial-scale=1` prevents the browser from applying an initial zoom offset
- Mobile-first as progressive enhancement: base CSS is the simplest (mobile) state; `min-width` media queries add complexity as the viewport grows — the opposite of desktop-first (graceful degradation)
- `repeat(auto-fit, minmax(min, 1fr))`: creates as many columns as fit at the minimum width without going below it — no media queries needed; `auto-fit` collapses empty tracks so items stretch, `auto-fill` leaves ghost tracks
- `clamp(min, preferred, max)`: value scales with the viewport (via `vw`) between a floor and ceiling; applies to font-size, padding, gap, or any length property
- Hiding a sidebar on mobile requires both `display: none` on the element AND collapsing its grid track (`grid-template-columns: 1fr`) on the parent; a fixed track retains space even when its child is hidden
- The browser builds two parallel trees: the DOM tree and the Accessibility Tree — assistive tech consumes the latter, which exposes only role, name, and state
- Accessible name resolution order: `aria-labelledby` → `aria-label` → linked `<label>` → element text content → `alt` → `title`; `aria-label` replaces (not appends) the name
- `placeholder` is not a label — it disappears on input and is not reliably announced; every input needs a programmatically associated `<label>` or `aria-label`
- Native HTML is keyboard-focusable by default (`<a href>`, `<button>`, `<input>`, `<select>`); `<div onclick>` is an a11y bug — not in tab order, no keyboard events; fix with `<button>` or add `role="button" tabindex="0"` + keyboard handlers
- `tabindex="0"` adds an element to the natural tab order; `tabindex="-1"` makes it focusable via JS `.focus()` only
- `:focus-visible` fires only when focus arrived via keyboard — use it to show the focus ring to keyboard users without showing it on mouse clicks; `*:focus { outline: none }` globally is one of the most harmful a11y bugs in production
- Color contrast: 4.5:1 minimum for normal text; 3:1 for large text and UI components; never communicate information through color alone — pair with icon, text, or pattern; `aria-describedby` wires error messages into the input's accessible description
- The first rule of ARIA: don't use ARIA if native HTML can do it — `<nav>` beats `<div role="navigation">`, `<button>` beats `<div role="button">`
- `aria-hidden="true"` removes an element and its children from the accessibility tree; use on decorative emoji and icon fonts to prevent verbose screen-reader announcements

### Tools Practiced
- Chrome DevTools → Network tab (Timing breakdown: DNS, Initial connection, SSL, TTFB, Content Download)
- Chrome DevTools → Console tab (`navigator.userAgent`, `window.location.href`)
- ESLint CLI (`npx eslint <file>`) — interpreting exit code 0 (silence) vs error output
- `node --version`, `npm --version` — verifying installs
- Git Bash (`grep -r`, `wc -l`) — Unix command line on Windows
- `git log --oneline` — reading commit history as a narrative
- `git remote add origin` + `git push -u origin main` — connecting local repo to GitHub

### Things Built
- App shell page (2026-06-19) — full-viewport layout with Grid shell, Flexbox nav, sidebar, and scrollable card gallery

---

## Areas Needing Review
*(none yet)*

---

## Session Detail

## 2026-06-16
- Topic: 1.1 — How the Web Works
- Covered: DNS resolution chain, TCP 3-way handshake, TLS handshake, HTTP request/response cycle, Critical Rendering Path, SSR vs CSR identification via DevTools
- Outcome: Pass
- Next: 1.2 — HTTP in Depth (methods, status codes, headers, REST basics)

## 2026-06-17 (session 4)
- Topic: 1.4 — Dev Environment Setup
- Covered: Node Current vs LTS distinction; fnm for cross-project version management; package.json fields (type, engines, exports, scripts convention); ESLint + Prettier separation of concerns; baseline flat config (eslint.config.mjs + .prettierrc + .vscode/settings.json); lint verification exercise
- Outcome: Pass
- Next: 1.5 — Command Line Basics

## 2026-06-17 (session 5)
- Topic: 1.5 — Command Line Basics
- Covered: Exit codes (0=success, non-zero=failure); $? shell variable; CI/CD exit code usage (GitHub Actions); && and || as exit-code branching; process.exit() in Node.js; piping | (stdout→stdin without disk); three I/O streams (stdin/stdout/stderr); redirection >, >>, 2>, 2>&1; Git Bash as Unix shell on Windows; grep pipeline exercise
- Outcome: Pass
- Next: 1.6 — Git & GitHub

## 2026-06-17 (session 6)
- Topic: 1.6 — Git & GitHub
- Covered: 3-area Git model (working tree/staging/history); HEAD as a movable pointer; branches as labels on commits; Conventional Commits format and why commit messages are machine-readable; Feature Branch vs Gitflow vs Trunk-Based strategies; why Trunk-Based + Feature Flags is right for web products; how branch protection rules + CI enforce strategy at infrastructure level; clean commit history exercise (login-feature repo pushed to GitHub)
- Outcome: Pass
- Next: Module 02 — HTML & CSS (likely fast-track given 9/10 level)

## 2026-06-17 (session 7)
- Topic: 2.1 — Semantic HTML
- Covered: Markup as an API contract for the a11y tree/crawlers/next dev; document-outline model and that the HTML5 outline algorithm was never implemented (manual heading levels, no skipping); landmarks and the rule that duplicates need accessible names; the `<article>` syndication test → comments as nested articles; `<nav>` vs `<aside>` by intent not appearance; `alt=""` vs descriptive vs missing; `<time datetime>` with offset, `<address>`, `<figure>`/`<figcaption>`, `<figure>`+`<blockquote>`+`<cite>`; `<a>` needs `href` to be a link. Exercise: full blog-post page markup — passed after fixing a `<main>`-inside-`<header>` nesting bug and three completeness gaps (footer, pull-quote attribution, avatar `alt`).
- Outcome: Pass
- Next: 2.2 — CSS Fundamentals (skip box-model basics; cascade/specificity as an algorithm, stacking contexts, custom-property architecture)

## 2026-06-17 (session 8)
- Topic: 2.2 — CSS Fundamentals (cascade portion)
- Covered: The cascade as a 4-step resolution algorithm (origin/importance → cascade layer → specificity → order of appearance); both `!important` inversions — origin order (UA/user beat author) and `@layer` order (earliest layer wins, unlayered drops to lowest); the unifying insight that `!important` reverses priority at every level; specificity is the 3rd question not the 1st (weak unlayered selector beats strong layered one for normal rules); `@layer` as a structural fix for the design-system-vs-overrides battle. Exercise: ranked 6 declarations across mixed layers + `!important` (F>C>E>A>D>B) — full ranking correct; gap was narrating the steps, now closed.
- Outcome: Pass
- Next: Continue 2.2 — specificity as a tuple `(id, class, type)`, `:is()`/`:where()`/`:not()` effects on the count, stacking contexts (z-index hierarchy), custom-property architecture, then the profile-card hands-on

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

## 2026-06-21 (session 12)
- Topic: 2.5 — Accessibility Basics
- Covered: The accessibility tree (role/name/state as a parallel structure to the DOM); accessible name resolution order (aria-labelledby → aria-label → label → text content → alt → title); form labels — explicit `for/id`, wrapped, `aria-label`; why `placeholder` is not a label; keyboard navigation — native focusable elements, `tabindex="0"` for custom elements, `<div onclick>` as a keyboard a11y bug; `:focus-visible` vs `:focus` — preserving the focus ring for keyboard users only; color contrast — 4.5:1 for normal text, 3:1 for large text and UI components, `aria-describedby` for error messages; ARIA first rule (prefer native HTML); `aria-label`, `aria-hidden`, `aria-describedby`, `role`. App shell exercise: `role="img"` + `aria-label` on avatar, `:focus-visible` focus ring, `aria-hidden` on emoji sidebar links.
- Outcome: Pass
- Next: 2.6 — Build a Responsive Landing Page (Module 02 milestone)
