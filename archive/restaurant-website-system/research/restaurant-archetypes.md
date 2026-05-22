# Restaurant Archetypes

Routing categories for matching a real restaurant brief to the right template. **Do not route by cuisine alone** — route by the combination of cuisine + price point + atmosphere + visual tone + neighborhood-vs-destination + reservation intensity + nightlife-vs-dining-vs-cafe behavior.

> **Status:** seeded with draft archetypes derived from the spec. Refine as templates are audited.
> **How to use:** when a brief comes in, find the closest archetype here, then use `site-router.md` to map archetype → template.

---

## Archetype schema

Every archetype follows this structure:

```
### [Archetype name]
- Who it's for: (concrete restaurant types + occasions)
- Visual cues: (typography register, color palette, imagery style)
- Section order preference: (homepage flow)
- CTA preference: (placement + tone)
- Imagery preference: (photo treatment + content)
- Motion intensity: (none / subtle / moderate / cinematic)
- Design risks to avoid: (the failure modes for this archetype)
- Best template match: (TBD until templates exist — link to template slug)
- Variant modifiers: (knobs to dial within the archetype)
```

---

## Draft archetypes

### Editorial upscale / modern destination
- **Who it's for:** modern upscale restaurants, chef-driven, destination-worthy. Tasting menus or seasonal a la carte. Reservation-essential.
- **Visual cues:** large editorial display serif or refined sans, generous whitespace, monochrome or restrained palette, museum-quality photography.
- **Section order preference:** Hero (single hero image/video) → Story/Philosophy → Menu preview (limited, magazine-style) → Press/Awards → Reservation → Footer
- **CTA preference:** restrained, single primary "Reservations" CTA. No urgency tone. Sometimes hidden in nav only.
- **Imagery preference:** cinematic, low-light, plated dishes shot like still lifes. People rare or anonymous.
- **Motion intensity:** subtle to moderate (slow reveals, parallax on hero).
- **Design risks to avoid:** feeling cold or sterile; over-styled type that becomes hard to read; missing reservation friction reduction on mobile.
- **Best template match:** TBD
- **Variant modifiers:** light vs dark mode, more vs less photography density.

### Fine dining / tasting menu
- **Who it's for:** Michelin-track, prix fixe, omakase, chef's counter. Single seating model. Booking is a commitment.
- **Visual cues:** ultra-restrained, editorial. Often single typeface used across whole site. Lots of negative space.
- **Section order preference:** Hero (often just text or single image) → Experience description → Reservation (front and center) → Chef/Story → Press → Footer
- **CTA preference:** "Reservations" or "Book" — singular, ceremonial. Sometimes opens calendar inline.
- **Imagery preference:** sparse. One or two perfect images. Or none at all.
- **Motion intensity:** none to subtle. Stillness is the message.
- **Design risks to avoid:** any feeling of busyness; menu prices visible (often intentionally hidden); too many CTAs.
- **Best template match:** TBD
- **Variant modifiers:** photo-led vs typography-led; dark vs light.

### Warm rustic / Italian / family-forward
- **Who it's for:** Italian trattorias, neighborhood pasta houses, family-run restaurants emphasizing tradition and warmth.
- **Visual cues:** earth tones (terracotta, cream, deep red, olive), classic serif or hand-lettered display, textured backgrounds, family/people-forward photography.
- **Section order preference:** Hero (warm photo) → Welcome/Story → Menu preview (with food photos) → Gallery (people + food) → Hours/Location → Reservation → Footer
- **CTA preference:** dual CTAs okay — "Reserve" + "View Menu" or "Order Online".
- **Imagery preference:** warm, slightly grainy, people enjoying meals, hands tearing bread, nonna in the kitchen.
- **Motion intensity:** subtle. Gentle reveals.
- **Design risks to avoid:** clichéd Italian flag colors; stock-photo nonna; over-rusticated textures that feel fake.
- **Best template match:** TBD
- **Variant modifiers:** more refined vs more casual; more photo density vs more whitespace.

### Moody cocktail / speakeasy / bar-led
- **Who it's for:** cocktail bars, speakeasies, bar-led concepts where atmosphere is the product. Often nighttime-only.
- **Visual cues:** dark mode default, deep blacks/burgundies/forest greens, gold or copper accents, art deco or noir typography, low-light photography.
- **Section order preference:** Hero (dark video loop or single moody image) → Atmosphere/Story → Cocktail menu preview → Gallery → Hours (often "by reservation only") → Footer
- **CTA preference:** "Reserve" — sometimes intentionally low-profile to signal exclusivity. May require login or have limited inventory.
- **Imagery preference:** low-key lighting, glassware, hands pouring, neon signs, no overhead shots.
- **Motion intensity:** moderate to cinematic. Subtle parallax, video loops, cursor effects acceptable.
- **Design risks to avoid:** edgelord aesthetic; unreadable contrast; pretentious copy.
- **Best template match:** TBD
- **Variant modifiers:** speakeasy-secret vs upscale-bar; cocktail-led vs cocktail-and-food.

### Modern minimal / Scandinavian / new-Nordic
- **Who it's for:** new-Nordic, minimalist tasting concepts, chef-driven small plates with restrained aesthetic.
- **Visual cues:** white/cream/pale palette, geometric sans-serif, abundant whitespace, single hero image at most, often monochrome photography.
- **Section order preference:** Hero (often text-only) → Concept → Menu preview (text-led) → Reservation → Footer
- **CTA preference:** singular, understated.
- **Imagery preference:** stark, often single subjects, natural light only.
- **Motion intensity:** none to subtle. Stillness celebrated.
- **Design risks to avoid:** feeling generic-Notion-doc; reading as cold; missing warmth signals entirely.
- **Best template match:** TBD
- **Variant modifiers:** with photography vs typography-only; warm-white vs cool-white.

### Lively casual / neighborhood / family
- **Who it's for:** neighborhood restaurants serving everyday meals, walk-ins welcome, families and groups, midweek-friendly.
- **Visual cues:** brighter palette, friendly sans-serif, photography of people and shared dishes, less formal typography hierarchy.
- **Section order preference:** Hero (with people) → Quick info (hours, walk-in policy, location) → Menu preview → Specials/Events → Reviews → Reservation/Order → Footer
- **CTA preference:** dual or triple CTAs — "Reserve", "Order Online", "View Menu" — placed prominently.
- **Imagery preference:** warm, candid, people-centric.
- **Motion intensity:** subtle. Avoid anything pretentious.
- **Design risks to avoid:** trying to look fancier than the restaurant is; overdesigned hero; reservation-only signaling when walk-ins are welcome.
- **Best template match:** TBD
- **Variant modifiers:** kid-friendly emphasis; bar-and-grill vs cafe-and-counter.

### Brunch / cafe / bakery / daytime
- **Who it's for:** breakfast/brunch destinations, third-wave coffee, bakeries, daytime-only concepts.
- **Visual cues:** bright airy palette (cream, soft pastel, warm white), playful or hand-lettered display type, food-led photography in natural daylight.
- **Section order preference:** Hero (bright, food-led) → What we do → Menu (bakery case style) → Hours/Location (front and center) → Gallery → Footer
- **CTA preference:** "Order Online", "Visit Us", "View Menu" — reservation often N/A. Hours and location are the real conversion.
- **Imagery preference:** natural light, overhead pastry shots, latte art, morning vibes.
- **Motion intensity:** subtle, friendly.
- **Design risks to avoid:** cliché latte art carousel; feeling try-hard cute.
- **Best template match:** TBD
- **Variant modifiers:** bakery-led vs coffee-led vs full-brunch-menu.

### Coastal / airy / seafood
- **Who it's for:** seafood restaurants, beach destinations, oyster bars with bright open-air aesthetics.
- **Visual cues:** white-blue-sand palette, light serif or refined sans, photography of water, nets, raw bar.
- **Section order preference:** Hero (water/landscape or oyster shot) → Story (location-driven) → Menu (raw bar emphasis) → Gallery → Reservation → Footer
- **CTA preference:** "Reserve" + "View Raw Bar".
- **Imagery preference:** natural daylight, blues, whites, subjects often outdoors or near windows.
- **Motion intensity:** subtle, breezy.
- **Design risks to avoid:** nautical kitsch (rope fonts, anchor icons); generic stock seafood.
- **Best template match:** TBD
- **Variant modifiers:** upscale white-tablecloth vs casual oyster-bar.

### Vibrant social / Mexican / regional / Latin
- **Who it's for:** Mexican, Latin American, regional concepts where color and energy are part of the brand.
- **Visual cues:** saturated color palette (cobalt, marigold, terracotta), bold display type, photography full of color and motion.
- **Section order preference:** Hero (vibrant photo or video) → Story → Menu preview → Specials/Margaritas → Gallery → Reservation/Order → Footer
- **CTA preference:** dual — "Reserve" + "Order Online".
- **Imagery preference:** color-saturated, social, people, shared platters.
- **Motion intensity:** moderate. Energy.
- **Design risks to avoid:** stereotype-tropes; using color to compensate for weak photography.
- **Best template match:** TBD
- **Variant modifiers:** taqueria-casual vs modern-Mexican-upscale.

### Steakhouse / classic / clubby
- **Who it's for:** traditional steakhouses, classic American chophouses, clubby members-feel concepts.
- **Visual cues:** dark wood tones, deep red/green/black palette, classic serif display, leather/brass textures.
- **Section order preference:** Hero (dark, dramatic) → Story (heritage emphasis) → Menu preview (steaks featured) → Private dining → Press → Reservation → Footer
- **CTA preference:** "Reservations" + "Private Events".
- **Imagery preference:** dramatic lighting, dark backgrounds, hero cuts of meat, classic table settings.
- **Motion intensity:** subtle. Gravitas over flash.
- **Design risks to avoid:** dated 90s steakhouse aesthetic; over-leaning on "since 19XX" framing.
- **Best template match:** TBD
- **Variant modifiers:** old-school traditional vs modern-steakhouse.

### Hotel restaurant / destination dining
- **Who it's for:** in-hotel restaurants that need to be findable by both hotel guests and locals; often must coexist with hotel brand.
- **Visual cues:** depends heavily on parent brand, but generally elevated, polished, multi-service-aware (breakfast/lunch/dinner/bar).
- **Section order preference:** Hero → Multi-service strip (breakfast / lunch / dinner / bar / private) → Menu preview per service → Reservation → Footer
- **CTA preference:** clear service-disambiguation CTAs.
- **Imagery preference:** branded with hotel; consistent photo style across services.
- **Motion intensity:** depends on hotel brand.
- **Design risks to avoid:** feeling like a hotel sub-page; weak service disambiguation.
- **Best template match:** TBD
- **Variant modifiers:** boutique-hotel vs major-brand-hotel.

---

## Archetype combination logic

Real briefs often hit multiple archetypes (e.g., "Italian + neighborhood + lively casual"). The router resolves by:
1. Identify the **primary archetype** (the one carrying the strongest brand intent).
2. Identify **modifier archetypes** (which influence variant choices).
3. Match primary archetype → template; apply modifiers via personalization manifest.

See `site-router.md` for the actual routing logic.
