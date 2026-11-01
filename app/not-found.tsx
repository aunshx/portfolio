import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-5">
      <div aria-hidden="true" className="contours" />
      <div className="relative text-center">
        <h1 className="t-display">404</h1>
        <p className="t-lead mx-auto mt-4 max-w-[30ch]">
          This page wandered off. Even the contour lines can&rsquo;t find it.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back home
        </Link>
      </div>
    </main>
  );
}
