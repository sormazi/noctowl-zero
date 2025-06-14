
import * as React from "react";

export const TechCrunchLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={92}
    height={32}
    fill="none"
    viewBox="0 0 92 32"
    {...props}
  >
    <rect width={92} height={32} rx={7} fill="none" />
    <text
      x="50%"
      y="55%"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="Inter,Arial,sans-serif"
      fontWeight="bold"
      fontSize="1.6em"
      letterSpacing="0.03em"
      alignmentBaseline="middle"
    >
      TC
    </text>
  </svg>
);

