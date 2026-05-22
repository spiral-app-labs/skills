// /menu page — REBUILT FROM SCRATCH (audit §1 notes all three sub-routes
// 404 in the source template). Dedicated menu page reuses MenuCategoryStack
// under its own PageHero so forks that want an always-available menu URL can
// link here. See research/template-audits/latte-01.md §11.

import { LatteNav } from '../../components/LatteNav';
import { LatteFooter } from '../../components/LatteFooter';
import { MenuCategoryStack } from '../../components/MenuCategoryStack';
import { content } from '../../content';

export default function MenuPage() {
  const m = content.menuPage;
  return (
    <>
      <LatteNav />
      <main>
        <section className="w-full bg-canvas pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="max-w-page mx-auto px-5 md:px-10 text-center flex flex-col items-center gap-4">
            <h1 className="font-sans text-hero-h1 text-ink max-w-3xl">{m.heading}</h1>
            <p className="text-body-lg text-ink max-w-xl">{m.sub}</p>
          </div>
        </section>
        <MenuCategoryStack />
      </main>
      <LatteFooter />
    </>
  );
}
