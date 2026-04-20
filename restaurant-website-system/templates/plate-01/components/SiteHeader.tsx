'use client';

import Link from 'next/link';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

// Nav bar — logo-left (lowercase "plate" wordmark) + links-right + terracotta
// CTA right-most. Sticky on scroll. Minimal, unobtrusive — it must not compete
// with the menu content below.
//
// Aliveness retrofit (2026-04-20): LiveOpenStatus "pill" variant sits just left
// of the Book-a-table CTA on desktop. Pill register matches the casual-modern
// bistro tone; live state reduces reservation friction per aliveness-patterns §1.1.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-divider/60">
      <nav className="max-w-plate mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        <Link href="/" className="font-display font-bold text-[28px] tracking-tight leading-none text-ink">
          {content.brand.name.toLowerCase()}
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
          <LiveOpenStatus
            hours={content.brand.hoursConfig}
            variant="pill"
            className="hidden lg:inline-flex text-xs"
          />
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
