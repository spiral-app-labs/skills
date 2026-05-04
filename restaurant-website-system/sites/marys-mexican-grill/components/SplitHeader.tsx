'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';

/**
 * SplitHeader — logo-left / center-nav / right-orange-CTA.
 * Transparent over dark hero, solidifies on scroll.
 */
export function SplitHeader({ variant = 'over-dark' }: { variant?: 'over-dark' | 'solid' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isSolid = variant === 'solid' || scrolled;
  const bgClass = isSolid
    ? 'bg-bg-dark/95 backdrop-blur border-b border-border-dark'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${bgClass}`}>
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-2 text-text-white">
          <span className="inline-flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-accent">
            <span className="font-display text-[18px] leading-none text-text-white">
              {content.brand.name.charAt(0)}
            </span>
          </span>
          <span className="truncate font-display text-[18px] leading-none sm:text-[22px]">
            {content.brand.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {content.nav.primary.map((n) => (
            <Link key={n.href} href={n.href} className="text-nav-label text-text-white hover:text-accent transition-colors">
              {n.label}
            </Link>
          ))}
          <div className="relative group">
            <button className="text-nav-label text-text-white hover:text-accent transition-colors inline-flex items-center gap-1">
              {content.nav.dropdown.label}
              <span aria-hidden className="text-xs">▾</span>
            </button>
            <div className="absolute top-full right-0 mt-2 min-w-[160px] bg-bg-white rounded-card shadow-lg border border-border-light opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
              {content.nav.dropdown.items.map((i) => (
                <Link key={i.href} href={i.href} className="block px-4 py-2 text-body-sm text-text-dark hover:bg-accent-soft">
                  {i.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          {/* Aliveness retrofit (2026-04-20): LiveOpenStatus dot variant — dark
              canvas with orange accent matches bamzi's register per
              aliveness-patterns.md §1.1. */}
          <LiveOpenStatus
            hours={content.brand.hoursConfig as unknown as HoursConfig}
            variant="dot"
            className="hidden lg:inline-flex text-nav-label text-text-white/80"
          />

          <Link
            href={content.nav.cta.href}
            className="inline-flex items-center gap-2 rounded-pill bg-accent px-3 py-2 text-[11px] font-semibold uppercase tracking-[1.2px] text-text-white transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-button"
            aria-label={content.nav.cta.label}
          >
            <span aria-hidden className="text-xs">☰</span>
            <span className="hidden sm:inline">{content.nav.cta.label}</span>
            <span className="sm:hidden">Menu</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
