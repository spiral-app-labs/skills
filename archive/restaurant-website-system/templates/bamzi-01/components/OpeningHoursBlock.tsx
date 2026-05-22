import Image from 'next/image';
import Link from 'next/link';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * OpeningHoursBlock — photo-left + hours-card + headline + CTA. Used on /about.
 */
export function OpeningHoursBlock() {
  const h = content.about.hours;
  return (
    <section className="bg-bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[5/4] rounded-card overflow-hidden">
          <Image src={h.image} alt="" fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
        </div>
        <div>
          <EyebrowDotLabel className="mb-4">{h.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{h.title}</h2>
          <div className="mt-8 bg-bg-cream rounded-card p-6 border border-border-light">
            <div className="text-eyebrow text-accent mb-3">Opening Hours</div>
            <dl className="space-y-2">
              {h.times.map((t) => (
                <div key={t.day} className="flex justify-between text-body-sm text-text-dark">
                  <dt>{t.day}</dt>
                  <dd className="text-text-muted">{t.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Link href={h.cta.href} className="mt-6 inline-block bg-accent text-text-white px-6 py-3 rounded-button text-button font-semibold hover:brightness-110 transition">
            {h.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
