import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ContactFormBlock — grounded CTA block for call, menu, directions, and order.
 */
export function ContactFormBlock() {
  const f = content.contactPage.form;
  const links = content.links;
  return (
    <section className="bg-bg-white py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <EyebrowDotLabel className="mb-3">{f.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{f.title}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <a href={links.call} className="rounded-card border border-border-light p-6 hover:border-accent transition">
            <div className="text-eyebrow text-accent mb-2">Call the restaurant</div>
            <div className="font-display text-[24px] text-text-dark">{content.brand.phone}</div>
            <p className="mt-2 text-body-sm text-text-muted">Best for pickup questions and confirming tonight&apos;s plan.</p>
          </a>
          <a href={links.directions} className="rounded-card border border-border-light p-6 hover:border-accent transition">
            <div className="text-eyebrow text-accent mb-2">Get directions</div>
            <div className="font-display text-[24px] text-text-dark">East Dundee</div>
            <p className="mt-2 text-body-sm text-text-muted">411 E Main St, East Dundee, IL 60118.</p>
          </a>
          <a href={links.menu} className="rounded-card border border-border-light p-6 hover:border-accent transition">
            <div className="text-eyebrow text-accent mb-2">Open current menu</div>
            <div className="font-display text-[24px] text-text-dark">Canva menu deck</div>
            <p className="mt-2 text-body-sm text-text-muted">The current public menu source captured in the audit.</p>
          </a>
          <a href={links.order} className="rounded-card border border-border-light p-6 hover:border-accent transition">
            <div className="text-eyebrow text-accent mb-2">Order online</div>
            <div className="font-display text-[24px] text-text-dark">Restaurantji order path</div>
            <p className="mt-2 text-body-sm text-text-muted">Source-backed order-online link captured from Restaurantji.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
