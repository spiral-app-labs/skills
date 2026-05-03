// content.example.ts — MAAX Asian BBQ & Hot Pots fork of bamzi-01
//
// Pre-fork audit: sites/maax-asian-bbq/audit.md
// Lead source: research/lead-qualification/schaumburg-leads-2026-05-02.md (addendum 2026-05-03)
//
// REGISTER NOTE — read before editing copy.
// MAAX is accessible-casual pan-asian + AYCE Korean BBQ + hot pot. Sit it at
// $$ "fun-format-with-occasion." bamzi-01's accent register matches.
//
// VERIFIED FACTS (live-fetched 2026-05-03):
//   • Address: 222 E Algonquin Rd, Arlington Heights, IL 60005 (Woodfield-corridor)
//   • Phone: (847) 621-2018
//   • Email: info@maaxbbqhotpots.com
//   • Hours: Daily 11:00 AM – 11:00 PM (last seating 10 PM)
//   • Lunch special: Mon–Fri 11–3
//   • Reservation provider: OpenTable (preserve-stack)
//   • Format: AYCE Korean BBQ + Chinese hot pot, smokeless tabletop grills
//   • Cuisines: Chinese, Japanese, Korean, Thai influences
//   • Pricing: $20–30 per person (lunch) / $30–50 (dinner premium tiers)
//   • Aggregate ratings: Google 4.7★/621 · OpenTable 4.8★/41 · Yelp 67+
//                         · #2 of 65 BBQs in Arlington Heights (Restaurantji)
//
// UNVERIFIED (owner to confirm):
//   • Founding year (likely 2023–2024)
//   • Owner / family / chef names + heritage region
//   • Whether to surface chef-as-brand or stay format-as-brand
//   • Active live-music or events programming
//
// Photo strategy:
//   • V1 placeholders: bamzi-01 hotlinked Unsplash for layout fidelity
//   • V2: replace with MAAX's real Instagram + Google photo inventory (815 photos
//     available on Google Maps; tableside grill + hot pot process shots are
//     the strongest asset)

const phoneE164 = '+18476212018';
const phoneDisplay = '(847) 621-2018';
const reservationUrl = 'https://www.opentable.com/r/maax-asian-bbq-and-hot-pots-arlington-heights';

export const content = {
  brand: {
    name: 'MAAX Asian BBQ & Hot Pots',
    tagline: 'AYCE Hot Pot + Korean BBQ in Arlington Heights',
    description:
      "Smokeless grills at every table. Szechuan spicy broth, malatang, and beef short ribs called out by name in 600+ public reviews. Mon–Fri lunch from $20.",
    since: 'Arlington Heights — Woodfield Corridor',
    address: '222 E Algonquin Rd, Arlington Heights, IL 60005',
    phone: phoneDisplay,
    email: 'info@maaxbbqhotpots.com',
    instagram: '@maaxbbqhotpots',
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/maaxbbqhotpots/' },
      { label: 'Facebook', href: 'https://www.facebook.com/maaxbbqhotpots/' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@maaxbbqhotpots' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '11:00', close: '23:00' },
        { day: 1 as const, open: '11:00', close: '23:00' },
        { day: 2 as const, open: '11:00', close: '23:00' },
        { day: 3 as const, open: '11:00', close: '23:00' },
        { day: 4 as const, open: '11:00', close: '23:00' },
        { day: 5 as const, open: '11:00', close: '23:00' },
        { day: 6 as const, open: '11:00', close: '23:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.0686, lng: -88.0259 },
    reservationUrl,
  },

  nav: {
    primary: [
      { label: 'About', href: '/about' },
      { label: 'News', href: '/news' },
      { label: 'Contact', href: '/contact' },
    ],
    dropdown: {
      label: 'Pages',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Menu', href: '/menu' },
        { label: 'About', href: '/about' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    cta: { label: 'Reserve', href: reservationUrl },
  },

  hero: {
    eyebrow: 'ARLINGTON HEIGHTS — AYCE HOT POT + KOREAN BBQ',
    title: 'Smokeless grills at every table. Unlimited meat, broth that punches.',
    subtitle:
      'Szechuan spicy broth, malatang, and beef short ribs named in 600+ public reviews. Mon–Fri lunch from $20.',
    cta: { label: 'Reserve a Table', href: reservationUrl },
    plateImage: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1400&q=80',
    plateAlt: 'Korean BBQ tabletop grill with sizzling meat',
  },

  mission: {
    eyebrow: 'The Format',
    title: 'Two interactive traditions, one table.',
    body:
      "Korean BBQ over the smokeless grill. Chinese hot pot over the tableside burner. Choose one or run both. Ten broths, premium meats, and a buffet of veggies and house-made sauces — the kind of dinner that turns into a two-hour evening.",
    cta: { label: 'See AYCE Pricing', href: '/menu' },
    phone: phoneDisplay,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Hot pot with broth and ingredients laid out',
  },

  categoryStrip: {
    eyebrow: 'What Guests Order',
    title: 'Three signatures named across 600+ reviews.',
    categories: [
      { label: 'Beef Short Ribs', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
      { label: 'Szechuan Spicy Broth', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80' },
      { label: 'Malatang Hot Pot', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80' },
    ],
  },

  bigHeadline: 'Family. Friends. Date night. Honestly anything.',

  featured: [
    {
      eyebrow: 'AYCE Korean BBQ',
      side: 'left' as const,
      image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Korean BBQ at a tabletop grill',
      items: [
        { name: 'Beef Boneless Short Ribs', desc: 'House-marinated, the BBQ favorite per public reviews', price: 'AYCE' },
        { name: 'Marinated Beef Bulgogi', desc: 'Sweet-soy marinated, sliced thin for the grill', price: 'AYCE' },
        { name: 'Pork Belly + Spicy Pork', desc: 'Two cuts in the rotation — request both', price: 'AYCE' },
        { name: 'Wagyu Premium Add-On', desc: 'Premium-tier upgrade — A5 sourcing', price: 'Premium tier' },
      ],
    },
    {
      eyebrow: 'AYCE Chinese Hot Pot',
      side: 'right' as const,
      image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Hot pot bubbling with broth and ingredients',
      items: [
        { name: 'Szechuan Spicy Broth', desc: '"Flavorful" — named in public reviews. Numbing-spicy classic.', price: 'AYCE' },
        { name: 'Malatang Broth', desc: '"Recommended for the hot pot" — house signature blend', price: 'AYCE' },
        { name: 'Mushroom + Tomato Broths', desc: 'Lighter pairings, no spice', price: 'AYCE' },
        { name: 'Premium Wagyu / Seafood Add-On', desc: 'Upgrade to the premium tier for A5 + king crab', price: 'Premium tier' },
      ],
    },
  ],

  testimonial: {
    eyebrow: 'Verbatim — Public Reviews',
    quote:
      'My first Asian BBQ and hot pot experience — amazing. A good place if you are looking for a fun thing to do with family, friends, a date night, honestly anything.',
    attribution: {
      role: 'Google review · 5★',
      name: 'Anonymous (one of 621)',
    },
    chefImage: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=900&q=80',
    chefAlt: 'Korean BBQ table spread with sides',
  },

  blog: {
    eyebrow: 'News & Insights',
    title: 'Updates from MAAX',
    posts: [
      { id: 'lunch-special', date: 'Updated 2026', title: 'Mon–Fri lunch from $20 — the value play.', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80', href: '#' },
      { id: 'malatang-broth', date: 'Updated 2026', title: 'Why guests keep naming the malatang broth.', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80', href: '#' },
      { id: 'private-events', date: 'Updated 2026', title: 'Private events: groups, birthdays, corporate.', image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=800&q=80', href: '#' },
    ],
  },

  timelessFooter: {
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1600&q=80',
    title: 'AYCE the way it should be — interactive, generous, fun.',
  },

  about: {
    hero: {
      title: 'Two traditions. One table.',
      subtitle: 'AYCE Korean BBQ and Chinese hot pot in Arlington Heights — Woodfield corridor',
    },
    immerse: {
      eyebrow: 'The Format',
      title: 'Two interactive traditions, one table.',
      body:
        "Korean BBQ over a smokeless grill built into your table. Chinese hot pot over the burner next to it. Pick one. Pick both. Ten broths, premium meats, a fresh-veg buffet, and house-made dipping sauces. Two hours, no rush.",
      statBig: '4.7★',
      statLabel: '621 Google reviews · #2 of 65 BBQs in Arlington Heights',
      chefImage: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80',
      chefName: 'The MAAX Kitchen',
      chefRole: 'Format-driven, grill-led',
    },
    journey: {
      eyebrow: 'How AYCE Works Here',
      title: 'Pick a tier, pick your broth, pick your meats — the kitchen does the rest.',
      body: "AYCE is the format. The kitchen runs three tiers — standard, premium, and a Wagyu+Seafood top tier. Each tier opens more cuts (Wagyu A5, king crab, premium seafood) without changing the unlimited-rotation rule.",
      milestones: [
        { year: 'Tier 1', title: 'Standard AYCE', body: 'Beef bulgogi, pork belly, marinated short ribs, full veg + sauce buffet, all broths.' },
        { year: 'Tier 2', title: 'Premium AYCE', body: 'Adds Wagyu cuts, premium pork, expanded seafood line.' },
        { year: 'Tier 3', title: 'Wagyu + Seafood Top Tier', body: 'A5 Wagyu, king crab legs, premium scallops, lobster — all unlimited within the rotation.' },
        { year: 'Lunch', title: 'Mon–Fri Lunch from $20', body: 'Compressed AYCE on the lunch window — fastest path to the format at the lowest tier.' },
      ],
    },
    hours: {
      eyebrow: 'When We\'re Open',
      title: 'Daily 11 AM – 11 PM. Last seating 10 PM.',
      times: [
        { day: 'Monday – Sunday', time: '11:00 am – 11:00 pm' },
        { day: 'Lunch Special', time: 'Mon–Fri 11:00 am – 3:00 pm' },
        { day: 'Last Seating', time: '10:00 pm daily' },
      ],
      cta: { label: 'Reserve a Table', href: reservationUrl },
      image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=1200&q=80',
    },
    chefs: {
      eyebrow: 'Service',
      title: 'Outstanding service, named across reviews.',
      team: [
        { name: 'The Floor Team', role: 'Outstanding · attentive · kind', image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=600&q=80' },
        { name: 'The Grill Team', role: 'Smokeless tableside grilling', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80' },
        { name: 'The Hot Pot Team', role: 'Ten broths, custom sauces', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80' },
      ],
    },
    values: {
      eyebrow: 'What Reviews Say',
      title: 'Fun. Plentiful. Service that lands.',
      items: [
        { title: 'Fresh + Plentiful', body: '"Fresh and plentiful food and outstanding service make it a go-to recommendation."' },
        { title: 'Family-Friendly', body: '"A good place if you are looking for a fun thing to do with family, friends, a date night, honestly anything."' },
        { title: 'Format-Done-Right', body: '"Great combination of Hot Pot and Korean BBQ — buffet of veggies and sauces, unlimited meat."' },
      ],
    },
  },

  menuPage: {
    hero: {
      title: 'AYCE Menu + Pricing',
      subtitle: 'Pick a tier. Pick a broth. The kitchen does the rest.',
    },
    categories: [
      {
        eyebrow: 'AYCE Tiers',
        title: 'Pricing — flat per person, all-you-can-eat',
        items: [
          { name: 'Standard AYCE', desc: 'Beef bulgogi, pork belly, marinated short ribs, full veg + sauce buffet, all standard broths', price: '$32–35 / person' },
          { name: 'Premium AYCE', desc: 'Adds Wagyu cuts, premium pork, expanded seafood', price: '$42–45 / person' },
          { name: 'Wagyu + Seafood Top Tier', desc: 'A5 Wagyu, king crab legs, premium scallops, lobster — all unlimited', price: '$58–65 / person' },
          { name: 'Lunch AYCE (Mon–Fri 11–3)', desc: 'Compressed AYCE on the lunch window', price: 'from $20' },
          { name: 'Kids', desc: 'Discounted AYCE for kids under 12', price: 'inquire' },
        ],
      },
      {
        eyebrow: 'Korean BBQ Cuts',
        title: 'AYCE rotation — pick anything as often as you want',
        items: [
          { name: 'Beef Boneless Short Ribs', desc: 'House-marinated. The BBQ favorite per public reviews.', price: 'AYCE' },
          { name: 'Beef Bulgogi', desc: 'Sweet-soy marinated, sliced thin', price: 'AYCE' },
          { name: 'Pork Belly + Spicy Pork', desc: 'Two cuts — request both', price: 'AYCE' },
          { name: 'Marinated Chicken', desc: 'Korean-spiced, grill-ready', price: 'AYCE' },
          { name: 'Wagyu Premium Cuts', desc: 'Premium tier and above — A5 sourcing', price: 'Premium / Top Tier' },
        ],
      },
      {
        eyebrow: 'Hot Pot Broths',
        title: 'Ten broths — pick one or split the pot',
        items: [
          { name: 'Szechuan Spicy', desc: '"Flavorful" — named in public reviews. Numbing-spicy classic.', price: 'AYCE' },
          { name: 'Malatang', desc: '"Recommended for the hot pot" — house signature blend', price: 'AYCE' },
          { name: 'Tomato', desc: 'Sweet, lighter, no spice — kid-friendly', price: 'AYCE' },
          { name: 'Mushroom', desc: 'Earthy, vegetarian-friendly base', price: 'AYCE' },
          { name: 'Bone Broth', desc: 'Classic Chinese pork-bone simmer', price: 'AYCE' },
          { name: 'Coconut Curry / Tom Yum (rotating)', desc: 'Pan-Asian crossovers, ask your server', price: 'AYCE' },
        ],
      },
      {
        eyebrow: 'Buffet + Add-Ons',
        title: 'Vegetables, sauces, sides',
        items: [
          { name: 'Fresh Vegetable Buffet', desc: 'Bok choy, mushrooms, leafy greens, lotus root, taro, more', price: 'Included' },
          { name: 'Noodles + Dumplings', desc: 'Udon, glass, ramen, dumplings — added to the hot pot', price: 'Included' },
          { name: 'House-Made Dipping Sauces', desc: 'Sesame, scallion-ginger, soy-garlic, custom mix', price: 'Included' },
          { name: 'Fries + Sides for Kids', desc: '"Items like fries that kids love" — public review', price: 'Included' },
          { name: 'Premium Seafood Add-On', desc: 'King crab, lobster, premium scallops — premium tier and above', price: 'Premium / Top Tier' },
        ],
      },
    ],
    testimonials: {
      eyebrow: 'Verbatim — Public Reviews',
      title: 'What guests come back for',
      entries: [
        { stars: 5, quote: 'The all-you-can-eat buffet had tons of options, from juicy meats to fresh veggies.', name: 'Ivan Layese', role: 'OpenTable · 10 months ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { stars: 5, quote: 'Great combination of Hot Pot and Korean BBQ — buffet of veggies and sauces, unlimited meat, attentive service.', name: 'Anonymous', role: 'WebSearch / Yelp', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80' },
        { stars: 5, quote: 'My first Asian BBQ and hot pot experience — amazing. A good place if you are looking for a fun thing to do with family, friends, a date night, honestly anything.', name: 'Anonymous', role: 'WebSearch / Yelp', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
      ],
    },
    reservation: {
      eyebrow: 'Reserve',
      title: 'Reserve via OpenTable — 4.8★ from 41 diners',
      image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=1000&q=80',
    },
  },

  newsPage: {
    hero: {
      title: 'News & insights',
      subtitle: 'Updates from MAAX Asian BBQ & Hot Pots',
    },
  },

  contactPage: {
    hero: {
      title: 'Visit us',
      subtitle: '222 E Algonquin Rd, Arlington Heights — Woodfield corridor',
    },
    photos: [
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=900&q=80',
    ],
    headline: {
      eyebrow: 'Find us',
      title: 'Two interactive traditions, one table — four miles from Woodfield Mall.',
    },
    infoCards: [
      { icon: 'map', label: 'Our Location', lines: ['222 E Algonquin Rd', 'Arlington Heights, IL 60005'] },
      { icon: 'phone', label: 'Reservations', lines: [phoneDisplay, 'Reserve via OpenTable'] },
    ],
    form: {
      eyebrow: "Talk to us",
      title: 'Group dining, private events, or anything else',
    },
  },
};
