# Shirley's Piano Bar - Strategic Site Audit

> Source audit: `research/lead-qualification/shirleys-piano-bar-audit-2026-04-28.md`.
>
> Current official URLs checked on 2026-04-28: https://www.shirleyspianobar.com/, `/cocktail-menu-shirleys-barrington`, `/live-music-barrington-il`, `/private-parties-barrington-il`, and `/about-shirleys-piano-bar`.

## Decision

Build as a conditional prospect fork: Shirley's is not a restaurant and not a no-menu lead. It is a piano bar / live music venue / cocktail bar with useful existing pages. The prototype should preserve the calendar, cocktail menu, private-party inquiry angle, story, hours, address, phone, email, Facebook, and Instagram.

## Why Build

The current site already has the right parts:

- A clear homepage promise: Barrington's late-night piano bar, live music, classic cocktails, and song requests.
- A page-native cocktail menu with signature cocktails, wine, beer, seltzers, and zero-proof drinks.
- A live music calendar with dated event pages, calendar-save links, maps, performer descriptions, and times.
- A private parties page with reserved area, partial buyout, full venue buyout, capacity, and customization ideas.
- A real origin story around Shirley and Verne: music, drinks, hosting, and the life-of-the-party identity.
- Google reviews repeatedly mention friendly/attentive bartenders, Jess by name, good drinks, request-led performers, birthdays, after-dinner groups, intimate seating, and the room getting packed once music starts.

The leak is softer but sales-relevant: those pieces still read like separate venue-directory pages. A guest has to assemble the night themselves. The prototype makes the first path feel like a piano bar: tonight's player, drinks, party use cases, and Shirley's story all reinforce the same late-night decision.

## Current-State Findings

| Finding | Evidence | Prototype Fix |
| --- | --- | --- |
| The content is strong but fragmented. | Calendar, menu, parties, and story exist as separate pages. | Homepage makes tonight's music, drinks, private parties, and story feel like one experience. |
| Music is the real conversion trigger. | Live calendar starts with Chris Heroldt on Tuesday, April 28, 2026, followed by Jennifer Lee Knuth, Peter Miletic, Emily Popli, and Songwriter Showcase Night. | Added a near-top "tonight / this week" section and a full `/live-music` route. |
| Menu exists and should not be pitched as missing. | Current menu lists signature cocktails, wine, bottled/draft beer, seltzers, zero-proof cocktails, NA wine, and NA beer. | Built `/menu` as a polished page-native drink list, intentionally unpriced because the current text capture is mostly unpriced. |
| Private parties are a real revenue surface. | Current page describes reserved areas, partial buyouts, full buyouts, capacity 60 / seating 45, song dedications, themes, extended hours, and beverage packages. | Added `/parties` with package options, customizations, and a working inquiry form confirmation state. |
| Story content is emotionally useful. | Shirley and Verne's hosting/music story explains why the venue exists. | Replaced mixologist/team filler with Shirley's story, performer rituals, request nights, and celebration energy. |
| Review proof points are more specific than generic nightlife copy. | Guests talk about Jess/staff warmth, drinks on point, Emily Popli/Brandon/Piano Man, birthdays, groups, small-room intimacy, and lively crowds. | Added a homepage review-pattern section and tuned hero, parties, and calendar copy around those themes. |
| Request fit can vary by performer. | One review noted a player did not know many requested songs while many others praised requests and sing-alongs. | Updated live-music copy to frame performer-style notes as a useful calendar improvement, not a blanket promise. |
| Schema should not say Restaurant. | No first-party food-service evidence in the checked pages. | Added JSON-LD using `BarOrPub`, `MusicVenue`, and `EventVenue`, plus `MusicEvent` entries and `hasMenu`. |

## Implementation Choices

- Forked `velvet-shaker-01` because it is dark, nocturnal, drinks-led, and does not require a food program.
- Warmed the system from cool speakeasy to intimate piano bar: plum-black canvas, cream ink, first-party venue images, music-first hero, and fewer detached cocktail-bar tropes.
- Added routes: `/`, `/menu`, `/live-music`, `/events`, `/parties`, `/story`, `/about`, `/contact`.
- Added redirects for current official path shapes: `/cocktail-menu-shirleys-barrington`, `/live-music-barrington-il`, `/private-parties-barrington-il`, and `/about-shirleys-piano-bar`.
- Preserved contact basics: 104 North Cook Street, Barrington, IL 60010; `info@shirleyspianobar.com`; `224-888-1880`; hours; Facebook; Instagram.
- Used first-party Squarespace image assets surfaced from the official site, rather than generic bar stock, where possible.
- Kept the menu drink-led and avoided food/restaurant assumptions.
- Added review-derived proof without inventing an aggregate rating or over-quoting guests.

## Pitch Sentence

"Your site has the right pieces - calendar, cocktails, events, story - but it still behaves like a venue directory. I mocked a piano-bar version where tonight's music, the cocktail list, private parties, and the Shirley story feel like one late-night experience."

## Risks

- Do not pitch "missing menu." They have a page-native cocktail menu.
- Do not call this a restaurant website.
- Event listings are time-sensitive. The prototype uses official calendar data visible on April 28, 2026; confirm before any live deployment.
- Capacity and event-package claims come from the current private parties page, but minimums, pricing, and exact inquiry workflow need owner confirmation.
- Menu spellings and typos were cleaned lightly in the prototype; final production should confirm official copy.
- Google review excerpts should be owner-approved before being quoted verbatim on a production site.

## Secret Sauce

The site should sell the human room: Jess and the bar team, drinks that land, performer-led requests, sing-alongs, birthdays after dinner, and the feeling of a small room filling once the music starts. The pitch is strongest when the redesign feels like Shirley's itself, not just a prettier calendar and menu.
