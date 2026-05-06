# Mission Control Build Handoff - 2026-05-06

Purpose: local source of truth for the OpenClaw Mission Control sync pass after
the restaurant build queue review on 2026-05-06.

Use this file to update Mission Control, not as permission to skip the normal
lead-fit gate. Any fresh build still needs visual reality, menu/register,
review-tone, current-site, switching-cost, why-switch, and would-I-eat-here
verification before forking.

## Mission Control Snapshot

Read-only Mission Control query on 2026-05-06 showed:

- `61 delivered`
- `10 pitched`
- `15 ready_for_outreach`
- `0 in_progress`

No Mission Control writes were made during this handoff.

## Local Built-Site Backfill

These folders exist locally as full Next app builds in
`restaurant-website-system/sites/`. Add them to Mission Control if missing, or
refresh stale MC statuses/preview metadata if already present.

| Restaurant | Local slug | Local state | Mission Control note |
|---|---|---|---|
| Addison's Steakhouse | `addisons-steakhouse` | Built app + audit | Missing from MC query results |
| Bistro Wasabi | `bistro-wasabi` | Built app + audit | Missing from MC query results |
| Cafe Olympic | `cafe-olympic` | Built app + audit | Missing from MC query results |
| Grounds Coffee Bar | `grounds-coffee-bar` | Built app + audit | Missing from MC query results |
| DiBenedetto Trattoria | `dibenedetto-trattoria` | Built app + audit + scrapes | Missing from MC query results |
| MAAX Asian BBQ | `maax-asian-bbq` | Built app + audit + scrapes | Missing from MC query results |
| Sammy's Restaurant & Bar | `sammys-restaurant-and-bar` | Built app + audit + scrapes | Missing from MC query results |
| Shirley's Piano Bar | `shirleys-piano-bar` | Built app + audit | Missing from MC query results |
| VS House | `vs-house` | Built app + audit + scrapes | Missing from MC query results |
| Da Baffone Cucina Italiana | `da-baffone` | Built app + audit | MC currently says `ready_for_outreach`; local build exists |
| El Molino Mexican Restaurant | `el-molino` | Built app + audit + scrapes | MC currently says `pitched`; local build exists |

## Current Active Research / Build Slots

These are the two near-term slots to carry forward before opening the new
wide-net queue.

### 1. Mary's Mexican Grill - Woodstock

- **Local slug:** `marys-mexican-grill`
- **Local state:** audit, scrapes, and screenshots exist; no Next app build yet.
- **Recommended MC state:** current active build/research slot.
- **Route:** `bamzi-01` hue-swap with Latin casual guardrails, or hold for the
  dedicated Latin casual template if photo/register checks reject the fit.
- **Pitch hook:** official path showed a setup/unfinished ordering page while
  public review proof is strong.

### 2. Winestock Market & Lounge - Woodstock

- **Local slug:** `winestock`
- **Local state:** scrapes and screenshots exist; no full audit or Next app
  build yet.
- **Recommended MC state:** current active research/build slot after Mary's.
- **Route:** `bramble-01`, adjusted wine-forward.
- **Pitch hook:** official domain says the new online experience is still being
  built; the concept needs menu, wine, events, group nights, and visit routing.

## Next 15 Fresh Builds

This is the recommended forward queue after the two active slots above. It
combines the wide-net A-tier list with the local geography list, then demotes
candidates whose owned sites looked less broken on spot check.

| Rank | Restaurant | Area | Route | Reason / guardrail |
|---:|---|---|---|---|
| 1 | Pa Lian Burmese Restaurant | Wheaton | `bamzi-01` adapted | Rare cuisine, strong reputation, no real owned story/menu path. Keep it warm and specific, not generic pan-Asian. |
| 2 | Gaylord Fine Indian Cuisine | Schaumburg | `bamzi-01` or `labrisa-01` | Historic domain was account-suspended; verify ownership/domain control before outreach. |
| 3 | Ordo | Highland Park | `plate-01` / `bamzi-01` | Distinctive Russian/Uzbek/Middle Eastern concept; site exposed template debris and PDF/menu friction. |
| 4 | Big Ed's BBQ & Bar | Waukegan | rugged `plate-01` | Strong BBQ reputation; browser QA should confirm whether the rendered site is still weak enough. |
| 5 | Cafe Dacha | Highland Park | softened `gusto-01` / `plate-01` | Distinctive Ukrainian/Eastern European cuisine; pitch hidden story/menu, not a dead site. |
| 6 | Polka Dot Restaurant | Lake Zurich | heritage-casual `plate-01` | Official page says new website coming soon; good lunch/dinner/catering path. |
| 7 | Patina Wine Bar | Park Ridge | wine-forward `bramble-01` | Better economics than generic no-site leads; sell wine club, events, group nights, and visit routing. |
| 8 | Papa Marcos Restaurant | Waukegan | `bamzi-01` adapted / `plate-01` | Strong reputation with thin owned content path; choose route after photo/register check. |
| 9 | E&S Fish Company | St. Charles | downshifted `labrisa-01` / `plate-01` | Seafood market + restaurant use case; DNS/owned-domain recheck required before build. |
| 10 | Sushi Yoru | Lake Zurich | `bamzi-01` | High-rating no-owned-site sushi lead; verify no Facebook/Google-site official path. |
| 11 | Bosna Grill | Des Plaines | adapted `plate-01` | Distinctive Bosnian/Balkan cuisine, likely casual; keep pitch practical. |
| 12 | Ciao Baby! | Barrington | warmed-down `gusto-01` | Strong Barrington Italian/no-owned-site candidate; route down to `plate-01` if room photos read very casual. |
| 13 | Lao and Thai Spicy Noodle | South Elgin | adapted `bamzi-01` | Distinctive cuisine and no owned site; menu-first, direct, practical build. |
| 14 | Street Food Kingz | Elgin | `bamzi-01` / Latin casual guardrails | Order-shell lead with distinctive Puerto Rican angle; avoid over-premium treatment. |
| 15 | Sagano Japanese Restaurant | Barrington | `bamzi-01` | Long-running sushi lead; manual photo/menu verification before build. |

## Demoted From Immediate 15

These remain useful bench leads, but they should not consume the next build
slot before a fresh verification pass.

- **Da Local Boy Cafe** - hard 404 signal existed, but operation/room model
  needs more verification.
- **Egg House** - owned site appears more functional than the initial triage
  suggested; only build if menu proof is findable and the upgrade is clear.
- **Ttowa Korean Bistro** - current site is thin/PDF-based but not as broken as
  the hard-failure group.
- **Daruma Restaurant** - wrong-domain/entity risk; manual ownership check
  required.

## Source Docs

- `wide-net-a-tier-bad-no-site-leads-2026-05-01.md`
- `next-15-bad-no-site-leads-2026-05-01.md`
- `woodstock-barrington-elgin-area-leads-2026-05-01.md`
- `build-queue.md`
