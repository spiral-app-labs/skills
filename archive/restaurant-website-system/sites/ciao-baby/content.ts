// content.ts — Ciao Baby! fork content
//
// Grounded in the 2026-05-04 audit, current-site browser scrape, and
// Highest-filter Google review packet. Keep the two-domain caveat explicit:
// ciaobabyonline.com and ciaobaby.net both surface official-looking Ciao Baby
// facts, so the fork preserves phone/address/menu proof without pretending
// ownership has been resolved.

const phoneHref = 'tel:+18473813555';
const directionsHref = 'https://www.google.com/maps/search/?api=1&query=232+E+Main+St+Barrington+IL+60010';
const legacySite = 'https://www.ciaobabyonline.com/';
const modernCandidateSite = 'https://ciaobaby.net/';

const wixDiningRoom = 'https://static.wixstatic.com/media/fbfa8a_1609c5b745704746b461dbdfcd23cb15~mv2.jpg/v1/fill/w_1232,h_924,al_c,q_85,usm_1.20_1.00_0.01/fbfa8a_1609c5b745704746b461dbdfcd23cb15~mv2.webp';
const wixExterior = 'https://static.wixstatic.com/media/fbfa8a_eaac7cd04d2445129c361435c27bbcd3~mv2.jpg/v1/fill/w_429,h_226,al_c,q_80,usm_1.20_1.00_0.01/1146503_579976802128744_6708850736846835.webp';
const wixBarRoom = 'https://static.wixstatic.com/media/fbfa8a_0aac9ef475124eaeb8c3880c39d87db8~mv2.jpg/v1/fill/w_361,h_193,al_c,q_80,usm_1.20_1.00_0.01/fbfa8a_0aac9ef475124eaeb8c3880c39d87db8~mv2.webp';

export const content = {
  brand: {
    name: 'Ciao Baby!',
    tagline: 'Family-run Italian in downtown Barrington',
    description: 'Italian-American dining, warm bread at the table, generous portions, and a private party room at 232 E Main Street in Barrington.',
    since: '2011',
    city: 'Barrington',
    address: {
      line1: '232 E Main Street',
      line2: 'Barrington, IL 60010',
      country: 'United States',
    },
    phone: '+18473813555',
    phoneDisplay: '(847) 381-3555',
    email: '',
    mapEmbed: 'https://www.google.com/maps?q=232+E+Main+St+Barrington+IL+60010&output=embed',
    mapLink: directionsHref,
    reservationUrl: phoneHref,
    social: [
      { label: 'Legacy site', href: legacySite },
      { label: 'Modern site candidate', href: modernCandidateSite },
    ],
    // Hours conflict across public sources. These rows reflect the legacy current
    // site scrape and should be owner-verified before launch; avoid live-status claims.
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '11:00', close: '21:00' },
        { day: 3 as const, open: '11:00', close: '21:00' },
        { day: 4 as const, open: '11:00', close: '21:00' },
        { day: 5 as const, open: '11:00', close: '22:00' },
        { day: 6 as const, open: '12:00', close: '22:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.1539, lng: -88.1343 },
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'Private Parties', href: '/contact' },
      { label: 'About', href: '/about' },
      { label: 'Visit', href: '/contact' },
    ],
  },

  home: {
    hero: {
      mainPhoto: wixDiningRoom,
      mainPhotoAlt: 'Ciao Baby dining room with warm old-school Italian character',
      secondaryCards: [
        {
          chip: 'Family table',
          photo: wixBarRoom,
          alt: 'Ciao Baby interior dining area',
          href: '/about',
        },
        {
          chip: 'Private parties',
          photo: wixDiningRoom,
          alt: 'Ciao Baby dining room for family meals and private parties',
          href: '/contact',
        },
      ],
      testimonial: {
        quote: 'Made you feel at home',
        body: 'Customer praise centers on warm bread, generous plates, lamb chops Vesuvio, burnt pasta, carrot cake, and service that feels like a regulars table.',
        proofLabel: 'Guest praise themes from public reviews',
        primaryCta: { label: 'Call Ciao Baby', href: phoneHref },
        secondaryCta: { label: 'View menu highlights', href: '/menu' },
      },
      sidebar: {
        ctaLabel: 'Call Ciao Baby',
        ctaHref: phoneHref,
        hoursHeading: 'Publicly listed hours',
        hours: [
          { day: 'Monday', time: 'Closed' },
          { day: 'Tuesday–Thursday', time: '11am – 9pm' },
          { day: 'Friday', time: '11am – 10pm' },
          { day: 'Saturday', time: '12pm – 10pm' },
          { day: 'Sunday', time: 'Closed' },
          { day: 'Note', time: 'Hours may vary — call to confirm' },
        ],
      },
    },
  },

  menu: {
    hero: {
      photo: wixDiningRoom,
      photoAlt: 'Ciao Baby dining room and family Italian atmosphere',
      testimonial: {
        quote: 'Burnt pasta. Their specialty.',
        body: 'The menu has real Barrington favorites: stuffed artichoke, Aunt Dodie’s eggplant, lamb chops Vesuvio, CiaoBaby! Burnt Pasta, chicken parmesan, gnocchi, and carrot cake.',
        proofLabel: 'Guest praise themes from public reviews',
      },
    },
    sections: [
      {
        label: 'CiaoBaby! Starters',
        items: [
          { name: 'Ciao Baby! Sticks', desc: 'Two generous breadsticks stuffed with mozzarella, dipped in garlic butter and herbs, served with marinara.', price: '$10' },
          { name: 'Stuffed Artichoke', desc: 'A family favorite with garlic breadcrumbs, parmesan, fragrant herbs, and a light broth.', price: '$16' },
          { name: 'Aunt Dodie’s Rolled Stuffed Eggplant', desc: 'Eggplant rolled around ricotta and mozzarella, topped with marinara and herbs.', price: '$18' },
          { name: 'Lamb Chops Vesuvio', desc: 'Four lollipop lamb chops sautéed in Vesuvio sauce and herbs, served over risotto.', price: '$24' },
          { name: 'CiaoBaby! Burnt Pasta', desc: 'Fried angel hair pasta sautéed in butter and marinara until crispy and burnt.', price: '$15' },
        ],
      },
      {
        label: 'Salads & family favorites',
        items: [
          { name: 'Very Chopped Meatless Salad', desc: 'Finely chopped greens, vegetables, gorgonzola, pasta, toffee nuts, and mango chardonnay dressing.', price: '$15 / $26' },
          { name: 'Umbriago Salad', desc: 'Chopped romaine with egg whites, tomato, cucumber, grilled asparagus, chicken, croutons, parmesan, and black pepper.', price: '$15 / $26' },
          { name: 'Stuffed Melrose Peppers', desc: 'Melrose peppers stuffed with seasoned sausage and finished with slow-simmered sauce.', price: '$18' },
        ],
      },
      {
        label: 'Customer-mentioned favorites',
        items: [
          { name: 'Homemade gnocchi with sausage', desc: 'Mentioned by customers as a reason to come back; call to confirm current availability.', price: 'Ask' },
          { name: 'Chicken Parmesan', desc: 'A remembered Ciao Baby comfort plate from reviews and public menu snippets; call to confirm current availability.', price: 'Ask' },
          { name: 'Salted Caramel Gelato', desc: 'A customer-mentioned dessert recommendation; call to confirm current availability.', price: 'Ask' },
          { name: 'Carrot Cake', desc: 'A customer favorite from review themes; call to confirm current availability.', price: 'Ask' },
        ],
      },
    ],
  },

  about: {
    hero: {
      title: 'About',
      intro: 'Ciao Baby is a downtown Barrington Italian table with family-recipe language, old-school warmth, generous portions, and a private-room rhythm for birthdays, showers, holidays, and business meals.',
      leftPhoto: wixDiningRoom,
      leftAlt: 'Warm Ciao Baby dining room',
      rightPhoto: wixBarRoom,
      rightAlt: 'Ciao Baby interior detail',
    },
    manifesto: {
      heading: 'Family recipes, downtown Barrington pace',
      body: [
        'The strongest guest signal is simple: people describe Ciao Baby as the kind of Italian restaurant that makes them feel at home, with warm bread, attentive servers, and food generous enough to share.',
        'The rebuild should not make Ciao Baby feel formal or generic. It should make the existing warmth easier to understand, plan around, and trust from a phone screen.',
      ],
    },
    owners: {
      name: 'Family-run hospitality',
      bio: 'The review packet repeatedly points to personal care, with staff remembered by name in guest stories. That is the proof this site should surface before generic Italian claims.',
      bio2: 'The owner-safe angle is not “new concept.” It is the best version of what guests already say: cozy, welcoming, old-school Italian, generous, and ready for family celebrations.',
      cta: { label: 'Plan a visit', href: '/contact' },
    },
  },

  contact: {
    heroTitle: 'Visit Ciao Baby',
    heroSubtitle: 'Call for today’s seating, ask about carryout, or plan a private party in downtown Barrington. Hours may vary, so confirm current timing by phone.',
    heroPhoto: wixDiningRoom,
    heroPhotoAlt: 'Ciao Baby dining room with warm old-school Italian character',
    formHeading: 'Private parties',
    formSubheading: 'For birthdays, showers, family meals, or business dinners, call Ciao Baby directly so the team can confirm room details and availability.',
    infoHeading: 'Visit downtown Barrington',
    mapCaption: 'Downtown Barrington. Public sources list conflicting hours; call before making a special trip.',
    actions: [
      { label: 'Call (847) 381-3555', href: phoneHref, style: 'primary' as const },
      { label: 'Get directions', href: directionsHref, style: 'secondary' as const },
      { label: 'View menu highlights', href: '/menu', style: 'secondary' as const },
      { label: 'Ask about private parties', href: phoneHref, style: 'secondary' as const },
    ],
    partyProof: [
      'Private party room mentioned on the legacy current site.',
      'A Google review praises an 80th birthday in the private party room and names Nancy and Keira as accommodating.',
      'Reviews repeatedly support family meals, birthdays, generous portions, and warm service.',
    ],
  },
};
