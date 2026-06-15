# Next Topic

Advance to the next topic in the current module.

## Usage

```
/next
```

## Behavior

1. Read `CURRENT.md` — get current module, topic, and unlock status
2. Check unlock criteria: exercise passed + review questions answered + reflection submitted
3. If criteria met:
   - Mark current topic ✅ Done in `CURRENT.md`
   - Set next topic as 📖 In Progress
   - Update `CURRENT.md` with new current topic and next action
   - Briefly introduce the next topic (2–3 sentences)
4. If criteria not met:
   - List what's still missing (exercise / review / reflection)
   - Do not advance

## Unlock Criteria

Student must complete all three before advancing:
- Pass the module exercise (`/check` returns Pass)
- Answer the mentor's review questions
- Submit a brief reflection (even 2–3 sentences counts)

## Notes

- Never skip topics silently — always state what was unlocked and what comes next
- If the student is at the end of a module, announce module completion and show the next module
