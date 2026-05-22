import Image from 'next/image';

/**
 * EditorialProseBlock — H2 + multi-paragraph editorial prose at 1.8× LH weight 300.
 * Optionally paired with a side photo. The prose carries persuasion work.
 *
 * Strong shared candidate per audit §11.
 */
export function EditorialProseBlock({
  heading,
  paragraphs,
  image,
  imageAlt = '',
  imageSide = 'right',
}: {
  heading: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  imageSide?: 'left' | 'right';
}) {
  const img = image ? (
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 540px, 100vw" className="object-cover" />
    </div>
  ) : null;

  const prose = (
    <div>
      <h2 className="font-display text-section-h2 text-text mb-8">{heading}</h2>
      <div className="prose-editorial max-w-prose-editorial">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-canvas py-24 md:py-32 px-6">
      <div className={`max-w-[1200px] mx-auto grid gap-12 ${image ? 'md:grid-cols-2' : 'md:grid-cols-1'} items-start`}>
        {image && imageSide === 'left' ? (
          <>
            {img}
            {prose}
          </>
        ) : (
          <>
            {prose}
            {img}
          </>
        )}
      </div>
    </section>
  );
}
