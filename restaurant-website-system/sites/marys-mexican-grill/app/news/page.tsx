import { SplitHeader } from '../../components/SplitHeader';
import { DarkLeafHero } from '../../components/DarkLeafHero';
import { BlogCardGrid } from '../../components/BlogCardGrid';
import { ContactStripFooter } from '../../components/ContactStripFooter';
import { content } from '../../content.example';

export default function NewsPage() {
  return (
    <>
      <SplitHeader />
      <main>
        <DarkLeafHero
          title={content.newsPage.hero.title}
          subtitle={content.newsPage.hero.subtitle}
          compact
        />
        <BlogCardGrid
          eyebrow={content.blog.eyebrow}
          title={content.blog.title}
          posts={content.blog.posts}
          background="white"
        />
      </main>
      <ContactStripFooter />
    </>
  );
}
