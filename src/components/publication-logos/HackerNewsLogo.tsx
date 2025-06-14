
import * as React from "react";

export const HackerNewsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={38}
    height={32}
    viewBox="0 0 38 32"
    fill="none"
    {...props}
  >
    <rect width={38} height={32} rx={7} fill="#FF6600" />
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
    >
      HN
    </text>
  </svg>
);

