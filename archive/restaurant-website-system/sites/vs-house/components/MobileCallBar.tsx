// MobileCallBar — Block 1 mobile failure #2 fix.
// Sticky bottom bar on mobile only. Tap-to-call + Reserve.
'use client';

import { useEffect, useState } from 'react';
import { content } from '../content';

export function MobileCallBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 gap-2 p-3 bg-bg-darker/95 backdrop-blur border-t border-border-dark transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={content.hero.secondaryCta.href}
        className="flex items-center justify-center gap-2 px-4 py-3.5 border border-text-white/30 text-text-white text-button rounded-button"
      >
        Call
      </a>
      <a
        href={content.links.reserve}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-3.5 bg-accent text-text-white text-button rounded-button"
      >
        Reserve
      </a>
    </div>
  );
}
