# Module 09: Databases

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 3–4 weeks
> Phase: Phase 3 — Backend Development
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Write SQL to query, filter, join, and aggregate relational data
- [ ] Design a relational schema with appropriate keys and relationships
- [ ] Apply normalization to remove redundancy and anomalies
- [ ] Model and query data with the Prisma ORM in TypeScript
- [ ] Evolve a schema safely with migrations and reproducible seed data
- [ ] Use transactions to keep multi-step writes consistent under concurrency
- [ ] Diagnose slow queries and add indexes that measurably help
- [ ] Decide when a NoSQL store fits better than a relational one

---

## Topics
- [9.1 SQL Fundamentals](9.1-sql-fundamentals.md)
- [9.2 Relational Schema Design](9.2-relational-schema-design.md)
- [9.3 Normalization](9.3-normalization.md)
- [9.4 Prisma ORM](9.4-prisma-orm.md)
- [9.5 Migrations & Seeding](9.5-migrations-and-seeding.md)
- [9.6 Transactions & Concurrency](9.6-transactions-and-concurrency.md)
- [9.7 Indexes & Query Performance](9.7-indexes-and-query-performance.md)
- [9.8 NoSQL & When to Use It](9.8-nosql-and-when-to-use-it.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 9.1: Write SELECT queries with WHERE, JOIN, GROUP BY, and aggregates against a sample database
- [ ] Exercise 9.2: Model a blog domain (users, posts, comments, tags) as tables with keys and relationships
- [ ] Exercise 9.3: Take a denormalized table to 3NF and explain each anomaly you removed
- [ ] Exercise 9.4: Translate your schema into a Prisma schema and run typed queries
- [ ] Exercise 9.5: Author a migration and a seed script that populate realistic data
- [ ] Exercise 9.6: Implement a transfer-style operation in a single transaction and prove it rolls back on failure
- [ ] Exercise 9.7: Find a slow query with EXPLAIN, add an index, and measure the improvement
- [ ] Exercise 9.8: Pick a feature and argue whether it belongs in PostgreSQL or a NoSQL store

---

## Module Assessment
- Pass when: all exercises done + a normalized PostgreSQL + Prisma schema with migrations, seeds, and key queries reviewed by mentor
- Milestone: Design and implement a normalized PostgreSQL schema with Prisma for a real domain (e.g. a blog with users/posts/comments/tags). Write migrations, seed data, and the key queries — including one that needs an index and one that needs a transaction.
- Unlocks: Module 10 — Authentication & Security
