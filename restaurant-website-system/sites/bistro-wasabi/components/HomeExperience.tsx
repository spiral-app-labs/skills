'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { content, links } from '../content';
import { theme } from '../theme';
import { LiveOpenStatus } from './LiveOpenStatus';
import type { HoursConfig } from '../lib/hours';
import type { ReactNode } from 'react';

export function HomeExperience() {
  return (
    <main className="px-7 py-10 md:px-10 md:py-14 space-y-16">
      <motion.section
        className="flex flex-col gap-8 md:min-h-[calc(100vh-17rem)] md:justify-end"
        initial={{ opacity: 0, y: theme.motion.revealLift }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: theme.motion.revealDuration,
          ease: theme.motion.easing,
          delay: theme.motion.revealStagger * 2,
        }}
      >
        <div className="space-y-5">
          <p className="text-ui-label text-text-muted">{content.hero.eyebrow}</p>
          <h2 className="text-[58px] leading-[52px] md:text-[66px] md:leading-[60px] xl:text-section-title text-text max-w-[8ch]">
            Sushi, Martinis, Steaks
          </h2>
          <p className="text-body text-text-muted leading-relaxed max-w-md">
            {content.hero.lead} Choose Lake in the Hills for Tock reservations and
            Toast carry-out, or start with Hoffman Estates directions and a call.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-2">
          <ActionLink href={links.tock} label="Reserve on Tock" primary />
          <ActionLink href={links.carryOut} label="Order Carry Out" />
          <ActionLink href="/menu" label="View Menu" />
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-border/50 pt-6">
          <SmallFact label={content.brand.established} value="Locally owned" />
          <SmallFact
            label="Tonight"
            value={
              <LiveOpenStatus
                hours={content.brand.hoursConfig as unknown as HoursConfig}
                variant="text"
              />
            }
          />
        </div>
      </motion.section>

      <SectionHeader
        eyebrow="Locations"
        title="Two doors, one Bistro Wasabi"
        body="Start with the location that matches tonight's table, carry-out run, or directions."
      />
      <div id="locations" className="grid grid-cols-1 gap-3">
        {content.locations.map((location, index) => (
          <motion.article
            key={location.name}
            className="rounded-card border border-border/60 bg-surface/50 p-5 space-y-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: theme.motion.revealDuration,
              ease: theme.motion.easing,
              delay: index * 0.08,
            }}
          >
            <div className="space-y-2">
              <p className="text-ui-label text-text-muted">{location.role}</p>
              <h3 className="text-section-h2 text-text">{location.name}</h3>
              <p className="text-body text-text-muted leading-relaxed">{location.address}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {location.actions.map((action) => (
                <ActionLink
                  key={`${location.name}-${action.label}`}
                  href={action.href}
                  label={action.label}
                  primary={'primary' in action ? action.primary : false}
                  compact
                />
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <SectionHeader
        eyebrow="Proof"
        title="Why people come back"
        body="Fresh fish, strong drinks, and a menu broad enough for mixed tables define the room."
      />
      <div className="grid grid-cols-1 gap-5">
        {content.proof.map((item) => (
          <div key={item.label} className="border-t border-border/60 pt-5">
            <p className="text-ui-label text-text-muted mb-2">{item.label}</p>
            <p className="text-body text-text-muted leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <section id="menu" className="space-y-6">
        <SectionHeader
          eyebrow="Menu"
          title="Sushi bar precision, dinner-room breadth"
          body="Maki, cold and hot starters, steaks, seafood entrees, martinis, sake, and wine share the same table."
        />
        <div className="grid grid-cols-2 gap-2">
          {content.menu.sections.slice(0, 4).map((section, index) => (
            <a
              key={section.title}
              href="/menu"
              className="group relative aspect-[4/5] overflow-hidden rounded-card border border-border/50 bg-surface"
            >
              <Image
                src={section.items[0].image}
                alt={section.items[0].name}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-ui-label text-text-muted">0{index + 1}</p>
                <h3 className="text-item-name text-text">{section.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="drinks" className="space-y-6">
        <SectionHeader
          eyebrow="Weekly rhythm"
          title="Wine, martinis, Sunday Mai Tais"
          body="Dinner-only specials give regulars a reason to pick the night before they pick the roll."
        />
        <div className="space-y-3">
          {content.specials.map((special) => (
            <div
              key={special.day}
              className="grid grid-cols-[92px_1fr] items-baseline gap-4 border-t border-border/60 pt-4"
            >
              <p className="text-ui-label text-text-muted">{special.day}</p>
              <p className="text-body text-text leading-relaxed">{special.offer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gift-cards" className="space-y-6 pb-10">
        <SectionHeader
          eyebrow="Carry-out + gifts"
          title="Reserve, order, send dinner"
          body="Tock, Toast, Toast gift cards, Uber Eats, phone, and email stay close without crowding the room."
        />
        <div className="grid grid-cols-[96px_1fr] gap-5 items-center rounded-card border border-border/60 bg-surface/45 p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-field bg-canvas">
            <Image
              src="/images/bistro-wasabi/gift-card.png"
              alt="Bistro Wasabi gift card"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <ActionLink href={links.giftCards} label="Buy Gift Card" primary />
            <ActionLink href={links.delivery} label="Delivery" />
            <ActionLink href={links.email} label={content.brand.email} />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <header className="space-y-3">
      <p className="text-ui-label text-text-muted">{eyebrow}</p>
      <h2 className="text-section-h2 text-text">{title}</h2>
      <p className="text-body text-text-muted leading-relaxed">{body}</p>
    </header>
  );
}

function SmallFact({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <p className="text-ui-label text-text-muted mb-2">{label}</p>
      <p className="text-body text-text">{value}</p>
    </div>
  );
}

function ActionLink({
  href,
  label,
  primary = false,
  compact = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
  compact?: boolean;
}) {
  const external = href.startsWith('http');
  const contact = href.startsWith('tel:') || href.startsWith('mailto:');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center rounded-pill border px-4 text-center text-ui-label transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-text/45 ${
        primary
          ? 'border-text/70 bg-text text-canvas hover:bg-text/90'
          : 'border-border/70 bg-surface hover:bg-surface-hover text-text'
      } ${compact ? 'py-3' : 'py-3.5'} ${contact ? 'break-all' : ''}`}
    >
      {label}
    </a>
  );
}
