import Link from 'next/link';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

export function ContactFormBlock() {
  const f = content.contactPage.form;
  return (
    <section className="bg-bg-white py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <EyebrowDotLabel className="mb-3">{f.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{f.title}</h2>
          <p className="mt-4 text-body text-text-muted">{f.body}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {f.actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="rounded-card border border-border-light bg-bg-cream px-5 py-6 text-center font-display text-[22px] text-text-dark hover:border-accent transition"
            >
              {action.label}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-body-sm text-text-muted">{f.footnote}</p>
      </div>
    </section>
  );
}
