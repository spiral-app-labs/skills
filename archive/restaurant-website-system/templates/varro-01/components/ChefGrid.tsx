'use client';
// ChefGrid — 4-up chef portrait cards with cream mat + sepia portrait + caps name/role.
// **PROMOTE-NOW per audit §11.** First catalog template with this primitive.
// Sepia portraits handled via `.img-sepia` CSS filter (see globals.css) so
// Unsplash placeholders inherit the correct grading without bespoke photography.

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function ChefGrid() {
  const { eyebrow, heading, body, team } = content.chefs;

  return (
    <section id="chefs" className="py-24 lg:py-36 px-5 lg:px-12">
      <div className="mx-auto max-w-page">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <span className="text-eyebrow text-accent mb-4 block">{eyebrow}</span>
          <h2 className="font-display text-section-h2 text-ink mb-6">{heading}</h2>
          <p className="text-body-lg text-ink-muted max-w-prose-editorial">{body}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {team.map((chef, i) => (
            <motion.article
              key={chef.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-mat rounded-card p-5 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-card mb-5 bg-canvas-soft">
                <Image
                  src={chef.photo}
                  alt={`${chef.name} — ${chef.role}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover img-sepia"
                />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl text-canvas leading-none mb-2">
                {chef.name}
              </h3>
              <p className="text-eyebrow text-accent mb-3">{chef.role}</p>
              <p className="text-body text-canvas/75 leading-snug">{chef.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
