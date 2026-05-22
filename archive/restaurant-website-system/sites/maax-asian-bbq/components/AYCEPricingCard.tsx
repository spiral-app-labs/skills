// AYCEPricingCard — MAAX-specific improvement #1.
//
// The audit's #1 finding: the current site's "Prices" nav link returns 404.
// AYCE pricing IS the conversion question for this concept and the current
// site refuses to answer it. This component surfaces the three AYCE tiers +
// the Mon–Fri lunch deal inline on the homepage so guests never have to leave
// to find pricing.

'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { content } from '../content.example';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TIERS = [
  {
    label: 'Standard',
    price: '$32–35',
    headline: 'AYCE Korean BBQ + Hot Pot',
    bullets: [
      'Beef bulgogi · pork belly · short ribs',
      'All standard broths',
      'Full veg + sauce buffet',
    ],
    accent: false,
  },
  {
    label: 'Premium',
    price: '$42–45',
    headline: 'Adds Wagyu + Premium Cuts',
    bullets: [
      'Wagyu cuts · expanded pork',
      'Expanded seafood line',
      'Everything in Standard',
    ],
    accent: true,
  },
  {
    label: 'Wagyu + Seafood',
    price: '$58–65',
    headline: 'A5 + King Crab + Lobster',
    bullets: [
      'A5 Wagyu · king crab',
      'Premium scallops · lobster',
      'Everything in Premium',
    ],
    accent: false,
  },
];

export function AYCEPricingCard() {
  const prefersReducedMotion = useReducedMotion();
  const reservationUrl = content.brand.reservationUrl;

  return (
    <section className="bg-bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-[12px] uppercase tracking-[0.18em] text-accent">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
              AYCE Pricing — Per Person
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[36px] leading-tight text-text-dark md:text-[48px]">
              Pick a tier. Pick a broth. The kitchen does the rest.
            </h2>
          </div>
          <p className="font-body text-[14px] text-text-muted-dark md:max-w-sm md:text-right">
            All tiers are unlimited within the rotation. Mon–Fri lunch from $20 — the value path into the format.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIERS.map((tier) => (
            <li
              key={tier.label}
              className={`group relative flex flex-col rounded-3xl border bg-bg-white p-7 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_40px_-12px_rgba(221,89,3,0.18)] ${
                tier.accent ? 'border-accent ring-1 ring-accent/20' : 'border-divider'
              }`}
            >
              {tier.accent && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-text-white">
                  Most Picked
                </span>
              )}
              <p className="font-body text-[12px] uppercase tracking-[0.16em] text-accent">
                {tier.label}
              </p>
              <p className="mt-3 font-display text-[40px] leading-none text-text-dark">
                {tier.price}
              </p>
              <p className="mt-2 font-body text-[14px] text-text-muted-dark">
                {tier.headline}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 font-body text-[14px] text-text-dark/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[14px] text-text-muted-dark">
            <span className="font-semibold text-text-dark">Replaces the broken /prices page.</span>{' '}
            Pricing lives here, on the homepage, where guests actually look.
          </p>
          <Link
            href={reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-body text-[14px] font-semibold uppercase tracking-wide text-text-white transition-opacity hover:opacity-90"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </section>
  );
}
