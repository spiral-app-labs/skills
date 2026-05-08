# The Chef Grill — improvement pass evidence

- Date: `2026-05-08`
- Site slug: `the-chef-grill`
- MC lead ID: `25633ae3-0c44-4d23-9996-da4440eeaa97`
- MC root task ID: `d9024ee4-cc50-4247-8529-2cb8b30c5ab2`
- MC child task ID: `36e1ff99-3fda-4415-bc02-83e76481048c`
- Template: `plate-01`

## Before / after

- Before: the fork already had a review carousel, but the proof copy was looser, some quote fragments were outside the locked 8–18-word target, and the sticky mobile CTA bar exposed only `Order`, `Call`, and `Directions`.
- After: the homepage now leads with tighter The Chef Grill-specific copy, the anonymous Google review surface uses only short quote fragments with no names, and the sticky mobile action bar exposes `Order Online`, `View Menu`, `Call`, and `Directions`.
- After: the contact and closing copy now make the reserve / group-planning path explicit without inventing reservations software, hours detail, or private-event claims.

## Audit finding coverage map

- Audit finding `Above-fold conversion is weak`:
  covered by tighter hero copy, preserved `Order Online` + `View Menu` + `Call`, and the four-action mobile sticky CTA bar.
- Audit finding `Mobile hero/readability is poor`:
  covered by shorter hero headline/subcopy and an explicit mobile-first CTA set.
- Audit finding `Long text blocks hide strong proof`:
  covered by shorter proof/banner copy and an anonymous review carousel built from short Google fragments.
- Audit finding `Order/reservation paths are confusing`:
  covered by consistent order/menu/call/directions paths on home and contact plus reserve/group language routed truthfully to phone contact.
- Audit finding `Contact/hours need stronger placement`:
  covered by preserved phone, address, directions, official menu/order/provider links, and the verified `9:00 AM – 11:30 PM` contact-form window copy on contact/closing.

## Conversion path check

- `Order Online`: preserved official `order.online` link in header, hero, sticky mobile CTA, contact quick links, and closing CTA.
- `View Menu`: preserved via home `#menu` CTA and `/menu` redirect to `/#menu`.
- `Call`: preserved via `tel:+13123138900` in hero and sticky mobile CTA.
- `Directions`: preserved via Google Maps directions link in sticky mobile CTA, contact quick links, and closing CTA.
- `Reserve / planning`: represented only as call-to-confirm language on FAQ, contact, and closing copy. No unsupported reservation system or private-event promise was added.

## Mobile check

- Method: reviewed prerendered build HTML in `.next/server/app/index.html` and `.next/server/app/contact.html` after `npm run build`.
- Verified: sticky mobile CTA labels `Order Online`, `View Menu`, `Call`, `Directions` appear on both home and contact output.
- Verified: mobile-relevant home hero copy and contact quick links are present in the built output.
- Screenshot status: blocked in this sandbox. Local server bind attempts were denied and headless browser screenshot capture was unavailable, so the attached mobile evidence is the structured preview packet at `build/improvement-preview-check-2026-05-08.json`.

## Commands run

- `npm run build` → passed
- `npm run lint` → passed
- `npm run typecheck` → failed before build because `.next/types` had not been generated yet
- `npm run typecheck` (rerun after build) → passed
- `npm run start -- --hostname 127.0.0.1 --port 3042` → blocked by sandbox `EPERM` on bind

## Preview / verification evidence

- Preview packet: `build/improvement-preview-check-2026-05-08.json`
- Routes checked truthfully:
  - `/` → prerendered HTML present
  - `/menu` → static redirect digest points to `/#menu`
  - `/contact` → prerendered HTML present
- Live preview URL after pass:
  - none verified in this run; prior local URLs `3041` and `3043` were not reachable during this pass

## Remaining blockers / unknowns

- No live local or deployed preview URL was reachable from this sandbox during the pass, so evidence is based on the built output instead of a running server.
- Day-by-day and holiday hours remain unverified beyond the official contact-form `9:00 AM – 11:30 PM` window.
- Catering, private events, and service-capacity details remain intentionally unclaimed.
