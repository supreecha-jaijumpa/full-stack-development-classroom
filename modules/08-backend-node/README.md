# Module 08: Backend with Node.js

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 3–4 weeks
> Phase: Phase 3 — Backend Development
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Explain how the Node.js runtime and event loop schedule asynchronous work
- [ ] Build an Express application with structured routing and TypeScript types
- [ ] Design RESTful endpoints that follow consistent resource and status-code conventions
- [ ] Implement reusable middleware and a centralized error-handling strategy
- [ ] Validate and sanitize incoming requests before they reach business logic
- [ ] Manage configuration and secrets through environment variables across environments
- [ ] Ship a documented, typed REST API end to end

---

## Topics
- [8.1 Node Runtime & the Event Loop](8.1-node-runtime-event-loop.md)
- [8.2 Express Fundamentals](8.2-express-fundamentals.md)
- [8.3 REST API Design](8.3-rest-api-design.md)
- [8.4 Middleware & Error Handling](8.4-middleware-and-error-handling.md)
- [8.5 Request Validation](8.5-request-validation.md)
- [8.6 Environment & Configuration](8.6-environment-and-configuration.md)
- [8.7 Build a REST API (hands-on)](8.7-build-a-rest-api.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 8.1: Write a script that logs output across `setTimeout`, `setImmediate`, `process.nextTick`, and a resolved Promise, then explain the ordering you observe
- [ ] Exercise 8.2: Scaffold a TypeScript Express server with a `/health` route and modular route files
- [ ] Exercise 8.3: Design a resource (e.g. `tasks`) with full CRUD endpoints and correct status codes
- [ ] Exercise 8.4: Add logging and 404 middleware plus a single centralized error handler with typed error classes
- [ ] Exercise 8.5: Validate every request body and query with a schema library (e.g. Zod) and return 422 on failure
- [ ] Exercise 8.6: Load typed config from `.env`, fail fast on missing required variables, and support dev/test/prod
- [ ] Exercise 8.7: Combine everything into a documented REST API for a real domain

---

## Module Assessment
- Pass when: all exercises done + a typed Express REST API artifact reviewed by mentor
- Milestone: Build a typed REST API in Express with proper routing, validation, centralized error handling, and config via environment variables. Document the endpoints.
- Unlocks: Module 09 — Databases
