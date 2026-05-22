# Your Sister's Tomato — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `your-sisters-tomato`
- MC parent task: `779ffaee-407f-4ad1-a87c-cece1392a57c`
- Lead ID: `3ffa966a-0590-479f-9ef3-e3380b2dc751`
- Restaurant: Your Sister's Tomato, Woodstock, IL
- Possible official domain: `https://yoursisterstomato.com/`
- Address found: `110 Irving Ave, Woodstock, IL`
- Phone found: `(815) 482-8092`
- MC rating/review count: `4.6`, `530 reviews`

## Source status

Your Sister's Tomato is not a clean broken/no-site lead. MC notes describe it as a highly rated Neapolitan wood-fired pizza business with food-truck origins, but the local qualification doc explicitly says it is **not a priority** because direct search found a working site with restaurant, food-truck, and event content and the restaurant is seasonally/temporarily closed during food-truck season.

The current fetch pass hit `403 Forbidden` on `yoursisterstomato.com`, so this environment cannot inspect the official site content. That 403 by itself is not enough to call the site broken, because the qualification research says a direct search/browser check showed a working site.

## Public proof captured

### MC / lead record

- Lead ID: `3ffa966a-0590-479f-9ef3-e3380b2dc751`.
- Name: Your Sisters Tomato / Your Sister's Tomato.
- City/state: Woodstock, IL.
- Phone: `(815) 482-8092`.
- Google-style score in MC: `4.6`, `530` reviews.
- Notes: `Highly-rated Neapolitan wood-fired pizza, 5.0 on TripAdvisor, strong growth from food truck origins.`

### Official domain fetch attempts

- `https://yoursisterstomato.com/` returned `403 Forbidden` in web fetch and Python fetch, even with a browser-like User-Agent.
- `https://www.yoursisterstomato.com/` returned `403 Forbidden`.
- `http://yoursisterstomato.com/` returned `403 Forbidden`.
- Treat this as a technical scrape/browser-access blocker, not proof of a dead site.

### Restaurantji

- URL: `https://www.restaurantji.com/il/woodstock/your-sisters-tomato-/`
- Title: `Your Sister's Tomato, Woodstock - Menu, Reviews (152), Photos (55)`.
- Categories: Pizza, Food Trucks, Vegan.
- Rating evidence: `4.6` from `152 ratings`.
- Address: `110 Irving Ave, Woodstock`.
- Phone: `(815) 482-8092`.
- Favorites surfaced: Fresh Baked Wood Fired Bread, Fresh Squeezed Lemonade, Bacon Balsamic Pizza, Margherita Pizza, Get a Pear Pizza, Pepperoni Pizza, Caesar Salad, Sausage Pizza, Great Pizza, House Salad.
- Hours shown as closed every day, consistent with the qualification note that the restaurant can be seasonally/temporarily closed during food-truck season.

### TripAdvisor

- MC/qualification notes mention `5.0 on TripAdvisor`.
- Direct TripAdvisor fetch was blocked by JS/ad-blocker requirements, so this has not been independently captured in this audit.

### Restaurant Guru

- A guessed Restaurant Guru URL did not resolve to a Your Sister's Tomato profile and returned a generic page-not-found result. Do not treat Restaurant Guru as confirmed evidence unless browser/search finds the correct profile.

## Audit findings

1. **Not a priority broken-site lead:** qualification research explicitly demotes this lead because direct search found a working site with restaurant, food-truck, and event content.
2. **Fetch-access issue:** the likely official domain returns `403 Forbidden` to this environment. This could be bot protection/server config; it is not enough to pitch the owner as if the site is gone.
3. **Seasonality/status risk:** Restaurantji shows closed every day and qualification says seasonal/temporary closure during food-truck season. Outreach/build timing must respect this.
4. **Strong real-business proof:** 4.6+ rating evidence, 530 MC review count, wood-fired Neapolitan pizza, food-truck/event roots, and specific menu favorites make it a strong business — just not a clear urgent rebuild target.
5. **Route if ever built:** `cuisine-01` / Cuisine is the safest current archetype: warm, approachable neighborhood clarity for a food-truck-to-wood-fired-pizzeria brand. Do **not** force faux luxury or generic premium pizza styling. If later site/photos prove a more editorial chef-driven identity, reconsider Roma, but do not blend archetypes.

## Required browser evidence blocker

OpenClaw managed browser is unavailable/cooling down after repeated failures (`No supported browser found`), so this audit currently has source/fetch evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before any build/outreach decision, capture:

- browser screenshots and DOM/text snapshot of `yoursisterstomato.com` to confirm the working official site and its restaurant/food-truck/event content
- Google/Maps profile screenshot verifying current website field, hours, seasonality/open status, address, and review count
- Highest-filter 30 written Google review packet
- TripAdvisor screenshot/source if the 5.0 claim is going to be used in a pitch
- Restaurantji screenshot showing menu favorites, categories, rating, and closed-hours status

## Current recommendation

Do not move this into active build unless Ethan/Mission Control explicitly wants a nurture/improvement pitch instead of a hard broken-site pitch. The honest current stance is: **strong restaurant, likely working site, seasonality caveat, and no urgent rebuild claim yet.** Keep as nurture/verify unless browser evidence proves the official site has a serious owner-visible problem beyond fetch 403.
