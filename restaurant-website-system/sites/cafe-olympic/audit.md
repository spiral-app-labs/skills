# Cafe Olympic — Pre-Fork Audit

**Date:** 2026-04-30
**Slug:** `cafe-olympic`
**URL audited:** https://cafeolympiccrystallake.com/
**Address:** 90 N Williams St, Crystal Lake, IL 60014
**Phone:** 815.459.4100
**Recommended template hypothesis:** `latte-01` (Tier-3 lunch-bright-casual)

**Methodology note (Block 1 mobile capture caveat):** the local preview MCP browser is sandboxed to `localhost:3108` — cross-origin navigation to `cafeolympiccrystallake.com` and to Google Maps was blocked by the sandbox, so live mobile screenshots and Google-reviews-with-highest-filter scraping were not possible from this session. The mobile-state subsection in Block 1 is reconstructed from the page's HTML structure and asset URLs (verifiable via `WebFetch`); the review packet in Block 2 is built from Tripadvisor (75 reviews, full verbatim), Restaurant Guru (2,211-vote aggregate + verbatim Google quotes), Restaurantji (347 reviews + verbatim quotes), and the two Shaw Local 2019 ownership-transition articles. A live mobile-screenshot pass is deferred to a pre-flight ask in Block 5.

---

## Block 1 — Verbatim findings

| Field | Verbatim / observed |
|---|---|
| Platform | WordPress, self-hosted ("Proudly powered by WordPress" in footer) |
| Hero copy | "Classic American Breakfast" served all day long |
| Wordmark / h1 | "Cafe Olympic" (no display-typeface treatment — generic WordPress theme) |
| CTAs | "ORDER ONLINE" (→ `toasttab.com/cafe_olympic_cl`) · "OUR MENU" |
| Reservation flow | **Phone-only.** No OpenTable / Resy / Tock / Toast widget. No "call us" button — phone number is a static line in the contact section. |
| Address | "90 N Williams St, Crystal Lake, IL 60014" |
| Phone | "815.459.4100" |
| Email | hello@cafeolympiccrystallake.com (functional) |
| Hours | "Open 8am–3pm Every Day!" — single string, no per-day list, no live open/closed indicator |
| Menu format | **Image-only.** Files are `PDF-Print-11x17-Menu-FINAL.jpg` + lunch + kids menu — flattened JPGs of an 11×17 print menu, no HTML text, no item search, no per-section anchors |
| Sub-pages | 4 total — Home, Menus, Kids Menu, Beverages/Desserts. **No About / Story / Owners / History page.** `/about/` returns 404. |
| Photography on site | 4 photos total — `IMG_2776.jpeg`, two from Nov 2019 batch, one undated. Mix of hero photo + breakfast plate + historic-building exterior + contact-section photo. |
| Heritage signal on site | "Currently on its third generation of ownership, Cafe Olympic has been serving the community and beyond since 1984." + "Construction on the building was completed in 1892 by Dr. E. E. Ballou." — both buried in body copy, neither used as a hero badge or repeated anywhere |
| Owner / chef story | Owner names not on the site. Chef name (Jon Vasquez per Shaw Local 2019) not on the site. |
| Reviews displayed on site | None. No star count, no quote, no aggregator badge. |
| External trust badges | None. No Tripadvisor / Yelp / Google rating, no Best-of, no Chamber, no Downtown Crystal Lake link-back. |
| Aliveness elements | None. No Google Map embed, no live open/closed status, no scroll-reveal, no current specials, no Instagram embed. |
| Social links | **Zero.** No Instagram, Facebook, X anywhere on the page (verified by anchor-tag scan). The Instagram account `@cafe_olympic_cl` (1,717 followers) and the Facebook page `CafeOlympic` both exist but are not linked from the site. |
| Greek-heritage cue | None. The name "Olympic" is the only signal. The Greek skillet, gyro, and pasticio (named in reviews + once-Greek-owned) appear nowhere in the site copy. |
| Copyright string | "Proudly powered by WordPress." (no year, no proprietor attribution) |

### Mobile state — reconstructed from HTML structure + asset URLs

Live screenshots not captured (see methodology note). Documented failures the new build must fix:

1. **Image-only menu is the worst-case mobile failure.** A flattened 11×17-print JPG forces pinch-zoom-and-pan on every iPhone. Item names cannot be searched. Allergens cannot be filtered. iOS Safari does not render large JPGs cleanly inline at retina scale. (Principle 1.3, 5.4.)
2. **No reservation surface, no tap-to-call.** Phone number is static text. On iOS Safari the OS will try to autodetect it as a `tel:` link, but that depends on format — and the site's structure does not surface phone as a primary CTA. A breakfast diner whose conversion model is "show up + maybe call ahead for big party" should have a single big tap-target reading **Call (815) 459-4100**, anchored sticky on mobile. There is none. (Principle 1.1, 4.3.)
3. **No social-link strip.** A 1,717-follower Instagram with active dish photography is invisible to a first-time visitor. Mobile diners who expect IG-confirmation-before-driving leave the site without that signal. (Principle 10 — aliveness.)
4. **"Open 8am–3pm Every Day!" is the only hours treatment.** No per-day list, no holiday handling, no live open/closed indicator. A Sunday-morning visitor who lands at 7:50am cannot tell if it's about-to-open or already-closed. (Principle 4.2.)
5. **External Toast Tab redirect breaks the flow.** "Order Online" punts to `toasttab.com/cafe_olympic_cl` — a different visual register, no back-button preservation of the brand frame.

Each of these is referenced verbatim in Block 4.

---

## Block 2 — Secret Sauce (review-derived)

**Aggregate signal across platforms (multi-source, dated 2026-04):**

| Platform | Rating | Volume | Notes |
|---|---|---|---|
| Google | 4.6 | 1,169 | primary trust mass |
| Yelp | ~4.5 | 204 | 77 photos posted |
| Tripadvisor | 4.5 | 75 | #11 of 138 in Crystal Lake |
| Facebook | 4.6 | 716 | active page |
| Restaurantji | 4.4 | 347 | 71% five-star |
| Restaurant Guru (composite) | 4.6 | 2,211 | aggregator-of-aggregators |

What this combined volume tells us: this is **not** a low-traffic site; nearly 2,000 first-party Google + Facebook reviews at a 4.6 average is a strong, durable signal. The current site surfaces zero of it.

**The synthesis:** guests come back to Cafe Olympic because it feels like a Sunday-morning ritual — small, run by people who know your face, generous portions, homemade everything (cinnamon rolls, soups, pies), and a Greek-American skillet/pasticio sub-register that long-time regulars call out by name. It is a *neighborhood-favorite breakfast diner with a Greek-heritage backbone*, currently in a hand-off generation: the Angelos family ran it for 21 years and sold it to a Crystal-Lake-native trio in October 2019. The new owners are explicit about wanting to keep the soul intact while modernizing the kitchen.

### 13-category extraction

**1. Owner / family story.** Two layers:
   - Departing (Angelos era, 1998–2019): *"Without you we'd be nothing"* and *"It's not goodbye, but see you soon!"* — Chris and Nancy Angelos, farewell letter, Shaw Local Oct 2019.
   - Current (since 2019): Rachel Skubiszewski-Mucci (Crystal Lake native, lifelong patron), Anthony Kern, Rosanna Cermak. *"There's something magical about this spot."* — Rachel, Shaw Local Oct 2019. *"It's a little nerve-wracking, too, because we're not Chris and Nancy."* — same article.

**2. Named staff.**
   - *"Caitlyn, our waitress, is Superwoman"* — CWC, Tripadvisor Dec 2018 (the verbatim phrase is unusual and hero-quotable).
   - *"Say hi to the owner Chris, he's the one cooking your meal."* — kidnarsky, Tripadvisor Jun 2014.

**3. Chef.** Jon Vasquez took over the kitchen from Chris Angelos in October 2019 (Shaw Local). Not currently surfaced anywhere on the site or socials in a way that lets a guest connect a face to the food.

**4. Signature dishes.** Items with 2+ independent mentions across platforms:
   - **Cinnamon rolls** (3/4-lb, the most-cited dish; flagged as homemade in the site's own meta description)
   - **Greek skillet** — *"My husband and I both got the Greek skillet. Every part of it was amazing!"* (amyzalew, Tripadvisor Sep 2015)
   - **Pasticio** (Greek baked-pasta) — *"Every other Wednesdays there is a special treat of home made pasticio"* (ScottM1, Tripadvisor 2013) — long-running scheduled special
   - **Gyro** — *"a well run friendly place with greek backround great gyro"* (tonygags7, Tripadvisor Nov 2017)
   - **Cinnamon-roll French toast** — *"I asked if they had cinnamon roll French toast...yes, they could make it."* (clp2csp, Jun 2017) — accommodation moment
   - **Bruncherito**, **Monte Cristo on thick french toast**, **Chicken & waffles**, **Avocado toast**, **Smash burger**, **Vegan chicken parm**, **Grownup grilled cheese** (Calmac3, Dec 2019), **Fried chicken sandwich**, **Pecan square**, **Hash browns**, **Breakfast gravy** (Tyler Farmer, Restaurant Guru, recent Google), homemade fruit pies and biscuits

**5. Vibe / ambiance / room.**
   - *"Small and quaint... Don't be afraid if there are a dozen people waiting outside, you'll get your seat in a few minutes"* (kidnarsky, Tripadvisor 2014)
   - *"Nothing fancy, focus on good food, great waitress."* (pochen9, Jan 2020)

**6. Outdoor seating / patio.** Outdoor sidewalk tables exist (per BringFido + Restaurantji). *"Outdoor seating with train views"* (Restaurantji aggregate). Pet-friendly on the patio. Currently mentioned nowhere on the site — surfacing it would close a real gap (downtown-corner, sidewalk-table, train-watching is a *register-defining* asset).

**7. Bar program.** Liquor license added by new ownership 2019; *"brunch-style drinks like mimosas on tap"* (Shaw Local 2019). Recent Google review: *"Have bar service too which is a plus."* (Chris Gallicho, Restaurant Guru, ~1mo recency). Bar is invisible on the current site — undersurfaced.

**8. Heritage / years in operation.**
   - Restaurant since **1984** (third-generation framing).
   - Building constructed **1892** by Dr. E. E. Ballou.
   - Angelos-family Greek ownership ran 1998–2019 (~21 years).
   - Current ownership since **October 2019**.
   - *"Although I've lived in Crystal Lake for 28 years, I've never eaten here, until this morning."* (clp2csp, 2017) — the discovery-by-locals signal.

**9. Occasions.** Sunday breakfast ritual is dominant. *"We eat at Cafe Olympic almost every Sunday morning."* (kidnarsky, 2014). Family with kids ("My kids and I love this place," Restaurantji Sep 2023). Travelers' return-to-town ritual (*"This was my favorite place to eat breakfast when I'm in town."* — rockabilly3259, May 2014).

**10. Service moments.**
   - *"This has to be the friendliest staff we have come across in a while."* (Rusty A, Tripadvisor Mar 2022)
   - *"They make you feel like family."* (Restaurantji Dec 2024)
   - *"It's the only place in town where my dairy free family has zero issues eating great food."* (Restaurantji Sep 2023) — dietary accommodation signal
   - *"The staff is warm and welcoming, and the service is smooth and efficient."* (Tyler Farmer, Restaurant Guru, recent)

**11. Value.**
   - *"Food is always good and plenty of it."* (RustyMiller, 2018)
   - *"generous"* (Calmac3, Dec 2019)
   - *"One person can order a smaller meal and share with other's full breakfast."* (jack1611_12, 2017)
   - *"Great food, great service, great prices!!!"* (Kari "Yorkie", Google, ~27 days ago)

**12. Hospitality warmth.** Already covered above — *"feel like family"*, *"friendliest staff"*, *"warm and welcoming"*.

**13. Second register.** Bar / mimosa-on-tap brunch is the live second register — added 2019, growing in mentions. Worth surfacing as a small, not-dominant strip on the new site.

### Owner voice — verbatim phrase bank

Four-eight phrases to seed copy in the new site (hero sub, About paragraph, footer tagline, "Letter from us" component, 404 voice):

```
[
  { phrase: "There's something magical about this spot.",
    source: "Rachel Skubiszewski-Mucci, Shaw Local 2019-10-18",
    tone: "warm" },
  { phrase: "It's a little nerve-wracking, too, because we're not Chris and Nancy.",
    source: "Shaw Local 2019-10-18",
    tone: "specific" },
  { phrase: "This is the first that's actually ours.",
    source: "Shaw Local 2019-10-18",
    tone: "proud" },
  { phrase: "Without you we'd be nothing.",
    source: "Chris & Nancy Angelos farewell letter, Shaw Local 2019-10-09",
    tone: "heritage" },
  { phrase: "It's not goodbye, but see you soon!",
    source: "Angelos farewell letter, 2019-10-09",
    tone: "warm" },
  { phrase: "We have seen your children grow up the last 21 years as you have watched our kids grow up!",
    source: "Angelos farewell letter, 2019-10-09",
    tone: "heritage" },
  { phrase: "Classic American Breakfast — served all day long.",
    source: "current site hero",
    tone: "specific" },
  { phrase: "Famous 3/4-lb cinnamon rolls.",
    source: "current site meta description",
    tone: "playful" }
]
```

The Angelos farewell letter is **gold** — it is the only existing piece of authentic owner-voice copy in the entire information environment. The new site should weave a "Letter from us" page that explicitly hands off from the farewell letter to the new-owner welcome. That single move converts a generation-handoff (a story currently absent from the site) into the trust spine of the brand.

### External trust signals

Searched: WebSearch for "Cafe Olympic Crystal Lake" + "best of" + "award" + "Daily Herald" + "Northwest Herald 2024 2025"; Chamber listing; downtown directory.

```
[
  { source: "Tripadvisor", year: 2026, claim: "#11 of 138 restaurants in Crystal Lake", url: "https://www.tripadvisor.com/Restaurant_Review-g35860-d3862704-Reviews-Cafe_Olympic-Crystal_Lake_Illinois.html" },
  { source: "Google", claim: "4.6 / 1,169 reviews", url: "https://www.google.com/maps/search/Cafe+Olympic+Crystal+Lake+IL" },
  { source: "Crystal Lake Chamber of Commerce", claim: "Member listing", url: "https://business.clchamber.com/directory/details/cafe-olympic-4731023" },
  { source: "Downtown Crystal Lake", claim: "Featured place / downtown directory", url: "https://downtowncl.org/places/cafe-olympic/" },
  { source: "Naturally McHenry County", claim: "Tourism listing", url: "https://www.naturallymchenrycounty.com/listing/cafe-olympic/204/" },
  { source: "McHenry Life", claim: "Dining feature", url: "https://mchenrylife.com/dining-entertainment/restaurants/crystal-lake/cafe-olympic/" },
  { source: "Shaw Local", year: 2019, claim: "Generation handoff coverage (2 articles, Oct 2019)", url: "https://www.shawlocal.com/2019/10/18/new-owners-of-cafe-olympic-in-crystal-lake-discuss-plans-transition/an9vrbv/" }
]
```

**Honest gap:** no "Best Of" / Northwest Herald / Daily Herald award turned up in search — that's an unknown, not a "no". Pre-flight ask the owner: *"Have you ever placed in Northwest Herald Best Of, Daily Herald Best Of McHenry, Crystal Lake-magazine reader poll, or any community vote?"* The fork should leave a press strip stub even if no item lands today, because the volume signal alone (1,169 Google reviews) deserves a strip.

**Owner-response signal:** the Tripadvisor page does not show owner replies on the reviews I fetched (the platform supports them, but none surfaced for Cafe Olympic). Google owner-replies status couldn't be verified from this session due to the sandbox. **Pre-flight ask the owner**: *"Do you reply to Google reviews? When did you last? — we'll mirror that signal on the new site."* If they don't, the new site should *create* an aliveness rhythm to substitute (this-week's-special, IG embed, weekly chef post), since absence of owner-replies is itself a Principle-10 hole.

---

## Block 3 — Per-principle violations

**Principle 1.1 — Conversion CTA mismatch. WEAK.** Conversion model for an 8am–3pm breakfast diner with phone-only "reservations" should be: (a) a sticky **Call (815) 459-4100** tap-target on mobile, (b) **Order Online** for takeout, (c) **Get Directions / View Map** for "I'm in town and want to know if it's open." Current CTAs are "ORDER ONLINE" + "OUR MENU" — neither of which addresses the dominant "is it open / can I drive over now" job-to-be-done. (Cross-ref Block 1 mobile failure #2.)

**Principle 1.3 — Menu friction. BROKEN.** Image-only 11×17 print-menu JPG is the single most-violating asset on the site. No HTML, no allergen flags, no anchors, no text search, no mobile readability without pinch-zoom. (Cross-ref Block 1 mobile failure #1.)

**Principle 2.1 — Typography register. WEAK.** No display-typeface treatment on the wordmark. Generic WordPress theme. The name "Cafe Olympic" should signal *neighborhood diner with a Greek-heritage spine* — instead it's body-copy serif.

**Principle 2.3 — Photography fidelity. UNDERSELLS.** Four photos on the homepage including a building-exterior shot pulled in November 2019. The IG (@cafe_olympic_cl, 1,717 followers) and Yelp (77 photos) and Restaurantji (94 photos) prove that better dish photography exists — it is just not flowing to the site. (Cross-ref Block 5 photo inventory.)

**Principle 3.1 — Reviews placement. HIDDEN.** 4.6★ / 1,169 Google + 4.6★ / 716 Facebook + #11 of 138 Tripadvisor + Restaurantji 71%-five-star — none of this trust mass is visible on the site. A breakfast diner that polls top-12 in town should be flexing that.

**Principle 3.2 — "Since YYYY" signal. UNDERSELLS.** "Since 1984" is in body copy — never in the hero, never as a wordmark badge, never repeated. Building-since-1892 is even better and it's also buried.

**Principle 3.3 — Chef-as-brand. MISSED.** Chef Jon Vasquez took over kitchen in October 2019 (named in Shaw Local). Not on the site. The "homemade everything" pillar — the entire reason guests use the word *homemade* in reviews — has no human face.

**Principle 4.2 — Hours signaling. WEAK.** "Open 8am-3pm Every Day!" is a single string. No per-day list, no holiday handling, no live open/closed indicator. (Cross-ref mobile failure #4.)

**Principle 4.3 — Phone vs widget. WEAK.** Phone number is static text; not a primary tap-target on mobile. (Cross-ref mobile failure #2.)

**Principle 5.1 — First-viewport floor. WEAK.** Hero is a generic stock-feel breakfast plate + the line "Classic American Breakfast served all day long". No proof, no rating, no since-claim, no occasion. The five-second test fails — a first-time visitor learns nothing about why this place is different.

**Principle 5.2 — Photography tier. UNDERSELLS.** Site uses 4 mid-grade photos when the broader inventory across platforms (IG + Yelp + Restaurantji + FB) is materially better. (Cross-ref Block 5.)

**Principle 5.3 — Hero copy. BROKEN per anti-pattern Part 8 #3.** *"Classic American Breakfast served all day long"* could appear on every diner site in America. Zero owner-voice, zero secret-sauce, zero proof, zero occasion. Must be rewritten from the Owner-Voice phrase bank.

**Principle 5.4 — Mobile floor. BROKEN.** See Block 1 mobile failures 1–5.

**Principle 5.5 — Repeat-visit signal. DEAD.** Nothing changes on the site week-to-week. No "this week's special", no IG embed, no current-month event. A diner whose Wednesday-pasticio rhythm goes back a decade has zero reason to leave the site static.

**Part 8 — Anti-patterns.** #3 generic-could-be-anywhere hero (cited above). #5 phone-number-not-a-tap-target. #7 image-only menu. #11 missing About / owner page.

**Part 10 — Aliveness layer. DEAD.** No `LiveOpenStatus`, no `LiveMapEmbed`, no scroll-reveal, no IG embed, no current specials. This is the largest per-principle gap on the site and the most cost-effective single block to fix in the fork.

---

## Block 4 — So why are we rebuilding it?

1. **The site doesn't show that nearly 2,000 people have publicly rated this place 4.6★.** A breakfast diner ranked #11 of 138 in Crystal Lake should not have a website that leads with a generic stock plate and zero proof. (Block 3 Principles 3.1, 5.1; Block 2 aggregate trust mass.)

2. **The Greek-heritage spine — the actual differentiator — is invisible.** Greek skillet, gyro, pasticio-on-Wednesdays, the Angelos family's 21-year run — none of it lives on the site. New owners explicitly committed to preserving this register but currently the only "Olympic" cue is the name itself. (Block 2 categories 4 + 8; Block 3 Principle 2.1.)

3. **The image-only print-menu JPG is the biggest single mobile failure.** A guest opening the menu on iPhone gets a pinch-zoom-and-pan experience for a 11×17 JPG. (Block 1 mobile failure #1; Block 3 Principles 1.3, 5.4.)

4. **There is no "is it open right now / how do I call right now" path on mobile.** A Sunday-morning diner is exactly the workflow this site fails. (Block 1 failure #2 + #4; Block 3 Principles 1.1, 4.2, 4.3.)

5. **The ownership-handoff story is gone.** The Angelos farewell letter — the most authentic owner-voice document in the brand's history — is nowhere on the site. Surfacing the handoff (Angelos→current trio) is the trust move that closes the "are these the people I remember" loop for long-time regulars. (Block 2 Owner-voice bank; Block 3 Principle 3.3.)

6. **No active rhythm.** The IG (1,717 followers) is alive; the site is dead. No specials, no IG embed, no LiveOpenStatus. (Block 3 Part 10.)

**Pitch sentence (verbatim, names a Block-2 asset):** *"Your Greek skillet, the Wednesday pasticio, Caitlyn-the-waitress, the 1,169-review Google rating, and the Angelos family's 21-year farewell letter are the five things that make Cafe Olympic the Sunday-morning ritual it is — and right now your website shows zero of them. We rebuild around those five and add a real mobile call-button + LiveOpenStatus so a Sunday driver can decide in one tap."*

### Hero lock

```
{
  wordmark: "Cafe Olympic
              — display serif (Cormorant Italic or similar warm-heritage face),
              two-tier mark with 'CAFE' set narrow above 'OLYMPIC' in larger weight;
              consider an understated Greek-key motif as a divider, never as decoration",
  eyebrow:  "CRYSTAL LAKE BREAKFAST RITUAL · SINCE 1984",
  sub:      "Three generations on the corner of Williams and Brink — homemade cinnamon rolls,
              the Greek skillet, and Wednesday pasticio. 4.6★ / 1,169 Google reviews and
              counting. Open 8 to 3, every day.",
  hero_photo_subject: "primary: top-down breakfast spread anchored by a 3/4-lb cinnamon roll
                        + a Greek skillet, served on the diner's actual plates, warm window
                        light through the 1892 storefront windows.
                        fallback 1: candid of Caitlyn (or any named server) plating to a regular's
                        table — verify which server is photogenic + on-staff with the owners.
                        fallback 2: exterior of the corner storefront at golden-hour with the
                        sidewalk patio set, train rail visible in the background.
                        gating: the primary requires a single warm-light dish shoot; if not
                        scheduled, fallback 2 (existing photography may be reusable) ships.",
  cta_primary:   { label: "Call (815) 459-4100",
                   action: "tel: link, sticky on mobile" },
  cta_secondary: { label: "Today's menu",
                   action: "scroll to inline HTML menu (NOT a JPG)" },
  rationale: "drawn from
    (1) RustyMiller 2018 'plenty of it' + Restaurant Guru recent 'great food, great service, great prices' (the value + ritual signal);
    (2) amyzalew 2015 Greek-skillet quote + ScottM1 2013 pasticio-Wednesday quote (the heritage spine);
    (3) Restaurant Guru aggregate 4.6 / 2,211 (the trust mass);
  conversion-model rationale: 1.1 dictates phone-tap-target as primary on mobile because reservation flow is phone-only and the dominant job-to-be-done is 'is it open / can I drive over now'."
}
```

**Constraint checks:**
- Wordmark = restaurant name (✓), with typographic register-coding (✓).
- Eyebrow ≠ generic — "Crystal Lake Breakfast Ritual · Since 1984" carries occasion + place + heritage in five words (✓ Principle 8 anti-pattern #3 cleared).
- Sub uses owner-voice register ("three generations on the corner of Williams and Brink" mirrors the Angelos farewell-letter cadence) AND carries an external-trust signal (4.6★/1,169 Google) (✓).
- `hero_photo_subject` uses photos likely already in inventory but the *primary* requires a single targeted shoot; gated explicitly.
- `cta_primary` matches conversion model (Principle 1.1) — phone-first.

**Long-name caveat:** "Cafe Olympic" is short, no wrap risk on plate/latte sizes — no breakpoint reduction needed.

**Template fit on the wordmark pattern:** `latte-01` already supports the two-tier wordmark + eyebrow + sub layout per the catalog memory — no component-level fork work needed for the hero structure. The Greek-key dividers and warm-window-light photography would be styling-level work.

---

## Block 5 — Risks before fork

### Photography inventory + tier verdict

| Source | Dish | Interior | Chef portrait | Exterior | Detail / process | Notes |
|---|---|---|---|---|---|---|
| Current site | 1 | 0 | 0 | 1 | 0 | thin |
| Google Maps | unknown | unknown | unknown | unknown | unknown | not directly scrapable from this session |
| Yelp | est. 30+ | some | 0 known | yes | some | 77 total photos |
| Restaurantji | est. 50+ | yes | 0 known | yes | yes | 94 total photos |
| Tripadvisor | yes | yes | 0 known | yes | some | photo count not specified |
| Instagram (@cafe_olympic_cl) | likely many | likely | likely | likely | likely | 1,717 followers, post-count unknown without owner access |
| Facebook (CafeOlympic) | yes | yes | unknown | yes | unknown | active page |
| **Total usable estimate** | **30+ across platforms, but warm-light + composition + resolution unverified from this session** |

**Tier verdict: Tier-3 ready. Tier-2 conditional on owner-shared IG/FB grid review. Tier-1 blocked.**

Rationale: a daytime breakfast diner is a Tier-3 register *by business model* — Principle 5.2 says lunch-bright-casual templates need 8–12 bright-daylight signature dish shots, which is far below the existing inventory ceiling. We don't need to chase Tier-1. The right move is **bright daylight + window light + plate-honest** photography (the latte/saladify class), not warm-low-light editorial. The Tier-3 verdict aligns with the build-queue's pre-existing routing to `latte-01`.

**Photo pre-flight ask:** *"Send us your IG grid camera-roll so we can pick the 12 best dish + interior + exterior shots for the new site. If the cinnamon roll, Greek skillet, and Wednesday pasticio aren't all in there with one bright clean shot apiece, we'd schedule a 2-hour daylight shoot."*

### Register risk

Natural template fit `latte-01` (Tier-3 lunch-bright-casual) is consistent with the daytime 8am–3pm bill of goods (~$10–20/person breakfast/brunch). **Risk:** `latte-01` skews European-cafe-coffee-bar in its default styling — too clean / too European for a third-generation Greek-American diner with a 1984 patina. **Mitigation:** style the fork toward "Crystal Lake corner-store breakfast diner" via (a) a warm cream + ochre + diner-red palette tweak, (b) a subtle Greek-key motif used as a section divider only, (c) a "Letter from us" page bridging Angelos→new-owners. Do NOT overshoot into a `bramble-01` heritage-bistro register — the ticket and the daypart don't support it. Cross-check `template-inventory.md` before fork.

### Owner-emotional risk

- Asking for **WordPress backend access** vs. shipping a Next.js fork hosted separately: standard handoff conversation, but the current owners may have low technical literacy (only 4 site sub-pages in 6 years suggests low-touch site ops). Pre-flight: ask whether they want to keep WordPress-as-CMS or move to a static fork + Toast-Tab embed.
- Asking to **surface the Angelos farewell letter** publicly — even though it's already public on Shaw Local, the new owners may want to phrase the handoff differently. Get explicit owner sign-off before quoting the farewell verbatim on the new site.
- Asking to **name Caitlyn (or any named server) on the site** — get explicit consent.
- Asking to **photograph chef Jon Vasquez** — verify he's still on staff (Oct 2019 → 2026-04 is 6.5 years; turnover is plausible) before building the chef-as-brand block.

### Heritage-data unknowns (ask owner)

- Founding year **of the original Cafe Olympic** (pre-1984 building had what tenant?) — the "since 1984" is the right anchor unless owner can prove an earlier ribbon-cut.
- Original 1984 owner name — *whose* generation 1 was this? "Third generation" framing breaks if generation 2 = Angelos and generation 3 = current trio (the trio is unrelated to Angelos by family). Pre-flight clarify: *"When you say 'third generation,' do you mean the three ownership eras (1984-founders → Angelos 1998 → you 2019), or three generations of one family?"* This phrasing matters for the About page voice.
- Whether **mimosas-on-tap** is still active (announced 2019; verify still on the bar program in 2026).
- Northwest Herald / Daily Herald / Crystal Lake reader-poll Best-Of placements (search returned nothing; confirm with owner).

### Reservations-platform decision

Recommend **stay phone-only** for breakfast diner economics. Reservations widget would oversell the register and impose a ticket the diner can't justify. The fork should ship a sticky `tel:` button on mobile + a per-day hours table + LiveOpenStatus + a Toast-Tab embed for online order (already running, no migration needed). No OpenTable / Resy / Tock.

### Register-split risk

Two second-register surfaces to integrate carefully:
1. **Bar / mimosa-brunch program** — small strip below hero, NOT a dedicated nav item. If we promote it to nav, we drift into "brunch place" and lose the diner spine.
2. **Outdoor patio / sidewalk seating with train view** — surface in a single visual + caption pairing on the home page. Don't oversize it into a "patio dining" landing page.

---

## Status footer

**Status:** Qualified pre-fork. Five-block audit complete. Live mobile screenshots pending owner review (preview-MCP sandbox blocked cross-origin capture from this session).

**Recommended template hypothesis:** `latte-01` (Tier-3 lunch-bright-casual), style-tuned with warm cream + ochre + diner-red palette, subtle Greek-key dividers, two-tier wordmark + eyebrow + sub hero per Hero Lock, sticky `tel:` button as primary mobile CTA, inline HTML menu (replacing JPG), LiveOpenStatus + LiveMapEmbed + ScrollReveal aliveness baseline, IG embed strip, Letter-from-us page bridging Angelos → current trio.

**Pre-flight asks for the owner (5):**
1. Send 12 best dish/interior/exterior photos from IG/FB camera-roll (or schedule a 2-hr bright-daylight shoot).
2. Confirm naming on-site: chef Jon Vasquez still on staff? Caitlyn still serving? Permission to use first names?
3. Clarify the "third generation" framing (three ownership eras, or three family generations?) and the 1984 founding-owner name.
4. Confirm reservation policy stays phone-only and we sticky a tap-to-call CTA on mobile.
5. Confirm permission to quote the Angelos farewell letter ("Without you we'd be nothing" / "It's not goodbye, but see you soon!") on a new "Letter from us" page that bridges to your own welcome.
