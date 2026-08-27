import Reveal from "@/components/ui/Reveal";

export default function SectionHead({
  eyebrow,
  title,
  id,
  lead,
}: {
  eyebrow: string;
  title: string;
  id: string;
  lead?: string;
}) {
  return (
    <div className="mb-7 sm:mb-9">
      <Reveal>
        <p
          aria-hidden="true"
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={70}>
        <h2
          id={id}
          className="text-[1.85rem] font-semibold tracking-[-0.025em] text-text sm:text-[2.4rem]"
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={140}>
          <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-muted">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
