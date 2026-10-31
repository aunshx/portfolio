import type { ReactNode } from "react";

/**
 * Editorial section: a hairline, the heading in a left column on wide
 * screens, content on the right. On phones the heading sits on top.
 */
export default function Section({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  /** One short line under the heading. */
  note?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-8 sm:py-10">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid gap-6 border-t border-line pt-8 sm:pt-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
          <div>
            <h2 id={`${id}-title`} className="t-h2">
              {title}
            </h2>
            {note && <p className="t-meta mt-2 max-w-[30ch]">{note}</p>}
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
