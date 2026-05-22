'use client';

import Link from 'next/link';
import { content } from '../content.example';

// Ingredient-burst hero — spring-green bg, H1 in deep forest green, central
// salad bowl photo, and 3-8 absolute-positioned floating ingredient images
// around the composition. This is the template's signature opening moment.
//
// Audit §11 flags this for PROMOTION — ingredient PNGs swap per cuisine
// (veg for salad, peppers for pizza, fruit for juice, etc.).

export function IngredientBurstHero() {
  const { hero } = content;
  return (
    <section className="relative overflow-hidden bg-canvas-green pt-12 md:pt-20 pb-24 md:pb-32">
      <div className="mx-auto max-w-shell px-6 md:px-10 text-center relative">
        {/* Eyebrow trust row */}
        <div className="flex items-center justify-center gap-2 mb-6 text-accent-green/80 text-body-sm">
          <span>Fresh · Organic · Delivered</span>
        </div>

        <h1 className="font-display text-hero-h1 text-accent-green max-w-4xl mx-auto">
          {hero.h1}
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-body text-accent-green/85">
          {hero.sub}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href={hero.cta.href}
            className="inline-flex items-center rounded-button bg-accent-orange px-8 py-4 font-body text-button text-text-on-dark hover:bg-accent-orange-dark transition-colors"
          >
            {hero.cta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex items-center rounded-button border-2 border-accent-green px-8 py-4 font-body text-button text-accent-green hover:bg-accent-green hover:text-text-on-green transition-colors"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        {/* Center bowl + ingredient bursts */}
        <div className="relative mt-12 md:mt-16 mx-auto aspect-square max-w-xl">
          {/* Center bowl — circular crop */}
          <div className="absolute inset-[10%] rounded-full overflow-hidden border-8 border-white shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.bowlImage} alt={hero.bowlAlt} className="w-full h-full object-cover" />
          </div>

          {/* Floating ingredient PNGs — positioned absolutely */}
          {hero.ingredients.map((ing, i) => {
            const style: React.CSSProperties = {
              width: ing.size,
              height: ing.size,
              top: ing.top,
              left: ing.left,
              right: ing.right,
              bottom: ing.bottom,
              // @ts-expect-error -- CSS var for keyframe
              '--rot': `${ing.rot}deg`,
              animationDelay: `${i * 0.8}s`,
            };
            return (
              <div
                key={i}
                style={style}
                className="absolute rounded-full overflow-hidden shadow-xl ingredient-float border-4 border-white"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ing.src} alt={ing.alt} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>

        {/* Trust icon row below */}
        <div className="mt-12 flex items-center justify-center gap-8 md:gap-16 flex-wrap text-accent-green/90">
          {hero.trustRow.map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-body font-body">
              <span className="h-8 w-8 rounded-full bg-accent-green text-canvas-green grid place-items-center text-sm">
                {t.icon === 'leaf' ? '✦' : t.icon === 'bolt' ? '⚡' : '✓'}
              </span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
