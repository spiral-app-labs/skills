import { content } from '../content.example';

/**
 * BigHeadline — massive Prata 96px full-width section headline on cream.
 * Ceremonial punctuation between sections.
 */
export function BigHeadline({ text = content.bigHeadline }: { text?: string }) {
  return (
    <section className="bg-bg-cream py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-display text-section-h2 text-text-dark">{text}</h2>
      </div>
    </section>
  );
}
