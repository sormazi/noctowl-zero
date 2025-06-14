
import React from "react";

// These coordinates are relative to the owl SVG in the background
// (left eye: x=244, right eye: x=376, both y=172)
// We use % and rem-based width for responsiveness

// Card should be position:relative for this to work!
export const OwlEyesGlowOverlay: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 select-none"
    style={{ mixBlendMode: "lighten" }} // 'lighten' ensures eye halo blends through frosted glass
  >
    {/* Left eye glow */}
    <div
      className="absolute"
      style={{
        left: "24%",
        top: "44%",
        width: "44px",
        height: "44px",
        transform: "translate(-50%,-50%)",
        background: "radial-gradient(circle, rgba(97,239,255,0.25) 0%, rgba(97,239,255,0.09) 65%, transparent 100%)",
        filter: "blur(7px)",
        borderRadius: "50%",
        opacity: 0.85
      }}
    />
    {/* Right eye glow */}
    <div
      className="absolute"
      style={{
        left: "76%",
        top: "44%",
        width: "44px",
        height: "44px",
        transform: "translate(-50%,-50%)",
        background: "radial-gradient(circle, rgba(97,239,255,0.25) 0%, rgba(97,239,255,0.09) 65%, transparent 100%)",
        filter: "blur(7px)",
        borderRadius: "50%",
        opacity: 0.85
      }}
    />
  </div>
);
