---
title: Building an AI-Agentic Quality Gate
description: How I used the Model Context Protocol (MCP) to automate metadata validation in a Docs-as-Code workflow.
sidebar:
  order: 1
---

## The Challenge
AI agents are excellent at generating content but often fail at adhering to strict technical constraints. In an Astro/Starlight environment, missing frontmatter (like `title` or `description`) causes build failures or SEO degradation.

## The Solution: MCP Frontmatter Auditor
I engineered a custom **MCP Server** in TypeScript that allows AI agents to programmatically validate local Markdown files.

### Key Features
* **Local Filesystem Access:** Securely bridges the gap between the LLM and the local repository.
* **Automated Metadata Audits:** Instantly identifies missing required YAML fields.
* **Shift-Left Methodology:** Catches errors during the authoring phase, before they hit CI/CD.

## Technical Implementation
The auditor is built as a Node.js server using the `@modelcontextprotocol/sdk`. It implements a tool called `audit_metadata` which handles path normalization and regex-based frontmatter scanning.

### The Logic
```typescript
// Example of the validation logic I implemented
const hasTitle = content.includes("title:");
const hasDescription = content.includes("description:");