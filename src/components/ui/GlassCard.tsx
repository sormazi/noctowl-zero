
import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        // Responsive padding and width for mobile friendliness
        "backdrop-blur-2xl bg-[#23243a]/70 dark:bg-[#16171f]/70 border border-white/20 dark:border-cyan-400/10 rounded-2xl shadow-glass p-3 xs:p-5 sm:p-8 w-full transition-all duration-500 ring-1 ring-cyan-200/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
GlassCard.displayName = "GlassCard";
