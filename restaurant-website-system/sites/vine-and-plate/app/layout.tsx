import type { Metadata } from 'next';
import { Crimson_Pro, Inter } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Crimson Pro — weight 300 is the signature. Keep this weight; bold destroys the character.
const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(content.brand.siteUrl),
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${content.brand.name} — ${content.brand.tagline}`,
    description: content.brand.description,
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: content.brand.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: content.brand.name,
    description: content.brand.description,
    url: content.brand.siteUrl,
    telephone: '+1-815-893-0325',
    email: content.brand.email,
    servesCuisine: ['Wine Bar', 'American', 'Tapas', 'Shared Plates'],
    priceRange: '$$',
    acceptsReservations: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '414 W Virginia St',
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
    hasMenu: [
      `${content.brand.siteUrl}${content.brand.menuUrl}`,
      content.brand.foodPdfUrl,
      content.brand.drinksPdfUrl,
      content.brand.specialsPdfUrl,
      content.brand.lunchPdfUrl,
    ],
    sameAs: [
      content.brand.instagramUrl,
      content.brand.facebookUrl,
      content.brand.offTheVineUrl,
    ],
  };

  return (
    <html lang="en" className={`${crimson.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </body>
    </html>
  );
}
