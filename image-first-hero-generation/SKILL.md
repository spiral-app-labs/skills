---
name: image-first-hero-generation
description: Generate the first ChatGPT restaurant hero image before a website preview is built. Use when Mission Control selects hero_art_bible or restaurant-hero-personalization needs the inspo and clean plate images for a personalized restaurant website. Produces a 16:9 inspo image and a clean production plate under <slug>/public/images/raw/.
---

# Image-First Hero Generation

This skill creates the first visual anchor for a restaurant website: one ChatGPT-generated hero design reference and one clean production plate. The design reference sets the art bible for the whole website, so it must come from the restaurant's real evidence, not from generic restaurant vibes.

## Inputs

Read these before prompting:

- Mission Control lead record and current website task
- `<slug>/audit.md` with the Hero Lock
- `<slug>/checklist.json`
- current-site screenshots/scrape when available
- Google reviews packet when available
- menu or menu scrape when available
- route/template rationale when available

If the audit's Hero Lock is missing, stop and write a blocker. Do not invent the hero subject.

## Outputs

Save:

- `<slug>/public/images/raw/inspo.{jpg,png}` - selected generated design reference
- `<slug>/public/images/raw/plate.{jpg,png}` - clean production background

Also record the final reference prompt, clean-plate prompt, and selection reason in checklist notes or MC evidence when possible so the choice is auditable.

## Prompt Inputs To Fill

Before using ChatGPT image generation, fill these from evidence:

- Restaurant name
- Cuisine and service style
- City or neighborhood
- Chosen hero subject from the audit's Hero Lock
- Brand surprise or tension, such as "fine dining hidden in a strip mall"
- Layout archetype, such as "dark editorial magazine cover"
- Real cues to preserve, such as menu item, room mood, bar style, plating style, exterior, neighborhood, or owner voice
- Desired mood in 3 to 5 plain adjectives
- Camera angle and crop
- Lighting and color palette
- Where the website text should have empty space
- Minimal copy strings to render in the design reference: wordmark, eyebrow, sub, and one CTA stamp

## First Hero Design Reference Template

Use this structure for the first generated `inspo` image. This first output may include minimal legible type because it is the design reference. The second clean-plate prompt removes all readable UI/text.

```
Create ONE horizontal 16:9 website hero design reference for "[restaurant name]", a [cuisine + signature offers] restaurant in [city/neighborhood] — [ownership/history/real proof]. DO NOT use a conventional website hero layout.

Business: [visual register] restaurant. [One-sentence brand surprise or tension].
Layout archetype: [specific non-generic layout archetype]. Reference aesthetic: [specific editorial/restaurant/homepage reference category], structurally different from a normal SaaS hero.

Composition first:
- Full-bleed cinematic [hero subject] dominates the entire canvas — [specific subject options from the audit/menu/photo inventory]. Center-balanced because CSS will center-crop on narrower viewports.
- Typography integrated like [magazine/gallery/label metaphor]: oversized [type style] "[WORDMARK]" wordmark anchoring the [composition zone], small eyebrow above in tracked-out caps, supporting sub below in restrained type.
- Use asymmetry, cropping, negative space, and cover-design hierarchy. The [hero subject] is the still-life centerpiece; the type is the silent gallery label.

Layout DON'Ts (these are the AI-slop tells — avoid all of them):
- No left-column marketing block with right-column image split.
- No image-right / copy-left split, or vice versa.
- No eyebrow/subheadline/two-button stack centered below a headline.
- CTA should appear as ONE discreet editorial stamp or small pill in a corner — not two buttons.
- No generic gradient overlays on stock food photography.
- No AI-slop sans-serif type with placeholder dish photo.
- No bright daylight or food-blog saturation. No neon, no electric blue.

Photography style: [low-key/editorial/bright/neighborhood/etc.], [specific lighting], [shadow/texture/mood], [grading].
Palette (3 colors max): [dominant dark/light/base], [type color], optional [accent].
Typography: [wordmark font direction] for the wordmark — pick the one that reads most [brand register]. Refined sans for small UI.

Copy to include legibly but minimally — render these specific strings:
- Wordmark: "[WORDMARK]" (large, central, register-coded display face)
- Eyebrow: "[EYEBROW]"
- Sub: "[SUB]"
- CTA stamp: "[CTA]"

Render as if shot for a printed editorial. No website chrome (no URL bar, no browser frame). Just the design composition end-to-end across the 16:9 frame, with [hero subject] visually centered so CSS center-crop on mobile preserves the focal point.
```

## Bistro Wasabi First Hero Prompt Example

This is the source example for the template above. Keep it for context and use it as the quality bar.

```
Create ONE horizontal 16:9 website hero design reference for "Bistro Wasabi", a Japanese sushi + martinis + steaks restaurant in Lake in the Hills, Illinois — locally owned since 2000. DO NOT use a conventional website hero layout.

Business: dark-monolithic / cinematic-editorial restaurant. A fine-dining sushi room with steaks and martinis hidden inside a suburban strip mall on Algonquin Road — that surprise IS the brand.
Layout archetype: dark editorial Wallpaper-style still-life cover, like a printed Michelin-press magazine. Reference aesthetic: Awwwards-level editorial restaurant homepage, structurally different from a normal SaaS hero.

Composition first:
- Full-bleed cinematic sushi still-life dominates the entire canvas — a single piece of nigiri, or 2-3 pieces of nigiri on dark ceramic, or one cinematic close-up of a hand-cut sashimi slice. Center-balanced because CSS will center-crop on narrower viewports.
- Typography integrated like a luxury magazine cover: oversized italic serif "BISTRO WASABI" wordmark anchoring the central third, small eyebrow above in tracked-out caps, supporting sub below in restrained type.
- Use asymmetry, cropping, negative space, and cover-design hierarchy. The sushi is the still-life centerpiece; the type is the silent gallery label.

Layout DON'Ts (these are the AI-slop tells — avoid all of them):
- No left-column marketing block with right-column image split.
- No image-right / copy-left split, or vice versa.
- No eyebrow/subheadline/two-button stack centered below a headline.
- CTA should appear as ONE discreet editorial stamp or small pill in a corner — not two buttons.
- No generic gradient overlays on stock food photography.
- No AI-slop sans-serif type with placeholder dish photo.
- No bright daylight or food-blog saturation. No neon, no electric blue.

Photography style: editorial low-key, warm tungsten + single window-source light, deep cinematic shadows, painterly grading, Michelin-press still-life feel. Subtle steam or warmth optional.
Palette (3 colors max): deep near-black with a fractional warm bias (~#0A0B0A), warm cream / off-white for type (~#EFE7D2), optional faint warm ochre or brass accent.
Typography: Cormorant Garamond italic OR Forum OR Bodoni-narrow for the wordmark — pick the one that reads most ceremonial and dark-monolithic. Refined sans for small UI.

Copy to include legibly but minimally — render these specific strings:
- Wordmark: "BISTRO WASABI" (large, central, register-coded display face)
- Eyebrow: "LAKE IN THE HILLS · SINCE 2000"
- Sub: "Fresh sushi, hand-shaken martinis, and steaks — a downtown-Chicago room hidden on Algonquin Road."
- CTA stamp: "RESERVE"

Render as if shot for a printed editorial. No website chrome (no URL bar, no browser frame). Just the design composition end-to-end across the 16:9 frame, with sushi visually centered so CSS center-crop on mobile preserves the focal point.
```

## Clean Plate Prompt Template

Use this after selecting the best design reference. The clean plate should preserve the same composition while removing all text and UI so Codex/Claude can rebuild the real website layer in code.

```
Create a clean 16:9 website hero background / art plate from this design reference.

Remove readable website UI/text:
- logo / wordmark ("[WORDMARK]")
- navigation
- headline/title text
- CTA labels/buttons ("[CTA]" stamp, etc.)
- eyebrow text ("[EYEBROW]")
- supporting sub copy
- captions
- readable marketing copy

Keep the art-directed visual world exactly as it is:
- composition
- lighting ([lighting])
- atmosphere
- textures/materials ([textures/materials])
- photography/illustration (the [hero subject])
- decorative motifs
- depth
- palette ([palette])

Do not redesign into a different style.
Do not crop tightly.
Do not use transparency.
Do not use checkerboard.
Leave enough clean visual space for Claude/Codex to overlay real coded nav/wordmark/eyebrow/sub/CTA later.

Output: the same composition without any text or UI overlays. Will be used as a hero video-poster / CSS background. Same 16:9 frame, same center-balanced subject placement as the reference.

Critical: keep the lighting and color grading IDENTICAL to the attached reference. If the plate's lighting drifts from the reference, re-run emphasizing fidelity to the original.
```

## Bistro Wasabi Clean Plate Prompt Example

This is the source example for the clean-plate template above. Keep it for context and use it as the fidelity bar.

```
Create a clean 16:9 website hero background / art plate from this design reference.

Remove readable website UI/text:
- logo / wordmark ("BISTRO WASABI")
- navigation
- headline/title text
- CTA labels/buttons ("RESERVE" stamp, etc.)
- eyebrow text ("LAKE IN THE HILLS · SINCE 2000")
- supporting sub copy
- captions
- readable marketing copy

Keep the art-directed visual world exactly as it is:
- composition
- lighting (warm tungsten, single window-source, deep cinematic shadows)
- atmosphere
- textures/materials (dark ceramic, wood, brass)
- photography/illustration (the sushi still-life)
- decorative motifs
- depth
- palette (deep near-black, warm cream, faint ochre/brass)

Do not redesign into a different style.
Do not crop tightly.
Do not use transparency.
Do not use checkerboard.
Leave enough clean visual space for Claude/Codex to overlay real coded nav/wordmark/eyebrow/sub/CTA later.

Output: the same composition without any text or UI overlays. Will be used as a hero video-poster / CSS background. Same 16:9 frame, same center-balanced subject placement as the reference.

Critical: keep the lighting and color grading IDENTICAL to the attached reference. If the plate's lighting drifts from the reference, re-run emphasizing fidelity to the original.
```

If the first generated reference is already production-clean, still run the clean plate check. The `plate` file is the asset the website should use before a video exists.

## Hero And Animation Idea Bank

Use these as starting points, then adapt to the restaurant's real menu, room, reviews, and route. Do not use an idea just because it sounds cinematic.

Hero image ideas:

- Editorial still-life cover: one iconic dish or drink on a tactile surface with magazine-like type.
- Hidden-room reveal: dark exterior or doorway hinting at a more refined interior world.
- Counter-seat moment: chef counter, bar rail, pass window, or plate landing area without showing full humans.
- Signature object portrait: martini, espresso, hand-cut pasta, steak knife, sushi, taco press, pastry, wine bottle, or family recipe artifact.
- Material world: tile, linen, brass, ceramic, wood, neon sign glow, vintage menu, matchbook, or receipt texture as brand memory.
- Neighborhood cinema: storefront at dusk, parking-lot contrast, patio light, train-station/street context, or local landmark mood.
- Abundance table: restrained overhead or low-angle composition of 3 to 5 real menu anchors.
- Fire/steam/craft: grill flare, wok heat, espresso steam, pizza oven, butter basting, cocktail condensation.
- Heritage tableau: old photo, recipe card, family object, or house-special ingredient staged like an editorial artifact.
- Minimal plate drama: one perfect item with deep shadow, negative space, and type treated like a gallery caption.

Animation ideas for the later Higgsfield/video step:

- Tiny steam or heat shimmer from the hero dish.
- Condensation slowly forming or sliding on a glass.
- Martini surface glint and olive/pick movement without camera drift.
- Beer bubbles rising, foam breathing, amber highlights moving.
- Candle/flame flicker reflected in glass or brass.
- Sushi glaze/specular highlight moving subtly across fish.
- Steak/grill smoke drifting in one locked direction.
- Pasta twirl or sauce ribbon only if the starting image supports it.
- Neon/window reflection pulsing gently on a dark surface.
- Slow shadow movement from a window-source light, with all objects locked.
- Espresso crema ripple or steam curl.
- Locked-camera micro push-in only when the still image can tolerate it.

## QA Before Accepting

Accept the pair only if:

- Both images are 16:9 and work as mobile center crops.
- The design reference uses only the requested wordmark, eyebrow, sub, and one CTA stamp.
- The clean plate has enough empty space for real website text added in code.
- The clean plate has no readable text, logo, UI, signage, humans, faces, arms, or hands.
- The food, room, mood, and subject match the actual restaurant evidence.
- It looks like real premium restaurant photography, not glossy AI art.
- It can plausibly guide the art bible for the whole website.

Reject and regenerate if the reference invents fake details, adds unrequested text/signage, looks generic, or would force the site into a style that does not match the restaurant. Reject the clean plate if it changes the composition, lighting, palette, or subject from the selected reference.

## Limits

- Maximum 5 generation attempts before writing a blocker.
- Do not switch hero subjects unless the audit evidence supports the change.
- Only the design reference may render the requested wordmark, eyebrow, sub, and one CTA stamp. The clean plate must remove all text and UI so real copy, logo, CTAs, and links can be added in code.
- Do not create a video here. Higgsfield/video work happens later at `ready_for_higgsfield_video`.

## Done

This skill is done when:

- `inspo.{jpg,png}` exists locally.
- `plate.{jpg,png}` exists locally.
- Both images pass QA.
- The prompt and selection reason are recorded in local checklist notes or MC evidence.
- Control returns to `restaurant-hero-personalization` for upload and art bible creation.
