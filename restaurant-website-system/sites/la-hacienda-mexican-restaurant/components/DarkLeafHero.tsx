import Link from 'next/link';
import Image from 'next/image';
import { BotanicalDecor } from './BotanicalDecor';
import { EyebrowDotLabel } from './EyebrowDotLabel';

/**
 * DarkLeafHero — dark-canvas centered-title hero with flanking leaf illustrations.
 * The signature hero for bamzi. Used on home + reused as compact page-header strip on sub-pages.
 */
export function DarkLeafHero({
  title,
  subtitle,
  eyebrow,
  cta,
  plateImage,
  plateAlt = '',
  compact = false,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string | null;
  cta?: { label: string; href: string };
  plateImage?: string;
  plateAlt?: string;
  compact?: boolean;
}) {
  return (
    <section className={`relative bg-bg-dark text-text-white overflow-hidden ${compact ? 'pt-[120px] pb-20' : 'pt-[140px] pb-0'}`}>
      {/* Flanking botanicals */}
      <div className="absolute left-0 top-20 pointer-events-none hidden md:block">
        <BotanicalDecor side="left" />
      </div>
      <div className="absolute right-0 top-20 pointer-events-none hidden md:block">
        <BotanicalDecor side="right" />
      </div>

      <div className="relative max-w-[900px] mx-auto text-center px-7 sm:px-6">
        {eyebrow && <EyebrowDotLabel tone="light" className="mb-5">{eyebrow}</EyebrowDotLabel>}
        <h1 className="font-display text-[30px] leading-[1.14] sm:text-hero-h1 text-text-white break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-body text-text-muted-dark max-w-xl mx-auto">{subtitle}</p>
        )}
        {cta && (
          <div className="mt-8">
            <Link
              href={cta.href}
              className="inline-block bg-accent text-text-white px-7 py-3.5 rounded-pill text-button font-semibold hover:brightness-110 transition"
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>

      {!compact && plateImage && (
        <div className="relative mt-10 max-w-[1000px] mx-auto px-4 sm:px-6 hidden sm:block">
          <div className="relative aspect-[16/9] -mb-24 md:-mb-36 rounded-[50%/25%] overflow-hidden">
            <Image
              src={plateImage}
              alt={plateAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1000px, 100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
