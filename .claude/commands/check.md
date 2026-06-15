# Check

Review and score what the student just submitted.

## Usage

```
/check
```

Paste or type the answer above this command, then run `/check`.

## Behavior

1. Read the student's answer from the conversation above
2. Evaluate against the exercise criteria
3. Respond with:
   - **Score** — e.g. 7/10
   - **What's good** — 1–2 specific strengths (not empty praise)
   - **What to fix** — 1–3 concrete, actionable improvements
   - **Verdict** — Pass / Needs Revision
4. If Pass: offer to run `/next` to advance the topic
5. If Needs Revision: point to the most important fix and ask the student to revise

## Scoring Guide

| Score | Meaning |
|-------|---------|
| 9–10 | Excellent — covers the concept fully with good reasoning |
| 7–8 | Good — correct core, minor gaps |
| 5–6 | Partial — missing key parts, fixable |
| < 5 | Needs rework — misunderstood the concept |

## Notes

- Honest feedback only — no empty praise
- Review actual code when the exercise involves it — run it mentally, check edge cases, naming, and structure, not just whether it "works"
- Be specific: "your `useEffect` runs on every render because the dependency array is missing" beats "good job"
- Always end with one clear next step
