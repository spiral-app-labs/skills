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
  const brandMark = content.brand.name
    .split(' ')
    .filter((part) => part[0])
    .slice(0, 2)
    .map((part) => part[0])
    .join('');

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
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-text-white">
          <span className="inline-block h-[28px] w-[28px] rounded-full bg-accent flex items-center justify-center">
            <span className="font-display text-[14px] leading-none text-text-white">{brandMark}</span>
          </span>
          <span className="font-display text-[22px] leading-none">{content.brand.name}</span>
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

        <div className="flex items-center gap-4">
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
            className="inline-flex items-center gap-2 bg-accent text-text-white px-5 py-2.5 rounded-pill text-button font-semibold hover:brightness-110 transition"
          >
            <span aria-hidden>☰</span>
            {content.nav.cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
