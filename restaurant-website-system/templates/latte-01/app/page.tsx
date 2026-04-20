import { LatteNav } from '../components/LatteNav';
import { LatteHero } from '../components/LatteHero';
import { MenuCategoryStack } from '../components/MenuCategoryStack';
import { BlogPreviewGrid } from '../components/BlogPreviewGrid';
import { LoveSplit } from '../components/LoveSplit';
import { ClosingWordmark } from '../components/ClosingWordmark';
import { LatteFooter } from '../components/LatteFooter';
import { ScrollRevealStandard } from '../components/ScrollReveal';

// Aliveness retrofit (2026-04-20): below-hero sections wrapped in
// ScrollRevealStandard (intensity 2 — light + friendly). Hero stays unwrapped
// per aliveness-patterns.md §3.1 (first viewport paints instantly).

export default function HomePage() {
  return (
    <>
      <LatteNav />
      <main>
        <LatteHero />
        <ScrollRevealStandard>
          <MenuCategoryStack />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <BlogPreviewGrid />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <LoveSplit />
        </ScrollRevealStandard>
        <ScrollRevealStandard>
          <ClosingWordmark />
        </ScrollRevealStandard>
      </main>
      <LatteFooter />
    </>
  );
}
