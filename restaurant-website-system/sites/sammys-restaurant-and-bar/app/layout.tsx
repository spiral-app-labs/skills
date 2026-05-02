import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { content } from '../content.example';
import { StickyMobileCallBar } from '../components/StickyMobileCallBar';
import './globals.css';

// Urbanist — sole typeface. Geometric-humanist sans with slightly rounded
// terminals. Weight 500 headings, 400 body. 700 reserved for the massive
// footer wordmark. See theme.ts for the full type scale.
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-urbanist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
  openGraph: {
    title: content.brand.name,
    description: content.brand.description,
    locale: 'en_US',
    type: 'website',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-body bg-canvas text-ink antialiased pb-[68px] md:pb-0">
        {children}
        <StickyMobileCallBar />
      </body>
    </html>
  );
}
