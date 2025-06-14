
import * as React from "react";

export const A16zLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={80}
    height={30}
    viewBox="0 0 80 30"
    fill="none"
    {...props}
  >
    <rect width={80} height={30} rx={5} fill="none" />
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="Inter,Arial,sans-serif"
      fontWeight="bold"
      fontSize="1.4em"
      alignmentBaseline="middle"
    >
      a16z
    </text>
  </svg>
);

