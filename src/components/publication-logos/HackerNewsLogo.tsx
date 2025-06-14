
import * as React from "react";

// Monochrome HN logo, usually orange, here grayscale
export const HackerNewsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={50} height={32} viewBox="0 0 50 32" fill="none" aria-label="Hacker News" {...props}>
    <rect width="50" height="32" rx="7" fill="#fff" opacity="0.13"/>
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fill="#fff"
      fontFamily="Inter,Arial,sans-serif"
      fontWeight="bold"
      fontSize="1.2em"
      alignmentBaseline="middle"
      letterSpacing="0.04em"
      opacity="0.93"
    >
      HN
    </text>
  </svg>
);
