import { content } from '../content.example';

// 3-tier H3 + body values block. Observed H3 @ 28/28 weight 500 in meta.
export function AboutValuesGrid() {
  const { heading, items } = content.about.values;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-20">
      <h2 className="font-display text-section-h2 font-medium text-ink text-center mb-10 md:mb-14">
        {heading}
      </h2>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-section-h3 font-medium text-accent">{item.title}</h3>
            <p className="mt-3 text-body text-ink-muted max-w-[40ch]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
