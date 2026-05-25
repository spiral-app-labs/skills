# mago-grill-and-cantina-arlington-heights Build Checklist

- Workflow version: 2026-05-16
- Namespace: agency_website_workflow
- Source of truth: Mission Control tasks.metadata + this mirrored local checklist
- Lead: Mago Grill & Cantina
- Lead ID: 9f51aee6-40da-4338-af67-56c7a02c7304
- MC parent task ID: 66bad43e-c2f7-4bd5-a392-4dcc510afe09
- Current child task ID: 2fb05db8-25a5-4366-b427-f243e38079d5
- Current stage: building
- Current step: template_fork_build
- Template slug: bramble-01
- Template route draft: bramble-01
- Checklist MD: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/checklist.md
- Checklist JSON: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/checklist.json
- Deploy URL: local preview evidence
- Updated: 2026-05-25T18:39:03Z

## Lead Metadata

- Owner name: TBD
- Owner email: TBD
- Contact email: info@fwhg.com from official page mailto markup; verify before outreach.
- Phone: 847.253.2222
- Location: 115 W Campbell St, Arlington Heights, IL 60005
- Website: https://www.magogrill.com/arlington-heights/
- Order URL: https://order.toasttab.com/online/mago-grill-and-cantina-arlington-heights-115-w-campbell-street
- Reservation URL: https://www.opentable.com/r/mago-grill-and-cantina-arlington-heights
- Catering/events URL: https://www.magogrill.com/private-events/ and https://www.magogrill.com/catering/
- Hours: Official Arlington Heights page lists Monday-Thursday 11AM-10PM, Friday-Saturday 11AM-11PM, Sunday 11AM-9PM, with holiday hours varying. Verify again during current_site_audit before final copy.
- Google rating / review count: MC seed lists Google rating 4.4 and 1,627 reviews. Verify directly during google_reviews_capture before exact quote or count use.
- Source notes: Checked official Arlington Heights location page, About page, menus, group dining, order-online path, private events, catering, gift cards, Toast order flow, OpenTable, Restaurant Guru, Tripadvisor, and the Mission Control lead seed. Owner name/email beyond public contact routes was not verified in this gate.
- Outreach email draft: TBD

## Mission Control Sync Contract

- Writeback endpoint: /api/agency/leads/9f51aee6-40da-4338-af67-56c7a02c7304/build
- MC root metadata must mirror currentStage/build_stage, checklist paths, passed_requirement_ids, evidence_urls, and blockers.
- MC child tasks must mirror workflow_step_id, requirements, evidence_required, required_skills, skill_contract, and operator_contract.
- Do not mark later gates complete from local files alone.

## Canonical Gates

1. lead_qualification - qualifying - passed and MC writeback verified
   - Requirements: lead-fit-qualified; lead-fit-seven-checks; lead-fit-evidence
   - Evidence: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/qualification.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/qualification.json

2. checklist - checklist - passed and MC writeback verified
   - Requirements: checklist-md; checklist-json; checklist-mc-sync
   - Evidence: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/checklist.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/checklist.json

3. current_site_audit - auditing - passed and MC writeback verified
   - Requirements: current-site-audit; current-site-screenshots; current-site-opportunities
   - Evidence: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/audit.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-home.txt; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-about.txt; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-menus.txt; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-group-dining.txt; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-order-online.txt; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-home-desktop-full.png; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-mobile-full.png; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-mobile-fold.png

4. google_reviews_capture - reviews - passed and MC writeback verified
   - Requirements: reviews-browser-highest; reviews-thirty-written; reviews-evidence
   - Evidence: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/reviews/google-reviews-highest-30.json; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/reviews/google-reviews-highest-30-2026-05-25.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/reviews/review-themes-summary.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/google-reviews-highest-2026-05-25.png

5. template_routing - routing - passed and MC writeback verified
   - Requirements: template-route-locked; template-route-alternatives; template-route-modifiers
   - Evidence: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/routing/template-routing-2026-05-25.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/routing/template-routing-2026-05-25.json

6. hero_art_bible - hero_art_bible - passed and MC writeback verified
   - Requirements: hero-image-generated; hero-clean-plate; hero-art-bible; hero-assets-mc-synced
   - Evidence: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/art-bible.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/public/images/raw/inspo.png; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/public/images/raw/plate.png

7. template_fork_build - building - passed locally; ready for MC writeback verification
   - Requirements: fork-built; fork-preview; specificity
   - Evidence: restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/template-fork-build-2026-05-25.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/build-notes-2026-05-25.md; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/typecheck-2026-05-25.txt; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/typecheck-2026-05-25.log; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/build-2026-05-25.txt; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/build-2026-05-25.log; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/template-fork-build-desktop-2026-05-25.png; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/template-fork-build-mobile-2026-05-25.png; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/first-preview-home-desktop-2026-05-25.png; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/first-preview-home-mobile-2026-05-25.png; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/app/page.tsx; restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/content.ts

8. improvement_pass - improving - pending
   - Requirements: improvement-pass-complete; conversion-paths; mobile-check
   - Evidence: pending

9. top_three_improvements - top_3_improvements - pending
   - Requirements: top-three-ranked; top-three-implemented; top-three-evidence
   - Evidence: pending

10. ai_concierge - concierge - pending
    - Requirements: concierge-visible; concierge-tested; concierge-safe
    - Evidence: pending

11. pitch_doc - pitch - pending
    - Requirements: pitch-before-after; pitch-evidence; pitch-specific
    - Evidence: pending

12. battle_cards - battle_cards - pending
    - Requirements: battle-cards-objections; battle-cards-demo-path; battle-cards-risks
    - Evidence: pending

13. qa_round_1 - qa_round_1 - pending
    - Requirements: qa1-findings; qa1-fixes
    - Evidence: pending

14. qa_round_2 - qa_round_2 - pending
    - Requirements: qa2-mobile; qa2-conversion
    - Evidence: pending

15. qa_round_3 - qa_round_3 - pending
    - Requirements: qa3-sell-ready; qa3-assets-ready
    - Evidence: pending

16. higgsfield_video_handoff - ready_for_higgsfield_video - pending
    - Requirements: higgsfield-ready-preview; higgsfield-motion-brief; higgsfield-founder-handoff
    - Evidence: pending

17. delivery - packaging - pending
    - Requirements: delivery-final-url; higgsfield-video-linked; founder-final-review-approved; delivery-three-qa-rounds; delivery-pack
    - Evidence: pending

## Evidence Paths

- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/qualification.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/qualification.json
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/checklist.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/checklist.json
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/audit.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-home.txt
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-about.txt
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-menus.txt
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-group-dining.txt
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/scrapes/current-site-order-online.txt
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-home-desktop-full.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-mobile-full.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/current-site-mobile-fold.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/reviews/google-reviews-highest-30.json
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/reviews/google-reviews-highest-30-2026-05-25.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/reviews/review-themes-summary.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/google-reviews-highest-2026-05-25.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/routing/template-routing-2026-05-25.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/routing/template-routing-2026-05-25.json
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/art-bible.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/public/images/raw/inspo.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/public/images/raw/plate.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/template-fork-build-2026-05-25.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/typecheck-2026-05-25.txt
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/build-2026-05-25.txt
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/template-fork-build-desktop-2026-05-25.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/template-fork-build-mobile-2026-05-25.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/build-notes-2026-05-25.md
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/typecheck-2026-05-25.log
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/evidence/build-2026-05-25.log
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/first-preview-home-desktop-2026-05-25.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/screenshots/first-preview-home-mobile-2026-05-25.png
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/app/page.tsx
- restaurant-website-system/sites/mago-grill-and-cantina-arlington-heights/content.ts

## Next Gate

- After MC accepts template_fork_build evidence, re-query `/next` and continue only if the planner selects the next gate for this same website.

## QA Rounds

- Round 1: pending
- Round 2: pending
- Round 3: pending

## Pitch Artifacts

- Pitch doc: TBD
- Battle cards: TBD
- Outreach draft: TBD

## Blockers

- None

## Done Criteria

- Mission Control root task metadata.build_stage/currentStage matches the active current gate.
- Mission Control root + current child task metadata include checklist_markdown_path and checklist_json_path.
- Every canonical workflow step has either passed evidence in MC or a fresh blocker recorded in MC.
- Exactly three QA rounds are logged with evidence before delivery.
- Preview URL, pitch doc, battle cards, screenshots, checklist paths, QA evidence, and requirement status are attached before delivery.
