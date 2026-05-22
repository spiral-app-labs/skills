# Mackey's Hideout — Routing / Template Decision

- Date: 2026-05-05
- Site slug: `mackey-s-hideout`
- Lead ID: `742a8ab1-4205-49e0-9206-b97700045a79`
- MC parent task ID: `503320f6-a3e2-4286-887b-a7900ffaaed8`
- Canonical local stage: `reviews` until Mission Control replay catches up
- Routing artifact status: prepared locally; do **not** mark canonical routing complete in MC until audit and reviews payloads have landed in order

## Decision

Use exactly one archetype: **`bramble-01`**.

Use it as a **Bramble roadhouse / live-music bar variant**, not as an upscale cocktail lounge and not as a conventional restaurant-menu build.

## Why Bramble fits

Mackey's Hideout is publicly proven as a bar and live-music venue first:

- Official site title and content center on `Live Music` and a long 2026 show schedule.
- Official site exposes weekly open mic and karaoke rhythms plus TicketWeb links for larger outdoor events.
- Google/Restaurantji/Restaurant Guru proof frames the business as a bar/pub with craft beer, whiskey/bourbon, live music, karaoke, open mic, friendly staff, regulars, and a roadhouse/dive-bar atmosphere.
- Highest-filter Google reviews repeatedly use language like hidden gem, dive bar, roadhouse, great live music venue, friendly staff, craft beer, karaoke, open mic, and worth the drive.
- Food evidence is real but inconsistent/secondary, so the build must avoid the clarity-menu-first patterns of Cuisine/Roma/Heaven Palate and instead use a bar/venue conversion model.

## Why the other archetypes do not fit

- **Heaven Palate:** too formal/luxury and reservation-led; Mackey's proof is informal, music-first, and bar-led.
- **Qitchen:** too architectural/high-design/omakase; no sushi or precision dining fit.
- **Bamzi:** could support cinematic nightlife, but Mackey's needs warmer roadhouse/live-music proof and direct weekly-rhythm clarity rather than dark-light restaurant narrative pacing.
- **Roma:** too chef-driven/editorial; Mackey's public proof is not chef/seasonal/menu-led.
- **Cuisine:** too family-neighborhood restaurant and menu-clarity-led; Mackey's is not a conventional restaurant-menu lead.

## Structural implications

Keep Bramble's structure as the source of truth:

- Big mood-first hero using real Mackey show/poster art.
- Music/bar CTAs instead of reservation/order CTAs.
- Horizontal/visual poster rhythm to communicate venue energy.
- Dark proof sections for the roadhouse/music pitch.
- Opening-times block only with provisional/clearly sourced hours until owner confirmation.
- Visit-planning flow focused on schedule, TicketWeb for verified outdoor shows, beer menu, phone, and directions.

## Required copy guardrails

- Say `bar`, `live-music venue`, `roadhouse`, `hideout`, `open mic`, `karaoke`, `craft beer`, and `friendly regulars` where supported by evidence.
- Do not say full restaurant, full menu, reservations, delivery, ordering, chef-driven, upscale cocktail lounge, or guaranteed live open status.
- Food language must stay conservative: frozen pizza, pizza/bar bites, or outside-food support only where evidence is cited.
- Ticket language must stay specific: TicketWeb is verified for Concert by the Creek/outdoor-show routing; do not imply every show is ticketed.
- Hours must remain reported/provisional until owner-confirmed.

## Evidence used

- `restaurant-website-system/sites/mackey-s-hideout/audit.md`
- `restaurant-website-system/sites/mackey-s-hideout/browser-evidence-audit-2026-05-05.md`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/google-reviews-highest-30-2026-05-05.md`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/google-reviews-highest-30-2026-05-05.json`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/google-reviews-highest-2026-05-05.png`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/official-live-music-desktop-2026-05-05.png`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/official-live-music-mobile-2026-05-05.png`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/official-live-music-desktop-2026-05-05.txt`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/restaurantji-desktop-2026-05-05.txt`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/restaurantguru-desktop-2026-05-05.txt`

## Prepared but not canonical

A local `bramble-01` scaffold already exists and smoke-QA screenshots are captured, but this routing artifact is still a prepared local artifact because Mission Control has not accepted the prerequisite audit and reviews writebacks in order.

When Mission Control auth is available:

1. Submit `mc-build-writeback-auditing-complete-2026-05-05.json`.
2. Verify MC advances to `reviews`.
3. Submit `mc-build-writeback-reviews-complete-2026-05-05.json`.
4. Verify MC advances to `routing`.
5. Then submit/attach the routing payload for this decision before treating build/fork work as canonical.
