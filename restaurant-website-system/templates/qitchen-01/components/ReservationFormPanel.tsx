'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme';
import { content } from '../content.example';

/**
 * ReservationFormPanel — reservation page right-column form.
 *
 * Fields: Name, Email, Phone, People, Date, Time. 2-column layout on desktop,
 * stacked on mobile. Single primary submit button.
 *
 * Real forks: when the restaurant uses OpenTable / Resy / Tock, swap this
 * for the appropriate widget embed. Keep the surrounding PageHeroSplit layout.
 */
export function ReservationFormPanel() {
  return (
    <motion.div
      className="px-8 md:px-10 py-12 md:py-16 space-y-8"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: theme.motion.revealDuration,
        ease: theme.motion.easing,
        delay: theme.motion.revealStagger * 2,
      }}
    >
      <header className="text-center space-y-3">
        <div className="flex items-center justify-center gap-4">
          <span className="block w-8 h-px bg-text-muted/40" />
          <h2 className="text-section-h2 text-text">{content.reservation.headline}</h2>
          <span className="block w-8 h-px bg-text-muted/40" />
        </div>
        <p className="text-body text-text-muted max-w-sm mx-auto">{content.reservation.intro}</p>
      </header>

      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          // Real forks: route this to your reservation backend or open the
          // OpenTable/Resy/Tock modal here.
        }}
      >
        <Field label="Name" placeholder="Jane Smith" />
        <Field label="Email" type="email" placeholder="example@email.com" />
        <Field label="Phone Number" type="tel" placeholder="+1 555 123 4567" />
        <Field label="People" type="number" min={1} max={20} defaultValue={2} />
        <Field label="Date" type="date" />
        <Field label="Time" type="time" />
        <button
          type="submit"
          className="sm:col-span-2 mt-2 py-3 rounded-field bg-surface-hover hover:bg-border border border-border/60 text-ui-label text-text transition-colors"
        >
          {content.reservation.submitLabel}
        </button>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  type = 'text',
  placeholder,
  defaultValue,
  min,
  max,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string | number;
  min?: number;
  max?: number;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-ui-label text-text-muted">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        min={min}
        max={max}
        className="w-full px-3 py-2.5 rounded-field bg-surface border border-border/50 text-body text-text placeholder:text-text-muted/60 focus:outline-none focus:border-text/40 transition-colors"
      />
    </label>
  );
}
