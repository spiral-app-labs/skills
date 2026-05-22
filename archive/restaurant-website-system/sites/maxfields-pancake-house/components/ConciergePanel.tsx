'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content';
import { conciergePrompts, conciergeResponses, type ConciergePromptId } from '../concierge-kb';
import { theme } from '../theme';

export function ConciergePanel() {
  const [activePrompt, setActivePrompt] = useState<ConciergePromptId>('hours');
  const panel = content.concierge;
  const response = conciergeResponses[activePrompt];

  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing }}
        >
          <div className="text-eyebrow text-accent">{panel.eyebrow}</div>
          <h2 className="mt-3 font-display text-section-h2 font-medium text-ink">{panel.heading}</h2>
          <p className="mt-4 max-w-[54ch] text-body text-ink-muted">{panel.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {panel.handoffs.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex rounded-full border border-divider bg-canvas-alt px-4 py-2 text-body-sm text-ink hover:border-accent hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-body-sm text-ink-muted">{panel.note}</p>
        </motion.div>

        <motion.div
          className="rounded-card border border-divider bg-white/90 p-5 md:p-6"
          initial={{ opacity: 0, y: theme.motion.revealLift }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: theme.motion.revealDuration, delay: 0.08, ease: theme.motion.easing }}
        >
          <div className="text-eyebrow text-ink-muted">{panel.promptLabel}</div>
          <div className="mt-4 flex flex-wrap gap-3">
            {conciergePrompts.map((prompt) => {
              const isActive = prompt.id === activePrompt;
              return (
                <button
                  key={prompt.id}
                  type="button"
                  onClick={() => setActivePrompt(prompt.id)}
                  className={`rounded-full px-4 py-2 text-left text-body-sm transition-colors ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'border border-divider bg-canvas-alt text-ink hover:border-accent hover:text-accent'
                  }`}
                >
                  {prompt.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-[28px] bg-canvas-alt p-5 md:p-6">
            <div className="text-eyebrow text-ink-muted">Visitor question</div>
            <p className="mt-2 text-[18px] font-medium text-ink">
              {conciergePrompts.find((prompt) => prompt.id === activePrompt)?.question}
            </p>

            <div className="mt-6 text-eyebrow text-accent">Concierge answer</div>
            <h3 className="mt-2 text-[24px] leading-tight font-medium text-ink">{response.title}</h3>
            <p className="mt-3 text-body text-ink-muted">{response.summary}</p>

            <ul className="mt-5 space-y-3">
              {response.details.map((detail) => (
                <li key={detail} className="text-body text-ink-muted">
                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href={response.handoffHref}
                className="inline-flex rounded-button bg-accent px-5 py-3 text-button font-medium text-white hover:bg-accent-dark transition-colors"
              >
                {response.handoffLabel}
              </Link>
              <p className="text-body-sm text-ink-muted">{response.safetyNote}</p>
            </div>
          </div>

          <div className="mt-5 rounded-[24px] border border-divider p-4 md:p-5">
            <div className="text-eyebrow text-ink-muted">KB sources used</div>
            <p className="mt-2 text-body-sm text-ink-muted">{response.sources.join(' • ')}</p>
            <p className="mt-4 text-body-sm text-ink-muted">{panel.fallback}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
