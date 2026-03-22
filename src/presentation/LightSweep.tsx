import { motion } from "motion/react";
import { MOTION } from "../motion-system";

type LightSweepProps = {
  delay?: number;
};

export function LightSweep({ delay = 0.6 }: LightSweepProps) {
  return (
    <motion.div
      className="light-sweep"
      initial={{ x: "-140%", opacity: 0 }}
      animate={{ x: "140%", opacity: [0, 0.16, 0.12, 0] }}
      transition={{
        duration: MOTION.duration.hero,
        delay,
        ease: MOTION.ease.soft,
      }}
      aria-hidden="true"
    />
  );
}