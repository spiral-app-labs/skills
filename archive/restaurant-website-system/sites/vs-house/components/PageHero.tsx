// PageHero — sub-page hero. Smaller than HeroLock, same heritage discipline.
import { ReactNode } from 'react';

export function PageHero({
  eyebrow,
  title,
  intro,
  bg,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  bg: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-bg-darker pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-darker/60 via-bg-darker/85 to-bg-darker" aria-hidden />
      <div className="relative max-w-[1240px] mx-auto px-5 lg:px-10 text-center">
        <p className="text-eyebrow text-gold font-body uppercase tracking-[0.3em] mb-6">{eyebrow}</p>
        <h1 className="font-display text-text-white leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-[640px] mx-auto text-text-white/85 text-body leading-relaxed">{intro}</p>
        )}
        {children}
      </div>
    </section>
  );
}
