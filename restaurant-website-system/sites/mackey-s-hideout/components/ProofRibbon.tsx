import { content } from '../content';

/**
 * ProofRibbon — Mackey-specific public proof bridge.
 *
 * Bramble needs mood, but this lead also needs immediate credibility because
 * the current official site reads like an event archive. This strip turns the
 * captured public proof into a quick sellable receipt without overclaiming food
 * or owner-confirmed hours.
 */
export function ProofRibbon() {
  const proof = content.proofRibbon;

  return (
    <section className="bg-bg-dark px-6 pb-14 md:pb-18">
      <div className="mx-auto max-w-6xl border-y border-text-cream/18 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.95fr_1.35fr] md:items-end">
          <div className="space-y-3">
            <p className="text-address text-text-cream/70">{proof.eyebrow}</p>
            <h2 className="font-display text-[clamp(30px,6vw,52px)] leading-[0.96] text-text-cream" style={{ fontWeight: 300 }}>
              {proof.title}
            </h2>
            <p className="max-w-md text-body-sm leading-relaxed text-text-muted-cream">{proof.body}</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {proof.metrics.map((metric) => (
              <div key={metric.label} className="rounded-card border border-text-cream/18 bg-text-cream/[0.045] px-4 py-5 text-center">
                <p className="font-display text-[44px] leading-none text-text-cream" style={{ fontWeight: 300 }}>
                  {metric.value}
                </p>
                <p className="mt-3 text-address text-text-cream/84">{metric.label}</p>
                <p className="mt-2 text-[12px] leading-5 text-text-muted-cream">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
