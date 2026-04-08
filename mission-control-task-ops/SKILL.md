---
name: mission-control-task-ops
description: Operate Mission Control task lifecycle in Supabase: create cold-start briefs, set priorities/dependencies, enforce statuses, and update metadata safely.
---

# mission-control-task-ops

Use this skill when creating, updating, or sequencing Mission Control tasks.

## Trigger Conditions
- User asks to create/update MC tasks
- Need to convert plans/specs into executable backlog
- Need to set dependencies (`metadata.blocked_by`) or priorities

## Operating Rules
1. Every task description must be a cold-start brief:
   - what to do
   - where to do it (paths/IDs/repos)
   - acceptance criteria
   - context/why
   - blockers/dependencies
2. Include `created_by_agent: 2980525e-4493-40a3-9b47-8ed37738a15a` on creation.
3. Never set status=`cancelled`.
4. Never mark Ethan-owned tasks done unless work is truly complete.
5. Use plain-English titles (no prefixes like "Binky:" unless explicitly requested).

## Status Guidance
- `todo`: ready to execute
- `in_progress`: actively being worked
- `in_review`: waiting for founder review/approval
- `done`: fully complete with shipped artifact

## Dependency Protocol
- Use `metadata.blocked_by: [task_id...]`
- Create upstream spec/review tasks before downstream build tasks when needed.
- If blocked >24h on critical path, escalate to founder.

## Safe Metadata Update Pattern
`PATCH` can overwrite metadata. Always:
1) fetch existing metadata
2) merge keys
3) patch merged object

## Done Output Standard
Top-level update should be short and human.
If technical details are necessary, put them in thread/reply only.
