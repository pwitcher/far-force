---
title: CI/CD Infrastructure Automation
description: Using Postman Flows and Webhooks to automate health checks for a publishing pipeline.
---

## The Challenge
Our documentation publishing pipeline relied on multiple external services (GitHub, Vercel, Atlassian, and Postman). Before every deployment, the manager had to manually verify the status of each service to avoid "broken builds" or deployment hangs. This manual check was repetitive and added a 10-minute bottleneck to every publishing cycle.

## Solution
I built a technical solution using **Postman Flows** to eliminate this manual friction:

* **Logic Design:** Created a visual flow that hits the status APIs of all four services simultaneously.
* **Response Parsing:** Implemented logic within the flow to evaluate JSON responses and return a single "Go/No-Go" status.
* **Cloud Deployment:** Deployed the flow to the Postman Cloud, transforming it into a live, cloud-hosted microservice.
* **Webhook Integration:** Generated a public Webhook URL that allows the manager to trigger the entire health check instantly from a browser or as an automated pre-flight step in the CI/CD pipeline.
