'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TopTriptychHeader } from '../../components/TopTriptychHeader';
import { BrambleWordmarkFooter } from '../../components/BrambleWordmarkFooter';
import { theme } from '../../theme';
import { content } from '../../content';

export default function ReservePage() {
  const visit = content.planYourVisit;
  return (
    <>
      <TopTriptychHeader />
      <main className="bg-bg-dark min-h-screen pt-32 pb-20 px-6">
        <motion.div
          className="max-w-xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: theme.motion.easing, delay: 0.2 }}
        >
          <div className="space-y-3">
            <h1 className="font-display text-section-h1 text-text-cream" style={{ fontWeight: 300 }}>
              {visit.heading}
            </h1>
            <p className="text-body text-text-muted-cream">{visit.body}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {visit.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="px-4 py-3 rounded-button border border-text-cream/30 text-body text-text-cream hover:bg-text-cream/10 transition-colors"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
