
import React from "react";

const OWL_IMAGE_URL =
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80";

/**
 * Displays a full-screen, ominous, futuristic owl in the backdrop
 * behind all site content, with blur and blend mode for glassy/dark vibe.
 */
export const OwlBackdrop: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 select-none"
    style={{
      // subtle parallax on large screens
      background: `radial-gradient(ellipse at 60% 22%, rgba(28,36,54,0.72) 0%, rgba(28,32,45,0.92) 62%, rgba(20,24,38,0.98) 100%), url(${OWL_IMAGE_URL}) center 12%/cover no-repeat`,
      filter: "blur(6px) grayscale(20%) opacity(0.32) brightness(1.08)",
      mixBlendMode: "lighten",
      transition: "filter 0.7s cubic-bezier(.27,1,.43,1)"
    }}
  >
    {/* Overlay for extra darkness/glass effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151826]/60 to-[#100d1b]/90" />
  </div>
);
