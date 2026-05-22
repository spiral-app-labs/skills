// template.tsx — page transitions (220ms opacity + 6px y).
// Next.js App Router runs template.tsx per navigation, so wrapping with
// framer-motion gives us a remount-driven cross-fade between routes.
// Respects prefers-reduced-motion.
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
