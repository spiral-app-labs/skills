import type { Metadata } from 'next';
import Link from 'next/link';
import { TopTriptychHeader } from '../../components/TopTriptychHeader';
import { DualServiceMenusSplit } from '../../components/DualServiceMenusSplit';
import { InlineInfoSplit } from '../../components/InlineInfoSplit';
import { BrambleWordmarkFooter } from '../../components/BrambleWordmarkFooter';
import { content } from '../../content.example';

export const metadata: Metadata = {
  title: `Menus | ${content.brand.name}`,
  description:
    'Browse Vine & Plate plates, wine specials, lunch, and PDF menu fallbacks before reserving or ordering on Toast.',
  alternates: {
    canonical: '/menu',
  },
};

export default function MenuPage() {
  return (
    <>
      <TopTriptychHeader />
      <main className="bg-bg-dark pt-28">
        <section className="px-6 pb-4 text-center">
          <p className="text-address text-text-muted-cream">Food, wine, lunch, specials</p>
          <h1 className="mx-auto mt-4 max-w-4xl font-display text-section-h1 text-text-cream" style={{ fontWeight: 300 }}>
            Plates and pours before you decide
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-body text-text-muted-cream">
            A quick look at current favorites, bottle-night cues, and the full menu links guests need before reserving or ordering.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={content.brand.reservationUrl}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button rounded-button bg-text-cream px-7 py-3.5 text-button text-text-dark hover:bg-white"
            >
              Reserve a Table
            </Link>
            <Link
              href={content.brand.orderUrl}
              target="_blank"
              rel="noreferrer"
              className="vp-soft-button rounded-button border border-text-cream/50 px-7 py-3.5 text-button text-text-cream hover:bg-text-cream/10"
            >
              Order on Toast
            </Link>
          </div>
        </section>
        <DualServiceMenusSplit />
        <InlineInfoSplit />
      </main>
      <BrambleWordmarkFooter />
    </>
  );
}
