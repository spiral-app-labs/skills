# Mago Grill & Cantina Arlington Heights - Current Site Audit - 2026-05-25

Mission Control:
- Lead ID: 9f51aee6-40da-4338-af67-56c7a02c7304
- Root task ID: 66bad43e-c2f7-4bd5-a392-4dcc510afe09
- Child task ID: 5b722c95-c0da-41ed-81e3-8096f7cb121b
- Workflow step: current_site_audit
- Build stage: auditing

## Inputs Collected

Browser-opened current site:
- Desktop Arlington Heights screenshot: `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-home-desktop-full.png`
- Desktop About screenshot: `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-about-desktop-full.png`
- Desktop Menus screenshot: `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-menus-desktop-full.png`
- Desktop Group Dining screenshot: `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-group-dining-desktop-full.png`
- Desktop Order Online screenshot: `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-order-online-desktop-full.png`
- Mobile full-page screenshot: `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-mobile-full.png`
- Mobile first-fold screenshot: `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-mobile-fold.png`

Scrapes:
- `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-home.txt`
- `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-about.txt`
- `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-menus.txt`
- `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-group-dining.txt`
- `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-order-online.txt`
- HTML snapshots are saved beside each text scrape.

Supporting source evidence:
- `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/qualification.md`
- `restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/qualification.json`
- https://www.magogrill.com/arlington-heights/
- https://www.magogrill.com/about/
- https://www.magogrill.com/group-dining/
- https://www.magogrill.com/menus/
- https://www.magogrill.com/order-online/

The dedicated browser-automation skill is missing locally. I used Playwright Chromium browser captures and saved DOM/text snapshots. The restaurant-website-audit skill's older hard gate asks for Google Reviews in the same audit, but Mission Control currently splits that into the next `google_reviews_capture` gate; this audit intentionally stops at current-site evidence and leaves Google Highest 30-review capture for the next gate.

## Verbatim Site Findings

| Field | Finding |
| --- | --- |
| Platform | BentoBox-powered restaurant site with a persistent left desktop rail and a mobile hamburger header. |
| Brand/name | Page and hero say `ARLINGTON HEIGHTS`; logo uses `MAGO`; footer/nav use Mago Grill brand. |
| Hero | Location page hero uses a dim dining-room/private-room photo with a large `ARLINGTON HEIGHTS` title and `IN THE METROPOLIS PERFORMING ARTS BUILDING`. |
| First-viewport conversion | Desktop left rail exposes Reserve, Order Online, Group Dining, Order Catering, Gift Cards, Contact, and social icons. Mobile first fold shows logo, hamburger, hero, and a large Reserve button near the fold. |
| Location details | Page lists 115 W Campbell St, Arlington Heights, IL 60005; phone 847.253.2222; Monday-Thursday 11AM-10PM; Friday-Saturday 11AM-11PM; Sunday 11AM-9PM; holiday hours may vary. |
| Room/location proof | Location page says it is in the Metropolis Performing Arts Centre Building in downtown Arlington Heights and features two dining rooms and sidewalk seating. |
| Chef/story | About page names Executive Chef Juan Luis Gonzalez, award-winning chefs Juan Luis Gonzalez and Ric Munoz, family recipes, Grandma Paula's recipes, Mexico roots, authentic/festive positioning, and over 200 premium 100% blue agave tequilas. |
| Menus | Menus page is live HTML and starts with From the Bar. It includes Margarita Flight, Rojas Flight, tequila flights, cristalinos, celebrity-backed tequilas, De La Casa tequilas, mezcal, beers, sangria, zero-proof drinks, and dinner/group/catering/dessert/specials tabs. |
| Order online | Official order page says choose a location, call for personal assistance, and offers `CALL US` and `ORDER MAGO DIRECT` for Arlington Heights, Bolingbrook, and South Barrington. |
| Group dining | Group Dining page says "Plan your next fiesta," up to 100 guests, authentic Mexican family-style menu and bar packages, event planning assistance, and an Arlington Heights `Fiesta Room` for 20-100 guests. |
| Private/event hook | Group dining surfaces the strongest Arlington Heights event-specific claim, but it is not present in the location-page first viewport. |
| Reviews on site | No homepage/location-page review strip, rating proof, OpenTable proof, or guest quote block was visible in the captured current-site flow. |
| Contact email | Location page has an email icon; page markup exposed a mailto link that decodes to info@fwhg.com. Verify before outreach. |
| Visual assets | Current site has real room, food, drink, logo, menu, and group-room imagery. Location hero is room-first, not food/drink-first. |

## Mobile State

1. Hero first paint: the mobile first fold shows the logo, hamburger, dining-room hero, `ARLINGTON HEIGHTS`, and `IN THE METROPOLIS PERFORMING ARTS BUILDING`. It establishes place, but not food, margaritas, tequila, tableside guacamole, group dining, or review proof.
   - Evidence: `screenshots/current-site-mobile-fold.png`

2. CTA priority: the first mobile action is Reserve. Online order, call, directions, menus, and private events are hidden behind navigation or below the fold. This is usable, but it does not match the restaurant's multiple revenue paths.
   - Evidence: `screenshots/current-site-mobile-fold.png`

3. Location page depth: the mobile page is short and operationally clean, but it gives away too little of the menu/story before asking for a reservation. The About and Menus content is strong but separated from the location first impression.
   - Evidence: `screenshots/current-site-mobile-full.png`; `scrapes/current-site-about.txt`; `scrapes/current-site-menus.txt`

4. Group-dining conversion: the Arlington Heights Fiesta Room and up-to-100 guest event proof is valuable, but it is buried on the Group Dining page rather than previewed on the location page.
   - Evidence: `scrapes/current-site-group-dining.txt`

## Current-Site Opportunities

1. Build a stronger first-screen story. The current page identifies the location but does not immediately sell the meal: chef-driven Mexican food, tableside guacamole, margaritas, 200-plus tequilas, downtown dinner, patio/sidewalk seating, and review proof should appear before or beside Reserve.

2. Preserve the clean BentoBox conversion paths, but improve hierarchy. Reserve is visible, order and call are present, and group/catering pages exist. The redesign should make Reserve, Order, Call, Directions, and Private Events readable as distinct paths instead of scattering them across the rail and subpages.

3. Surface Mago's strongest owner-sellable proof earlier. The site already has the chef story, Grandma Paula/family recipe language, tequila depth, and event-room proof; the Arlington Heights page just does not package those into a location-specific pitch.

4. Add review and trust proof to the first scroll. Mission Control seed and public sources show enough review volume to justify a proof strip, but exact Google quotes must wait for the next Google Reviews gate.

5. Use food and drink imagery earlier. The current location hero is a room shot. That helps prove the space, but the first impression would be more appetite-led with margaritas, guacamole, composed Mexican plates, and one Arlington Heights room/patio support shot.

6. Turn group dining into a business path. "Fiesta Room," 20-100 guest capacity, family-style menu, bar packages, and event planning assistance are strong conversion hooks for office parties and celebrations.

## Strategic Principle Violations

- Principle 1.1 - conversion surface matches revenue reality: UNDERSELLS. Reserve is cleanly surfaced, but order, call, directions, events, catering, and group dining do not get a clear first-screen decision surface.
- Principle 1.2 - aesthetic must match the bill: PARTIAL. The site feels polished and operational, but the location first impression is too quiet for a tequila/cantina concept with strong food, drink, and group revenue signals.
- Principle 3.1 - reviews placement reveals positioning: MISSED. Captured pages do not show a strong rating/review wall, even though the lead has high public proof.
- Principle 3.3 - chef as brand: HIDDEN. Chef Juan Luis Gonzalez, Chef Ric Munoz, Grandma Paula family recipes, and the 200-plus tequila story are on About, not in the location conversion path.
- Principle 4.1 - sub-page count and operational signals: MIXED. The site has the right pages, but the best signals are split across About, Menus, Group Dining, Order Online, and Location instead of being summarized where a high-intent visitor lands.
- Principle 5.4 - mobile first-viewport floor: UNDERSELLS. Mobile is not broken, but the first fold is place-first and reserve-first, with no food/drink proof and no visible review proof.
- Principle 10 - aliveness layer: WEAK. The captured flow has menus and event info, but no current seasonal/event prompt, review quote, featured margarita, featured dish, or owner note.

## Photography / Asset Inventory

| Source | Dish shots | Interior shots | Chef portrait | Exterior | Detail / process |
| --- | ---: | ---: | ---: | ---: | ---: |
| Current site/browser capture | 10+ visible food/drink/menu images across captured pages | Several dining-room/group-room images | 0 found in capture | 0 found in capture | Tequila/menu/drink detail cues |
| Official menus/group pages | Drink/menu imagery and event-room visuals | Yes | 0 found | 0 found | Bar and group-dining details |
| Public Google/aggregator sources | Many public food/interior/exterior photos likely available, not yet inventoried in this gate | Yes | Unknown | Yes | Unknown |
| Instagram/Facebook/TikTok | Links exist but content not inventoried in this gate | Unknown | Unknown | Unknown | Unknown |
| Owner-supplied | None | None | None | None | None |

Photography tier verdict: Tier-2 ready from current-site food/drink/room evidence, with Bramble the safest template hypothesis. Tier-1 fine-dining or a highly cinematic route would need a stronger owner-approved photo set and would risk overselling the real restaurant.

## Structured Lead Metadata

```json
{
  "owner_name": null,
  "owner_email": null,
  "contact_email": "info@fwhg.com, from official page mailto markup; verify before outreach",
  "phone": "847.253.2222",
  "hours": "Official Arlington Heights page: Monday-Thursday 11AM-10PM, Friday-Saturday 11AM-11PM, Sunday 11AM-9PM, holiday hours may vary.",
  "address_location": "115 W Campbell St, Arlington Heights, IL 60005",
  "website_url": "https://www.magogrill.com/arlington-heights/",
  "order_url": "https://www.magogrill.com/order-online/",
  "reservation_url": "https://www.magogrill.com/arlington-heights/ and embedded reservation widget; OpenTable supporting profile: https://www.opentable.com/r/mago-grill-and-cantina-arlington-heights",
  "catering_events_url": "https://www.magogrill.com/group-dining/ and https://www.magogrill.com/catering/",
  "google_rating": 4.4,
  "google_review_count": 1627,
  "metadata_source_notes": "Location, phone, hours, order route, reserve widget, menus, About/chef story, and group dining came from Playwright browser evidence on the official site. Google rating/count are from Mission Control seed and must be reverified during google_reviews_capture.",
  "outreach_email_draft_path": null,
  "outreach_email_draft_status": "not_created"
}
```

## Status

Current-site audit is complete for Mission Control's `current_site_audit` gate. The next gate should capture Google Reviews in a browser with Highest selected and 30 written reviews or a truthful shortage/blocker.
