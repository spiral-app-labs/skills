---
name: agency-overnight
description: Compatibility shim for the old overnight restaurant website workflow. Do not use for new autonomous agency work; use `website-agency-operator` plus `agency-mission-control-sync` instead.
---

# Agency Overnight Compatibility Shim

This skill has been replaced by `website-agency-operator`.

The old version contained:

- hardcoded 3-5am assumptions
- hardcoded Supabase REST curl snippets
- stale target lists
- direct-write patterns that bypassed Mission Control APIs
- model-specific delegation instructions

For current work, load:

1. `website-agency-operator`
2. `agency-mission-control-sync`
3. the relevant restaurant qualification, audit, router, fork, checklist, QA, and pitch skills

Mission Control is the source of truth. Build progress belongs in `agency_leads.metadata.build_stage`; sales status stays one of `lead`, `pitched`, `in_progress`, `delivered`, `closed_won`, or `closed_lost`.

Current new-work gates live in `website-agency-operator`: claim/checklist → audit → 30 Google reviews with Highest filter → route → fork/build → improve/top 3 → AI concierge → pitch → battle cards → QA rounds 1-3 → package → deliver or block.
