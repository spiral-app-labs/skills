# La Hacienda Mexican Restaurant — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `fd7f4976-daac-42aa-8c9a-1ddb09a9d12f`
- Lead ID: `7cba3fe2-8f65-4516-b46b-05c2c07ab235`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; current-site audit has desktop/mobile screenshots, DOM/text snapshots, Google/search proof, and supporting directory screenshots.

## Browser availability

OpenClaw managed Chrome is available on this host as of this run. The previous `No supported browser found` blocker is stale for local evidence capture.

## Official / current-site captures

La Hacienda's current website path is a Canva design/menu viewer, not a conventional first-party restaurant site. It now renders in browser and exposes menu text to the browser accessibility/text layer, but it still functions as an embedded menu deck rather than a full restaurant homepage.

Captured evidence:

- Canva menu desktop/mobile screenshots: `screenshots/canva-menu-desktop-2026-05-05.png`, `screenshots/canva-menu-mobile-2026-05-05.png`
- Canva menu DOM/text snapshots: `scrapes/canva-menu-desktop-2026-05-05.html`, `scrapes/canva-menu-desktop-2026-05-05.txt`, `scrapes/canva-menu-mobile-2026-05-05.html`, `scrapes/canva-menu-mobile-2026-05-05.txt`
- Manifest/status checks: `scrapes/browser-audit-manifest-2026-05-05.json`

Useful facts visible in the Canva/browser text include `LA HACIENDA MEXICAN RESTAURANT`, `411 E MAIN ST, EAST DUNDEE, IL 60118`, `PHONE #:847-426-0506`, daily specials, tacos, burritos, tortas, enchiladas, and parrillada. The limitation is not that nothing is visible in a modern browser; the limitation is that the guest experience is a Canva document viewer with weak conversion structure, no true homepage, no mapped hours module, no SEO-friendly restaurant narrative, and no owner-controlled landing path for call/directions/order.

## Public proof captures

- Google search/local pack screenshot/text: `screenshots/google-search-desktop-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`
- Restaurantji screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`
- Roost/directory proof screenshot/text: `screenshots/roost-proof-desktop-2026-05-05.png`, `scrapes/roost-proof-desktop-2026-05-05.txt`

Google search currently shows La Hacienda Mexican Restaurant at 4.3 from 530 Google reviews, `411 E Main St, East Dundee, IL 60118`, Mexican restaurant, closed/open-hours state, and menu highlights including fajitas, tacos, burritos, horchata, and salsa. Restaurantji shows 4.2 from 134 ratings, Mexican category, address, phone, hours, Website/Order Online links, and favorites such as chile relleno burrito, huevos rancheros with steak, al pastor taco dinner, carne tampiqueña, guacamole, and chimichanga dinner. Roost corroborates 4.3 from 473 reviews, dine-in, drive-through, delivery, address, phone, hours, and a large menu/pricing corpus.

## Audit gate status

Local audit evidence for the canonical `auditing` gate is now sufficient to move La Hacienda to the `reviews` gate. Mission Control still needs agency API writeback before later gates start; this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL, so the stage-transition payload is prepared but not submitted.
