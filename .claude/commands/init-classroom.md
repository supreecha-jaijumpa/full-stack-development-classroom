# Init Classroom

Set up the student profile by asking questions and filling in `me.md` and `CURRENT.md`.

## Usage

```
/init-classroom
```

## Behavior

Walk the student through a guided intake interview. Ask each group of questions conversationally — do **not** dump all questions at once. Wait for the answer before moving to the next group.

### Step 1 — Role & Goal
Ask:
1. "What is your current job/role and tech stack?" *(maps to Current Role, Strong in)*
2. "How many years have you been in this role?"
3. "What is your goal — what do you want to become, and by when?"
4. "Which language do you prefer for our sessions? (e.g. English, Thai, etc.)"

### Step 2 — Technical Gaps
Ask:
5. "What areas feel weakest to you right now? (e.g. backend, databases, cloud, system design)"
6. "What technologies have you never touched at all?"

### Step 3 — Self-Assessment
Tell the student: *"I'll ask you to rate yourself from 0 (zero knowledge) to 10 (expert) in each area. Be honest — these scores just help me calibrate the teaching pace."*

Ask scores one by one (or as a grouped list):
- Programming Basics (JS / logic)
- HTML / CSS
- Frontend (React)
- Backend (Node / APIs)
- Databases (SQL / modeling)
- DevOps / Deployment
- System Design / Architecture

### Step 4 — Learning Style
Ask:
7. "How do you learn best? (e.g. hands-on projects, reading, videos, exercises)"
8. "How many hours per week can you commit to this?"
9. "What real-world apps do you use daily? (e.g. GitHub, Spotify, Trello, Notion, Shopee — used for examples)"

### Step 5 — Motivation
Ask:
10. "In 2–3 sentences, why do you want to become a full-stack engineer?"
11. "Anything else I should know? (work constraints, learning blockers, etc.)"

### Step 6 — Write & Confirm
1. Fill in `me.md` with all collected answers.
2. Read `plan/roadmap.md` — use the entry point table to determine the student's starting point based on their self-assessment scores.
3. Initialize `CURRENT.md` with the starting phase/module and set **Next Action** accordingly.
4. Show a brief summary of the completed profile and ask: *"Does this look right? Want to change anything?"*
5. After confirmation, say: *"You're all set. Type /start to begin your first session."*

## Notes
- Never fill in placeholder values — only write answers the student actually gave.
- If a student skips a question, leave the `*(fill in)*` placeholder in `me.md`.
- Preferred language must be set before teaching begins — if skipped, default to English and note it.
- Keep the tone friendly and low-pressure; this is an intake, not a quiz.
