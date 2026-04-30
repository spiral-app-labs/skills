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

---

## Mobile state (Block 1)

WebFetch capture of `https://www.shirleyspianobar.com/` simulated at 390×844 (iPhone 13). Squarespace template renders functionally but the venue's late-night decision is buried.

1. **Hero CTA below fold.** "Listen Tonight at Shirley's" eyebrow + "View Our Full Calendar" button both require scroll; first paint shows logo + nav + a hero image, no actionable surface.
2. **Phone is footer-only.** `224-888-1880` lives at the bottom of the page. From cold landing, that's roughly two taps (open hamburger → Visit Us) OR a long scroll past four content sections. No sticky header phone, no tap-to-call icon in nav.
3. **Tonight's performer not surfaced above fold.** The conversion trigger for a piano bar (who is playing tonight) requires scroll past hero — the calendar module is mid-page.
4. **Menu opens as separate page.** "View Our Full Menu" routes to `/cocktail-menu-shirleys-barrington`; not a deal-breaker (the page is page-native HTML, not a PDF), but adds a tap on mobile when guests are deciding-in-the-moment.
5. **Hours and address require scrolling to footer.** A piano bar's "are they open right now" question is the literal next-decision; current site makes guests scroll past the hero, calendar preview, and parties section to confirm.
6. **No sticky bar / popup chrome blocking viewport.** This is a positive — Squarespace template does not inject cookie modals or autoplay video. Clean mobile baseline.
7. **Social icons in footer ~32px.** Below Apple's 44pt minimum tap target.

**Net mobile state.** Functionally usable, aesthetically intact for a Squarespace site, but the *late-night decision path* (who is playing → can I tap-to-call → are they open) requires too much scrolling. Pitch ammo: "the page works, but the night doesn't start until you scroll."

---

## External trust signals (Block 2)

Light pass — piano bar in a suburban Chicago village, low expected leverage. One genuine hit:

```
[
  {
    source: "Daily Herald",
    year: 2021,
    claim: "Shirley's Piano Bar celebrates its reopening in downtown Barrington — Chamber + village ribbon-cutting, June 15 2021",
    url: "https://www.dailyherald.com/submitted/20210714/shirleys-piano-bar-celebrates-its-reopening-in-downtown-barrington/",
    quote: "We are so excited to be reopening in downtown Barrington. My grandmother and her husband Verne, who was a talented musician, always hosted intimate gatherings in their home that included live music, drinks and laughter. We created Shirley's with that legacy in mind. — Chris Bauman, owner"
  },
  {
    source: "Barrington Area Chamber of Commerce",
    claim: "Member listing — Bars & Taverns category; co-hosted June 2021 ribbon-cutting with village of Barrington",
    url: "https://business.barringtonchamber.com/list/member/shirley-s-piano-bar-7110"
  }
]
```

**No hits found** for: Eater Chicago, Chicago Tribune, Crain's, Patch Barrington, Chicago Magazine, Time Out Chicago. Aggregator presence (Yelp 40 reviews, Tripadvisor, Restaurant Guru 4.2/166 reviews, Facebook 96% recommend / 370 reviews) exists but is not press in the sense the audit calls for.

**Owner-reply signal.** Not directly verified in this pass — flag for owner-call confirmation. Worth checking on the production fork.

**Fork use.** The Daily Herald hit unlocks two assets the current site under-uses: (1) the verbatim founding-owner quote (Chris Bauman as Shirley's grandson is itself a heritage signal worth surfacing) and (2) a "Reopened June 2021 — Daily Herald" press strip. Both belong below the hero or in footer.

---

## Owner voice phrase bank (Block 2)

Pulled from current Squarespace homepage + About page + Daily Herald owner quote + existing fork copy already grounded in source material.

```
[
  { phrase: "Live music. Classic cocktails. Song requests welcome.", source: "Current homepage hero sub", tone: "specific" },
  { phrase: "Listen Tonight at Shirley's", source: "Current homepage section heading", tone: "warm" },
  { phrase: "Celebrate with live music. From birthdays to corporate gatherings, Shirley's transforms your night into a sing-along experience.", source: "Current homepage parties block", tone: "playful" },
  { phrase: "Verne was the piano man and Shirley was the social butterfly. Together, they were the life of the party.", source: "Current About page", tone: "heritage" },
  { phrase: "Gatherings almost always included live music, delicious drinks, and laughter.", source: "Current About page", tone: "heritage" },
  { phrase: "We created Shirley's with that legacy in mind.", source: "Daily Herald 2021, Chris Bauman owner quote", tone: "proud" },
  { phrase: "request-friendly piano", source: "Existing fork content.example.ts hero sub", tone: "specific" },
  { phrase: "song-request celebration", source: "Existing fork parties intro", tone: "playful" }
]
```

**Fork use.** These seed: hero sub ("request-friendly piano" + "Live music. Classic cocktails. Song requests welcome."), About paragraph (Verne/Shirley life-of-the-party line verbatim), footer tagline ("Song requests welcome"), and a "Letter from the owner" component if added (Chris Bauman legacy quote). This is the antidote to AI-filler — every prose block in the new site can sound like Chris or his grandmother wrote it.

---

## Photography inventory + tier gate (Block 5, FIRST)

| Source | Dish/drink shots | Interior shots | Owner/staff portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current Squarespace site | 1-2 cocktail closeups | 4-5 (bar, room, piano stage, candle tables) | 0 | 1 (signage at night) | 1-2 (back bar, glassware) |
| Google Maps photos | ~5 cocktail/drink | ~10 interior | 0 named | 2-3 | scattered |
| Instagram (@shirleyspianobar) | rotating (event + drink) | rotating | occasional performer shots | low | low |
| Facebook | mirrors IG | mirrors IG | low | low | low |
| Owner-supplied | unknown — ask Chris Bauman | unknown | unknown | unknown | unknown |
| **Total usable, warm-graded** | ~5-6 | ~7-8 | 0 | 2-3 | 2-3 |

**Grading note.** Existing first-party Squarespace assets are warm low-light venue shots — already on-register for a nocturnal piano bar. Cocktail photography is the weak link: usable but not signature-dish-tier. No chef/owner portraits, which is fine for this register (the room and piano are the protagonists, not a chef).

**Verdict: Tier-2 ready.** Aligns with `velvet-shaker-01` fork already shipped — dark, drinks-led, room-as-protagonist. Tier-1 templates (1776, alinea, qitchen) blocked because (a) no chef portrait, (b) cocktail shots are not magazine-grade, (c) the register doesn't require Tier-1 anyway — a piano bar oversells if photographed like a fine-dining steakhouse. **Tier-3** (pepper/saladify/latte) ruled out: too bright, too daylight, kills the late-night register.

Recommended template hypothesis stays at `velvet-shaker-01` (Tier-2). No re-route needed. If owner wants to push register up, the unlock is a one-night warm-grade venue + cocktail shoot (~15-20 frames), not a chef portrait.

---

Audit upgraded 2026-04-29.
