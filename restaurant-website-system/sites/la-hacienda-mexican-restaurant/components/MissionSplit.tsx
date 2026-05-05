import Link from 'next/link';
import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * MissionSplit — 2-column "Immerse yourself in an asian experience" block.
 * Left: text + CTA + phone. Right: photo card.
 */
export function MissionSplit() {
  const m = content.mission;
  const ctaIsExternal = m.cta.href.startsWith('http') || m.cta.href.startsWith('tel:');
  return (
    <section className="bg-bg-cream pt-40 md:pt-48 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-card overflow-hidden order-2 md:order-1">
          <Image src={m.image} alt={m.imageAlt} fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <EyebrowDotLabel className="mb-4">{m.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{m.title}</h2>
          <p className="mt-5 text-body text-text-muted max-w-md">{m.body}</p>
          <div className="mt-8 flex items-center gap-5 flex-wrap">
            {ctaIsExternal ? (
              <a href={m.cta.href} className="inline-block bg-bg-dark text-text-white px-6 py-3 rounded-button text-button font-semibold hover:bg-accent transition">
                {m.cta.label}
              </a>
            ) : (
              <Link href={m.cta.href} className="inline-block bg-bg-dark text-text-white px-6 py-3 rounded-button text-button font-semibold hover:bg-accent transition">
                {m.cta.label}
              </Link>
            )}
            <a href={`tel:${m.phone.replace(/\s/g, '')}`} className="text-body-sm text-text-dark">
              <span className="text-accent mr-1">☎</span> {m.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
