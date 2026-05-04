import Image from 'next/image';
import Link from 'next/link';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

export function ReservationFormBlock() {
  const r = content.menuPage.reservation;
  return (
    <section id="plan-visit" className="bg-bg-white py-24 px-6 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <EyebrowDotLabel className="mb-3">{r.eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark mb-8">{r.title}</h2>
          <p className="text-body text-text-muted max-w-xl mb-8">{r.body}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {r.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="rounded-card border border-border-light bg-bg-cream p-5 hover:border-accent transition"
              >
                <div className="font-display text-[22px] text-text-dark">{action.label}</div>
                <div className="mt-2 text-body-sm text-text-muted">{action.note}</div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-body-sm text-text-muted">{r.footnote}</p>
        </div>
        <div className="relative aspect-[4/3] rounded-card overflow-hidden">
          <Image src={r.image} alt="" fill sizes="(min-width: 768px) 500px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
