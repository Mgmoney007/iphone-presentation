export const MOTION = {
  duration: {
    instant: 0.18,
    fast: 0.38,
    base: 0.7,
    slow: 1.05,
    hero: 1.35,
    drift: 7.5,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1] as [number, number, number, number],
    soft: [0.33, 1, 0.68, 1] as [number, number, number, number],
    exit: [0.4, 0, 1, 1] as [number, number, number, number],
  },
  blur: {
    enter: "10px",
    exit: "8px",
    none: "0px",
  },
  scale: {
    enter: 1.015,
    exit: 0.985,
    base: 1,
  },
  y: {
    enter: 26,
    exit: -14,
    line: 14,
  },
};