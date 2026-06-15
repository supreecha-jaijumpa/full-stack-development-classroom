# Teach

Teach the current topic (or a specified topic) using the student's level and real-world examples.

## Usage

```
/teach
/teach [topic]
```

## Behavior

1. Get student level, language, and background apps from `me.md` (skip the read if it's already in context this session)
2. If no topic given, find the current topic in `CURRENT.md` (skip the read if already in context)
3. If topic given, use that directly
4. Read **only the current topic's file** `modules/NN-*/N.M-*.md` — use the module README as an index to find it; never read the whole module
5. Teach using this structure:
   - **Concept** — plain explanation matched to student's level
   - **Real-world example** — from apps listed in `me.md`, or fallback to GitHub/Spotify/Trello/Notion/Shopee
   - **Live code** — real, runnable code in the stack (React/Node/TypeScript/Postgres); have the student type and run it, not just read it
   - **Guiding questions** — 1–2 questions to make the student think before continuing
6. After questions are answered, offer `/exercise` to practice

## Level Guide

| Level | Approach |
|-------|----------|
| 0–2 | Analogies only. No jargon without explanation. |
| 3–4 | Build mental model first, then details. |
| 5–6 | Skip basics. Focus on trade-offs and patterns. |
| 7–8 | Peer discussion. Edge cases and production concerns. |
| 9–10 | Student designs first, mentor stress-tests. |
