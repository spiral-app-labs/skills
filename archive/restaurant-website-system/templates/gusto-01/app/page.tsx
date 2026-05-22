import { TopNavBar } from '../components/TopNavBar';
import { HeroMultiCardAsymmetric } from '../components/HeroMultiCardAsymmetric';
import { FooterMinimalRich } from '../components/FooterMinimalRich';
import { ScrollRevealStandard } from '../components/ScrollReveal';

// Aliveness retrofit (2026-04-20): gusto home is hero + footer only; the
// footer gets the ScrollRevealStandard (intensity 2, dark-monolithic register).
// Hero stays unwrapped — HeroMultiCardAsymmetric already paints instantly and
// the testimonial card is first-viewport load-bearing conversion.

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <HeroMultiCardAsymmetric />
      <ScrollRevealStandard>
        <FooterMinimalRich />
      </ScrollRevealStandard>
    </main>
  );
}
