// content.example.ts — Da Baffone fork of gusto-01
//
// The site intentionally keeps the Gusto art direction, but replaces every
// placeholder with Da Baffone's real story, menu, contact details, and first-
// party WordPress photography.

const telHref = 'tel:+18158936149';

export const content = {
  brand: {
    name: 'Da Baffone',
    legalName: 'Da Baffone Cucina Italiana',
    tagline: 'Southern Italian cooking in downtown Crystal Lake',
    description:
      'Family-owned Southern Italian restaurant in downtown Crystal Lake, serving old-world recipes, wine, and date-night dinners since 2010.',
    since: '2010',
    city: 'Crystal Lake',
    address: {
      line1: '111 N Main St',
      line2: 'Crystal Lake, IL 60014',
      country: 'United States',
    },
    phone: '+18158936149',
    phoneDisplay: '815-893-6149',
    email: 'dabaffone@gmail.com',
    mapEmbed:
      'https://maps.google.com/maps?q=111%20N%20Main%20St%2C%20Crystal%20Lake%2C%20IL%2060014&z=15&output=embed',
    mapLink:
      'https://www.google.com/maps/dir/?api=1&destination=111%20N%20Main%20St%2C%20Crystal%20Lake%2C%20IL%2060014',
    reservationUrl: telHref,
    social: [
      { label: 'Facebook', href: 'https://www.facebook.com/dabaffonecucinaitaliana/' },
      {
        label: 'Tripadvisor',
        href: 'https://www.tripadvisor.com/Restaurant_Review-g35860-d2520907-Reviews-Da_Baffone_Cucina_Italiana-Crystal_Lake_Illinois.html',
      },
      { label: 'Yelp', href: 'https://www.yelp.com/biz/da-baffone-cucina-italiana-crystal-lake' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '16:00', close: '20:00' },
        { day: 3 as const, open: '16:00', close: '20:00' },
        { day: 4 as const, open: '16:00', close: '20:00' },
        { day: 5 as const, open: '16:00', close: '21:00' },
        { day: 6 as const, open: '16:00', close: '21:00' },
        { day: 0 as const, open: '16:00', close: '20:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.24215, lng: -88.31724 },
    reservationNote:
      'Reservations, catering, to-go orders, and urgent inquiries are handled by phone.',
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'Call to Reserve', href: telHref },
      { label: 'About', href: '/about' },
      { label: 'Visit', href: '/contact' },
    ],
  },

  photos: {
    diningRoomWide: '/images/da-baffone/dining-room-wide.jpg',
    brickDiningRoom: '/images/da-baffone/brick-dining-room.jpg',
    bruschettaWide: '/images/da-baffone/bruschetta-wide.jpg',
    seafoodPastaWide: '/images/da-baffone/seafood-pasta-wide.jpg',
    cocktailsWide: '/images/da-baffone/cocktails-wide.jpg',
    oliveOilsWide: '/images/da-baffone/olive-oils-wide.jpg',
    chickenPiccata: '/images/da-baffone/chicken-piccata.jpg',
    bestOfFox2017: '/images/da-baffone/best-of-fox-2017.jpg',
    bestOfFoxBadge: '/images/da-baffone/best-of-fox-badge.png',
  },

  home: {
    hero: {
      mainPhoto: '/images/da-baffone/brick-dining-room.jpg',
      mainPhotoAlt:
        'Da Baffone dining room with brick walls, chandeliers, and white tablecloths',
      secondaryCards: [
        {
          chip: 'Southern Italian',
          photo: '/images/da-baffone/bruschetta-wide.jpg',
          alt: 'Bruschetta with tomato, basil, and balsamic',
          href: '/menu',
        },
        {
          chip: 'Wine Bar',
          photo: '/images/da-baffone/cocktails-wide.jpg',
          alt: 'Cocktails at the Da Baffone bar',
          href: '/contact',
        },
      ],
      testimonial: {
        quote: 'Voted Best Italian Restaurant in McHenry County',
        body:
          'Family recipes, a warm brick dining room, and more than 1,200 public reviews across Facebook and Yelp.',
        rating: 4.6,
        reviewCount: 1200,
        primaryCta: { label: 'Call to Reserve', href: telHref },
        secondaryCta: { label: 'View Menu', href: '/menu' },
      },
      sidebar: {
        ctaLabel: 'Call to Reserve',
        ctaHref: telHref,
        hoursHeading: 'Opening Hours',
        hours: [
          { day: 'Monday', time: 'Closed' },
          { day: 'Tuesday', time: 'Closed' },
          { day: 'Wednesday', time: '4:00 PM - 8:00 PM' },
          { day: 'Thursday', time: '4:00 PM - 8:00 PM' },
          { day: 'Friday', time: '4:00 PM - 9:00 PM' },
          { day: 'Saturday', time: '4:00 PM - 9:00 PM' },
          { day: 'Sunday', time: '4:00 PM - 8:00 PM' },
        ],
      },
    },

    proof: {
      eyebrow: 'Best of the Fox',
      heading: 'Already loved locally. Now the site shows it.',
      body:
        'Da Baffone has been recognized for Italian food, wine bar, martinis, date night, bartender, conversation, and catering. The redesign moves that proof out of old posts and into the first few seconds.',
      stats: [
        { value: '2010', label: 'Established in Crystal Lake' },
        { value: '1,200+', label: 'Public reviews across Facebook and Yelp' },
        { value: 'Best Italian', label: 'Best of the Fox winner' },
      ],
    },

    story: {
      eyebrow: 'The Giangrande Family',
      heading: 'Old-world recipes, brought to Main Street.',
      body:
        'Da Baffone is rooted in the belief that food is a tradition that brings family and friends together. The menu focuses on Southern Italian cooking, fresh ingredients, and recipes connected to the family\'s sister restaurant in Santo Stefano del Sole, Italy.',
      quote: 'Good food, good wine, and good friends come together.',
      photo: '/images/da-baffone/olive-oils-wide.jpg',
      photoAlt: 'Olive oil bottles with peppers in the Da Baffone dining room',
    },

    signatureDishes: {
      eyebrow: 'Menu Highlights',
      heading: 'Sauces, seafood, pasta, and the table you settle into.',
      items: [
        {
          name: 'Bruschetta Tradizionale',
          desc: 'Grilled crostini, fresh diced tomatoes, garlic, basil, and balsamic.',
          price: '$11.95',
          photo: '/images/da-baffone/bruschetta-wide.jpg',
        },
        {
          name: 'Frutti di Mare',
          desc: 'Shrimp, calamari, mussels, and clams with linguini in marinara.',
          price: '$36.95',
          photo: '/images/da-baffone/seafood-pasta-wide.jpg',
        },
        {
          name: 'Pollo Piccata',
          desc: 'Chicken sauteed in lemon, capers, and white wine, served with pasta.',
          price: '$27.95',
          photo: '/images/da-baffone/chicken-piccata.jpg',
        },
      ],
    },

    wine: {
      eyebrow: 'Wine Bar & Date Night',
      heading: 'A small room with a serious wine-and-martini reputation.',
      body:
        'The brick walls, white tablecloths, bar seating, and Italian wine list are part of why the restaurant has been recognized for wine bar, martinis, date night, and conversation.',
      photo: '/images/da-baffone/cocktails-wide.jpg',
      photoAlt: 'Cocktails and Da Baffone menu at the bar',
      badges: ['Wine Bar', 'Martinis', 'Date Night', 'Conversation'],
    },

    reviews: {
      eyebrow: 'What People Come Back For',
      heading: 'The signal is remarkably consistent.',
      themes: [
        'Guests describe the room as cozy, intimate, and suited for a special dinner.',
        'Positive reviews repeatedly point to sauces, pasta, seafood, wine, and desserts.',
        'The most important fix is clarity: make reservations, hours, and the call-first flow impossible to miss.',
      ],
    },
  },

  menu: {
    hero: {
      photo: '/images/da-baffone/seafood-pasta-wide.jpg',
      photoAlt: 'Seafood pasta with wine',
      testimonial: {
        quote: 'Southern Italian favorites, wine, and house desserts',
        body:
          'Dinner is the heart of Da Baffone: antipasti, pasta, chicken, veal, seafood, dessert, and a wine list built for long tables.',
        rating: 4.6,
        reviewCount: 1200,
      },
    },
    sections: [
      {
        label: 'Antipasti',
        items: [
          {
            name: 'Bruschetta Tradizionale',
            desc: 'Grilled crostini, fresh diced tomatoes, garlic, fresh basil',
            price: '$11.95',
            photo: '/images/da-baffone/bruschetta-wide.jpg',
          },
          {
            name: 'Burrata & Prosciutto',
            desc: 'Fresh mozzarella cream, Prosciutto di Parma',
            price: '$17.95',
            photo: '/images/da-baffone/olive-oils-wide.jpg',
          },
          {
            name: 'Fried Calamari',
            desc: 'Lightly floured and served with marinara',
            price: '$17.95',
            photo: '/images/da-baffone/seafood-pasta-wide.jpg',
          },
          {
            name: 'Vongole al Forno',
            desc: 'Baked clams topped with herbed breading',
            price: '$20.95',
            photo: '/images/da-baffone/seafood-pasta-wide.jpg',
          },
        ],
      },
      {
        label: 'Pasta',
        items: [
          {
            name: 'Gnocchi',
            desc: 'Potato dumplings with your choice of house sauce',
            price: '$24.95',
            photo: '/images/da-baffone/seafood-pasta-wide.jpg',
          },
          {
            name: 'Ravioli',
            desc: 'Cheese ravioli with classic Italian sauce',
            price: '$24.95',
            photo: '/images/da-baffone/chicken-piccata.jpg',
          },
          {
            name: 'Spaghetti & Meatballs',
            desc: 'Spaghetti with homemade meatballs and marinara',
            price: '$24.95',
            photo: '/images/da-baffone/bruschetta-wide.jpg',
          },
          {
            name: 'Frutti di Mare',
            desc: 'Shrimp, calamari, mussels, and clams over linguini',
            price: '$36.95',
            photo: '/images/da-baffone/seafood-pasta-wide.jpg',
          },
        ],
      },
      {
        label: 'Pollo, Carne & Pesce',
        items: [
          {
            name: 'Pollo Parmigiana',
            desc: 'Breaded chicken, marinara, mozzarella, penne pasta',
            price: '$27.95',
            photo: '/images/da-baffone/chicken-piccata.jpg',
          },
          {
            name: 'Pollo Piccata',
            desc: 'Lemon, capers, white wine sauce, capellini pasta',
            price: '$27.95',
            photo: '/images/da-baffone/chicken-piccata.jpg',
          },
          {
            name: 'Filet Medallions Gorgonzola',
            desc: 'Two grilled filet medallions with creamy Gorgonzola sauce',
            price: '$52.95',
            photo: '/images/da-baffone/dining-room-wide.jpg',
          },
          {
            name: 'Pesce Speciale',
            desc: 'Ask about the evening fish preparation',
            price: 'Market',
            photo: '/images/da-baffone/seafood-pasta-wide.jpg',
          },
        ],
      },
      {
        label: 'Dolci & Caffe',
        items: [
          {
            name: 'Tiramisu',
            desc: 'Mascarpone cream and ladyfingers soaked in rum and espresso',
            price: '',
            photo: '/images/da-baffone/cocktails-wide.jpg',
          },
          {
            name: 'Cannoli Flight',
            desc: 'Four mini cannoli: traditional, pistachio, chocolate chips, chocolate shell',
            price: '',
            photo: '/images/da-baffone/olive-oils-wide.jpg',
          },
          {
            name: 'Affogato',
            desc: 'Fior di Latte gelato topped with a shot of hot espresso',
            price: '',
            photo: '/images/da-baffone/cocktails-wide.jpg',
          },
        ],
      },
      {
        label: 'Wine & Libations',
        items: [
          {
            name: 'Italian Reds & Whites',
            desc: 'Selections from Piemonte, Veneto, Marche, Abruzzo, Campania, and beyond',
            price: '',
            photo: '/images/da-baffone/cocktails-wide.jpg',
          },
          {
            name: 'Martinis & Cocktails',
            desc: 'A Best of the Fox-recognized bar program for date night',
            price: '',
            photo: '/images/da-baffone/cocktails-wide.jpg',
          },
          {
            name: 'Catering',
            desc: 'Catering orders require advance reservation by phone',
            price: 'Call',
            photo: '/images/da-baffone/dining-room-wide.jpg',
          },
        ],
      },
    ],
  },

  about: {
    hero: {
      title: 'About',
      intro:
        'Family-owned Southern Italian cooking in downtown Crystal Lake, rooted in old-world recipes, fresh ingredients, wine, and hospitality.',
      leftPhoto: '/images/da-baffone/brick-dining-room.jpg',
      leftAlt: 'Da Baffone brick dining room',
      rightPhoto: '/images/da-baffone/best-of-fox-2017.jpg',
      rightAlt: 'Best of the Fox award for Da Baffone',
    },
    manifesto: {
      heading: 'From Santo Stefano del Sole to Crystal Lake',
      body: [
        'Da Baffone believes food is a tradition that brings family and friends together. That belief shapes a menu of Southern Italian recipes, house sauces, pasta, seafood, wine, and desserts served in a small downtown room.',
        'The family also shares a connection with Agriturismo Da Baffone in Santo Stefano del Sole, Italy, tying the Crystal Lake restaurant to old-world cooking and the rhythms of the Italian table.',
      ],
    },
    owners: {
      name: 'The Giangrande Family',
      bio:
        'The restaurant was established at this Crystal Lake location in 2010 and remains independently family owned.',
      bio2:
        'Their promise is simple and durable: good food, good wine, and good friends around the table.',
      cta: { label: 'Call to Reserve', href: telHref },
    },
  },

  contact: {
    heroTitle: 'Visit Us',
    heroSubtitle:
      'Call for reservations, catering, to-go orders, and urgent inquiries. Email is for general questions only.',
    heroPhoto: '/images/da-baffone/dining-room-wide.jpg',
    heroPhotoAlt: 'Da Baffone dining room and bar',
    formHeading: 'General inquiries',
    formSubheading:
      'Reservations and orders are not honored by email. Please call 815-893-6149 for anything time-sensitive.',
    formFields: {
      nameLabel: 'Your name',
      emailLabel: 'Email address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitLabel: 'Send message',
    },
    infoHeading: 'Find us',
    mapCaption: 'Downtown Crystal Lake, near the Metra station and Main Street shops.',
  },
};
