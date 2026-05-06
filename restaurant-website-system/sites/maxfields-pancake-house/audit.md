# Maxfield's Pancake House — Round 1 Current-Site / Public-Presence Audit

Date: 2026-05-06  
Site slug: `maxfields-pancake-house`  
Audit state: no preview exists yet; this is the original-site/public-presence audit.

## Summary

- The official domain currently fails: both `https://www.maxfieldschaumburg.com/` and `https://maxfieldschaumburg.com/` return HTTP 404 Wix `ConnectYourDomain` / “domain isn't connected to a website yet” errors. This is the headline sales problem.
- Public sources agree on the core business: Maxfield's is a Schaumburg breakfast/American/pancake-house restaurant at 700 E Schaumburg Rd with phone `(847) 781-0300`.
- There is meaningful demand/trust to preserve: Google Maps shows 4.5 with 983 reviews, Restaurantji shows 4.7 with 259 ratings, Yelp shows 3.7 with 268 reviews and 230 photos, and public snippets describe a long-running/family-owned breakfast-lunch identity.
- The current web presence is fragmented across Google, Yelp, Restaurantji, Chicago Northwest, Allmenus snippets, and search snippets. Google exposes order/menu actions, but the website/menu links point back to the broken `maxfieldschaumburg.com` domain, so there is no reliable owner-controlled menu/order/conversion hub visible from the live official domain.
- Hours conflict across public sources: Restaurantji shows split service on Wed-Sat, Yelp shows split hours for the checked day, and Chicago Northwest shows broader Sunday-Wednesday / Thursday-Saturday hours. The builder must not hard-code hours without owner or Google confirmation.
- Preliminary archetype: `Cuisine` is the likely route because this is a warm, family/casual neighborhood breakfast-lunch restaurant where clarity, menu confidence, hours, calls, directions, and approachable trust matter more than high-design drama. Lock this during the routing gate, not before Google/menu verification.

## What the old site / real business gets right

- Search demand exists for an official Maxfield's domain; the problem is that the destination is broken, not that the restaurant lacks public interest.
- The restaurant has a simple, strong local positioning: breakfast, American comfort food, pancakes, brunch/lunch, family restaurant.
- Public source trust is usable: Google Maps 4.5 / 983 reviews, Restaurantji 4.7 / 259 ratings, Yelp 3.7 / 268 reviews, Yelp photo depth, and Chicago Northwest tourism listing imagery.
- Address and phone are consistent across multiple sources: 700 E Schaumburg Rd, Schaumburg, IL 60194 and `(847) 781-0300`.
- Menu themes are attractive and specific enough to build around: pancakes, skillets, omelettes/eggs, French toast, corned beef hash, Eggs Benedict, steak and eggs, kid-friendly Mickey Mouse pancakes, burgers/sandwiches/wraps from snippets.
- Chicago Northwest lists breakfast, lunch, dinner, and takeout as amenities; that breadth should be verified and preserved if true.

## What the preview gets right

- No preview exists yet.
- The future preview should win immediately by doing the basics the current web presence fails at: connected official domain, mobile-first menu, clear hours, phone/directions CTA, photo-led trust, and one source of truth for visitors.

## Critical issues

- **Broken official domain:** the official domain returns a Wix domain connection error on desktop/mobile. This makes the business look abandoned or technically neglected at the exact moment a local diner is trying to choose breakfast/brunch.
- **No owner-controlled conversion path found:** no verified first-party online order, reservation, catering, or current menu URL surfaced from the live official domain. Third-party pages fill the gap.
- **Menu confidence is weak:** Restaurantji exposes favorites but says “Add a Menu,” while Allmenus appears in search as a menu source. A new site needs an owner-verified menu rather than scraped/third-party fragments.
- **Hours conflict across public sources:** Restaurantji/Yelp/Chicago Northwest do not perfectly match. This is a factual risk for any pitch/build until Google/owner confirmation.
- **Brand story is underused:** public snippets suggest family-owned / established 1998 / original Maxfield's, but the broken site means none of that credibility is being presented in a controlled way.
- **Photo strategy is fragmented:** Yelp and Chicago Northwest have photos, but the official web experience does not use them. Need permission-safe/source-safe imagery planning.
- **Local SEO regression risk:** the official domain has indexed search snippets, but the live page is 404/noindex-style Wix error. A rebuild must preserve and improve local search relevance.
- **No clear catering/group angle verified:** breakfast/lunch restaurants often have catering/group breakfast potential, but no source confirmed it here. Do not invent it; verify first.

## Specific improvement list

1. Reconnect or replace the official domain so `www.maxfieldschaumburg.com` and non-www both resolve to a real site with canonical redirects and no Wix error page.
2. Build a mobile-first homepage hero with the concrete local promise: Schaumburg breakfast/pancakes/American comfort food, not generic “fresh ingredients” restaurant filler.
3. Put call, directions, hours, and menu CTAs above the fold on mobile; phone should use `tel:8477810300`, directions should map to 700 E Schaumburg Rd.
4. Create an owner-verified menu structure before design: breakfast favorites, pancakes, skillets, omelettes/eggs, French toast, Benedicts, kids/family items, lunch/sandwiches/wraps, dinner only if verified.
5. Resolve hours before launch by checking Google Business Profile and/or owner confirmation; document source per hour field. Do not rely on conflicting directory hours alone.
6. Add a “local favorite since 1998 / family-owned” story section only if verified by owner or an official/public source strong enough for sales use; otherwise phrase it as public-source pending.
7. Use real food/exterior imagery from permission-safe sources or owner-provided photos. Avoid generic pancake stock because Yelp/Chicago Northwest prove real imagery exists.
8. Add review-proof modules using source-safe wording: e.g. “4.7 on Restaurantji from 259 ratings” if still current at build time; do not invent Google review counts before the reviews gate.
9. Create a clear “Plan your visit” band: address, parking/area cues if verified, phone, hours, Google Maps/directions, and takeout availability.
10. Add an explicit “current menu / prices may change” owner-controlled mechanism if pricing changes often; do not mirror stale Allmenus data blindly.
11. Add schema/local SEO basics: Restaurant schema, address, phone, cuisine categories, hours once verified, canonical domain, metadata targeting Schaumburg breakfast/brunch.
12. Make the pitch demo lead with the broken-domain before/after: screenshot of Wix error next to a polished breakfast homepage is the cleanest owner-facing proof.
13. Preserve third-party trust links where useful, but make the official site the canonical source so Yelp/Restaurantji/Chicago Northwest stop being the only web experience.
14. During routing, choose exactly one archetype. Current recommendation is `Cuisine`; use warm, clear, approachable layout rhythm rather than cinematic nightlife/luxury pacing.

## Sellability verdict

Highly sellable as a website-agency lead, but not pitch-ready as a completed website yet. The broken official domain creates an unusually clear pain point, and the restaurant has enough public trust/photo/menu signals to build a specific, credible breakfast-house redesign. The next build should focus on fixing owner-controlled basics first — domain, menu, hours, phone/directions, real photos, and review trust — before adding heavier polish.

## Evidence / artifact paths

- Domain scrape: `restaurant-website-system/sites/maxfields-pancake-house/scrapes/current-site-dom-snapshot.txt`
- Desktop domain screenshot: `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-desktop-wix-error.png`
- Mobile domain screenshot: `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-mobile-wix-error.png`
- Restaurantji screenshot: `restaurant-website-system/sites/maxfields-pancake-house/screenshots/public-source-restaurantji-desktop.png`
- Chicago Northwest screenshot: `restaurant-website-system/sites/maxfields-pancake-house/screenshots/public-source-chicago-northwest-desktop.png`
- MC writeback payload/blocker: `restaurant-website-system/sites/maxfields-pancake-house/mc-build-writeback-auditing-2026-05-06.json`

## Metadata extracted for MC / builder

- owner_name: `null`
- owner_email: `null`
- contact_email: `null`
- phone: `(847) 781-0300` (Restaurantji + Chicago Northwest)
- address_location: `700 E Schaumburg Rd, Schaumburg, IL 60194` (Restaurantji + Chicago Northwest)
- website_url: `https://www.maxfieldschaumburg.com/` (currently HTTP 404/Wix ConnectYourDomain)
- order_url: `null` (Google and Restaurantji expose order actions/proxies; no owner-controlled order URL verified)
- reservation_url: `null`
- catering_events_url: `null`
- google_rating: `4.5` (Google Maps overview captured; full Highest-sort 30-review packet still pending)
- google_review_count: `983` (Google Maps overview captured; full Highest-sort 30-review packet still pending)
- hours: conflicting across Restaurantji/Yelp/Chicago Northwest; verify before launch.

## Next gate

1. Sync/provision Mission Control once `AGENCY_AUTONOMY_API_KEY` or `OPENCLAW_WEBHOOK_SECRET` is available in the runtime.
2. Run Google Reviews gate: open Google Reviews, sort Highest, capture 30 written reviews and screenshots.
3. Route formally to one archetype, likely `Cuisine`, after reviews/menu/hour verification.
