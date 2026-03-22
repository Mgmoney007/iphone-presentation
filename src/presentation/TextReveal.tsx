import { motion } from "motion/react";
import type { ReactNode } from "react";
import { MOTION } from "../motion-system";

type TextRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function TextReveal({
  children,
  delay = 0,
  className = "",
}: TextRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: MOTION.y.line, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: MOTION.duration.base,
        delay,
        ease: MOTION.ease.soft,
      }}
    >
      {children}
    </motion.div>
  );
}