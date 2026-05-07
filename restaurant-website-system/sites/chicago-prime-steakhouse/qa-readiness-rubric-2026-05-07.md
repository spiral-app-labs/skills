# Chicago Prime Steakhouse — QA readiness rubric

- Date: 2026-05-07
- Status: **future QA rubric only / QA not run**
- Canonical gates covered: `qa_round_1`, `qa_round_2`, `qa_round_3`, future `packaging`
- Required archetype: **Heaven Palate**
- Build status: **not build-authorized yet**
- Current blockers: Mission Control protected agency API returns `401`; founder approval, MC workflow provisioning, preview URL, owner confirmations, owner-approved media/menu/private-dining details, and Heaven Palate source mapping remain pending.

## Purpose

This rubric defines how a future Chicago Prime Steakhouse preview should be judged after an authorized Heaven Palate build exists. It is intentionally prepared before the build so the eventual builder and QA reviewer know what “sell-ready” means for this specific restaurant.

This document is **not** a QA pass, not a preview approval, not final packaging, and not permission to publish or contact the restaurant. No raw Supabase writes were performed.

## Required inputs before QA can begin

QA must not be marked started until all of these exist:

- Mission Control root and child workflow tasks for Chicago Prime Steakhouse.
- Root `metadata.build_stage` / `metadata.currentStage` aligned with local checklist state.
- `checklist.md` and `checklist.json` generated after MC lead/root IDs exist.
- Authorized preview URL.
- Desktop and mobile preview screenshots.
- DOM/text scrape or source snapshot of the preview.
- Confirmed OpenTable, menu, directions, phone, private dining email/form, provider, gift card/club, and social links.
- Owner/founder confirmation status for hours, menu, reservation path, photo rights, private dining, live music schedule, awards/reviews, and legacy story usage.

If any of these are missing, QA may only record a blocker; it cannot pass.

## Source artifacts to read before QA

- `restaurant-website-system/sites/chicago-prime-steakhouse/preflight-handoff-package-2026-05-07.md`
- `restaurant-website-system/sites/chicago-prime-steakhouse/developer-handoff-checklist-2026-05-07.md`
- `restaurant-website-system/sites/chicago-prime-steakhouse/builder-implementation-brief-2026-05-07.md`
- `restaurant-website-system/sites/chicago-prime-steakhouse/routing-template-decision-2026-05-07.md`
- `restaurant-website-system/sites/chicago-prime-steakhouse/audit-official-site-2026-05-07.md`
- `restaurant-website-system/sites/chicago-prime-steakhouse/scrapes/google-reviews-highest-30-2026-05-07.md`
- `restaurant-website-system/sites/chicago-prime-steakhouse/outreach/founder-seed-decision-brief-2026-05-07.md`
- `restaurant-website-system/sites/chicago-prime-steakhouse/battle-cards-2026-05-07.md`

## QA lens 1 — Heaven Palate archetype integrity

The site must still read as **Heaven Palate**:

- Dark classic-luxury palette is visible.
- Hero feels like a premium steakhouse/reservation entry, not a generic restaurant banner.
- Layout is symmetrical or near-symmetrical above fold with refined spacing.
- Typography uses a confident serif/display system with readable body text.
- CTA hierarchy is restrained and clear: Reserve first, Private Dining second, Menu/Call/Directions supporting.
- Imagery feels cinematic and steakhouse-specific, not stock-generic.
- Motion is slow, tasteful, and never blocks CTA usability.

### Hard fail

Fail QA if the site could be confused for Bamzi, Bramble, Cuisine, Roma, Qitchen, or a generic luxury template. Chicago Prime needs classic steakhouse authority and private-dining confidence, not trendy narrative drama, nightlife energy, casual warmth, or high-concept minimalism.

## QA lens 2 — restaurant identity

The preview must immediately communicate:

- Chicago Prime Steakhouse in Schaumburg.
- Family-owned / personal-touch Northwest Suburbs positioning.
- Prime steakhouse, seafood/chops, wine/cocktails, and fine dining.
- Private dining/events as a major strength.
- Live lounge/patio as supporting atmosphere.
- George A. Kalkounos hospitality legacy handled respectfully.

### Identity checks

- Hero headline or subhead clearly says Chicago Prime Steakhouse / Schaumburg steakhouse.
- The page does not feel like a chain or generic steak template.
- Private Dining appears as a serious conversion path.
- Legacy/hospitality copy is present or intentionally linked, not buried beyond use.
- Copy avoids generic “elegance meets flavor” filler unless grounded in real facts.

## QA lens 3 — conversion path

The site must make the main visitor actions obvious within seconds.

### Desktop requirements

- Above the fold includes Reserve a Table and Private Dining or equivalent high-priority actions.
- Reservation CTA links to the confirmed OpenTable URL unless owner confirmed another path.
- Menu, Call, and Directions are visible without competing with Reserve.
- Address/hours are easy to find without hunting.
- Footer/visit module includes phone, address, hours, reservation, private dining inquiry, provider links, and socials where confirmed.

### Mobile requirements

- First screen shows restaurant identity plus Reserve / Call / Directions or Reserve / Menu / Directions path.
- Sticky mobile CTA includes Reserve and at least Call or Directions.
- Buttons are thumb-friendly and legible.
- No oversized decorative blocks push conversion below the fold.
- Tap targets for call/email/directions/reservation work on device-sized viewport.

### Hard fail

Fail QA if a mobile visitor cannot reserve, call, or get directions within the first few seconds.

## QA lens 4 — factual accuracy and claim safety

Preserve verified facts unless owner confirmation supersedes them:

- Name: Chicago Prime Steakhouse.
- Address: 1444 E. Algonquin Road, Schaumburg, IL 60173.
- Phone: `847.969.9900`.
- Hours snapshot: Monday–Saturday 3PM–10PM; Sunday 3PM–9PM.
- Reservation path snapshot: OpenTable `restref=36475` URL.
- Private dining email snapshot: `events@chicagoprimesteakhouse.com`.
- Private dining rooms/capacities only if confirmed.
- Live entertainment schedule only if confirmed.
- Provider links only if verified.

### Claim-safety hard bans

Fail QA if the preview includes any of these without owner confirmation and source approval:

- “Award-winning.”
- Public Google rating/review count.
- Direct Google review quotes.
- Private dining capacities, packages, minimums, or policy details.
- Live music schedule.
- Menu prices or unverified item-level claims.
- Photos presented as restaurant-owned when rights are not confirmed.
- Any bakery/template residue from the current site.

## QA lens 5 — menu fidelity and appetite appeal

The menu journey must feel like a steakhouse without inventing a menu.

### Required menu representation

At minimum, the preview should represent these chapters or close equivalents:

1. **Steaks & chops** — prime cuts, chops, classic steakhouse dinner cue.
2. **Seafood & classics** — seafood/chops/calamaris/sea bass/lobster-mac themes only where source-safe.
3. **Wine, cocktails & lounge** — wine/cocktails/martinis/lounge drinks; avoid “award-winning wine” unless approved.
4. **Private dining menus/packages** — only confirmed Skyline/Millennium/package details if approved.
5. **Full menu access** — prominent link/button to official menu/PDF/full-menu path.

### Menu hard fails

- Invents cuts, specials, prices, sides, drinks, or desserts.
- Lets delivery/order providers dominate the menu experience.
- Hides the full menu path.
- Uses generic steakhouse filler without Chicago Prime facts.

## QA lens 6 — design quality and sellability

Ask these questions directly:

- Would Ethan feel confident sending this to the owner today if confirmation gates were cleared?
- Would the owner immediately see why it is better than the current official site?
- Does the site look intentionally designed around Chicago Prime rather than filled into a template?
- Does it reduce Ethan’s need to explain the value verbally?
- Does it feel premium enough for a Schaumburg steakhouse and private dining lead?

### Design checks

- Palette uses charcoal, oxblood, espresso, warm ivory, and muted gold/brass with restraint.
- Typography feels classic and premium without becoming unreadable.
- Images are high-impact and rights-safe or clearly marked as replaceable.
- Sections have deliberate spacing; no giant empty bands or cramped content walls.
- Private dining and legacy sections feel custom to Chicago Prime.
- Motion is polished and reduced appropriately on mobile.

## Three-round QA plan

### QA round 1 — structural and factual gate

Goal: determine whether the preview is even safe to improve.

Required evidence:

- Desktop homepage screenshot.
- Mobile homepage screenshot.
- Preview link.
- Link audit for OpenTable, menu, directions, phone, event email/form, provider links, gift cards/club, socials.
- Claim audit against owner-confirmation list.

Pass only if:

- Heaven Palate structure is recognizable.
- No fake claims or placeholders are present.
- Reserve/Private Dining hierarchy is clear.
- Mobile conversion is usable.

### QA round 2 — sellability and polish gate

Goal: make the site feel sell-ready, not merely functional.

Required evidence:

- Updated desktop/mobile screenshots after round 1 fixes.
- Notes on identity, section rhythm, image strategy, copy specificity, and mobile spacing.
- Comparison notes against current-site trust leaks.

Pass only if:

- The preview visibly improves trust over the current site.
- Private dining feels commercially strong.
- Legacy copy is tasteful.
- Design feels restaurant-specific and premium.

### QA round 3 — final packaging gate

Goal: confirm Ethan can review without caveats beyond known owner confirmations.

Required evidence:

- Final desktop/mobile screenshots.
- Final link audit.
- Final claim-safety checklist.
- List of remaining owner-confirmation blockers.
- Pitch/battle-card alignment check.

Pass only if:

- All critical links work.
- No unsupported claims remain.
- Mobile is strong.
- The preview is packaged with screenshots, pitch, battle cards, checklist, and evidence paths for MC attach.

## Packaging requirements after QA passes

Do not mark packaging complete until these exist:

- Preview URL.
- Desktop/mobile screenshots.
- DOM/text scrape or source snapshot.
- Link-check output.
- QA round 1/2/3 notes.
- Pitch doc and battle cards.
- Checklist `.md` and `.json` with MC IDs.
- MC evidence/writeback for all passed requirements.

## QA verdict rule

Until an authorized preview exists, the correct status is: **QA not run — rubric prepared only**. Once a preview exists, QA must be evidence-backed. No screenshot/link/claim evidence means no pass.
