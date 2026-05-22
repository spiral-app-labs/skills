# The Secret Kitchen USA — future developer handoff checklist

- Date: 2026-05-07
- Status: **implementation readiness only / not build-authorized**
- Intended gate: future `building` / `forking`
- Required archetype: **Bamzi**
- Current blockers: Mission Control protected agency API returns `401`; founder approval, MC root/child workflow provisioning, owner confirmations, owner-approved media, menu currentness, and preview authorization remain pending.

## Purpose

This checklist gives the eventual developer a concrete build plan once The Secret Kitchen USA is authorized in Mission Control. It turns the audit, routing decision, builder brief, pitch, battle cards, preflight handoff, and QA rubric into a practical implementation checklist.

This is **not** permission to build, publish, contact the restaurant, or share anything owner-facing. No raw Supabase writes were performed.

## Start conditions before a developer touches code

Do not start a fork/build until all of these are true:

- Mission Control API auth works and the canonical root/child workflow is provisioned.
- The root stage/currentStage allows `building` or `forking`.
- `checklist.md` and `checklist.json` exist with MC lead/root IDs.
- Ethan/founder has approved speculative preview work or owner-authorized preview work.
- Owner/founder confirmation status is recorded for:
  - preferred brand name
  - menu/prices currentness
  - reservation path
  - photo/image rights
  - private dining/banquet claims
  - awards/press claims
  - lunch status
  - public Google rating/review quote usage
- Builder has read:
  - `builder-implementation-brief-2026-05-07.md`
  - `routing-template-decision-2026-05-07.md`
  - `preflight-handoff-package-2026-05-07.md`
  - `qa-readiness-rubric-2026-05-07.md`

If any start condition is missing, record a blocker instead of building.

## Non-negotiable build rules

- Use **Bamzi** as the single structural base.
- Do not blend in Heaven Palate, Cuisine, Qitchen, Bramble, or Roma section logic unless explicitly approved in a later routing update.
- Preserve real public business facts unless owner confirmation supersedes them.
- No fake awards, fake ratings, fake review quotes, fake menu items, fake private dining details, fake ordering paths, or unapproved photo-right assumptions.
- Reserve/Menu/Directions must be obvious on desktop and mobile.
- Chef Aanal Kotak’s story must be early and central.
- The menu must feel abundant and specific, not generic Indian-restaurant filler.

## Recommended information architecture

### Page structure

1. **Hero / reserve poster**
   - Primary message: modern Indian fine dining in Schaumburg.
   - Submessage: Chef Aanal Kotak, Indian heritage, global flavors, dinner beyond ordinary.
   - CTAs: Reserve Now, Explore Menu, Directions.
   - Show hours/address close to the CTA.

2. **Chef Aanal / story section**
   - Place immediately after hero or as the first major content block.
   - Cover handmade spice craft, royal-kitchen inspiration, and international The Secret Kitchen presence.
   - Keep language sourced and restrained.

3. **Signature menu journey**
   - Use chaptered menu storytelling, not a wall of all items.
   - Link to the full menu.
   - Avoid prices unless confirmed.

4. **Experience / dining room section**
   - Jewel-toned dining room, celebration/date-night/group-dinner energy.
   - Keep private dining language careful until owner confirmation exists.

5. **Social proof / review-themes section**
   - Use review themes internally to shape copy.
   - Do not publish ratings, counts, or direct quotes unless approved and sourced.

6. **Visit / reserve close**
   - Address, directions, phone, email, hours, reservation, Instagram, Facebook.
   - Repeat reservation CTA.

## Component checklist

### Header / navigation

- [ ] Brand name matches confirmed owner preference or clearly marked snapshot name.
- [ ] Navigation is short: Story, Menu, Visit/Reserve, maybe Events if confirmed.
- [ ] Reserve CTA is visually primary.
- [ ] Mobile nav does not hide Reserve behind too many taps.

### Hero

- [ ] Uses Bamzi-style cinematic dark poster treatment.
- [ ] Headline communicates “Modern Indian fine dining arrives in Schaumburg” or equivalent.
- [ ] Subhead names Chef Aanal Kotak and global/heritage story without overclaiming.
- [ ] Reserve Now / Explore Menu / Directions are above the fold.
- [ ] Hours/address are visible enough to reduce visitor friction.
- [ ] Motion is tasteful and does not delay CTA availability.

### Story section

- [ ] Chef Aanal Kotak appears by name.
- [ ] Handmade spices and royal-kitchen inspiration are sourced from official content.
- [ ] International presence is stated exactly: India, Australia, Canada, USA.
- [ ] Copy avoids costume-like “royal” clichés.
- [ ] Section has editorial polish, not a generic about-card.

### Menu journey

- [ ] Uses at least four clear menu chapters.
- [ ] Includes real dish names from the captured official menu.
- [ ] Includes vegetarian breadth.
- [ ] Includes full-menu link.
- [ ] Does not publish prices without confirmation.
- [ ] Does not invent dishes or rename them beyond light presentation headings.

Recommended dish/chapter coverage:

- Street food reimagined: Avocado Dahi Puri, Parmesan Cheese Pav Bhaji, The Dhokla Fondue.
- First plates / tandoor drama: Thecha Paneer Tikka, Tandoor Ke Phool, Punjabi Kukkad Tikka, lamb chop naming only where confirmed.
- Royal mains / global comfort: Burrata Cheese Makhani, #TSKFIED Butter Chicken Delhi Style, Nalli Gosht Ki Nihari, Awadhi Gosht Biryani.
- Sweet theatre: Gulab Jamun Flambé, Kesar Mango Rasmalai, Sizzling Brownie with Chocolate Sauce, Chef Aanal’s Autograph Dessert.
- Bread / comfort / family support: Bread Bar, Comfort Plate, Junior Plate, Traditional Platter.

### Experience / atmosphere

- [ ] Uses jewel-toned, theatrical, elegant dining-room language.
- [ ] Supports date nights, celebrations, family/friend dinners, and group dinners without overclaiming private dining.
- [ ] Does not claim capacities, packages, banquet rooms, or minimums unless confirmed.
- [ ] Imagery is owner-approved or clearly replaceable.

### Visit / contact / links

- [ ] Address: 1411 W Schaumburg Rd, Schaumburg, IL 60194.
- [ ] Phone: `(630) 635-2854` and/or `+16306352854`.
- [ ] Email: `info@thesecretkitchenusa.com`.
- [ ] Hours snapshot: 5:30 PM–10:30 PM daily, unless owner confirms otherwise.
- [ ] Reservation path: `https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AG247`, unless owner confirms otherwise.
- [ ] Instagram: `thesecretkitchen.official.usa`.
- [ ] Facebook profile: `61578469689809`.
- [ ] Directions link opens correctly.

### Mobile

- [ ] First viewport communicates identity and has Reserve/Menu/Directions path.
- [ ] Sticky mobile CTA includes Reserve plus Menu/Call/Directions.
- [ ] Text is readable without zooming.
- [ ] No horizontal overflow.
- [ ] Menu chapters stack cleanly.
- [ ] Buttons are thumb-friendly.
- [ ] Visit details are tap-friendly.
- [ ] Image-heavy sections do not create slow, empty, or awkward mobile gaps.

### Motion / interaction

- [ ] Motion supports premium pacing, not distraction.
- [ ] No scroll-jacking.
- [ ] No slow intro animation before CTAs become usable.
- [ ] Reduce motion on mobile or honor reduced-motion preferences where practical.
- [ ] Hover states are polished but not required for core comprehension.

## Suggested copy blocks to adapt

Use these as starting points, not mandatory final copy:

- “Modern Indian fine dining arrives in Schaumburg.”
- “Chef Aanal Kotak brings Indian heritage, handmade spice craft, and global flavors to the table.”
- “Reserve dinner, explore the menu, and plan your visit.”
- “A cinematic dinner built around bold spices, elegant presentation, and a menu made for celebration.”
- “From street-food inspiration to royal mains and sweet theatre.”

Avoid:

- “Best Indian near me.”
- “Authentic curry and biryani.”
- “Award-winning” unless approved.
- “Private dining available” unless confirmed.
- Fake or unsourced Google rating language.

## Image strategy

Preferred owner-approved image set:

- Hero dining room or signature food image.
- Chef Aanal image.
- Signature street food / chaat image.
- Tandoor or lamb/chicken image.
- Main plate / curry / biryani image.
- Dessert theatre image.
- Dining room / bar / exterior / photo-moment image.

If rights are not confirmed:

- Use clearly labeled replaceable placeholders.
- Do not imply placeholder imagery is from The Secret Kitchen.
- Keep layout photo-ready so images can be dropped in later without redesign.

## Link and data contract

Before PR/preview handoff, produce a small link-audit artifact with:

- Reservation URL result.
- Full menu link result.
- Directions URL result.
- Phone link format.
- Email link format.
- Instagram/Facebook link result.
- Any intentionally omitted order/delivery/private dining links with reason.

## Developer PR acceptance checklist

Before opening the preview PR:

- [ ] The build still reads as Bamzi.
- [ ] Hero, story, menu, experience, and visit modules exist.
- [ ] Reserve/Menu/Directions are prominent on desktop and mobile.
- [ ] All known business facts are preserved.
- [ ] All unconfirmed claims are omitted or clearly marked internal.
- [ ] Menu journey uses real captured dish names.
- [ ] Images are owner-approved or clearly placeholders.
- [ ] No lint/type/build errors.
- [ ] Desktop and mobile screenshots captured.
- [ ] Link audit captured.
- [ ] QA readiness rubric is ready for round 1.

## Future builder brief to include in Codex/ACP prompt

When authorized, brief the builder with this minimum prompt content:

> Build The Secret Kitchen USA from the Bamzi archetype only. Preserve the real business facts, GetSeat reservation path, menu structure, Chef Aanal Kotak story, and mobile Reserve/Menu/Directions conversion path. Do not invent awards, review claims, private dining details, menu prices, photo rights, lunch availability, or ordering paths. Produce a preview with desktop/mobile screenshots, a link audit, and a short note explaining how the build preserves Bamzi structure while personalizing to The Secret Kitchen USA.

## Blocked language if a developer is asked to start early

Use this if build work is requested before gates clear:

> Build is blocked. The Secret Kitchen USA is not build-authorized yet because Mission Control provisioning/auth, founder approval, owner confirmations, and/or preview authorization are incomplete. The safe next step is to restore MC agency API auth, provision the workflow, generate the checklist, and confirm owner-sensitive claims/media before starting implementation.

## Handoff verdict

Once authorized, this is a strong Bamzi build candidate with enough source material to move fast. Until then, this checklist should remain internal and serve as a readiness artifact only.
