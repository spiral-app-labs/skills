'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../content.example';

const slugify = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function MenuCategoryRail() {
  const { categories, intro, callout } = content.menuPage;
  const categoriesWithSlugs = useMemo(
    () => categories.map((category) => ({ ...category, slug: slugify(category.label) })),
    [categories],
  );
  const [activeSlug, setActiveSlug] = useState(categoriesWithSlugs[0]?.slug ?? '');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: '-18% 0px -64% 0px', threshold: [0, 0.3, 1] },
    );

    categoriesWithSlugs.forEach((category) => {
      const section = document.getElementById(category.slug);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [categoriesWithSlugs]);

  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <p className="max-w-3xl text-body text-ink-muted md:col-span-8">{intro}</p>
          <div className="border border-hairline bg-canvas-alt p-5 md:col-span-4">
            <p className="label-eyebrow mb-2 text-accent">{callout.heading}</p>
            <p className="text-body-sm text-ink-muted">{callout.body}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <aside className="md:col-span-3">
            <div className="flex flex-wrap gap-3 md:sticky md:top-28 md:flex-col">
              {categoriesWithSlugs.map((category) => (
                <a
                  key={category.label}
                  href={`#${category.slug}`}
                  aria-current={activeSlug === category.slug ? 'true' : undefined}
                  className={`label-eyebrow border px-3 py-2 transition-colors md:border-0 md:bg-transparent md:px-0 md:py-0 ${
                    activeSlug === category.slug
                      ? 'border-accent bg-canvas-alt text-accent'
                      : 'border-hairline bg-canvas text-ink-muted hover:border-accent hover:text-ink'
                  }`}
                >
                  {category.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="flex flex-col gap-14 md:col-span-9 md:gap-16">
            {categoriesWithSlugs.map((category) => (
              <div key={category.label} id={category.slug} className="scroll-mt-28">
                <h2 className="mb-7 border-b border-hairline pb-4 font-display text-[34px] leading-10 text-ink md:text-section-h2-sm">
                  {category.label}
                </h2>
                <ul className="grid gap-5">
                  {category.items.map((item, index) => (
                    <motion.li
                      key={item.name}
                      className="border-b border-hairline pb-5"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.5, delay: index * 0.025 }}
                    >
                      <div className="grid gap-2 md:grid-cols-[minmax(0,auto)_1fr_auto] md:items-baseline md:gap-3">
                        <p className="font-display text-[24px] leading-8 text-ink">{item.name}</p>
                        {item.price && <span className="hidden border-b border-dotted border-hairline md:block" aria-hidden="true" />}
                        {item.price && (
                          <p className="font-display text-[22px] leading-7 text-accent md:text-right">{item.price}</p>
                        )}
                      </div>
                      <p className="mt-1 text-body-sm text-ink-muted">{item.description}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
