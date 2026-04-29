// AboutPageLayout — /about is 404 in the source template (see audit §3).
// Rebuilt from scratch using pepper tokens so fork-agents have a real about
// page to customize. Documented as a rebuild in source.md.

import { content } from '../content.example';
import { StatCounter } from './StatCounter';

export function AboutPageLayout() {
  const a = content.about;
  return (
    <main className="bg-canvas">
      <section className="max-w-content mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-10">
        <h1 className="text-hero-h1 font-extrabold text-ink">{a.title}</h1>
        <p className="mt-4 max-w-[720px] text-body text-ink-soft">{a.subtitle}</p>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-16">
        <div className="relative rounded-card overflow-hidden aspect-[3/2] md:aspect-[2/1]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a.photo} alt={a.photoAlt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {a.stats.map((s) => (
          <div key={s.label} className="text-center">
            <StatCounter
              value={s.value}
              className="block text-[28px] leading-[34px] md:text-[44px] md:leading-[52px] font-extrabold text-accent"
            />
            <div className="mt-1 text-body-sm text-ink-soft">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="max-w-content mx-auto px-5 md:px-10 pb-24">
        <div className="max-w-[720px] mx-auto space-y-5">
          <p className="text-body text-ink-soft">{a.intro}</p>
          {a.paragraphs.map((p, i) => (
            <p key={i} className="text-body text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
