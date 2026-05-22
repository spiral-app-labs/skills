# Tin Man's Pub — Browser Evidence Audit

- Date: 2026-05-05
- MC parent task: `173436b8-bcc1-4ebd-85ac-44b2541409dc`
- Lead ID: `016b951a-6ed7-4687-ad56-3dd34d97a6ca`
- Canonical gate: `auditing`
- Result: browser blocker cleared locally, but the lead should be held/blocked rather than advanced to reviews/build because fit and reputation risk are materially weak.

## Browser availability

OpenClaw managed Chrome is available on this host. The previous `No supported browser found` blocker is stale for local evidence capture.

## Google / no-owned-site evidence

Captured evidence:

- Google desktop/mobile screenshots and text: `screenshots/google-search-desktop-2026-05-05.png`, `screenshots/google-search-mobile-2026-05-05.png`, `scrapes/google-search-desktop-2026-05-05.txt`, `scrapes/google-search-mobile-2026-05-05.txt`
- Menu/official-site search screenshot/text: `screenshots/menu-search-desktop-2026-05-05.png`, `scrapes/menu-search-desktop-2026-05-05.txt`

Google mobile shows a sparse Tinman's Pub profile at `926 IL-22, Fox River Grove, IL 60021`, located in Stone Hill Center, with only 3.2 from 6 Google reviews, no owned website, no phone shown in the profile summary, and prompts to add business hours / website. Desktop Google results surface Yelp, Tripadvisor, MapQuest, the Fox River Grove municipal listing, Apple Maps, SinglePlatform, Naturally McHenry County, Menuweb PDF, and Restaurant Guru — not a first-party site.

## Directory and reputation evidence

Captured evidence:

- Restaurantji desktop/mobile screenshot/text: `screenshots/restaurantji-desktop-2026-05-05.png`, `screenshots/restaurantji-mobile-2026-05-05.png`, `scrapes/restaurantji-desktop-2026-05-05.txt`, `scrapes/restaurantji-mobile-2026-05-05.txt`
- Wheree screenshot/text: `screenshots/wheree-desktop-2026-05-05.png`, `scrapes/wheree-desktop-2026-05-05.txt`
- Restaurant Guru search screenshot/text and direct profile screenshot/text: `screenshots/restaurantguru-search-desktop-2026-05-05.png`, `scrapes/restaurantguru-search-desktop-2026-05-05.txt`, `screenshots/restaurantguru-desktop-2026-05-05.png`, `scrapes/restaurantguru-desktop-2026-05-05.txt`

Restaurantji shows a stronger directory rating (4.7 from 66 ratings), Bars/Sports Bars/Pubs categories, address, phone, hours, delivery, outdoor seating, great cocktails, no reservations, and Bowl of Chili as the only surfaced favorite. However, the visible recent Restaurantji reviews are strongly negative/political and should not be used in pitch copy.

Wheree describes a casual sports bar / pub / pool hall with Diamond pool tables, generous portions, homemade dishes, friendly bartenders, free pool on Fridays, and a lively social setting, but its status check still returned a 403 checkpoint. Restaurant Guru direct profile shows 4.5 Google-derived proof from 109, 30 photos, beer, burgers, pool/gaming, parking, TV, Wi-Fi, outdoor seating, takeaway, and positive recent Google excerpts; its Google-search result also surfaces a negative AI overview describing this as a polarizing dive bar with controversial/political atmosphere reports.

## Audit gate status

Canonical browser evidence for `auditing` is complete, but this is a weak/conditional lead and should not advance to `reviews`, `routing`, or build work without Mission Control/founder decision. The no-owned-site opportunity is real, but the combined evidence shows low Google review count, inconsistent reputation signals, minimal menu proof, and a sports-pub/corner-bar fit that may not justify agency build capacity. Recommended local stage: `blocked` / hold for MC decision: skip/nurture vs. explicit stripped-down Bramble pub build.
