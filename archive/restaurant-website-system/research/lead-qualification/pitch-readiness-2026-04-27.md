# Pitch Readiness — Da Baffone + Black Bear Bistro

Date checked: 2026-04-27

## Overall Readiness

| Lead | Pitch readiness | Why |
|---|---:|---|
| Da Baffone Cucina Italiana | 85% | Prototype is close, uses real restaurant assets, and now avoids unverified exact review counts in visible prototype copy. Still needs deploy preview plus hours/award verification before owner-facing language gets specific. |
| The Black Bear Bistro | 80% | Sales argument is strong, official site imagery is now in the prototype, and the screenshot packet is done. Still needs deploy preview, final owner-approved chef-history wording, and hours source-of-truth confirmation. |

## Shared Must-Haves Before Pitching Either

1. **Shareable preview URLs.**  
   Localhost is not enough. Deploy both previews to stable private URLs or Vercel preview links, with obvious labels:
   - Da Baffone current-site screenshot packet
   - Da Baffone redesign preview
   - Black Bear current-site screenshot packet
   - Black Bear redesign preview

2. **Proof packet.**  
   Completed. Screenshot packet lives at `research/lead-qualification/pitch-screenshots/`.

3. **Battle card cleanup pass.**  
   Completed for pitch prep. The battle cards now use Markdown-only battle-card language with fact guardrails instead of coded pitch pages.

4. **A single offer/ask.**  
   Decide the exact package before outreach. Suggested version:
   - Strategy + redesign
   - Homepage, menu, about, contact
   - Mobile CTA/hours/map/contact path
   - Basic SEO/schema
   - Launch support
   - One owner voice/menu revision round

5. **Screenshots of mobile.**  
   These pitches are mostly about mobile decision-making. Include mobile screenshots for current vs redesign.

## Da Baffone — Needed Before Pitch

### Must Fix / Verify

1. **Do not pitch OpenTable as an active booking upgrade.**  
   OpenTable currently says Da Baffone is "Not available on OpenTable." Pitch phone-first clarity unless the owner confirms another booking path.

2. **Verify current hours with the restaurant or choose safe wording.**  
   The official site has conflicting hours:
   - Top section says open at 4:00 PM Tuesday through Sunday and phone lines at 2:30 PM.
   - Reservation section says Tue-Thu 4-8, Fri-Sat 4-9, Sunday 4-8-ish.
   - Footer says Tue-Thu 4-9, Fri-Sat 4-10, Sunday 4-8.
   In the pitch, use the inconsistency as a trust-friction point, but do not overcommit to exact hours until verified.

3. **Verify award language.**  
   The prototype now uses safer local-proof language, but the pitch can get stronger if the exact Best of the Fox / Best Italian / wine-bar wording is verified from current first-party assets or owner confirmation.

4. **Confirm review counts.**  
   Existing audit uses 922 Facebook + 289 Yelp = 1,200+. Before pitching with exact count, capture current counts or say "more than a thousand public reviews" only if verified.

5. **Decide how to handle `/cinematic`.**  
   Do not share it unless it is intentionally framed as an alternate design direction. Default pitch should use the scrollable homepage.

### Strongest Pitch Angle

Da Baffone has already earned the trust. The site is underselling them by hiding the proof, fragmenting menu discovery, and making reservations feel like a phone-note instead of a primary action.

### Do Not Pitch

- "Your site is old."
- "You need OpenTable."
- "You are missing online reservations" unless confirmed.
- "Your hours are wrong" as an accusation.

### Pitch Instead

- "The current site makes diners work too hard to see why you are the stronger choice."
- "Your award proof and date-night value should show up in the first few seconds."
- "The redesign keeps phone-first reservations, but makes the call path clear on mobile."

### Da Baffone Minimum Pitch-Ready Checklist

- [ ] Deploy preview URL
- [x] Current-site screenshots: hero, hours inconsistency, menu navigation, footer date, reservation section
- [x] Redesign screenshots: hero, proof section, menu, contact/mobile call bar
- [ ] Verify awards
- [ ] Verify current hours or use safe wording
- [x] Verify review count or soften the claim
- [x] Update battle card with current fact guardrails

## Black Bear Bistro — Needed Before Pitch

### Must Fix / Verify

1. **Replace generic placeholder imagery before showing the prototype.**  
   Completed for the pitch prototype: official Black Bear food/service images are now stored in `sites/black-bear-bistro/public/images/black-bear/` and wired into the hero, menu, about, and closing sections.

2. **Adjust the reservation argument.**  
   TableAgent has a public booking page for Black Bear with reservations, business hours, and ratings. The pitch should not say "there is no online reservation flow." The better argument is:
   > The booking path exists, but the current homepage does not make booking, menu scanning, and pickup ordering obvious in one first-screen decision path.

3. **Use TableAgent as a trust signal.**  
   TableAgent currently shows 4.83 out of 5 based on 1,537 votes and reservations recommended. This is stronger than the existing battle card language.

4. **Verify chef-history claim before using 1776.**  
   The official site says "nearly 30 years' experience" but does not name 1776. Do not say "25 years at 1776 Crystal Lake" in client-facing copy until confirmed.

5. **Resolve hours mismatch.**  
   Official site says 4 PM-9 PM Sun/Tue-Sat. TableAgent shows reservations available 4 PM-9:30 PM. Use official public site hours unless the owner confirms TableAgent seating windows.

6. **Keep Square ordering in the pitch.**  
   Do not frame this as replacing operations. Pitch the redesign as preserving Square while making pickup easier to find.

### Strongest Pitch Angle

Black Bear already has the hard parts: a chef-owned story, adventurous menu, vegan options, Square ordering, TableAgent reservations, and strong diner ratings. The redesign makes those assets visible in the order guests decide: book, menu, order, trust, visit.

### Do Not Pitch

- "You have no online reservations."
- "Your PDFs are embarrassing."
- "We should replace Square."
- "Chef Santiago worked 25 years at 1776" until verified.
- "Your current photos are bad." They are useful; the prototype should use them.

### Pitch Instead

- "Your menu is too good to be hidden behind downloads."
- "The TableAgent proof should help guests commit faster."
- "You already have ordering and reservations; the site should route guests to them more clearly."
- "Your chef/owner story should build trust before the guest leaves the homepage."

### Black Bear Minimum Pitch-Ready Checklist

- [ ] Deploy preview URL
- [x] Replace generic prototype images with actual Black Bear images
- [x] Current-site screenshots: review-quote hero, PDF menu area, visit/reservation area, Square order link, story section
- [x] Redesign screenshots: hero CTAs, inline menu, TableAgent trust signal, about page, contact page
- [x] Update battle card to say "booking path under-surfaced" instead of "no online reservation flow"
- [x] Add TableAgent 4.83/1,537-vote proof
- [x] Verify or soften 1776/chef-history claim
- [ ] Confirm hours source of truth

## Recommended Order Of Work

1. **Deploy previews.**  
   Stable Vercel/private preview URLs are now the main blocker. Local builds pass, but client presentation should not depend on localhost.

2. **Select the pitch screenshots.**  
   Use the packet folder to choose 3-5 current-site screenshots and 3-5 redesign screenshots per restaurant. Do not walk clients through every screenshot.

3. **Da Baffone proof verification.**  
   Awards and hours are the remaining fragile claims. The prototype copy is safer now, but exact award wording should be verified before it becomes owner-facing.

4. **Black Bear final fact pass.**  
   Confirm whether TableAgent seating windows or official site hours are the source of truth, and ask the owner for any desired chef-history wording.

5. **Outreach script.**  
   Write a short email + call opener for each owner using the verified claims only.

## Sources Checked

- Da Baffone official site: https://dabaffonecucinaitaliana.com/
- Da Baffone OpenTable listing: https://www.opentable.com/r/da-baffone-cucina-italiana-crystal-lake
- Black Bear official site: https://www.theblackbearbistro.com/home/
- Black Bear TableAgent: https://tableagent.com/chicago/the-black-bear-bistro/
- Black Bear Square ordering: https://theblackbearbistro.square.site/
