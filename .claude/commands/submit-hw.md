# Submit Homework

Submit the week's homework for mentor review and scoring.

## Usage

```
/submit-hw
```

Paste your homework answer above this command, then run `/submit-hw`.

## Behavior

1. Get the current homework assignment and criteria from `CURRENT.md` (skip the read if already in context this session)
2. Read the student's submission from the conversation above
3. Review against the homework criteria
4. Respond with:
   - **Score** — e.g. 8/10
   - **What's good** — 2–3 specific strengths
   - **What to improve** — concrete, actionable feedback
   - **Verdict** — Pass / Revise
5. If Pass: update `CURRENT.md` to mark homework complete; unlock next module if all criteria are met
6. If Revise: list the most critical fix and ask the student to resubmit

## Notes

- Homework is reviewed once per week before the next module unlocks
- A score of 6/10 or above counts as Pass
- Honest feedback — homework is how gaps get caught early
