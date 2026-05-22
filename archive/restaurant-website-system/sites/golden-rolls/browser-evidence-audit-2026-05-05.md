# Golden Rolls — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `c98d74ad-1a44-4df4-b313-bd20d675ae71`
- Lead ID: `e5048ba5-21d5-4400-8673-f92e16954560`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; current-site audit has desktop/mobile screenshots, DOM/text snapshots, menu proof, location-hours proof, and supporting public review/directory screenshots.

## Browser availability

OpenClaw managed Chrome is available on this host as of this run. The previous `No supported browser found` blocker is stale for local evidence capture.

## Official site captures

- Homepage desktop/mobile screenshots: `screenshots/home-desktop-2026-05-05.png`, `screenshots/home-mobile-2026-05-05.png`
- Homepage DOM/text snapshots: `scrapes/home-desktop-2026-05-05.html`, `scrapes/home-mobile-2026-05-05.html`
- Full menu desktop/mobile screenshots: `screenshots/full-menu-desktop-2026-05-05.png`, `screenshots/full-menu-mobile-2026-05-05.png`
- Full menu DOM/text snapshots: `scrapes/full-menu-desktop-2026-05-05.html`, `scrapes/full-menu-mobile-2026-05-05.html`
- Location & Hours desktop/mobile screenshots: `screenshots/location-hours-desktop-2026-05-05.png`, `screenshots/location-hours-mobile-2026-05-05.png`
- Location & Hours DOM/text snapshots: `scrapes/location-hours-desktop-2026-05-05.html`, `scrapes/location-hours-mobile-2026-05-05.html`
- Manifest: `scrapes/browser-audit-manifest-2026-05-05.json`

## What changed from the first audit

The official site is not just a sparse welcome page in a real browser. Browser evidence shows a WordPress site with a large navigation menu, image-heavy homepage, full-menu page, and category pages. The full menu is crawlable in-browser and contains detailed menu/pricing content such as hot appetizers, soups/salads, sushi entrées, entrées, rolls, special rolls, lunch, drinks, and dessert.

The site still has sellable gaps: the location-hours page rendered with almost no crawlable location/hour text in the captured browser text, the homepage conversion path is weak, the mobile navigation is dense, and the brand presentation feels dated compared with the restaurant's off-site proof.

## Public proof captures

- Restaurantji screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`
- Roost/directory proof screenshot/text: `screenshots/roost-proof-desktop-2026-05-05.png`, `scrapes/roost-proof-desktop-2026-05-05.txt`
- Public proof manifest: `scrapes/public-proof-manifest-2026-05-05.json`

Restaurantji currently shows Golden Rolls at 4.7 from 187 ratings with Sushi Bars/Japanese category, 790 S Eastwood Dr, Woodstock, `(815) 308-5099`, order/menu links, and customer favorites including Soft Shell Crab Roll, Sashimi Yellowtail, Caterpillar Roll, Chicken Teriyaki, Golden Shrimp, Tempura Roll, Godzilla Roll, Spider Roll, Crab Cakes, and Miso Soup. Roost corroborates a chill Japanese bistro with a bar, creative sushi rolls, noodles, teriyaki, dine-in, curbside pickup, and delivery.

## Audit gate status

Local audit evidence for the canonical `auditing` gate is now sufficient to move Golden Rolls to the `reviews` gate. Mission Control still needs API writeback before later gates start; this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL, so the stage transition payload is prepared but not submitted.
