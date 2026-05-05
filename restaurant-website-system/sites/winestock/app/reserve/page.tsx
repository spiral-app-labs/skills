'use client';

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
      <main className="bg-bg-dark min-h-screen pt-32 pb-20 px-6">
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

          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            {r.formFields.map((field) => (
              <label key={field} className="flex flex-col gap-1.5">
                <span className="text-address text-text-muted-cream">{field}</span>
                <input
                  type={field.toLowerCase().includes('email') ? 'email'
                      : field.toLowerCase().includes('date') ? 'date'
                      : field.toLowerCase().includes('time') ? 'time'
                      : field.toLowerCase().includes('size') ? 'number'
                      : 'text'}
                  className="w-full px-3 py-2.5 rounded-button bg-bg-dark border border-text-cream/30 text-body text-text-cream placeholder:text-text-muted-cream/50 focus:outline-none focus:border-text-cream/70 transition-colors"
                />
              </label>
            ))}
            <button
              type="submit"
              className="sm:col-span-2 mt-3 py-3.5 rounded-button bg-text-cream text-text-dark hover:bg-white text-button transition-colors"
            >
              {r.submitLabel}
            </button>
          </form>
        </motion.div>
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
