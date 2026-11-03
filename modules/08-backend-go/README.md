# Module 08: Backend with Go

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 5–6 weeks
> Phase: Phase 3 — Backend Development
> Learning order: Go → Gin → GORM (GORM starts in Module 09)
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Explain how the Node.js event loop and Go's goroutine scheduler each handle concurrent work
- [ ] Write idiomatic Go: structs, pointers, slices, maps, and errors as values
- [ ] Apply design principles in Go with small interfaces, composition, and constructor injection
- [ ] Use goroutines, channels, and `context` safely, and find data races with the race detector
- [ ] Build a Gin application with structured routing and typed request/response structs
- [ ] Design RESTful endpoints that follow consistent resource and status-code conventions
- [ ] Implement reusable middleware and a centralized error-handling strategy
- [ ] Validate incoming requests before they reach business logic
- [ ] Manage configuration and secrets through environment variables across environments
- [ ] Ship a documented REST API in Go end to end

---

## Topics
- [8.1 Node Runtime & the Event Loop](8.1-node-runtime-event-loop.md)
- [8.2 Go Essentials for TS Developers](8.2-go-essentials-for-ts-developers.md)
- [8.3 Interfaces & Composition](8.3-go-interfaces-and-composition.md)
- [8.4 Goroutines, Channels & Context](8.4-goroutines-channels-context.md)
- [8.5 Gin Fundamentals](8.5-gin-fundamentals.md)
- [8.6 REST API Design](8.6-rest-api-design.md)
- [8.7 Middleware & Error Handling](8.7-middleware-and-error-handling.md)
- [8.8 Request Validation](8.8-request-validation.md)
- [8.9 Environment & Configuration](8.9-environment-and-configuration.md)
- [8.10 Build a REST API (hands-on)](8.10-build-a-rest-api.md)

---

## Exercises
*(Unlocks as each topic is covered. Every backend exercise is real Go code that you write and run.)*
- Exercise 8.1: Not required (cleared 2026-11-03, when the backend moved to Go)
- [ ] Exercise 8.2: Write a CLI that reads JSON into structs, filters the records, and handles every error
- [ ] Exercise 8.3: Build a service on a `Notifier` interface with real and fake implementations injected through a constructor
- [ ] Exercise 8.4: Build a concurrent URL checker with a worker pool and `context` timeout, then create, detect, and fix a data race
- [ ] Exercise 8.5: Scaffold a Gin server with a `/health` route and feature route groups
- [ ] Exercise 8.6: Implement a resource (e.g. `tasks`) with full CRUD endpoints and correct status codes
- [ ] Exercise 8.7: Add logging and 404 handling plus a centralized error middleware with typed errors
- [ ] Exercise 8.8: Validate every request body and query with `binding` tags and return 422 with field-level details
- [ ] Exercise 8.9: Load typed config from `.env`, fail fast on missing required variables, and support dev/test/prod
- [ ] Exercise 8.10: Combine everything into a documented REST API for a real domain

---

## Module Assessment
- Pass when: all exercises done + a Gin REST API artifact reviewed by mentor
- Milestone: Build a REST API in Go with Gin, with proper routing, validation, centralized error handling, and config via environment variables. Document the endpoints.
- Unlocks: Module 09 — Databases
