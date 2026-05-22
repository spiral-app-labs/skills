// HowItWorksFormat — MAAX-specific improvement #2.
//
// The audit's secret-sauce pull: AYCE Korean BBQ + Chinese hot pot is the
// brand. Reviews say "first Asian BBQ + hot pot experience — amazing."
// Guests new to AYCE need to KNOW how the format works before they reserve.
// This is a 4-step "how it works" strip that demystifies the table flow.

'use client';

import { motion, useReducedMotion } from 'framer-motion';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    n: '01',
    title: 'Pick a tier',
    body: 'Standard, Premium, or Wagyu+Seafood top tier. All-you-can-eat means no caps within the rotation.',
  },
  {
    n: '02',
    title: 'Pick a broth',
    body: 'Szechuan spicy. Malatang. Tomato. Mushroom. Bone broth. Split-pot for two.',
  },
  {
    n: '03',
    title: 'Grill at the table',
    body: 'Smokeless burner built into your table. Server brings cuts in rounds — request anything, anytime.',
  },
  {
    n: '04',
    title: 'Two hours, no rush',
    body: 'Run BBQ alone, hot pot alone, or both. Order more whenever. Walk out full.',
  },
];

export function HowItWorksFormat() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-bg-dark py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="font-body text-[12px] uppercase tracking-[0.18em] text-accent">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            How AYCE Works Here
          </p>
          <h2 className="mt-3 font-display text-[36px] leading-tight text-text-white md:text-[52px]">
            First time? It runs in four steps.
          </h2>
          <p className="mt-5 max-w-prose font-body text-[15px] text-text-muted-light">
            The format is interactive — you cook some of it, the kitchen handles the rest. Here's what the table flow actually looks like.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="relative flex flex-col">
              <p className="font-display text-[56px] leading-none text-accent/70">
                {step.n}
              </p>
              <div className="mt-4 h-px w-12 bg-accent" />
              <h3 className="mt-5 font-display text-[24px] leading-tight text-text-white">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-relaxed text-text-muted-light">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
