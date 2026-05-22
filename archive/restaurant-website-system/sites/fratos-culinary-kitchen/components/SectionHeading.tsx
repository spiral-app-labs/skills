// SectionHeading — centered H2 + subhead pair used above every menu section.

type Props = {
  heading: string;
  subhead?: string;
  tone?: 'ink' | 'on-dark';
};

export function SectionHeading({ heading, subhead, tone = 'ink' }: Props) {
  const color = tone === 'on-dark' ? 'text-text-on-dark' : 'text-ink';
  const subColor = tone === 'on-dark' ? 'text-text-on-dark/75' : 'text-ink-soft';
  return (
    <div className="text-center max-w-[640px] mx-auto">
      <h2 className={`text-section-h2 font-extrabold ${color}`}>{heading}</h2>
      {subhead ? (
        <p className={`mt-3 text-body ${subColor}`}>{subhead}</p>
      ) : null}
    </div>
  );
}
