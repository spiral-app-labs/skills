'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';

function EventLink({ href, label }: { href: string; label: string }) {
  const className =
    'mt-5 inline-flex items-center border border-ink px-4 py-3 text-button text-ink transition-colors hover:bg-ink hover:text-ink-on-dark';
  if (href.startsWith('http') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function TheJournalBlogBlock() {
  return (
    <section id="events" className="w-full bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-eyebrow mb-3 text-accent">{content.events.eyebrow}</p>
            <h2 className="font-display text-[42px] leading-[46px] text-ink md:text-section-h2">
              {content.events.heading}
            </h2>
          </div>
          <p className="max-w-lg text-body text-ink-muted">{content.events.intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {content.events.items.map((event, i) => (
            <motion.article
              key={event.title}
              className="flex flex-col border border-hairline bg-canvas"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.44, 0, 0.56, 1], delay: i * 0.08 }}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-hairline">
                <Image
                  src={event.photo}
                  alt={event.title}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="label-eyebrow mb-3 text-accent">{event.date} · {event.time}</p>
                <h3 className="mb-3 font-display text-[30px] leading-9 text-ink">{event.title}</h3>
                <p className="flex-1 text-body-sm text-ink-muted">{event.body}</p>
                <EventLink href={event.href} label={event.cta} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 border border-hairline bg-canvas-alt p-5 md:grid-cols-3 md:p-6">
          {content.events.recurring.map((item) => (
            <p key={item} className="text-body-sm text-ink">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
