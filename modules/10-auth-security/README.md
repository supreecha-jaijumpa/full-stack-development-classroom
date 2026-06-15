# Module 10: Authentication & Security

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 2–3 weeks
> Phase: Phase 3 — Backend Development
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Distinguish authentication from authorization and identify where each belongs
- [ ] Compare session-based and token-based (JWT) auth and choose deliberately
- [ ] Integrate third-party login with the OAuth 2.0 authorization-code flow
- [ ] Implement role-based access control over protected routes
- [ ] Store passwords securely with modern hashing
- [ ] Recognize and mitigate the OWASP Top 10 risks
- [ ] Apply secure-by-default practices to a REST API

---

## Topics
- [10.1 Authentication Fundamentals](10.1-authentication-fundamentals.md)
- [10.2 Sessions vs JWT](10.2-sessions-vs-jwt.md)
- [10.3 OAuth & Social Login](10.3-oauth-and-social-login.md)
- [10.4 Authorization (RBAC)](10.4-authorization-rbac.md)
- [10.5 Password Security](10.5-password-security.md)
- [10.6 OWASP Top 10](10.6-owasp-top-10.md)
- [10.7 Secure API Practices](10.7-secure-api-practices.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 10.1: Add registration and login endpoints that issue a credential on success
- [ ] Exercise 10.2: Implement both a session and a JWT flow, then write up the trade-offs you hit
- [ ] Exercise 10.3: Add "Sign in with GitHub/Google" via the OAuth authorization-code flow
- [ ] Exercise 10.4: Protect routes by role (e.g. user vs. admin) with reusable authorization middleware
- [ ] Exercise 10.5: Hash and verify passwords with bcrypt/argon2 and enforce a password policy
- [ ] Exercise 10.6: Audit your API against the OWASP Top 10 and fix at least two findings
- [ ] Exercise 10.7: Add security headers, rate limiting, and input hardening to the API

---

## Module Assessment
- Pass when: all exercises done + a secured API with auth and RBAC plus the session-vs-JWT writeup reviewed by mentor
- Milestone: Add secure auth to your Module 08 API: registration with hashed passwords, login, protected routes, and role-based authorization. Write a paragraph defending your session-vs-JWT choice.
- Unlocks: Module 11 — API Design & Real-Time
