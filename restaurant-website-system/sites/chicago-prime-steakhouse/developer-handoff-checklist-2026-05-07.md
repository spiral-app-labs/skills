# Chicago Prime Steakhouse — future developer handoff checklist

- Date: 2026-05-07
- Status: **implementation readiness only / not build-authorized**
- Intended gate: future `building` / `forking`
- Required archetype: **Heaven Palate**
- Current blockers: Mission Control protected agency API returns `401`; founder approval, MC root/child workflow provisioning, owner confirmations, owner-approved media, preview authorization, and Heaven Palate source/template mapping remain pending.

## Purpose

This checklist gives the eventual developer a concrete build plan once Chicago Prime Steakhouse is authorized in Mission Control. It turns the audit, routing decision, builder brief, pitch, battle cards, preflight handoff, and future QA rubric into a practical implementation checklist.

This is **not** permission to build, publish, contact the restaurant, or share anything owner-facing. No raw Supabase writes were performed.

## Start conditions before a developer touches code

Do not start a fork/build until all of these are true:

- Mission Control API auth works and the canonical root/child workflow is provisioned.
- The root stage/currentStage allows `building` or `forking`.
- `checklist.md` and `checklist.json` exist with MC lead/root IDs.
- Ethan/founder has approved speculative preview work or owner-authorized preview work.
- Heaven Palate has a confirmed buildable source/template mapping.
- Owner/founder confirmation status is recorded for:
  - current hours and reservation path
  - menu/PDF currentness
  - private dining rooms/capacities/packages/policies
  - photo/image rights
  - live entertainment schedule
  - award/review wording
  - George legacy tone/permissions
  - provider links and social links
- Builder has read:
  - `builder-implementation-brief-2026-05-07.md`
  - `routing-template-decision-2026-05-07.md`
  - `preflight-handoff-package-2026-05-07.md`
  - `qa-readiness-rubric-2026-05-07.md`

If any start condition is missing, record a blocker instead of building.

## Non-negotiable build rules

- Use **Heaven Palate** as the single structural base.
- Do not blend in Bamzi, Bramble, Cuisine, Roma, or Qitchen section logic unless explicitly approved in a later routing update.
- Preserve real public business facts unless owner confirmation supersedes them.
- No fake awards, fake ratings, fake review quotes, fake menu items, fake room capacities, fake live schedules, fake ordering paths, or unapproved photo-right assumptions.
- Reserve / Private Dining / Menu / Call / Directions must be obvious on desktop and mobile.
- Private Dining must be commercially visible but fact-safe.
- George A. Kalkounos’s legacy must be respectful, concise, and hospitality-focused.

## Recommended information architecture

### Page structure

1. **Hero / Reserve + Private Dining**
   - Primary message: Chicago Prime Steakhouse as classic Schaumburg steakhouse dining.
   - Submessage: family-owned, fine dining, private events, warm hospitality.
   - CTAs: Reserve a Table, Private Dining, Menu, Directions/Call.
   - Show address/hours close to CTA.

2. **Steakhouse craft / atmosphere**
   - Steaks, seafood, chops, wine/cocktails, dining room, covered patio/lounge.
   - Keep claims sourced and avoid fake “best” language.

3. **Menu journey**
   - Category-level steakhouse menu story; full menu link.
   - Do not invent item-level detail if owner-approved menu data is unavailable.

4. **Private dining / events**
   - Sell corporate dinners, celebrations, milestones, rehearsal dinners, and gatherings.
   - Room names/capacities only after confirmation or clearly marked pending confirmation internally.

5. **Legacy / hospitality**
   - George A. Kalkounos story as hospitality, mentorship, family, guests-as-friends.
   - Link to full legacy/scholarship page if retained.

6. **Live lounge / patio support**
   - Mood and occasion support, not a nightlife-first pivot.
   - Do not publish schedule until conflict is resolved.

7. **Visit / reserve close**
   - Address, directions, phone, hours, reservation, private dining email, provider links, socials.
   - Repeat reservation CTA.

## Component checklist

### Header / navigation

- [ ] Brand name: Chicago Prime Steakhouse.
- [ ] Navigation is short: Menu, Private Dining, Live Lounge or Events if confirmed, Legacy/About, Visit.
- [ ] Reserve CTA is visually primary.
- [ ] Mobile nav does not hide Reserve behind too many taps.
- [ ] Order/provider links are utility-level, not hero-level.

### Hero

- [ ] Uses Heaven Palate-style dark classic luxury treatment.
- [ ] Headline communicates Chicago Prime Steakhouse directly.
- [ ] Subhead communicates Schaumburg steakhouse / fine dining / private events / hospitality.
- [ ] Reserve a Table + Private Dining are above the fold.
- [ ] Menu, Directions, and Call are accessible without clutter.
- [ ] Address/hours are visible enough to reduce visitor friction.
- [ ] Motion is tasteful and does not delay CTA availability.

### Steakhouse craft / menu journey

- [ ] Menu section avoids fake item-level claims if full menu data is not confirmed.
- [ ] Represents Steaks & Chops, Seafood & Classics, Wine/Cocktails, Lounge/Patio, Full Menu access.
- [ ] Links to official menu/full menu/PDF path.
- [ ] Does not publish prices unless confirmed.
- [ ] Does not over-prioritize delivery providers.

### Private dining

- [ ] Private Dining is second-priority conversion after Reserve.
- [ ] Includes event inquiry CTA and `events@chicagoprimesteakhouse.com` only if confirmed.
- [ ] Room/capacity details are confirmed before public display.
- [ ] Operational details (deposit, cake fee, minimums, final count) are not dumped into the homepage hero.
- [ ] Section feels premium and event-worthy.

### Legacy / hospitality

- [ ] George A. Kalkounos story is short, respectful, and hospitality-focused.
- [ ] Avoids exploitative grief language.
- [ ] Mentions service, mentorship, restaurant family, and guests-as-friends if used.
- [ ] Links to full legacy/scholarship page if retained.

### Visit / contact / links

- [ ] Address: 1444 E. Algonquin Road, Schaumburg, IL 60173.
- [ ] Phone: `847.969.9900`.
- [ ] Hours snapshot: Monday–Saturday 3PM–10PM; Sunday 3PM–9PM unless owner confirms otherwise.
- [ ] OpenTable reservation path works.
- [ ] Private dining email works if used.
- [ ] Directions link opens correctly.
- [ ] Provider links for Uber Eats, Grubhub, and Toast are tested if included.
- [ ] Gift card, club, socials, and contact paths are tested if included.

### Mobile

- [ ] First viewport communicates identity and has Reserve / Private Dining or Menu / Call or Directions path.
- [ ] Sticky mobile CTA includes Reserve plus Call and Directions; Menu/Private Dining optional as a fourth action.
- [ ] Text is readable without zooming.
- [ ] No horizontal overflow.
- [ ] Private dining and menu cards stack cleanly.
- [ ] Buttons are thumb-friendly.
- [ ] Visit details are tap-friendly.
- [ ] Footer is not an undifferentiated link pile.

### Motion / interaction

- [ ] Motion supports premium calm, not drama for its own sake.
- [ ] No scroll-jacking.
- [ ] No slow intro animation before CTAs become usable.
- [ ] Reduce motion on mobile or honor reduced-motion preferences where practical.
- [ ] Hover/focus states are polished and accessible.

## Suggested copy blocks to adapt

Use these as starting points, not mandatory final copy:

- “Classic Schaumburg steakhouse dining.”
- “Prime steaks, seafood, wine, and hospitality made for celebration.”
- “Reserve dinner, plan a private event, or explore the menu.”
- “A family-owned steakhouse in the Northwest Suburbs, built on service and personal touch.”
- “Private rooms for corporate dinners, milestones, and gatherings.”
- “Live lounge music and a covered patio round out the evening.”

Avoid:

- “Best steakhouse in Chicago.”
- “Award-winning” unless approved.
- Fake or unsourced Google rating language.
- Delivery-first hero language.
- Generic luxury filler with no Chicago Prime facts.
- Exploitative legacy language.

## Image strategy

Priority image slots:

1. Exterior or entrance / sign.
2. Dining room hero or steak/wine close-up.
3. Steak/chops/seafood plate.
4. Bar/lounge/live music atmosphere.
5. Private room / event setup.
6. Covered patio if available.
7. Legacy/family image only if owner-approved.

If owner-approved images are not available, use clearly replaceable placeholders and internal labels. Do not ship stock imagery as if it belongs to Chicago Prime.

## Implementation stop conditions

Stop before implementation if:

- Heaven Palate cannot be mapped to a buildable source/template.
- MC workflow is not provisioned and Ethan has not approved speculative preview work.
- OpenTable/private dining/provider links cannot be verified.
- The design would require fake food/room/photo claims.
- The build depends on unconfirmed awards, ratings, review quotes, capacities, or schedules.

## Handoff verdict

The eventual build should be straightforward once the gates clear: a classic luxury Heaven Palate fork personalized around Reserve, Private Dining, steakhouse craft, live lounge support, and George Kalkounos hospitality legacy. The most important developer discipline is not inventing facts while making the site feel dramatically more polished than the current template-residue experience.
