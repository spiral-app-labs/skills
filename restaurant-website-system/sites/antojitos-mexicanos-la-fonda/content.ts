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
      'Guests on Google and local directories consistently point to authentic comida Veracruzana, friendly service, careful takeout, and fair value.',
      'Local listings highlight favorites like Sope Veracruzano, Huarache De Asado, Tinga de Pollo, Super Burrito, and Shrimp Tacos.',
      'Highest-rated Google reviews repeatedly call out tacos, empanadas, clean carryout, fresh churros, atole, and mole specials.',
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
      'Guests talk about authentic comida Veracruzana, craveable tacos, friendly service, clean carryout, and specials like atole and mole. Find the essentials before you call or visit.',
    highlightChips: [
      'Veracruz-style Mexican food',
      'Call-first takeout',
      'Crystal Lake favorite',
    ],
    ctas: [
      { label: 'Call (815) 526-3633', href: 'tel:+18155263633', style: 'accent' as const },
      { label: 'Get Directions', href: 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014', style: 'dark' as const },
    ],
    proofPanel: {
      eyebrow: 'Why regulars come back',
      bullets: [
        'Reviewers call it authentic comida Veracruzana, not generic Mexican food.',
        'Tacos, empanadas, sope Veracruzano, garnachas, huaraches, mole, and atole give the menu a specific hook.',
        'Phone, directions, hours, and dish highlights are ready before guests make the trip.'
      ],
      sideEyebrow: 'Hours',
      sideNote: 'Mon-Sat 10 AM - 7 PM. Sunday 10 AM - 4 PM.',
    },
  },

  fanFavorites: {
    heading: 'Favorites Guests Keep Naming',
    subhead:
      'Guests point to tacos, Veracruz-style antojitos, careful carryout, and seasonal specials — start with the favorites before calling.',
    dishes: [
      {
        name: 'Tacos: steak, pork, shrimp, lengua',
        desc: 'Reviews call the tacos the best in Crystal Lake and mention pork tacos with creamy green sauce, shrimp tacos, carne asada, steak tacos, and lengua tacos.',
        price: 'Review-loved',
        tag: 'Tacos',
      },
      {
        name: 'Empanadas & sope Veracruzano',
        desc: 'Empanadas, garnachas, flautas, and sope Veracruzano bring the regional personality guests remember.',
        price: 'Veracruz favorite',
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
    heading: 'A Menu Story With Regional Character',
    subhead:
      'Start with the dishes guests keep naming, then call the restaurant to verify today’s menu, prices, and specials.',
    items: [
      {
        name: 'Veracruz Antojitos',
        inclusions: [
          'Sope Veracruzano',
          'Garnachas, flautas, empanadas',
          'Huachinango a la veracruzana is part of the regional story',
        ],
        price: 'Regional hook',
        note: 'Regional favorite',
        color: 'deal-1' as const,
      },
      {
        name: 'Tacos Regulars Mention',
        inclusions: [
          'Steak, pork, shrimp, carne asada, lengua',
          'Creamy green sauce gets direct praise',
          'Ask about current taco specials',
        ],
        price: 'Guest favorite',
        note: 'Ask today',
        color: 'deal-2' as const,
      },
      {
        name: 'Carryout Done Right',
        inclusions: [
          'Fast pickup and friendly greeting',
          'Careful packaging with hot sauce, napkins, and silverware',
          'Clean storefront and fair value are repeated themes',
        ],
        price: 'Phone-first',
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
        note: 'Ask today',
        color: 'deal-4' as const,
      },
    ],
  },

  moreMenu: {
    heading: 'More Reasons To Call In An Order',
    subhead:
      'The menu story feels like La Fonda: regional, generous, practical, and rooted in what guests already love.',
    dishes: [
      {
        name: 'Huarache De Asado',
        desc: 'A customer favorite that fits the antojitos-forward identity.',
        price: 'Guest favorite',
        tag: 'Huarache',
      },
      {
        name: 'Tinga de Pollo & Milanesa de Pollo',
        desc: 'Both appear in public menu/favorite evidence and help widen the page beyond taco-only copy.',
        price: 'Menu highlight',
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
      'Phone, directions, listed hours, local favorites, and La Fonda’s Veracruz-style dish story are ready before you go.',
    tiles: [
      { title: 'Call-first', body: 'Guests can tap once to call the restaurant for takeout, current specials, and menu questions.' },
      { title: 'Easy directions', body: 'The Coventry Plaza address is clear and linked directly to maps.' },
      { title: 'Takeout-ready', body: 'Reviews repeatedly praise carryout packaging, speed, friendliness, and value.' },
      { title: 'Veracruz-specific', body: 'Guests come for authentic comida Veracruzana and regional antojitos.' },
      { title: 'Ask today', body: 'Call for holiday hours, same-day changes, current prices, and specials.' }
    ],
    accordion: [
      {
        title: 'Listed hours',
        body: 'Listed hours are Monday through Saturday 10 AM to 7 PM and Sunday 10 AM to 4 PM. Guests should still call for holiday or special-event changes.'
      },
      {
        title: 'Best way to order',
        body: 'Call La Fonda directly for takeout, current menu details, prices, and today’s specials.'
      },
      {
        title: 'Before dining in',
        body: 'Some public listings and reviews mention limited seating, so call before assuming dine-in availability.'
      },
    ],
  },

  proof: {
    eyebrow: 'LOCAL FAVORITE',
    heading: 'Veracruz flavor with real Crystal Lake word of mouth.',
    body:
      'Guest reviews and local menu listings point to a restaurant with real local demand. Phone, hours, dish examples, directions, and the Veracruz story are all gathered here.',
    quote:
      'What can I say? I finally found authentic comida Veracruzana. Hands down the best Mexican food around.',
    name: 'Local guest review',
    stats: [
      { value: '4.5', label: 'Google rating' },
      { value: '148', label: 'Google reviews' },
      { value: '30', label: 'review-loved dishes & details' }
    ],
  },

  closingCTA: {
    heading: 'Ready for tacos, antojitos, and takeout?',
    subhead:
      'Call, get directions, check listed hours, and browse the regional dish story before you head over.',
    links: [
      { label: 'Call La Fonda', href: 'tel:+18155263633' },
      { label: 'Get Directions', href: 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014' },
      { label: 'Open Google Profile', href: 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly' },
      { label: 'View Local Menu Listing', href: 'https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/' }
    ],
    leftHeading: 'Helpful before you go',
    leftBody: [
      'Call for the current menu, prices, specials, and takeout timing.',
      'Use directions for the Coventry Plaza address before heading over.',
      'Ask the restaurant directly about dine-in seating, allergies, catering, or holiday hours.',
    ],
    note: 'Call the restaurant for current prices, specials, seating, allergies, and holiday hours.'
  },

  contact: {
    title: 'Contact La Fonda',
    subtitle:
      'Direct call and directions matter most: tap to ask about today’s menu, specials, hours, and takeout timing.',
    links: [
      { label: 'Call (815) 526-3633', href: 'tel:+18155263633' },
      { label: 'Get directions to Coventry Plaza', href: 'https://www.google.com/maps/search/?api=1&query=35+Berkshire+Dr+Unit+10+Crystal+Lake+IL+60014' },
      { label: 'Open Google profile', href: 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly' },
      { label: 'View local menu listing', href: 'https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/' },
    ],
    contactFacts: [
      { label: 'Address', value: '35 Berkshire Dr Unit 10, Crystal Lake, IL 60014' },
      { label: 'Phone', value: '(815) 526-3633' },
      { label: 'Publicly listed hours', value: 'Mon-Sat 10 AM - 7 PM, Sun 10 AM - 4 PM; call for holiday changes.' },
      { label: 'Best first step', value: 'Call the restaurant for current specials, seating, and menu questions.' }
    ],
  },

  about: {
    title: 'About La Fonda',
    subtitle:
      'A modest Crystal Lake storefront with outsized review love for Veracruz-style Mexican food, clean carryout, and friendly service.',
    intro:
      'La Fonda’s story is specific: reviewers call out authentic comida Veracruzana, atole, mole, garnachas, empanadas, sope Veracruzano, huaraches, tacos, and careful takeout service.',
    stats: [
      { value: '4.5', label: 'Google rating' },
      { value: '148', label: 'Google reviews' },
      { value: '4.6', label: 'local listing rating' },
      { value: '41', label: 'local listing photos' }
    ],
    paragraphs: [
      'The restaurant’s strengths are regional specificity, value, friendly staff, and easy takeout — all anchored in a Veracruz-inspired menu story.',
      'Because online ordering, full pricing, and current seating details can change, the best guest path is simple: call the restaurant or get directions before heading over.',
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
          { label: 'Local menu listing', href: 'https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/' },
          { label: 'Local photo listing', href: 'https://restaurantguru.com/Antojitos-Mexicanos-La-Fonda-Crystal-Lake' },
        ],
      },
    ],
    copy: 'Call the restaurant to verify current menu, seating, holiday hours, and specials.'
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
