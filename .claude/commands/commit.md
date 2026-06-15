# Git Commit Skill

Create well-formatted git commits for a learning journal.

## Usage

```
/commit
```

## Behavior

1. Analyze staged changes with `git diff --staged`
2. Infer the type from file paths:
   - `modules/` → `study`
   - `exercises/` → `exercise`
   - `progress/` or `notes/` → `reflect`
   - `me.md`, `plan/`, config files → `setup`
3. Write the message in **past simple tense** with today's date

## Commit Format

```
<type>(<module>): YYYY-MM-DD — <past-simple description>

[optional body — bullet points, past tense]
```

## Types

| Type | When to use |
|------|-------------|
| `study` | Read, watched, or discussed a concept |
| `exercise` | Completed a hands-on exercise or lab |
| `hw` | Submitted or revised homework |
| `vocab` | Added new terms or glossary entries |
| `notes` | Wrote or updated study notes / summaries |
| `setup` | Installed tools, configured environment |
| `fix` | Corrected a misconception or wrong note |
| `reflect` | Wrote a retrospective or journal entry |

## Example Output

```
study(05-react-fundamentals): 2026-06-12 — understood useState and re-render behavior

- Worked through module 5.4 and built a counter + toggle demo
- Noted pitfall: state updates are async; don't read state right after setState
```
