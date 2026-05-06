# Mackey's Hideout Local Build Scaffold

- Date: 2026-05-05
- Site slug: `mackey-s-hideout`
- Template route: `bramble-01`
- Canonical stage remains: `reviews`
- Scope: local scaffold only; not Mission Control-complete and not delivered

## What this is

This artifact records a safe first-pass local fork of the `bramble-01` template into `restaurant-website-system/sites/mackey-s-hideout`.

This is not a claim that the canonical fork/build stage is complete. Mission Control writeback is still blocked, the replay order still matters, and the lead's official build stage must remain `reviews` until audit-first then reviews writeback is replayed and the downstream build gates are truthfully advanced.

## Personalization decisions

- Kept the `bramble-01` signature patterns recognizable: `HeroSlideshow`, `PolaroidStrip`, section background rhythm, opening-times block, and the music/bar register.
- Replaced template placeholder content with Mackey-specific `content.ts`.
- Changed the top header CTAs from reservation/menu language to truthful Mackey actions: `Shows` and `Beer`.
- Reworked the dark split section into Mackey proof/caution copy instead of gift cards/careers.
- Reworked the mailing-list block into action buttons for live music schedule, tickets, beer menu, and phone.
- Reworked the `/reserve` page into a truthful visit-planning page. No reservation claims remain in the user-facing flow.
- Used official/public Mackey image URLs already present in `scrapes/official-live-music-desktop-2026-05-05.html` for hero, polaroid, and break-image content.
- Kept food copy conservative. The scaffold does not imply a full kitchen or full restaurant ordering flow. Copy is limited to verified light-support language such as frozen pizza, pizza/bar bites, or outside-food-friendly support.
- Used the official homepage and official beer-menu page as the primary destination links.
- Used the TicketWeb outdoor-show ticket link only as a specific ticket CTA, not as a claim that every show is ticketed.
- Removed the live open/closed pill because reported hours are third-party and need owner confirmation before being used as real-time status logic.

## Evidence used

- `restaurant-website-system/sites/mackey-s-hideout/audit.md`
- `restaurant-website-system/sites/mackey-s-hideout/browser-evidence-audit-2026-05-05.md`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/official-live-music-desktop-2026-05-05.html`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/official-live-music-desktop-2026-05-05.txt`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/official-live-music-mobile-2026-05-05.txt`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/google-reviews-highest-30-2026-05-05.json`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/google-reviews-highest-30-2026-05-05.md`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/restaurantguru-desktop-2026-05-05.txt`
- `restaurant-website-system/sites/mackey-s-hideout/scrapes/restaurantji-desktop-2026-05-05.txt`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/google-reviews-highest-2026-05-05.png`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/official-live-music-desktop-2026-05-05.png`
- `restaurant-website-system/sites/mackey-s-hideout/screenshots/official-live-music-mobile-2026-05-05.png`

## Local verification

- `npm ci`: passed
  - Warning only: `next@14.2.15` deprecation/security notice from npm output.
- `npm run build`: passed
  - Follow-up fix applied first: removed `next/font/google` fetching because this runtime could not resolve `fonts.googleapis.com`. The scaffold now builds with the template's fallback font stack.
- `npm run typecheck`: passed
- `jq empty checklist.json`: pending final rerun after checklist update at the time this file was first drafted

## Remaining blockers before canonical build completion

- Mission Control replay is still blocked. `mc-build-writeback-auditing-complete-2026-05-05.json` must land before `mc-build-writeback-reviews-complete-2026-05-05.json`.
- Canonical stage must remain `reviews` until MC is caught up and the next gate is advanced truthfully.
- Owner-confirmed hours are still missing. Third-party hours are usable only as provisional copy and should not drive canonical live-status behavior yet.
- QA rounds 1-3 are not complete.
- No preview URL or delivery evidence package exists yet.
- No pitch doc or outreach draft exists yet.
- The scaffold has not been browser-QA'd locally after the build; it is a code/build scaffold, not a signed-off page.
