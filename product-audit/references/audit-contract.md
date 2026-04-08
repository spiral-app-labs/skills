# Product Audit Contract

Use this reference for the exact planning briefs, Mission Control task payload, and closeout format.

## ACP Spawn Standard

All planning and execution lanes use:

```json
{
  "agentId": "codex",
  "runtime": "acp",
  "mode": "run"
}
```

Do not substitute `main`, `leo`, `donna`, or a UUID for `agentId`.

## Planning Brief 1: Design And UX

```text
Audit the product experience for <app-name> at <repo-path>.

Read the real codebase first. Inspect actual routes, components, styles, copy, and state handling. Be brutally honest and specific.

Cover:
- landing page
- upload/input flow
- loading states
- results page
- dashboard
- mobile responsiveness
- error states
- empty states
- brand voice
- visual hierarchy
- microcopy

Rules:
- Every recommendation must cite actual files, components, or routes.
- No generic SaaS advice.
- Focus on high-impact product and UX changes Ethan would actually care about.
- Write the finished plan to <workspace>/<app-slug>-design-ux-improvement-plan.md
- End your final message with exactly: PLAN_DONE:<absolute-filepath>
```

## Planning Brief 2: Functionality And Pipeline

```text
Audit the product core for <app-name> at <repo-path>.

Read the real codebase first. Inspect routes, libs, prompts, analysis pipeline, scoring logic, API calls, data model, and any mocks or fixtures. Be brutally honest and specific.

Cover:
- analysis pipeline quality
- AI prompt engineering
- scoring model
- data model integrity
- API reliability
- mock/fake data
- performance
- value proposition accuracy

Rules:
- Every recommendation must cite actual files, functions, libraries, or routes.
- No generic advice.
- Prioritize real product truth over politeness.
- Write the finished plan to <workspace>/<app-slug>-functionality-pipeline-improvement-plan.md
- End your final message with exactly: PLAN_DONE:<absolute-filepath>
```

## Plan Extraction Rules

When both plans are done:

1. Read both markdown files fully.
2. Extract 5 to 7 items from each plan.
3. Prefer recommendations that are:
   - user-visible
   - implementation-ready
   - grounded in actual code references
   - not blocked by unknown product decisions
4. Merge duplicates across plans before creating tasks.

## Mission Control Task Payload

Use the Supabase project below for direct task creation when needed:

- URL: `https://eayiazyiotnkggnsvhto.supabase.co`
- key: `${SUPABASE_SERVICE_KEY}`

The `tasks` table in the local Mission Control codebase is known to accept at least these fields:

- `id`
- `title`
- `description`
- `status`
- `priority`
- `project_id`
- `assigned_to_agent`
- `created_by_agent`
- `labels`
- `metadata`

Use this creation shape unless the repo indicates a stricter local helper:

```json
{
  "title": "Tighten results page verdict structure and proof blocks",
  "description": "Full cold-start brief here.",
  "status": "todo",
  "priority": "urgent",
  "epic_id": "<epic-id>",
  "project_id": "<project-id>",
  "assigned_to_agent": "2980525e-4493-40a3-9b47-8ed37738a15a",
  "created_by_agent": "2980525e-4493-40a3-9b47-8ed37738a15a",
  "metadata": {
    "requirements": [
      "Reference the exact files to change",
      "State the acceptance criteria clearly",
      "Require PR link or commit evidence"
    ],
    "source": "product_audit",
    "app": "<app-name>",
    "audit_plan_paths": [
      "<design-plan-path>",
      "<functionality-plan-path>"
    ]
  }
}
```

## Description Template

Every task description must be a cold-start brief that includes:

1. What to change
2. Where to change it
3. Why it matters
4. Acceptance criteria
5. Git identity instruction
6. PR instruction

Use this shape:

```text
Goal:
<one-paragraph statement of the intended product improvement>

Context:
- repo: <repo-path>
- app: <app-name>
- audit source: <plan-file>
- related files/routes: <explicit paths>

What to do:
- <concrete implementation step>
- <concrete implementation step>
- <concrete implementation step>

Acceptance criteria:
- <observable outcome>
- <observable outcome>
- <observable outcome>

Execution requirements:
- use Ethan Talreja's git author identity
- use the active gh CLI session tied to Ethan for any push or PR
- open a PR or provide an equivalent shipped artifact
- update Mission Control with the final evidence
```

## Execution-Agent Brief Template

```text
Implement Mission Control task <task-id> for <app-name>.

Repo:
<repo-path>

Task title:
<task-title>

Task brief:
<full task description>

Rules:
- use Codex ACP, not Sonnet or Opus
- use Ethan Talreja's git author identity
- use the active gh CLI session tied to Ethan before any push or PR
- keep work scoped to this task
- update Mission Control with evidence when done
- return the PR URL or shipped artifact in the final result
```

## Final Founder Report Format

Use one concise update with:

1. strongest findings from the audit
2. created task links in this format:
   `https://hq.ethantalreja.com/tasks?id=<ID>|task name`
3. active execution lanes:
   - task name
   - Codex label
   - expected artifact
