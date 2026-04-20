import { content } from '../content.example';

// HowItWorksSteps — 3-up numbered step cards on cream bg.
// Audit §11 — PROMOTE-NOW. Reusable for any meal-kit / delivery / subscription
// / "service-with-a-process" brief. Variant axes: step-count (3-5), media type,
// bg color.
//
// DUAL-ARCHETYPE NOTE: step 2 label is "Get It Delivered" (meal-kit register).
// For fast-casual storefront forks, rename to "Pick It Up" / "Made Fresh".

export function HowItWorksSteps() {
  const { howItWorks } = content;
  return (
    <section className="bg-canvas-cream py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-section-h2 text-accent-brown">{howItWorks.heading}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {howItWorks.steps.map((step) => (
            <div key={step.number} className="bg-canvas rounded-card p-6 md:p-8 shadow-[0_6px_24px_rgba(51,22,18,0.06)]">
              <div className="aspect-[4/3] rounded-tile overflow-hidden mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-4xl text-accent-green">{step.number}</span>
                <h3 className="font-display text-step-label text-accent-brown">{step.label}</h3>
              </div>
              <p className="text-body text-text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
