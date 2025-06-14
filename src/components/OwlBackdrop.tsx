
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const OwlBackdrop: React.FC = () => {
  const leftEyeRef = useRef<SVGEllipseElement>(null);
  const rightEyeRef = useRef<SVGEllipseElement>(null);
  const leftGlowRef = useRef<SVGEllipseElement>(null);
  const rightGlowRef = useRef<SVGEllipseElement>(null);
  const owlSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    ctx = gsap.context(() => {
      // --- Stagnant Owl: Remove scale animation ---
      // Eyes and glow still animate as you scroll!
      let eyeFillFrom = [16, 239, 255]; // #10efff blue
      let eyeFillTo = [97, 239, 255];   // #61efff brighter blue

      // Picked a subtle blue for off, and a bright cyan for on
      let darkEyeColor = "#10151c";
      let lightEyeColor = "#61efff";

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: self => {
          const progress = self.progress;

          // Eye fill color transitions
          // Interpolate RGB values between darkEyeColor and lightEyeColor according to progress
          function lerp(a: number, b: number, t: number) {
            return Math.round(a + (b - a) * t);
          }
          // #10151c -> #61efff
          const fillR = lerp(16, 97, progress);
          const fillG = lerp(21, 239, progress);
          const fillB = lerp(28, 255, progress);
          const eyeColor = `rgb(${fillR},${fillG},${fillB})`;
          // set fill for both eyes
          if (leftEyeRef.current) leftEyeRef.current.setAttribute("fill", eyeColor);
          if (rightEyeRef.current) rightEyeRef.current.setAttribute("fill", eyeColor);

          // The glow's opacity and fillOpacity both increase with progress
          const glowOpacity = 0.25 + 0.75 * progress; // from 0.25 to 1.0
          const glowFillOpacity = 0.35 + 0.55 * progress; // from 0.35 to 0.9

          if (leftGlowRef.current) {
            leftGlowRef.current.style.opacity = String(glowOpacity);
            leftGlowRef.current.setAttribute("fill-opacity", String(glowFillOpacity));
          }
          if (rightGlowRef.current) {
            rightGlowRef.current.style.opacity = String(glowOpacity);
            rightGlowRef.current.setAttribute("fill-opacity", String(glowFillOpacity));
          }
        }
      });

      // Eyes start in their "off" color and opacity
      if (leftEyeRef.current) leftEyeRef.current.setAttribute("fill", darkEyeColor);
      if (rightEyeRef.current) rightEyeRef.current.setAttribute("fill", darkEyeColor);
      if (leftGlowRef.current) {
        leftGlowRef.current.style.opacity = String(0.25);
        leftGlowRef.current.setAttribute("fill-opacity", "0.35");
      }
      if (rightGlowRef.current) {
        rightGlowRef.current.style.opacity = String(0.25);
        rightGlowRef.current.setAttribute("fill-opacity", "0.35");
      }
    });
    return () => ctx && ctx.revert();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none"
      style={{
        background:
          "radial-gradient(ellipse at 58% 19%, rgba(24,27,44,0.68) 0%, rgba(20,23,33,0.95) 68%, #0b0914 100%)",
        transition: "background 0.7s cubic-bezier(.27,1,.43,1)",
      }}
    >
      <svg
        ref={owlSvgRef}
        width="620"
        height="390"
        viewBox="0 0 620 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute opacity-40 md:opacity-55 xl:opacity-65 left-1/2 top-8 md:top-14 -translate-x-1/2 transition-all duration-700"
        style={{
          filter:
            "drop-shadow(0 12px 48px #1c243665) blur(0.5px)",
          maxWidth: "90vw",
          minWidth: 310,
          willChange: "transform", // keep for performance, even if not scaling
        }}
      >
        {/* Face shape */}
        <ellipse cx="310" cy="175" rx="148" ry="112" fill="url(#owlGlass)" />
        {/* Eyes */}
        <ellipse ref={leftEyeRef} cx="244" cy="172" rx="27" ry="24" fill="#10151c" fillOpacity="0.95" />
        <ellipse cx="244" cy="172" rx="12" ry="11" fill="#eee" fillOpacity="0.25" />
        <ellipse ref={rightEyeRef} cx="376" cy="172" rx="27" ry="24" fill="#10151c" fillOpacity="0.95" />
        <ellipse cx="376" cy="172" rx="12" ry="11" fill="#eee" fillOpacity="0.25" />
        {/* Eye glows */}
        <ellipse
          ref={leftGlowRef}
          cx="244" cy="172" rx="6" ry="6"
          fill="#5cf"
          fillOpacity="0.35"
          style={{ opacity: 0.25, filter: "drop-shadow(0 0 22px #7FAFFF)" }}
        />
        <ellipse
          ref={rightGlowRef}
          cx="376" cy="172" rx="6" ry="6"
          fill="#5cf"
          fillOpacity="0.35"
          style={{ opacity: 0.25, filter: "drop-shadow(0 0 22px #7FAFFF)" }}
        />
        {/* Minimal beak */}
        <ellipse cx="310" cy="204" rx="9" ry="20" fill="#202432" fillOpacity="0.8" />
        {/* Futuristic lines */}
        <path d="M180 120 Q255 95 310 150 Q365 95 440 120" stroke="#3ef7ff" strokeWidth="2.5" strokeOpacity="0.09" />
        <path d="M180 120 Q240 200 310 185 Q380 200 440 120" stroke="#3ef7ff" strokeWidth="1.7" strokeOpacity="0.08" />
        {/* Brows */}
        <path d="M200 133 Q244 140 244 158" stroke="#eee" strokeWidth="2.3" strokeLinecap="round" opacity="0.11" />
        <path d="M420 133 Q376 140 376 158" stroke="#eee" strokeWidth="2.3" strokeLinecap="round" opacity="0.11" />
        {/* Framing lines */}
        <ellipse cx="310" cy="175" rx="148" ry="112" stroke="#479cff" strokeWidth="2" opacity="0.09" />
        {/* Subtle facial highlight */}
        <ellipse cx="310" cy="155" rx="80" ry="36" fill="#fff" fillOpacity="0.02" />
        <defs>
          <radialGradient id="owlGlass" cx="0.7" cy="0.35" r="1" gradientTransform="rotate(110 0.7 0.7) scale(167)">
            <stop stopColor="#23243a" stopOpacity="0.97" />
            <stop offset="0.5" stopColor="#181a2b" stopOpacity="0.77" />
            <stop offset="1" stopColor="#0b0914" stopOpacity="0.94" />
          </radialGradient>
        </defs>
      </svg>
      {/* Overlay for extra glass/dark mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151826]/60 to-[#0b0914]/90" />
    </div>
  );
};
