# Concierge Kit — Integration Recipe

Time budget: 15 minutes for an experienced hand, 25 minutes the first time.
Assumes the target template already has `content.ts`, Tailwind set up, and
`app/layout.tsx`.

## 1. Copy the scaffold

```bash
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib/concierge-kb.ts \
      <TARGET_TEMPLATE>/lib/
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/lib/concierge-voice.ts \
      <TARGET_TEMPLATE>/lib/
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/components/AskConcierge.tsx \
      <TARGET_TEMPLATE>/components/
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/components/concierge-theme.ts \
      <TARGET_TEMPLATE>/components/
mkdir -p <TARGET_TEMPLATE>/app/api/chat
cp -r restaurant-website-system/research/chat-concierge/concierge-kit/scaffold/app/api/chat/route.ts \
      <TARGET_TEMPLATE>/app/api/chat/
```

## 2. Fill in `lib/concierge-voice.ts`

Replace every `<<PLACEHOLDER>>`. Budget: 10–15 minutes. If unsure, use one of
`../examples/voice-editorial.ts` or `voice-warm-finedining.ts` as a starting
point and edit from there.

Required edits: `header`, `body`, `hospitality`, `closingIntelligence`,
`examples`, `hardRules`, `suggestedChips`.

## 3. Fill in `components/concierge-theme.ts`

Map every class string to ones using this template's Tailwind tokens
(`accent`, `canvas`, `border`, `text-muted`, etc.). If a token doesn't exist
in the template's `tailwind.config.js`, either add it or substitute a plain
value. Budget: 5 minutes.

Also replace `<<RESTAURANT_NAME>>` in `trigger.labelHtml`.

## 4. Add reservation fields to `content.ts`

Under the `brand` object, add all three:

```ts
reservationPlatform: 'opentable' as const, // 'opentable' | 'resy' | 'tock' | 'native'
reservationUrl: 'https://www.opentable.com/<slug>',
reservationRestref: '123456', // numeric OpenTable restaurant ID
```

**Finding `reservationRestref` (30 seconds):**

1. Open OpenTable's public widget builder: `https://www.otrestaurant.com/marketing/reservationwidget`.
2. Type the restaurant name and step through the wizard. The generated embed code / preview URL contains the numeric ID (look for `rid=<NUMBER>`).
3. Copy the number into `reservationRestref`.
4. Confirm by opening `https://www.opentable.com/restref/client/?restref=<ID>&datetime=2026-05-09T19:00&covers=4` — the reservation form should load with 4 guests / that date / 7:00 PM pre-filled.

If you can't find or verify the ID, leave `reservationRestref: ''`. The Reserve button gracefully falls back to the plain `reservationUrl` slug (the diner just gets an unprefilled OpenTable form — same as before PRD 01). Pre-fill is an upgrade, not a requirement.

**Other platforms:** Resy / Tock / native-form pre-fill is not implemented in v1. Set `reservationPlatform` accurately so future upgrades pick up automatically, but the button will use the fallback URL until those builders land.

## 5. Mount `<AskConcierge />` in `app/layout.tsx`

```tsx
import { AskConcierge } from '../components/AskConcierge';

// Inside <body>, after {children}:
<AskConcierge />
```

## 6. Add the Anthropic SDK dependency

```bash
cd <TARGET_TEMPLATE>
npm install @anthropic-ai/sdk
```

## 7. Add `ANTHROPIC_API_KEY` to env

```bash
echo 'ANTHROPIC_API_KEY=sk-ant-...' >> <TARGET_TEMPLATE>/.env.local
echo 'ANTHROPIC_API_KEY=sk-ant-placeholder' >> <TARGET_TEMPLATE>/.env.example
```

## 8. Typecheck

```bash
cd <TARGET_TEMPLATE>
npm run typecheck
```

If `content.ts` doesn't have a section the kit expects (e.g., no `diningTiers`),
the `(content as any).foo?.bar` optional chains handle it — no edits needed.
If you get a type error on `import { content } from '../content'` in
`concierge-kb.ts`, confirm your content file is named `content.ts` (not
`content.example.ts`). If it's the example file, update the two imports.

## 9. Smoke-test 8 prompts

Start the dev server (`npm run dev`) and run through these in the chat:

1. "What should I order?" — should recommend specific items with {{menu:...}} cards (or decline gracefully if no menu).
2. "Are you open tonight?" — should emit {{hours}}.
3. "Where are you?" — should emit {{map}}.
4. "Is the <dish> gluten-free?" — should deflect to {{call}} and show the dish card.
5. "What's the weather?" — should redirect without a CTA.
6. "I want a table for 8 on Saturday." — should route to {{call}} (large party).
7. "Do you do private events?" — emits {{private_space:...}} or {{call}} depending on content.
8. "What's the cheapest thing?" — should pick a real menu item by price, not invent.

## 10. Verify Reserve tap (PRD 01 acceptance)

Desktop + mobile Safari, run through the PRD 01 acceptance list:

1. Say "I'd like to book for 4 on Saturday at 7 for my wife's birthday, she's gluten-free."
2. Confirm the Reserve button shows a preview line: "4 guests · <weekday> <month> <day> · 7:00 PM · birthday dinner; one guest is gluten-free".
3. Confirm the button's `href` starts with `https://www.opentable.com/restref/client/?restref=<ID>&datetime=...&covers=4`.
4. Tap Reserve. Confirm the toast appears ("Special request copied, paste it in the notes field on OpenTable.") and the clipboard contains the combined birthday + gluten-free text.
5. Confirm OpenTable opens with party size, date, time pre-filled.
6. Follow up with "Actually make it 6" and confirm the same button updates in-place (new href + preview, not a second button).

If `reservationRestref` is empty, steps 3–5 fall back to the plain slug URL and that's OK — document the gap in the client handoff.

---

## Troubleshooting

- **"content is undefined"** → your template's content file is named
  `content.example.ts` not `content.ts`. Update imports in `concierge-kb.ts`
  and `AskConcierge.tsx`.
- **No cards render** → Haiku is emitting markers but slugs aren't in
  MENU_INDEX. Check that `slugify(name)` matches the slugs the model sees in
  the prompt (the `[slug]` prefix before each item).
- **Every response has an em-dash** → client-side `stripDashes()` should catch
  these; if you still see them, the CSS is rendering `, ` as a dash
  (unlikely). Check Tailwind doesn't have a font-feature-settings override.
- **Tailwind classes from the theme aren't applied** → the class strings in
  `concierge-theme.ts` reference tokens that don't exist in your
  `tailwind.config.js`. Add them or substitute literal values.
