import Image from 'next/image';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ReservationFormBlock — action block for real guest next steps.
 */
export function ReservationFormBlock() {
  const r = content.menuPage.reservation;
  const links = content.links;
  return (
    <section id="reserve" className="bg-bg-white py-24 px-6 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <EyebrowDotLabel className="mb-3">{r.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark mb-8">{r.title}</h2>
          <div className="space-y-4">
            <p className="text-body text-text-muted max-w-lg">
              The captured sources support four strong actions right now: call the restaurant,
              open directions, view the current menu deck, or use the source-backed order-online path.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={links.call} className="rounded-card border border-border-light px-5 py-4 hover:border-accent transition">
                <div className="text-eyebrow text-accent mb-1">Call</div>
                <div className="font-display text-[22px] text-text-dark">{content.brand.phone}</div>
              </a>
              <a href={links.directions} className="rounded-card border border-border-light px-5 py-4 hover:border-accent transition">
                <div className="text-eyebrow text-accent mb-1">Directions</div>
                <div className="font-display text-[22px] text-text-dark">411 E Main St</div>
              </a>
              <a href={links.menu} className="rounded-card border border-border-light px-5 py-4 hover:border-accent transition">
                <div className="text-eyebrow text-accent mb-1">Current Menu</div>
                <div className="font-display text-[22px] text-text-dark">Open Canva menu</div>
              </a>
              <a href={links.order} className="rounded-card border border-border-light px-5 py-4 hover:border-accent transition">
                <div className="text-eyebrow text-accent mb-1">Order Online</div>
                <div className="font-display text-[22px] text-text-dark">Restaurantji order link</div>
              </a>
            </div>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-card overflow-hidden">
          <Image src={r.image} alt="" fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
