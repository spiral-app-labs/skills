import { content } from '../content.example';

// 3-column short-text intro band on pale-peach bg. Sits between hero and
// dish carousel. Audit §3 step 3.

export function IntroRow() {
  const { introRow } = content;
  return (
    <section className="bg-canvas-peach py-16 md:py-20">
      <div className="mx-auto max-w-shell px-6 md:px-10 grid md:grid-cols-3 gap-8 md:gap-12">
        {introRow.items.map((text, i) => (
          <div key={i} className="text-center md:text-left">
            <span className="inline-block mb-3 font-display text-3xl text-accent-brown">0{i + 1}</span>
            <p className="text-body text-accent-brown/85">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
