import Link from 'next/link';

// EditorialParagraphBlock — centered/justified long-form paragraph with optional "see gallery" link.
// The narrow max-width + generous top padding give it the magazine-opener feel.
export function EditorialParagraphBlock({
  paragraph,
  link,
}: {
  paragraph: string;
  link?: { label: string; href: string };
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-prose-editorial mx-auto">
          <p className="text-body md:text-[18px] leading-relaxed text-ink">{paragraph}</p>
          {link && (
            <Link href={link.href} className="vs-link inline-block mt-6 text-body underline underline-offset-4 decoration-ink/40">
              {link.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
