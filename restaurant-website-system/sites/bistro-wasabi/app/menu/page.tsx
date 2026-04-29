import { FloatingHeaderPill } from '../../components/FloatingHeaderPill';
import { PageHeroSplit } from '../../components/PageHeroSplit';
import { MenuList } from '../../components/MenuList';
import { MinimalFooter } from '../../components/MinimalFooter';
import { content } from '../../content';

export default function MenuPage() {
  return (
    <>
      <FloatingHeaderPill />
      <PageHeroSplit
        image={content.menu.pageImage}
        imageAlt="Plated sushi"
        title={content.menu.pageTitle}
        stickyImage
      >
        <MenuList />
        <MinimalFooter />
      </PageHeroSplit>
    </>
  );
}
