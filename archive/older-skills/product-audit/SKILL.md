---
name: product-audit
description: Run a deep, brutally honest product audit for Spiral apps and convert findings into Mission Control execution. Use when asked to audit an app, review the product, explain what sucks about an app, or do a deep dive on Go Viral, Binky, Mission Control, or future Spiral products. This skill orchestrates two parallel Codex planning agents, extracts the highest-impact fixes from code-referenced plans, creates urgent Mission Control tasks with cold-start briefs, and immediately launches up to three Codex execution agents on the top work.
---

# Product Audit

Use this skill to turn a vague “audit the product” request into a concrete multi-agent flow that produces plans, Mission Control tasks, and live execution.

## Required Inputs

Confirm these before starting:

- repo path
- epic ID
- project ID

If any are missing, ask for them first. Do not invent IDs.

## Workflow

1. Spawn two parallel Codex planning agents through ACP, not OpenClaw agent IDs.
2. Give one agent the design and UX lane and the other the functionality and pipeline lane.
3. Require each agent to read the actual codebase, write a markdown plan file in the workspace, and end with `PLAN_DONE:<filepath>`.
4. Read both plan files yourself.
5. Extract the top 5 to 7 highest-impact actionable items from each plan.
6. Create Mission Control tasks for each extracted item with urgent priority and a full cold-start brief.
7. Spawn up to 3 Codex execution agents on the highest-priority tasks immediately.
8. Report the findings, created tasks, and active execution lanes to Ethan.

## Planning-Agent Rules

- Spawn Codex with `agentId: "codex"`, `runtime: "acp"`, `mode: "run"`.
- Keep the two lanes independent.
- Require exact file, route, component, or library references in every recommendation.
- Reject generic SaaS advice.
- Require harsh honesty over politeness.
- Write plans to files named like:
  - `go-viral-design-ux-improvement-plan.md`
  - `go-viral-functionality-pipeline-improvement-plan.md`

## Audit Scope

The design and UX lane must cover:

- landing page
- upload or input flow
- loading states
- results page
- dashboard
- mobile
- error and empty states
- brand voice
- visual hierarchy
- microcopy

The functionality lane must cover:

- analysis pipeline quality
- AI prompt engineering
- scoring model
- data model integrity
- API reliability
- mock or fake data
- performance
- value proposition accuracy

## Task-Creation Standard

Every created Mission Control task must include:

- clean direct title
- full description that works as a cold-start brief
- `epic_id`
- `project_id`
- `priority: "urgent"`
- `created_by_agent: "2980525e-4493-40a3-9b47-8ed37738a15a"`
- `assigned_to_agent: "2980525e-4493-40a3-9b47-8ed37738a15a"`
- `metadata.requirements` as an array of concrete acceptance rows

Use the exact task link format:

```text
https://hq.ethantalreja.com/tasks?id=<ID>|task name
```

## Execution Spawn Rules

- Launch at most 3 Codex execution agents at once.
- Pick the tasks with the highest user impact and lowest dependency risk.
- Include repo path, task ID, git identity requirement, and PR expectations in each brief.
- Require each execution agent to update Mission Control when done.
- Do not route these execution tasks to Sonnet or Opus.

## Output Contract

Report three things only:

- what the audit found
- which tasks were created, as task links
- which Codex execution agents are currently running

## Reference

Read [references/audit-contract.md](references/audit-contract.md) before spawning the planning agents or creating Mission Control tasks. It contains the planning briefs, task payload contract, and reporting format.
