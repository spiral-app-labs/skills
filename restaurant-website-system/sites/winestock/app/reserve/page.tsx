'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TopTriptychHeader } from '../../components/TopTriptychHeader';
import { BrambleWordmarkFooter } from '../../components/BrambleWordmarkFooter';
import { theme } from '../../theme';
import { content } from '../../content';

export default function ReservePage() {
  const r = content.reservation;
  return (
    <>
      <TopTriptychHeader />
      <main className="bg-bg-dark pt-28 pb-14 px-6 md:pt-32 md:pb-18">
        <motion.div
          className="max-w-xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: theme.motion.easing, delay: 0.2 }}
        >
          <div className="space-y-3">
            <h1 className="font-display text-section-h1 text-text-cream" style={{ fontWeight: 300 }}>
              {r.heading}
            </h1>
            <p className="text-body text-text-muted-cream">{r.body}</p>
          </div>

          <div className="grid gap-3 text-left">
            {content.contactActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group rounded-card border border-text-cream/20 bg-text-cream/[0.06] p-5 transition-colors hover:bg-text-cream/10"
              >
                <span className="flex items-center justify-between gap-4 text-button text-text-cream">
                  {action.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="mt-2 block text-body text-text-muted-cream">{action.note}</span>
              </Link>
            ))}
          </div>

          <p className="text-body text-text-muted-cream">
            For the fastest answer, choose the contact path that fits your question: email, phone,
            Facebook updates, or directions to Cass Street.
          </p>
          <p className="text-address text-text-muted-cream">
            136 Cass St, Woodstock, IL · info@shopwinestock.com
          </p>
        </motion.div>
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
