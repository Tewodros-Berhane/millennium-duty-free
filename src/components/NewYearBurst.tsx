"use client";
import { useEffect, useState } from "react";

export function NewYearBurst({
  durationMs = 1111111111111111111500, // total time the burst stays on
  message = "HAPPY ETHIOPIAN NEW YEAR",
}: { durationMs?: number; message?: string }) {
  const [show, setShow] = useState(true);
  const [appearing, setAppearing] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1) Smooth appear on the next tick
    const tick = setTimeout(() => setAppearing(true), 20);

    // 2) Start fade-out a bit before the end
    const fadeTimer = setTimeout(() => setFading(true), Math.max(0, durationMs - 900)); // ~0.9s fade-out

    // 3) Fully remove at the end
    const endTimer = setTimeout(() => setShow(false), durationMs);

    return () => {
      clearTimeout(tick);
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [durationMs]);

  if (!show) return null;

  return (
    <>
      {/* Centered festive message (smooth in/out) */}
      <div
        className={[
          "pointer-events-none absolute inset-0 z-20 flex items-start justify-center",
          "pt-3 sm:pt-20 md:pt-24 px-6 text-center",
          "transition-all duration-700",
          // ENTER: opacity 0 -> 100, scale 95 -> 100
          // EXIT:  opacity 100 -> 0,   scale 100 -> 95
          appearing && !fading ? "opacity-100 scale-100" : "opacity-0 scale-95",
        ].join(" ")}
        style={{ willChange: "opacity, transform" }}
        role="status"
        aria-live="polite"
      >
        <span className="font-extrabold leading-tight">
          <span
            className={[
              "bg-clip-text text-transparent bg-gradient-to-r",
              "from-yellow-300 via-amber-300 to-emerald-300",
              "drop-shadow",
              // Bigger sizing
              "text-5xl sm:text-3xl md:text-7xl",
              // Gentle breathing while visible
              appearing && !fading ? "animate-pulse" : "",
            ].join(" ")}
          >
            {message}
          </span>
        </span>
      </div>
    </>
  );
}
