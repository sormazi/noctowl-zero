
import React from "react";

// These coordinates are relative to the owl SVG in the background
// (left eye: x=244, right eye: x=376, both y=172)
// We use % and rem-based width for responsiveness

// Card should be position:relative for this to work!
export const OwlEyesGlowOverlay: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-0 select-none"
    style={{ mixBlendMode: "lighten" }} // blend the glow with card bg
  >
    {/* Left eye glow */}
    <div
      className="absolute"
      style={{
        left: "24%", // experimentally determined, matches owl left eye
        top: "44%",  // vertical centering, ~owl eye level
        width: "44px", // 44px = SVG eye width (rx*2 ~12)
        height: "44px",
        transform: "translate(-50%,-50%)",
        background: "radial-gradient(circle, rgba(97,239,255,0.28) 0%, rgba(97,239,255,0.08) 65%, transparent 100%)",
        filter: "blur(2.5px)",
        borderRadius: "50%",
      }}
    />
    {/* Right eye glow */}
    <div
      className="absolute"
      style={{
        left: "76%", // matches owl right eye horizontal
        top: "44%",  // same vertical
        width: "44px",
        height: "44px",
        transform: "translate(-50%,-50%)",
        background: "radial-gradient(circle, rgba(97,239,255,0.28) 0%, rgba(97,239,255,0.08) 65%, transparent 100%)",
        filter: "blur(2.5px)",
        borderRadius: "50%",
      }}
    />
  </div>
);

