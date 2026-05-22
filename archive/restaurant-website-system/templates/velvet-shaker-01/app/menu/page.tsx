import { content } from '../../content.example';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { MenuPhotoStrip } from '../../components/MenuPhotoStrip';
import { NamedItemGrid } from '../../components/NamedItemGrid';
import { CantFindBlock } from '../../components/CantFindBlock';

// /menu — the 102px display moment. Category-grouped priced list.
export default function MenuPage() {
  const m = content.menu;
  // First category is rendered with the photo strip below its h1 (the "Cocktails" block).
  const [first, ...rest] = m.categories;
  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading heading={first.title} />
      <MenuPhotoStrip photos={m.photoStrip} />
      <NamedItemGrid categories={[first]} />
      <NamedItemGrid categories={rest} />
      <CantFindBlock
        heading={m.cantFind.heading}
        body={m.cantFind.body}
        linkLabel={m.cantFind.linkLabel}
        linkHref={m.cantFind.linkHref}
        photos={m.cantFind.photos}
      />
    </WordmarkBookendLayout>
  );
}
