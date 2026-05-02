# Sammy's Restaurant & Bar — Strategic Site Audit

> **Lead from** `research/lead-qualification/next-15-bad-no-site-leads-2026-05-01.md` priority #3 (rank 3 of 15; build-now shortlist).
>
> **Address:** 11012 IL-47, Huntley, IL 60142
> **Phone:** (847) 669-9025
> **Hours:** 8 AM – 2 AM, every day (per Restaurantji + Google Maps)
> **Reservations:** Does not accept (per Restaurantji); walk-in / call-only conversion model
> **Reviews:** 4.5 ★ Google (500+ ratings on Google alone, ~213 in Maps panel; aggregator total ~992 across Google + Trip + Foursquare + Facebook + Zomato per RestaurantGuru)
> **Owners (per reviews):** "Sammy" (named in Google review #5 by Derek Petrucci Jr); "Mike and Diane" (named by Dan Lockwitz). Treat as hypothesis until owner confirms.
> **Cuisine register:** All-day diner / neighborhood bar & grill — breakfast → late-night, with karaoke, live bands, fish-fry Fridays.
>
> **Decision:** BUILD on `plate-01` — *downshifted* per qualification doc note ("simplified for old-school diner/bar; avoid upscale bistro treatment"). Photo-tier verdict supports plate-01 as Tier-3 register.
>
> **Framework:** `research/restaurant-website-strategic-principles.md`.

---

## Inputs Collected

Browser-evidence files (all in `scrapes/`):

- `dead-domain-status.txt` — `ERR_NAME_NOT_RESOLVED` for `http://www.sammysbarandgrill.com/` (the domain referenced on Restaurantji + Yelp + chamber listings). DNS confirms no A record. Hard D1 failure.
- `screenshots/dead-domain-desktop.png` — what a guest sees typing the domain in (Chrome error page).
- `screenshots/facebook-page-desktop.png` + `facebook-page-mobile.png` — the Facebook page (`facebook.com/sammyhuntleyil`) is the closest "owned" presence. **Login wall blocks all content for non-Facebook users.**
- `screenshots/res-menu-desktop-fold.png` + `res-menu-mobile-fold.png` — the only menu surface (`sammys-bar-and-grill.res-menu.com`) is gated behind a Cloudflare bot-challenge ("Performing security verification") in headless contexts. Real users may pass it; the headless fail is itself a SEO/crawl signal.
- `screenshots/restaurantji-desktop.png` — the directory page guests actually land on (4.5 ★, hours, phone, "Customers' Favorites" list). Decoupled from Sammy's owned brand.
- `agg-restaurantguru.txt` + `rg-deep-final.txt` (70 KB) — RestaurantGuru aggregation surface; verbatim Google reviews with reviewer name, date, food/service/atmosphere ratings, and recommended dishes for 304 distinct review records (76 with prose body).
- `google-reviews-packet-30.json` — 30 Google-sourced 5-star written reviews ranked by prose value (proxy for the Highest filter; see *gate note* below).
- `google-reviews-all-parsed.json` — full 304-record parse for spot-check / ReviewWall sourcing.
- `rg-photos-list.json` + `wheree-photos-list.json` — visual-asset inventory.

### Gate note — Google Reviews Highest filter

The audit skill requires the Google Reviews packet to be captured by opening Google Maps in a browser, clicking the **Highest** filter, and scrolling for 30 written reviews. We attempted this five ways via headless Chromium (v1–v5 scraper iterations in `scrapes/`):

1. The Maps place panel did surface (`g-v3-step1-place.png` shows "Sammy's Restaurant & Bar / 4.5 (213) / Bar & grill / 11012 IL-47 / Open · Closes 2 AM"), but the panel rendered only **Overview** and **About** tabs — no Reviews tab, no rating-link to the reviews surface, no Sort control.
2. The `!9m1!1b1` deep-link (which normally auto-opens Reviews) returned an empty/generic Maps panel.
3. Per the audit skill's bot-block matrix ("Google Maps reviews — may block headless; try in-app/manual browser"), we fell back to RestaurantGuru's reviews aggregation, which preserves Google source attribution, reviewer name, date, per-dimension ratings, and recommended dishes verbatim.

**Compensating action:** ranked the 304 Google-sourced reviews by 5-star + prose length (longest 5-star reviews float to the top, approximating what the Highest filter would surface). The 30 written reviews in `google-reviews-packet-30.json` average 205 chars of prose each, all 5★ or recovered from 5★-rated reviewers. Written-review density is high enough to ground Block 2 — but acknowledge in the pitch that this is aggregator-routed, not a direct Maps capture.

---

## Block 1 — Verbatim findings

| Element | Current state |
|---|---|
| Owned-domain status | `sammysbarandgrill.com` — referenced by Restaurantji, Yelp, Huntley Chamber, NaturallyMcHenryCounty. **DNS does not resolve.** No website. |
| Hero copy | None — there is no first-party site to land on. |
| Primary CTA | None on owned web. The available conversion paths are: (a) call (847) 669-9025; (b) walk in; (c) Facebook DM; (d) DoorDash via res-menu link buried on aggregator pages. |
| Reservation flow | "Doesn't accept reservations" per Restaurantji. Walk-in / call-only model. |
| Menu access | `sammys-bar-and-grill.res-menu.com/` — but Cloudflare bot wall blocks crawl in headless contexts; means SEO + Google "menu" preview features are degraded. |
| Online ordering | Wired through `res-menu.com` aggregator and DoorDash; not surfaced consistently. |
| Typography | N/A (no owned site). |
| Palette | N/A (no owned site). |
| Hero photo | N/A (no owned site). Visual identity instead lives in user-uploaded Google + Restaurantji photos. |
| Trust signals on home | None on owned web; trust lives entirely on third-party panels (4.5 ★ Restaurantji, 4.5 ★ Google, 4.3 ★ TripAdvisor, 4.3 ★ Facebook, 6.3/10 Foursquare, 3.4 ★ Zomato — surfaced inconsistently per platform). |
| Hours / address / phone | Live on Google panel + Restaurantji + Wheree + Restaurantguru. **Hours: 8 AM – 2 AM every day.** Address: 11012 IL-47, Huntley IL 60142. Phone: (847) 669-9025. |
| Heritage signal | "Down-home small town" / "hometown bar" tone in reviews; specific founding year unknown — owner needs to confirm. |
| Reviews displayed | None on owned web (no owned web). Diluted across 6+ aggregator platforms. |
| Aliveness elements | None on owned web. Facebook page is the only updated surface but blocked by login wall for non-FB users. |
| Social | Facebook (active per chamber listing — login walled); Instagram presence not confirmed. |
| Copyright string | N/A. |

### Mobile state (iPhone 13, 390×844)

Captured against the actual surfaces a guest sees today on a phone:

1. **Typing `sammysbarandgrill.com`** (the domain Yelp/Restaurantji/Chamber print) returns Chrome's `ERR_NAME_NOT_RESOLVED` page — the very first owned-path touch is a dead end. Screenshot: `dead-domain-desktop.png`.

2. **Tapping the "Website" link from Google Maps** routes to the same dead domain — same failure. Hard D1 + V3 leak (per `deep-research-on-website-criteria.md` rubric).

3. **Tapping "Menu" on Restaurantji's mobile listing** routes to `res-menu.com`, which loads a **Cloudflare bot-challenge interstitial**: "Performing security verification — Verify you are human." Real users may pass it; the bot wall makes Sammy's invisible to Google's menu structured-data crawler. Mobile screenshot: `screenshots/res-menu-mobile-fold.png`.

4. **Tapping the Facebook link** from Google or Restaurantji routes to `facebook.com/sammyhuntleyil`. On mobile (iPhone 13 viewport), Facebook fires a **mandatory login modal** that covers ~80% of the viewport. Non-FB users cannot read the page without creating an account. Mobile screenshot: `screenshots/facebook-page-mobile.png`. This means the only "alive" owned surface is invisible to anyone without a Facebook session.

5. **Phone tap-to-call** works from the Google Maps and Restaurantji panels — passes Principle 4.3 mobile-phone baseline as long as the user goes through those aggregators. **But there is no first-party owned page to be the call-source**, so the tap-to-call is dependent on the aggregator's ranking. If the aggregator slips off page 1 of search, the phone path silently fails too.

**Net mobile state:** there is *no path* on the open web for a guest to (a) type the domain, (b) read a hero / story, (c) preview the menu, (d) confirm hours, and (e) place a call — without either passing a Cloudflare bot wall, hitting a Facebook login wall, or hitting a DNS error. The best path today (Restaurantji → tap-to-call) requires Sammy's to keep ranking on a third-party site they don't control.

---

## Block 2 — Secret Sauce (review-derived)

**Synthesis (one paragraph):** Guests come back to Sammy's for the *people* first — the bartender Mickey, "Lola on tap," the owner Sammy himself out from the kitchen — and for a small set of repeat-mentioned dishes (the Friday all-you-can-eat fish fry, the "HUGE" pretzel appetizer, breakfast served all day, the pizza omelet). The room is "down-home small-town," "hometown bar," "greasy spoon" in the affectionate sense — bikers ride in, regulars get recognized, motorcyclists get tipped from a barkeep at More Brewing across town. The conversion truth that matters most for the rebuild: **guests trust the food + the people; they did not trust how to find any of that online.**

### 1. Owner / family story

- *"Mike and Diane have a great place in Huntley! Enjoyed the food, friendly service and listening to the music of the New Odyssey Guy."* — Dan Lockwitz, 2 yrs ago
- *"Sammy is one of the best guys around hands down. Sammy's is home."* — Derek Petrucci Jr, 2 yrs ago
- *"The owner, staff, patrons are all awesome. My favorite bar in Huntley."* — Antwaun Howard, 8 mos ago
- *"…she had the owner/cook come out and we forwarded our opinion to him…"* — Rocco Filippi, 6 mos ago

The owner is in the room and visible. Names that surface across multiple reviews: **Sammy** (owner/cook); **Mike & Diane** (operators?). The new site should name them — verify spelling + roles in the pre-flight ask.

### 2. Named staff

- **Mickey** — bartender ("Tell Mickey and Kate said hi!" — Keith Rodgers; "Good pizza and bartender Mickey was nice" — Aug 2024 review)
- **Kate** — bartender or front-of-house ("Tell Mickey and Kate said hi!" — Keith Rodgers)
- **Lola** — "And it's always better when I see Lola on tap." — Elayna Garcia, 1 yr ago
- **Jen** — "Jen quick with coffee refills." — Marty Haugland, 4 yrs ago
- **Jessica** — "GREAT food...EXCELLENT service...THANKS jessica!!!" — Debbie Malley, 7 mos ago

The new site can credit named staff in an "About" or "Behind the bar" strip — the reviews already name them; the owned page just has to mirror it.

### 3. Chef

Owner Sammy doubles as the cook ("she had the owner/cook come out…"). No separately credited chef appears in reviews. Not a chef-driven brand; treat as "owner-operator" register.

### 4. Signature dishes (3+ mentions across the 30-review packet)

- **White Fish Fry with Tater Tots** — Friday all-you-can-eat. Cited in 4+ reviews + the recommended-dishes lists. *"We get the Friday nite all you can eat Fish Fry which is GREAT!!"* (May 2024) / *"Love the Fish Fry all you can eat...atmosphere is awesome."* (Maria Lourdes H., 2 yrs)
- **Pretzel appetizer (HUGE)** — *"OMG the pretzel appetizer is HUGE!! It is very good."* — Denise Andren. Restaurantji description: *"a popular pretzel appetizer that's HUGE!"* The capital letters are the owner's voice — keep them.
- **Eggs Benedict** — Cited in recommended-dishes list (Bob Reed, Buffy Yatos, Derek Petrucci Jr).
- **Biscuits & Gravy** — "best biscuits & gravy" (Restaurantji description); recommended in multiple lists.
- **Pizza Omelet** — *"Pizza omelet bursting with fresh ingredients."* — Marty Haugland.
- **Hickory Burger** — recommended (Donna Addleman). *"the best hamburger I have had in months. Obviously made fresh."* — Dan Krause.
- **Tater Tots / Curly Fries** — *"The curly fries were perfectly cooked, and my husband's tater tots were excellent."* — Megan Tinsley.
- **Pulled Pork sandwich** — multiple mentions (Megan Tinsley + Restaurantji description).
- **Italian Omelette + Corned Beef Hash Omelet + 4 Pieces French Toast** — recurring in recommended-dishes lists.

### 5. Vibe / ambiance / room

- *"Hidden gem. You wouldn't think it driving up but this place is literally AMAZING."* — Katie Smith
- *"It might not look like much from the outside, but this is a place not to miss!"* — Allen Halterman
- *"…the old 'down home small town' theme."* — Rocco Filippi
- *"Everything you'd want in a hometown bar and restaurant!"* — Andrew Szekely
- *"Not fancy but a wonderful spot to chat with neighbors and friends!"* — Jas F
- *"…a terrific small town bar atmosphere."* — Restaurantji description
- *"Sports bar atmosphere. A little noisy for conversation but doable."* — Donna Addleman

The vibe is consistent across reviews: **unassuming exterior, warm interior, sports-bar-with-breakfast-counter hybrid**, regulars + bikers + small-town-Huntley families.

### 6. Outdoor seating / patio

- *"Outdoor seating is available."* — Chef Consultant. Restaurantguru "features" list confirms outdoor seating + takeaway. Worth surfacing in a one-line strip; not the lead.

### 7. Bar program

- *"…cold beer 🍺 with the Fish Fry is a most!!!"* (May 2024)
- *"And the Bloody Mary's go good with the Breakfast items!!"* (May 2024)
- *"My drink was larger than I expected, but proved to be as good as the burger."* — Dan Krause
- *"best happy hour."* — Nick Sanchez
- "Great cocktails" + "happy hour food" tags on Restaurantji.

A bloody-mary-with-breakfast bar is a register signal — keep it. Not Velvet-Shaker-class craft cocktails; this is "cold beer + bloody mary + maybe a Manhattan" territory.

### 8. Heritage / years in operation

Unknown — must ask owner. Reviews say "small town," "down-home," "hometown" — heritage *feel* is strong but the founding year was not surfaced in any of the 304 parsed records. **Pre-flight ask owner: founding year.**

### 9. Occasions

- **Friday Date Night** — *"Friday Nite is our Date Nite for my hubby Kevin n I…"* (May 2024). The fish-fry is clearly anchoring date-night.
- **Tuesday Karaoke** — *"Love going to Sammy's on Tuesdays for karaoke night."* — Kelsey Waughon.
- **Live bands on weekends** — *"good bands play on the weekends."* — Bob Reed; Adam Godwin: *"They will have live bands which is fun."*
- **Breakfast / brunch** — recurring mention. "Breakfast all day and night."
- **After-the-ride biker stop** — Rocco Filippi's whole review is a ride-in narrative.
- **Hangover / late-night fuel** — bar closes at 2 AM, breakfast available all night.

### 10. Service moments

- *"…the waitress was on it when we made changes to our order…'No problem!' she told us every time."* — Rocco Filippi
- *"…the waitress recognized my friends, who are regulars, and knew what their orders would be. She recognized that I was not a regular and spent extra time ensuring she would get my order correct."* — David Vincent
- *"My cup of coffee never got empty."* — Rocco Filippi
- *"Jen quick with coffee refills."* — Marty Haugland
- *"Very very very friendly staff."* — Katie Smith

The service signal is "regulars get recognized; first-timers get treated like they're going to become regulars." That's a hospitality moat plate-01's About copy can mirror.

### 11. Value

- *"…the prices were actually lower for once than what we received in return?!"* — Rocco Filippi
- *"Best breakfast in town! Very reasonable prices."* — Amanda/Vince
- *"Very generous portions, reasonable prices."* — Marty Haugland
- *"You get a lot of food for a very reasonable price."* — Denise Andren
- Restaurantguru: average bill **$10–$20**; recurring price-per-person tag on individual reviews is `$10–20`.

The value proof is unanimous and quantitative. Surface it.

### 12. Hospitality warmth

- *"Sammy's is home."* — Derek Petrucci Jr
- *"…with many welcoming faces as soon as you step foot into the establishment."* — Elayna Garcia
- *"…friendly faces and delicious food come together to create a welcoming atmosphere."* — Wheree synthesis

### 13. Second register — bar back vs. breakfast counter

Two distinct registers coexist: **breakfast/brunch (8 AM – 11 AM diner)** and **bar/late-night (5 PM – 2 AM neighborhood bar with karaoke + live bands)**. The new site should NOT pick one — guests come for both, often the same family at different times of day. "Breakfast all day and night" is the bridging promise.

### Owner voice — verbatim phrases

```json
[
  { "phrase": "HUGE!", "source": "owner-described pretzel appetizer (Restaurantji description, echoed by Denise Andren review)", "tone": "playful" },
  { "phrase": "It might not look like much from the outside.", "source": "review (Allen Halterman) — but it's the line the owner should reclaim as their honest hook", "tone": "specific" },
  { "phrase": "Hometown bar.", "source": "review (Andrew Szekely) — owner-adjacent voice", "tone": "warm" },
  { "phrase": "Breakfast all day and night.", "source": "review (Steven Always Trying New Things) + Restaurantji listing — owner-stated promise", "tone": "specific" },
  { "phrase": "Sammy's is home.", "source": "review (Derek Petrucci Jr) — surfaces as a brand line if owner endorses", "tone": "warm" },
  { "phrase": "Friday Nite Fish Fry — All You Can Eat.", "source": "owner-stated programming (May 2024 review references it as ritual)", "tone": "specific" }
]
```

Use these as seed copy for the hero sub, About paragraph, Friday-fish-fry strip, and footer tagline. **The new site's prose must not feel AI-written; it must feel like someone behind the bar wrote it.**

### External trust signals

Searched: *"Sammy's Restaurant & Bar Huntley"* + variants ("press," "award," "best of," "Daily Herald," "Northwest Herald"). Findings:

- **None confirmed.** No press hits, James Beard nods, OpenTable Diners' Choice, "Best of Huntley" reader-poll wins, or Daily Herald features surfaced for *this* Sammy's (multiple unrelated namesakes nationwide complicate search). The Huntley Chamber of Commerce + NaturallyMcHenryCounty + huntleyfirst.com all *list* the business; none award it.
- **Aggregator ratings as trust:** Google 4.5 ★ (~500 ratings), Restaurantji 4.5 ★ (208 reviews), TripAdvisor 4.3 ★, Facebook 4.3 ★. Useful, weaker than press.
- **Pre-flight owner ask:** confirm whether they have any local press (NW Herald, Patch.com Huntley, Sun-Times suburbs, McHenry County Living) that we missed. If none, the new site's trust strip should lean on the rating-count math + a 3-quote review carousel rather than press logos.

### Owner-response signal

Per the headless Maps capture, we could not visually confirm whether Sammy's owner replies to Google reviews. RestaurantGuru's parse does not preserve owner replies. **Pre-flight ask:** confirm whether they reply to Google reviews and roughly how often. If they do, the new site should mirror that warmth (e.g., "Thanks!" + signed name in the footer; named-owner welcome line on About). If they don't, surface this as a quick-win we can stand up alongside the new site.

---

## Block 3 — Per-principle violations

### Principle 1.1 — Conversion CTA: BROKEN

Sammy's conversion model is **walk-in / call**. The owned web has zero CTAs because there is no owned web. Every aggregator surface (Restaurantji, Wheree, Yelp, TripAdvisor, RestaurantGuru) makes the user choose between phone-tap and a third-party menu link. The build's first-screen MUST present **two CTAs**: (1) `tel:8476699025` "Call to order" / "Call ahead — we don't take reservations" *(verbatim owner-voice — owner doesn't take reservations, so don't fake one)*, and (2) "See the menu" — anchored to the on-page menu, NOT a PDF.

### Principle 1.2 — Aesthetic-to-bill: HIDDEN

Average bill $10–$20 is unanimous in reviews. Today, a guest searching for Sammy's hits aggregator pages that show the rating but NOT the price band; the Wheree summary calls it "a worthwhile destination" without naming price. The new site should put the **$10–$20 average bill** on the front of the page next to the rating. *Underselling* the price is harmful; *overselling* is fatal. plate-01 downshifted is the right register — do not let the template's default photography or typography drift toward bistro.

### Principle 1.3 — Menu-access friction: BROKEN

Today: there is no menu surface that doesn't pass through (a) Cloudflare bot wall (res-menu) or (b) a third-party site (Restaurantji, Wheree). The rebuild MUST inline the menu (plate-01's `InlineMenuHomepage` or `DenseMenuColumns`). Anti-pattern #5.

### Principle 2.1 — Typography register: N/A → SET CAREFULLY

No current site → no violation, but the build must respect the diner-bar register. plate-01 ships with **Urbanist only**; that's a clean modern-casual choice. Adding a single accent face for the hero wordmark (something with personality but not heritage-serif) would help — consider **Rye** or **Boogaloo** for the wordmark to signal "neighborhood bar" without signaling "fine dining." Decide at build time.

### Principle 2.2 — Palette restraint: N/A → SET CAREFULLY

plate-01's default palette (cream / off-white + near-black + terracotta `#B05927`) is **too bistro**. Downshift to **diner cream + warm-black + a single bar-counter accent** (a single beer-bottle amber or a faded red, NOT a fashion-y terracotta). Keep accent count = 1 per Principle 2.2.

### Principle 2.3 — Photography fidelity: SET TO TIER 3

Inventoried 27 RG photos + 55 Restaurantji photos + Yelp blocked + Tripadvisor blocked. Categories visible: food (8+), interior (3+), nachos, pretzel, fish fry, breakfast plates, "tables," "design," "look at the photo" (general). All user-submitted Google photos — phone-quality, daylight casual. **Tier-3 verdict (correct register match for diner/bar).** No pro shoot is blocking; the build can ship with placeholder Unsplash diner photos and the README must warn the owner to swap for their real photos before public launch.

### Principle 3.1 — Reviews placement: HIDDEN

The rating (4.5 ★ on 500+ Google ratings + 4.5 ★ on Restaurantji) is the strongest trust asset Sammy's has. It is currently surfaced *only* on third-party panels — never on an owned page. The build must put a `RatingChip` (4.5 ★ · 500+ reviews) near the hero CTA stack, and a `ReviewCarousel` (per `restaurant-fork-improvement` skill section 1.1) in the bottom half of the home page.

### Principle 3.2 — "Since YYYY" / heritage: WEAK

Founding year unknown. The build can ship without it (no fabricated date), but the README's pre-flight asks must include "founding year + brief origin story." If the owner replies "since 2014" or "since 2008," the site can surface that on the About + footer. If not, lean on the "hometown bar" verbatim phrasing.

### Principle 3.3 — Chef/owner-as-brand: HIDDEN

"Sammy" the owner-cook is named in reviews ("Sammy is one of the best guys around"). "Mike and Diane" appear too. None of these names live on any owned web today. The build's About section must surface at least one named owner — ideally with a one-line origin story.

### Principle 4.1 — Sub-page count: BROKEN

Zero owned sub-pages today. Per Principle 4.1, the site must ship with: `/`, `/menu`, `/about`, `/contact` (`/visit`). Don't over-architect; plate-01 already has these slots.

### Principle 4.2 — Hours visibility: BROKEN

Hours live on Google + Restaurantji + Wheree. None of those are owned. The build must surface hours **above the fold** + in the footer + in a `LiveOpenStatus` chip ("Open until 2 AM"). The 8 AM – 2 AM 7-day pattern is unusual enough that surfacing it is a competitive moat.

### Principle 4.3 — Phone vs. widget: SET CORRECTLY

Phone is the primary conversion vehicle (no reservations). The build must wire `tel:8476699025` as the primary mobile CTA *and* make it tappable from the hero, footer, and a sticky mobile bar. Do not waste a slot on a reservation widget — that would actively mis-encode the business.

### Principle 5 (first-viewport floor) — BROKEN ENTIRELY

5.1 (visible CTA): no owned site. 5.2 (hero photo): no owned site. 5.3 (positioning copy): no owned site. 5.4 (mobile fit): no owned site. 5.5 (repeat-visit programming surfaced): Tuesday karaoke / Friday fish fry / live-band weekends are buried in third-party reviews and need to live on the owned home page in a `WhatsThisWeek` strip or weekday-anchored programming row.

### Part 8 anti-patterns to AVOID in the build

- **#3 generic copy**: do not write "Welcome to Sammy's, a Huntley tradition." The reviews give us verbatim phrases — use them. If the eyebrow could appear on any restaurant site, rewrite.
- **#5 PDF-gated menu**: build the menu inline.
- **#7 carousel-of-everything hero**: plate-01 doesn't ship one; don't add it. The ReviewCarousel goes in the bottom-half proof section, not the hero.
- **#9 fake "online reservation" button**: do not add one. Sammy's doesn't take reservations.

### Part 10 — aliveness

Today: Facebook is the only alive surface, and it's login-walled. The build must ship with the catalog's mandatory aliveness pattern (per `aliveness-patterns` memory): `LiveOpenStatus` + `LiveMapEmbed` + `ScrollReveal` — all three are already in plate-01's component set. Plus a `WhatsThisWeek` strip surfacing Tuesday karaoke + Friday fish fry as the recurring rituals.

---

## Block 4 — So why are we rebuilding it?

1. **Typing the URL on Yelp / Restaurantji / chamber listings hits a DNS error** — the very first owned-path touch fails. (Block 1 fail #1; Principle 4.1 fail.)
2. **Tapping "Menu" on any aggregator page hits a Cloudflare bot wall** — for SEO crawlers and many guests, the menu is invisible. (Block 1 fail #3; Principle 1.3 fail.)
3. **Tapping "Facebook" on any aggregator hits a mandatory login modal** — the only alive surface is invisible to non-FB users. (Block 1 fail #4; Principle 10 fail.)
4. **The 4.5 ★ rating with 500+ Google reviews is Sammy's strongest asset and lives nowhere on Sammy's own web** — guests have to trust a third-party panel to see it. (Block 2 secret-sauce signals 11 + 12; Principle 3.1 fail.)
5. **The Friday fish fry and Tuesday karaoke (the two ritual occasions guests cite) are buried in review prose** — not surfaced on any owned page. (Block 2 signal 9; Principle 5.5 fail.)
6. **Named staff (Mickey, Lola, Kate, Jen, Jessica) and the owner-cook Sammy are visible across reviews** but invisible on any owned page. (Block 2 signals 1 + 2; Principle 3.3 fail.)
7. **The "down-home small-town hometown bar" tone is consistent across 30+ reviews** but has no owned voice to mirror it back to a first-time guest. (Block 2 signal 5; Principle 8 anti-pattern #3 risk on rebuild copy.)

### Pitch sentence (Hero Lock anchor)

> *"You already have the 4.5-star Google reputation, the Friday fish fry, the Tuesday karaoke, and Sammy himself out from the kitchen — but `sammysbarandgrill.com` doesn't resolve, and your Facebook page makes anyone without an account log in just to see your hours. We rebuilt the owned path: hours and the call-to-order button on the first screen, the HUGE pretzel and the fish fry above the fold, the staff named, Mickey on tap on Tuesday, breakfast served all day and all night."*

### Hero Lock

```json
{
  "wordmark": "Sammy's Restaurant & Bar",
  "wordmark_treatment": "All caps display, slightly condensed, neighborhood-bar register. Cream-on-warm-black or warm-black-on-cream; NO heritage serif.",
  "eyebrow": "HUNTLEY · 8 AM – 2 AM · EVERY DAY · 4.5★ ON 500+ GOOGLE REVIEWS",
  "sub": "Hometown bar with a kitchen that opens at 8 and a fryer that doesn't stop until last call. Friday fish fry, Tuesday karaoke, Sammy out from the kitchen — and yes, the pretzel is HUGE.",
  "hero_photo_subject": "PRIMARY: the HUGE pretzel appetizer on a wooden board with a cold beer (signature dish — cited verbatim by Denise Andren + Restaurantji description). FALLBACK 1: Friday fish fry plate with tater tots (cited by 4+ reviewers). FALLBACK 2: bar interior at golden hour with the back-bar bottle wall + a couple of regulars at the rail.",
  "cta_primary": { "label": "Call to order — (847) 669-9025", "action": "tel:+18476699025" },
  "cta_secondary": { "label": "See the menu", "action": "scroll to #menu (inline, not PDF)" },
  "rationale": "Pulled from review #5 (Derek Petrucci Jr — 'Sammy is one of the best guys'), review #12 (Denise Andren — 'OMG the pretzel appetizer is HUGE!!'), and review #22 (Kelsey Waughon — 'Tuesdays for karaoke night'). The eyebrow carries 4 trust signals (locale + hours + days-open + rating); the sub carries the three repeat-visit anchors (Friday fish fry, Tuesday karaoke, owner-in-the-room) plus the playful HUGE-pretzel callout the owner already uses. Phone is primary CTA per Principle 4.3; menu is inline scroll-anchor per Principle 1.3."
}
```

### Hero Lock notes for the build

- **plate-01's default h1 is the tagline slot.** Per audit-skill Block 4 hero lock note: plate-01 needs explicit promotion of the wordmark over the tagline. The build must edit `PlateHero.tsx` so the wordmark is the h1 and the eyebrow + sub flank it. Don't replace the name with a tagline.
- **8 AM – 2 AM is unusual and worth surfacing in the eyebrow** — most diners close at 9 PM, most bars don't open till 4 PM. Sammy's spans both. Make this a moat.
- **Phone CTA must be `tel:` linked at every breakpoint.** Sticky mobile bar on iPhone 13 should never lose the phone button.

---

## Block 5 — Risks before fork

### Photography inventory + tier gate

| Source | Dish shots | Interior shots | Owner / staff portrait | Exterior | Detail / process |
|---|---|---|---|---|---|
| Current site (none) | 0 | 0 | 0 | 0 | 0 |
| RestaurantGuru | 8+ (food, nachos, dishes, meals) | 3 (interior, design, "tables") | 0 | 0 | unknown |
| Restaurantji | 55 photos claimed (uninspected — no cookie-walled detail) | mixed | unknown | unknown | unknown |
| Wheree | small (gallery thin) | 1+ | 0 | 0 | 0 |
| Yelp | 18 photos (bot-walled — DataDome) | unknown | unknown | unknown | unknown |
| TripAdvisor | unknown (bot-walled) | unknown | unknown | unknown | unknown |
| Owner-supplied | unknown — pre-flight ask | unknown | unknown | unknown | unknown |
| **Total usable estimate** | **8–12 daylight casual** | **3–5 phone-quality** | **0 confirmed** | **0 confirmed** | **0 confirmed** |

**Tier verdict — Tier 3 (DINER-BAR DAYLIGHT).** Tier 3 needs 8–12 bright daylight signature dish shots; we have at least that many in public sources. Quality is phone-grade casual, NOT pro warm-graded. **This is the correct register match for plate-01 downshifted** — Tier 1 / Tier 2 photography would actively *misencode* a small-town diner bar as a bistro. No pro shoot is blocking the build.

**Pre-launch (not pre-fork) photography ask:**
- Confirm Sammy's has rights to ~10 of their best dish photos (pretzel, fish fry, eggs benedict, hickory burger, biscuits & gravy, pizza omelet) and 2–3 interior shots.
- If they don't, the build ships with placeholder Unsplash diner-bar photos and a README note: "Replace with your real photos before public launch."

### Register risk

Natural template fit (`plate-01`) was qualified pre-build in `next-15-bad-no-site-leads-2026-05-01.md` rank-3 entry: *"plate-01, simplified for old-school diner/bar. Avoid upscale bistro treatment."* The risk is that plate-01's default tokens (Urbanist + terracotta + cream) could drift bistro on photos. Mitigation:
- Swap accent token from terracotta `#B05927` to a single warm-amber or faded red.
- Hero photo subject must be the pretzel + beer OR the fish fry — not a moody dish on slate.
- Copy must include "hometown bar" / "8 AM – 2 AM" / "neighborhood" — not "bistro" / "kitchen" / "modern."

### Owner-emotional risk

- The owner is named in reviews ("Sammy"). Surfacing his name on the About page assumes he wants that. Pre-flight ask.
- "Mike and Diane" may be the actual operators, not "Sammy." Ask before publishing.
- Pulling Google review prose verbatim (with first names) is consistent with all prior catalog forks, but the owner should sign off on the 8–10 reviews that go in the ReviewCarousel.
- The HUGE-pretzel branding is owner-voice — they likely love it. But ask before printing it on the hero.

### Heritage-data unknowns (pre-flight asks)

- **Founding year** — unknown. Reviews go back at least 7+ years (Bob Reed, "7 years ago"); the business likely existed before that.
- **Owner names + roles** — Sammy (owner-cook, per review #5)? Mike & Diane (per review #15)?
- **Whether owner replies to Google reviews** — would change the about-page voice direction.
- **Friday fish fry start time + end time** — reviews say "Friday Nite" but don't specify hours.
- **Tuesday karaoke start time** — same.
- **Live band schedule** — "weekends," but which weeks?
- **Domain ownership status** — does the owner still hold `sammysbarandgrill.com` registration, or has it lapsed? If lapsed, the rebuild ships under a fresh domain (e.g., `sammyshuntley.com`). Pre-flight is critical.

### Reservations-platform decision

**Do NOT add a reservations widget.** Sammy's doesn't take reservations. Adding OpenTable / Resy / Tock would mis-encode the business. The conversion model is phone-tap + walk-in.

### Register-split risk (breakfast vs. bar)

Two registers coexist (8 AM diner / 5 PM bar). The build must NOT split into a "Breakfast" page vs. a "Bar" page — that breaks the brand. Instead:
- Single hero serves both registers (the eyebrow names hours that span both).
- Menu page has clearly labelled `Breakfast` (all day) + `Lunch / Bar` + `Friday Fish Fry` sections.
- About page mentions both: "Counter at 8 AM. Last call at 2 AM."

### Pre-flight asks for the owner

1. Confirm domain status — do you own `sammysbarandgrill.com`, or has it lapsed?
2. Confirm owner names (Sammy? Mike + Diane?) and roles. Confirm spelling.
3. Founding year — when did Sammy's open?
4. Friday fish fry: does it actually start at 4 PM, end at close? All-you-can-eat price?
5. Tuesday karaoke: time?
6. Are you OK if we name Mickey, Kate, Lola, Jen, and Jessica on the About page?
7. Do you have ~10 of your own dish photos we can use, or should we ship with placeholder photos and swap later?
8. Do you reply to Google reviews? (If yes: we'll mirror that warmth on the site footer. If no: easy quick-win we can stand up alongside.)

### Status footer

**Qualified pre-fork.** Photo tier: 3. Recommended template: `plate-01` (downshifted: Urbanist-only + amber accent in place of terracotta + diner-bar copy register). Pre-flight asks listed above. Build can proceed with placeholder photos and verify-on-launch text; nothing in the audit is blocking.
