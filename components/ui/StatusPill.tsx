import type { WorkItem } from "@/content/types";

const MAP = {
  live: { label: "Live", dot: "bg-emerald-500", ping: true },
  building: { label: "In development", dot: "bg-amber-500", ping: true },
  "handed-off": { label: "Handed off", dot: "bg-slate-400", ping: false },
  archived: { label: "Archived", dot: "bg-slate-400", ping: false },
} as const;

export default function StatusPill({
  status,
}: {
  status: NonNullable<WorkItem["status"]>;
}) {
  const s = MAP[status];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted backdrop-blur">
      <span className="relative flex size-1.5">
        {s.ping && (
          <span
            className={`absolute inline-flex size-full animate-ping rounded-full ${s.dot} opacity-70`}
          />
        )}
        <span className={`relative inline-flex size-1.5 rounded-full ${s.dot}`} />
      </span>
      {s.label}
    </span>
  );
}
