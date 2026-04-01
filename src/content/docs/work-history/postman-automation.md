---
title: CI/CD Infrastructure Automation
description: Using Postman Flows and Webhooks to automate health checks for a publishing pipeline.
---

## Challenge
Our documentation publishing pipeline relied on multiple external services (GitHub, Vercel, Atlassian, and Postman). Before every deployment, the manager had to manually verify the status of each service to avoid deployment errors. This manual check was repetitive and added a 10-minute bottleneck to every publishing push.

## Solution
I created a public microservice that simuultaneously checks all our external services using Flows, Postman's low-code visual editor. The manager then called the webhook from a script in the CI/CD pipeline.

* **Logic Design:** The flow hits the status APIs of all four services simultaneously.
* **Response Parsing:** Implemented logic within the flow to evaluate JSON responses and return a single "Go/No-Go" status.
* **Cloud Deployment:** Deployed the flow to the Postman Cloud, transforming it into a live, cloud-hosted microservice.
* **Webhook Integration:** Generated a public webhook URL that allows the manager to trigger the entire health check instantly from a browser or as an automated pre-flight step in the CI/CD pipeline.

### Webhook

`https://tokenizer-stars-escape.flows.pstmn.io/api/default/ci-cd-status-checker`

### Postman Flow

<iframe 
  title="Postman Flows Embed" 
  width="1200" 
  height="400" 
  allowtransparency="true" 
  style="background: none; border: none; width: 100%; min-height: 800px; display: block;" 
  src="https://flow.pstmn.io/embed/fQCpEZjA02uaf-XN6XyeS/?theme=dark&frame=true">
</iframe>
