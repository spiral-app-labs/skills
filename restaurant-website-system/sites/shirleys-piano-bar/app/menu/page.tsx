import { content } from '../../content.example';
import { WordmarkBookendLayout } from '../../components/WordmarkBookendLayout';
import { PageDisplayHeading } from '../../components/PageDisplayHeading';
import { MenuPhotoStrip } from '../../components/MenuPhotoStrip';
import { NamedItemGrid } from '../../components/NamedItemGrid';
import { CantFindBlock } from '../../components/CantFindBlock';

export default function MenuPage() {
  const m = content.menu;
  return (
    <WordmarkBookendLayout>
      <PageDisplayHeading heading={m.h1} subheading={m.intro} />
      <MenuPhotoStrip photos={m.photoStrip} />
      <NamedItemGrid categories={m.categories} />
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
