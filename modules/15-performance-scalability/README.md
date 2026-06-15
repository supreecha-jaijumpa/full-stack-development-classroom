# Module 15: Performance & Scalability

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 2 weeks
> Phase: Phase 4 — Full-Stack Integration & DevOps
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Measure and improve frontend performance (bundle size, rendering, Core Web Vitals)
- [ ] Find and fix backend bottlenecks in request handling and I/O
- [ ] Add caching layers and a CDN where they have the biggest impact
- [ ] Scale the database with indexing, query tuning, and read strategies
- [ ] Run load tests to understand how the app behaves under traffic
- [ ] Profile the app to locate real bottlenecks instead of guessing
- [ ] Document measurable before/after improvements

---

## Topics
- [15.1 Frontend Performance](15.1-frontend-performance.md)
- [15.2 Backend Performance](15.2-backend-performance.md)
- [15.3 Caching Layers & CDN](15.3-caching-layers-and-cdn.md)
- [15.4 Database Scaling](15.4-database-scaling.md)
- [15.5 Load Testing](15.5-load-testing.md)
- [15.6 Profiling & Finding Bottlenecks](15.6-profiling-and-bottlenecks.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 15.1: Cut your frontend bundle size and improve a Core Web Vitals score with code splitting and lazy loading
- [ ] Exercise 15.2: Find and fix a slow backend endpoint (reduce blocking work or unnecessary queries)
- [ ] Exercise 15.3: Put a CDN in front of static assets and add a cache layer (e.g. Redis) to a hot path
- [ ] Exercise 15.4: Add indexes and rewrite the slowest query, measuring the change with `EXPLAIN`
- [ ] Exercise 15.5: Run a load test against your app and capture throughput and latency under load
- [ ] Exercise 15.6: Profile the app, identify the top bottleneck, fix it, and record before/after numbers

---

## Module Assessment
- Pass when: all exercises done + a before/after performance report reviewed by mentor
- Milestone: Take your deployed app and make it measurably faster. Profile it, find the real bottlenecks (don't guess), add caching where it counts, optimize the slowest queries, and run a load test. Document before/after numbers.
- Unlocks: Module 16 — System Design & Architecture (Phase 5)
