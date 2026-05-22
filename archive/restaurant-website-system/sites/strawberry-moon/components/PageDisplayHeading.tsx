// PageDisplayHeading — the 102px massive display h1 used on /menu, /about, /contact.
// The home page DOES NOT use this (it uses HomeIntroBlock with a small 26px h1).
// Supports an em-dash connector line break (see about: "bar in — Hong Kong").
export function PageDisplayHeading({
  eyebrow,
  heading,
  subheading,
  children,
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-14 md:pt-20 pb-10 md:pb-16">
        {eyebrow && <p className="text-body text-ink mb-4">{eyebrow}</p>}
        <h1 className="text-display leading-[1.05]">{heading}</h1>
        {subheading && <p className="mt-6 text-body text-ink max-w-prose-editorial">{subheading}</p>}
        {children}
      </div>
    </section>
  );
}
