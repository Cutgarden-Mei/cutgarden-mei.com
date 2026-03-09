type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p className="font-serif text-xs uppercase tracking-[0.18em] text-[#73442b]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl leading-tight font-semibold text-[#26160f] md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-base leading-8 text-[#7e6b61]">{description}</p> : null}
    </div>
  );
}
