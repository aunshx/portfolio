"use client";

import { useEffect, useState } from "react";

type Fix = { lat: number; lon: number; elev: number };

/** The survey readout: where the pointer is on the map, and how high. */
export default function Readout() {
  const [fix, setFix] = useState<Fix | null>(null);
  useEffect(() => {
    const on = (e: Event) => setFix((e as CustomEvent<Fix>).detail);
    window.addEventListener("terrain:cursor", on);
    return () => window.removeEventListener("terrain:cursor", on);
  }, []);
  return (
    <p className="readout tabular" aria-hidden="true">
      {fix ? (
        <>
          {fix.lat.toFixed(4)}° N, {Math.abs(fix.lon).toFixed(4)}° W
          <br />
          Elevation {fix.elev} m
        </>
      ) : (
        <>
          Move the cursor to survey
          <br />
          <span className="text-faint">Pins are projects</span>
        </>
      )}
    </p>
  );
}
