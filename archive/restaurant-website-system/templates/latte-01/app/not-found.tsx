// not-found.tsx — shared 404. Audit §1 notes the source ships a themed 404
// ("We couldn't find your latte") with Back-to-home + Explore-menu CTAs.
// We keep the same two CTAs.

import { LatteNav } from '../components/LatteNav';
import { LatteFooter } from '../components/LatteFooter';
import { PillButton } from '../components/PillButton';

export default function NotFound() {
  return (
    <>
      <LatteNav />
      <main>
        <section className="w-full bg-canvas py-24 md:py-40">
          <div className="max-w-page mx-auto px-5 md:px-10 text-center flex flex-col items-center gap-6">
            <p className="text-eyebrow-sm text-ink-muted">404</p>
            <h1 className="font-sans text-hero-h1 text-ink max-w-2xl">
              We couldn&rsquo;t find your latte
            </h1>
            <p className="text-body-lg text-ink max-w-xl">
              The page you&rsquo;re looking for has wandered off. Try one of these instead.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <PillButton href="/" variant="solid">Back to home</PillButton>
              <PillButton href="/menu" variant="outline">Explore menu</PillButton>
            </div>
          </div>
        </section>
      </main>
      <LatteFooter />
    </>
  );
}
