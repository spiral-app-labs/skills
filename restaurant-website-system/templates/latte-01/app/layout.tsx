import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Poppins — single humanist sans carrying the entire type system. Weights
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
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
