# Codex Worker Brief: Moontime Smokin' Que First Preview

You are running inside `/Users/ethantalreja/.openclaw/workspace/GitHub/skills/restaurant-website-system`.

Mission Control selected this live item after a fresh `/api/agency/website-workflow/next?limit=5`:

- Lead: Moontime Smokin Que
- Lead ID: `788d0e2a-8fea-4a88-9d28-bbc0263959a6`
- Root task ID: `ae265b4e-6262-4a57-9e02-176730a62260`
- Current child task ID: `bba3f80a-3a6e-4839-a6f7-ac3fd42320b6`
- Workflow step: `template_fork_build`
- Allowed build stage: `building`
- Template route: `bramble-01`
- Site slug/path: `sites/moontime-smokin-que`

Work only on this site and this gate. You are not alone in the codebase; do not revert unrelated changes or delete existing Moontime evidence artifacts.

## Required Evidence For This Gate

Produce a first working preview/build that satisfies:

- `fork-built`: template fork builds successfully with real content and preserved conversion links.
- `fork-preview`: local preview evidence or preview URL exists.
- `specificity`: first build uses real restaurant facts, menu/service cues, and conversion paths instead of generic restaurant copy.

## Important Existing Evidence

Read these first:

- `sites/moontime-smokin-que/audit.md`
- `sites/moontime-smokin-que/reviews/google-review-themes-summary-2026-06-04.md`
- `sites/moontime-smokin-que/routing/template-routing-2026-06-04.md`
- `sites/moontime-smokin-que/art-bible.md`
- `sites/moontime-smokin-que/checklist.md`
- `sites/moontime-smokin-que/checklist.json`
- `templates/bramble-01/source.md`
- `templates/bramble-01/content.example.ts`

Hero assets already exist and are uploaded:

- Local inspo: `sites/moontime-smokin-que/public/images/raw/inspo.png`
- Local clean plate: `sites/moontime-smokin-que/public/images/raw/plate.png`
- Public inspo URL: `https://eayiazyiotnkggnsvhto.supabase.co/storage/v1/object/public/agency-hero-assets/788d0e2a-8fea-4a88-9d28-bbc0263959a6/inspo.png`
- Public clean plate URL: `https://eayiazyiotnkggnsvhto.supabase.co/storage/v1/object/public/agency-hero-assets/788d0e2a-8fea-4a88-9d28-bbc0263959a6/plate.png`

## Fork Implementation Notes

The normal `scripts/fork-template.sh --template bramble-01 --slug moontime-smokin-que` will refuse because `sites/moontime-smokin-que` already exists with current-site/review/hero evidence. Do not delete this directory and do not use `--force`.

Instead, copy the bramble app/template files into the existing site directory while preserving the evidence folders/files already there. Keep or create `.agency-template.json` with `template_slug: bramble-01`. It is acceptable to use normal shell copy/rsync for generated template files, excluding `node_modules`, `.next`, `out`, screenshots, videos, and other generated output.

## Site Requirements

Build a real first preview, not a placeholder.

Use verified facts:

- Restaurant: Moontime Smokin' Que
- Address: `88 Railroad Street Unit A, Crystal Lake, IL 60014`
- Phone: `(779) 994-7119`
- Order URL: `https://order.toasttab.com/online/moontime-smokin-que-88-railroad-street-unit-a`
- Catering/contact URL: `https://moontimebbq.com/contact/`
- Email: `catering@moontimebbq.com`
- Owners: Heather and Joe Cummings
- Story: started in 2017, grew from catering/carry-out into a full-service downtown Crystal Lake smokehouse and bar.
- Hours: Mon-Tues closed; Wed-Thurs 11am-9pm; Fri-Sat 11am-10pm; Sun 11am-7pm; kitchen closes one hour before posted closing.
- Menu/proof items: brisket grilled cheese, pulled pork tacos, brisket taco, ribs, wings, Cubano, smoked turkey, baked beans, cheese curds, cornbread, blueberry chipotle BBQ sauce.
- Reviews: use review-backed phrases such as hidden gem, downtown addition, perfect smokiness, Texas-approved brisket, real butter cornbread, creative sauces, friendly service, kid friendly.

Apply the art bible:

- Warm smokehouse cream, char, brass amber, deep sauce red, muted wood.
- Food-forward scrapbook/bramble rhythm.
- Hero uses the clean plate as production background/poster.
- No humans, no fake awards, no fake reviews, no reservation-first path.
- Conversion floor: desktop floating action pill and mobile bottom action bar. Primary actions are Order Online and Catering / Events; include Menu, Call, Directions.
- Single-location brand, so avoid redundant in-hero CTA piles if the header/mobile anchors handle conversion.

## Expected Files

Modify/create the normal bramble preview app files under `sites/moontime-smokin-que`, likely including:

- `package.json`
- `app/`
- `components/`
- `lib/` or `content.ts`/`theme.ts` depending on bramble structure
- `.agency-template.json`
- `template-fork-build-evidence-2026-06-04.md`

Do not remove:

- `audit.md`
- `reviews/`
- `routing/`
- `scrapes/`
- `screenshots/`
- `research/`
- `public/images/raw/inspo.png`
- `public/images/raw/plate.png`
- `art-bible.md`
- `checklist.md`
- `checklist.json`
- `mc-payloads/`

## Verification

Run the best available checks for the fork, preferably:

- install dependencies only if needed
- `npm run build` from `sites/moontime-smokin-que`
- if build succeeds, start a local dev server on an available port and capture at least desktop and mobile homepage screenshots into `sites/moontime-smokin-que/screenshots/`

Write `sites/moontime-smokin-que/template-fork-build-evidence-2026-06-04.md` with:

- files changed/created
- checks run and results
- preview URL or local dev URL used for screenshots
- screenshot paths if captured
- any truthful remaining limitations

Do not write Mission Control. The parent heartbeat will inspect your local output and do the MC writeback.
