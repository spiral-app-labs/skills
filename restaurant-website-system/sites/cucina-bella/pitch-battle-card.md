# Cucina Bella Algonquin — Pitch Battle Card

> Owner-facing pitch tool. Use alongside the deploy-preview URL and the
> `audit.md` proof block. **Goal:** book the redesign without triggering
> "you don't understand my restaurant" defense. Tone is owner-pride first.

---

## The position (one line)

> *"Your site has the reservation path, but it hides the proof. Tripadvisor puts you #2 of 121 in Algonquin and the homepage doesn't surface a star, a number, or the Sannicandro story that earned it. The site is the only thing underselling you."*

This is **not** "your site is broken." It is "your site is hiding what you've already earned."

---

## Fast diagnosis — five things the website hides

| What's hidden | Business impact | Redesign answer |
|---|---|---|
| **#2 of 121 in Algonquin (Tripadvisor)** | Best public proof point not on the homepage. New diners can't tell you've earned trust. | Proof strip in the hero — rating, review count, ranking. Schema-tagged so AI / search surfaces it too. |
| **Hours** | Not on homepage. Not on contact page. Diners deciding tonight bounce or call instead of booking. | Live "open now" pill in the hero sidebar + a clean opening hours table on home and visit. |
| **Address + phone** | Not on homepage. Diners on a phone have to dig. | Both surface in hero sidebar + visit section + footer. Click-to-call on phone, click-for-Toast for reservation. |
| **Menu** | Server-renders only section labels. No item names, no descriptions, no prices until JS loads. Search / AI don't see the menu. | Server-rendered menu page with all sections + items + descriptions, ready for the owner's current dinner menu PDF to drop in. |
| **Sannicandro story** | The single most specific, ownable thing on this property — "Tony's parents started a family of eight children in Sannicandro, Italy" — is buried in a section called "A taste of home." | Story section directly under the hero, with the Sannicandro line as the anchor and a quote pull. |

---

## Why these matter (the pre-emptive walkthrough)

1. **Open with the proof.** "If a diner Googles 'best Italian Algonquin' tonight, you're #2 of 121. Your homepage doesn't tell them. The redesign does."
2. **Then the trust basics.** "Hours, address, phone — all in the first viewport. The Toast button you already have stays where it is."
3. **Then the menu.** "Right now Google can't read your menu. The redesign serves it as text the first time the page loads. Same items, same prices, same Toast for ordering. Just visible to search and AI."
4. **Then the family.** "The Sannicandro story is the most ownable thing on your site. We made it the second section on the homepage."
5. **Close on the family of restaurants.** "Galena and Bella's Woodfire still have their own sites. We added a small family-of-restaurants block so guests can find them — same pattern you already use, just cleaner."

---

## Strongest purchase reasons (use 2–3)

1. **Sells the reservation first.** Toast Tables stays. Hours and "open now" arrive above the fold. The decision-on-a-phone path is fixed.
2. **The proof is too valuable to bury.** #2 of 121 is the fastest credibility lift this property can make. Every week it isn't on the homepage is a week of trust diners can't see.
3. **Search and AI can finally read the menu.** Today the menu is JS-loaded, so Google/ChatGPT/Yelp scrapers see "Antipasti" and stop. The new build serves the menu as text. Same Toast for ordering, more discoverability for the kitchen.
4. **Protects the family voice.** Sannicandro story keeps its place — and gets a hero anchor. The redesign doesn't reinvent Cucina Bella's identity; it surfaces what's already there.
5. **Preserves what's working.** Toast Tables stays. Catering line stays. Sister-venue cross-links stay (and look intentional). No platform migration.

---

## Walkthrough script (when sharing the preview)

1. **Homepage hero.** "This is what your front page could look like. Brick room photo, family-run chip, Sannicandro tagline, Toast button — exactly where it is today, just dressed."
2. **Proof strip.** "These are the public numbers your homepage doesn't currently show. We can swap to whatever proof point you want to lead with."
3. **Story.** "This is the line from your current site, made the second thing people read."
4. **Menu teaser.** "Three signature dishes here, full menu one click away. We'll plug your current dinner menu PDF into the menu page before launch."
5. **Wine, bar, dessert martinis.** "Soft echo of the bar — not date-night-only, more 'the room you stay in after dinner.'"
6. **Reviews block.** "Three theme cards lifted from real reviews. Verbatim — nothing put in your guests' mouths."
7. **Family.** "A small block linking to Galena and Bella's Woodfire. Mirrors what your three sites already do for each other."
8. **Visit.** "Address, hours, phone, map — the basics, in one place."
9. **Mobile.** "On a phone, there's a fixed bar at the bottom: Reserve and Menu. The two things diners actually need."

---

## Objection counters

| If they say… | You say… |
|---|---|
| *"We already have a website."* | "You do. The reservation path works. What we'd change is what's around it — the proof, the hours, the menu visibility. We're not replacing the engine; we're cleaning the windshield." |
| *"Regulars know us."* | "They do. This is for the diner deciding between you and the next Algonquin Italian restaurant on their phone tonight. That's where #2 of 121 has to do work." |
| *"Don't make it look fancy."* | "Agreed. This isn't a fine-dining redesign. It's a family-run-Italian-on-Main-Street redesign. The room photo, the red sauce, the kids' menu — we leaned into that." |
| *"Toast already takes our reservations."* | "Toast stays. The reserve button on the new site goes to the same Toast page you have today. Nothing breaks." |
| *"What about Galena and Bella's Woodfire?"* | "They keep their own sites. The new site has a small family-of-restaurants block that links to both — the same way you already cross-link today, just cleaner." |
| *"How much does it cost?"* | "[Price]. That's strategy + redesign + homepage + menu + about + visit + the mobile call bar + JSON-LD schema + one revision round. No platform migration. No hidden re-builds later." |

---

## Fact guardrails (DO NOT pitch unverified)

- **Do not claim a specific award.** Current site says *"Award-Winning"* but does not name one. We don't either, until the owner confirms.
- **Do not claim a founding year.** No year appears anywhere on the current site. We render `Cucina Bella · Algonquin` as the heritage stamp until confirmed.
- **Do not pitch the hours as gospel.** The build uses a reasonable lunch+dinner schedule (Tue–Sun 11–9 / 11–10 weekends / Mon closed) for `LiveOpenStatus` and JSON-LD. Confirm with owner before the deploy preview is shared.
- **Do not invent menu items or prices.** Section labels are verified verbatim. Items + descriptions are representative classics for layout fidelity; the owner's dinner menu PDF should drop in before final pitch.
- **Do not over-claim Tripadvisor numbers** in client-facing copy. The 4.5 / 428 / #2 of 121 figures come from the deep-research doc dated 2026-04-27. Re-verify the day before pitch and use whatever is current.

---

## Do not say / Say instead

| Don't say | Say |
|---|---|
| "Your site looks dated." | "Your site is hiding what you've already earned." |
| "You need a fancier design." | "You need the proof on the homepage." |
| "Everyone needs an upscale Italian website." | "We took your gusto template and dialed it back to family-trattoria." |
| "We'll fix the Toast integration." | "Toast stays exactly as it is. We point the same button at the same link." |
| "We'll write your story for you." | "We surface the Sannicandro line you already wrote." |

---

## Proposed ask (the offer)

A focused redesign package:

- Strategy + register-softened redesign of the Algonquin site
- Homepage, menu, about, visit
- Mobile call bar + Toast handoff + click-to-call
- Live open-now indicator
- Restaurant JSON-LD (address, geo, hours, `acceptsReservations`, `priceRange`, `aggregateRating`, sister-venue `sameAs`)
- Sister-venues module (no migration of Galena or Bella's Woodfire)
- Photography cleanup using existing first-party shots
- One owner-voice revision round (menu copy, hours, award language, founding year)

**What we explicitly do not do in v1:** migrate Toast, migrate Galena, migrate Bella's Woodfire, redesign the Galena or Bella's Woodfire sites, run paid ads, manage the social channels, re-shoot photography.

---

## Close

> *"This isn't about making Cucina Bella into something different. It's about making the website finally do the work the kitchen has been doing for years."*
