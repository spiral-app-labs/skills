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
  secondaryCta,
  metaItems,
  quickActions,
  note,
  plateImage,
  plateAlt = '',
  compact = false,
  emphasizeSecondaryCta = false,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string | null;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  metaItems?: string[];
  quickActions?: Array<{ label: string; detail: string; href: string }>;
  note?: string;
  plateImage?: string;
  plateAlt?: string;
  compact?: boolean;
  emphasizeSecondaryCta?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-bg-dark text-text-white ${
        compact
          ? 'pt-[96px] pb-14 md:pt-[120px] md:pb-20'
          : 'min-h-[calc(100svh-5rem)] pt-[92px] pb-10 md:min-h-[calc(100svh-4rem)] md:pt-[140px] md:pb-0'
      }`}
    >
      {/* Flanking botanicals */}
      <div className="absolute left-0 top-20 pointer-events-none hidden md:block">
        <BotanicalDecor side="left" />
      </div>
      <div className="absolute right-0 top-20 pointer-events-none hidden md:block">
        <BotanicalDecor side="right" />
      </div>

      <div className="relative mx-auto max-w-[900px] px-4 text-center sm:px-6">
        {eyebrow && (
          <EyebrowDotLabel tone="light" className="mb-5 max-w-full flex-wrap justify-center overflow-hidden text-center">
            <span className="max-w-full whitespace-normal break-words">{eyebrow}</span>
          </EyebrowDotLabel>
        )}
        <h1 className="mx-auto max-w-[14ch] text-[clamp(2.35rem,9vw,5rem)] font-display leading-[1.04] text-text-white text-balance sm:text-hero-h1">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-body text-text-muted-dark sm:mt-5 sm:px-0">{subtitle}</p>
        )}
        {(cta || secondaryCta) && (
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            {cta && (
              <Link
                href={cta.href}
                className="inline-flex min-w-0 items-center justify-center rounded-pill bg-accent px-6 py-3.5 text-button font-semibold text-text-white transition hover:brightness-110 sm:inline-block sm:px-7"
              >
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`inline-flex min-w-0 items-center justify-center rounded-pill px-6 py-3.5 text-button font-semibold transition sm:inline-block sm:px-7 ${
                  emphasizeSecondaryCta
                    ? 'border border-accent bg-accent-soft text-accent hover:bg-accent hover:text-text-white'
                    : 'border border-white/20 bg-white/5 text-text-white hover:bg-white/10'
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {!!metaItems?.length && (
          <div className="mt-6 flex flex-col items-center justify-center gap-2.5 text-center sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            {metaItems.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 border-l-2 border-accent/60 pl-3 text-[11px] uppercase tracking-[1.2px] text-text-muted-dark sm:rounded-pill sm:border sm:border-white/10 sm:bg-white/5 sm:px-4 sm:py-2"
              >
                <span aria-hidden className="hidden h-1.5 w-1.5 rounded-full bg-accent sm:inline-block" />
                {item}
              </div>
            ))}
          </div>
        )}
        {!!quickActions?.length && !compact && (
          <div className="mt-7 grid gap-3 text-left sm:mt-8 sm:grid-cols-2">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group min-w-0 rounded-card border border-white/10 bg-white/5 px-4 py-3.5 transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:px-5 sm:py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="min-w-0 pr-2 font-display text-[20px] text-text-white sm:text-[22px]">{action.label}</span>
                  <span
                    aria-hidden
                    className="shrink-0 text-accent transition-transform duration-200 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-body-sm text-text-muted-dark">{action.detail}</p>
              </Link>
            ))}
          </div>
        )}
        {note && !compact && (
          <p className="mx-auto mt-5 max-w-3xl text-body-sm text-text-muted-dark">{note}</p>
        )}
      </div>

      {!compact && plateImage && (
        <div className="relative mx-auto mt-8 max-w-[1000px] px-4 sm:mt-10 sm:px-6">
          <div className="hero-plate-float relative aspect-[16/9] -mb-16 md:-mb-36 rounded-[50%/25%] overflow-hidden">
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
