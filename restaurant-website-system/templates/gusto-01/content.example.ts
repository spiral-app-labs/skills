// content.example.ts — gusto-01 placeholder content
//
// Hotlinked Unsplash URLs for warm-candlelit pasta / wine / kitchen photography
// per audit §12.1. Forks MUST replace with real photography of the venue.
// The audit flagged address + phone as missing from the source template; this
// file surfaces them on the Contact page and in the Footer (rebuild, not swap).

export const content = {
  brand: {
    name: 'Gusto',
    tagline: 'The Best Pasta Outside of Italy',
    description: 'Heritage-Italian trattoria — pasta, wine, and Tuscan tradition in the heart of Prague. Since 1997.',
    since: '1997',
    city: 'Prague',
    address: {
      line1: 'Křižovnická 86/6',
      line2: '110 00 Staré Město, Prague',
      country: 'Czech Republic',
    },
    phone: '+420 224 813 922',
    phoneDisplay: '+420 224 813 922',
    email: 'hello@gusto-example.com',
    mapEmbed: 'https://www.google.com/maps?q=Charles+Bridge+Prague&output=embed',
    mapLink: 'https://maps.google.com/?q=Charles+Bridge+Prague',
    reservationUrl: '#book',
    social: [
      { label: 'X / Twitter', href: '#' },
      { label: 'Instagram',   href: '#' },
    ],
  },

  nav: {
    primary: [
      { label: 'Menu',        href: '/menu' },
      { label: 'Reservation', href: '#book' },
      { label: 'About',       href: '/about' },
      { label: 'Restaurant',  href: '/contact' },
    ],
  },

  // ——————————————————————————————————————————————————————————
  // HOME
  // ——————————————————————————————————————————————————————————
  home: {
    hero: {
      // Big left card — warm-candlelit plated pasta + wine glasses
      mainPhoto: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1600&q=80',
      mainPhotoAlt: 'Plated pasta with wine glasses in candlelit dining room',
      // Stacked right cards
      secondaryCards: [
        {
          chip: 'Our Restaurant',
          photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
          alt:   'Warm-lit interior of a trattoria dining room',
          href:  '/about',
        },
        {
          chip: 'Menu',
          photo: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=900&q=80',
          alt:   'Close-up of fresh pasta',
          href:  '/menu',
        },
      ],
      // Testimonial-overlay card — load-bearing conversion element
      testimonial: {
        quote: 'The Best Pasta Outside of Italy',
        body:  'It\'s Italian, and let me tell you, this pasta tastes like home. The sauces are rich, the pasta is cooked to perfection, and the ambience is fantastic. Highly recommend this place.',
        rating: 4.8,
        reviewCount: 1240,
        primaryCta:   { label: 'Book a Table', href: '#book' },
        secondaryCta: { label: 'View Menu',    href: '/menu' },
      },
      // Right-rail sidebar
      sidebar: {
        ctaLabel: 'Book a Table',
        ctaHref:  '#book',
        hoursHeading: 'Opening Hours',
        hours: [
          { day: 'Monday',    time: '16:00 – 22:00' },
          { day: 'Tuesday',   time: '16:00 – 22:00' },
          { day: 'Wednesday', time: '16:00 – 22:00' },
          { day: 'Thursday',  time: '16:00 – 22:00' },
          { day: 'Friday',    time: '16:00 – 23:00' },
          { day: 'Saturday',  time: '17:00 – 23:00' },
          { day: 'Sun – Sun', time: '17:00 – 22:00' },
        ],
      },
    },
  },

  // ——————————————————————————————————————————————————————————
  // MENU
  // ——————————————————————————————————————————————————————————
  menu: {
    hero: {
      photo: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1600&q=80',
      photoAlt: 'Close-up of pasta with tomato sauce and basil',
      testimonial: {
        quote: 'Authentic slice of Italy in Prague!',
        body: 'A warm, family-run place where every plate feels made with care. The tiramisu alone is worth the flight.',
        rating: 4.8,
        reviewCount: 1240,
      },
    },
    sections: [
      {
        label: 'Antipasti',
        items: [
          { name: 'Bruschetta al Pomodoro',     desc: 'Toasted bread, heirloom tomato, garlic, basil, olive oil',   price: '€9',  photo: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=400&q=80' },
          { name: 'Burrata & Prosciutto',       desc: 'Creamy burrata, San Daniele prosciutto, rocket, aged balsamic', price: '€16', photo: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=400&q=80' },
          { name: 'Carpaccio di Manzo',         desc: 'Thin-sliced beef, arugula, parmigiano, lemon',                  price: '€14', photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
        ],
      },
      {
        label: 'Pasta',
        items: [
          { name: 'Tagliatelle al Ragù',        desc: 'Hand-cut egg pasta, slow-braised beef & pork ragù',             price: '€18', photo: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80' },
          { name: 'Spaghetti alle Vongole',     desc: 'Manila clams, white wine, garlic, chili, parsley',              price: '€22', photo: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&w=400&q=80' },
          { name: 'Cacio e Pepe',               desc: 'Tonnarelli, pecorino romano, cracked black pepper',             price: '€16', photo: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&w=400&q=80' },
          { name: 'Ravioli di Ricotta',         desc: 'Spinach-ricotta ravioli, brown butter, sage, amaretti crumb',   price: '€19', photo: 'https://images.unsplash.com/photo-1587740908075-9e245311c68c?auto=format&fit=crop&w=400&q=80' },
          { name: 'Risotto ai Funghi',          desc: 'Carnaroli rice, porcini, taleggio, thyme',                      price: '€21', photo: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=400&q=80' },
        ],
      },
      {
        label: 'Secondi',
        items: [
          { name: 'Branzino al Forno',          desc: 'Whole-roasted sea bass, olive oil, lemon, rosemary potatoes',   price: '€32', photo: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80' },
          { name: 'Osso Buco alla Milanese',    desc: 'Braised veal shank, saffron risotto, gremolata',                price: '€34', photo: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
          { name: 'Pollo al Marsala',           desc: 'Pan-roasted chicken, Marsala wine, porcini, polenta',           price: '€24', photo: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=400&q=80' },
        ],
      },
      {
        label: 'Dolci',
        items: [
          { name: 'Tiramisù della Nonna',       desc: 'Savoiardi, espresso, mascarpone, cocoa — the original recipe', price: '€9',  photo: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80' },
          { name: 'Panna Cotta',                desc: 'Vanilla bean panna cotta, macerated berries',                   price: '€8',  photo: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80' },
          { name: 'Cannoli Siciliani',          desc: 'Crisp shells, sweet ricotta, candied orange, pistachio',        price: '€9',  photo: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=400&q=80' },
        ],
      },
    ],
  },

  // ——————————————————————————————————————————————————————————
  // ABOUT
  // ——————————————————————————————————————————————————————————
  about: {
    hero: {
      title: 'About',
      intro: 'Founded by Italian owners, our restaurant brings authentic flavors from Italy to Prague, celebrating tradition, quality ingredients, and true hospitality.',
      leftPhoto:  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
      leftAlt:    'Older woman in chef\'s apron on a Tuscan terrace',
      rightPhoto: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
      rightAlt:   'Maria & Giovanni, restaurant owners, in a rustic kitchen',
    },
    manifesto: {
      heading: 'From Tuscany to the Heart of Prague',
      body: [
        'Moving from Tuscany to the Heart of Prague wasn\'t just about opening a restaurant — it was about creating a place where Italians and locals alike could gather around the table and experience Italy\'s culinary magic.',
        'Every dish carries our grandmother\'s voice, every wine carries a hillside we walked. We cook the way our families cooked, because it still tastes the best.',
      ],
    },
    owners: {
      name: 'Maria & Giovanni',
      bio: 'Meet Maria and Giovanni, the heart and soul behind our restaurant. Hailing from the beautiful region of Tuscany, they\'ve always had a love for cooking, rooted in family traditions and the rich flavors of Italy.',
      bio2: 'After years of honing their skills in Italy\'s finest kitchens, they dreamed of sharing authentic Italian flavors with the world — opening a passion to bring true Italian dining to the vibrant city of Prague.',
      cta: { label: 'Meet the Team', href: '/contact' },
    },
  },

  // ——————————————————————————————————————————————————————————
  // CONTACT — rebuilt from scratch; the source template ships broken
  // ——————————————————————————————————————————————————————————
  contact: {
    heroTitle: 'Visit Us',
    heroSubtitle: 'Reserve a table, find us on the map, or drop us a note. We\'d love to feed you.',
    heroPhoto: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
    heroPhotoAlt: 'Warm-lit trattoria dining room at night',
    formHeading: 'Drop us a note',
    formSubheading: 'For private events, press, or anything that doesn\'t fit a reservation — write below and we\'ll reply within one business day.',
    formFields: {
      nameLabel:    'Your name',
      emailLabel:   'Email address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitLabel:  'Send message',
    },
    infoHeading: 'Find us',
    mapCaption: 'Five minutes on foot from Charles Bridge.',
  },
};
