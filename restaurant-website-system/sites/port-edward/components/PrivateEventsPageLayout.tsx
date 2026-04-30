'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content } from '../content.example';

export function PrivateEventsPageLayout() {
  const page = content.privateEventsPage;

  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-3xl text-body text-ink-muted md:col-span-8">{page.intro}</p>
          <a
            href={content.brand.phoneHref}
            className="inline-flex items-center justify-center bg-ink px-5 py-4 text-button text-ink-on-dark transition-colors hover:bg-accent-dark md:col-span-4"
          >
            {page.contact}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {page.rooms.map((room, i) => (
            <motion.article
              key={room.name}
              className="border border-hairline bg-canvas p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.44, 0, 0.56, 1], delay: i * 0.07 }}
            >
              <p className="label-eyebrow mb-4 text-accent">{room.capacity}</p>
              <h2 className="mb-3 font-display text-[30px] leading-9 text-ink">{room.name}</h2>
              <p className="text-body-sm text-ink-muted">{room.note}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 overflow-hidden border border-hairline md:grid-cols-12">
          <div className="relative min-h-[320px] bg-hairline md:col-span-6 md:min-h-[520px]">
            <Image
              src={content.images.privateTopside}
              alt={page.heroAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="bg-canvas-alt p-6 md:col-span-6 md:p-10">
            <p className="label-eyebrow mb-4 text-accent">Inquiry detail that saves a phone call</p>
            <h2 className="mb-6 font-display text-[36px] leading-10 text-ink md:text-section-h2-sm">
              Help Cynthia route the event quickly
            </h2>
            <ul className="grid gap-4">
              {page.inquiryPrompts.map((prompt) => (
                <li key={prompt} className="border-b border-hairline pb-4 text-body text-ink">
                  {prompt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
