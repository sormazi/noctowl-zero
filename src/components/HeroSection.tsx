
import React from "react";
import { NeumorphicButton } from "@/components/ui/NeumorphicButton";
import { AnimatedSection } from "@/components/AnimatedSection";

export const HeroSection = ({ onWaitlist }: { onWaitlist: () => void }) => {
  return (
    <AnimatedSection
      as="section"
      className="min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-10"
      id="home"
      delay={0}
    >
      <div className="w-full max-w-2xl text-center flex flex-col items-center">
        <h1
          className="text-[clamp(2.5rem,7vw,4rem)] font-light leading-[1.03] tracking-tightest font-sans text-black dark:text-white"
          style={{ letterSpacing: "-.08em" }}
        >
          <span className="font-bold pr-1">NoctOWL ZERO</span>
          <span className="opacity-70 font-extralight">by QQ Labs</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-black/55 dark:text-white/60 font-light max-w-xl mx-auto tracking-tight"
           style={{ opacity: 0.78 }}>
          The next generation foundational LLM for valuation and finance. Designed from the ground up to handle precision, context, and scale—by finance professionals for finance.
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-7 justify-center mt-9">
          <NeumorphicButton onClick={onWaitlist} className="w-full md:w-auto">
            Get started
          </NeumorphicButton>
        </div>
      </div>
      <AnimatedSection as="div" className="relative mt-14 w-full flex justify-center" delay={200}>
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80"
          alt="Product UI"
          className="w-full max-w-3xl h-auto drop-shadow-xl rounded-xl border border-white/30 object-cover"
          draggable={false}
          style={{
            background: "rgba(220,220,250,.08)",
            boxShadow: "0 8px 40px 4px rgba(44,80,144,0.13)"
          }}
        />
      </AnimatedSection>
    </AnimatedSection>
  );
};
