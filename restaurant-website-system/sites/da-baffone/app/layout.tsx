import type { Metadata } from 'next';
import { Sorts_Mill_Goudy, Figtree } from 'next/font/google';
import { content } from '../content.example';
import { MobileCallBar } from '../components/MobileCallBar';
import './globals.css';

// Sorts Mill Goudy — only weight 400 available on Google Fonts; italic is
// load-bearing (see audit §4). Going outside this cut breaks the heritage voice.
const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-sorts-mill-goudy',
  display: 'swap',
});

// Figtree — humanist sans workhorse. 400 body + 500 for small UI affordances.
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dabaffonecucinaitaliana.com'),
  title: `${content.brand.legalName} — ${content.brand.tagline}`,
  description: content.brand.description,
  openGraph: {
    title: `${content.brand.legalName} — ${content.brand.tagline}`,
    description: content.brand.description,
    type: 'website',
    images: [
      {
        url: content.photos.brickDiningRoom,
        width: 1600,
        height: 1067,
        alt: 'Da Baffone dining room',
      },
    ],
  },
};

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: content.brand.legalName,
  servesCuisine: ['Italian', 'Southern Italian'],
  url: 'https://dabaffonecucinaitaliana.com/',
  telephone: content.brand.phoneDisplay,
  email: content.brand.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: content.brand.address.line1,
    addressLocality: 'Crystal Lake',
    addressRegion: 'IL',
    postalCode: '60014',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: content.brand.geo.lat,
    longitude: content.brand.geo.lng,
  },
  menu: 'https://dabaffonecucinaitaliana.com/menu',
  foundingDate: content.brand.since,
  priceRange: '$$-$$$',
  openingHoursSpecification: content.brand.hoursConfig.ranges.map((range) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: dayNames[range.day],
    opens: range.open,
    closes: range.close,
  })),
  sameAs: content.brand.social.map((social) => social.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sortsMillGoudy.variable} ${figtree.variable}`}>
      <body className="bg-canvas pb-20 font-body text-ink antialiased md:pb-0">
        {children}
        <MobileCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
