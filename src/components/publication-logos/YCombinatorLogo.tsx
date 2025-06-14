
import * as React from "react";

// Simple monochrome YC logo, typically orange, but here grayscale for monochrome
export const YCombinatorLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={44} height={32} viewBox="0 0 44 32" fill="none" aria-label="Y Combinator" {...props}>
    <rect width="44" height="32" rx="7" fill="#fff" opacity="0.13"/>
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fill="#fff"
      fontFamily="Inter,Arial,sans-serif"
      fontWeight="bold"
      fontSize="1.4em"
      alignmentBaseline="middle"
      letterSpacing="0.01em"
      opacity="0.93"
    >
      YC
    </text>
  </svg>
);
