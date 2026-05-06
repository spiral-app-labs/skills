import type { Metadata } from 'next';
import { content } from '../content.example';
import { AskConcierge } from '../components/AskConcierge';
import { MobileQuickActions } from '../components/MobileQuickActions';
import './globals.css';

const metadataDescription = `${content.brand.description} Visit ${content.brand.address}. Public proof captured from 4.3 Google stars across 530 local reviews.`;

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: metadataDescription,
  openGraph: {
    title: `${content.brand.name} — ${content.brand.tagline}`,
    description: metadataDescription,
    type: 'website',
    locale: 'en_US',
    siteName: content.brand.name,
    images: [
      {
        url: '/la-hacienda/hero-review-board.svg',
        alt: `${content.brand.name} hero review board`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.brand.name} — ${content.brand.tagline}`,
    description: metadataDescription,
    images: ['/la-hacienda/hero-review-board.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-bg-white text-text-dark antialiased pb-16 md:pb-0">
        {children}
        <AskConcierge restaurantName="La Hacienda" />
        <MobileQuickActions />
      </body>
    </html>
  );
}
