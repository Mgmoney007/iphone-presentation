import { AnimatePresence, MotionConfig } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { SlideFrame } from "./SlideFrame";
import { ProgressDots } from "./ProgressDots";
import { PresenterNotes } from "./PresenterNotes";
import { slidesV2 } from "../slides-v2";
import { MOTION } from "../motion-system";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const total = slidesV2.length;
  const activeSlide = useMemo(() => slidesV2[index], [index]);

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        next();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        prev();
      }
      if (e.key.toLowerCase() === "n") {
        setShowNotes((v) => !v);
      }
      if (e.key === "Home") {
        setIndex(0);
      }
      if (e.key === "End") {
        setIndex(total - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  return (
    <MotionConfig
      transition={{
        duration: MOTION.duration.base,
        ease: MOTION.ease.standard,
      }}
      reducedMotion="user"
    >
      <div className="deck-shell" onClick={next}>
        <AnimatePresence mode="wait">
          <SlideFrame key={activeSlide.id} slideKey={activeSlide.id}>
            {activeSlide.render()}
          </SlideFrame>
        </AnimatePresence>

        <div className="deck-ui">
          <button
            className="nav-btn"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            Prev
          </button>

          <ProgressDots total={total} active={index} />

          <button
            className="nav-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowNotes((v) => !v);
            }}
          >
            Notes
          </button>

          <button
            className="nav-btn"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            Next
          </button>
        </div>

        <PresenterNotes
          visible={showNotes}
          title={activeSlide.notesTitle}
          notes={activeSlide.notes}
        />
      </div>
    </MotionConfig>
  );
}