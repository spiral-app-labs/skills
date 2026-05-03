# Spiral Agent Skills Library

Shared skills, workflows, and capabilities across all Spiral agents — Donna, Forge, and Evan.

## What's in here

Each skill is a directory with a `SKILL.md` file (the agent reads this to know how to do something). Some skills have supporting reference files.

## Website Agency Pack

The restaurant website employee should load only this agency pack plus minimal ops skills (`heartbeat-execution` and `mission-control-task-ops`) unless Mission Control or Donna explicitly assigns broader work.

| Skill | Purpose |
|-------|---------|
| `website-agency-operator` | Primary autonomous OpenClaw operating loop, queue selection, status updates, blocker escalation, and Donna handoff. |
| `agency-mission-control-sync` | Mission Control API/writeback contract for leads, tasks, heartbeat, activity, QA rounds, evidence, and blockers. |
| `restaurant-lead-qualification` | Active 7-check lead-fit gate before any speculative build. |
| `restaurant-website-audit` | Current-site audit with browser, review, mobile, and asset evidence. |
| `restaurant-site-router` | Route qualified leads to the right catalog template and modifiers. |
| `restaurant-template-fork` | Fork a selected catalog template into `restaurant-website-system/sites/<slug>/`. |
| `restaurant-build-checklist` | Create and maintain `checklist.md` and `checklist.json` for every build. |
| `restaurant-fork-improvement` | Polish a built fork from demo-shippable to pitch-ready. |
| `restaurant-qa-delivery` | Three-round QA, screenshots, build checks, mobile checks, pitch evidence, and MC writeback. |
| `restaurant-pitch-doc` | Create one-minute restaurant redesign pitch docs. |
| `restaurant-template-analysis` | Deep-capture pipeline for catalog templates or inspiration sites. |

Reference/compatibility only:

- `agency-website-design` is legacy design reference material, not the active workflow.
- `agency-overnight` is a compatibility shim that points to `website-agency-operator`.

## General Skills

| Skill | Purpose | Who Uses It |
|-------|---------|-------------|
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

## Restaurant Website System

`restaurant-website-system/` is a catalog-and-fork system that lives inside this skills folder but is structured as a self-contained system rather than a SKILL.md skill. It has its own README, research docs, scripts, and `templates/` recreations. Active skills promote the repeatable parts of that system into the top-level library.

Read `restaurant-website-system/README.md` first.

Helpful scripts:

- `restaurant-website-system/scripts/fork-template.sh`
- `restaurant-website-system/scripts/new-build-checklist.mjs`
- `restaurant-website-system/scripts/shoot-template.sh`

## Archive

Market research, old transcripts, and one-off research packets live under `archive/` so the website employee does not load them as active skill surface.

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
5. Run `npm test` from this repo to validate skill metadata and active agency scope
6. Commit + push

## Philosophy

Skills are transferable. If something works really well for one agent, it goes in here so every agent gets it. No agent should have a workflow insight locked in their private memory that another agent could benefit from.
