# Shirley's Piano Bar Prospect Fork

Built from `velvet-shaker-01` for Shirley's Piano Bar in Barrington, IL.

## Audit Logic

- **Lead:** Shirley's Piano Bar
- **Official site:** https://www.shirleyspianobar.com/
- **Vertical:** Piano bar / live music venue / cocktail bar
- **Core posture:** Soft-leak / preserve-stack. The current site has useful content, but the prototype makes the guest path feel like one late-night piano-bar experience.
- **Important caveat:** Shirley's already has a page-native cocktail menu. Do not pitch a missing menu.

## Preserved Links

- Current site: https://www.shirleyspianobar.com/
- Current menu: https://www.shirleyspianobar.com/cocktail-menu-shirleys-barrington
- Current live music calendar: https://www.shirleyspianobar.com/live-music-barrington-il
- Current private parties page: https://www.shirleyspianobar.com/private-parties-barrington-il
- Current story page: https://www.shirleyspianobar.com/about-shirleys-piano-bar
- Facebook: https://www.facebook.com/shirleyspianobar/
- Instagram: https://www.instagram.com/shirleyspianobar/

## Build Notes

1. Forked `velvet-shaker-01` because it is drinks-led, dark, nocturnal, and does not assume a food program.
2. Rebuilt the homepage around late-night piano-bar energy instead of restaurant dining.
3. Added a near-top `TonightThisWeek` section using official calendar events visible on 2026-04-28.
4. Converted the drink list into `/menu` with signature cocktails, wine, beer/seltzers, and zero-proof sections.
5. Added `/parties` as a conversion surface with reserved area, partial buyout, full buyout, customization list, and inquiry confirmation state.
6. Replaced mixologist/team filler with Shirley's story, performer rituals, request nights, and private sing-along framing.
7. Added Google-review-derived proof themes: attentive bartenders/Jess, drinks on point, request-led performers, birthdays/after-dinner groups, and small-room lively energy.
8. Added `BarOrPub` / `MusicVenue` / `EventVenue` JSON-LD and avoided `Restaurant` schema.
9. Added redirects from the current official page slugs to the cleaner prototype routes.

## Routes

- `/` - music-first homepage with hero, tonight/this-week lineup, menu preview, party/story sections.
- `/menu` - polished page-native cocktail menu.
- `/live-music` - event schedule surface.
- `/events` - alias for live music.
- `/parties` - private parties and buyouts.
- `/story` and `/about` - Shirley / Verne story and room rituals.
- `/contact` - address, hours, phone, email, socials, map, FAQ, and inquiry form.

## Content Guardrails

- Do not imply there is no menu.
- Do not invent food service, restaurant service, reservations, prices, awards, reviews, or press.
- Event data is time-sensitive and should be owner-confirmed before production.
- Menu prices are intentionally omitted because the official page text capture is mostly unpriced.
- Keep calendar-save behavior and existing inquiry/provider workflows in a production handoff.
- Review language should be treated as directional proof, not exact testimonial placement, unless the owner approves quoting.

## Dev

```bash
npm install
npm run typecheck
npm run build
npm run dev -- --port 3124
```

Verified locally on `http://localhost:3124`.
