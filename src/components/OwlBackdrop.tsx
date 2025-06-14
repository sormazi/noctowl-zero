
import React from "react";

const OWL_IMAGE_URL =
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80";

/**
 * Displays a full-screen, ominous, futuristic owl in the backdrop
 * behind all site content, with blur and blend mode for glassy/dark vibe.
 * The owl is now more visible and clear while maintaining the glassy/dark theme.
 */
export const OwlBackdrop: React.FC = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none fixed inset-0 z-0 select-none"
    style={{
      background: `radial-gradient(ellipse at 60% 20%, rgba(28,36,54,0.56) 0%, rgba(28,32,45,0.85) 65%, rgba(20,24,38,0.97) 100%), url(${OWL_IMAGE_URL}) center 12%/cover no-repeat`,
      filter: "blur(3px) grayscale(10%) opacity(0.45) brightness(1.16)",
      mixBlendMode: "lighten",
      transition: "filter 0.7s cubic-bezier(.27,1,.43,1)"
    }}
  >
    {/* Stronger overlay for a crisper glass/dark effect, but still see owl */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151826]/50 to-[#0b0914]/80" />
  </div>
);
