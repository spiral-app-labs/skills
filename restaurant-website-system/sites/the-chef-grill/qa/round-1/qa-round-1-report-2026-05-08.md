# The Chef Grill — QA Round 1 Report

Date: 2026-05-08
Stage: `qa_round_1`
Result: **Pass**

## Scope checked

- Desktop and mobile render for homepage, menu redirect, about, and contact.
- Core identity and factual trust signals: The Chef Grill, halal Turkish/Mediterranean positioning, Elk Grove Village address, phone, order path, call path, directions path, and 4.7 / 807 Google proof where expected.
- Internal-copy leak scan for preview/source-artifact/template language in customer-visible app/content source.
- Concierge safety response for allergy / reservation-style question.
- Build/typecheck gate.

## Fix made during QA1

The first mobile contact screenshot showed the sticky mobile quick-action bar overlaying the form, which made the form look interrupted around the Email/Subject area. Fixed by hiding the fixed mobile quick-action bar on `/contact`, where the page already provides contact/order/menu/directions quick links in the content flow. Also made the contact phone/email text clickable.

Files changed:

- `components/SiteHeader.tsx`
- `app/contact/page.tsx`
- minor customer-facing copy cleanup in `content.example.ts`, `components/AskConcierge.tsx`, `components/ContactForm.tsx`, and `app/api/chat/route.ts`

## Evidence

- `qa/round-1/qa-round-1-render-check-2026-05-08.json`
- `qa/round-1/qa-round-1-source-scan-2026-05-08.txt`
- `qa/round-1/screenshots/qa1-desktop-home-2026-05-08.png`
- `qa/round-1/screenshots/qa1-mobile-home-2026-05-08.png`
- `qa/round-1/screenshots/qa1-desktop-menu-2026-05-08.png`
- `qa/round-1/screenshots/qa1-mobile-menu-2026-05-08.png`
- `qa/round-1/screenshots/qa1-desktop-about-2026-05-08.png`
- `qa/round-1/screenshots/qa1-mobile-about-2026-05-08.png`
- `qa/round-1/screenshots/qa1-desktop-contact-2026-05-08.png`
- `qa/round-1/screenshots/qa1-mobile-contact-2026-05-08.png`

## Automated checks

- `npm run build` — passed
- `npm run typecheck` — passed
- Route checks — `/`, `/menu`, `/about`, `/contact` returned 200 in production server run.
- No horizontal overflow detected across checked desktop/mobile routes.
- No visible internal `preview/source artifact/template` language detected in rendered page text.

## Remaining caveats for later stages

- Day-by-day / holiday hours still need owner confirmation before launch.
- Catering/private-event capacity is not verified; keep “call to plan” language.
- Preferred ordering provider should be confirmed before public launch.
- Owner/founder story and spelling should be verified before making it a sales claim.
