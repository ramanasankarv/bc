"use client";

import { useMemo } from "react";

/**
 * Dissolution lattice — the brand signature.
 * An ordered grid of squares (legacy, monolithic) on the left scatters into
 * dispersed, glowing pixels (cloud, intelligence) on the right, echoing the
 * pixel-dispersal in the Blue Cloud logo.
 *
 * A seeded RNG keeps the server- and client-rendered SVG identical, so there
 * is no hydration mismatch. Drift animation respects prefers-reduced-motion
 * via the global CSS reset.
 */

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Cell = {
  x: number; y: number; size: number; opacity: number;
  glow: boolean; drift?: { x: number; y: number; dur: number };
};

export default function Lattice({ seed = 7 }: { seed?: number }) {
  const cells = useMemo<Cell[]>(() => {
    const rnd = mulberry32(seed);
    const W = 520, H = 440, cols = 13, rows = 11, cell = 32, base = 13, ox = 28, oy = 44;
    const out: Cell[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const t = c / (cols - 1); // 0 (left/legacy) → 1 (right/cloud)
        const keep = 1 - t * t * 0.92;
        if (rnd() > keep && t > 0.35) continue;
        const jitter = t * t * 26;
        const jx = (rnd() - 0.5) * jitter;
        const jy = (rnd() - 0.5) * jitter;
        const x = ox + c * cell + jx;
        const y = oy + r * cell + jy;
        const size = base * (1 - t * 0.35);
        const opacity = Math.min(0.18 + (1 - t) * 0.5 + (t > 0.55 ? rnd() * 0.5 : 0), 0.95);
        const glow = t > 0.6 && rnd() > 0.55;
        let drift: Cell["drift"];
        if (t > 0.5 && rnd() > 0.5) {
          const d = 4 + rnd() * 8;
          drift = { x: rnd() - 0.5 > 0 ? d : -d, y: -d, dur: 3 + rnd() * 3 };
        }
        out.push({ x, y, size, opacity: +opacity.toFixed(2), glow, drift });
      }
    }
    return out;
  }, [seed]);

  return (
    <svg viewBox="0 0 520 440" preserveAspectRatio="xMidYMid meet" role="img"
      aria-label="Legacy data lattice dispersing into cloud-native intelligence">
      <defs>
        <linearGradient id="bc-lg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0B4FC4" />
          <stop offset="0.55" stopColor="#008FFF" />
          <stop offset="1" stopColor="#12B4F5" />
        </linearGradient>
        <filter id="bc-glow">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {cells.map((c, i) => (
        <rect
          key={i}
          x={c.x} y={c.y} width={c.size} height={c.size} rx={2}
          fill="url(#bc-lg)" opacity={c.opacity}
          filter={c.glow ? "url(#bc-glow)" : undefined}
        >
          {c.drift && (
            <animateTransform
              attributeName="transform" type="translate"
              values={`0 0; ${c.drift.x} ${c.drift.y}; 0 0`}
              dur={`${c.drift.dur.toFixed(1)}s`} repeatCount="indefinite"
            />
          )}
        </rect>
      ))}
    </svg>
  );
}
