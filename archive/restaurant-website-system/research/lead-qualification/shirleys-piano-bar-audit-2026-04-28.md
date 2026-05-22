# Shirley's Piano Bar — Prospect Audit

Date checked: 2026-04-28

## Lead Summary

- **Venue:** Shirley's Piano Bar
- **Vertical:** Piano bar / live music venue / cocktail bar
- **Location:** 104 North Cook Street, Barrington, IL 60010
- **Current site:** https://www.shirleyspianobar.com/
- **Current menu page:** https://www.shirleyspianobar.com/cocktail-menu-shirleys-barrington
- **Likely template:** `velvet-shaker-01`, modified for piano-bar warmth and live music.
- **Alternate template:** `bramble-01` only if we intentionally want warm scrapbook hospitality and are willing to remove the food/kitchen assumptions.
- **Lead tier:** Conditional build. Strong visual/prospect fit, but not a restaurant and not a hard "no menu" leak.

## What The Current Site Already Does Well

- Clear positioning: "Barrington's Late-Night Piano Bar" and "Live music. Classic cocktails. Song requests welcome."
- Has a page-native cocktail menu. This is not a no-menu prospect.
- Has an active live-music calendar with individual event pages, dates, times, descriptions, map links, Google Calendar links, and ICS links.
- Has private party/event inquiry positioning.
- Has hours, address, phone, email, Facebook, and Instagram.
- Has real story material around Shirley and the family/social origin of the concept.

## Menu Check

They **do have a menu**, and it is not just a PDF.

The menu page includes:

- Signature cocktails: Smoked Old Fashioned, Black Manhattan, Espresso Martini, Dirty Shirley Martini, Blackberry Bramble, Blue Hawaiian, Spicy Margarita.
- Wine: red and white lists.
- Bottled beer, draft beer, seltzers.
- Zero-proof cocktails, non-alcoholic wine, and non-alcoholic beer.

The menu is crawlable/page-native, but it appears to be mostly unpriced in the text capture. The opportunity is not "add a menu"; it is to make the menu feel like part of the piano-bar experience and pair it better with live-music/event conversion.

## Deep-Research Signals

- **Not a restaurant:** Do not force a food/menu/reservation restaurant pitch.
- **Nightlife conversion path:** Live music calendar, song-request identity, cocktail menu, private events, and newsletter are the real revenue surfaces.
- **Event-led revenue:** The strongest owned path is "what's on tonight / this weekend" into visit, calendar save, party inquiry, or email signup.
- **Menu exists:** No PDF-only hard leak. The softer leak is that drinks and live music can be more strongly unified in the first decision path.
- **Template-fit risk:** Existing catalog has a known gap for "small entertainment venue / cocktail lounge without a food program." `velvet-shaker-01` is closest, but must be warmed and made music-forward.

## Why Create A New Website?

Because Shirley's sells an atmosphere before it sells a drink: the promise is late-night piano, song requests, performers, birthdays, private events, and cocktails. Their current site has the content, but the experience could feel much more like stepping into a piano bar: tonight's music first, cocktail list as part of the evening, event inquiry as a natural celebration path, and the Shirley story as an emotional trust signal.

The pitch should not be "you do not have a menu." They do. The pitch is:

> "Your site has the right pieces — calendar, cocktails, events, story — but it still behaves like a venue directory. I mocked a piano-bar version where tonight's music, the cocktail list, private parties, and the Shirley story feel like one late-night experience."

## Template Recommendation

### Primary: `velvet-shaker-01`

Use when the build should feel:

- nocturnal
- cocktail-led
- adult
- atmospheric
- typography/photo-led
- event-aware

Required deviations:

- Keep the dark, drinks-led discipline, but soften the overly cool "speakeasy catalogue" posture.
- Add a clear "Tonight / This Week" live-music module above or near the first scroll.
- Replace generic cocktail events with real performer/event cards.
- Add party inquiry CTA as a primary revenue path.
- Replace "mixologist grid" with Shirley story / performers / regular nights.
- Do not over-index on food/snacks.

### Secondary: `bramble-01`

Use only if the desired pitch is warmer, more scrapbook/social, and less modernist. Remove or rewrite food/kitchen assumptions. Bramble's live-music warmth fits, but its restaurant/bar-with-food structure is less honest than velvet-shaker's drink-led architecture.

## Build Notes For A Future Fork

- Suggested site folder: `restaurant-website-system/sites/shirleys-piano-bar/`
- Current site source URL: https://www.shirleyspianobar.com/
- Preserve useful current paths:
  - Live music: `/live-music-barrington-il`
  - Parties & events: `/private-parties-barrington-il`
  - Cocktail menu: `/cocktail-menu-shirleys-barrington`
  - History/story: `/about-shirleys-piano-bar`
- Build routes:
  - `/` live-music-first homepage
  - `/menu` cocktail / wine / beer / zero-proof
  - `/events` or `/live-music` event calendar preview
  - `/parties` private events inquiry
  - `/story` or `/about` Shirley story
- Add `MusicVenue` / `BarOrPub` / `EventVenue` structured data where appropriate. If using `Restaurant` schema, only do so if the venue publicly presents food service.

## Do Not Pitch

- "You do not have a menu."
- "Your website is broken."
- "You need a restaurant site."
- "We should replace your event calendar."

## Pitch Instead

- "The current site has strong content, but the first-screen experience could feel more like a late-night piano bar."
- "Tonight's performer, song-request energy, cocktails, and private parties should be connected in one decision path."
- "The menu exists; the opportunity is making drinks part of the night-out story instead of a separate page."

## Sources Checked

- Official site: https://www.shirleyspianobar.com/
- Official cocktail menu: https://www.shirleyspianobar.com/cocktail-menu-shirleys-barrington
- Official live music calendar: https://www.shirleyspianobar.com/live-music-barrington-il
- Official private parties page: https://www.shirleyspianobar.com/private-parties-barrington-il
- Official story page: https://www.shirleyspianobar.com/about-shirleys-piano-bar
- Zenith Music Group profile: https://zenithmusicgroup.com/shirleys-piano-bar/
