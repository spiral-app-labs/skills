---
name: subagent-orchestration
description: Delegate multi-step execution to sub-agents with strict briefs, model routing, timeouts, and concise done-message contracts.
---

# subagent-orchestration

Use when work is complex, multi-file, or likely >3 tool calls.

## When to Spawn
Spawn sub-agent for:
- feature builds
- broad refactors
- repo-wide quality passes
- heavy research synthesis

Do inline for:
- single-file read/edit
- one-liner fixes
- quick board hygiene

## Brief Template (required)
- objective
- exact repo/path
- task ID
- acceptance criteria
- constraints (branching, tests, security)
- done-message format (short top-level + details in thread)

## Routing
- Code: `openai-codex/gpt-5.3-codex` by default; use Claude Code only when founder explicitly enables Sonnet/Opus for the coding brain
- Research: `google/gemini-2.5-flash`
- Architecture planning: `anthropic/claude-sonnet-4-6`

## Runtime Guards
- set `runTimeoutSeconds`
- do not double-background
- max 1-2 concurrent by default unless explicitly approved otherwise
- for GitHub/Vercel-sensitive repo work, require the sub-agent brief to say: use Ethan Talreja's git author identity and the active `gh` CLI session tied to Ethan before any push, PR, merge, or conflict-resolution push

## Completion Handling
- Rewrite sub-agent results in assistant voice
- Do not dump raw logs to founder
- Update related MC task status/metadata after result
