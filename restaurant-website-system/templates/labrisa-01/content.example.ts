// content.example.ts — labrisa-01 placeholder content
//
// Hotlinked Unsplash URLs — warm-graded coastal / French food photography per
// audit §12.4. Forks MUST replace with real editorial photography of the venue
// and swap the "Bienvenue!" + sailboat illustration for their own hand-drawn mark.

export const content = {
  brand: {
    name: 'La Brisa',
    tagline: 'A Taste of the Riviera',
    description:
      'French-Riviera coastal-upscale dining in Saint-Tropez. Dine with us, take us home, or host your private event seaside.',
    address: { line1: '7 Quai Jean Jaurès', line2: '83990 Saint-Tropez, France' },
    phone: '+33 4 94 00 00 00',
    email: 'bonjour@labrisa.example',
    social: [
      { label: 'Instagram', href: '#', icon: 'instagram' },
      { label: 'Facebook',  href: '#', icon: 'facebook' },
    ],
    hours: [
      { day: 'Monday',    range: 'Closed' },
      { day: 'Tuesday',   range: '6:00 pm — 11:00 pm' },
      { day: 'Wednesday', range: '6:00 pm — 11:00 pm' },
      { day: 'Thursday',  range: '6:00 pm — 11:00 pm' },
      { day: 'Friday',    range: '6:00 pm — 12:00 am' },
      { day: 'Saturday',  range: '12:00 pm — 12:00 am' },
      { day: 'Sunday',    range: '12:00 pm — 10:00 pm' },
    ],
    // Aliveness retrofit (2026-04-20): hoursConfig + geo for LiveOpenStatus/LiveMapEmbed.
    // Parsed from the `hours` array above — Mon closed (no range), late closes
    // on Fri/Sat go past midnight (24:00).
    hoursConfig: {
      timezone: 'Europe/Paris',
      ranges: [
        { day: 2 as const, open: '18:00', close: '23:00' }, // Tue
        { day: 3 as const, open: '18:00', close: '23:00' }, // Wed
        { day: 4 as const, open: '18:00', close: '23:00' }, // Thu
        { day: 5 as const, open: '18:00', close: '24:00' }, // Fri
        { day: 6 as const, open: '12:00', close: '24:00' }, // Sat
        { day: 0 as const, open: '12:00', close: '22:00' }, // Sun
      ],
      closures: [],
    },
    geo: { lat: 43.2673, lng: 6.6407 }, // Saint-Tropez, France
  },

  nav: {
    primary: [
      { label: 'Menu',    href: '/menu' },
      { label: 'About',   href: '/about' },
      { label: 'Journal', href: '#journal' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Reserve', href: '#reserve' },
  },

  hero: {
    eyebrow: 'Saint-Tropez, Côte d\'Azur',
    h1: 'A Taste of the Riviera',
    intro:
      'La Brisa is a seaside kitchen in the heart of Saint-Tropez. Sun-warmed produce, slow afternoons, long Riviera dinners under olive trees.',
    cta: { label: 'Reserve a Table', href: '#reserve' },
    photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80',
    photoAlt: 'Chef plating a warm-graded steak dish',
  },

  bienvenue: {
    script: 'Bienvenue!',
    body:
      'Welcome to our table. What began as a family summerhouse kitchen in 1978 is now a love letter to the Riviera — written in olive oil, langoustine, rosé, and long golden hours.',
    // Small circular dish illustration — warm overhead plate shot.
    dishPhoto: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    dishAlt: 'Overhead plate of Riviera-style dish',
  },

  // 4-photo vignette strip with French script captions. Audit §11: promote now.
  vignettes: [
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      alt: 'Riviera coastal life',
      caption: 'La vie de la rivieré',
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      alt: 'A warm summer evening',
      caption: 'Une nuit d\'été…',
    },
    {
      src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      alt: 'Wine cellar detail',
      caption: 'L\'ameublement de la cave',
    },
    {
      src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
      alt: 'Our villa',
      caption: 'La maison',
    },
  ],

  // Signature photo block — a wide hero-secondary dish photo.
  centerDish: {
    photo: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2000&q=80',
    alt: 'Signature Riviera dish, overhead',
    caption: 'The house bouillabaisse — simmered slowly since 1978.',
  },

  // Three-up multi-service selector — primary conversion surface.
  services: {
    eyebrow: 'Dine With Us',
    heading: 'Three Ways to Gather',
    items: [
      {
        id: 'main',
        label: 'Main Reservation',
        body: 'A table in our seaside dining room. Four courses or à la carte, every evening but Monday.',
        cta: 'Reserve Now',
        href: '#reserve',
        photo: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'home',
        label: 'Dine at Home',
        body: 'Our Riviera menu, prepared for your villa or yacht. Two-day notice, full or half service.',
        cta: 'Order Menu',
        href: '#athome',
        photo: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
      },
      {
        id: 'private',
        label: 'Private Dining',
        body: 'Buyouts + private salons for weddings, anniversaries, and smaller gatherings up to 40 guests.',
        cta: 'Request Proposal',
        href: '#private',
        photo: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },

  // The Journal — editorial content cards.
  journal: {
    eyebrow: 'The Journal',
    heading: 'Stories from the Coast',
    articles: [
      {
        title: 'The August Rosé Harvest',
        snippet: 'Two weeks each year, the hillside turns pink — here is how it finds its way to your glass.',
        photo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
        date: 'Aug 2024',
      },
      {
        title: 'A Recipe for Slow Afternoons',
        snippet: 'Chef Léa on the only bouillabaisse worth making — and the three fish she refuses to leave out.',
        photo: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
        date: 'Jun 2024',
      },
      {
        title: 'The Houses of the Côte',
        snippet: 'A conversation with our neighbors — the painters, the fishermen, the winemakers of the Var coast.',
        photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
        date: 'May 2024',
      },
    ],
  },

  // Disambiguated as newsletter per the audit guidance (not reminder-booking).
  newsletter: {
    eyebrowScript: 'Rendez-Vous Émails',
    heading: 'Letters from the Riviera',
    body: 'Seasonal dispatches, private-event invitations, and chef Léa\'s recipes. Once a month, never more.',
    placeholder: 'your@email.com',
    cta: 'Subscribe',
  },

  signOff: {
    h1: 'À Bientôt by the Riviera',
    photo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2400&q=80',
    photoAlt: 'Overhead shot of multiple Riviera plates on a long table',
  },

  // ========== MENU PAGE ==========
  menuPage: {
    h1: 'Our Menu',
    heroPhoto: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'Riviera food grid',
    intro:
      'A shorter menu in summer, longer in shoulder seasons. Produce from our garden and the markets of Hyères; fish from Saint-Tropez harbor each morning.',
    categories: [
      {
        label: 'Starters',
        items: [
          { name: 'Pissaladière', description: 'Caramelized onion, anchovy, Niçoise olives, puff pastry.', price: '18' },
          { name: 'Burrata & Figs', description: 'Late-summer figs, lavender honey, Provençal olive oil.', price: '22' },
          { name: 'Crudo of Loup', description: 'Line-caught sea bass, citrus salt, fennel pollen.', price: '26' },
          { name: 'Soupe au Pistou', description: 'Summer vegetable broth, basil pistou, Parmigiano crust.', price: '16' },
          { name: 'Tartare de Bœuf', description: 'Hand-cut beef, caper, shallot, quail yolk, grilled sourdough.', price: '24' },
        ],
      },
      {
        label: 'Main Courses',
        items: [
          { name: 'Bouillabaisse de la Maison', description: 'Rascasse, rouget, langoustine, rouille, grilled croutons.', price: '58' },
          { name: 'Loup en Croûte', description: 'Whole sea bass baked in salt crust, beurre blanc, samphire. For two.', price: '92' },
          { name: 'Daube Provençale', description: 'Slow-braised beef cheek, olives, orange zest, polenta douce.', price: '46' },
          { name: 'Rack of Lamb', description: 'Herbes de Provence, white beans, anchoïade.', price: '54' },
          { name: 'Linguine aux Palourdes', description: 'Hand-rolled linguine, clams, garlic, white wine, parsley.', price: '38' },
        ],
      },
      {
        label: 'Desserts',
        items: [
          { name: 'Tarte Tatin', description: 'Caramelized apples, crème fraîche, Calvados.', price: '14' },
          { name: 'Île Flottante', description: 'Poached meringue, vanilla crème anglaise, pralines.', price: '13' },
          { name: 'Fraisier', description: 'Riviera strawberries, pistachio, almond sponge, mascarpone.', price: '15' },
          { name: 'Cheese Course', description: 'Three selections from our cave, seasonal accompaniments.', price: '22' },
        ],
      },
      {
        label: 'Wines & Spirits',
        items: [
          { name: 'Domaine Ott Rosé', description: 'Côtes de Provence. By the glass / bottle.', price: '18 / 84' },
          { name: 'Bandol Rouge', description: 'Mourvèdre, 2019. By the bottle.', price: '92' },
          { name: 'Champagne Billecart-Salmon', description: 'Brut Réserve. By the glass / bottle.', price: '24 / 140' },
          { name: 'Pastis Maison', description: 'House blend, served with spring water.', price: '12' },
        ],
      },
    ],
  },

  // ========== ABOUT PAGE ==========
  aboutPage: {
    h1: 'From Coast to Cuisine',
    heroPhoto: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'Riviera coastline at golden hour',
    pullQuote:
      'La Brisa isn\'t just a restaurant — it\'s a love letter to the Riviera.',
    prose: [
      'Our family bought the house in 1978. It was a crumbling villa with a clay-tiled courtyard, a lemon tree that was half-dead, and a view of the Gulf of Saint-Tropez that nobody had thought to frame properly. My grandmother started cooking for neighbors the first summer. By the second summer they were paying her.',
      'Forty-six years later we are still here. The lemon tree is fine now. The courtyard is where we serve dinner on warm nights. The fishermen who sell us loup de mer at 5 a.m. are the grandsons of the ones who sold my grandmother hers.',
      'We cook the food of the coast — Provençal, Ligurian, a little Catalan when the mood strikes. Slow, seasonal, generous. You are welcome to sit for three hours if you want to. Most people do.',
    ],
    moments: {
      heading: 'Moments by the Saint-Tropez Seaside',
      photos: [
        { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80', alt: 'Coastline view', caption: 'The gulf at dawn' },
        { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80', alt: 'Wine on terrace', caption: 'Early rosé' },
        { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80', alt: 'Prepared dish', caption: 'The first course' },
      ],
    },
  },

  // ========== CONTACT PAGE ==========
  contactPage: {
    h1: 'Join Us in Saint-Tropez',
    heroPhoto: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80',
    heroAlt: 'Candlelit dinner table at La Brisa',
    cards: [
      {
        label: 'Call us',
        primary: '+33 4 94 00 00 00',
        secondary: 'Every day 10 am — 10 pm',
      },
      {
        label: 'Write us',
        primary: 'bonjour@labrisa.example',
        secondary: 'For private events, press, partnerships',
      },
    ],
    hours: {
      heading: 'Opening Hours',
    },
    map: {
      src: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=1200&q=80',
      alt: 'Map of Saint-Tropez harbor',
    },
  },
};
