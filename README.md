# Full-Stack Development Classroom

Your personal full-stack learning workspace — from absolute beginner to senior-level engineer, powered by an adaptive AI mentor.

---

## Quick Start

New here? Two steps to get going:

**Step 1 — Initialize your classroom**

Type `/init-classroom` in the chat. The mentor will walk you through setting up your profile, entry point, and first week plan — all in one guided flow.

**Step 2 — Start and end every session**

Type `/start` to begin each session. When you are done, type `/done` — the mentor will save your progress, update your streak, and prepare a summary for next time.

That is it — come back next session and type `/start` again to keep your momentum going.

---

## Commands

| Command            | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `/init-classroom`  | First-time setup — guided profile, entry point, week plan |
| `/start`           | Begin session — greet + last summary + what's next        |
| `/done`            | End session — update progress files and sign off          |
| `/teach`           | Teach current topic with real code + guiding questions    |
| `/teach [topic]`   | Teach a specific topic e.g. `/teach React hooks`          |
| `/next`            | Advance to next topic (checks unlock criteria first)      |
| `/exercise`        | Give today's exercise for current topic                   |
| `/check`           | Review and score what I just wrote/built above            |
| `/submit-hw`       | Submit homework — mentor reviews and scores it            |
| `/progress`        | Show module progress table and streak                     |
| `/commit`          | Save today's session to git                               |

---

## Folder Structure

```
full-stack-development/
├── README.md               ← You are here
├── CLAUDE.md               ← Mentor rules (do not edit)
├── me.md                   ← Your profile — fill this in first!
├── CURRENT.md              ← Session snapshot (auto-updated by mentor)
├── corrections.md          ← Misconceptions the mentor has corrected
│
├── plan/
│   ├── roadmap.md          ← Full learning path with your entry point
│   ├── roadmap-phase1/2/3.md ← Detailed phase breakdowns
│   └── this-week.md        ← Your plan for this week
│
├── progress/
│   ├── log.md              ← Session-by-session history
│   ├── streaks.md          ← Streak tracker + milestone badges
│   └── log-archive.md      ← Older sessions (archived here)
│
├── notes/
│   └── journal.md          ← Your post-session reflections
│
├── modules/                ← Learning content by topic
│   ├── 01-web-foundations/          ← Phase 1 — how the web works, Git, dev setup
│   ├── 02-html-css/                 ← Phase 1 — semantic HTML, CSS, layout, a11y
│   ├── 03-javascript-fundamentals/  ← Phase 1 — JS, DOM, events, async/fetch
│   ├── 04-modern-js-typescript/     ← Phase 2 — ES2015+, TypeScript, tooling
│   ├── 05-react-fundamentals/       ← Phase 2 — components, hooks, state, routing
│   ├── 06-frontend-data-state-styling/ ← Phase 2 — data fetching, forms, styling
│   ├── 07-frontend-testing-quality/ ← Phase 2 — unit/component/E2E tests, perf
│   ├── 08-backend-node/             ← Phase 3 — Node, Express, REST APIs
│   ├── 09-databases/                ← Phase 3 — SQL, Postgres, Prisma, modeling
│   ├── 10-auth-security/            ← Phase 3 — auth, JWT/sessions, OWASP
│   ├── 11-api-design-realtime/      ← Phase 3 — REST/GraphQL, WebSockets, jobs
│   ├── 12-backend-testing/          ← Phase 3 — unit/integration testing
│   ├── 13-fullstack-integration/    ← Phase 4 — FE+BE, e2e types, Next.js
│   ├── 14-devops-deployment/        ← Phase 4 — Docker, CI/CD, cloud, monitoring
│   ├── 15-performance-scalability/  ← Phase 4 — caching, CDN, profiling, scaling
│   ├── 16-system-design/            ← Phase 5 — architecture & scaling patterns
│   ├── 17-senior-engineering-practices/ ← Phase 5 — reviews, design docs, incidents
│   └── 18-capstone/                 ← Phase 5 — production-grade full-stack build
│
├── exercises/              ← Practice exercises (daily + weekly)
├── assessments/            ← Quizzes and design challenges
├── projects/               ← Mini projects and capstone
└── lectures/               ← Re-readable knowledge notes (built after sessions)
```

---

## Learning Path

```
Phase 1 → Foundations: the web, HTML/CSS, JavaScript (start here if new)
Phase 2 → Frontend: TypeScript, React, data/state, testing
Phase 3 → Backend: Node/Express, databases, auth, APIs, testing
Phase 4 → Full-Stack & DevOps: integration, Docker/CI-CD, performance
Phase 5 → Senior: system design, engineering practices, capstone
```

See [plan/roadmap.md](plan/roadmap.md) for the full plan, your adaptive entry point, and what you can skip based on your background.

---

## Tips

- Study 1–2 hours per session, 3–5 sessions per week
- Always start with `/start` and end with `/done`
- Full-stack is learned by **building** — type the code, run it, break it, fix it
- Every module has an exercise — do it before moving on
- Don't skip the journal — 5 bullet points after each session is enough
- If something is confusing, just ask in chat in your own language
- The mentor teaches in your preferred language (set in `me.md`)
