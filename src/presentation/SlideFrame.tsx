import { motion } from "motion/react";
import type { ReactNode } from "react";
import { MOTION } from "../motion-system";

type SlideFrameProps = {
  children: ReactNode;
  slideKey: string | number;
};

export function SlideFrame({ children, slideKey }: SlideFrameProps) {
  return (
    <motion.section
      key={slideKey}
      className="slide-frame"
      initial={{
        opacity: 0,
        scale: MOTION.scale.enter,
        y: MOTION.y.enter,
        filter: `blur(${MOTION.blur.enter})`,
      }}
      animate={{
        opacity: 1,
        scale: MOTION.scale.base,
        y: 0,
        filter: `blur(${MOTION.blur.none})`,
      }}
      exit={{
        opacity: 0,
        scale: MOTION.scale.exit,
        y: MOTION.y.exit,
        filter: `blur(${MOTION.blur.exit})`,
      }}
      transition={{
        duration: MOTION.duration.slow,
        ease: MOTION.ease.standard,
      }}
    >
      {children}
    </motion.section>
  );
}