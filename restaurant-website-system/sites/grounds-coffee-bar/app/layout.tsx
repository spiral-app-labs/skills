import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Poppins - single humanist sans carrying the entire type system. Weights
// 400 (body), 500 (h2/h3/nav), 600 (h1), 700 (wordmark fallback).
// Audit §4: there is NO serif pair in this template. First in catalog.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} - ${content.brand.tagline}`,
  description: content.brand.description,
  openGraph: {
    title: `${content.brand.name} - Crystal Lake cafe and roaster`,
    description: content.brand.description,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: content.brand.name,
    description: content.brand.description,
    url: content.brand.links.cafeWebsite,
    telephone: content.brand.phone,
    email: content.brand.email,
    priceRange: '$',
    servesCuisine: ['Coffee', 'Breakfast', 'Cafe'],
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '15:00',
      },
    ],
    hasMenu: '/menu',
    sameAs: [
      content.brand.links.cafeWebsite,
      content.brand.links.roasterHome,
      content.brand.links.shop,
      content.brand.links.subscriptions,
    ],
    potentialAction: {
      '@type': 'OrderAction',
      target: content.brand.links.order,
    },
  };

  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-canvas text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
