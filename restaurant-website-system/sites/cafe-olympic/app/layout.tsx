import type { Metadata } from 'next';
import { Poppins, Cormorant_Garamond } from 'next/font/google';
import { content } from '../content';
import { StickyCallButton } from '../components/StickyCallButton';
import { Concierge } from '../components/Concierge';
import './globals.css';

// Poppins — body + nav + utility. Cormorant Garamond — wordmark + display
// section bookends (Greek-American heritage signal per audit Block 5).
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-canvas text-ink antialiased">
        {children}
        <StickyCallButton />
        <Concierge />
      </body>
    </html>
  );
}
