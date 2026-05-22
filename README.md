# OpenClaw Skills Library

This repo should stay easy to scan. The root is reserved for the active restaurant website agency skills and the two active restaurant website workspaces.

## Root Layout

- Website agency skill folders: directories with a `SKILL.md` file.
- Active websites: `bistro-wasabi/` and `sammys-restaurant-and-bar/`.
- Archive: `archive/` contains older non-website skills, old websites, legacy website-system tooling, generated media, old agent files, and retired research.

Do not treat `archive/` as active working context unless a task explicitly asks for legacy material.

## Active Websites

| Website | Folder |
|---------|--------|
| Bistro Wasabi | `bistro-wasabi/` |
| Sammy's Restaurant and Bar | `sammys-restaurant-and-bar/` |

All other restaurant website folders were moved to `archive/restaurant-website-system/sites/`.

## Website Agency Skills

The restaurant website employee should load only this agency pack plus minimal ops skills (`heartbeat-execution` and `mission-control-task-ops`) unless Mission Control or Donna explicitly assigns broader work.

| Skill | Purpose |
|-------|---------|
| `website-agency-operator` | Primary OpenClaw operating loop, queue selection, status updates, blocker escalation, and Donna handoff. |
| `agency-mission-control-sync` | Mission Control API/writeback contract for leads, tasks, heartbeat, activity, QA rounds, evidence, and blockers. |
| `restaurant-lead-opportunity-scoring` | Score and prioritize restaurant website agency leads before they enter the build flow. |
| `restaurant-lead-qualification` | Active 7-check lead-fit gate before any speculative build. |
| `restaurant-website-audit` | Current-site audit with browser, review, mobile, and asset evidence. |
| `restaurant-site-router` | Route qualified leads to the right catalog template and modifiers. |
| `restaurant-template-fork` | Fork a selected catalog template into an active root website folder. |
| `image-first-hero-generation` | Generate the first hero design reference and clean plate for a restaurant build. |
| `restaurant-hero-personalization` | Personalized hero pass: reference, clean plate, art bible, Supabase upload, and continued build. |
| `restaurant-build-checklist` | Create and maintain `checklist.md` and `checklist.json` for every build. |
| `restaurant-fork-improvement` | Polish a built fork from demo-shippable to pitch-ready. |
| `restaurant-qa-delivery` | Three-round QA, screenshots, build checks, mobile checks, pitch evidence, and Mission Control writeback. |
| `restaurant-pitch-doc` | Create one-minute restaurant redesign pitch docs. |
| `restaurant-template-analysis` | Deep-capture pipeline for catalog templates or inspiration sites. |

Reference/compatibility only:

- `agency-website-design` is legacy design reference material, not the active workflow.
- `agency-overnight` is a compatibility shim that points to `website-agency-operator`.

## Ops Helpers

| Skill | Purpose | Who Uses It |
|-------|---------|-------------|
| `heartbeat-execution` | Run heartbeat cycles | OpenClaw / Donna |
| `mission-control-task-ops` | Task lifecycle in Supabase: create, update, close | All agents |

## Archive

The archive is intentionally not active surface area. It currently holds:

- `archive/older-skills/`: older general-purpose skills that are not part of the restaurant website agency surface.
- `archive/restaurant-website-system/`: legacy catalog, templates, research, scripts, and all archived restaurant sites.
- `archive/generated-media/`: loose generated videos and Sammy's image drafts.
- `archive/agent-foundation-files/`: old top-level agent identity folders.
- `archive/tooling-config/`: old local tooling config.
- `archive/repo-support/`: repo validation scripts and support files.
- older market and restaurant research packets.

Archived older skills:

- `agent-foundation-files`
- `amazon-narrative-memo`
- `codex-subagent-recovery`
- `delegation`
- `donna-orchestration-core`
- `evolving-requirements-orchestration`
- `nina-binky-in-app-resource-writing`
- `nina-binky-seo-article-writing`
- `nina-mission-control-insight-ops`
- `nina-research-decomposition`
- `nina-research-to-copy-pipeline`
- `notion-spec-ops`
- `product-audit`
- `subagent-orchestration`

## How To Use A Skill

When your task matches a skill's description, read that skill's `SKILL.md` and follow it. Skills are the source of truth for repeatable workflows.

## Adding A New Skill

1. Create a directory: `skills/your-skill-name/`
2. Add `SKILL.md` with description, trigger conditions, step-by-step instructions, and constraints.
3. Add any reference files in the same directory.
4. Update this README.
5. Run `npm test` from this repo to validate skill metadata and active agency scope.
6. Commit and push.
