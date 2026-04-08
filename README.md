# Spiral Agent Skills Library

Shared skills, workflows, and capabilities across all Spiral agents — Donna, Forge, and Evan.

## What's in here

Each skill is a directory with a `SKILL.md` file (the agent reads this to know how to do something). Some skills have supporting reference files.

## Skills

| Skill | Purpose | Who Uses It |
|-------|---------|-------------|
| `agency-website-design` | Full design system for restaurant websites (Next.js 14 + Tailwind + Framer Motion) | Forge, Evan |
| `agency-overnight` | Overnight restaurant website build workflow | Forge |
| `agent-foundation-files` | Build IDENTITY/SOUL/AGENTS files for new agents | Donna |
| `amazon-narrative-memo` | Write Amazon-style 6-pagers and narrative memos | Donna |
| `codex-subagent-recovery` | Recovery protocol when a coding sub-agent fails silently | Donna |
| `delegation` | Multi-agent delegation protocol | Donna |
| `donna-orchestration-core` | Donna's operating SOP | Donna |
| `evolving-requirements-orchestration` | Handle changing requirements without task sprawl | Donna |
| `heartbeat-execution` | Run heartbeat cycles (Donna: read-only observer mode) | Donna |
| `mission-control-task-ops` | Task lifecycle in Supabase — create, update, close | All agents |
| `nina-binky-*` | Nina's content writing skills | Nina |
| `nina-mission-control-insight-ops` | Publish Nina's research into MC | Nina |
| `nina-research-*` | Nina's research workflows | Nina |
| `notion-spec-ops` | Create and maintain Notion specs | Donna |
| `product-audit` | Deep product audit → MC execution | Donna |
| `subagent-orchestration` | Delegate multi-step work to sub-agents | Donna |

## Agent Foundation Files

| Agent | Directory |
|-------|-----------|
| Forge (Qwen 30B Coder) | `agents/forge/` |
| Evan (GPT-5 PM/EM + QA) | `agents/evan/` |

## How to use a skill

When your task matches a skill's description, read the `SKILL.md` with the read tool, then follow it exactly. Skills are the source of truth for repeatable workflows.

## Adding a new skill

1. Create a directory: `skills/your-skill-name/`
2. Add `SKILL.md` with: description, trigger conditions, step-by-step instructions, and any constraints
3. Add any reference files (templates, code, lookup tables) in the same directory
4. Update this README
5. Commit + push

## Philosophy

Skills are transferable. If something works really well for one agent, it goes in here so every agent gets it. No agent should have a workflow insight locked in their private memory that another agent could benefit from.
