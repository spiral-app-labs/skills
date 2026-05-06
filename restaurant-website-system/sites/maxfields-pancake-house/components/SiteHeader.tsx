'use client';

import Link from 'next/link';
import { content } from '../content';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-divider/60">
      <nav className="max-w-plate mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        <Link href="/" className="font-display font-bold text-[24px] md:text-[28px] tracking-tight leading-none text-ink">
          maxfield's
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {content.nav.primary.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-nav-label font-medium text-ink hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={content.brand.directionsHref}
            className="hidden lg:inline-flex text-button font-medium text-ink border border-divider hover:border-accent hover:text-accent px-4 py-2.5 rounded-button transition-colors"
          >
            Directions
          </Link>
          <Link
            href={content.nav.cta.href}
            className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-5 py-2.5 rounded-button transition-colors"
          >
            {content.nav.cta.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}
