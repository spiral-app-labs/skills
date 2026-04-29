'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

export function GuestProofSection() {
  const proof = content.reviewProof;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-bg-cream px-6 py-20 md:py-28" aria-labelledby="guest-proof-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.4fr] md:items-start">
        <motion.div
          className="max-w-xl"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0.96, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: theme.motion.easing }}
        >
          <p className="text-address text-text-muted-dark">{proof.eyebrow}</p>
          <h2
            id="guest-proof-heading"
            className="mt-4 font-display text-section-h1 text-text-dark"
            style={{ fontWeight: 300 }}
          >
            {proof.heading}
          </h2>
          <p className="mt-5 text-body leading-relaxed text-text-muted-dark">
            {proof.body}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={proof.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button rounded-button bg-text-dark px-6 py-3 text-button text-bg-cream hover:bg-black"
            >
              {proof.primaryCta.label}
            </Link>
            <Link
              href={proof.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button rounded-button border border-text-dark/30 px-6 py-3 text-button text-text-dark hover:border-text-dark"
            >
              {proof.secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {proof.cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group border-y border-text-dark/15 py-6 md:grid md:grid-cols-[140px_1fr] md:gap-8"
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0.96, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.7,
                ease: theme.motion.easing,
                delay: prefersReducedMotion ? 0 : index * 0.08,
              }}
            >
              <p className="text-address uppercase text-text-muted-dark">{card.kicker}</p>
              <div>
                <h3
                  className="mt-3 font-display text-body-h3 text-text-dark transition-transform duration-300 group-hover:translate-x-1 md:mt-0"
                  style={{ fontWeight: 300 }}
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-body-sm leading-relaxed text-text-muted-dark">
                  {card.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
