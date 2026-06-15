# Module 13: Full-Stack Integration

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 3 weeks
> Phase: Phase 4 — Full-Stack Integration & DevOps
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Wire a React+TS frontend to a Node/Express backend with clean API boundaries
- [ ] Share types across the stack so the client and server never drift
- [ ] Organize a monorepo so shared code, frontend, and backend live together cleanly
- [ ] Build full-stack features with Next.js (API routes + UI in one project)
- [ ] Apply server-side rendering and understand when it beats client rendering
- [ ] Add caching at the right layers to cut redundant work and latency
- [ ] Ship one complete feature end-to-end with loading and error handling throughout

---

## Topics
- [13.1 Connecting Frontend & Backend](13.1-connecting-frontend-backend.md)
- [13.2 End-to-End Type Safety](13.2-end-to-end-type-safety.md)
- [13.3 Monorepo Structure](13.3-monorepo-structure.md)
- [13.4 Next.js Full-Stack](13.4-nextjs-fullstack.md)
- [13.5 Server-Side Rendering](13.5-server-side-rendering.md)
- [13.6 Caching Strategies](13.6-caching-strategies.md)
- [13.7 Build a Full-Stack Feature (hands-on)](13.7-build-a-fullstack-feature.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 13.1: Connect your React app to an Express endpoint and render live data with a typed fetch wrapper
- [ ] Exercise 13.2: Define a shared `types` package and consume the same request/response types on client and server
- [ ] Exercise 13.3: Restructure your app into a monorepo with workspaces for `web`, `api`, and `shared`
- [ ] Exercise 13.4: Build a Next.js page backed by an API route that reads from the database
- [ ] Exercise 13.5: Convert one page to server-side rendering and compare hydration vs. client-only behavior
- [ ] Exercise 13.6: Add an HTTP cache header plus an in-memory cache to a read-heavy endpoint
- [ ] Exercise 13.7: Ship a complete feature: UI → typed API call → validation → DB → response → UI update

---

## Module Assessment
- Pass when: all exercises done + a working end-to-end feature demo reviewed by mentor
- Milestone: Combine your frontend and backend into one project (shared types, monorepo or Next.js). Ship one complete feature end-to-end: UI → typed API call → validation → DB → response → UI update, with loading/error handling throughout.
- Unlocks: Module 14 — DevOps & Deployment
