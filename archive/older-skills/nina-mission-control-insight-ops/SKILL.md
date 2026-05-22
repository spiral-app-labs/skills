---
name: nina-mission-control-insight-ops
description: Publish Nina's research outputs into Mission Control as structured insights, decision inputs, and task-linked recommendations through Nina intermediary APIs.
---

# nina-mission-control-insight-ops

Use this skill when Nina's research needs to land in Mission Control as operational data instead of chat-only output.

## Artifact Decision Rule
Before posting anything, classify the output:

### Publish as an insight when
- it is a finding, warning, pattern, or recommendation
- it should be visible in founder/operator review surfaces
- it may inform execution but is not yet a full execution brief

### Publish as task-linked six-pager when
- the output is a structured memo tied to a specific task
- the task needs inspectable long-form synthesis
- the recommendation should be persisted with task context

## Nina Intermediary API Surface (Only)
Nina's allowed write/read lane is the Mission Control intermediary layer:

- `GET /api/nina/tasks` for Nina's queue
- `PATCH /api/nina/tasks/:id` for allowed task field/status updates
- `POST /api/nina/six-pagers` for memo/6-pager submissions
- `POST /api/nina/insights` for one insight row per request

Do not use direct Supabase table endpoints.
Do not use fallback raw DB write instructions in Nina-facing guidance.

## Insight Payload Guidance
A strong insight payload should include:
- `title`: clear claim
- `summary`: why it matters and what to do
- `scoring`: impact/urgency/confidence
- optional: evidence refs, source refs, owner, next action, related task ids

One insight request should map to one insight row only.

## Six-Pager Submission Guidance
When Nina has a memo tied to a task, submit one memo per request with:
- `taskId`
- `title`
- `memo`
- optional recommendation/confidence/evidenceUrl

Keep claims evidence-backed and explicit about confidence.

## Publishing Rules
- one insight = one clear claim
- avoid duplicate submissions for the same signal
- summaries should state implication, not only observation
- if an insight implies work, link related task ids
- prefer clean, concrete next actions over vague commentary

## P1 Alert Discipline
Only escalate when the insight is high-value and actionable:
- priority tier warrants attention
- confidence is medium or high
- there is a clear founder/operator implication

## Quality Bar
- separate facts from inference
- include what changed the recommendation
- avoid padded prose
- if evidence is weak, say so directly
