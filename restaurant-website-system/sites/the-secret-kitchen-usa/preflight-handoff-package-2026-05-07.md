# The Secret Kitchen USA — preflight handoff package

- Date: 2026-05-07
- Status: **internal handoff / preflight only**
- Canonical position: seed-ready with local evidence through `battle_cards`; **not build-authorized** and **not delivery/packaging-complete**
- Required archetype: **Bamzi**
- Current hard blockers: protected Mission Control agency API returns `401`; founder approval, MC root/child workflow provisioning, and owner confirmations remain pending.

## Purpose

This package gives the next agency worker one place to resume The Secret Kitchen USA without re-reading every artifact first. It consolidates what is complete, what is blocked, what must be attached to Mission Control when auth is restored, and what must not be said publicly yet.

This is **not** an owner-facing deliverable and not permission to build, publish, contact the restaurant, or perform raw Supabase writes. No raw Supabase writes were performed.

## Current state in one paragraph

The Secret Kitchen USA is a strong modern Indian dining lead in Schaumburg with a chef-led, reservation-first story. Local research, official-site audit, Google Reviews packet, template routing, builder brief, pitch doc, and battle cards now exist in the skills repo. The chosen template route is **Bamzi** because the restaurant needs cinematic dark-light-dark narrative pacing, Chef Aanal Kotak’s story, menu theatre, and mobile Reserve/Menu/Directions clarity. The work is still blocked from MC execution and owner-facing use because the protected MC agency workflow API is unauthorized and owner/founder gates have not cleared.

## Merged local artifact ledger

| Gate / purpose | Artifact | Current use | Notes |
| --- | --- | --- | --- |
| Seed/provisioning | `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/canonical-workflow-provisioning-request-2026-05-07.json` | MC provisioning request | Pending API auth and founder approval. |
| Founder decision | `restaurant-website-system/sites/the-secret-kitchen-usa/outreach/founder-seed-decision-brief-2026-05-07.md` | Internal founder decision support | Do not send externally without Ethan approval. |
| Owner confirmation | `restaurant-website-system/sites/the-secret-kitchen-usa/outreach/owner-confirmation-request-2026-05-07.md` | Owner question set | Not sent; useful once owner contact is approved. |
| Build-readiness research | `restaurant-website-system/sites/the-secret-kitchen-usa/research/build-readiness-menu-conversion-brief-2026-05-07.md` | Source packet | Seed-ready, not build-ready. |
| Official-site audit | `restaurant-website-system/sites/the-secret-kitchen-usa/audit-official-site-2026-05-07.md` | Audit evidence | Local only until MC attach works. |
| Google Reviews | `restaurant-website-system/sites/the-secret-kitchen-usa/scrapes/google-reviews-highest-30-2026-05-07.md` | Review evidence/theme source | Captured by browser; do not publish ratings/quotes without approved sourced placement. |
| Routing | `restaurant-website-system/sites/the-secret-kitchen-usa/routing-template-decision-2026-05-07.md` | Template route | Locks `template_slug` to Bamzi. |
| Builder brief | `restaurant-website-system/sites/the-secret-kitchen-usa/builder-implementation-brief-2026-05-07.md` | Future build brief | Explicitly not build authorization. |
| Pitch | `restaurant-website-system/sites/the-secret-kitchen-usa/pitch-doc-2026-05-07.md` | Internal sales positioning | Not owner-facing yet. |
| Battle cards | `restaurant-website-system/sites/the-secret-kitchen-usa/battle-cards-2026-05-07.md` | Sales/demo objections | Not owner-facing yet. |

## Pending Mission Control writeback payloads

Replay these only through the approved MC agency APIs after auth/provisioning is restored. Do not raw-write Supabase.

1. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/seed-provisioning-payload-2026-05-07.json`
2. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/canonical-workflow-provisioning-request-2026-05-07.json`
3. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-audit-evidence-writeback-pending-2026-05-07.json`
4. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-reviews-evidence-writeback-pending-2026-05-07.json`
5. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-routing-writeback-pending-2026-05-07.json`
6. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-builder-brief-writeback-pending-2026-05-07.json`
7. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-sales-assets-writeback-pending-2026-05-07.json`
8. `restaurant-website-system/sites/the-secret-kitchen-usa/mc-payloads/mc-preflight-handoff-writeback-pending-2026-05-07.json`

## Canonical gate status

| Gate | Local status | MC status | Resume instruction |
| --- | --- | --- | --- |
| claimed/checklist | Seed/provisioning request exists; checklist cannot be finalized without MC lead/root IDs. | Blocked by API auth/provisioning. | Provision canonical root/children first, then generate checklist with MC IDs. |
| auditing | Official-site audit and screenshot/text evidence exist locally. | Pending attach. | Attach evidence/writeback to auditing child task once MC exists. |
| reviews | 30 written Google reviews and browser screenshot evidence exist locally. | Pending attach. | Attach review packet; keep direct ratings/quotes owner-approved only. |
| routing | Bamzi routing decision exists locally. | Pending attach. | Write `template_slug: Bamzi` to MC routing child/root metadata. |
| building | Builder brief exists locally. | Not authorized. | Do not fork/build until founder approval, MC workflow, and owner confirmation gates clear. |
| improving/top_3/concierge | Not started. | Not authorized. | Requires preview/build first. |
| pitch | Internal pitch doc exists locally. | Pending attach. | Attach as future pitch child artifact; do not send owner-facing yet. |
| battle_cards | Internal battle cards exist locally. | Pending attach. | Attach as future battle_cards child artifact; do not use externally yet. |
| qa_round_1/2/3 | Not started. | Not authorized. | Requires preview URL and screenshot evidence. |
| packaging/delivered | Not started. | Not authorized. | This preflight package is not final packaging; it only helps resume. |

## Known public facts to preserve

- Business name snapshot: The Secret Kitchen USA / The Secret Kitchen.
- Official site: `https://thesecretkitchenusa.com/`
- Address: 1411 W Schaumburg Rd, Schaumburg, IL 60194.
- Phone: `(630) 635-2854` / `+16306352854`.
- Email: `info@thesecretkitchenusa.com`.
- Hours snapshot: 5:30 PM–10:30 PM daily.
- Reservation path snapshot: `https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AG247`.
- Chef/founder identity in source: Chef Aanal Kotak.
- Positioning: Indian heritage + global flavors; “Those who dine beyond ordinary”; “Flavors of the World / From India to America.”
- Source story: Chef Aanal personally creates spices; inspiration from royal kitchens; presence in India, Australia, Canada, USA.

## Owner/founder confirmations still required

These are blockers for public preview, build, and sales use:

1. Founder approval to seed/provision this lead and whether speculative pre-MC preview work is allowed.
2. Preferred public brand name.
3. Current menu/prices and whether captured official menu content may be used.
4. GetSeat reservation path currentness and exclusivity.
5. Owner-approved image rights for dining room, exterior, food, bar, dessert, Chef Aanal, and social/photo-moment imagery.
6. Private dining/banquet details, if any, including capacity, policies, and inquiry route.
7. Awards/press/recognition claims and logo/name permissions.
8. Lunch status: planned, active, or dinner-only.
9. Vegetarian/vegan/non-vegetarian homepage emphasis.
10. Whether Google review ratings/counts/direct quotes can be displayed and exactly how.

## Truth-safety and sales guardrails

Do not say or publish:

- “Award-winning” without approved wording.
- A Google rating/review count unless approved and sourced in the preview.
- Direct review quotes unless approved and source-linked/permission-safe.
- Private dining capacities, room names, minimums, or policies without owner confirmation.
- Delivery/order CTAs unless an approved ordering provider is confirmed.
- Menu prices unless currentness is confirmed.
- Lunch availability unless owner confirms it.
- Stock or scraped images as if they are restaurant-owned.

## Recommended next unblocked action when MC auth returns

1. Provision the root and child workflow from `canonical-workflow-provisioning-request-2026-05-07.json`.
2. Generate/refresh `checklist.md` and `checklist.json` after MC lead/task IDs exist.
3. Attach local audit, reviews, routing, builder brief, pitch, battle cards, and this handoff package to the appropriate child tasks.
4. Set root `metadata.build_stage` / `metadata.currentStage` to the first incomplete canonical gate that MC agrees is incomplete.
5. Only then decide whether to authorize building/forking.

## Recommended next truth-safe local action if MC auth remains blocked

If no MC auth and no owner approval are available, the only safe local work left is quality-control and implementation-readiness support, such as:

- Create a developer handoff checklist for the future Bamzi fork.
- Verify source artifact links and screenshot paths after branch merges.
- Prepare a QA rubric for the future preview, clearly marked “not run.”
- Research/seed a different unblocked restaurant lead if Mission Control has no active executable website and Ethan wants fresh agency targets.

## Stop conditions

Stop and ask Ethan / wait for MC if the next action would require any of the following:

- Contacting the restaurant or owner.
- Publishing a preview.
- Using protected MC APIs without auth.
- Writing directly to Supabase to bypass MC agency APIs.
- Claiming ratings, awards, photo rights, private dining details, lunch status, or ordering paths that are not confirmed.

## Handoff verdict

The Secret Kitchen USA is now well-prepared for an MC-backed build decision, but it should remain internal until the operational gates clear. The local artifact stack is strong enough that the next authorized worker should be able to provision, attach evidence, and brief a Bamzi builder quickly without redoing research.
