'use client';

import { motion } from 'framer-motion';
import { content } from '../content.example';

// 3×2 staff portrait grid. Stagger reveals + rounded-image + hover lift.
export function StaffGrid() {
  const { heading, people } = content.about.staff;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-20">
      <h2 className="font-display text-section-h2 font-medium text-ink mb-10 md:mb-14">
        {heading}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-image bg-canvas-alt shadow-sm group-hover:shadow-md transition-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.photo}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="mt-3 text-[17px] font-medium text-ink">{p.name}</div>
            <div className="text-body-sm text-ink-muted">{p.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
