import { LatteNav } from '../components/LatteNav';
import { LatteHero } from '../components/LatteHero';
import { MenuCategoryStack } from '../components/MenuCategoryStack';
import { BlogPreviewGrid } from '../components/BlogPreviewGrid';
import { LoveSplit } from '../components/LoveSplit';
import { ClosingWordmark } from '../components/ClosingWordmark';
import { LatteFooter } from '../components/LatteFooter';

export default function HomePage() {
  return (
    <>
      <LatteNav />
      <main>
        <LatteHero />
        <MenuCategoryStack />
        <BlogPreviewGrid />
        <LoveSplit />
        <ClosingWordmark />
      </main>
      <LatteFooter />
    </>
  );
}
