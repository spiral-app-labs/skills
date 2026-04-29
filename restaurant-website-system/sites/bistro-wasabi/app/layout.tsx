import type { Metadata } from 'next';
import { Forum } from 'next/font/google';
import { MobileActionBar } from '../components/MobileActionBar';
import { content, links } from '../content';
import './globals.css';

// Display font: Forum (Google Fonts). Single weight 400 — qitchen uses one weight everywhere.
const forum = Forum({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-forum',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thebistrowasabi.com'),
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
  openGraph: {
    title: `${content.brand.name} — Sushi, martinis, steaks`,
    description: content.brand.description,
    images: [content.hero.image],
  },
};

const openingHoursSpecification = [
  { dayOfWeek: 'Tuesday', opens: '17:00', closes: '21:30' },
  { dayOfWeek: 'Wednesday', opens: '17:00', closes: '21:30' },
  { dayOfWeek: 'Thursday', opens: '17:00', closes: '21:30' },
  { dayOfWeek: 'Friday', opens: '17:00', closes: '21:30' },
  { dayOfWeek: 'Saturday', opens: '17:00', closes: '21:30' },
  { dayOfWeek: 'Sunday', opens: '16:30', closes: '21:00' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: content.brand.name,
  url: 'https://thebistrowasabi.com/',
  telephone: content.brand.phone,
  email: content.brand.email,
  priceRange: '$$-$$$',
  servesCuisine: ['Sushi', 'Japanese fusion', 'Steaks'],
  foundingDate: '2000',
  hasMenu: 'https://thebistrowasabi.com/menu/',
  acceptsReservations: true,
  openingHoursSpecification,
  potentialAction: [
    {
      '@type': 'ReserveAction',
      target: links.tock,
      name: 'Reserve on Tock',
    },
    {
      '@type': 'OrderAction',
      target: links.carryOut,
      name: 'Order carry-out on Toast',
    },
  ],
  department: [
    {
      '@type': 'Restaurant',
      name: 'Bistro Wasabi Lake in the Hills',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4590 W Algonquin Rd',
        addressLocality: 'Lake in the Hills',
        addressRegion: 'IL',
        postalCode: '60156',
        addressCountry: 'US',
      },
      telephone: content.brand.phone,
      openingHoursSpecification,
    },
    {
      '@type': 'Restaurant',
      name: 'Bistro Wasabi Hoffman Estates',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1578 W Algonquin Rd',
        addressLocality: 'Hoffman Estates',
        addressRegion: 'IL',
        postalCode: '60192',
        addressCountry: 'US',
      },
      telephone: content.brand.phone,
      openingHoursSpecification,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={forum.variable}>
      <head>
        {/* Body font: Satoshi via Fontshare CDN.
            Forks may want to self-host these woff2 files — see README. */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
