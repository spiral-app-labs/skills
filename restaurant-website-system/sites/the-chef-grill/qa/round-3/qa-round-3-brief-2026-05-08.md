# Codex brief — The Chef Grill QA round 3

You are executing the canonical QA round 3 for Spiral's restaurant website agency.

## Context

- Repo/site path: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system/sites/the-chef-grill`
- Parent repo path: `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system`
- Lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`
- MC root task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
- QA round 3 child task ID: `956c9399-0c8c-45ef-bb2e-3af4bf4adf17`
- Route: Cuisine archetype, `plate-01`
- Current MC planner already shows `qa_round_3` in progress after QA2 sync.
- QA1 and QA2 are complete/synced.

## Required skills/contracts to read first

- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-qa-delivery/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/website-agency-operator/SKILL.md`
- `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/agency-mission-control-sync/SKILL.md`
- Use Playwright/local browser scripts for evidence capture as needed. If browser/server binding fails, document exactly and use truthful build/static checks.

## Grounding artifacts

Read these before judging sell-readiness:

- `checklist.md`
- `checklist.json`
- `qa/round-1/qa-round-1-2026-05-08.md`
- `qa/round-1/qa-round-1-checks-2026-05-08.json`
- `qa/round-2/qa-round-2-2026-05-08.md`
- `qa/round-2/qa-round-2-checks-2026-05-08.json`
- `audit.md`
- `routing.md`
- `build/improvement-pass-2026-05-08.md`
- `top-three/top-three-improvements-2026-05-08.md`
- `concierge/concierge-evidence-2026-05-08.md`
- `pitch-doc.md`
- `battle-cards.md`
- `scrapes/google-reviews-highest-30.md`

## QA round 3 focus per MC

- Final sell-readiness, links, preview URL, pitch doc, battle cards, top-three-improvement evidence, concierge evidence, and MC requirement/evidence readiness.
- Requirements to satisfy: `qa3-sell-ready`, `qa3-assets-ready`.
- Evidence required: QA round 3 findings, final preview screenshots, pitch-doc/battle-card cross-check.

## Checks to run

1. Run `npm run typecheck`, `npm run lint`, and `npm run build`. Save output under `qa/round-3/evidence/`.
2. Run final desktop 1440x900 and mobile 390x844 route checks for `/`, `/menu`, `/about`, `/contact`.
3. Capture final preview screenshots under `qa/round-3/screenshots/`:
   - desktop home
   - mobile home
   - desktop menu
   - mobile menu
   - desktop contact
   - mobile contact
   - concierge desktop/mobile if practical
4. Cross-check final site against pitch doc and battle cards:
   - demo path matches actual navigation and CTAs
   - evidence paths cited in pitch/battle cards exist
   - top-three improvements are visible or evidenced
   - concierge evidence is present and source-safe
5. Link checks:
   - order.online link works/preserved
   - Grubhub/Uber Eats links preserved where shown
   - `tel:+13123138900`
   - `mailto:info@thechefgrill.com`
   - Google directions link targets the verified address
   - no broken internal nav/hash routes
6. Truth/safety checks:
   - no placeholder copy, fake awards, fake names, invented review attributions, unsupported reservation/catering/private-event promises, invented hours, or unverified owner story claims
   - review proof remains anonymous/source-safe; no names/initials/dates/avatars
   - concierge remains source-limited and conservative
7. Final readiness caveats:
   - If there is still no public Vercel/deployed preview URL, record that as a packaging/delivery blocker, but QA3 can pass if local final preview evidence is complete and the delivery step is left pending.
   - Do **not** mark delivery done.

## Fix policy

- Apply only small, scoped fixes inside `sites/the-chef-grill` if QA3 finds a final sell-readiness issue.
- Do not rewrite the design or switch template.
- Do not invent facts.
- Rerun relevant checks after any fix.

## Artifacts to create/update

- `qa/round-3/qa-round-3-2026-05-08.md`
- `qa/round-3/qa-round-3-checks-2026-05-08.json`
- final screenshots under `qa/round-3/screenshots/`
- update `checklist.md` and `checklist.json`

## Mission Control writeback

POST `https://hq.ethantalreja.com/api/agency/leads/25633ae3-0c44-4d23-9996-da4440eeaa97/qa-rounds` with:

```json
{
  "round_number": 3,
  "findings": [],
  "fixes_applied": [],
  "skill_updates": null,
  "screenshots": [],
  "mc_task_id": "d9024ee4-cc50-4247-8529-2cb8b30c5ab2"
}
```

Use Authorization bearer from env (`SUPABASE_SECRET_KEY` fallback `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_SERVICE_KEY`) and `x-agency-runtime: openclaw`.

Save:

- `mc-qa-round-3-sync-payload-2026-05-08.json`
- `mc-qa-round-3-sync-2026-05-08.json`

Only mark QA round 3 complete if sell-readiness/assets gate is actually satisfied. Report changed files, commands, findings/fixes, MC sync result, and blockers. Do not start delivery or packaging.
