// HeroPhoto \u2014 the big-left-card image, with two layered animations:
//
//   #2 Ken Burns: slow scale + drift (CSS keyframes, defined in globals.css).
//      Applied unconditionally; pauses gracefully under prefers-reduced-motion
//      via the same CSS guard. Pauses when the document is hidden so the
//      photo isn't burning compute on a backgrounded tab.
//
//   #3 Parallax on scroll: framer-motion useScroll/useTransform binds the
//      image's translateY to scroll progress. The image moves slower than
//      the foreground card, creating depth. Falls back to no-op for
//      reduced-motion users.
//
// Both effects share the same Image element. The wrapper div is what
// translates; the Image itself owns the Ken Burns animation. Result: parallax
// translates a *zoomed, drifting* photo \u2014 cinematic without being heavy.
'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  alt: string;
  /** Tailwind sizes attr passed to <Image>. Defaults match hero proportions. */
  sizes?: string;
};

export function HeroPhoto({
  src,
  alt,
  sizes = '(max-width: 768px) 100vw, 55vw',
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  // Pause Ken Burns when tab is hidden \u2014 don't burn cycles in background.
  const [docVisible, setDocVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setDocVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    setDocVisible(!document.hidden);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Parallax: as the hero scrolls past, the photo translates -60 \u2192 +60 px.
  // `offset: ['start end', 'end start']` measures the entire span where any
  // part of the element is visible \u2014 giving smooth motion across the
  // viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        style={prefersReducedMotion ? undefined : { y }}
        className="absolute inset-0"
      >
        <div
          className={`relative h-full w-full ${
            !prefersReducedMotion && docVisible ? 'animate-ken-burns' : ''
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes={sizes}
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
