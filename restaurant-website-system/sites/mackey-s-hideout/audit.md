# Mackey's Hideout — Current Site / Source Audit

- Date: 2026-05-04
- Site slug: `mackey-s-hideout`
- MC parent task: `503320f6-a3e2-4286-887b-a7900ffaaed8`
- Lead ID: `742a8ab1-4205-49e0-9206-b97700045a79`
- Restaurant/bar: Mackey's Hideout, McHenry, IL
- Official site: `http://www.mackeyshideout.com/`
- Address found: `2601 S River Rd, McHenry, IL`
- Phone found: `(815) 363-7040`

## Source status

Mackey's has an owned site, and the current site is strongly focused on live music. It does expose a large 2026 schedule, but the experience is closer to an old/flat event archive than a modern bar/music venue homepage. Food/drink conversion, hours, address, bar identity, photos, and event-ticket routing are not packaged into a compelling first impression.

The pitch hook is therefore: **Mackey's has a real live-music/roadhouse identity, but its owned website undersells the venue and buries the bar/drink/visit story behind a long raw schedule.**

## Public proof captured

### Official site

- URL: `http://www.mackeyshideout.com/`
- Page title: `Mackey's Hideout - Live Music`.
- Homepage/content extract leads with `Live music Schedule` and lists Wed/Thu/Fri/Sat/Sun music, Monday open mic at 8PM, Wednesday karaoke at 9PM, and many 2026 events.
- TicketWeb links are present for `Concert by the Creek 2026` outdoor shows.
- Content includes bands/events such as Tipsy Phuddled, Phun, Milbillies & Pete Jive, Mr Blotto, Thankful Dead, County Line String Band, Terrapin Flyer, Concert by the Creek, Organ Fairchild, Miles Over Mountains, Fox Crossing Stringband, and others.
- Footer copyright says `MACKEY'S HIDEOUT COPYRIGHT © 2025`.

### Restaurantji

- URL: `https://www.restaurantji.com/il/mchenry/mackeys-hideout-/`
- Category: Bars.
- Rating evidence: `4.7` from `155 ratings`.
- Address: `2601 S River Rd, McHenry`.
- Phone: `(815) 363-7040`.
- Restaurantji summary calls Mackey's a classic dive bar with a great vibe, quaint venue, friendly service, wide drink selection, live music with excellent acoustics and lighting, frozen pizzas, slots, darts, and a stage for musicians.
- Review excerpts mention craft beer and live music, Monday open mic, welcoming musicians, huge drink selection, friendly staff, and a home-like atmosphere.
- Hours: Monday 12PM–2AM; Tuesday 12PM–2AM; Wednesday 6AM–2AM; Thursday/Friday 12PM–2AM; Saturday/Sunday 8AM–2AM.

### Restaurant Guru

- URL: `https://restaurantguru.com/Mackeys-Hideout-McHenry`
- Shows 108 photos/videos and Google-derived rating `4.6`.
- Summary mentions pizza, craft beer, draft beer, bourbon, great location, fast service, affordable prices, and cozy atmosphere.
- Features listed: outdoor seating, credit cards accepted, wheelchair accessible, TV; no delivery/takeaway/booking.
- Hours corroborate Restaurantji.

## Audit findings

1. **Event archive problem:** the official site has valuable event information, but it reads like a long raw schedule rather than a high-conversion music/bar homepage.
2. **Bar identity under-surfaced:** off-site pages clearly sell craft beer, live music, friendly staff, dive-bar vibe, stage/open mic, darts/slots, outdoor shows, and frozen pizzas; the owned site does not shape those into an immediate story.
3. **Conversion gap:** the site should make it easy to check this week’s shows, get tickets for larger outdoor shows, find hours/address, understand age restrictions where relevant, call, and decide whether to visit for drinks/music.
4. **Food/menu caution:** this is not a restaurant-menu lead. Any build must treat Mackey's primarily as a live music bar/roadhouse; food should be mentioned only truthfully as frozen pizza/bar snacks if verified.
5. **Route:** `bramble-01`. Core archetype mapping: **Bramble** — bars, taverns, cocktail/music/nightlife concepts with mood and personality. Use a roadhouse/live-music variant, not an upscale cocktail-lounge posture.

## Required browser evidence blocker

OpenClaw managed browser is unavailable on this host (`No supported browser found`), so this audit currently has web-fetch/search evidence but not the required desktop/mobile screenshots or live browser DOM snapshot. Before marking the canonical audit gate fully passed, capture:

- desktop/mobile screenshots of the official live-music schedule page
- browser DOM/text snapshot for the homepage/schedule and ticket links
- screenshots of Restaurantji/Restaurant Guru proof pages
- Google/Maps profile screenshot and later Highest-filter 30 written Google review packet

## Current recommendation

Proceed only as a bar/live-music venue build, not a conventional restaurant build. Mackey's is sellable if the website becomes a stronger music-calendar and bar-identity page: upcoming shows, open mic/karaoke, craft beer/drinks, address/hours, TicketWeb links, outdoor events, and a warm dive-bar/roadhouse mood. Keep claims grounded and avoid inventing food depth.


## 2026-05-05 browser evidence update

OpenClaw managed Chrome is now available on this host, so the previous browser-capture blocker is cleared locally. New browser evidence is saved in `browser-evidence-audit-2026-05-05.md` and `scrapes/browser-audit-manifest-2026-05-05.json`.

Captured current-site evidence:

- Official live-music schedule desktop/mobile screenshots and DOM/text snapshots.
- Browser status check for the official URL returned HTTP 200.
- The official site shows Live Music, Beer Menu, Booking, About, Merch, Photos, and Home navigation, plus a long 2026 schedule with open mic, karaoke, outdoor shows, band names, prices, and ticket prompts.

Captured public proof:

- Google search/local pack screenshot/text showing 4.6 from 408 Google reviews, Bar category, address, craft beer, live music, karaoke, open mic, friendly staff, reasonable drink prices, and outside-food allowance.
- Restaurantji screenshot/text showing 4.7 from 155 ratings, Bars category, address, phone, hours, live music, drink selection, frozen pizzas, slots, darts, and stage.
- Restaurant Guru screenshot/text showing #1 pub/bar rankings in the area, 108 photos, 4.6 Google-derived rating, craft/draft beer, bourbon, pizza, cozy atmosphere, live music, karaoke, website, and Instagram proof.

Updated audit interpretation: the official site is reachable and text-rich, but it still reads like a raw schedule archive. The sellable gap remains turning Mackey's into a high-conversion Bramble-style bar/live-music venue page with clear upcoming shows, ticket links, open mic/karaoke, drinks, hours, address, and roadhouse personality.

Local canonical audit gate status: passed. Next canonical gate: `reviews`, pending Mission Control stage/requirement writeback.
