# Shirley's Piano Bar Pitch Doc

## 60-Second Read

Shirley's does not have a broken site problem. It has the right owned content already: a live music calendar, cocktail menu, private parties page, story, hours, address, phone, email, Facebook, and Instagram.

The leak is that the current experience still behaves like a venue directory. Guests see useful pages, but the site does not make tonight's music, the cocktail list, private parties, and the Shirley story feel like one late-night decision.

The prototype keeps the existing content strategy and reframes it as a piano bar: tonight's performer first, drinks as part of the night, private parties as a natural celebration path, and Shirley's story as the emotional reason the room exists.

The Google review packet makes the pitch more concrete: guests remember Jess and the bartenders, drinks being on point, Emily Popli and Brandon by name, birthdays after dinner, group sing-alongs, and the way the small room gets packed once music starts.

That is the secret sauce to preserve: the site should make the owner feel that we see the human room, not only the calendar. Staff warmth, request-led music, birthdays, cocktails, and small-room energy are the selling material.

## Call Opener

"Your site has the right pieces - calendar, cocktails, events, story - but it still behaves like a venue directory. I mocked a piano-bar version where tonight's music, the cocktail list, private parties, and the Shirley story feel like one late-night experience."

## Where The Current Site Leaks Intent

| Leak | Why It Matters | Standard Practice | Prototype Fix |
| --- | --- | --- | --- |
| Music is not dominant enough in the first path. | For a piano bar, the performer and room energy are the conversion trigger. | Surface tonight/this week before guests have to browse. | Added a near-top live music module and `/live-music` route. |
| Menu is separated from the night-out story. | Drinks are part of why guests stay for music or book parties. | Make menu browsing feel connected to the experience. | Rebuilt `/menu` around signature cocktails, wine, beer/seltzers, and zero-proof. |
| Private events need a stronger handoff. | Birthdays, client nights, and buyouts are high-value paths. | Give event prospects package clarity and a direct inquiry moment. | Added `/parties` with event options, capacity framing, customizations, and confirmation state. |
| Story is underused. | Shirley and Verne explain the bar's music-and-hosting identity. | Use origin story as trust and atmosphere, not just an about page. | Replaced team filler with story, room rituals, request nights, and celebration framing. |
| Review language is not shaping the page yet. | Guests are already saying the best sales copy: attentive staff, good drinks, requests, birthdays, groups, intimate room, lively music. | Turn repeated review themes into homepage proof and route copy. | Added a "Why guests come back" section and tuned hero/live/party copy. |
| Request expectations need nuance. | Most reviews praise requests and sing-alongs, but one calls out a performer not knowing requested songs. | Calendar cards should tell guests the performer style. | Live-music copy now frames request fit as a reason for better performer notes. |
| Restaurant assumptions would weaken trust. | Shirley's is a piano bar / cocktail venue, not a restaurant. | Schema and copy should match the business model. | Added `BarOrPub`, `MusicVenue`, `EventVenue`, and `MusicEvent` data; avoided `Restaurant`. |

## What We Fixed

- **Homepage:** Leads with late-night piano-bar energy and tonight's performer.
- **Review proof:** Adds repeated Google-review themes around staff warmth, request-led music, birthdays/groups, drinks, and small-room energy.
- **Secret sauce:** Frames Shirley's as the place where staff, songs, cocktails, and birthdays become one small-room night instead of separate website pages.
- **Live music:** Shows current week events near the top and provides a full schedule route.
- **Menu:** Preserves the existing cocktail menu and makes it polished, crawlable, and venue-appropriate.
- **Parties:** Turns private events into a conversion surface instead of just information.
- **Story:** Connects Shirley, Verne, song requests, and celebrations into one brand reason.
- **Search/AI readiness:** Adds venue-appropriate schema without implying food service.

## Demo Path

1. Show the homepage hero and tonight module.
2. Scroll to "Why guests come back" and point out the review-derived proof themes.
3. Open `/menu` to make clear this is a menu-upgrade pitch, not a missing-menu pitch.
4. Open `/parties`, scroll the options, and submit the prototype inquiry to show the confirmation state.
5. Open `/story` and connect the room back to Shirley and Verne.

## Do Not Overclaim

- Do not say they lack a menu.
- Do not say the current site is broken.
- Do not call Shirley's a restaurant.
- Do not claim event data, capacity, prices, or package minimums are final without owner confirmation.
- Do not quote Google reviews verbatim in production without approval; use them as direction unless the owner wants testimonials.

## Close

"This is not about replacing what works. It is about making the site behave more like Shirley's itself: music first, drinks in hand, celebrations easy to imagine, and the story holding it all together."
