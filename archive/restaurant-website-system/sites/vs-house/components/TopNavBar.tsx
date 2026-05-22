'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { content } from '../content';
import { LiveOpenStatus } from './LiveOpenStatus';

const HOURS = {
  ranges: content.hours.weekly.map((r, i) => ({
    day: i as 0|1|2|3|4|5|6,
    open: r.open,
    close: r.close,
  })),
  timezone: content.hours.timezone,
};

const NAV = [
  { href: '/',        label: 'Home' },
  { href: '/menu',    label: 'Menu' },
  { href: '/about',   label: 'Our Family' },
  { href: '/contact', label: 'Visit' },
];

export function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-darker/90 backdrop-blur-md border-b border-border-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 group">
          <span className="font-display text-text-white text-2xl lg:text-[28px] tracking-tight">
            {content.brand.wordmark}
          </span>
          <span className="hidden sm:inline text-text-muted-dark text-eyebrow font-body group-hover:text-accent transition">
            {content.brand.subline}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-text-white text-nav-label hover:text-accent transition"
            >
              {label}
            </Link>
          ))}
          <span className="h-4 w-px bg-border-dark" aria-hidden />
          <LiveOpenStatus
            hours={HOURS}
            variant="dot"
            className="text-text-muted-dark text-bodySm"
          />
          <a
            href={content.links.reserve}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-dark text-text-white text-button rounded-button transition"
          >
            Reserve
          </a>
        </nav>

        <button
          aria-label="Open menu"
          className="lg:hidden text-text-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-4 h-px bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-bg-darker border-t border-border-dark px-5 py-6 space-y-4">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-text-white text-lg font-display"
            >
              {label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border-dark">
            <LiveOpenStatus hours={HOURS} variant="pill" />
          </div>
          <a
            href={content.links.reserve}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center px-5 py-3 bg-accent text-text-white text-button rounded-button"
          >
            Reserve a table
          </a>
        </div>
      )}
    </header>
  );
}
