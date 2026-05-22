# Strawberry Moon — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `strawberry-moon`
- MC parent task: `216314e9-4af6-4f99-92ab-54e7912b9173`
- Lead ID: `af98b880-9351-4f00-b35b-253ad35570d9`
- Bar/lounge: Strawberry Moon, Wauconda, IL
- Official site: `https://strawberrymoonmartinisandmore.weebly.com/`
- Address found: `204 S Main St, Wauconda, IL 60084`
- Phone found: `847-865-5151`

## Source status

Strawberry Moon has an official Weebly site. It is not dead, but it is thin and dated for a martini/live-music lounge. It gives the basic facts, images, and a short brand description, but the owned experience does not strongly package the lounge mood, martini program, live music/events, seating policy, small plates/desserts, or conversion paths.

The pitch hook is therefore softer than a broken-site lead: **Strawberry Moon already has a functioning site, but it feels lightweight for a cozy martini/music/date-night lounge and undersells the experience that public reviews describe.**

## Public proof captured

### Official Weebly site

- URL: `https://strawberrymoonmartinisandmore.weebly.com/`
- Title: `Strawberry Moon - Martini Bar Wauconda, IL`.
- Current core copy:
  - `Strawberry Moon`
  - `Open Tuesday - Saturday 4 pm`
  - `847-865-5151`
  - Updated seating policy: first-come, first-served basis.
  - `Behind the red door at Strawberry Moon you will find, martinis, wine and more. Delicious nibbles and decadent deserts. Live music by very talented musicians and performers, ranging from R&B to classic Rock & Roll.`
  - `We Have Live Music! See Entertainment Events page for schedule.`
- Location: `204 S Main Street, Wauconda, IL. 60084`.
- Hours: Tuesday–Saturday, open 4PM.
- Images are present as Weebly uploads, but crawlable copy is limited.
- Page references older Readers' Choice badges/assets and Pixelspin photo credits.

### Restaurantji

- URL: `https://www.restaurantji.com/il/wauconda/strawberry-moon-bar-/`
- Title: `Strawberry Moon, Wauconda - Menu, Reviews (108), Photos (28)`.
- Restaurantji summary describes a fun night-out spot with creative martinis, Strawberry Moon martini, dirty martini, weekly martinis, cheese/charcuterie, cheese fondue, attentive/fun staff, birthday hospitality, romantic date-night/friend-night atmosphere, live music, cozy ambiance, and chill-but-lively vibe.
- The fetched Restaurantji profile did not expose detailed address/hours in the same way as some other pages, so verify in browser/Google before final build.

### Restaurant Guru

- URL: `https://restaurantguru.com/Strawberry-Moon-Wauconda`
- Shows 112 photos/videos and Google-derived rating `4.7`.
- Summary mentions cheese fondue, crabs, seared tuna, pretzels, chocolate fondue, martinis, wine, beer, live music, professional staff, spectacular service, fair prices, and cozy atmosphere.
- Address: `204 S Main St, Wauconda, Illinois, USA`.
- Features: outdoor seating, credit cards accepted, takeaway, booking, wheelchair accessible, parking, TV; no delivery.
- Hours: Tuesday/Wednesday 4–9PM; Thursday 4–10PM; Friday/Saturday 4–11PM; Sunday/Monday closed.

### Google Maps / highest written reviews

- Google overview evidence shows `4.7` rating, `214` reviews, price range `$20–30`, category `Bar`, address/phone/site/menu links, and the same Wauconda location.
- Highest-rating review capture includes 30 written 5-star reviews in `scrapes/google-reviews-highest-30.json`.
- Repeated review themes: excellent martinis/craft cocktails, weekly martinis/martini flights, warm bartenders and owner hospitality, cozy/date-night/friend-night atmosphere, live music that is present but still conversation-friendly, upstairs/quiet seating, nibbles/appetizers/fondue/pretzels, and “gem in Wauconda” local-love language.
- Build implication: lead with martini-lounge warmth and live music, preserve the first-come seating policy, avoid inventing reservations/private-events beyond the real `Book an Event` path, and use review language as proof that the experience is intimate/cozy rather than loud nightclub or formal fine dining.

## Audit findings

1. **Soft site-quality gap:** official Weebly page works and has truthful facts, but it reads as a light brochure rather than a sellable lounge website.
2. **Experience under-sold:** off-site proof sells the actual reason to visit — martinis, fondue/small plates, date-night/friend-night atmosphere, live music, cozy room, upstairs seating, red-door identity — more strongly than the site does.
3. **Event path gap:** the site says to see Entertainment Events for schedule, but the fetched homepage does not make the current live-music calendar or event CTA feel immediate.
4. **Conversion gap:** the site should clearly present hours by day, first-come seating policy, phone, map/directions, events, signature drinks, private/event options if real, and a concise small-plates/dessert story.
5. **Route:** `velvet-shaker-01` warmed down per qualification. Core archetype mapping: **Bramble** — bar/lounge/nightlife personality, but specifically cozy martini lounge/date-night, not a loud tavern or formal fine cocktail concept.

## Browser evidence captured

OpenClaw browser/Chrome capture is working again. Canonical audit evidence now includes:

- desktop/mobile screenshots of the official Weebly homepage
- desktop/mobile screenshots of the Entertainment Events page
- browser DOM/text snapshots for homepage and events
- Google Maps overview screenshot verifying 4.7 rating, 214 reviews, address, website/menu links, phone, category, and service model
- Highest-rating Google review packet with 30 written review snippets plus review-panel screenshot

Evidence paths:

- `restaurant-website-system/sites/strawberry-moon/screenshots/current-home-desktop.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/current-home-mobile.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/current-events-desktop.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/current-events-mobile.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/google-profile-overview.png`
- `restaurant-website-system/sites/strawberry-moon/screenshots/google-reviews-highest.png`
- `restaurant-website-system/sites/strawberry-moon/scrapes/current-site-dom-snapshot.txt`
- `restaurant-website-system/sites/strawberry-moon/scrapes/current-site-home-dom.html`
- `restaurant-website-system/sites/strawberry-moon/scrapes/current-site-home-text.txt`
- `restaurant-website-system/sites/strawberry-moon/scrapes/current-site-events-dom.html`
- `restaurant-website-system/sites/strawberry-moon/scrapes/current-site-events-text.txt`
- `restaurant-website-system/sites/strawberry-moon/scrapes/google-reviews-highest-30.json`

## Current recommendation

Treat Strawberry Moon as a nurture/soft-redesign lead, not a hard broken-site lead. If built, the sell story should be about elevating an existing dated Weebly page into a warmer, more polished martini/lounge/event experience that sells the red door, live music, cozy date-night atmosphere, martinis, fondue/small plates, hours, and first-come seating — without overclaiming fine-dining or inventing private-event capabilities.

## Next build direction

Proceed to routing/building from `velvet-shaker-01` with **Bramble** as the archetype: intimate cocktail-lounge pacing, red-door/date-night mood, martini/fondue/menu proof, live-music calendar clarity, and strong CTAs for phone, directions, events, and first-come seating.
