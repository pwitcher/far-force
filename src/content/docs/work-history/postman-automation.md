---
title: CI/CD Infrastructure Check Automation
description: Using Postman Flows and Webhooks to automate health checks for a publishing pipeline.
---

## Challenge
Our documentation publishing pipeline relied on multiple external services (GitHub, Vercel, Atlassian, and Postman). Before every deployment, the manager had to manually verify the status of each service to avoid deployment errors and failures. This manual check was repetitive and added about 10 minutes to every publishing push.

## Solution
I created a public microservice that simultaneously checks all our external services using HTTP requests in Flows, Postman's low-code visual editor. The manager could then call the microservice's webhook from a script in the CI/CD pipeline.

* **HTTP requests:** The flow sends GET requests to the status API endpoints of all four services simultaneously.
* **Response parsing:** The flow extracts the status field from each endpoint's response.
* **Create a JSON object:** The flow compiles the extracted status field into a single JSON object and returns it as a response from the webhook.
* **Cloud Deployment:** I deployed the flow to the Postman Cloud, where anyone with the URL could call it from a browser, with `curl`, or as an automated pre-flight step in the CI/CD pipeline.

### Webhook

You can test the webhook yourself with `curl` or Postman. Pass the webhook below to a `curl` command, or [use it with an HTTP request](https://learning.postman.com/docs/getting-started/first-steps/sending-the-first-request) in Postman.

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
