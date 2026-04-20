import Link from 'next/link';
import { content } from '../content.example';
import { BrandWordmark } from './BrandWordmark';

/**
 * LatteNav — simplest nav in catalog. Hand-drawn wordmark left + anchor links right.
 * No pill, no blur, no sticky. Cream-on-cream.
 */
export function LatteNav() {
  return (
    <header className="w-full bg-canvas">
      <div className="mx-auto max-w-page flex items-center justify-between px-5 md:px-10 py-6">
        <Link href="/" aria-label={content.brand.name}>
          <BrandWordmark size="sm" />
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          {content.nav.primary.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-nav-label text-ink hover:opacity-60 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
