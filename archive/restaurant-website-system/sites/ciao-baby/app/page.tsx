import { TopNavBar } from '../components/TopNavBar';
import { HeroMultiCardAsymmetric } from '../components/HeroMultiCardAsymmetric';
import { FooterMinimalRich } from '../components/FooterMinimalRich';

// Gusto home is hero + footer only. Keep the footer rendered normally so
// browser/full-page evidence does not show an untriggered reveal as dead space.

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <TopNavBar />
      <HeroMultiCardAsymmetric />
      <FooterMinimalRich />
    </main>
  );
}
