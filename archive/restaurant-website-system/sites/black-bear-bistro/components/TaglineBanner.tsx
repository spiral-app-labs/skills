import { content } from '../content.example';

// Mid-page tagline banner. Pattern is reusable; the "bold flavours / local
// ingredients / crafted with love" source copy is weak (audit §6) — encourage
// forks to swap. Small photo collage + 3 trust icons beside.
export function TaglineBanner() {
  const { heading, collage, trustIcons } = content.tagline;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
        <div>
          <h2 className="font-display text-section-h2 font-medium text-ink whitespace-pre-line">
            {heading}
          </h2>
          <div className="mt-5 flex items-center gap-4 text-body-sm text-ink-muted">
            {trustIcons.map((label) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full md:w-[360px]">
          {collage.map((p, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-card bg-canvas-alt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="eager" decoding="async" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
