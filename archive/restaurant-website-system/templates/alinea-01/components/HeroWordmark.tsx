import Image from 'next/image';
import { content } from '../content.example';

/**
 * HeroWordmark — large Cormorant Garamond wordmark on dark photo hero.
 * Minimal — just the restaurant name + a tagline. The photo carries the mood.
 */
export function HeroWordmark() {
  const h = content.hero;
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden bg-text">
      <Image
        src={h.photo}
        alt={h.photoAlt}
        fill
        priority
        className="object-cover opacity-80"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
      <div className="relative h-full flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center">
        <h1 className="font-display text-hero-wordmark text-text-strip italic">{h.wordmark}</h1>
        {h.tagline && (
          <p className="mt-5 max-w-xl text-body-sm text-text-strip/90 italic font-display">
            {h.tagline}
          </p>
        )}
      </div>
    </section>
  );
}
