// content.example.ts — velvet-shaker-01
//
// Demo content for the Velvet Shaker recreation. Fork this file per project
// and swap per §12 of the audit (most of the schema is safe to swap;
// photography grading + palette + type discipline are locked).
//
// Founding-year reconciliation: audit flagged a 1972 (about-stats) vs 2022
// (home copy) mismatch in the source. We pick 2022 — "modern cocktail bar"
// positioning. The MixologistGrid stat tile uses "Est. 2022" instead of the
// raw number; FourNumberStats on /about keeps 2022 as the founding year.

export const content = {
  brand: {
    name: 'Velvet Shaker',
    tagline: 'Cocktail bar located in Hong Kong',
    description:
      "A modern cocktail bar in the heart of Hong Kong — sensory drinks, modern design, global influences. Open nightly in Central.",
    city: 'Hong Kong',
  },

  nav: {
    // Lowercase labels. Non-sticky. No book CTA. "Others" marketplace dropdown removed per audit.
    links: [
      { label: 'home',    href: '/' },
      { label: 'about',   href: '/about' },
      { label: 'contact', href: '/contact' },
      { label: 'menu',    href: '/menu' },
      { label: 'faq',     href: '/contact#faq' },
    ],
  },

  home: {
    heroEyebrow: '— a modern cocktail bar —',
    heroH1: 'Cocktail bar located in Hong Kong',
    heroSub: 'Central · Lan Kwai Fong · Open nightly from 18:00',
    cocktailPhotoRow: [
      { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80', alt: 'Amber cocktail in coupe glass' },
      { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80', alt: 'Cocktail with citrus peel' },
      { src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=1200&q=80', alt: 'Stirred cocktail close-up' },
      { src: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=1200&q=80', alt: 'Cocktail garnished with herbs' },
    ],
    editorialParagraph:
      "Nestled in the heart of Hong Kong, Velvet Shaker is more than just a bar — it's a sensory journey. Inspired by the city's vibrant energy and global influences, this upscale cocktail haven combines sleek modern design with a cozy, intimate atmosphere.",
    galleryLink: { label: 'see gallery', href: '/#gallery' },

    asymmetricGallery: {
      left:  { src: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=900&q=80',  alt: 'Cocktail on bar, portrait',  aspect: 'portrait' as const },
      right: { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1400&q=80', alt: 'Warm bar interior, landscape', aspect: 'landscape' as const },
    },

    // No-price named list (home variant). Prices reserved for /menu.
    cocktailsNoPrice: [
      { name: 'Peach Blossom',  desc: 'gin, peach liqueur, lemon, white peach' },
      { name: 'Lavender Mist',  desc: 'vodka, lavender, honey, citrus, soda' },
      { name: 'Mint Cloud',     desc: 'white rum, mint, lime, cucumber, tonic' },
      { name: 'Blue Lagoon',    desc: 'vodka, blue curaçao, lemon, sparkling' },
      { name: 'Rose Garden',    desc: 'gin, rose, grapefruit, elderflower' },
      { name: 'Lemon Velvet',   desc: 'tequila, yuzu, agave, salt foam' },
    ],

    numberedEyebrow: { number: '03', label: 'OCCASIONS' },
    occasionLabel: 'Romantic',

    brandStory: {
      paragraph:
        "Velvet Shaker began its journey in 2022, inspired by the vibrant nightlife of Hong Kong and a passion for innovative mixology. What started as a small dream has become a destination for design-literate drinkers looking for a quieter, more deliberate bar.",
      thumbnails: [
        { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80', alt: 'Cocktail close-up' },
        { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80', alt: 'Amber drink' },
        { src: 'https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=600&q=80', alt: 'Bar lighting' },
      ],
    },

    events: {
      label: "Check what's happening",
      items: [
        { src: 'https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=1000&q=80', alt: 'Guest bartender night',  caption: 'Guest bartender · May 12' },
        { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1000&q=80', alt: 'Natural wine tasting',   caption: 'Natural wine tasting · May 19' },
        { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1000&q=80', alt: 'Late-night DJ set',      caption: 'Late-night DJ set · May 24' },
      ],
    },
  },

  menu: {
    h1: 'Cocktails',
    photoStrip: [
      { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80',  alt: 'Amber cocktail' },
      { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', alt: 'Citrus cocktail' },
      { src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80', alt: 'Stirred cocktail' },
      { src: 'https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=800&q=80', alt: 'Herb-garnished cocktail' },
    ],
    categories: [
      {
        title: 'Cocktails',
        items: [
          { name: 'Peach Blossom',  desc: 'gin, peach liqueur, lemon, white peach',        price: '$32' },
          { name: 'Lavender Mist',  desc: 'vodka, lavender, honey, citrus, soda',          price: '$28' },
          { name: 'Mint Cloud',     desc: 'white rum, mint, lime, cucumber, tonic',        price: '$30' },
          { name: 'Rose Garden',    desc: 'gin, rose, grapefruit, elderflower',            price: '$35' },
          { name: 'Blue Lagoon',    desc: 'vodka, blue curaçao, lemon, sparkling',         price: '$40' },
          { name: 'Lemon Velvet',   desc: 'tequila, yuzu, agave, salt foam',               price: '$30' },
          { name: 'Sunset Spritz',  desc: 'aperol, prosecco, soda, grapefruit',            price: '$35' },
          { name: 'Crimson Kiss',   desc: 'mezcal, hibiscus, lime, chili salt',            price: '$33' },
        ],
      },
      {
        title: 'Wines',
        items: [
          { name: 'Chardonnay Bliss',        desc: 'Sonoma, 2021 · buttery, oak',                price: '$70' },
          { name: 'Golden Sauvignon Blanc',  desc: 'Marlborough, 2022 · bright, grassy',         price: '$70' },
          { name: 'Royal Harmony',           desc: 'Rhône, 2020 · red blend',                    price: '$75' },
          { name: 'Sparkling Brut',          desc: 'Champagne, NV · crisp, dry',                 price: '$55' },
          { name: 'Classic Merlot',          desc: 'Napa, 2019 · plum, cocoa',                   price: '$60' },
          { name: 'Reverse Malbec',          desc: 'Mendoza, 2021 · dark fruit, smoke',          price: '$40' },
        ],
      },
      {
        title: 'Snacks',
        items: [
          { name: 'Truffle Fries',       desc: 'truffle oil, parmesan, herbs',              price: '$18' },
          { name: 'Spicy Edamame',       desc: 'sea salt, chili flakes',                    price: '$15' },
          { name: 'Cheese Platter',      desc: 'three cheeses, house crackers',             price: '$28' },
          { name: 'Shrimp Tempura',      desc: 'yuzu aioli, chive',                         price: '$34' },
          { name: 'Mini Sliders',        desc: 'wagyu, pickled onion, brioche',             price: '$32' },
          { name: 'Stuffed Olives',      desc: 'castelvetrano, anchovy, lemon',             price: '$14' },
          { name: 'Charcuterie Board',   desc: 'cured meats, pickles, mustard',             price: '$30' },
          { name: 'Grace Anatomy',       desc: 'chef tasting plate',                        price: '$27' },
        ],
      },
    ],
    cantFind: {
      heading: "Can't find your drink?",
      body: 'Ask our mixologists and the whatever-you-like menu appears. We riff on classics and build to taste.',
      linkLabel: 'see message',
      linkHref: '/contact',
      photos: [
        { src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80',  alt: 'Mixologist pouring drink' },
        { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', alt: 'Cocktail in progress' },
      ],
    },
  },

  about: {
    h1Part1: 'Longest running cocktail bar in',
    h1Part2: 'Hong Kong',
    stats: [
      { value: '2022',  label: 'Founded' },
      { value: '99.9%', label: 'Guest satisfaction' },
      { value: '20+',   label: 'Signature cocktails' },
      { value: '1',     label: 'Location' },
    ],
    story:
      "In the beating street of Lan Kwai Fong, in 2022, Velvet Shaker welcomes its first guests. Built around a short bar and a shorter menu, the room is equally informed by Hong Kong's modernist architecture and the late-night cafés of Tokyo.",
    aboutGallery: [
      { src: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=1000&q=80',  alt: 'Cocktail on bar' },
      { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80',  alt: 'Warm bar interior' },
    ],
    mixologistsHeading: 'Meet the most skilled mixologists in town',
    mixologists: [
      { name: 'Jane Lau',    role: 'Head Mixologist', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
      { name: 'Marco Lee',   role: 'Bar Manager',     src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80' },
      { name: 'Sarah Wong',  role: 'Wine tasting',    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80' },
      { name: 'Ravi Kapoor', role: 'Spirits curator', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80' },
      { name: 'Mei Chan',    role: 'Sommelier',       src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80' },
      { name: 'Adam Park',   role: 'Low-ABV lead',    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80' },
    ],
  },

  contact: {
    eyebrow: '(booking and contact)',
    h1: 'Join us in Hong Kong',
    bookNow: {
      heading: 'Book now',
      viaEmail: { label: 'Via email',    value: 'booking@velvetshaker.com' },
      whatsapp: { label: 'On WhatsApp',  value: '+852 1234 5678' },
    },
    visit: {
      heading: 'Visit us',
      address: [
        'Velvet Shaker',
        '2F, 21 Wyndham Street,',
        'Lan Kwai Fong, Central,',
        'Hong Kong',
      ],
      directionsLink: '#',
      hoursHeading: 'Opening hours',
      hours: ['Mon–Fri 18:00–02:00', 'Sat–Sun 16:00–02:00'],
    },
    socials: {
      heading: 'Socials',
      links: [
        { label: 'Instagram', href: '#' },
        { label: 'X (Chattr)', href: '#' },
        { label: 'Facebook',  href: '#' },
        { label: 'TikTok',    href: '#' },
      ],
    },
    form: {
      heading: 'Fill in the form',
      fields: {
        fullName:      { label: 'Full name',        placeholder: 'Name' },
        email:         { label: 'Email',            placeholder: 'Email' },
        phone:         { label: 'Phone (WhatsApp)', placeholder: 'Phone' },
        website:       { label: 'Website',          placeholder: 'Website' },
        howFound:      { label: 'How did you find us?', placeholder: 'Select' },
        interestLabel: 'What are you interested in?',
        interestOptions: [
          'Booking a table',
          'Organizing an event',
          'Press',
        ],
        message:       { label: 'Tell us more',     placeholder: 'Message' },
      },
      submit: 'Submit',
    },
    interiorStrip: [
      { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1000&q=80', alt: 'Bar interior 1' },
      { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1000&q=80', alt: 'Bar interior 2' },
      { src: 'https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=1000&q=80', alt: 'Bar interior 3' },
      { src: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=1000&q=80', alt: 'Bar interior 4' },
    ],
    faqHeading: 'FAQ',
    faqs: [
      { q: "What are Velvet Shaker's opening hours?",
        a: 'We are open Monday through Friday from 18:00 to 02:00, and Saturday through Sunday from 16:00 to 02:00.' },
      { q: 'Where is Velvet Shaker located?',
        a: 'We are on the second floor of 21 Wyndham Street, Lan Kwai Fong, Central, Hong Kong.' },
      { q: 'Do you take reservations?',
        a: 'Yes — use the form above or email booking@velvetshaker.com. Walk-ins welcome at the bar.' },
      { q: 'What kind of drinks does Velvet Shaker serve?',
        a: 'Signature cocktails, natural wines, zero-proof drinks, and bar snacks.' },
      { q: 'Do you have non-alcoholic drinks?',
        a: 'Yes — a full zero-proof list with the same care as the cocktails.' },
      { q: 'Does Velvet Shaker host private events?',
        a: 'Yes — email us for buyouts and programming.' },
    ],
  },

  footer: {
    visitHeading: 'Visit us',
    contactHeading: 'Contact',
    socialsHeading: 'Socials',
    links: [
      { label: 'home',    href: '/' },
      { label: 'about',   href: '/about' },
      { label: 'contact', href: '/contact' },
      { label: 'menu',    href: '/menu' },
      { label: 'faq',     href: '/contact#faq' },
    ],
    colophon: '© Velvet Shaker. Recreation — template demo.',
  },
} as const;

export type Content = typeof content;
