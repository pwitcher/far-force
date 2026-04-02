---
title: CI/CD Infrastructure Automation
description: Using Postman Flows and Webhooks to automate health checks for a publishing pipeline.
---

## Challenge
Our documentation publishing pipeline relied on multiple external services (GitHub, Vercel, Atlassian, and Postman). Before every deployment, the manager had to manually verify the status of each service to avoid deployment errors and failures. This manual check was repetitive and added about 10 minutes to every publishing push.

## Solution
I created a public microservice that simultaneously checks all our external services using Flows, Postman's low-code visual editor. The manager could then call the webhook from a script in the CI/CD pipeline.

* **Logic Design:** The flow hits the status APIs of all four services simultaneously.
* **Response Parsing:** Implemented logic within the flow to extract the status field from each endpoint's response.
* **Cloud Deployment:** Deployed the flow to the Postman Cloud, where anyone with the URL could call it from a browser or as an automated pre-flight step in the CI/CD pipeline.

### Webhook

You can test the webhook yourself with curl or Postman. Pass the webhook below to a `curl` command, or [use it with an HTTP request](https://learning.postman.com/docs/getting-started/first-steps/sending-the-first-request) in Postman.

`https://tokenizer-stars-escape.flows.pstmn.io/api/default/ci-cd-status-checker`

### Postman Flow

Ths is the flow I created to send the HTTP requests when the webhook is triggered. You can preview it below or open it in Postman with the **Run in Postman** button.

<iframe 
  title="Postman Flows Embed" 
  width="1200" 
  height="400" 
  allowtransparency="true" 
  style="background: none; border: none; width: 100%; min-height: 800px; display: block;" 
  src="https://flow.pstmn.io/embed/fQCpEZjA02uaf-XN6XyeS/?theme=dark&frame=true">
</iframe>
