import type { Metadata } from 'next';
import { content } from '../content.example';
import { MobileStickyActions } from '../components/MobileStickyActions';
import './globals.css';

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-bg-white text-text-dark antialiased">
        {children}
        <MobileStickyActions actions={content.brand.utilityActions} />
      </body>
    </html>
  );
}
