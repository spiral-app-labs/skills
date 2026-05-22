import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { content } from '../content.example';
import { AskConcierge } from '../components/AskConcierge';
import { ScrollProgressBar } from '../components/ScrollProgressBar';
import { StickyMobileCallButton } from '../components/StickyMobileCallButton';
import './globals.css';

// Display: Cormorant Garamond. CRITICAL: must include style: ['normal', 'italic']
// because the italic-on-serif emphasis is the signature pattern.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <ScrollProgressBar />
        {children}
        <StickyMobileCallButton />
        <AskConcierge />
      </body>
    </html>
  );
}
