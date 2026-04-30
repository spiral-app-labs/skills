import { TopNavBar } from '../components/TopNavBar';
import { ScrollableHomePage } from '../components/ScrollableHomePage';
import { FooterMinimalRich } from '../components/FooterMinimalRich';
import { MobileCallBar } from '../components/MobileCallBar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink pb-24 md:pb-0">
      <TopNavBar />
      <ScrollableHomePage />
      <FooterMinimalRich />
      <MobileCallBar />
    </main>
  );
}
