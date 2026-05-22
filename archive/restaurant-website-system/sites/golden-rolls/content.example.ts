// Golden Rolls — Bamzi fork content
// Sources: audit.md, current-site browser evidence, full-menu scrape, Google Highest 30 packet (2026-05-05).

export const content = {
  brand: {
    name: 'Golden Rolls',
    tagline: 'Fresh sushi, generous rolls, calm Woodstock dining',
    description:
      'Golden Rolls is a Woodstock Japanese bistro with fresh sushi, generous rolls, teriyaki, noodles, delivery, and a calm hidden-gem dining room.',
    since: 'Woodstock Japanese bistro',
    address: '790 S Eastwood Dr, Woodstock, IL 60098',
    phone: '(815) 308-5099',
    email: '',
    instagram: 'Golden Rolls',
    social: [
      { label: 'Website', href: 'https://goldenrollssushi.com/' },
      { label: 'Facebook', href: 'https://www.facebook.com/GoldenRollsSushi' },
      { label: 'Directions', href: 'https://www.google.com/maps/search/Golden+Rolls+790+S+Eastwood+Dr+Woodstock+IL' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '11:00', close: '21:30' },
        { day: 3 as const, open: '11:00', close: '21:30' },
        { day: 4 as const, open: '11:00', close: '21:30' },
        { day: 5 as const, open: '11:00', close: '22:00' },
        { day: 6 as const, open: '14:00', close: '22:00' },
        { day: 0 as const, open: '14:00', close: '21:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.3075829, lng: -88.4317878 },
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    dropdown: {
      label: 'Explore',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Menu', href: '/menu' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    cta: { label: 'Call to order', href: 'tel:+18153085099' },
  },

  hero: {
    eyebrow: 'Woodstock sushi · dine-in · takeout · delivery',
    title: 'Do not let the outside fool you.',
    subtitle:
      'Inside Golden Rolls: fresh generous sushi, creative rolls, a surprisingly polished dining room, and kind service at 790 S Eastwood Dr.',
    cta: { label: 'Call (815) 308-5099', href: 'tel:+18153085099' },
    plateImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1400&q=80',
    plateAlt: 'Fresh sushi rolls plated for dinner',
  },

  mission: {
    eyebrow: 'Hidden gem proof',
    title: 'Fresh rolls, quiet dining room, generous portions.',
    body:
      'Golden Rolls has the review proof of a local favorite: guests come back for big rolls, fresh fish, attentive service, and an interior that feels far better than the strip-center first impression.',
    cta: { label: 'View the menu', href: '/menu' },
    phone: '(815) 308-5099',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sushi chef preparing fresh rolls',
  },

  categoryStrip: {
    eyebrow: 'What guests order',
    title: 'Creative rolls, Japanese entrées, and fresh sushi for the whole table.',
    categories: [
      { label: 'Special Rolls', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80' },
      { label: 'Sushi & Sashimi', image: 'https://images.unsplash.com/photo-1617196701537-7329482cc9fe?auto=format&fit=crop&w=600&q=80' },
      { label: 'Teriyaki & Noodles', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80' },
    ],
  },

  bigHeadline: 'A calm Japanese bistro hiding behind a too-quiet web presence.',

  featured: [
    {
      eyebrow: 'Signature rolls',
      side: 'left' as const,
      image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Assorted sushi rolls',
      items: [
        { name: 'Godzilla Roll', desc: 'Tempura shrimp, avocado, cucumber, cream cheese, masago, crunch, spicy mayo, sriracha, wasabi sauce.', price: '$22' },
        { name: 'Mini Godzilla', desc: 'The guest-named favorite in a smaller format.', price: '$15' },
        { name: 'Crab Rangoon Roll', desc: 'King crab, cream cheese, masago, green onions, eel sauce, and sriracha.', price: '$27' },
        { name: 'Dragon Roll', desc: 'Shrimp tempura and cucumber topped with eel, avocado, and teriyaki.', price: '$19' },
      ],
    },
    {
      eyebrow: 'Kitchen favorites',
      side: 'right' as const,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Japanese entrée with vegetables',
      items: [
        { name: 'Tempura Shrimp & Vegetables Dinner', desc: 'Shrimp, sweet potato, broccoli, onion, asparagus, and noodles.', price: '$22' },
        { name: 'Beef Roll', desc: 'Beef-wrapped asparagus with sesame and teriyaki.', price: '$18' },
        { name: 'Ahi Peppercorn Tuna', desc: 'Seared peppercorn tuna with garlic cream sauce and tangy spicy sauce.', price: '$34' },
        { name: 'Gyoza Beef', desc: 'Fried beef dumplings with a crisp bite.', price: '$14' }
      ],
    },
  ],

  testimonial: {
    eyebrow: 'From Google reviews',
    quote:
      '“Do not let the outside scare you away. The inside was extremely nice and the food and service was perfect.”',
    attribution: { role: 'Google review, Highest rating packet', name: 'Brian D' },
    chefImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=80',
    chefAlt: 'Warm restaurant hospitality portrait',
  },

  blog: {
    eyebrow: 'Golden Rolls notes',
    title: 'Why the new site sells what guests already know',
    posts: [
      { id: 'hidden-gem', date: 'Google proof', title: 'Guests keep saying the interior is better than the outside suggests.', image: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=800&q=80', href: '/about' },
      { id: 'big-rolls', date: 'Menu proof', title: 'Fresh rolls, generous fish, and creative specials deserve clear menu structure.', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80', href: '/menu' },
      { id: 'takeout', date: 'Conversion proof', title: 'Dine-in, takeout, and delivery should be one-tap from mobile.', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80', href: 'tel:+18153085099' },
      { id: 'service', date: 'Review proof', title: 'Friendly service and careful packaging are part of the brand.', image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80', href: '/contact' },
    ],
  },

  timelessFooter: {
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=1600&q=80',
    title: 'Woodstock sushi made easy.',
  },

  about: {
    hero: { title: 'Woodstock’s hidden sushi room', subtitle: 'Golden Rolls at 790 S Eastwood Dr.' },
    immerse: {
      eyebrow: 'Why guests come back',
      title: 'A local Japanese bistro with fresh sushi and a quieter room than the outside suggests.',
      body:
        'Golden Rolls is known for generous fresh sushi, creative rolls, hot Japanese entrées, attentive service, and a surprisingly calm dining room in Woodstock.',
      statBig: '4.6',
      statLabel: 'Google rating at review capture',
      chefImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=600&q=80',
      chefName: 'Golden Rolls',
      chefRole: 'Woodstock, Illinois',
    },
    journey: {
      eyebrow: 'Proof points',
      title: 'Fresh rolls, hot entrées, and easy ordering for dine-in or takeout.',
      body: 'Golden Rolls is a polished local sushi bistro with real menu breadth, review-backed generosity, and practical dine-in, takeout, and delivery handoffs.',
      milestones: [
        { year: '4.6', title: '348 Google reviews', body: 'Highest-filter packet captured 30 written reviews in Chrome.', tag: null },
        { year: '4.7', title: 'Restaurantji proof', body: 'Restaurantji showed 4.7 from 187 ratings with sushi and Japanese categories.', tag: null },
        { year: '790', title: 'S Eastwood Dr', body: 'Dine-in, takeout, delivery, and a bistro/bar identity in Woodstock.', tag: null },
        { year: 'Bamzi', title: 'Template route', body: 'Moody/cinematic sushi-bistro structure, personalized to stay casual-local.', tag: null },
      ],
    },
    hours: {
      eyebrow: 'Hours & ordering',
      title: 'Call ahead, pick up, or settle into the calm dining room.',
      times: [
        { day: 'Monday', time: 'Closed' },
        { day: 'Tuesday – Thursday', time: '11:00 AM – 9:30 PM' },
        { day: 'Friday', time: '11:00 AM – 10:00 PM' },
        { day: 'Saturday', time: '2:00 PM – 10:00 PM' },
        { day: 'Sunday', time: '2:00 PM – 9:00 PM' },
      ],
      cta: { label: 'Call Golden Rolls', href: 'tel:+18153085099' },
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    },
    chefs: {
      eyebrow: 'Guest language',
      title: 'What reviews actually say',
      team: [
        { name: 'Fresh and generous', role: '“More fish than rice” / “rolls as BIG as they were here”', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Inside surprise', role: '“Don’t let the outside fool you” / “inside is lovely”', image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=600&q=80' },
        { name: 'Kind service', role: 'Friendly, attentive, helpful, and delivery-aware.', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80' },
      ],
    },
    values: {
      eyebrow: 'What to expect',
      title: 'Freshness, generosity, and easy ordering carry the experience.',
      items: [
        { title: 'Fresh sushi', body: 'Creative rolls, nigiri, sashimi, and cooked options for mixed groups.' },
        { title: 'Menu clarity', body: 'Special rolls, hot appetizers, entrées, noodles, fried rice, and sushi are easy to scan.' },
        { title: 'One-tap actions', body: 'Phone, directions, hours, takeout, and delivery information stay close at hand.' },
      ],
    },
  },

  menuPage: {
    hero: { title: 'Golden Rolls menu', subtitle: 'Fresh sushi, special rolls, teriyaki, noodles, fried rice, and Japanese entrées.' },
    categories: [
      {
        eyebrow: 'Special rolls',
        title: 'Creative rolls and house favorites',
        items: [
          { name: 'Godzilla', desc: 'Tempura shrimp, avocado, cucumber, cream cheese, masago, crunch, spicy mayo, sriracha, wasabi sauce.', price: '$22' },
          { name: 'Mini Godzilla', desc: 'A smaller version of the review-backed favorite.', price: '$15' },
          { name: 'Crab Rangoon Roll', desc: 'King crab, cream cheese, masago, green onions, eel sauce, sriracha.', price: '$27' },
          { name: 'Rainbow', desc: 'Crab, cucumber, avocado, masago, tuna, sea bass, salmon.', price: '$20' },
        ],
      },
      {
        eyebrow: 'Hot appetizers',
        title: 'Hot starters and table snacks',
        items: [
          { name: 'Gyoza Beef', desc: 'Fried beef dumplings.', price: '$14' },
          { name: 'Golden Shrimp', desc: 'Shrimp on rice topped with golden sauce.', price: '$14' },
          { name: 'Crab Cakes', desc: 'Fried crab cakes with garlic cream sauce and watercress salad.', price: '$16' },
          { name: 'Beef Roll', desc: 'Beef-wrapped asparagus with sesame and teriyaki.', price: '$18' },
        ],
      },
      {
        eyebrow: 'Entrées',
        title: 'Teriyaki, tempura, steak, seafood',
        items: [
          { name: 'Teriyaki Chicken', desc: 'Chicken breast, teriyaki, watercress salad, grilled vegetables.', price: '$21' },
          { name: 'Tempura Shrimp & Vegetables Dinner', desc: 'Shrimp, sweet potato, broccoli, onion, asparagus, noodles.', price: '$22' },
          { name: 'Ahi Peppercorn Tuna', desc: 'Seared peppercorn tuna with garlic cream sauce and tangy spicy sauce.', price: '$34' },
          { name: 'New York Steak & Golden Lobster', desc: 'Steak, lobster tail, golden sauce, grilled vegetables.', price: '$49' },
        ],
      },
      {
        eyebrow: 'Rolls & sushi',
        title: 'Fresh, generous, and easy to scan',
        items: [
          { name: 'California', desc: 'Crab, avocado, cucumber.', price: '$7' },
          { name: 'Spider', desc: 'Soft shell crab, avocado, cucumber, masago.', price: '$14' },
          { name: 'Crazy', desc: 'Tuna, salmon, sea bass, yellowtail, shrimp, imitation crab, cucumber, avocado.', price: '$16' },
          { name: 'Nigiri Combo', desc: "Chef’s choice of today’s fresh fish with miso soup.", price: '$35' },
        ],
      },
    ],
    testimonials: {
      eyebrow: 'Reviews',
      title: 'Highly rated on Google',
      entries: [
        { stars: 5, quote: 'Fresh ingredients. Even ordering from other places in McHenry County, we continue to come back to Golden Rolls.', name: 'Michael B.', role: 'Google review', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { stars: 5, quote: 'Rolls as BIG as they were here… excellent service, spotless, and very nice inside.', name: 'Kristina B.', role: 'Google review', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
      ],
    },
    reservation: {
      eyebrow: 'Order or visit',
      title: 'Call Golden Rolls for takeout, delivery, current prices, or dine-in timing.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
    },
  },

  newsPage: {
    hero: { title: 'Golden Rolls notes', subtitle: 'Review proof, menu structure, and the hidden-gem dining room.' },
  },

  contactPage: {
    hero: { title: 'Visit Golden Rolls', subtitle: '790 S Eastwood Dr, Woodstock, IL 60098 · (815) 308-5099' },
    photos: [
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=900&q=80',
    ],
    headline: {
      eyebrow: 'Contact',
      title: 'Call ahead for takeout, delivery, or a quiet dine-in table.',
      body: 'Hours and online menus can change. Call Golden Rolls directly for current availability, specials, and ordering questions.',
    },
    infoCards: [
      { icon: 'phone', label: 'Call Golden Rolls', lines: ['(815) 308-5099', 'Takeout, delivery, and dine-in questions'] },
      { icon: 'map', label: 'Our location', lines: ['790 S Eastwood Dr', 'Woodstock, IL 60098'] },
    ],
    map: {
      eyebrow: 'Directions',
      title: 'Find Golden Rolls in Woodstock.',
      body: 'Dine-in, takeout, and delivery are available according to current Google and directory evidence.',
      embedUrl: 'https://www.google.com/maps?q=Golden%20Rolls%20790%20S%20Eastwood%20Dr%20Woodstock%20IL&output=embed',
    },
    form: {
      eyebrow: 'Quick note',
      title: 'Ask about today’s availability, delivery, or specials.',
    },
  },
};
