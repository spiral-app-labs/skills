// content.example.ts — alinea-01 placeholder content
//
// Hotlinked Unsplash URLs for placeholders — warm-natural-low-light grading per
// audit §12.4. Forks MUST replace with real editorial photography of the venue.

export const content = {
  brand: {
    name: 'Alinea',
    tagline: 'A tasting menu is a journey',
    description: 'Three-Michelin-star fine dining from Chef Grant Achatz, Chicago.',
    address: { line1: '1723 N Halsted St', line2: 'Chicago, IL 60614' },
    email: 'hospitality@example.com',
    social: [
      { label: 'Facebook',  href: '#', icon: 'facebook' },
      { label: 'Instagram', href: '#', icon: 'instagram' },
    ],
  },

  nav: {
    primary: [
      { label: 'Gallery',          href: '/gallery' },
      { label: 'FAQ',              href: '#' },
      { label: 'Private Events',   href: '/private-events' },
      { label: 'Shop',             href: '#' },
      { label: 'The Alinea Group', href: '#' },
      { label: 'Careers',          href: '#' },
    ],
    cta: { label: 'Book Now', href: '#reserve' },
  },

  hero: {
    wordmark: 'Alinea',
    photo: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=2000&q=80',
    photoAlt: 'Dining room in warm low light',
    tagline: 'A tasting menu is a journey — carefully composed, patiently paced.',
  },

  // Campaign modal — OPT-IN per audit §12.3. Flip enabled to true only for real seasonal campaigns.
  campaignModal: {
    enabled: false, // default off — real forks set true for genuine moments
    title: 'Our 20th Anniversary Tour',
    body:
      'In 2005, Chef Grant Achatz set out to build one of the world\'s best restaurants. How do we celebrate 20 years?',
    strong: 'We take Alinea on tour.',
    subcopy: 'Now Booking: Big Sky, Montana (Winter \'25/\'26)',
    cta: { label: 'Learn More', href: '#' },
    posterLabel: 'THE ALINEA GROUP',
    posterYear: '20',
    posterOrdinal: 'th',
    posterFooter: 'ANNIVERSARY',
  },

  // Tock widget — in-page booking. The venue-id is a placeholder; real forks
  // replace with their actual Tock business slug. See TockWidgetEmbed for how
  // this renders in placeholder vs embed mode.
  tock: {
    venue: 'alinea-example', // replace with real Tock slug
    headline: 'Alinea uses Tock to manage tables and to-go orders.',
    defaultGuests: 2,
  },

  prose: {
    heading: 'Alinea Dining Room',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Alinea dining room interior',
    paragraphs: [
      'Alinea has been universally acclaimed as the Best Restaurant in North America by the World\'s 50 Best Restaurants, the Best Restaurant in the World by Elite Traveler, and the #1 Restaurant in America by Business Insider. It is one of only 14 restaurants in the U.S. to hold Three Michelin Stars.',
      'Every night, chef Grant Achatz and his team prepare a tasting menu unlike anything diners have encountered elsewhere — a multi-course journey shaped by seasonality, technique, and an unwavering commitment to the present moment.',
      'Alinea offers three distinct dining experiences under one roof: The Kitchen Table, The Gallery, and The Salon. Each is ticketed in advance, each serves its own menu, and each offers a different relationship to the food, the room, and the team preparing it.',
    ],
  },

  diningTiers: {
    heading: 'Dining At Alinea',
    body:
      'The restaurant is comprised of three distinct dining spaces, each offering its own menu, pace, and proximity to the kitchen. Select an experience to learn more.',
    tiers: [
      {
        id: 'kitchen-table',
        label: 'The Kitchen Table',
        description: 'An interactive chef\'s-table experience with the team at the pass.',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
        href: '#reserve',
      },
      {
        id: 'gallery',
        label: 'The Gallery',
        description: 'The signature multi-course tasting in the flagship dining room.',
        image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80',
        href: '#reserve',
      },
      {
        id: 'salon',
        label: 'The Salon',
        description: 'A shorter menu in a quieter, semi-private setting.',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
        href: '#reserve',
      },
    ],
  },

  galleryPreview: {
    label: 'GALLERY',
    linkHref: '/gallery',
    photos: [
      { src: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80', alt: 'Avant-garde plated dish' },
      { src: 'https://images.unsplash.com/photo-1617196701537-7329482cc9fe?auto=format&fit=crop&w=800&q=80', alt: 'Composed seafood plate' },
      { src: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80', alt: 'Detailed dessert plating' },
      { src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80', alt: 'Broth course' },
      { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', alt: 'Searing beef course' },
      { src: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80', alt: 'Minimal garnish plate' },
    ],
  },

  mailingList: {
    heading: 'Mailing List',
    body:
      'Join our mailing list to learn more about ticket releases and special events at Alinea.',
    placeholder: 'Email address',
    cta: 'Subscribe',
  },

  // GALLERY page
  galleryPage: {
    title: 'Gallery',
    subtitle: 'A visual archive of dishes, rooms, and moments.',
    photos: [
      'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617196701537-7329482cc9fe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    ],
  },

  // PRIVATE EVENTS page
  privateEvents: {
    hero: {
      title: 'The Beginning of a New Train of Thought',
      photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80',
      photoAlt: 'Private dining setup in low light',
    },
    intro: {
      body:
        'To host a private event at Alinea is to work with a team devoted to giving your evening a distinct shape. Our planners will help you curate the cuisine, pacing, and service details that together define an unforgettable night.',
      body2:
        'We accommodate a multitude of party sizes within three different spaces, full event buyouts are available for up to 60 guests and include an exclusive menu in our kitchen.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Table set for private dining',
    },
    spaces: {
      heading: 'Our Spaces',
      items: [
        {
          label: 'Gallery',
          description: 'The Gallery is a semi-private room that accommodates up to 10 people, seated.',
          image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1000&q=80',
        },
        {
          label: 'Single Salon',
          description: 'One of two private salons, available for up to 10 people, seated.',
          image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80',
        },
        {
          label: 'All Salons',
          description: 'Reserve all three salons to accommodate up to 30 people, seated.',
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
        },
      ],
      footerNote:
        'All accommodations are determined by event needs, and may be altered to accommodate a guest count.',
    },
    form: {
      heading: 'Your Contact Information',
      selectHeading: 'Select your desired event style',
      detailsHeading: 'Your Event Details',
      eventStyles: ['Full Buyout', 'Single Salon', 'All Salons', 'Gallery'],
    },
  },
};
