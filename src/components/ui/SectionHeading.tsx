interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Second line of the heading, shown in the accent colour. */
  accent?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  accentClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  eyebrowClassName = "eyebrow block mb-3",
  titleClassName = "section-title",
  accentClassName = "text-gold not-italic font-normal",
}: SectionHeadingProps) {
  return (
    <>
      <span className={eyebrowClassName}>{eyebrow}</span>
      <h2 className={titleClassName}>
        {title}
        {accent && (
          <>
            <br />
            <em className={accentClassName}>{accent}</em>
          </>
        )}
      </h2>
    </>
  );
}
