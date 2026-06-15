# Module 12: Backend Testing

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 2 weeks
> Phase: Phase 3 — Backend Development
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Choose a testing strategy that targets risk, not coverage vanity
- [ ] Write fast, isolated unit tests for business logic with Vitest
- [ ] Write integration tests that exercise real HTTP endpoints with Supertest
- [ ] Run tests against a real, reproducible test database with fixtures
- [ ] Mock external services so tests stay deterministic and offline
- [ ] Wire a CI-ready test command into the project

---

## Topics
- [12.1 Backend Testing Strategy](12.1-backend-testing-strategy.md)
- [12.2 Unit Testing Services](12.2-unit-testing-services.md)
- [12.3 Integration Testing the API](12.3-integration-testing-api.md)
- [12.4 Test Databases & Fixtures](12.4-test-databases-and-fixtures.md)
- [12.5 Mocking External Services](12.5-mocking-external-services.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 12.1: Map your API's critical paths and decide what to unit vs. integration test
- [ ] Exercise 12.2: Unit-test a service or business rule, including its edge cases, with mocked dependencies
- [ ] Exercise 12.3: Integration-test a full request/response cycle through your routes with Supertest
- [ ] Exercise 12.4: Stand up a disposable test database with seeded fixtures and per-test cleanup
- [ ] Exercise 12.5: Replace a third-party call with a mock and assert behavior on success and failure
- [ ] Exercise 12.6: Add a single CI-ready `test` command that runs the whole suite reproducibly

---

## Module Assessment
- Pass when: all exercises done + a tested API with unit, integration, mocks, and a CI test command reviewed by mentor
- Milestone: Your API from Modules 08–11, fully tested: unit tests for business logic, integration tests hitting a real test database, mocked external calls, and a CI-ready test command. Cover the critical paths, not vanity 100% coverage.
- Unlocks: Module 13 — Full-Stack Integration (Phase 4)
