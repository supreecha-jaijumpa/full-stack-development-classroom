# Start Session

Begin a learning session — greet the student, summarize last session, and confirm what's next.

## Usage

```
/start
```

## Behavior

1. Read `me.md` — student profile (level, language, background, goals)
2. Read `CURRENT.md` — fast snapshot of current topic and progress
3. Greet the student by name in their preferred language
4. Summarize the last session in 2 sentences
5. Show what's currently in progress and what comes next
6. Ask: continue current topic or start something new?

## Notes

- If no history exists yet, run the first-session flow: read `plan/roadmap.md` for the 5 self-assessment questions and entry point table, ask them, update `plan/roadmap.md` with the student's personalized entry point, initialize `CURRENT.md` with the starting point, then read `plan/roadmap-phase1.md` to set up Phase 1
- Teach in the language set in `me.md`
- Keep the greeting brief — get to learning quickly
