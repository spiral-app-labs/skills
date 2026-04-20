// content.example.ts — qitchen-01 placeholder content
//
// Replace ALL strings + image URLs when forking for a real restaurant.
// The shape is the contract: components import this file and read its keys.
// As long as you keep the shape, swap freely.
//
// Image policy: placeholder images use Unsplash hotlinks for portability.
// In a real fork, drop restaurant-supplied photos into /public/photos/ and
// reference them with absolute paths. Photos must match qitchen's
// dark-warm low-light aesthetic — see audit §12.4 (locked) for grading rules.

export const content = {
  brand: {
    name: 'Qitchen',
    // The "tagline" is the massive headline that overlays the home hero image.
    tagline: 'Sushi Sensation',
    description: 'Where culinary craftsmanship meets modern elegance. Premium sushi expertly curated.',
    // Wordmark image — replace with restaurant's logo SVG/PNG.
    // The original qitchen wordmark is a custom serif logotype with a flourished Q.
    logoText: 'QITCHEN',
    address: { line1: '45 Spring St', line2: 'New York, NY 10012' },
    // Powers <LiveOpenStatus /> — see shared/lib/hours.ts HoursConfig schema.
    // Fork rule: update timezone + ranges to match real venue. Add closures array for holidays.
    // Ceremonial sushi — dinner-only five nights a week. Closed Sun/Mon.
    hoursConfig: {
      timezone: 'America/New_York',
      ranges: [
        { day: 2 as const, open: '17:30', close: '22:00' }, // Tuesday
        { day: 3 as const, open: '17:30', close: '22:00' }, // Wednesday
        { day: 4 as const, open: '17:30', close: '22:00' }, // Thursday
        { day: 5 as const, open: '17:30', close: '23:00' }, // Friday
        { day: 6 as const, open: '17:30', close: '23:00' }, // Saturday
      ],
      closures: [],
    },
    // Primary location lat/lng — powers <LiveMapEmbed />. Fork rule: replace with real coords.
    geo: { lat: 40.7223, lng: -74.0030 }, // NYC SoHo placeholder
  },

  nav: {
    items: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
    ],
    cta: { label: 'Book a Table', href: '/reservation' },
  },

  // Homepage thumbnail-nav cards (right column).
  // Each card is a photo + label that quick-jumps to a sub-page.
  thumbnailNav: [
    {
      label: 'Menu',
      href: '/menu',
      image: '/placeholder/nav-menu.webp',
      alt: 'Plated sushi being served',
    },
    {
      label: 'About',
      href: '/about',
      image: '/placeholder/nav-about.webp',
      alt: 'Diner enjoying a glass of wine',
    },
    {
      label: 'Reservation',
      href: '/reservation',
      image: '/placeholder/nav-reservation.webp',
      alt: 'Restaurant interior at night',
    },
    {
      label: 'Contact',
      href: '/reservation',
      image: '/placeholder/nav-contact.webp',
      alt: 'Plated dish',
    },
  ],

  hero: {
    image: '/placeholder/hero-home.webp',
    alt: 'Chopsticks lifting sushi from a black bowl',
  },

  about: {
    pageTitle: 'About',
    image: '/placeholder/about-page.webp',
    headline: 'Sushi Artistry Redefined',
    intro: 'Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.',
    badges: [
      { stars: 5, name: 'Trip Advisor', descriptor: 'Best Sushi' },
      { stars: 5, name: 'Michelin Guide', descriptor: 'Quality Food' },
      { stars: 5, name: 'Start Dining', descriptor: 'Cool Vibe' },
    ],
    storyHeadline: 'Our Story',
    story:
      'Founded with a passion for culinary excellence, Qitchen\'s journey began in the heart of Prague. Over years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to redefining gastronomy.',
    storyImage: '/placeholder/story.webp',
  },

  menu: {
    pageTitle: 'Menu',
    pageImage: '/placeholder/menu-page.webp',
    sections: [
      {
        title: 'Maki',
        items: [
          { name: 'Spicy Tuna Maki',  description: 'Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.', price: '$5', image: '/placeholder/menu-item-1.webp' },
          { name: 'Mango Maki',       description: 'A refreshing roll featuring mango, cucumber, and avocado for a tropical twist.',                                          price: '$5', image: '/placeholder/menu-item-2.webp' },
          { name: 'Salmon Maki',      description: 'Classic salmon with cucumber and avocado, finished with a dusting of sesame.',                                            price: '$5', image: '/placeholder/menu-item-3.webp' },
          { name: 'Tuna Maki',        description: 'Fresh tuna and ripe avocado wrapped tight in seasoned sushi rice.',                                                       price: '$5', image: '/placeholder/menu-item-4.webp' },
        ],
      },
      {
        title: 'Uramaki',
        items: [
          { name: 'Volcano Delight',   description: 'Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.', price: '$12', image: '/placeholder/menu-item-5.webp' },
          { name: 'Rainbow Fusion',    description: 'A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.',         price: '$12', image: '/placeholder/menu-item-6.webp' },
          { name: 'Dragon Elegance',   description: 'Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.',          price: '$12', image: '/placeholder/menu-item-7.webp' },
          { name: 'Sunset Serenity',   description: 'Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.',         price: '$12', image: '/placeholder/menu-item-8.webp' },
          { name: 'Mystic Garden',     description: 'Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.', price: '$12', image: '/placeholder/menu-item-1.webp' },
          { name: 'Ocean Breeze',      description: 'A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.',             price: '$12', image: '/placeholder/menu-item-2.webp' },
          { name: 'Tokyo Blossom',     description: 'Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.',    price: '$12', image: '/placeholder/menu-item-3.webp' },
        ],
      },
      {
        title: 'Special Rolls',
        items: [
          { name: 'Sunrise Bliss',      description: 'A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.',                price: '$16', image: '/placeholder/menu-item-4.webp' },
          { name: 'Mango Tango',        description: 'Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.',                                              price: '$16', image: '/placeholder/menu-item-5.webp' },
          { name: 'Truffle Indulgence', description: 'Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.',             price: '$16', image: '/placeholder/menu-item-6.webp' },
          { name: 'Pacific Firecracker',description: 'Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.',                                  price: '$16', image: '/placeholder/menu-item-7.webp' },
          { name: 'Eternal Eel',        description: 'An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.',                    price: '$16', image: '/placeholder/menu-item-8.webp' },
        ],
      },
    ],
  },

  reservation: {
    pageTitle: 'Book a Table',
    pageImage: '/placeholder/reservation-page.webp',
    headline: 'Reservation',
    intro: `Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await.`,
    submitLabel: 'Fill Out the Form',
    // Real forks should swap this for an OpenTable / Resy / Tock embed when the
    // restaurant uses one of those — see audit §11 ReservationFormPanel variants.
  },

  footer: {
    text: '© Qitchen — Licensing',
  },
} as const;

export type SiteContent = typeof content;
