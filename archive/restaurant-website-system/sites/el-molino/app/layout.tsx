import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Concierge } from '../components/Concierge';
import { StickyMobileActions } from '../components/StickyMobileActions';
import { content } from '../content';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} | ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        {children}
        <Concierge />
        <StickyMobileActions />
      </body>
    </html>
  );
}
