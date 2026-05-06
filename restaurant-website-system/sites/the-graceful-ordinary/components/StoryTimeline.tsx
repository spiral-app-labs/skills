'use client';

import { motion } from 'framer-motion';
import { DH } from './DisplayHeading';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * StoryTimeline — vertical-line + phase-marker timeline.
 * Each phase: phase title + body. Connected by a vertical line.
 */
export function StoryTimeline() {
  const a = content.about;
  return (
    <section className="px-6 md:px-12 py-20 max-w-[900px] mx-auto">
      <div className="text-center mb-12">
        <DH content={a.storyHeading} as="h2" size="section-h1" align="center" italicColor={theme.color.accent} />
      </div>
      <div className="relative">
        {/* Vertical line */}
        <span className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border/50" aria-hidden />

        <div className="space-y-12">
          {a.timeline.map((phase, i) => (
            <motion.div
              key={phase.phase}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-start"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: theme.motion.revealDuration, ease: theme.motion.easing, delay: i * 0.08 }}
            >
              {/* Marker dot */}
              <span
                className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-canvas"
                aria-hidden
              />
              {/* Alternate sides on desktop */}
              <div className={i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}>
                <h3 className="font-display text-card-title text-text mb-1.5">{phase.phase}</h3>
                <p className="text-body text-text-muted leading-relaxed">{phase.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
