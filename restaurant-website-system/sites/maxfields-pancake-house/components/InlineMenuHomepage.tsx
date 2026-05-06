import { content } from '../content';
import { DenseMenuColumns } from './DenseMenuColumns';

export function InlineMenuHomepage() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-canvas">
      <div className="max-w-plate mx-auto px-5 md:px-10 pt-6 md:pt-10">
        <div className="max-w-[760px]">
          <div className="text-eyebrow text-accent">{content.menuIntro.eyebrow}</div>
          <h2 id="menu-heading" className="mt-3 font-display text-section-h2 font-medium text-ink">
            {content.menuIntro.heading}
          </h2>
          <p className="mt-4 text-body text-ink-muted">{content.menuIntro.body}</p>
        </div>
      </div>
      {content.menu.map((section) => (
        <DenseMenuColumns key={section.id} section={section} />
      ))}
    </section>
  );
}
