# Maxfield's Pancake House — Battle Cards

Date: 2026-05-06  
Stage: `battle_cards`  
Archetype: `Cuisine`  
Template: `plate-01`

## Demo path card

- Preview URL: https://skills-git-feat-maxfields-p-46b25d-ethan-ethantalrejas-projects.vercel.app
- 1. Hero / broken-domain recovery
  - Show the first screen and say the current official domain was resolving to a Wix `ConnectYourDomain` 404, while this preview gives Maxfield's a usable owner-controlled first impression again.
- 2. Menu highlights
  - Scroll to the menu section and position it as confidence-building, not a fake full menu: pancakes, French toast, waffles, skillets, eggs, benedicts, omelettes, burgers, sandwiches, wraps, coffee.
- 3. Review proof
  - Move to the proof cards and anchor them to public-source trust: Google `4.5 / 983`, Restaurantji `4.7 / 259`, Yelp `3.7 / 268 / 230 photos`, plus themes from the 30 Highest Google reviews.
- 4. Visit confidence
  - Show that address and phone are stable, while hours and direct online ordering stay cautious because public sources conflict or do not verify the provider.
- 5. Concierge
  - Open the concierge panel and show that it answers common questions from a fixed Maxfield-specific knowledge base, then falls back to the phone number when a detail is unconfirmed.
- 6. Contact / directions close
  - End on the practical outcome: call, directions, and visit planning in one place instead of a broken domain and scattered third-party pages.

## Likely owner objections with crisp answers

### "Google already has our info."

Google helps discovery, but it is not an owner-controlled destination. Right now the official domain can send that demand into a Wix 404. This gives you one place to catch that traffic and turn it into calls, directions, and menu confidence.

### "We already get customers / reviews."

That is exactly why this matters. The public proof is already strong. The problem is that your own domain is not carrying that trust, so the site is not helping convert the demand you already earned.

### "What about the hours conflict?"

We kept that honest on purpose. Public sources do not fully agree, so the preview does not hard-code a false promise. Final publish should use owner or Google Business Profile confirmation.

### "Can customers order online?"

Not as a claimed direct flow yet. Public sources suggest takeout and order activity, but the direct owner-controlled ordering provider was not verified, so the preview stays truthful and pushes takeout questions to the phone for now.

### "Do you take reservations / can this book tables?"

Not as presented here. Restaurantji says reservations are not accepted, and we did not verify a booking workflow, so the preview does not fake one. If policy changes later, that can be added cleanly.

### "Will the AI concierge make things up?"

No. This is not a freeform live AI bot. It is a fixed Maxfield-specific knowledge base with explicit fallback rules, so unknowns get routed to `(847) 781-0300` instead of invented answers.

### "Is this too fancy for a pancake house?"

No. The archetype is `Cuisine`, which is the warm, clear, neighborhood-restaurant lane. The point is to make Maxfield's easier to trust and easier to visit, not to make it feel like a luxury tasting-menu site.

### "Do we need a full rebuild right now?"

Not necessarily. The immediate win is recovering the broken-domain problem and giving people one accurate place to call, get directions, and understand what Maxfield's is known for. A fuller rebuild can stay phased.

### "What if we want to keep the old domain/provider?"

That is workable. The main issue is not the exact provider. It is that the official domain should resolve to a real, owner-controlled experience. The old domain can stay if it is reconnected properly.

## Proof cards

### Broken current official domain / Wix 404

- Both `https://www.maxfieldschaumburg.com/` and `https://maxfieldschaumburg.com/` were captured returning a Wix `ConnectYourDomain` 404.
- Evidence:
  - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-desktop-wix-error.png`
  - `restaurant-website-system/sites/maxfields-pancake-house/screenshots/current-site-mobile-wix-error.png`
  - `restaurant-website-system/sites/maxfields-pancake-house/scrapes/current-site-dom-snapshot.txt`

### Public review and directory proof

- Google Maps: `4.5 / 983 reviews`
- Restaurantji: `4.7 / 259 ratings`
- Yelp: `3.7 / 268 reviews / 230 photos`

### 30 Highest Google review themes

- Service is repeatedly described as friendly, attentive, and fast.
- Breakfast identity is clear: pancakes, waffles, French toast, skillets, eggs, crepes, biscuits and gravy.
- The diner feel reads as clean, comfortable, warm, and family-friendly.
- Value and portions show up often.
- Kids, families, and group visits appear naturally in the review set.
- Coffee and broader lunch coverage help show it is more than a single-item pancake pitch.

### Truth-safe conversion improvements

- Replaces a broken official-domain experience with a usable owner-controlled page.
- Gives visitors one clear path to call, get directions, and scan menu highlights.
- Uses review proof without inventing testimonials or unsupported claims.
- Handles hours conflict and ordering uncertainty openly instead of pretending the data is settled.
- Adds a safe concierge layer that answers common questions and hands off unknowns.

## Risks and unknowns

- Mission Control auth/writeback is still blocked in this runtime, so the MC payload is prepared locally only.
- Public hours conflict remains unresolved across sources.
- Direct online ordering provider is still unverified.
- Owner or Google Business Profile confirmation is still needed before final publish for hours and any writeback-sensitive claims.
- Preview access may be Vercel-auth gated for some viewers depending on deployment settings.

## Talk tracks / owner language

- "You already have real local demand. The issue is that your own domain is not carrying it right now."
- "This is less about making it fancy and more about making it trustworthy."
- "I kept the uncertain pieces honest so nobody gets burned by wrong hours or a fake ordering button."
- "The site is doing the practical work first: menu confidence, review proof, directions, and a clean call path."
- "We can phase this. The first win is stopping the broken-domain first impression."
- "If you want to keep the current domain, that is fine. The fix is making it resolve to something real and useful."

## Do-not-say list

- Do not state invented exact hours.
- Do not claim a direct online ordering provider unless verified.
- Do not claim reservations, table booking, private events, or catering unless verified.
- Do not invent pricing, awards, or owner names/emails.
- Do not use direct review quotes live unless Ethan is reading from a sourced artifact.
- Do not imply the concierge is open-ended live AI.

## Supporting artifacts

- Audit: `restaurant-website-system/sites/maxfields-pancake-house/audit.md`
- Pitch: `restaurant-website-system/sites/maxfields-pancake-house/pitch-2026-05-06.md`
- Top 3 improvements: `restaurant-website-system/sites/maxfields-pancake-house/top-3-improvements-2026-05-06.md`
- Concierge KB: `restaurant-website-system/sites/maxfields-pancake-house/concierge-kb-2026-05-06.md`
- Concierge transcript: `restaurant-website-system/sites/maxfields-pancake-house/concierge-test-transcript-2026-05-06.md`
- Google reviews packet: `restaurant-website-system/sites/maxfields-pancake-house/scrapes/google-reviews-highest-30.md`
