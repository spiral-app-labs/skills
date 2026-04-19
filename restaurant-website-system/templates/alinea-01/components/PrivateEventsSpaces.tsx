import Image from 'next/image';
import { content } from '../content.example';

/**
 * PrivateEventsSpaces — 3-column "Our Spaces" block for the private-events page.
 * Darker bg strip to visually distinguish from the white page canvas.
 */
export function PrivateEventsSpaces() {
  const s = content.privateEvents.spaces;
  return (
    <section className="bg-strip-warm-dark text-text-strip py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display text-section-h2 text-text-strip text-center mb-14">{s.heading}</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {s.items.map((item) => (
            <article key={item.label} className="text-center">
              <h3 className="font-display italic text-card-label mb-2">{item.label}</h3>
              <p className="text-body-sm text-text-strip/90 mb-5 max-w-[260px] mx-auto">{item.description}</p>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={item.image} alt={item.label} fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-body-sm text-text-strip/80 max-w-xl mx-auto">{s.footerNote}</p>
      </div>
    </section>
  );
}
