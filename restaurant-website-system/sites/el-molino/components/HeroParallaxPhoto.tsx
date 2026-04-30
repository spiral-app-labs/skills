'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  alt: string;
  src: string;
};

export function HeroParallaxPhoto({ alt, src }: Props) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  if (reduce) {
    return (
      <div ref={frameRef} className="relative h-[140px] overflow-hidden sm:h-[300px] md:h-[590px]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div ref={frameRef} className="relative h-[140px] overflow-hidden sm:h-[300px] md:h-[590px]">
      <motion.img
        src={src}
        alt={alt}
        className="h-[calc(100%+48px)] w-full object-cover will-change-transform"
        style={{ y }}
        whileHover={{ scale: 1.035 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
