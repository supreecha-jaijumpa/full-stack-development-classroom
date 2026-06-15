# End Session

Close the session — summarize what was covered, update all progress files, and save a lecture note for review.

## Usage

```
/done
```

## Behavior

1. Read `CURRENT.md` to confirm what was worked on this session
2. Write a 3–5 bullet summary of what was covered
3. Update `CURRENT.md` — set current topic, phase, and next action
4. Append a session entry to `progress/log.md` with: date, topic, outcome, and next step
5. If `progress/log.md` has more than 15 session entries, move the oldest entries (beyond the newest 15) to `progress/log-archive.md`, keeping the summary tables at the top of `log.md` up to date
6. Update `progress/streaks.md` if a streak milestone was reached
7. Write or extend the lecture file for this session's topic (see **Lecture File** below), and update the index table in `lectures/README.md`
8. Sign off with an encouraging one-liner in the student's preferred language, and suggest starting the next session in a fresh conversation (keeps context small)

## Lecture File

Path mirrors the module structure: `lectures/NN-module-name/N.M-topic-slug.md` (same numbering as `modules/`). Create the module subfolder if it doesn't exist. If the topic was taught before, **extend the existing file** (merge new concepts in, update "Last updated") — never create a second file for the same topic.

Write in the student's preferred language (from `me.md`).

### Template

```markdown
# N.M — <Topic Name>

> Module: NN — <Module Name> · First taught: YYYY-MM-DD · Last updated: YYYY-MM-DD

## TL;DR
<3–4 sentence summary of the whole topic>

## Key Concepts
### <Concept 1>
<clear explanation, as taught in session>

## Examples
<real-world examples used in session (e.g., LINE, Netflix scenarios), reconstructed so they make sense standalone>

## Diagrams
<mermaid/ASCII diagrams drawn in session, if any — omit section if none>

## Common Pitfalls
<phrased generically: "A common mistake is…" — never reference the student's own errors>

## Quick Recall
<3–5 self-test questions (no answers, or answers collapsed at the bottom)>
```

### Hard Rules — knowledge only

- **No personal data**: no student name, scores, pass/fail outcomes, struggles, or performance comments. That belongs in `progress/`, not here.
- Content must be **standalone re-readable**: someone opening the file months later (or another student) should understand it without session context.
- Mistakes the student made become generic pitfalls ("A common mistake is confusing X with Y"), never "you got this wrong".

## progress/log.md Entry Format

```
## YYYY-MM-DD
- Topic: <topic name>
- Covered: <what was taught or practiced>
- Outcome: <pass / in progress / needs review>
- Next: <what to do next session>
```
