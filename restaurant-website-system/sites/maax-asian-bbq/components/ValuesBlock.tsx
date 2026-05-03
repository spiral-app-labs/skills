import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ValuesBlock — headline + 3-column icon+title+body values row.
 */
export function ValuesBlock() {
  const v = content.about.values;
  const icons = ['🍣', '🔥', '⚡'];
  return (
    <section className="bg-bg-cream py-24 px-6">
      <div className="max-w-[1000px] mx-auto text-center mb-12">
        <EyebrowDotLabel className="mb-3">{v.eyebrow}</EyebrowDotLabel>
        <h2 className="font-display text-section-h3 text-text-dark">{v.title}</h2>
      </div>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
        {v.items.map((it, i) => (
          <div key={it.title} className="text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-[24px] mb-4">{icons[i % icons.length]}</div>
            <h3 className="font-display text-[24px] text-text-dark">{it.title}</h3>
            <p className="mt-2 text-body-sm text-text-muted max-w-xs mx-auto">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
