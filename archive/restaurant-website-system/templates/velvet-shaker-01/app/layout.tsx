import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Inter Tight — the only typeface. Weight locked at 500 everywhere.
// Sub-500 reads too fragile against the dark canvas; 600+ breaks the modernist
// restraint and smudges the hierarchy. See theme.ts + audit §4.
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="font-sans bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
