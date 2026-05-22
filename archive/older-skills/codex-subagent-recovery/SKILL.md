---
name: codex-subagent-recovery
description: Recover failed or silently broken Codex ACP subagents with a strict respawn-first protocol. Use when Donna or another OpenClaw agent sees a Codex subagent fail, return empty output, hit gateway closed 1012, process_exit, label already in use, or any other ACP run that did not clearly finish with evidence. Also use when spawning Codex through ACP and you need the exact safe harness parameters so you do not accidentally spawn an OpenClaw Sonnet session by using main, leo, or a UUID.
---

# Codex Subagent Recovery

Use this skill to detect broken Codex runs fast, respawn them correctly, and avoid burning Anthropic credits by reaching for the wrong agent namespace.

## Non-Negotiables

- Treat silent failure as failure.
- Respawn Codex. Do not absorb the work inline.
- Never fall back to Sonnet or Opus because Codex failed.
- Use ACP harness params exactly:

```json
{
  "agentId": "codex",
  "runtime": "acp",
  "mode": "run"
}
```

- Do not use OpenClaw agent IDs such as `main`, `leo`, `donna`, or any UUID in `agentId` when `runtime` is `acp`. That is the wrong namespace and can create a paid Anthropic session.

## Recovery Loop

1. Check session or run status first. Do not guess.
2. Classify the failure mode from the returned status, transport error, or empty result.
3. Check whether the run partially completed in the repo, PR list, or task status before respawning.
4. Clear the stale label only if the system is still holding it.
5. Respawn as Codex with a fresh label suffix such as `-v2` or `-v3`.
6. Log the failure mode, old label, new label, and any partial artifact found.
7. Verify the replacement run with concrete output evidence.

## Detection Rules

Treat the subagent as failed if any of these are true:

- status is `failed`
- status is `completed` but the result is empty or materially blank
- transport error includes `gateway closed (1012)`
- run ends with `process_exit`
- spawn returns `spawn_failed`
- run never produces the expected artifact: PR URL, file output, or task-status writeback

For silent completions, inspect the repo or target output path before respawning. If no meaningful work landed, respawn immediately. If work landed, keep the artifact and only recover the missing reporting step.

## Spawn Rules

Use Codex ACP only:

```json
{
  "task": "<brief>",
  "agentId": "codex",
  "runtime": "acp",
  "mode": "run",
  "label": "clear-unique-label"
}
```

When a prior label is stuck, append a suffix instead of fighting the old one:

- `go-viral-landing-polish`
- `go-viral-landing-polish-v2`
- `go-viral-landing-polish-v3`

Never “just use main” for ACP Codex work. `main` is an OpenClaw agent, not the Codex harness.

## Verification Standard

Declare success only after at least one concrete artifact exists:

- PR URL or merged commit reference
- file or directory output at the expected path
- explicit Supabase or Mission Control status update in the result

If the result claims completion but provides no artifact, treat it as unverified and keep investigating. If nothing landed, respawn.

## Failure Logging

Record each failure in the local run log, task comment, or session notes with:

- task or run label
- failure mode
- raw error summary
- whether partial work existed
- respawn label
- final verified artifact

## Reference

Read [references/failure-modes.md](references/failure-modes.md) when you need the exact response for a specific error or a concise decision table.
