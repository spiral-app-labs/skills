'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { content } from '../content.example';

// Nav bar — logo-left (lowercase "plate" wordmark) + links-right + terracotta
// CTA right-most. Sticky on scroll. Minimal, unobtrusive — it must not compete
// with the menu content below.
//
// Aliveness retrofit (2026-04-20): LiveOpenStatus "pill" variant sits just left
// of the Book-a-table CTA on desktop. Pill register matches the casual-modern
// bistro tone; live state reduces reservation friction per aliveness-patterns §1.1.
export function SiteHeader() {
  const pathname = usePathname();
  const [denseContentVisible, setDenseContentVisible] = useState(false);

  useEffect(() => {
    const sections = ['menu', 'book']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      setDenseContentVisible(false);
      return;
    }

    const visibleSections = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.add(entry.target);
          else visibleSections.delete(entry.target);
        });
        setDenseContentVisible(visibleSections.size > 0);
      },
      { rootMargin: '0px 0px -35% 0px', threshold: 0.05 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const showMobileQuickActions = pathname !== '/contact' && !denseContentVisible;

  return (
    <>
      <header className="relative z-40 bg-canvas/90 backdrop-blur border-b border-divider/60 md:sticky md:top-0">
        <nav className="max-w-plate mx-auto flex items-center justify-between px-5 md:px-10 py-4">
          <Link href="/" className="font-display font-bold text-[24px] md:text-[28px] tracking-tight leading-none text-ink">
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
            <span className="hidden lg:inline-flex rounded-full bg-canvas-alt px-3 py-1 text-xs font-medium text-ink-muted border border-divider">
              {content.nav.proof}
            </span>
            <Link
              href={content.nav.cta.href}
              className="bg-accent hover:bg-accent-dark text-white text-button font-medium px-5 py-2.5 rounded-button transition-colors"
            >
              {content.nav.cta.label}
            </Link>
          </div>
        </nav>
      </header>

      {showMobileQuickActions && (
        <nav
          aria-label="Mobile quick actions"
          className="mobile-quick-actions md:hidden fixed bottom-3 inset-x-3 z-50 rounded-[24px] border border-divider/80 bg-canvas/95 px-3 py-2 shadow-2xl backdrop-blur"
        >
          <div className="grid grid-cols-4 gap-1.5 max-w-plate mx-auto">
            {content.nav.mobileCtas.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={index === 0
                  ? 'flex min-h-[44px] items-center justify-center bg-accent text-white text-center text-[11px] leading-tight font-semibold px-1.5 py-2 rounded-button'
                  : 'flex min-h-[44px] items-center justify-center border border-ink/25 text-ink text-center text-[11px] leading-tight font-semibold px-1.5 py-2 rounded-button'}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
