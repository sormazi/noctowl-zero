
import * as React from "react";

export const YCombinatorLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={42}
    height={32}
    viewBox="0 0 42 32"
    fill="none"
    {...props}
  >
    <rect width={42} height={32} rx={7} fill="#F0652F" />
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fill="#fff"
      fontFamily="Inter,Arial,sans-serif"
      fontWeight="bold"
      fontSize="1.3em"
      alignmentBaseline="middle"
      letterSpacing="0.03em"
    >
      YC
    </text>
  </svg>
);

