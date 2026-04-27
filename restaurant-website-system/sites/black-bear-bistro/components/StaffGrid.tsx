import { content } from '../content.example';

// 3x2 experience-signal photo grid with name + role caption.
export function StaffGrid() {
  const { heading, people } = content.about.staff;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-20">
      <h2 className="font-display text-section-h2 font-medium text-ink mb-10 md:mb-14">
        {heading}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {people.map((p) => (
          <div key={p.name}>
            <div className="aspect-[4/5] overflow-hidden rounded-card bg-canvas-alt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.photo} alt={p.alt} loading="eager" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 text-[17px] font-medium text-ink">{p.name}</div>
            <div className="text-body-sm text-ink-muted">{p.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
