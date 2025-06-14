
import * as React from "react";
import { cn } from "@/lib/utils";

interface NeumorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const NeumorphicButton = React.forwardRef<HTMLButtonElement, NeumorphicButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "rounded-full px-7 py-3 font-medium bg-white/75 text-[#232941] shadow-neu border-none transition-all duration-300 " +
        "hover:shadow-neuHover hover:bg-white/95 hover:text-cyan-500 outline-none focus:ring-2 focus:ring-cyan-300 " +
        "active:scale-97 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
NeumorphicButton.displayName = "NeumorphicButton";

