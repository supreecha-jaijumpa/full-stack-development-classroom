# Module 14: DevOps & Deployment

> Status: 🔒 Locked (complete the previous module first)
> Estimated Time: 3 weeks
> Phase: Phase 4 — Full-Stack Integration & DevOps
> Fast Track: See the entry point table in `plan/roadmap.md`.

---

## Learning Objectives
- [ ] Containerize a frontend and backend with Docker images that build reproducibly
- [ ] Run a multi-service app (app + database) locally with Docker Compose
- [ ] Build a CI/CD pipeline in GitHub Actions that tests and deploys on push
- [ ] Deploy a full-stack app to a cloud host with a managed database
- [ ] Manage environment variables and secrets safely across environments
- [ ] Add logging and basic monitoring to observe a running app
- [ ] Deploy your full-stack app live end-to-end with the pipeline

---

## Topics
- [14.1 Docker Fundamentals](14.1-docker-fundamentals.md)
- [14.2 Docker Compose (multi-service)](14.2-docker-compose-multi-service.md)
- [14.3 CI/CD Pipelines (GitHub Actions)](14.3-cicd-pipelines.md)
- [14.4 Cloud Deployment](14.4-cloud-deployment.md)
- [14.5 Environment & Secrets Management](14.5-environment-and-secrets-management.md)
- [14.6 Logging & Monitoring](14.6-logging-and-monitoring.md)
- [14.7 Deploy a Full-Stack App (hands-on)](14.7-deploy-a-fullstack-app.md)

---

## Exercises
*(Unlocks as each topic is covered)*
- [ ] Exercise 14.1: Write a Dockerfile for your backend and build/run it as a container
- [ ] Exercise 14.2: Write a `docker-compose.yml` that runs your app and PostgreSQL together
- [ ] Exercise 14.3: Create a GitHub Actions workflow that installs, lints, and tests on every push
- [ ] Exercise 14.4: Deploy your app to a cloud host with a managed PostgreSQL database
- [ ] Exercise 14.5: Move all configuration to environment variables and store secrets in the platform's secret store
- [ ] Exercise 14.6: Add structured logging and a health check / basic uptime monitor
- [ ] Exercise 14.7: Extend the pipeline to deploy automatically on push to main

---

## Module Assessment
- Pass when: all exercises done + a live deployed URL with working CI/CD reviewed by mentor
- Milestone: Dockerize your full-stack app (app + database via Compose), set up a CI/CD pipeline that tests and deploys on push, and deploy it live with secrets handled properly and basic logging/monitoring in place.
- Unlocks: Module 15 — Performance & Scalability
