# Shirley's Piano Bar Prospect Source

- **Official site:** https://www.shirleyspianobar.com/
- **Official menu:** https://www.shirleyspianobar.com/cocktail-menu-shirleys-barrington
- **Official live music:** https://www.shirleyspianobar.com/live-music-barrington-il
- **Official private parties:** https://www.shirleyspianobar.com/private-parties-barrington-il
- **Official story:** https://www.shirleyspianobar.com/about-shirleys-piano-bar
- **Base template:** `templates/velvet-shaker-01`

## Venue Context

- **Name:** Shirley's Piano Bar
- **Location:** 104 North Cook Street, Barrington, Illinois 60010
- **Type:** Piano bar / live music venue / cocktail bar
- **Core promise:** Barrington's late-night piano bar; live music, classic cocktails, song requests welcome.
- **Hours:** Monday private events only; Tuesday-Thursday 6:00 pm-1:00 am; Friday-Saturday 6:00 pm-2:00 am; Sunday 4:00 pm-12:00 am.
- **Contact:** `info@shirleyspianobar.com`, `224-888-1880`

## Menu Context

The current menu is page-native, not missing. The prototype preserves the real menu categories:

- Signature cocktails
- Wine
- Bottled beer
- Draft beer
- Seltzers
- Zero-proof cocktails
- Non-alcoholic wine
- Non-alcoholic beer

## Live Music Context

Calendar events visible on 2026-04-28 were used for the first build:

- Chris Heroldt LIVE, Tuesday, April 28, 2026, 8:00 PM-11:00 PM
- Jennifer Lee Knuth LIVE, Friday, May 1, 2026, 8:00 PM-11:59 PM
- Peter Miletic LIVE, Saturday, May 2, 2026, 8:00 PM-11:59 PM
- Emily Popli LIVE, Sunday, May 3, 2026, 7:00 PM-10:00 PM
- Songwriter Showcase Night, Tuesday, May 5, 2026, 7:00 PM-11:00 PM
- Adam Nelson LIVE, Thursday, May 7, 2026, 8:00 PM-11:00 PM
- Kaleen Dolan LIVE, Friday, May 8, 2026, 8:00 PM-11:59 PM

## Private Events Context

The current private parties page supports:

- Reserved area
- Partial buyout
- Full venue buyout
- Capacity 60, seating for 45
- Signature cocktail naming
- Song dedications
- Curated music themes
- Extended late-night hours
- Custom beverage packages

## Google Review Context

The user supplied a review packet after the first build. Repeated themes that should shape copy and layout:

- Staff warmth: Jess and the bartenders are repeatedly described as friendly, attentive, kind, professional, and hard-working.
- Drinks: guests call out good drinks, handcrafted cocktails, good selection, and drinks being on point.
- Music/request behavior: reviews praise Emily Popli, Brandon, the Piano Man, request-taking, sing-alongs, and guests joining performers.
- Party use case: birthdays, after-dinner groups, friends finishing the night, and group nights show up repeatedly.
- Room feel: small, intimate, limited seating, comfortable, lively, sometimes loud, and packed once music starts.
- Nuance: one review says a piano player did not know many requested songs, so production calendar cards should describe performer style/request range instead of promising every request.

## Secret Sauce

- Owner/site claim: Shirley's is Barrington's late-night piano bar, built around live music, song requests, cocktails, private parties, and the Shirley/Verne social-hosting story.
- Review-confirmed strengths: attentive bartenders, Jess by name, good drinks, request-led performers, sing-alongs, birthdays, after-dinner groups, intimate seating, and the room filling with energy once music starts.
- Named items or experiences: Emily Popli, Brandon, the Piano Man, request nights, birthday groups, private parties, handcrafted cocktails, zero-proof options, and the Shirley and Verne origin story.
- Guest language worth echoing: "small room," "good drinks," "request songs," "sing along," "after dinner," "birthday," "friendly bartenders," and "packed once music starts."
- Risks / do-not-overclaim: Do not imply food service, reservations, package prices, guaranteed request fulfillment, or final event capacity without owner confirmation.
- Website/pitch implications: The site should sell a night, not just a list of pages. Put tonight's music, drink confidence, staff warmth, party use cases, and performer/request expectations into one path.

## Template Adaptation

`velvet-shaker-01` was used because it already fits a drinks-led, nocturnal, no-food-program venue. The fork intentionally moves away from cool modernist speakeasy and toward a warmer piano-bar register:

- First-party venue imagery in the hero and section rows.
- "Tonight / this week" surfaced immediately after the hero.
- Cocktail menu as part of the music-night story.
- Private parties as a primary conversion route.
- Shirley and Verne story replacing mixologist/team filler.
- Review-proof section added near the top, plus copy changes around staff warmth, request-led music, birthdays/groups, and intimate-lively atmosphere.
- `BarOrPub`, `MusicVenue`, and `EventVenue` structured data instead of `Restaurant`.
