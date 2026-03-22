import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

type ParallaxLayerProps = {
  children?: ReactNode;
  speed?: number;
  className?: string;
};

export function ParallaxLayer({
  children,
  speed = 0.6,
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40 * speed, -40 * speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + speed * 0.015]);

  return (
    <motion.div ref={ref} className={className} style={{ y, scale }}>
      {children}
    </motion.div>
  );
}