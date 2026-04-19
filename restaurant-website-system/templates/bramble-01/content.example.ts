// content.example.ts — bramble-01 placeholder content

export const content = {
  brand: {
    name: 'Bramble',
    wordmark: 'BRAMBLE',
    tagline: 'Restaurant by day, cocktail bar by night',
    description: 'Bramble is a restaurant by day, cocktail bar by night celebrating old skool blues, soul and R&B music.',
    address: '1 Soho St, London W1D 3GT',
    addressShort: '1 SOHO ST LDN W1D 3GT',
    phone: '+44 7546 029851',
    email: 'hello@bramble.com',
    instagram: '@Bramble_W1D',
    instagramUrl: 'https://www.instagram.com/bramble_w1d/',
    menuPdfUrl: '#menus', // replace with real PDF URL when forking
    reservationUrl: '/reserve',
    giftCardUrl: '#gift-cards',
  },

  hero: {
    // Hero slideshow — 4 images cycling. All should be warm-Soho-naturalism,
    // share grading. Daytime and nighttime both fine; must feel like ONE place.
    slides: [
      { src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2000&q=80', alt: 'Behind the bar with speakers and vinyl' },
      { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=2000&q=80', alt: 'Plated food spread on wooden table' },
      { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2000&q=80', alt: 'Cocktails on a bar with bread and olives' },
      { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2000&q=80', alt: 'Warm evening bar interior' },
    ],
  },

  tagline: {
    body: 'Bramble is a restaurant by day, cocktail bar by night celebrating old skool blues, soul and R&B music.',
  },

  // Polaroids — real-looking guest / staff / atmosphere photos, slight rotations.
  polaroids: [
    { src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=600&q=80', alt: 'Group dining',        rotation: -4 },
    { src: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?auto=format&fit=crop&w=600&q=80', alt: 'Bartender pouring',    rotation: 2 },
    { src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=600&q=80', alt: 'Diner with cocktail',     rotation: -2 },
    { src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=600&q=80', alt: 'Mixing behind bar',    rotation: 5 },
    { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80', alt: 'Wine glasses on bar',    rotation: -3 },
    { src: 'https://images.unsplash.com/photo-1485872299712-75e69cf5f0eb?auto=format&fit=crop&w=600&q=80', alt: 'Evening scene',        rotation: 3 },
  ],

  hours: [
    { day: 'Monday',             time: 'Closed' },
    { day: 'Tuesday – Thursday', bar: '12pm – 12am', kitchen: '6pm – 9pm' },
    { day: 'Friday',             bar: '12pm – 1am',  kitchen: '6pm – 10pm' },
    { day: 'Saturday',           bar: '12pm – 1am',  kitchen: '12pm – 10pm' },
    { day: 'Sunday',             bar: '12pm – 11pm', kitchen: '12pm – 8pm' },
  ],

  menus: {
    title: 'The Menus',
    centerpieceImage: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a4?auto=format&fit=crop&w=800&q=80',
    food: {
      label: 'Food',
      pdfUrl: '#menu-food',
    },
    drinks: {
      label: 'Drinks',
      pdfUrl: '#menu-drinks',
    },
    fullMenuCta: { label: 'See the Full Menu', href: '#menu-full' },
  },

  floralBreak: {
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=2000&q=80',
    alt: 'Dahlias and seasonal flowers',
  },

  giftCards: {
    title: 'Gift Cards',
    body: 'The perfect present for any occasion. Treat your friends, family or colleagues to lunch or dinner at Bramble.',
    cta: { label: 'Learn More', href: '#gift-cards' },
  },
  careers: {
    title: 'Careers',
    body: 'We are always happy to hear from passionate people who want to work with us. If you would like to join the team then please send your CV to hello@bramble.com.',
    cta: { label: 'Contact Us', href: 'mailto:hello@bramble.com' },
  },

  social: {
    left: 'Follow Us',
    right: 'On Instagram',
    handle: '@Bramble_W1D',
    url: 'https://www.instagram.com/bramble_w1d/',
  },

  mailingList: {
    title: 'Join our mailing list',
    subtitle: 'For updates on what\'s next',
    placeholder: 'email@example.com',
    cta: 'Subscribe',
  },

  footer: {
    wordmark: 'Bramble',
    credit: '© 2026',
  },

  reservation: {
    heading: 'Book a Table',
    body: 'Reservations recommended for dinner and weekend bar visits. Walk-ins always welcome.',
    formFields: ['Name', 'Email', 'Phone', 'Party Size', 'Date', 'Time'],
    submitLabel: 'Request Reservation',
  },
} as const;

export type SiteContent = typeof content;
