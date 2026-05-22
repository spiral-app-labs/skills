import Link from 'next/link';
import { content } from '../content';

/**
 * VisitPlanner — concrete handoff cards for Winestock's actual use cases.
 * Keeps conversion practical without inventing reservations or online ordering.
 */
export function VisitPlanner() {
  return (
    <section className="bg-bg-cream px-6 py-16 md:py-20 text-text-dark">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-start">
        <div className="space-y-4">
          <p className="text-address text-text-muted">Choose your Winestock path</p>
          <h2 className="font-display text-section-h1" style={{ fontWeight: 300 }}>
            Bottle help, lounge nights, or boards to bring home.
          </h2>
          <p className="text-body text-text-muted">
            The strongest conversion is not a generic form — it is getting the visitor to the right real-world handoff.
          </p>
        </div>
        <div className="grid gap-4">
          {content.visitPlanner.map((item) => (
            <article key={item.moment} className="rounded-card border border-text-dark/15 bg-white/70 p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="font-display text-body-h3" style={{ fontWeight: 300 }}>{item.moment}</h3>
                  <p className="mt-2 text-body text-text-muted">{item.answer}</p>
                </div>
                <Link
                  href={item.action.href}
                  className="inline-flex justify-center rounded-button border border-text-dark/30 px-5 py-3 text-button text-text-dark transition-colors hover:bg-text-dark hover:text-text-cream"
                >
                  {item.action.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
