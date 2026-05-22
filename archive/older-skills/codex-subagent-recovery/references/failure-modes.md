# Codex Subagent Recovery Reference

Use this file when the failure mode is ambiguous or when you need the exact recovery move.

## Canonical Facts

- Heartbeat and other OpenClaw sessions can spawn Codex subagents through ACP.
- The correct ACP Codex spawn target is `agentId: "codex"`.
- The required ACP tuple is `agentId: "codex"`, `runtime: "acp"`, `mode: "run"`.
- `main`, `leo`, `donna`, and UUIDs are OpenClaw agent IDs, not ACP harness IDs.
- Using those OpenClaw IDs in the wrong place can create Sonnet-backed sessions and waste Anthropic spend.

This is grounded by workspace notes from April 7 and April 8, 2026:

- the heartbeat diagnosis explicitly states the correct ACP target is `"codex"` and not `"leo"` or `"main"`
- founder guidance explicitly warns against OpenClaw IDs for Codex ACP work
- recent incident notes show ACP failures such as `process_exit`, `gateway closed (1012)`, empty completions, and non-interactive permission prompts

## Failure Matrix

| Signal | Meaning | Immediate move |
| --- | --- | --- |
| `failed` status | Run failed cleanly | Respawn Codex with same brief and fresh label |
| `gateway closed (1012)` | Gateway restarted mid-run | Respawn immediately; treat as transient transport failure |
| `process_exit` | ACP agent disconnected or exited | Check for partial output, then respawn if artifact missing |
| `label already in use` | Old run label still reserved | Append `-v2` or `-v3` and respawn |
| `spawn_failed` or `agentId` rejected | Spawn request invalid | Do not fall back to Anthropic; report error and stop |
| `completed` with empty result | Silent failure or reporting failure | Check repo, PRs, and task updates; respawn if nothing landed |

## Exact Recovery Protocol

1. Read the run or session status.
2. Capture the failure signal verbatim.
3. Search for partial artifacts:
   - expected output file
   - open or merged PR
   - repo diff or commit
   - Mission Control or Supabase status update
4. If no artifact exists, respawn Codex immediately.
5. If the label is blocked, generate a fresh label by suffixing `-v2`, `-v3`, and so on.
6. Keep the same brief unless the failure was caused by a bad prompt or missing PTY requirement. Only then patch the brief or runtime flags.
7. Log the failure and replacement label.
8. Verify the new run with artifact evidence.

## What Not To Do

- Do not switch to Sonnet or Opus because Codex had a transport failure.
- Do not silently finish the work inline after a Codex subagent dies.
- Do not reuse `main` or any OpenClaw UUID as the ACP `agentId`.
- Do not mark the task done from a textual “done” message without an artifact.

## Minimal Log Template

```text
subagent_failure:
  label: go-viral-empty-state
  error: gateway closed (1012)
  partial_artifact: none
  action: respawn
  respawn_label: go-viral-empty-state-v2
  verified_artifact: PR #221
```

## Completion Checklist

- Fresh Codex ACP run launched
- Unique label used
- Failure recorded
- Artifact verified
- Mission Control or founder update reflects the verified state
