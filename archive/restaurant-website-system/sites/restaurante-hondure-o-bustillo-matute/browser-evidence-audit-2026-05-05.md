# Restaurante Hondureño Bustillo Matute — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `cc4330f0-b3e9-4ed5-8036-292649576916`
- Lead ID: `56fc8804-0359-4db2-b248-97e3e0191e32`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally; current-site audit has Google/Maps-style verification, desktop/mobile directory screenshots, DOM/text snapshots, and marketplace/search evidence.

## Browser availability

OpenClaw managed Chrome is available on this host as of this run. The previous `No supported browser found` blocker is stale for local evidence capture.

## Google / first-party-site verification

Captured evidence:

- Google desktop/mobile screenshots and text: `screenshots/google-search-desktop-2026-05-05.png`, `screenshots/google-search-mobile-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`, `scrapes/google-search-mobile-2026-05-05.txt`
- Marketplace search proof: `screenshots/doordash-search-desktop-2026-05-05.png`, `scrapes/doordash-search-desktop-2026-05-05.txt`

Google shows RESTAURANTE HONDUREÑO BUSTILLO MATUTE at 4.8 from 138 Google reviews, `4113 W Shamrock Ln, McHenry, IL 60050`, Honduran restaurant, phone `(779) 244-5791`, call/directions/website/order actions, and menu highlights including caldo de res, tamales, plátano relleno, fried sweet plantains with Honduran crema and queso duro, pollo con tajadas, filete de pescado, tamales de elote, and baliadas con huevo. The visible website result is Facebook, and DoorDash appears as an ordering path; this still supports the no-owned-domain story rather than a strong first-party website.

## Public proof captures

- Restaurantji desktop/mobile screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `screenshots/restaurantji-mobile-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`, `scrapes/restaurantji-mobile-2026-05-05.txt`
- Restaurant Guru screenshot/text: `screenshots/restaurantguru-desktop-2026-05-05.png`, `scrapes/restaurantguru-desktop-2026-05-05.txt`
- USA Restaurants screenshot/text: `screenshots/usa-restaurants-desktop-2026-05-05.png`, `scrapes/usa-restaurants-desktop-2026-05-05.txt`

Restaurantji shows 4.8 from 84 ratings, Honduran category, 10AM–9PM daily hours, delivery, vegetarian options, Wi-Fi, kids' menu, address, phone, and favorites such as pastelitos de maíz, tajadas con carne asada, enchiladas Hondureñas, yuca con chicharrón, burritas Hondureñas, baliadas, Modelo Especial, and plátano relleno. Restaurant Guru shows #9 of 130 restaurants in McHenry, 51 photos, Honduran cuisine, grilled beef, stewed steaks, asado, nice staff, good service, 4.8 Google-derived rating, Facebook website, and credit-card/takeaway/booking/wheelchair features. USA Restaurants captures owner/family/authenticity proof, hand-made flour tortillas for baleadas, pollo con tajadas, mantequilla/queso by the pound, fair prices, large portions, and family entrepreneurs in McHenry.

## Audit gate status

Local audit evidence for the canonical `auditing` gate is now sufficient to move Restaurante Hondureño Bustillo Matute to the `reviews` gate. Mission Control still needs agency API writeback before later gates start; this runtime is missing `AGENCY_AUTONOMY_API_KEY` and a trusted Mission Control base URL, so the stage-transition payload is prepared but not submitted.
