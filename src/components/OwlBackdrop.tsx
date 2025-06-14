
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Minimalistic, ominous owl SVG background for the site.
 * Uses glassy gradients and geometric lines for a futuristic touch.
 * Owl's eyes now light up gradually as user scrolls down.
 */
export const OwlBackdrop: React.FC = () => {
  const leftEyeRef = useRef<SVGEllipseElement>(null);
  const rightEyeRef = useRef<SVGEllipseElement>(null);
  const leftGlowRef = useRef<SVGEllipseElement>(null);
  const rightGlowRef = useRef<SVGEllipseElement>(null);
  const owlSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top+=300",
          scrub: 0.7,
        },
      })
        .to(
          [leftGlowRef.current, rightGlowRef.current],
          {
            opacity: 1,
            duration: 1,
            ease: "power1.out",
            attr: { fillOpacity: 0.9 },
          },
          0
        )
        .to(
          [leftEyeRef.current, rightEyeRef.current],
          {
            fill: "#61efff",
            duration: 1.1,
            ease: "power1.out",
          },
          0
        )
        .to(
          owlSvgRef.current,
          {
            scale: 1.17,
            transformOrigin: "50% 45%",
            duration: 1.15,
            ease: "power1.out",
          },
          0
        );
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
