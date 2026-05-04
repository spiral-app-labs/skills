export const content = {
  brand: {
    name: 'La Fonda',
    fullName: 'Antojitos Mexicanos La Fonda',
    tagline: 'Veracruz-style antojitos in Crystal Lake',
    description:
      'Authentic Veracruz-style Mexican antojitos in Crystal Lake with tacos, empanadas, sope Veracruzano, huaraches, burritos, atole and mole specials, friendly takeout service, and direct call-first ordering.',
    address: {
      line1: '35 Berkshire Dr Unit 10',
      line2: 'Crystal Lake, IL 60014',
    },
    phone: '(815) 526-3633',
    phoneHref: 'tel:+18155263633',
    email: '',
    menuHref: 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly',
    directionsHref:
      'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014',
    hours: [
      { days: 'Monday', time: '10 AM - 7 PM' },
      { days: 'Tuesday', time: '10 AM - 7 PM' },
      { days: 'Wednesday', time: '10 AM - 7 PM' },
      { days: 'Thursday', time: '10 AM - 7 PM' },
      { days: 'Friday', time: '10 AM - 7 PM' },
      { days: 'Saturday', time: '10 AM - 7 PM' },
      { days: 'Sunday', time: '10 AM - 4 PM' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '10:00', close: '16:00' },
        { day: 1 as const, open: '10:00', close: '19:00' },
        { day: 2 as const, open: '10:00', close: '19:00' },
        { day: 3 as const, open: '10:00', close: '19:00' },
        { day: 4 as const, open: '10:00', close: '19:00' },
        { day: 5 as const, open: '10:00', close: '19:00' },
        { day: 6 as const, open: '10:00', close: '19:00' },
      ],
      closures: [],
    },
    mapQuery: '35 Berkshire Dr Unit 10, Crystal Lake, IL 60014',
    serviceArea:
      'Crystal Lake and the surrounding McHenry County neighborhoods looking for Veracruz-style Mexican takeout, tacos, empanadas, huaraches, burritos, and seasonal atole or mole specials.',
    socialProof: [
      'Google Maps capture from 2026-05-04 showed 4.5 stars from 148 reviews and an Add website gap.',
      'Restaurantji lists 4.6 from 95 ratings with favorites like Sope Veracruzano, Huarache De Asado, Tinga de Pollo, Super Burrito, and Shrimp Tacos.',
      'Highest-rated Google reviews repeatedly call out authentic comida Veracruzana, friendly staff, clean takeout, and fair prices.',
    ],
  },

  nav: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Menu Highlights', href: '/#menu' },
      { label: 'Hours & Location', href: '/#visit' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Call Now', href: 'tel:+18155263633' },
  },

  hero: {
    eyebrow: 'Crystal Lake Mexican takeout',
    headline: 'Veracruz flavor, tacos, and antojitos worth the trip.',
    subhead:
      'La Fonda already has the proof: guests talk about authentic comida Veracruzana, the best tacos in the area, friendly service, clean carryout, and specials like atole and mole. This preview finally puts that story in one owned place.',
    highlightChips: [
      '4.5 stars on Google',
      '148 Google reviews',
      'Call-first takeout clarity',
    ],
    ctas: [
      { label: 'Call (815) 526-3633', href: 'tel:+18155263633', style: 'accent' as const },
      { label: 'Get Directions', href: 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014', style: 'dark' as const },
    ],
    proofPanel: {
      eyebrow: 'Why La Fonda sells',
      bullets: [
        'Reviewers call it authentic comida Veracruzana, not generic Mexican food.',
        'Tacos, empanadas, sope Veracruzano, garnachas, huaraches, mole, and atole give the menu a specific hook.',
        'The biggest before/after is simple: the 2026-05-04 Google capture showed Add website, so the restaurant needs a first-party conversion home.',
      ],
      sideEyebrow: 'Hours',
      sideNote: 'Mon-Sat 10 AM - 7 PM. Sunday 10 AM - 4 PM.',
    },
  },

  fanFavorites: {
    heading: 'What Regulars Keep Naming',
    subhead:
      'Public reviews and directory listings captured on 2026-05-04 point to tacos, Veracruz-style antojitos, careful carryout, and seasonal specials — the page now makes those reasons easy to scan before calling.',
    dishes: [
      {
        name: 'Tacos: steak, pork, shrimp, lengua',
        desc: 'Reviews call the tacos the best in Crystal Lake and mention pork tacos with creamy green sauce, shrimp tacos, carne asada, steak tacos, and lengua tacos.',
        price: 'Review-loved',
        tag: 'Tacos',
      },
      {
        name: 'Empanadas & sope Veracruzano',
        desc: 'The review packet and Restaurantji favorites both point to empanadas, garnachas, flautas, and sope Veracruzano as the regional proof worth leading with.',
        price: 'Veracruz proof',
        tag: 'Antojitos',
      },
      {
        name: 'Burritos, huaraches, mole & atole',
        desc: 'Steak burrito dinners, super burritos, Huarache De Asado, Elote atole, and mole specials show the range beyond a basic taco shop.',
        price: 'Takeout-ready',
        tag: 'Specials',
      },
    ],
  },

  pizzaStyles: {
    heading: 'Build The First-Party Menu Story',
    subhead:
      'Start with dishes and visit details from public review/listing evidence, then call the restaurant to verify today’s menu, prices, and specials.',
    items: [
      {
        name: 'Veracruz Antojitos',
        inclusions: [
          'Sope Veracruzano',
          'Garnachas, flautas, empanadas',
          'Huachinango a la veracruzana appears in Google review topics',
        ],
        price: 'Regional hook',
        note: 'Lead with this',
        color: 'deal-1' as const,
      },
      {
        name: 'Tacos Regulars Mention',
        inclusions: [
          'Steak, pork, shrimp, carne asada, lengua',
          'Creamy green sauce gets direct praise',
          'Tuesday 3 tacos for $6 appears in a Google review',
        ],
        price: 'Repeat driver',
        note: 'Call to verify',
        color: 'deal-2' as const,
      },
      {
        name: 'Carryout Done Right',
        inclusions: [
          'Fast pickup and friendly greeting',
          'Careful packaging with hot sauce, napkins, and silverware',
          'Clean storefront and fair value are repeated themes',
        ],
        price: 'Conversion path',
        note: 'Phone first',
        color: 'deal-3' as const,
      },
      {
        name: 'Seasonal Specials',
        inclusions: [
          'Elote atole called a favorite',
          'Mole recommended when available',
          'Fresh churros with fillings surface in reviews',
        ],
        price: 'Ask today',
        note: 'Verify today',
        color: 'deal-4' as const,
      },
    ],
  },

  moreMenu: {
    heading: 'More Dishes To Make The Page Feel Specific',
    subhead:
      'The build should sound like La Fonda, not a generic Mexican template. These highlights are all sourced from the audit and review packet.',
    dishes: [
      {
        name: 'Huarache De Asado',
        desc: 'Restaurantji names this as a customer favorite and it fits the antojitos-forward identity.',
        price: 'Restaurantji favorite',
        tag: 'Huarache',
      },
      {
        name: 'Tinga de Pollo & Milanesa de Pollo',
        desc: 'Both appear in public menu/favorite evidence and help widen the page beyond taco-only copy.',
        price: 'Public-source proof',
        tag: 'Pollo',
      },
      {
        name: 'Churros and hot chocolate / atole',
        desc: 'Reviews praise fresh churros and homemade hot chocolate flavors; atole gives cold-weather specials a memorable hook.',
        price: 'Sweet finish',
        tag: 'Dessert',
      },
    ],
  },

  visit: {
    heading: 'Everything You Need Before You Go',
    subhead:
      'Phone, directions, public-source hours, review proof, and La Fonda’s Veracruz-style dish story are gathered in one simple place.',
    tiles: [
      { title: 'Website not verified', body: 'The 2026-05-04 Google Maps capture showed Add website, so this page gives guests a clearer first-party path.' },
      { title: '4.5 / 148', body: 'The Google review count is strong enough to sit near the top of the page.' },
      { title: 'Takeout-first', body: 'Reviews repeatedly praise carryout packaging, speed, friendliness, and value.' },
      { title: 'Veracruz-specific', body: 'The best copy angle is authentic comida Veracruzana and regional antojitos.' },
      { title: 'Call + maps', body: 'Until a verified ordering link exists, the honest conversion path is phone and directions.' },
    ],
    accordion: [
      {
        title: 'Hours captured from public sources',
        body: 'Restaurantji and Restaurant Guru corroborate Monday through Saturday 10 AM to 7 PM and Sunday 10 AM to 4 PM. Guests should still call for holiday or special-event changes.',
      },
      {
        title: 'Ordering path kept honest',
        body: 'No first-party online ordering provider was verified in the audit, so this preview uses direct call and directions rather than inventing an order flow.',
      },
      {
        title: 'Seating language stays careful',
        body: 'Reviews mention takeout-only or limited seating while also saying the building was being updated to accommodate eating in. The build should avoid overpromising dine-in until verified.',
      },
    ],
  },

  proof: {
    eyebrow: 'GOOGLE PROOF',
    heading: 'The captured Google reputation is stronger than the web presence.',
    body:
      'The sell story is unusually direct: the 2026-05-04 capture shows Google has the reviews, Restaurantji and Restaurant Guru have public menu proof, but guests still do not get a clean owned page with phone, publicly listed hours, dish examples, directions, and the Veracruz story.',
    quote:
      'What can I say? I finally found authentic comida Veracruzana. Hands down the best Mexican food around.',
    name: 'Highest-rated Google review packet',
    stats: [
      { value: '4.5', label: 'Google rating captured in browser' },
      { value: '148', label: 'Google reviews captured in browser' },
      { value: '30', label: 'Highest-filter written reviews captured' },
    ],
  },

  closingCTA: {
    heading: 'One page can organize the scattered search path.',
    subhead:
      'For the first preview, the priority is to make the phone, directions, hours, review proof, and regional dish story impossible to miss.',
    links: [
      { label: 'Call La Fonda', href: 'tel:+18155263633' },
      { label: 'Get Directions', href: 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014' },
      { label: 'Open Google Profile', href: 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly' },
      { label: 'View Restaurantji Profile', href: 'https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/' }
    ],
    leftHeading: 'Truth-safe preview rules',
    leftBody: [
      'No unverified online ordering path: use call and maps until a provider is verified.',
      'No unverified full-menu pricing: highlight sourced dishes and ask guests to call for current specials.',
      'No overclaiming dine-in: reviews conflict, so seating should stay carefully worded.',
    ],
    note: 'Every headline and CTA is based on Google, Restaurantji, and Restaurant Guru evidence reviewed on 2026-05-04.',
  },

  contact: {
    title: 'Contact La Fonda',
    subtitle:
      'Direct call and directions matter most for a restaurant whose current public footprint is spread across Google and directory pages.',
    links: [
      { label: 'Call (815) 526-3633', href: 'tel:+18155263633' },
      { label: 'Get directions to Coventry Plaza', href: 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014' },
      { label: 'Open Google profile', href: 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly' },
      { label: 'View Restaurantji profile', href: 'https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/' },
    ],
    contactFacts: [
      { label: 'Address', value: '35 Berkshire Dr Unit 10, Crystal Lake, IL 60014' },
      { label: 'Phone', value: '(815) 526-3633' },
      { label: 'Publicly listed hours', value: 'Mon-Sat 10 AM - 7 PM, Sun 10 AM - 4 PM; call for holiday changes.' },
      { label: 'Current website gap', value: 'Google Maps capture showed Add website; no official owned site was verified on 2026-05-04.' }
    ],
  },

  about: {
    title: 'About La Fonda',
    subtitle:
      'A modest Crystal Lake storefront with outsized review love for Veracruz-style Mexican food, clean carryout, and friendly service.',
    intro:
      'The strongest public story is not a generic Mexican restaurant story. Reviewers specifically call out authentic comida Veracruzana, atole, mole, garnachas, empanadas, sope Veracruzano, huaraches, tacos, and careful takeout service.',
    stats: [
      { value: '4.5', label: 'Google rating' },
      { value: '148', label: 'Google reviews' },
      { value: '4.6', label: 'Restaurantji rating' },
      { value: '41', label: 'Restaurant Guru photos' },
    ],
    paragraphs: [
      'A first-party website should preserve the restaurant’s real strengths: regional specificity, value, friendly staff, and easy takeout. It should not blur La Fonda into generic taco-shop copy.',
      'The build also needs to be careful with what is not verified. The audit did not find an official online ordering link or a full official menu/pricing source, and reviews conflict on current seating. Calls and directions are the safest primary conversions.',
    ],
  },

  footer: {
    columns: [
      {
        heading: 'Menu highlights',
        links: [
          { label: 'Tacos', href: '/#menu' },
          { label: 'Empanadas', href: '/#menu' },
          { label: 'Sope Veracruzano', href: '/#menu' },
          { label: 'Huarache De Asado', href: '/#menu' },
        ],
      },
      {
        heading: 'Visit',
        links: [
          { label: 'Hours & location', href: '/#visit' },
          { label: 'Directions', href: 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014' },
          { label: 'Call now', href: 'tel:+18155263633' },
        ],
      },
      {
        heading: 'Public profiles',
        links: [
          { label: 'Google profile', href: 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly' },
          { label: 'Restaurantji', href: 'https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/' },
          { label: 'Restaurant Guru', href: 'https://restaurantguru.com/Antojitos-Mexicanos-La-Fonda-Crystal-Lake' },
        ],
      },
    ],
    copy: 'Public sources reviewed May 4, 2026. Verify current menu, seating, and specials with the restaurant before publishing.'
  },

  confetti: [
    { emoji: '🌮', top: '10%', left: '8%', rotate: -12 },
    { emoji: '🌶️', top: '18%', left: '82%', rotate: 18 },
    { emoji: '🫔', top: '42%', left: '5%', rotate: 8 },
    { emoji: '🥑', top: '56%', left: '88%', rotate: -18 },
    { emoji: '🍫', top: '72%', left: '14%', rotate: 12 },
    { emoji: '🍤', top: '76%', left: '78%', rotate: -8 },
  ],
};
