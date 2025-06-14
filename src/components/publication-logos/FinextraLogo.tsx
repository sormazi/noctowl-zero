
import * as React from "react";

// Monochrome Finextra logo, SVG simplified
export const FinextraLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={110} height={32} viewBox="0 0 110 32" fill="none" aria-label="Finextra" {...props}>
    <g>
      <text
        x="55"
        y="20"
        fill="#fff"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="bold"
        fontSize="1.7em"
        textAnchor="middle"
        alignmentBaseline="middle"
        opacity="0.94"
      >
        Finextra
      </text>
    </g>
  </svg>
);
