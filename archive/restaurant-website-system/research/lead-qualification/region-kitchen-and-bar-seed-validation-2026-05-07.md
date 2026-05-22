# Region Kitchen and Bar — Browser lead-fit validation

- Date: 2026-05-07T13:02Z
- Candidate slug: `region-kitchen-and-bar`
- Official website tested: `https://regionrestaurant.com/`
- Recommendation: **Seed / provision as the next unblocked website-agency workflow candidate once the protected Mission Control agency route is available.**
- Proposed route/archetype: `roma` (premium chef-owned seasonal American / reservation-led dinner-out positioning)
- MC write status: **not mutated** — planner/protected agency API auth is unavailable in this OpenClaw runtime (`AGENCY_AUTONOMY_API_KEY` missing; production planner returned `403 Forbidden`; local planner refused connection). No raw Supabase agency write was performed.

## Evidence captured

- Desktop screenshot: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-evidence-2026-05-07/region-current-site-desktop-2026-05-07.png`
- Mobile screenshot: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-evidence-2026-05-07/region-current-site-mobile-2026-05-07.png`
- Desktop DOM text: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-evidence-2026-05-07/region-current-site-desktop-dom-text-2026-05-07.txt`
- Mobile DOM text: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-evidence-2026-05-07/region-current-site-mobile-dom-text-2026-05-07.txt`
- Capture manifest: `restaurant-website-system/research/lead-qualification/region-kitchen-and-bar-evidence-2026-05-07/capture-manifest-2026-05-07.json`
- Existing lead research: `restaurant-website-system/research/net-new-schaumburg-leads-2026-05-06.md`

## Public-source facts to preserve

- Name: Region Kitchen and Bar / Region
- Address shown on current website: `718 W. NW Highway, Barrington, IL 60010`
- Phone shown on current website: `(224) 848-4005`
- Emails shown on current website: `dperlick@regionrestaurant.com`, `jperlick@regionrestaurant.com`
- Hours shown on current website: Tuesday–Thursday `4:30 pm-9 pm`; Friday–Saturday `4:30 pm-10 pm`; Sunday `4:30 pm-9 pm`; Monday closed.
- Positioning shown on current website: chef/owner Dave Perlick's flagship restaurant in Barrington; regionally and seasonally inspired food; neighborhood favorite / dining destination outside Chicago.
- Revenue paths already present: reservations, DoorDash, Uber Eats, gift cards, private events, newsletter signup.
- Existing local research recorded Google signal as `4.8 / 698 reviews` on 2026-05-06 and OpenTable as `3,010 reviews`.
- Web search on 2026-05-07 surfaced OpenTable copy: “Book now at Region in Barrington, IL. Explore menu, see photos and read 3010 reviews...”

## Why this is a strong lead

Region has the right selling shape for Ethan's restaurant website agency: premium but local, chef-owned, American/seasonal, reservation-led, and already monetizing several paths that a better site can make clearer. The current site has enough real business signal to support a specific redesign without inventing identity, but the online experience visibly under-sells the restaurant.

The biggest pitch angle is simple: Region already has a respected dining experience and multiple revenue channels, but the homepage opens with carryout limitations and gift-card messaging instead of selling the dining room, menu, chef story, private events, and reservations.

## Current-site blockers / redesign opportunities

1. **Weak first impression for an upscale dinner destination.** The first major message is “PLACE AN ONLINE ORDER FOR CARRYOUT” plus a note that carryout may be turned off during high volume. That is operationally honest, but it is the wrong hero for a premium restaurant.
2. **Reservation conversion is underpowered.** The primary reservation path is a small “Call For Reservations” button. A Roma-style redesign should make reserve/table intent obvious and repeated, while preserving phone as a fallback.
3. **Private events are only an email handoff.** The current site says “Interested in a private event? Contact Jillian” and gives `jperlick@regionrestaurant.com`, but it does not sell event occasions, capacity, room feel, sample menus, photos, or an inquiry flow.
4. **Gift cards and online ordering compete with the restaurant story.** Gift card copy is repeated, and ordering buttons sit beside a discouraging availability note. These should be secondary conversion modules, not the entire first screen.
5. **Visual hierarchy feels dated.** Browser screenshots show heavy overlays, orange serif headlines, thin buttons, large blank/gray sections, and underused food/ambience photography.
6. **Mobile has large gaps and long scroll before trust-building content.** The mobile capture shows the same text-heavy hero and poor CTA prioritization, with useful dining/event proof buried lower on the page.
7. **Accessibility/identity mismatch surfaced in browser snapshot.** The logo link exposed alt text as “A logo for the restaurant, veggii kitchen and bar,” which appears mismatched to Region and should be fixed in any rebuild.
8. **Footer/contact is functional but not polished.** Duplicate emails and simple link lists are useful, but the presentation feels below the standard implied by a highly reviewed chef-owned restaurant.

## Suggested first canonical workflow state

If MC seeding/provisioning is available, create/provision a normal website workflow root:

- `site_slug`: `region-kitchen-and-bar`
- `build_stage` / `currentStage`: `checklist`
- `template_slug`: `roma`
- Required first gate: checklist + public-source audit before build
- Preserve real links and claims only; no invented awards, review quotes, or menu items.
- Google Reviews gate must still collect 30 written reviews in-browser before routing/build confidence is considered final.

## Verdict

**Proceed when MC agency writeback/provisioning is available.** Region is not blocked by bad fit in the way Al's/Tin Man/Tasty/Sofia are, and it is more commercially sellable than forcing another pass on currently blocked roots. The only immediate blocker is operational: this runtime still cannot call the protected planner/provisioning route, so the seed should be replayed through MC rather than written directly to Supabase.
