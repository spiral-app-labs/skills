# Mackey's Hideout — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `503320f6-a3e2-4286-887b-a7900ffaaed8`
- Lead ID: `742a8ab1-4205-49e0-9206-b97700045a79`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; current-site audit has desktop/mobile official-site screenshots, DOM/text snapshots, Google/search proof, and supporting directory screenshots.

## Browser availability

OpenClaw managed Chrome is available on this host as of this run. The previous `No supported browser found` blocker is stale for local evidence capture.

## Official site captures

Mackey's owned site is reachable in browser and strongly centered on a live-music schedule. It exposes navigation for Live Music, Beer Menu, Booking, About, Merch, Photos, and Home, then a long 2026 event list with Monday open mic, Wednesday karaoke, outdoor shows, and TicketWeb-style `Get Tickets` links.

Captured evidence:

- Official live-music desktop/mobile screenshots: `screenshots/official-live-music-desktop-2026-05-05.png`, `screenshots/official-live-music-mobile-2026-05-05.png`
- Official DOM/text snapshots: `scrapes/official-live-music-desktop-2026-05-05.html`, `scrapes/official-live-music-desktop-2026-05-05.txt`, `scrapes/official-live-music-mobile-2026-05-05.html`, `scrapes/official-live-music-mobile-2026-05-05.txt`
- Manifest/status checks: `scrapes/browser-audit-manifest-2026-05-05.json`

## Public proof captures

- Google search/local pack screenshot/text: `screenshots/google-search-desktop-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`
- Restaurantji screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`
- Restaurant Guru screenshot/text: `screenshots/restaurantguru-desktop-2026-05-05.png`, `scrapes/restaurantguru-desktop-2026-05-05.txt`

Google search currently shows Mackey's Hideout at 4.6 from 408 Google reviews, `2601 S River Rd, McHenry, IL 60051`, Bar category, craft beer/live music/karaoke/open mic proof, friendly staff, welcoming lively atmosphere, reasonable drink prices, and outside-food allowance. Restaurantji shows 4.7 from 155 ratings, Bars category, address, phone, hours, live music, wide drink selection, frozen pizzas, slots, darts, and stage. Restaurant Guru shows #1 pub/bar placements around McHenry/Island Lake/Holiday Hills/Burtons Bridge, 108 photos, 4.6 Google-derived rating, craft/draft beer, bourbon, pizza, cozy atmosphere, live music, karaoke, and website/Instagram proof.

## Audit gate status

Local audit evidence for the canonical `auditing` gate is now sufficient to move Mackey's Hideout to the `reviews` gate. Mission Control still needs agency API writeback before later gates start; this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL, so the stage-transition payload is prepared but not submitted.
