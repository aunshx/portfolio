import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-5">
      <div className="relative text-center">
        <p className="tabular font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          Error 404
        </p>
        <h1 className="mt-5 text-[2.4rem] font-semibold tracking-[-0.03em] leading-tight text-text sm:text-[3.2rem]">
          Nothing here.
        </h1>
        <p className="mx-auto mt-4 max-w-[34ch] text-[15px] text-muted">
          That page doesn&rsquo;t exist. It may have moved, or never did.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Back to the start
        </Link>
      </div>
    </main>
  );
}
