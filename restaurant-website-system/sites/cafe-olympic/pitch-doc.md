# Cafe Olympic Pitch Doc

## 60-Second Read

Cafe Olympic has been on the corner of Williams and Brink since 1984 — a Crystal Lake breakfast ritual with a Greek-American spine (homemade cinnamon rolls, the Greek skillet, and Wednesday pasticio) and a 4.6★ / 1,169-review Google reputation that almost nobody on a phone ever sees.

The leak is that the site hides every reason to drive over. There is no "is it open right now," no tap-to-call, no menu a phone can read (the menu is a flattened 11×17 print JPG), no rating, no Greek heritage cue, no Angelos handoff story, and no social link to a 1,717-follower Instagram that posts the food the cafe is actually known for.

The prototype keeps the breakfast-diner register — bright, warm, generous — and makes the secret sauce visible: the cinnamon roll, Caitlyn-the-waitress, the corner-and-patio, the Angelos-to-current-owners letter, and the trust mass guests have already built across Google, Tripadvisor, Facebook, and Restaurant Guru.

## Call Opener

> "Your cafe is a 4.6-star Crystal Lake ritual that goes back forty years — and your website doesn't show a star, the cinnamon roll, the Greek skillet, the Wednesday pasticio, or the handoff letter Chris and Nancy wrote. I mocked the version where every one of those is in the first viewport, and a guest on a phone gets a tap-to-call button before they have to think."

## Where The Current Site Leaks Revenue

| Leak | Why It Matters | Standard Practice | Prototype Fix |
|---|---|---|---|
| Image-only 11×17 print menu JPG. | Phones can't read it without pinch-zoom. Search, AI, and accessibility tools can't read it at all. | Serve the menu as text in HTML, with sections, prices, and dietary tags. | Inline HTML menu page with all five sections + prices + descriptions. Toast Tab order link preserved as the primary online-order path. |
| No "is it open / can I call now" path on mobile. | Sunday-morning diners deciding in their car bounce when there's no obvious phone CTA. | Tap-to-call sticky bar + LiveOpenStatus pill above the fold. | Hero leads with a red **Call (815) 459-4100** button + mobile sticky **Call us** button + nav-bar live-open-status pill ("Closed · opens at 8am"). |
| 4.6★ across nearly 1,900 first-party Google + Facebook reviews. Zero shown on the site. | The strongest credibility lift this property can make is showing trust mass it has already earned. | Put aggregate proof in the hero strip + a verbatim review wall mid-page. | Trust strip under the hero (Google · Tripadvisor · Restaurant Guru · Facebook); below that, a 4-up review wall with verbatim quotes (no reviewer names). |
| Greek heritage is invisible. | The Greek skillet, gyro, Wednesday pasticio, and the Angelos-family Greek ownership are what guests rave about — and what makes Cafe Olympic different from every other diner in McHenry County. | Surface heritage in typography, dividers, and one short Letter-from-us page. | Cormorant display wordmark, ochre Greek-key dividers flanking the hero h1 and section headings, and a dedicated `/letter` page that bridges Chris & Nancy Angelos's 2019 farewell to the current owners' welcome. |
| The Angelos→current-owner handoff is buried. | Long-time regulars want to know "are these the people I remember." Currently nothing on the site closes that loop. | Surface the generation handoff as a trust spine. | "A letter from us" page reproduces the Angelos farewell verbatim ("We have seen your children grow up the last 21 years…") and pairs it with the current trio's welcome. Linked from the homepage and the footer. |
| Zero social links — IG @cafe_olympic_cl with 1,717 followers is invisible from the site. | Mobile diners check the IG before they drive over. If the site doesn't link, they trust the brand less. | Surface Instagram + Facebook in the footer with real `target="_blank"` links. | Footer carries Instagram + Facebook with real hrefs. Aliveness baseline (LiveOpenStatus + LiveMapEmbed + ScrollReveal) shipped on every section. |
| No reservation/walk-in policy stated anywhere. | Guests planning a 6-top can't tell whether to call ahead. | State it: walk-ins welcome, call ahead for 6+. | Hero sub + footer + Concierge all repeat: walk-ins welcome, no reservation needed; for 6+ call (815) 459-4100. |

## What We Fixed

- **Secret sauce:** the homepage names the 3/4-lb cinnamon roll, the Greek skillet, Wednesday pasticio, Caitlyn-the-waitress, and the corner-and-patio in a 5-card "What regulars come back for" grid.
- **Proof:** Google 4.6★ / 1,169, Tripadvisor #11 of 138, Restaurant Guru 4.6★ / 2,211, Facebook 4.6★ / 716 — all surfaced in a trust strip under the hero, then echoed in a verbatim review wall.
- **Greek-American register without theme-park:** Cormorant display wordmark, subtle ochre Greek-key dividers as section breaks (never as decoration), warm-cream + diner-red palette.
- **Menu/search:** inline HTML menu replaces the print-JPG. Allergen-readable, screen-reader-readable, AI-crawler-readable.
- **Mobile-first conversion:** sticky Call button bottom-left, dual hero CTA (Call + View menu), live open/closed pill in nav and footer.
- **Generation handoff:** the Angelos farewell letter and the current owners' welcome share a `/letter` page — the trust spine the old site had no surface for.
- **AI Concierge:** floating "Ask the host" launcher answers menu/hours/walk-in/heritage questions in the cafe's voice, anchored to the same fact set as the site. Backed by Claude Haiku 4.5.

## Demo Path

1. **Open mobile.** Hero loads with eyebrow + wordmark + 4.6★ chip + dual CTA. Tap **Call (815) 459-4100** — phone dials.
2. **Scroll to LovedGrid.** "These are the five things every regular names. The site finally has them on the front page."
3. **Scroll to inline menu.** "Same items, same prices — but a phone can read them now without pinching, and so can search."
4. **Scroll to ReviewWall.** "Every quote is verbatim. No names. Pure trust mass."
5. **Tap "A letter from us."** "Chris and Nancy's farewell, and the current owners' welcome. The handoff guests have been wondering about."
6. **Tap "Ask the host."** "AI host. Knows the menu, the hours, the heritage. Answers in the cafe's voice. Never makes up a price."
7. **Show the footer.** "LiveOpenStatus pill. Tap-to-call. Real Instagram + Facebook links. Toast Tab for online order. Walk-in policy spelled out."

## Do Not Overclaim

- Re-verify Google / Tripadvisor / Facebook review counts before outreach (numbers are 2026-04-30 snapshot).
- Do not claim a Northwest Herald / Daily Herald "Best Of" — search returned nothing; ask the owner.
- Do not name chef Jon Vasquez on the site without confirming he is still on staff (last verified Oct 2019).
- Do not name Caitlyn (or any server) on the site without explicit written permission.
- Do not present the menu prices as final — hold for owner sign-off.
- Treat the Angelos farewell letter quote as already-public (Shaw Local 2019) but get owner permission before re-quoting it on a "Letter from us" page.

## Close

> "This isn't making Cafe Olympic look fancier. It's making the website show the cinnamon-roll-and-Wednesday-pasticio ritual that's already on the corner of Williams and Brink — so the guest in their car at 7:55am on Sunday can decide in one tap."
