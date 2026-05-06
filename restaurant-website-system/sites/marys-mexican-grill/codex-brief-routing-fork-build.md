# Codex Brief — Mary's Mexican Grill routing/fork/build

> Use only after Mission Control accepts the reviews-complete writeback and advances Mary's to `routing` / `template_route_fork_build`. Until then this brief is prep only; do not mark MC or checklist route requirements complete.

## Identity / git guardrail

Before changing files, run:

```bash
git config user.name
git config user.email
git status --short
```

Do not disturb unrelated uncommitted work, especially `restaurant-website-system/sites/dino-s-pizza-pasta/**`.

## Required skill contracts already read by Evan

- `website-agency-system`: choose exactly one archetype first, use it as the structural base, personalize with restaurant-specific proof, avoid generic copy/fake claims.
- `restaurant-site-router`: write route note with chosen template, rejected alternatives, modifiers, sections, avoided patterns, and register risk before locking `template-route-locked`.
- `restaurant-template-fork`: after route lock, fork with `./scripts/fork-template.sh --template <template> --slug marys-mexican-grill`; do not copy generated outputs.
- `restaurant-build-checklist`: maintain `checklist.md` + `checklist.json`; update evidence paths, stage, template slug, blockers, and requirements whenever gate evidence changes.
- `agency-mission-control-sync`: MC is source of truth; writeback via API only with `Authorization: Bearer $AGENCY_AUTONOMY_API_KEY` and `x-agency-runtime: openclaw`; no raw Supabase writes for agency status.

## Source artifacts

- Audit: `restaurant-website-system/sites/marys-mexican-grill/audit.md`
- Routing note: `restaurant-website-system/sites/marys-mexican-grill/routing.md`
- Google Highest reviews JSON: `restaurant-website-system/sites/marys-mexican-grill/scrapes/google-reviews-highest-30.json`
- Google Highest reviews MD: `restaurant-website-system/sites/marys-mexican-grill/scrapes/google-reviews-highest-30.md`
- Review screenshot: `restaurant-website-system/sites/marys-mexican-grill/screenshots/google-reviews-highest-2026-05-04.png`
- Checklist: `restaurant-website-system/sites/marys-mexican-grill/checklist.json` and `.md`

## Route lock

Chosen template: `bamzi-01`.

Why: Mexican/Latin casual grill, saturated accent, food-forward menu browsing, local neighborhood proof, warm service, and order/directions conversion. Borrow `pepper-01` discipline only for sticky mobile order/menu flow; do not use Pepper as the primary structure.

## Build command after MC route is active

```bash
cd /Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system
./scripts/fork-template.sh --template bamzi-01 --slug marys-mexican-grill
./scripts/new-build-checklist.mjs --slug marys-mexican-grill --lead-id 4416524d-0894-4e47-a4e7-880ba6579aa3 --task-id 0ee079ce-2e26-4d44-8fdf-96e0db2e4047 --template bamzi-01 --stage building
```

Use `--force` only if MC explicitly authorizes overwriting the existing local folder.

## Must preserve / verify facts

- Name: Mary's Mexican Grill.
- Address: 108 Cass St, Woodstock, IL 60098.
- Rating proof: Google Maps browser evidence showed 4.8 from 604 reviews on 2026-05-04.
- Phone conflict: Google/Restaurantji show `(815) 337-2303`; indexed older official copy showed `(815) 923-5240`. Do not claim final phone until resolved; if building preview, visibly use `(815) 337-2303` only as "public listing phone" and flag confirmation in source notes.
- HTTPS/current site failure: current owned domain presented Fox Ordering setup page / broken HTTPS during audit; pitch should be rescue-focused.
- Owner replies: none visible in captured Google review packet.
- Owner/family story: not verified; do not invent.
- Photo rights: public aggregator photos are audit/mood evidence only, not production-safe.

## Required first-pass sections

1. Hero with menu/order/directions/call CTAs, 4.8/604 proof, Cass Street/Woodstock Square.
2. Review proof strip using only captured review text.
3. Menu highlights from review/audit evidence.
4. Order/action band and sticky mobile actions.
5. About/location section that stays factual.
6. Owner photo ask / gallery placeholder strategy.
7. Footer with address, phone pending confirmation, hours pending confirmation, order/menu/social links.

## Completion evidence expected before child gate can advance

- `routing.md` attached as `template-route-locked` evidence.
- `.agency-template.json` showing `bamzi-01` source after fork.
- Real content/source files updated from audit/review packet.
- Build/typecheck output captured.
- Preview/local screenshot evidence.
- MC build writeback accepted with `build_stage: building` and passed requirements `template-route-locked` and, when build passes, `fork-built`.
