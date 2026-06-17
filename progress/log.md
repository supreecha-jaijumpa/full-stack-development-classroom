# Session Log
> Last Updated: 2026-06-17
> Total Sessions: 5
> Current Streak: 2 days

---

## Current Status

| Field | Value |
|-------|-------|
| **Current Module** | Module 01 — Web Foundations & Dev Setup |
| **Current Phase** | Phase 1 — Foundations |
| **Overall Progress** | 5/6 Module 01 topics complete |
| **Next Topic** | 1.6 — Git & GitHub |

---

## Phase 1: Foundations

| Topic | Status | Date | Notes |
|-------|--------|------|-------|
| How the Web Works | ✅ | 2026-06-16 | Full lifecycle, DevTools exercise done |
| HTTP Fundamentals | ✅ | 2026-06-16 | Methods/idempotency, status codes, headers, caching bug (public vs private), statelessness |
| Client, Server & the Browser | ✅ | 2026-06-17 | Three placement axes, browser runtime, SSG/SSR/CSR decision tree, state placement |
| Dev Environment Setup | ✅ | 2026-06-17 | Node LTS vs Current, package.json deep dive, ESLint + Prettier baseline config |
| Command Line Basics | ✅ | 2026-06-17 | Exit codes, CI/CD usage, &&/\|\|, piping, redirection, Git Bash on Windows |
| Git & GitHub | 🔒 | — | — |

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

---

## Exercise Log

| Date | Exercise | Module | Result |
|------|----------|--------|--------|
| 2026-06-16 | DevTools Network tab — GitHub request waterfall | 1.1 | ✅ Done |
| 2026-06-16 | `curl -i https://api.github.com/users/octocat` — read raw HTTP response | 1.2 | ✅ Done |
| 2026-06-17 | DevTools Console — `navigator.userAgent` and `window.location.href` on YouTube | 1.3 | ✅ Done |
| 2026-06-17 | ESLint lint verification — unused variable error, then fix and confirm silence = success | 1.4 | ✅ Done |
| 2026-06-17 | grep pipeline — `grep -r "HTTP" modules/ \| grep "1.1" \| wc -l` — explained each pipe stage | 1.5 | ✅ Done |

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

### Tools Practiced
- Chrome DevTools → Network tab (Timing breakdown: DNS, Initial connection, SSL, TTFB, Content Download)
- Chrome DevTools → Console tab (`navigator.userAgent`, `window.location.href`)
- ESLint CLI (`npx eslint <file>`) — interpreting exit code 0 (silence) vs error output
- `node --version`, `npm --version` — verifying installs
- Git Bash (`grep -r`, `wc -l`) — Unix command line on Windows

### Things Built
*(none yet)*

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
