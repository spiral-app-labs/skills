'use client';

import Link from 'next/link';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

// Sammy's nav. On mobile the original plate-01 header overflowed: the
// 28px lowercase wordmark wrapped to 2 lines, and the "Call (847) 669-9025"
// CTA wrapped to 2 lines next to it. Two fixes:
//   - Wordmark uses content.wordmark ("Sammy's") on mobile / full brand name
//     on md+. Single line at every breakpoint.
//   - CTA shows phone icon + "Call" on mobile / full number on md+.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-divider/60">
      <nav className="max-w-plate mx-auto flex items-center justify-between gap-3 px-4 md:px-10 py-3 md:py-4">
        <Link
          href="/"
          aria-label={content.brand.name}
          className="font-display font-bold tracking-tight leading-none text-ink whitespace-nowrap"
        >
          <span className="md:hidden text-[22px]">{content.wordmark}</span>
          <span className="hidden md:inline text-[26px] lg:text-[28px]">
            {content.brand.name.toLowerCase()}
          </span>
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
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-button font-medium px-4 md:px-5 py-2.5 rounded-button transition-colors whitespace-nowrap"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:hidden"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="md:hidden">Call</span>
            <span className="hidden md:inline">{content.nav.cta.label}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
