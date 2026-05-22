# Mary's Mexican Grill Concierge Evidence

- Date: 2026-05-04
- Stage: `concierge`
- Root task ID: `0ee079ce-2e26-4d44-8fdf-96e0db2e4047`
- Child task ID: `70683332-3044-461f-9dcf-dffa59a24a7b`

## Entry point notes

- The concierge entry point is now mounted on the homepage in `app/page.tsx` with `<AskConcierge restaurantName={content.brand.name} />`.
- The trigger is restaurant-specific and renders as `Ask Mary's Mexican Grill`.
- The first-open copy is explicitly preview-safe:
  - `Ask about Mary's before you call or head over.`
  - `Public facts only, menu signals, public hours, Woodstock Square directions, the phone note, and the DoorDash path. No live reservations, direct-order promises, or invented availability.`
  - `Preview-safe AI concierge. Confirm allergies, live availability, hours, and phone details with the restaurant directly.`
- UI evidence sources:
  - `components/AskConcierge.tsx`
  - `.next/server/app/index.html`
  - `.next/static/chunks/app/page-d2128d143b26a105.js`

## KB facts used

- Restaurant name: Mary's Mexican Grill.
- Address: 108 Cass St, Woodstock, IL 60098.
- Location framing: Woodstock Square / historic Woodstock Square.
- Public listing phone: (815) 337-2303.
- Public phone conflict note: older indexed official-site copy showed (815) 923-5240.
- Public hours:
  - Monday to Saturday: 10:00 am - 9:00 pm
  - Sunday: 10:00 am - 8:00 pm
- Public online ordering path: DoorDash listing only, labeled as third-party/public.
- Verified menu and review-backed suggestion pool:
  - tacos al pastor
  - steak tacos
  - carnitas taco
  - Torta Mary
  - tamales
  - mole enchiladas
  - ceviche
  - grilled shrimp
  - pastor chimichanga
  - chips and salsa
- Safety rules enforced:
  - no fake reservations
  - no invented direct-order URL
  - no live availability claims
  - no allergy confirmation
  - fallback to phone for time-sensitive questions

## Behavior test transcripts

### 1. Menu suggestion

- Prompt: `What should I order tonight?`
- Response:

```text
data: {"text":"A good first order, based on public reviews and menu signals, is tacos al pastor or steak tacos with chips and salsa. If you want something beyond tacos, tamales, mole enchiladas, Torta Mary, ceviche, grilled shrimp, and the pastor chimichanga all show up in the public evidence for Mary's."}

data: {"done":true}
```

### 2. Order / call path

- Prompt: `How can I order pickup or delivery, and what number should I call?`
- Response:

```text
data: {"text":"For online ordering, this preview points guests to Mary's public DoorDash listing for delivery and pickup. The direct official order path is still unconfirmed, so I do not want to invent one, and you can also call (815) 337-2303 for current details."}

data: {"done":true}
```

### 3. Directions

- Prompt: `Where are you located?`
- Response:

```text
data: {"text":"Mary's Mexican Grill is at 108 Cass St, Woodstock, IL 60098, right on Woodstock Square. If you want turn by turn directions, use the Directions action on the site for the public Google Maps route."}

data: {"done":true}
```

### 4. Unsupported reservation request

- Prompt: `Can I reserve a table for 7 tonight?`
- Response:

```text
data: {"text":"I can not promise reservations or live table availability in this preview. Please call (815) 337-2303 to check tonight, and note that an older indexed site listed (815) 923-5240, so owner confirmation is still recommended."}

data: {"done":true}
```

## Commands run

```bash
git config user.name
git config user.email
sed -n '1,220p' restaurant-website-system/sites/marys-mexican-grill/app/api/chat/route.ts
sed -n '1,240p' restaurant-website-system/sites/marys-mexican-grill/components/AskConcierge.tsx
sed -n '1,260p' restaurant-website-system/sites/marys-mexican-grill/content.example.ts
sed -n '1,220p' restaurant-website-system/sites/marys-mexican-grill/audit.md
sed -n '1,220p' restaurant-website-system/sites/marys-mexican-grill/routing.md
sed -n '1,220p' restaurant-website-system/sites/marys-mexican-grill/source.md
sed -n '1,220p' restaurant-website-system/sites/marys-mexican-grill/google-reviews-themes.md
sed -n '1,240p' restaurant-website-system/sites/marys-mexican-grill/checklist.md
sed -n '1,260p' restaurant-website-system/sites/marys-mexican-grill/checklist.json
npm ci
npm run build
npm run typecheck
node -e "(async()=>{const mod=require('./.next/server/app/api/chat/route.js'); ... })()"
rg -n \"Preview-safe AI concierge|Public facts only|Can I reserve a table|Ask about Mary\" .next/static/chunks .next/server/app/index.html
```

## Fallbacks and limits

- `ANTHROPIC_API_KEY` is not available in this runtime, so the route now uses a deterministic local fallback path instead of making an external model call.
- A normal local dev server could not be bound in this sandbox. `npm run dev` failed with `listen EPERM: operation not permitted 0.0.0.0:3000`.
- Because of that port-binding limit, UI evidence was taken from built Next artifacts and source files instead of a live browser screenshot.
- Mission Control API writeback is blocked because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unavailable. Local writeback JSON was produced instead.
