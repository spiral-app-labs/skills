import type { Metadata } from 'next';
import { content } from '../content';
import './globals.css';

export const metadata: Metadata = {
  title: `${content.brand.fullName} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
