// content.example.ts — Tekka Sushi fork of qitchen-01
//
// Truth policy: public evidence comes from Tekka's owned site, Google Maps
// capture, the current-site audit, and public ordering pages. Do not add
// omakase, awards, or exact menu prices unless newly verified.

export const content = {
  brand: {
    name: 'Tekka Sushi',
    tagline: 'Fresh Sushi in Elk Grove Village',
    description:
      'Modern Japanese dining for fresh rolls, sashimi, ramen, lunch specials, takeout, and delivery at 84 Biesterfield Rd.',
    logoText: 'TEKKA SUSHI',
    address: { line1: '84 Biesterfield Rd', line2: 'Elk Grove Village, IL 60007' },
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 1 as const, open: '11:00', close: '21:30' },
        { day: 2 as const, open: '11:00', close: '21:30' },
        { day: 3 as const, open: '11:00', close: '21:30' },
        { day: 4 as const, open: '11:00', close: '21:30' },
        { day: 5 as const, open: '11:00', close: '22:00' },
        { day: 6 as const, open: '11:00', close: '22:00' },
        { day: 0 as const, open: '12:00', close: '21:30' },
      ],
      closures: [],
    },
    geo: { lat: 42.0051768, lng: -88.0067056 },
  },

  nav: {
    items: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
    ],
    cta: { label: 'Order Online', href: 'https://www.tekkasushiil.com/' },
  },

  thumbnailNav: [
    {
      label: 'Menu',
      href: '/menu',
      image: '/photos/tekka/nav-menu.png',
      alt: 'Sushi rolls prepared for service',
    },
    {
      label: 'Order Online',
      href: 'https://www.tekkasushiil.com/',
      image: '/photos/tekka/nav-contact.png',
      alt: 'Packaged sushi for takeout',
    },
    {
      label: 'Call to Reserve',
      href: 'tel:+12248757188',
      image: '/photos/tekka/nav-reservation.png',
      alt: 'Dining room seating at Tekka Sushi',
    },
    {
      label: 'Directions',
      href: 'https://www.google.com/maps/place/Tekka+Sushi/@42.0051768,-88.0067056,17z/',
      image: '/photos/tekka/nav-about.png',
      alt: 'Tekka Sushi in Elk Grove Village',
    },
  ],

  hero: {
    image: '/photos/tekka/hero-home.png',
    alt: 'Fresh sushi presented on a dark plate',
  },

  about: {
    pageTitle: 'About',
    image: '/photos/tekka/nav-about.png',
    headline: 'A sharper home for Tekka’s real sushi story',
    intro:
      'Tekka Sushi already has the ingredients customers look for: fresh sushi and sashimi, polished presentation, ramen, lunch specials, friendly service, and easy ordering. The redesign brings those real strengths forward instead of hiding them behind placeholder menu content.',
    badges: [
      { stars: 5, name: 'Google', descriptor: '4.8 / 370 reviews' },
      { stars: 5, name: 'Service', descriptor: 'Dine-in • Takeout • Delivery' },
      { stars: 5, name: 'Location', descriptor: 'Elk Grove Village' },
    ],
    storyHeadline: 'Freshness, presentation, and a menu people trust',
    story:
      'Public review evidence consistently praises Tekka for fresh sushi, careful presentation, a modern/chic room, and attentive service. The new site should make the ordering decision simple: see the real menu, choose a favorite roll or ramen bowl, order online, call, or get directions.',
    storyImage: '/photos/tekka/about-story.jpg',
  },

  menu: {
    pageTitle: 'Menu',
    pageImage: '/photos/tekka/menu-page.jpg',
    sections: [
      {
        title: 'Review Favorites',
        items: [
          { name: 'Godzilla Roll', description: 'A repeated guest favorite in Google review evidence and a strong signature-roll anchor for the redesign.', price: 'Favorite', image: '/photos/tekka/menu-item-1.jpg', ingredients: ['sushi rice', 'nori'], allergens: ['fish', 'shellfish', 'soy'], dietary: ['pescatarian'] },
          { name: 'Volcano Roll', description: 'Frequently recommended by reviewers looking for a bold specialty roll.', price: 'Favorite', image: '/photos/tekka/menu-item-5.jpg', ingredients: ['sushi rice', 'nori'], allergens: ['fish', 'shellfish', 'soy'], dietary: ['pescatarian'], spiceLevel: 2 },
          { name: 'Spicy Crispy Tuna Roll', description: 'Captured as a 5/5 guest favorite; useful proof that Tekka has real roll demand beyond generic maki.', price: 'Favorite', image: '/photos/tekka/menu-item-4.jpg', ingredients: ['tuna', 'sushi rice', 'nori'], allergens: ['fish', 'soy'], dietary: ['pescatarian'], spiceLevel: 2 },
          { name: 'Fire Phoenix Roll', description: 'Appears in public ordering evidence, including Platter C alongside other specialty rolls.', price: 'Online', image: '/photos/tekka/menu-item-7.jpg', ingredients: ['sushi rice', 'nori'], allergens: ['fish', 'shellfish', 'soy'], dietary: ['pescatarian'] },
        ],
      },
      {
        title: 'Sushi & Sashimi',
        items: [
          { name: 'Regular Sashimi', description: 'Public audit evidence identifies regular sashimi as a menu/content anchor; reviews praise fresh cuts and presentation.', price: 'Menu', image: '/photos/tekka/menu-item-2.jpg', ingredients: ['assorted fish'], allergens: ['fish'], dietary: ['pescatarian', 'gluten-free', 'dairy-free'] },
          { name: 'Nigiri', description: 'Reviewers call out fresh nigiri with nice cuts; keep this visible for sushi-first customers.', price: 'Menu', image: '/photos/tekka/menu-item-3.jpg', ingredients: ['fish', 'sushi rice'], allergens: ['fish'], dietary: ['pescatarian', 'dairy-free'] },
          { name: 'Yellowtail Hamachi', description: 'A verified menu/content anchor from qualification evidence for customers scanning for classic sushi staples.', price: 'Menu', image: '/photos/tekka/menu-item-6.jpg', ingredients: ['yellowtail'], allergens: ['fish'], dietary: ['pescatarian', 'gluten-free', 'dairy-free'] },
          { name: 'Spicy Tuna Roll', description: 'Appears in public platter evidence and gives the page a familiar, high-intent ordering item.', price: 'Online', image: '/photos/tekka/menu-item-8.jpg', ingredients: ['tuna', 'sushi rice', 'nori'], allergens: ['fish', 'soy'], dietary: ['pescatarian'], spiceLevel: 2 },
        ],
      },
      {
        title: 'Ramen, Lunch & Platters',
        items: [
          { name: 'Spicy Miso Ramen', description: 'A public favorite signal that lets the site sell more than rolls while staying Japanese-specific.', price: 'Menu', image: '/photos/tekka/menu-item-1.jpg', ingredients: ['ramen noodles', 'miso broth'], allergens: ['soy', 'gluten'], dietary: [] , spiceLevel: 2 },
          { name: 'Steak Ramen', description: 'Review evidence praises ramen bowls alongside sushi, helping Tekka feel like a complete lunch/dinner option.', price: 'Menu', image: '/photos/tekka/menu-item-2.jpg', ingredients: ['ramen noodles', 'beef'], allergens: ['soy', 'gluten'], dietary: [] },
          { name: 'Lunch Specials', description: 'The redesign should make Tekka’s lunch value easy to understand for nearby office and neighborhood customers.', price: 'Lunch', image: '/photos/tekka/menu-item-3.jpg', ingredients: ['varies'], allergens: ['fish', 'soy', 'gluten'], dietary: [] },
          { name: 'Platter C', description: 'Public ordering evidence lists a large roll platter with Fire Phoenix, caterpillar, sunny, sunset, California, Philadelphia, spicy tuna, spicy salmon, spicy kani, shrimp tempura, and Alaska rolls.', price: '$93 online', image: '/photos/tekka/menu-item-4.jpg', ingredients: ['assorted rolls'], allergens: ['fish', 'shellfish', 'soy', 'gluten'], dietary: ['pescatarian'] },
        ],
      },
    ],
  },

  reservation: {
    pageTitle: 'Visit',
    pageImage: '/photos/tekka/reservation-page.jpg',
    headline: 'Call, order, or come by',
    intro:
      'For reservations or questions, call (224) 875-7188. For takeout and delivery, use Tekka’s online ordering path. Hours should be confirmed for holidays and special closures.',
    submitLabel: 'Call (224) 875-7188',
  },

  footer: {
    text: 'Tekka Sushi • 84 Biesterfield Rd, Elk Grove Village, IL 60007 • (224) 875-7188 • Order online at tekkasushiil.com',
  },
} as const;

export type SiteContent = typeof content;
