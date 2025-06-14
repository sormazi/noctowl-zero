
import * as React from "react";

export const FinextraLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={110}
    height={24}
    fill="none"
    viewBox="0 0 110 24"
    {...props}
  >
    <rect width={110} height={24} rx={5} fill="none" />
    <text
      x="50%"
      y="60%"
      textAnchor="middle"
      fill="#ffffff"
      fontFamily="Inter,Arial,sans-serif"
      fontWeight="bold"
      fontSize="1.3em"
      alignmentBaseline="middle"
    >
      Finextra
    </text>
  </svg>
);

