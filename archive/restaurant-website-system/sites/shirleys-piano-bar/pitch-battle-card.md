# Shirley's Piano Bar Pitch Battle Card

## Lead With

"Your site has the right pieces - calendar, cocktails, events, story - but it still behaves like a venue directory. I mocked a piano-bar version where tonight's music, the cocktail list, private parties, and the Shirley story feel like one late-night experience."

## Before / After

| Current path | Prototype |
| --- | --- |
| Homepage says late-night piano bar, but the guest still has to jump between separate pages. | Hero and first scroll make the room, tonight's performer, cocktails, and party path one continuous decision. |
| Calendar is useful but directory-like. | "Tonight / this week" is near the top, with `/live-music` as the full schedule route. |
| Cocktail menu exists, but it sits apart from the night-out story. | `/menu` is a polished drink-led route with signature cocktails, wine, beer/seltzers, and zero-proof. |
| Private events are real, but the conversion path can feel like a text page. | `/parties` gives event options, customizations, capacity framing, imagery, and a working inquiry confirmation state. |
| Story page has strong emotional material. | Shirley and Verne's hosting/music story becomes part of why the room works. |
| Google reviews contain stronger proof than generic bar copy. | Homepage now surfaces repeated review themes: attentive bartenders, request-led music, birthdays, groups, good drinks, and small-room energy. |
| Requests are loved, but performer fit matters. | Calendar copy now points toward performer-style notes so guests pick the right night. |
| Generic restaurant schema would be misleading. | Structured data uses `BarOrPub`, `MusicVenue`, `EventVenue`, and `MusicEvent` without `Restaurant`. |

## Demo Path

1. Show the hero: "Barrington's Late-Night Piano Bar" with real venue imagery and tonight's performer surfaced immediately.
2. Scroll to "tonight / this week": show Chris Heroldt on April 28, then Jennifer Lee Knuth, Peter Miletic, and Emily Popli.
3. Scroll to "Why guests come back": explain that review themes changed the copy and proof strategy.
4. Open `/menu`: point out this is not a missing-menu pitch; the existing drink list is preserved and upgraded.
5. Open `/parties`: show reserved area, partial buyout, full buyout, capacity, customizations, and the inquiry confirmation.
6. Open `/story`: connect the venue concept back to Shirley and Verne's party-host identity.

## Objection Handling

| Objection | Response |
| --- | --- |
| "We already have a website." | "Yes, and it has good content. This is not a rebuild because things are broken; it is a tighter owned path around the night guests are deciding to have." |
| "We already have a menu." | "Exactly. I kept it. The pitch is that drinks should feel connected to tonight's music and private events instead of sitting off to the side." |
| "Our calendar already works." | "Great. The prototype does not replace it; it promotes the next events earlier and preserves a full schedule route." |
| "Requests depend on the performer." | "Exactly. Reviews show guests love request nights, but the calendar should set expectations by performer style so the right guests choose the right night." |
| "We are not a restaurant." | "Correct. The prototype is a bar/music/event venue site and avoids Restaurant schema." |
| "Private event details change." | "The page can keep stable package types and route guests into your existing inquiry process while staff confirms minimums and availability." |

## Owner Questions

- Should the live site keep the current long URLs, redirect them, or expose both route styles?
- What event inquiry workflow should the form send to in production?
- Are capacity 60 and seating 45 still current?
- Should the public menu include prices, or stay unpriced like the current page text?
- Which recurring nights should be treated as evergreen content versus calendar-only entries?
- Which review quotes, if any, are approved for production testimonial use?
