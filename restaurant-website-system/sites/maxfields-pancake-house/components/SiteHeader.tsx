'use client';

import Link from 'next/link';
import { content } from '../content';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-divider/60">
      <nav className="max-w-plate mx-auto px-5 md:px-10 py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="min-w-0">
            <div className="font-display font-bold text-[22px] md:text-[28px] tracking-tight leading-none text-ink">
              maxfield&apos;s
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              Schaumburg breakfast house
            </div>
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

          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <Link
              href={content.brand.directionsHref}
              className="inline-flex text-button font-medium text-ink border border-divider hover:border-accent hover:text-accent px-3 md:px-4 py-2.5 rounded-button transition-colors"
            >
              <span className="sm:hidden">Map</span>
              <span className="hidden sm:inline">Directions</span>
            </Link>
            <Link
              href={content.nav.cta.href}
              className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-4 md:px-5 py-2.5 rounded-button transition-colors"
            >
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">{content.nav.cta.label}</span>
            </Link>
          </div>
        </div>

        <div className="mt-3 flex md:hidden gap-2 overflow-x-auto pb-1">
          {content.nav.primary.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="shrink-0 rounded-button border border-divider bg-white/70 px-4 py-2 text-button font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-2 text-[12px] text-ink-muted md:hidden">
          Hours vary by source. Call before heading over.
        </div>
      </nav>
    </header>
  );
}
