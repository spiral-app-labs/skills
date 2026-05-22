// template.tsx \u2014 #10 Page transitions.
//
// Next.js App Router runs `template.tsx` *per navigation* (unlike `layout.tsx`
// which persists), so wrapping children with framer-motion gives us a
// remount-driven cross-fade between routes without any router refactor.
//
// Effect: each route enters with a 200ms opacity + 6px y-translate fade.
// No exit animation \u2014 Next App Router replaces the previous template's
// children synchronously, so we just animate the new one in. Respects
// prefers-reduced-motion (renders instantly).
'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
