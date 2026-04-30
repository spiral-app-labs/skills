// content.ts — V's House
//
// All copy, photos, menu, reviews, hours, press here. The components are dumb
// renderers — replace this file to repoint the site at a different brand.
//
// Sources cited where the line is owner-attributable or press-cited:
//   FWM      = Fort Worth Magazine, Feb 2022 feature
//   AUDIT    = audit.md Block 2 / Block 4 / Hero Lock
//   OWNER    = pulled directly from current vshouse.net (owner voice)
//   REVIEWS  = scrapes/google.json + Wanderboat/Restaurantji/Yelp pulls
//
export const content = {
  brand: {
    name: "V's House",
    wordmark: "V's House",
    subline: 'Bar · Sushi · Pho',
    eyebrow: 'Third Generation on Bedford-Euless Road',
    sub:
      "A Vu family kitchen since 1982. Pho hand-made over 24 hours. A Saigon-coded bar in a room by Hatsumi Kuzuu.",
    tagline: 'Welcome Home', // OWNER — preserved as secondary copy
    hashtag: '#OneHouseVsHouse',
  },

  contact: {
    phone:        '(682) 777-3690',
    phoneTel:     '+16827773690',
    email:        'contact@vs.house',
    address:      '8743 W Bedford-Euless Rd',
    addressLine2: 'North Richland Hills, TX 76053',
    addressFull:  '8743 W Bedford-Euless Rd, North Richland Hills, TX 76053',
    mapsUrl:      "https://www.google.com/maps/search/V's+House+North+Richland+Hills",
    mapsEmbed:    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.0!2d-97.20!3d32.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
  },

  hours: {
    // Audit Block 1
    summary: 'Sun–Thu 10:30a–9p · Fri–Sat 10:30a–10p',
    timezone: 'America/Chicago', // North Richland Hills, TX
    weekly: [
      { day: 'Sun', open: '10:30', close: '21:00' },
      { day: 'Mon', open: '10:30', close: '21:00' },
      { day: 'Tue', open: '10:30', close: '21:00' },
      { day: 'Wed', open: '10:30', close: '21:00' },
      { day: 'Thu', open: '10:30', close: '21:00' },
      { day: 'Fri', open: '10:30', close: '22:00' },
      { day: 'Sat', open: '10:30', close: '22:00' },
    ] as const,
  },

  links: {
    reserve:    'https://tables.toasttab.com/restaurants/vs-house/findTime',
    order:      'https://order.vshouse.net',
    giftCard:   'https://www.toasttab.com/vs.house/giftcards',
    instagram:  'https://www.instagram.com/vshouse_nrh',
    facebook:   'https://www.facebook.com/vshouse.nrh',
    opentable:  'https://www.opentable.com/r/vs-house-hurst',
    google:     "https://www.google.com/maps/search/V's+House+North+Richland+Hills",
    yelp:       'https://www.yelp.com/biz/v-s-house-north-richland-hills',
    fwm:        'https://fwtx.com/eat-drink/vs-house-north-richland-hills/',
    dallasObs:  'https://www.dallasobserver.com/food-drink/vietnames-food-vs-house-north-richland-hills-40653054/',
  },

  // ───────────── HEROES & SECTION PHOTOS ─────────────
  // All Unsplash placeholders for v1; swap with the half-day shoot per
  // audit Block 5 to promote toward 1776-redesign-class warm-heritage.
  photos: {
    heroRoom:        '/images/vs-house/hero-room.jpg',
    heroPho:         '/images/vs-house/hero-pho.jpg',
    interiorBooth:   '/images/vs-house/interior-booth.jpg',
    interiorPlants:  '/images/vs-house/interior-plants.jpg',
    interiorDetail:  '/images/vs-house/interior-detail.jpg',
    barRoom:         '/images/vs-house/bar-room.jpg',
    patioLights:     '/images/vs-house/patio-lights.jpg',
    processBroth:    '/images/vs-house/process-broth.jpg',
    foodPhoDeluxe:   '/images/vs-house/food-pho-deluxe.jpg',
    foodPhoBowl:     '/images/vs-house/food-pho-bowl.jpg',
    foodBanhKhot:    '/images/vs-house/food-banh-khot.jpg',
    foodShakenBeef:  '/images/vs-house/food-shaken-beef.jpg',
    foodSpringRolls: '/images/vs-house/food-spring-rolls.jpg',
    foodVermicelli:  '/images/vs-house/food-vermicelli.jpg',
    foodSushi:       '/images/vs-house/food-sushi.jpg',
    cocktailSaigon:   '/images/vs-house/cocktail-saigon.jpg',
    cocktailMekong:   '/images/vs-house/cocktail-mekong.jpg',
    cocktailEspresso: '/images/vs-house/cocktail-espresso.jpg',
  },

  // ───────────── PRESS / TRUST ─────────────
  // Audit Block 2 External Trust
  press: [
    { source: 'Fort Worth Magazine', quote: '"…to die pho." A vibe wholeheartedly modern but tips its hat to a warm, old-world style.', year: '2022', url: 'https://fwtx.com/eat-drink/vs-house-north-richland-hills/' },
    { source: 'Dallas Observer',     quote: 'Up your Vietnamese dining at V\'s House in North Richland Hills.',                                year: null, url: 'https://www.dallasobserver.com/food-drink/vietnames-food-vs-house-north-richland-hills-40653054/' },
    { source: 'OpenTable',           quote: '4.6 ★ from 116 diners',                                                                          year: null, url: 'https://www.opentable.com/r/vs-house-hurst' },
    { source: 'Google',              quote: '4.4 ★ across 1,154 reviews',                                                                     year: null, url: "https://www.google.com/maps/search/V's+House+North+Richland+Hills" },
  ],

  ratings: {
    google:    { stars: 4.4, count: 1154 },
    opentable: { stars: 4.6, count: 116 },
    rji:       { stars: 4.4, count: 316 },
    yelp:      { stars: 4.0, count: 286 },
    fb:        { recommend: 96, count: 16 },
  },

  // ───────────── HERITAGE ─────────────
  heritage: {
    title: 'Three generations. One stretch of road.',
    intro:
      "Forty-four years on the same corridor. The grandparents started it in 1982. The parents kept it going. The brothers took it from there.",
    timeline: [
      {
        year: '1982',
        title: 'Quan Vu opens in Haltom City.',
        body:  "Refugees of the Vietnam War, the grandparents open the family's first kitchen. It runs for years.",
        tag:   null,
      },
      {
        year: '2012',
        title: 'Pho V opens in Bedford.',
        body:  "Rex and Ann Vu open Pho V Noodle House on Harwood Road. Thirteen years in, still pouring.",
        tag:   null,
      },
      {
        year: '2021',
        title: "V's House opens.",
        body:  "Alex and Ryan Vu open V's House a few blocks from the original Quan Vu. Sister Victoria runs the line. Hatsumi Kuzuu designs the room.",
        tag:   null,
      },
    ],
    family: [
      { name: 'Alex Vu',      role: 'Co-founder',                  bio: 'Co-founded V\'s House in 2021.' },
      { name: 'Ryan Vu',      role: 'Co-founder',                  bio: 'Co-founded V\'s House in 2021.' },
      { name: 'Victoria Vu',  role: 'Cook',                        bio: 'On the line at V\'s House.' },
      { name: 'Rex & Ann Vu', role: 'Pho V Noodle House (Bedford)', bio: 'Run the family\'s second restaurant a few miles down Bedford-Euless Rd. Instrumental in V\'s House.' },
    ],
    designer: {
      name:   'Hatsumi Kuzuu',
      credit: 'Recognized Dallas restaurant designer',
      quote:  '"A vibe wholeheartedly modern but tips its hat to a warm, old-world style." — Fort Worth Magazine',
    },
  },

  // ───────────── HERO LOCK / OPENING SECTION ─────────────
  // AUDIT Hero Lock
  hero: {
    eyebrow: 'Third Generation on Bedford-Euless Road',
    h1:      "V's House",
    sub:     "Bar · Sushi · Pho",
    pitch:
      "A Vu family kitchen on Bedford-Euless Road since 1982. Pho hand-made over 24 hours. A Saigon-coded bar that pours past midnight.",
    primaryCta:   { label: 'Reserve a table', href: 'https://tables.toasttab.com/restaurants/vs-house/findTime' },
    secondaryCta: { label: '(682) 777-3690', href: 'tel:+16827773690' },
  },

  // ───────────── SIGNATURES (homepage feature row) ─────────────
  // Audit Block 2 §4 — review-mention counts shown for proof
  signatures: [
    { name: 'Beef Deluxe Pho', meta: '24-hour broth · 28 mentions',                   img: '/images/vs-house/food-pho-deluxe.jpg',    anchor: 'pho' },
    { name: 'Banh Khot',       meta: 'Coconut-rice cakes · 22 mentions',              img: '/images/vs-house/food-banh-khot.jpg',     anchor: 'small-plates' },
    { name: 'Shaken Beef',     meta: '“Legit.” · 26 mentions',              img: '/images/vs-house/food-shaken-beef.jpg',   anchor: 'mains' },
    { name: 'Ca Phe Ruou Da',  meta: 'Vietnamese-coffee espresso martini · 14 mentions', img: '/images/vs-house/cocktail-espresso.jpg', anchor: 'cocktails' },
  ],

  // ───────────── MENU (real text, not a PNG) ─────────────
  // Audit Principle 1.3 fix — text menu with anchors per section.
  // Prices are owner-confirm, demo numbers from press + market range.
  menu: [
    {
      anchor:  'pho',
      heading: 'Pho',
      sub:     'Six varieties. Broth simmered 24 hours.',
      items: [
        { name: 'Beef Deluxe Pho',          desc: 'Rare beef, brisket, meatballs, tendon.',         price: '$18' },
        { name: 'Pho Tai (Rare Beef)',       desc: 'House broth, rice noodles, herbs.',              price: '$15' },
        { name: 'Pho Ga (Chicken)',          desc: 'Hand-made chicken broth.',                       price: '$15' },
        { name: 'Curry Pho',                 desc: '"To die for." (Restaurantji)',                   price: '$17' },
        { name: 'Pho Tom (Shrimp)',          desc: 'House broth, shrimp.',                           price: '$16' },
        { name: 'Pho Chay (Veggie / Tofu)',  desc: 'Vegetable broth, tofu.',                         price: '$15' },
      ],
    },
    {
      anchor:  'small-plates',
      heading: 'Small Plates',
      sub:     'Hand-rolled, daylight-bright.',
      items: [
        { name: 'Banh Khot',                desc: 'Coconut-rice cakes, shrimp, herbs.',             price: '$13' },
        { name: 'Egg Rolls',                desc: 'High pork-to-wrapper ratio. Crispy.',            price: '$9'  },
        { name: 'Toasted Crab Bread',       desc: 'Crab dip, charred baguette.',                    price: '$14' },
        { name: 'Garlic Chili Green Beans', desc: '"Are great." (Wanderboat)',                       price: '$11' },
        { name: 'Goi Cuon (Spring Rolls)',  desc: 'Shrimp, pork, rice paper, peanut.',              price: '$10' },
      ],
    },
    {
      anchor:  'mains',
      heading: 'Mains',
      sub:     'Stone-bowl, lemongrass, hand-shaken.',
      items: [
        { name: 'Bún Bò Huế',              desc: 'Lemongrass beef broth, stone bowl. Dallas Observer\'s hero dish.', price: '$26' },
        { name: 'Shaken Beef',              desc: 'Cubed filet, hand-shaken. "Legit."',             price: '$24' },
        { name: 'Bun Vermicelli',           desc: 'Grilled pork or chicken, herbs, fish sauce.',   price: '$17' },
        { name: 'Salmon Lover Roll',        desc: 'Three-salmon sushi roll, signature.',            price: '$18' },
        { name: 'Spicy California Roll',    desc: 'Crab, avocado, spicy mayo.',                     price: '$15' },
      ],
    },
    {
      anchor:  'cocktails',
      heading: 'Cocktails',
      sub:     '18 named drinks. Vietnamese-coded.',
      items: [
        { name: 'Mekong Margarita',        desc: 'Tequila, lime, lemongrass.',                     price: '$14' },
        { name: 'Saigon Sidecar',          desc: 'Cognac, orange, lemon.',                          price: '$15' },
        { name: 'Ca Phe Ruou Da',          desc: 'Vietnamese-coffee espresso martini.',             price: '$15' },
        { name: 'Pandan Punch',            desc: 'Pandan syrup, rum, citrus.',                      price: '$13' },
        { name: 'Smoked Old Fashioned',    desc: 'Bourbon, smoked, cherry.',                        price: '$15' },
        { name: 'Lychee Lime Fizz',        desc: 'Lychee, lime, soda.',                             price: '$12' },
        { name: "V's Mule",                desc: 'Vodka, ginger beer, lime.',                       price: '$13' },
        { name: 'Soda Chanh Muoi',         desc: 'Salted preserved lemonade soda.',                 price: '$10' },
      ],
    },
    {
      anchor:  'happy-hour',
      heading: 'Happy Hour',
      sub:     'Mon–Fri, 3p–6p at the bar.',
      items: [
        { name: 'House Cocktails',         desc: 'Select cocktails.',                                price: '$9' },
        { name: 'Beer (draft)',            desc: 'Domestic + craft.',                                price: '$5' },
        { name: 'Wine (glass)',            desc: 'Red / white.',                                     price: '$8' },
        { name: 'Crab Bread',              desc: 'Bar bite.',                                        price: '$10' },
        { name: 'Egg Rolls',               desc: 'Bar bite.',                                        price: '$6' },
      ],
    },
  ],

  // ───────────── REVIEWS / VOICES ─────────────
  // Audit Block 2 — verbatim, sourced. First names only where guests are named.
  reviews: [
    { quote: 'Their curry pho is to die for! We had many different foods and they were all delicious!', author: 'Restaurantji guest', source: 'Restaurantji',  stars: 5, date: 'Dec 2024' },
    { quote: 'The ambiance is perfectly sublime and the food is stellar… But when you factor in the service, 5-stars isn\'t enough. Neilla is exceptional in every way.', author: 'Yelp guest', source: 'Yelp', stars: 5, date: null },
    { quote: 'My partner and I went a few weeks ago, and the place was phenomenal. The atmosphere is so gorgeous and relaxing, and the friendly staff just brings a peace about the whole place.', author: 'Google reviewer', source: 'Google', stars: 5, date: null },
    { quote: 'Service is A1, food was spectacular and the atmosphere was energetic.', author: 'Terrel W.', source: 'Wanderboat', stars: 5, date: null },
    { quote: 'Made me feel like I was dining at a close friend\'s table.', author: 'Yelp guest', source: 'Yelp', stars: 5, date: null },
    { quote: 'Just love the food and the restaurant is hip and clean.', author: 'OpenTable diner', source: 'OpenTable', stars: 5, date: null },
    { quote: 'Don\'t forget to sip on their passion fruit tea or sample the creative drinks from their happy hour menu.', author: 'Google reviewer', source: 'Google', stars: 5, date: null },
    { quote: 'Natural atmosphere with plants and light fixtures made of natural materials.', author: 'Emman B.', source: 'Wanderboat', stars: 5, date: null },
    { quote: 'Casual lunch, quick service, $15 lunch special.', author: 'Danielle D.', source: 'Wanderboat', stars: 4, date: null },
  ],

  // ───────────── VIBE TAGS ─────────────
  vibeTags: ['Casual', 'Trendy', 'Intimate', 'Romantic', 'Classy', 'Upscale'],
} as const;

export type Content = typeof content;
