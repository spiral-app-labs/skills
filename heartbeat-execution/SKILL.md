---
name: heartbeat-execution
description: Run heartbeat cycles with strict API budget, Mission Control state discipline, low-noise communication, and exactly one selected agency website step when the agency planner has work.
---

# heartbeat-execution

Use when handling a heartbeat poll or running autonomous work cycle.

If restaurant website agency work is available, this generic heartbeat skill defers to `/Users/ethantalreja/.openclaw/workspace/HEARTBEAT.md`. Execute exactly the selected website/current gate from Mission Control. Do not pick multiple board tasks.

## Workflow
1. Check the agency website planner first. If it returns selected work, follow the canonical heartbeat contract and stop after that lane.
2. For explicit non-agency heartbeat work only, fetch assigned `todo + in_progress` set.
3. Pick one unblocked, high-priority task unless Mission Control explicitly assigns a batch.
4. Fetch task comments before execution (source of truth overrides description).
5. Execute (spawn sub-agents for heavy build tasks).
6. Update task status and log `agent_activity`.
7. Post one human-readable result or one exact blocker only after work completes, cannot proceed, or Ethan explicitly asks for status.

## API Budget Guardrails
- Target 6-10 calls per heartbeat
- Hard ceiling: 10 calls
- Batch where possible

## Picking Logic
1. Current unblocked agency website first.
2. New agency website lead only after the current site is blocked or finished; use `scores.opportunity` to choose among unstarted leads.
3. Explicit non-agency assigned task.
4. Stale blockers >24h => refresh/escalate with evidence.
5. No proactive idle work unless Ethan/Donna/MC explicitly asks.

## Output Rules
- Acknowledge direct asks briefly, then work silently.
- Never post raw command/tool lines, terminal snippets, line-number reads, or live progress chatter.
- Do not post "still on it", "current status", or "trying X now" unless Ethan explicitly asks for status.
- Use one plain-English paragraph: what changed, evidence/location, and the next gate or exact ask.
- `HEARTBEAT_OK` only if nothing needs attention and no output artifact is pending.

## Artifact Requirement
Produce an artifact only when the current step genuinely creates one:
- commit or PR
- MC evidence/writeback
- review packet
- blocker payload with evidence

Do not create busywork artifacts just to prove activity.
