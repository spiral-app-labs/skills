---
name: heartbeat-execution
description: Run heartbeat cycles with strict API budget: fetch board, execute top unblocked tasks, log activity, and post heartbeat summary.
---

# heartbeat-execution

Use when handling a heartbeat poll or running autonomous work cycle.

## Workflow
1. Fetch full assigned `todo + in_progress` set (one board call).
2. Pick up to 3 unblocked, high-priority tasks.
3. Fetch task comments before execution (source of truth overrides description).
4. Execute (spawn sub-agents for heavy build tasks).
5. Update task status and log `agent_activity`.
6. Post one `heartbeat_runs` summary with actions + task IDs.

## API Budget Guardrails
- Target 6-10 calls per heartbeat
- Hard ceiling: 10 calls
- Batch where possible

## Picking Logic
1. Unstarted assigned tasks first
2. Stale blockers >24h => escalate
3. PR review comments waiting => address
4. Then proactive idle work

## Output Rules
- If work done: send message beginning with `🫀 **Heartbeat:**`
- `HEARTBEAT_OK` only if nothing needs attention and no output artifact is pending.

## Artifact Requirement
Each heartbeat must produce at least one artifact:
- commit
- spec
- review
- memory update
