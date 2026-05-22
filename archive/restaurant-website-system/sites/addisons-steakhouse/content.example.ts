// content.example.ts - Addison's Steakhouse fork content
//
// Forked from 1776-redesign-01, softened for a family-owned McHenry
// steakhouse where the conversion path is phone-first reservations.

export type DisplayHeadingContent = {
  upright: string;
  italic: string;
  layout?: 'inline' | 'stacked';
};

export const content = {
  brand: {
    name: "Addison's Steakhouse",
    tagline: 'From Scratch Steak & Seafood',
    description:
      'Family-owned McHenry steakhouse serving cooked-to-order steaks, seafood, cocktails, and warm neighborhood hospitality.',
    logo: "ADDISON'S",
    location: 'McHenry, Illinois',
    established: 'Since 2017',
    address: '335 Front St.',
    addressFull: '335 Front St., McHenry, IL 60050',
    phone: '(815) 322-2546',
    email: '',
    reservationUrl: 'tel:+18153222546',
    reservationPlatform: 'native' as const,
    reservationRestref: '',
    hours: [
      { days: 'Monday', time: 'Closed' },
      { days: 'Tuesday to Sunday', time: '11:30 AM to 9:00 PM' },
    ],
    rating: { stars: 4.2, count: 728 },
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '11:30', close: '21:00' },
        { day: 2 as const, open: '11:30', close: '21:00' },
        { day: 3 as const, open: '11:30', close: '21:00' },
        { day: 4 as const, open: '11:30', close: '21:00' },
        { day: 5 as const, open: '11:30', close: '21:00' },
        { day: 6 as const, open: '11:30', close: '21:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.3336, lng: -88.2665 },
  },

  nav: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/menu' },
      { label: 'Story', href: '/about' },
      { label: 'Visit', href: '/contact' },
    ],
    cta: { label: 'Call to Reserve', href: 'tel:+18153222546' },
  },

  hero: {
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=2200&q=85',
    eyebrow: 'McHenry, Illinois · From-scratch steakhouse since 2017',
    heading: { upright: 'From', italic: 'Scratch', layout: 'stacked' } as DisplayHeadingContent,
    primaryCta: { label: 'Call to Reserve', href: 'tel:+18153222546' },
    secondaryCta: { label: 'View Menu', href: '/menu' },
  },

  marquee: {
    items: ['Steaks & Seafood', 'Cooked to Order', 'Signature Martinis', 'Sports Bar', 'Patio Seating'],
    separator: '◆',
  },

  signatureSelections: {
    heading: { upright: 'What Regulars', italic: 'Order' } as DisplayHeadingContent,
    fullMenuLink: { label: 'Full Menu', href: '/menu' },
    items: [
      {
        tag: 'Steakhouse',
        name: 'Bone-In Ribeye',
        description: '20 ounces, perfectly marbled and generously juicy, served with soup or salad and two sides.',
        image:
          'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=85',
      },
      {
        tag: 'Seafood',
        name: 'Seared Scallops',
        description: 'Two jumbo day-boat dry-packed diver scallops over rice pilaf with orange-rum butter.',
        image:
          'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85',
      },
      {
        tag: 'Thursday',
        name: 'Surf & Turf Thursday',
        description: 'Eight-ounce New York strip and cold-water lobster tail with two sides, soup or salad.',
        image:
          'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85',
      },
    ],
  },

  moreThanAMeal: {
    heading: { upright: 'Built like a', italic: 'regulars room.' } as DisplayHeadingContent,
    body: [
      "Addison's works because it feels personal: the owner checks the room, the chef cooks every plate to order, and guests remember servers by name.",
      'The site now puts that warmth before the menu scroll, then makes the two decisions guests need fast: what should we order, and how do we get a table?',
    ],
    storyCta: { label: 'Read the Story', href: '/about' },
    images: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=85',
    ],
  },

  voicesOfExperience: {
    eyebrow: 'Guest Proof',
    heading: { upright: 'People Come Back', italic: 'For This' } as DisplayHeadingContent,
    testimonials: [
      {
        quote: 'We feel like home when we dine here. The pride the owners show is amazing.',
        attribution: 'Google review',
        platform: 'Hospitality',
      },
      {
        quote: 'The bone-in ribeye was cooked to perfection and melted in my mouth.',
        attribution: 'Google review',
        platform: 'Steaks',
      },
      {
        quote: 'Our server was attentive, knowledgeable, and made the whole night easy.',
        attribution: 'Google review',
        platform: 'Service',
      },
      {
        quote: 'A great place for date night, dinner with friends, or a family celebration.',
        attribution: 'Google review',
        platform: 'Occasions',
      },
    ],
  },

  reviews: {
    eyebrow: 'Real Guest Notes',
    heading: 'The service, the steaks, and the family feeling are already selling Addison’s.',
    aggregate: {
      stars: 4.2,
      count: 728,
      source: 'Public review profile',
    },
    items: [
      {
        stars: 5,
        text: 'We feel like home when we dine here.',
        source: 'Google review',
      },
      {
        stars: 5,
        text: '14 oz ribeye was cooked to perfection melted in my mouth.',
        source: 'Google review',
      },
      {
        stars: 5,
        text: 'Attentive without being intrusive.',
        source: 'Google review',
      },
      {
        stars: 5,
        text: 'Our goto place for date night or dinner with friends.',
        source: 'Google review',
      },
      {
        stars: 5,
        text: 'Make sure to order a chocolate martini or a mai tai.',
        source: 'Google review',
      },
      {
        stars: 5,
        text: "For us having such a big party, they didn't miss a beat.",
        source: 'Google review',
      },
    ],
  },

  quoteOverlay: {
    image:
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=2200&q=85',
    quote: 'Everything from scratch. Nothing out of cans. Every single meal is cooked to order.',
    attribution: '— Jon Descher',
  },

  reservationStrip: {
    eyebrow: 'Reservations',
    heading: { upright: 'Save a', italic: 'Table', trailingUpright: ' Tonight' } as DisplayHeadingContent & { trailingUpright?: string },
    primaryCta: { label: 'Call to Reserve', href: 'tel:+18153222546' },
    secondaryCta: { label: 'View Dinner Menu', href: '/menu' },
  },

  footer: {
    tagline: 'From scratch. Every plate. Every night.',
    description:
      "McHenry's family-owned steakhouse for bone-in ribeye, seafood, cocktails, and a room that feels familiar by the second visit.",
    badges: ['Since 2017', 'Steaks & Seafood', 'Family-Owned'],
    copyright: "© 2026 Addison's Steakhouse · All rights reserved",
  },

  menu: {
    pageTitle: 'The Menu',
    eyebrow: 'Dinner served Tuesday through Sunday · 11:30 AM to 9:00 PM',
    notice: 'Wednesday: half off wine bottles and $4 off starters · Thursday: surf and turf special · Saturday: prime rib night',
    pageImage:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=2200&q=85',
    tabs: ['Starters', 'Steaks & Chops', 'Seafood & Entrees', 'Soups & Salads', 'Burgers & Sides', 'Drinks & Specials'],
    sections: {
      Starters: {
        intro: 'Scratch-made starts for the table, from seafood to steakhouse classics.',
        items: [
          { name: 'Shrimp Cocktail', description: 'Four wild-caught super colossal gulf shrimp with Zing Zang cocktail sauce.', price: '$18' },
          { name: 'Seared Scallops', description: 'Two jumbo day-boat dry-packed diver scallops over rice pilaf with orange-rum butter reduction.', price: '$22' },
          { name: 'Charcuterie Board', description: 'Aged and slow-cured meats, cheeses, pickled vegetables, fruit, nuts, olives, mustard, jam, and grilled crostini.', price: '$23' },
          { name: 'Grilled Avocados', description: 'Olive-oil brushed avocados with roasted tomatoes, garlic, basil, and spicy Dijon cream.', price: '$17' },
          { name: 'Crab Cakes', description: 'Jumbo lump crab, red pepper, green onions, white wine, panko, and house remoulade.', price: '$10' },
          { name: 'Mozzarella Rolls', description: 'Four egg-roll-wrapped smoked mozzarella rolls with house marinara.', price: '$16' },
          { name: 'Filet Mignon Sliders', description: 'Tenderloin medallions, horseradish whipped cream, greens, and garlic-butter brioche.', price: '$18 / $25' },
          { name: 'Lobster Rangoons', description: 'Langostino lobster, garlic, cream cheese, green onion, red bell pepper, and sweet chile sauce.', price: '$18' },
        ],
      },
      'Steaks & Chops': {
        intro: 'Aged USDA beef chargrilled to order with soup or salad and two sides.',
        items: [
          { name: 'Filet Mignon', description: 'Center barrel cut, tender and lean.', price: '$37 / $49' },
          { name: 'New York Strip', description: '12 ounces, full-flavored, succulent, and buttery.', price: '$38' },
          { name: 'Ribeye', description: '14 ounces, well-marbled and deliciously juicy.', price: '$40' },
          { name: 'Bone-In Ribeye', description: '20 ounces, perfectly marbled and generously juicy.', price: '$54' },
          { name: 'Prime Sirloin', description: '8 ounces, USDA prime top butt sirloin.', price: '$28' },
          { name: 'Porterhouse', description: '24 ounces, larger T-bone cut with a substantial filet side.', price: '$59' },
          { name: 'Center Cut Pork Chops', description: 'One or two center-cut bone-in loin chops.', price: '$25 / $36' },
          { name: 'Surf Add-Ons', description: 'Lobster tail, scallops, grilled shrimp, or crab Oscar added to any steak or chop.', price: '$12-$29' },
        ],
      },
      'Seafood & Entrees': {
        intro: 'Seafood, pasta, and steakhouse comfort plates cooked to order.',
        items: [
          { name: 'Lobster Tacos', description: 'Butter-poached langostino lobster, avocado-cilantro relish, chipotle crema, and Spanish rice.', price: '$26' },
          { name: 'Seafood Capellini', description: 'Shrimp, scallops, langostino lobster, bay scallops, asparagus, dill, and Parmesan cream sauce.', price: '$42' },
          { name: "Lobster Mac N' Cheese", description: 'Langostino lobster and Applewood-smoked bacon in four-cheese cavatappi with panko crust.', price: '$29' },
          { name: 'Roasted Vegetable Cavatappi', description: 'Roasted vegetables, spinach, sweet onions, tomatoes, basil, and aglio e olio.', price: '$25' },
          { name: 'Scallops', description: 'Jumbo day-boat diver scallops over rice pilaf and seasonal vegetables with lemon butter.', price: '$42' },
          { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon over rice pilaf with lemon-dill butter and grilled asparagus.', price: '$32' },
          { name: 'Twin Lobster Tails', description: 'Two cold-water lobster tails with your choice of two sides.', price: '$72' },
        ],
      },
      'Soups & Salads': {
        intro: 'Lighter plates, house dressings, and the lemon soup guests keep naming.',
        items: [
          { name: 'Chicken Avgolemono', description: 'Tender chicken and rice in a light, creamy lemon and egg broth.', price: '$6 / $9' },
          { name: "Addison's Wedge", description: 'Iceberg, Applewood-smoked bacon, grape tomatoes, blue cheese, onion straws, and ranch.', price: '$15' },
          { name: 'Cobb', description: 'Mixed greens, grilled chicken, avocado, corn, tomatoes, cucumber, bacon, egg, and blue cheese.', price: '$17' },
          { name: 'Mixed Berry Spinach', description: 'Spinach, berries, dried cranberries, gorgonzola, carrots, candied pecans, and raspberry vinaigrette.', price: '$16' },
          { name: 'Ultimate Steak', description: 'Mixed greens with marinated sirloin, avocado, tomatoes, peppers, blue cheese, pecans, and onion straws.', price: '$22' },
          { name: 'Caesar', description: 'Romaine, Applewood-smoked bacon, Parmesan, croutons, and creamy Caesar dressing.', price: '$15' },
          { name: 'Grilled Salmon & Avocado', description: 'Greens, chargrilled salmon, avocado, cucumber, carrot, tomato, gorgonzola, and lime-cilantro vinaigrette.', price: '$23' },
        ],
      },
      'Burgers & Sides': {
        intro: 'Lunch-friendly steakhouse plates and the sides regulars build around.',
        items: [
          { name: 'BBQ Bacon Classic', description: "Addison's burger blend with BBQ sauce, Applewood-smoked bacon, cheddar, and onion straws.", price: '$17' },
          { name: 'Smoked Gouda Burger', description: 'Imported Gouda, caramelized onions, bacon, sweet sriracha BBQ sauce, tomato, and greens.', price: '$18' },
          { name: 'Classic Burger', description: 'Half-pound burger with lettuce, tomato, and onion on brioche.', price: '$15' },
          { name: 'Lobster Roll', description: 'Butter-poached langostino lobster with lemon butter and lemon-chive mayo.', price: '$22' },
          { name: 'NY Strip Sandwich', description: 'Charbroiled strip steak, caramelized onions, mushrooms, provolone, and garlic-butter French roll.', price: '$22' },
          { name: 'Turkey Bacon Club', description: 'Turkey, Applewood-smoked bacon, avocado, lettuce, tomato, and bacon-honey mustard.', price: '$17' },
          { name: 'Loaded Sides', description: 'Garlic mashed potatoes, asparagus, creamed spinach, green beans, Brussels sprouts, rice pilaf, and more.', price: 'Included' },
        ],
      },
      'Drinks & Specials': {
        intro: 'The bar gives Addison’s a second gear after dinner.',
        items: [
          { name: 'Signature Martinis', description: 'House martinis, including guest-loved chocolate martinis and rotating specials.', price: 'Ask' },
          { name: 'Perfect Game Margarita', description: 'Part of the Wednesday drink-special rotation.', price: '$2 off' },
          { name: 'Wednesday Starters', description: 'A midweek reason to start with scallops, rangoons, sliders, or charcuterie.', price: '$4 off' },
          { name: 'Half-Off Wine Bottles', description: 'Wednesday bottle special, up to a $20 max value.', price: '1/2 off' },
          { name: 'Surf & Turf Thursday', description: '8oz New York strip and 7oz lobster tail with two sides and soup or salad.', price: '$45' },
          { name: 'Seafood Friday', description: 'Rotating fresh fish and seafood specials from the kitchen.', price: 'Call' },
          { name: 'Saturday Prime Rib', description: 'House-made au jus, choice of two sides, and soup or salad.', price: '$38 / $46' },
        ],
      },
    },
    disclosure:
      'Menu items and specials can change. Please call the restaurant for current seafood features, dietary accommodations, and large-party planning.',
    partners: {
      eyebrow: 'Kitchen Notes',
      heading: { upright: 'Cooked to', italic: 'Order' } as DisplayHeadingContent,
      list: ['Scratch kitchen', 'Fresh steakhouse cuts', 'Seafood features', 'House cocktails', 'Sports bar'],
    },
  },

  about: {
    pageTitle: { upright: "The Addison's", italic: 'Story', layout: 'stacked' } as DisplayHeadingContent,
    pageImage:
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=2200&q=85',
    manifesto:
      "Since opening in McHenry, Addison's has stayed close to the same promise: scratch cooking, steaks and seafood, careful cocktails, and a room where regulars feel recognized.",
    chef: {
      name: 'Michael Borlek',
      role: 'Chef',
      portrait:
        'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=1000&q=85',
      bio:
        "Chef Michael Borlek's standard is simple: fresh, never-frozen meat and produce, cooked from scratch when the order hits the kitchen.",
    },
    storyHeading: { upright: 'Family-Owned', italic: 'McHenry' } as DisplayHeadingContent,
    timeline: [
      {
        phase: 'Named for Family',
        body: "Addison's was named after the Descher family's daughter, with the restaurant built around a small, family-owned first venture.",
      },
      {
        phase: 'Steaks, Chops & Seafood',
        body: 'The opening promise was clear: chops, steaks, seafood, craft beer, wine, reservations, walk-ins, and a bar room with its own energy.',
      },
      {
        phase: 'From Scratch',
        body: 'The house line has stayed consistent: nothing out of cans, every meal cooked to order, and quality fixed before it reaches the table.',
      },
      {
        phase: 'Regulars by Name',
        body: 'Reviews remember the people: chef, bartender, servers, owners, and a hospitality team that turns date nights and family parties into repeat visits.',
      },
    ],
    partners: {
      eyebrow: 'What to Keep',
      heading: { upright: 'The Real', italic: 'Signals' } as DisplayHeadingContent,
      list: [
        { name: 'Phone Reservations', description: 'Keep the familiar call path, but make it tappable and obvious on mobile.' },
        { name: 'The Bar Room', description: 'Surface cocktails, martinis, sports nights, and after-dinner hanging without letting it swallow the steakhouse.' },
        { name: 'Occasions', description: 'Make anniversaries, birthdays, memorial lunches, and larger groups feel planned for.' },
        { name: 'Chef Proof', description: 'Put Chef Michael and the from-scratch standard where guests can see it before reading the full menu.' },
        { name: 'Seasonal Specials', description: 'Replace one-off holiday nav tabs with a controlled specials module.' },
        { name: 'Local Trust', description: 'Use McHenry roots and press/community proof instead of invented award language.' },
      ],
    },
    cta: {
      eyebrow: 'Ready to Dine?',
      heading: { upright: 'Call for', italic: 'Tonight' } as DisplayHeadingContent,
      primary: { label: 'Call to Reserve', href: 'tel:+18153222546' },
      secondary: { label: 'View Menu', href: '/menu' },
    },
  },

  contact: {
    pageTitle: { upright: 'Visit &', italic: 'Reservations', layout: 'stacked' } as DisplayHeadingContent,
    pageImage:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85',
    findUs: {
      eyebrow: 'Visit Us',
      heading: { upright: 'Come', italic: 'find us.' } as DisplayHeadingContent,
    },
    reserve: {
      eyebrow: 'Phone Reservations',
      heading: 'Call to Reserve',
      body:
        'Addison’s currently handles reservations by phone. The rebuild keeps that path one tap away on mobile and gives larger parties a clear handoff.',
      cta: { label: 'Call (815) 322-2546', href: 'tel:+18153222546' },
    },
    goodToKnow: {
      eyebrow: 'Good to Know',
      items: [
        'Monday closed',
        'Dinner served Tuesday through Sunday',
        'Reservations recommended for larger groups',
        'Outdoor patio noted by guests',
        'Sports bar room and Sunday football specials',
        'Call for current seafood features and private-party timing',
      ],
    },
    bottomQuote: {
      image:
        'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=2200&q=85',
      quote: 'We want customers to feel like they are part of the family.',
    },
  },
} as const;

export type SiteContent = typeof content;
