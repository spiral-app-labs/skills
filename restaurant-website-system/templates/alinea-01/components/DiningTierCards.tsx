import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content.example';

/**
 * DiningTierCards — 3-card photo + label selector for multi-tier dining.
 * No tabs, no accordion — just photos + labels with a hover scrim.
 *
 * Strong shared candidate per audit §11.
 */
export function DiningTierCards() {
  const d = content.diningTiers;
  return (
    <section className="bg-canvas py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="max-w-prose-editorial mb-14">
          <h2 className="font-display text-section-h2 text-text">{d.heading}</h2>
          <p className="mt-5 text-body text-text">{d.body}</p>
        </header>
        <div className="grid md:grid-cols-3 gap-5 md:gap-7">
          {d.tiers.map((t) => (
            <Link
              key={t.id}
              href={t.href}
              className="group relative block overflow-hidden"
              aria-label={`${t.label} — ${t.description}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={t.image} alt={t.label} fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="absolute left-6 bottom-6 right-6 text-text-strip">
                <h3 className="font-display italic text-card-label leading-none">{t.label}</h3>
                <p className="mt-2 text-body-sm text-text-strip/90">{t.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
