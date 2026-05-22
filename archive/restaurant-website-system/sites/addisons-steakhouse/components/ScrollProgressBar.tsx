'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  if (prefersReduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[70] h-px origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
