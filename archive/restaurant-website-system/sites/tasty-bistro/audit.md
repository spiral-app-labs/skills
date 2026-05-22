# Tasty Bistro — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `tasty-bistro`
- MC parent task: `b19181d6-a00f-4d82-9c38-707c9dcb5372`
- Lead ID: `4a61843f-7ce4-42d1-9971-1452aa311c47`
- Restaurant: Tasty Bistro, Crystal Lake, IL
- Official domain: `http://www.tastybistrocl.com/`
- Address found: `394 W Virginia St, Crystal Lake, IL`
- Phone found: `(815) 919-5999`

## Source status

Tasty Bistro's official domain redirects to `https://www.orderonlinehub.com/tastybistro_hf98723g1bt5`. In the current fetch environment, that order app exposes only the generic title `Welcome To ooh order! - ooh order` and no useful crawlable restaurant content.

The pitch hook is therefore: **Tasty Bistro has real Asian/sushi/Thai/Chinese demand, but the official domain behaves like a JavaScript-only order app with almost no crawlable restaurant story, hours, address, phone, or menu depth.**

## Public proof captured

### Official/order domain

- URL: `http://www.tastybistrocl.com/`
- Redirect target: `https://www.orderonlinehub.com/tastybistro_hf98723g1bt5`.
- Fetched title/body: `Welcome To ooh order! - ooh order`.
- No crawlable restaurant details, menu categories, hours, address, phone, or brand story surfaced in web fetch.
- This may work with JavaScript in a real browser, but as a first-party restaurant homepage it is brittle and low-information for search and non-JS contexts.

### Restaurantji

- URL: `https://www.restaurantji.com/il/crystal-lake/tasty-bistro-/`
- Title: `TASTY BISTRO sushi,ramen, thai,chinese ., Crystal Lake - Menu, Reviews (157), Photos (56)`.
- Categories: Asian, Sushi Bars, Thai.
- Rating evidence: `4.4` from `157 ratings`.
- Address: `394 W Virginia St, Crystal Lake`.
- Phone: `(815) 919-5999`.
- Favorites surfaced: Chefs Special Sushi and Sashimi Combo, General TSO's Chicken, Sushi & Sashimi Combo, Shashimi Sampler Plate, Shrimp Tempura Roll, Crazy Salmon Roll, Fire Dragon Roll, California Roll, Orange Chicken, Crab Rangoon 4.
- Hours: Monday 11AM–9:30PM; Tuesday closed; Wednesday/Thursday 11AM–9:30PM; Friday/Saturday 11AM–10:30PM; Sunday 11:30AM–9PM.

### Restaurant Guru

- URL: `https://restaurantguru.com/Tasty-Bistro-Crystal-Lake`
- Shows 43 photos.
- Google-derived rating: `4.4`.
- Summary mentions Chinese and Japanese cuisines, shrimp tempura, edamame, dragon rolls, martinis, delivery, appealing staff, terrific service, fair prices, good decor, and peaceful atmosphere.
- Address: `394 W Virginia St, Crystal Lake, Illinois, USA`.
- Features: credit cards accepted, delivery, Wi-Fi, takeaway, booking, TV, wheelchair accessible.
- Important caution: Restaurant Guru currently displays `Temporarily closed` / `Updated 12 days ago`; this must be verified in Google/Maps/browser before build or outreach.

## Audit findings

1. **Owned-site/order-app gap:** official domain redirects into a JavaScript-only OrderOnlineHub flow with no useful crawlable restaurant content in fetch.
2. **Broad-cuisine clarity gap:** Tasty Bistro spans sushi, ramen, Thai, Chinese, and broader Asian dishes. The site needs a clear first-party structure so the cuisine stack feels intentional rather than confusing.
3. **Conversion gap:** address, phone, hours, delivery/takeaway, menu highlights, and trust proof are directory-led rather than controlled by the restaurant.
4. **Operational-status risk:** Restaurant Guru says temporarily closed. Do not build/deliver without confirming current open status from Google/Maps or another live source.
5. **Route:** `bamzi-01` per qualification, with room/photo verification required. Core archetype mapping: **Bamzi** for energetic pan-Asian/sushi pacing, but avoid over-premium sushi/omakase posture because the cuisine stack is broad and casual.

## Required browser evidence blocker

OpenClaw managed browser is unavailable/cooling down after repeated failures (`No supported browser found`), so this audit currently has web-fetch/source evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile screenshots of the OrderOnlineHub redirect/app behavior
- browser DOM/text snapshot for the official/order domain if possible
- Google/Maps profile screenshot to verify website field, open/closed status, address, and current hours
- screenshots of Restaurantji/Restaurant Guru proof pages
- Highest-filter 30 written Google review packet with evidence/screenshots

## Current recommendation

Proceed only as a conditional build candidate until current operating status is verified. If open, the sell story is strong: Tasty Bistro should not rely solely on a JavaScript-only order app as its public website. A better first-party site should preserve the order path while clearly presenting sushi, ramen, Thai/Chinese favorites, hours, address, phone, delivery/takeaway, and a coherent casual Asian bistro identity.


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured official/order-domain evidence:

- Official domain `http://www.tastybistrocl.com/` redirects to `https://www.orderonlinehub.com/tastybistro_hf98723g1bt5`. Browser screenshots and DOM/text snapshots were captured for desktop/mobile.
- In real browser context the OrderOnlineHub app now renders a restaurant menu, but the app points to `630 Northwest Hwy, Cary IL 60013` and includes a notice that March 2 was the final day of operation, starting March 3, with copy truncated in the app.
- The order app exposes broad sushi/Thai/Chinese/Japanese menu depth, but it is not evidence that the original Crystal Lake location remains open.

Captured operating-status evidence:

- Google mobile shows the Crystal Lake profile at 4.4 from 331 reviews and explicitly says the Crystal Lake physical location has closed and merged with sister restaurant Tasty Sushi in Cary, with food/staff moved to `630 Northwest Highway`. It marks the Crystal Lake profile `Temporarily closed`.
- Google desktop/search results include Patch, Daily Herald, and Shaw Local closure/consolidation coverage from February/March 2026.
- Marketplace/order search points to Cary/Tasty Sushi ordering and a Facebook snippet that ordering from Tasty Bistro through Uber/DoorDash will no longer be available starting May 1, 2026.
- Restaurant Guru also marks the Crystal Lake profile `Temporarily closed`.

Captured directory proof:

- Restaurantji desktop/mobile screenshots and text still preserve historical Crystal Lake proof: 4.4 from 157 ratings, Asian/Sushi Bars/Thai categories, address, phone, and menu favorites.
- Restaurant Guru screenshot/text captures 4.4 Google-derived proof and historical menu/service/decor notes, but also the `Temporarily closed` status.

Updated audit interpretation: Tasty Bistro is not executable as a Crystal Lake website build right now. The canonical audit evidence is complete, but the workflow should be marked `blocked` until Mission Control/founder decides whether to retire the Crystal Lake lead or create a new Tasty Sushi/Cary workflow. Do not advance to Google review packet or build for this Crystal Lake lead.

Local canonical status: `blocked`, pending Mission Control writeback.
