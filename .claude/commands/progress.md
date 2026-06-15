# Progress

Show a summary of completed modules, current status, and overall learning progress.

## Usage

```
/progress
```

## Behavior

1. Read `progress/log.md` — recent history (older sessions live in `progress/log-archive.md`; read it only if the student asks about old sessions)
2. Get current topic and phase from `CURRENT.md` (skip the read if already in context this session)
3. Display a progress table grouped by module
4. Show current streak from `progress/streaks.md`

## Output Format

```
## Learning Progress

| Module | Status | Sessions | Last Studied |
|--------|--------|----------|--------------|
| 01 Foundations | ✅ Done | 4 | 2026-05-20 |
| 02 Backend Fundamentals | 📖 In Progress | 2 | 2026-06-10 |
| 03 Database Fundamentals | 🔒 Locked | — | — |

**Current:** Module 02 — Topic: REST APIs
**Streak:** 5 days 🔥
**Next milestone:** Complete Module 02 to unlock Module 03
```

## Status Icons

🔒 Locked | 📖 In Progress | ✅ Done | ⭐ Mastered | 🔄 Needs Review
