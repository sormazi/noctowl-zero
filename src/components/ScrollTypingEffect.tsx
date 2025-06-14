import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTypingEffectProps {
  text: string;
  className?: string;
  typingDelay?: number;    // ms per char when typing
  deletingDelay?: number;  // ms per char when deleting (unused with new behavior)
  fontClassName?: string;  // for children styling
}

export const ScrollTypingEffect: React.FC<ScrollTypingEffectProps> = ({
  text,
  className = "",
  typingDelay = 16,
  // deletingDelay, // no longer deleting, keep for prop signature
  fontClassName = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayedLength, setDisplayedLength] = useState(0);
  const maxLengthReached = useRef(0);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tl: ScrollTrigger;

    const onUpdate = (self: ScrollTrigger) => {
      const progress = self.progress;
      // Map scroll progress [0,1] to number of visible characters [0, text.length]
      const nextLength = Math.round(progress * text.length);
      // Store the farthest the user has ever scrolled
      if (nextLength > maxLengthReached.current) {
        maxLengthReached.current = nextLength;
        animateToTargetLength(nextLength);
      }
      // Don't delete text if scrolling up; keep displayedLength at max reached
    };

    function animateToTargetLength(target: number) {
      if (animationRef.current) clearTimeout(animationRef.current);
      if (displayedLength === target) return;

      let next = displayedLength;

      function run() {
        next += 1;
        setDisplayedLength(next);
        if (next < target) {
          animationRef.current = setTimeout(run, typingDelay);
        }
      }
      animationRef.current = setTimeout(run, typingDelay);
    }

    tl = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      end: "bottom 15%",
      scrub: true,
      onUpdate,
    });

    return () => {
      if (tl) tl.kill();
      if (animationRef.current) clearTimeout(animationRef.current);
    };
    // eslint-disable-next-line
  }, [text]);

  // Ensure we never display more than text.length or more than maxLengthReached
  const safeLen = Math.max(
    0,
    Math.min(displayedLength, text.length, maxLengthReached.current)
  );

  return (
    <div ref={ref} className={className}>
      <span className={fontClassName}>
        {text.slice(0, safeLen)}
        <span
          className="inline-block w-4 h-6 align-middle animate-pulse bg-white/70 dark:bg-white/50 ml-0.5 rounded"
          style={{
            visibility: safeLen < text.length ? "visible" : "hidden",
          }}
        ></span>
      </span>
    </div>
  );
};
