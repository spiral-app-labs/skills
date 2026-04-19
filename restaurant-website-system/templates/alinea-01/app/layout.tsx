import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Cormorant Garamond — weight 500 is the signature. Going to 400 reads too light,
// 700 reads too heavy. 500 gives subtle authority.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

// EB Garamond (substitute for adobe-garamond-pro — the original body font requires
// an Adobe Fonts subscription).
// EB Garamond Google Font supports 400-800. We use 400 as the body weight
// (closest available to the original adobe-garamond-pro 300). The delicate
// feel comes from the line-height at 1.8× more than from the weight.
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <body className="font-body bg-canvas text-text antialiased">{children}</body>
    </html>
  );
}
