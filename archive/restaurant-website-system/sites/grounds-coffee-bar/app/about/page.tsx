// /about page — REBUILT FROM SCRATCH (audit §1: 404 in source). Short story
// spread with one interior photo. Kept Poppins-only, no extra components.

import Image from 'next/image';
import { LatteNav } from '../../components/LatteNav';
import { LatteFooter } from '../../components/LatteFooter';
import { ClosingWordmark } from '../../components/ClosingWordmark';
import { content } from '../../content.example';

export default function AboutPage() {
  const a = content.about;
  return (
    <>
      <LatteNav />
      <main>
        <section className="w-full bg-canvas pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="max-w-page mx-auto px-5 md:px-10 text-center flex flex-col items-center gap-4">
            <h1 className="font-sans text-hero-h1 max-sm:text-[42px] text-ink max-w-3xl">{a.heading}</h1>
            <p className="text-body-lg text-ink max-w-xl">{a.sub}</p>
          </div>
        </section>
        <section className="w-full bg-canvas pb-16 md:pb-24">
          <div className="max-w-page mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative w-full aspect-[4/5] rounded-photo overflow-hidden">
              <Image
                src={a.image}
                alt={a.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 md:pt-4">
              {a.paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-ink">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
        <ClosingWordmark />
      </main>
      <LatteFooter />
    </>
  );
}
