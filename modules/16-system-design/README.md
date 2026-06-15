# Module 16: System Design & Architecture

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 3 weeks
> Phase: Phase 5 — Senior Level
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Apply a repeatable framework to reason about any system design problem
- [ ] Choose appropriate scaling strategies (vertical, horizontal, caching, sharding) for a given load
- [ ] Weigh monolith vs microservices trade-offs against team size and product stage
- [ ] Decouple systems with message queues and event-driven patterns
- [ ] Design API gateway / BFF layers that fit multiple client types
- [ ] Identify failure modes and design for reliability, availability, and graceful degradation
- [ ] Produce and defend a complete end-to-end system design under stress-test questioning

---

## Topics
- [16.1 System Design Fundamentals](16.1-system-design-fundamentals.md)
- [16.2 Scaling Patterns](16.2-scaling-patterns.md)
- [16.3 Monolith vs Microservices](16.3-monolith-vs-microservices.md)
- [16.4 Message Queues & Events](16.4-message-queues-and-events.md)
- [16.5 API Gateway & Backend-for-Frontend](16.5-api-gateway-and-bff.md)
- [16.6 Designing for Reliability](16.6-designing-for-reliability.md)
- [16.7 System Design Case Study](16.7-system-design-case-study.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 16.1: Write a one-page design framework cheat-sheet (requirements → estimates → API → data → scale → trade-offs) and apply it to a URL shortener.
- [ ] Exercise 16.2: Take an existing endpoint from your work and write a scaling plan for 100x traffic: where caching, read replicas, and sharding would go, with capacity estimates.
- [ ] Exercise 16.3: Write a decision memo recommending monolith or microservices for a fictional 5-person startup, justified against team size and stage.
- [ ] Exercise 16.4: Redesign a synchronous flow (e.g. order → email → invoice) into an event-driven one with a queue; diagram producers, consumers, and failure/retry handling.
- [ ] Exercise 16.5: Design a BFF for a product that has a web app and a mobile app with different data needs; document why a single shared API would be worse.
- [ ] Exercise 16.6: For a service you designed, enumerate failure modes and write the mitigations (timeouts, retries with backoff, circuit breakers, fallbacks, idempotency).
- [ ] Exercise 16.7: Complete the full case study: produce architecture diagram, data model, scaling strategy, failure analysis, and trade-off write-up.

---

## Module Assessment
- Pass when: all exercises done + the case-study design package (diagram, data model, scaling strategy, failure modes, trade-offs) reviewed by mentor
- Milestone: Given a realistic product brief (e.g. design a ticketing system that handles flash sales), produce a system design: architecture diagram, data model, scaling strategy, failure modes, and the trade-offs you chose. Defend it against the mentor's stress-test questions.
- Unlocks: Module 17 — Senior Engineering Practices
