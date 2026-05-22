import { CreamStripNav } from '../../components/CreamStripNav';
import { PageHero } from '../../components/PageHero';
import { MenuCategoryRail } from '../../components/MenuCategoryRail';
import { CreamFooter } from '../../components/CreamFooter';
import { content } from '../../content.example';

export const metadata = {
  title: `Menu — ${content.brand.name}`,
  description: `${content.menuPage.intro}`,
};

export default function MenuPage() {
  const { h1, heroPhoto, heroAlt } = content.menuPage;
  return (
    <main>
      <CreamStripNav />
      <PageHero h1={h1} photo={heroPhoto} photoAlt={heroAlt} eyebrow={content.menuPage.eyebrow} />
      <MenuCategoryRail />
      <CreamFooter />
    </main>
  );
}
