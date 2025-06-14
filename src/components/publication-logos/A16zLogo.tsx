
import * as React from "react";

// Monochrome a16z logo in official branding
export const A16zLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={80} height={32} viewBox="0 0 80 32" fill="none" aria-label="a16z" {...props}>
    <g>
      <text
        x="40"
        y="22"
        fill="#fff"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="bold"
        fontSize="2em"
        textAnchor="middle"
        alignmentBaseline="middle"
        opacity="0.94"
      >
        a16z
      </text>
    </g>
  </svg>
);
