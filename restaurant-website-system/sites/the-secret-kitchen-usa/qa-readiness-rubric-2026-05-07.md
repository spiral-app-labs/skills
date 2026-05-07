# The Secret Kitchen USA — QA readiness rubric

- Date: 2026-05-07
- Status: **future QA rubric only / QA not run**
- Canonical gates covered: `qa_round_1`, `qa_round_2`, `qa_round_3`, future `packaging`
- Required archetype: **Bamzi**
- Build status: **not build-authorized yet**
- Current blockers: Mission Control protected agency API returns `401`; founder approval, MC workflow provisioning, preview URL, owner confirmations, and owner-approved media/menu details remain pending.

## Purpose

This rubric defines how The Secret Kitchen USA preview should be judged after an authorized Bamzi build exists. It is intentionally prepared before the build so the eventual builder and QA reviewer know what “sell-ready” means for this specific restaurant.

This document is **not** a QA pass, not a preview approval, not final packaging, and not permission to publish or contact the restaurant. No raw Supabase writes were performed.

## Required inputs before QA can begin

QA must not be marked started until all of these exist:

- Mission Control root and child workflow tasks for The Secret Kitchen USA.
- Root `metadata.build_stage` / `metadata.currentStage` aligned with local checklist state.
- `checklist.md` and `checklist.json` generated after MC lead/root IDs exist.
- Authorized preview URL.
- Desktop and mobile preview screenshots.
- DOM/text scrape or source snapshot of the preview.
- Confirmed reservation, menu, directions, phone, email, Instagram, and Facebook links.
- Owner/founder confirmation status for brand name, menu/prices, reservation path, photo rights, private dining, awards/press, lunch, and public review usage.

If any of these are missing, QA may only record a blocker; it cannot pass.

## Source artifacts to read before QA

- `restaurant-website-system/sites/the-secret-kitchen-usa/preflight-handoff-package-2026-05-07.md`
- `restaurant-website-system/sites/the-secret-kitchen-usa/builder-implementation-brief-2026-05-07.md`
- `restaurant-website-system/sites/the-secret-kitchen-usa/routing-template-decision-2026-05-07.md`
- `restaurant-website-system/sites/the-secret-kitchen-usa/audit-official-site-2026-05-07.md`
- `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/google-reviews-highest-30-2026-05-07.md`
- `restaurant-website-system/sites/the-secret-kitchen-usa/pitch-doc-2026-05-07.md`
- `restaurant-website-system/sites/the-secret-kitchen-usa/battle-cards-2026-05-07.md`

## QA lens 1 — Bamzi archetype integrity

The site must still read as **Bamzi**:

- Dark-light-dark narrative pacing is visible.
- Hero feels like a cinematic dinner poster, not a generic restaurant header.
- The homepage has intentional editorial rhythm: hero, chef/story, menu journey, experience/social proof, visit/reserve close.
- Visuals use jewel-toned / cinematic / modern Indian energy without faux-palace clichés.
- Layout avoids generic SaaS cards, random rounded cards, and one-size-fits-all restaurant section stacking.
- Animation supports premium pacing but never hides CTAs or blocks mobile usability.

### Hard fail

Fail QA if the site could be confused for Heaven Palate, Cuisine, Bramble, or a generic luxury template. The Secret Kitchen needs cinematic Bamzi energy, not steakhouse formality, warm neighborhood simplicity, or bar/nightlife personality.

## QA lens 2 — restaurant identity

The preview must immediately communicate:

- Modern Indian fine dining in Schaumburg.
- Chef Aanal Kotak as a central credibility anchor.
- Indian heritage plus global flavors.
- Handmade spice craft and royal-kitchen inspiration using sourced wording only.
- International The Secret Kitchen presence: India, Australia, Canada, USA.
- The restaurant as a dinner destination, not a takeout-first listing.

### Identity checks

- Hero headline or subhead names the modern Indian / Schaumburg positioning.
- Chef/story section appears early, ideally first major section after hero.
- Menu chapters feel specific to this menu rather than generic curry categories.
- Dining-room / celebration positioning feels premium but not overclaimed.
- Copy avoids “best Indian near me,” “authentic curry,” and generic SEO filler.

## QA lens 3 — conversion path

The site must make the main visitor actions obvious within seconds.

### Desktop requirements

- Above the fold includes Reserve Now, Explore Menu, and Directions or equivalent high-priority actions.
- Reservation CTA links to the confirmed GetSeat URL unless owner confirmed another path.
- Menu exploration is clearly secondary but prominent.
- Address/hours are easy to find without hunting.
- Footer/visit module includes phone, email, directions, hours, reservation, and social links.

### Mobile requirements

- First screen shows restaurant identity plus Reserve/Menu/Directions path.
- Sticky mobile CTA includes Reserve and at least one of Menu, Call, or Directions.
- Buttons are thumb-friendly and legible.
- No horizontal overflow in menu chapters.
- No oversized decorative blocks push conversion below the fold.
- Tap targets for call/email/directions/reservation work on device-sized viewport.

### Hard fail

Fail QA if a mobile visitor cannot reserve, explore the menu, or get directions within the first few seconds.

## QA lens 4 — factual accuracy and claim safety

Preserve verified facts unless owner confirmation supersedes them:

- Name: The Secret Kitchen USA / The Secret Kitchen, pending preferred brand confirmation.
- Address: 1411 W Schaumburg Rd, Schaumburg, IL 60194.
- Phone: `(630) 635-2854` / `+16306352854`.
- Email: `info@thesecretkitchenusa.com`.
- Hours snapshot: 5:30 PM–10:30 PM daily.
- Reservation path snapshot: `https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AG247`.
- Instagram: `thesecretkitchen.official.usa`.
- Facebook profile: `61578469689809`.
- Chef/founder identity: Chef Aanal Kotak.

### Claim-safety hard bans

Fail QA if the preview includes any of these without owner confirmation and source approval:

- “Award-winning.”
- Public Google rating/review count.
- Direct Google review quotes.
- Private dining capacities, room names, minimums, or package policies.
- Menu prices.
- Lunch availability.
- Delivery/order provider CTAs.
- Photos presented as restaurant-owned when rights are not confirmed.

## QA lens 5 — menu fidelity and appetite appeal

The menu journey must feel abundant and specific without becoming an unreadable wall.

### Required menu representation

At minimum, the preview should represent these chapters or close equivalents:

1. **Street food reimagined** — Avocado Dahi Puri, Parmesan Cheese Pav Bhaji, The Dhokla Fondue.
2. **First plates / tandoor drama** — Thecha Paneer Tikka, Tandoor Ke Phool, Punjabi Kukkad Tikka, lamb chop naming only where confirmed.
3. **Royal mains / global comfort** — Burrata Cheese Makhani, #TSKFIED Butter Chicken Delhi Style, Nalli Gosht Ki Nihari, Awadhi Gosht Biryani.
4. **Sweet theatre** — Gulab Jamun Flambé, Kesar Mango Rasmalai, Sizzling Brownie with Chocolate Sauce, Chef Aanal’s Autograph Dessert.
5. **Bread / comfort / family support** — Bread Bar, Comfort Plate, Junior Plate, Traditional Platter as supporting navigation or links.

### Menu hard fails

- Hides all real dishes behind vague category names.
- Invents dishes or renames items beyond light presentation headings.
- Removes vegetarian breadth.
- Publishes prices without confirmation.
- Treats the restaurant like a generic curry/biryani shop.

## QA lens 6 — design quality and sellability

Ask these questions directly:

- Would Ethan feel confident sending this to the owner today?
- Would the owner immediately see why it is better than the current official site?
- Does the site look intentionally designed around The Secret Kitchen rather than filled into a template?
- Does it reduce Ethan’s need to explain the value verbally?
- Does it feel premium enough for a chef-led Schaumburg destination?

### Design checks

- Palette uses deep teal, emerald, crimson, brass/gold, warm ivory, and charcoal with restraint.
- Typography feels cinematic/editorial but remains readable.
- Images are high-impact and rights-safe or clearly marked as replaceable.
- Sections have deliberate spacing; no giant empty bands or cramped content walls.
- Food/dining imagery supports the story instead of feeling stock-generic.
- Motion is polished and reduced appropriately on mobile.

## Three-round QA plan

### QA round 1 — structural and factual gate

Goal: determine whether the preview is even safe to improve.

Required evidence:

- Desktop homepage screenshot.
- Mobile homepage screenshot.
- Preview link.
- Link audit for reservation, menu, directions, phone, email, Instagram, Facebook.
- Claim audit against owner-confirmation list.

Pass criteria:

- Bamzi structure is visible.
- No fake claims or unapproved public review/award/private dining statements.
- Core facts and links are correct.
- Mobile conversion path exists.

If failed, write fixes before moving to QA round 2.

### QA round 2 — sellability and conversion gate

Goal: determine whether the preview would make Ethan comfortable starting a sales conversation.

Required evidence:

- Before/after notes for round 1 fixes.
- Desktop and mobile screenshots after fixes.
- Menu journey review.
- Chef/story placement review.
- CTA hierarchy review.

Pass criteria:

- Hero clearly sells modern Indian fine dining in Schaumburg.
- Chef Aanal story is prominent and sourced.
- Menu chapters make the restaurant feel abundant and specific.
- Reserve/Menu/Directions are obvious on mobile.
- Copy feels premium, sensory, and restaurant-specific.

If failed, identify top 3 improvements before moving to QA round 3.

### QA round 3 — final sell-readiness gate

Goal: decide whether the package is ready for Ethan to see/use.

Required evidence:

- Final desktop screenshot.
- Final mobile screenshot.
- Full-page screenshot or section-by-section evidence.
- Link audit after final fixes.
- Final claim-safety check.
- Packaging checklist: preview URL, pitch doc, battle cards, QA notes, checklist, screenshots.

Pass criteria:

- No unresolved hard fails.
- Preview feels unmistakably custom to The Secret Kitchen USA.
- Owner-facing narrative is clear without extra explanation.
- All required evidence is mirrored to MC.
- Packaging is ready, but delivery only happens after MC records all evidence.

## Required QA output format

Each QA round should produce a dated artifact using this shape:

1. Final verdict: pass / fail / blocked.
2. Chosen archetype assessment: why Bamzi is or is not still legible.
3. What is already strong.
4. What blocks sellability.
5. Critical fixes before Ethan sees it.
6. Evidence captured.
7. Links tested.
8. Claim-safety notes.
9. Confidence to sell: low / medium / high, with one sentence.

## Evidence folder expectations

Future QA evidence should live under:

- `restaurant-website-system/sites/the-secret-kitchen-usa/evidence/qa-round-1/`
- `restaurant-website-system/sites/the-secret-kitchen-usa/evidence/qa-round-2/`
- `restaurant-website-system/sites/the-secret-kitchen-usa/evidence/qa-round-3/`

Recommended filenames:

- `preview-home-desktop-full-YYYY-MM-DD.png`
- `preview-home-mobile-full-YYYY-MM-DD.png`
- `preview-link-audit-YYYY-MM-DD.json`
- `preview-dom-snapshot-YYYY-MM-DD.txt`
- `claim-safety-check-YYYY-MM-DD.md`

## Blocked verdict language

Use this if QA is attempted before the site is ready:

> QA is blocked. The Secret Kitchen USA does not yet have an authorized preview URL and/or required owner confirmations, so this round cannot pass. The next unblock action is to restore Mission Control agency API auth, provision the canonical workflow, authorize the build, and attach preview evidence before QA resumes.

## Final packaging reminder

Even if all three QA rounds pass locally, the site is **not delivered** until MC contains the preview URL, screenshots, checklist, QA evidence, pitch doc, battle cards, requirement status, and final delivery status. Local evidence without MC mirroring is not delivery.
