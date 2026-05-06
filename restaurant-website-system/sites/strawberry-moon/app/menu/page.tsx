import { content } from '../../content';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { MenuPhotoStrip } from '../../components/MenuPhotoStrip';
import { NamedItemGrid } from '../../components/NamedItemGrid';
import { CantFindBlock } from '../../components/CantFindBlock';

export default function MenuPage() {
  const m = content.menu;
  const [first, ...rest] = m.categories;
  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading heading="Martinis & more" />
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
