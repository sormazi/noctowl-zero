
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
          className="text-[clamp(2.5rem,7vw,4rem)] font-light leading-[1.03] tracking-tightest font-sans text-white"
          style={{ letterSpacing: "-.08em" }}
        >
          <span className="font-bold pr-1">NoctOWL ZERO</span>
        </h1>
        <span className="block mt-2 text-base font-light opacity-70 tracking-tightest text-white/70" style={{ fontSize: "1.08rem" }}>
          by <span className="align-sub text-sm opacity-80 font-medium">QQ Labs</span>
        </span>
        {/* Impactful statement added here */}
        <div className="mt-8 mb-3">
          <span className="block text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-white tracking-tightest drop-shadow-sm">
            Markets sleep. NoctOwl doesn’t
          </span>
        </div>
        <p
          className="mt-6 text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto tracking-tight"
          style={{ opacity: 0.75 }}
        >
          NoctOwl ZERO is the first foundational LLM Agent for modern finance.<br />
          Deploy market-agnostic region-agnostic AI agents that can simultaneously read filings, analyze option-flow, decode releases and synthesize research into pure strategy— then generate AND execute before the street can react
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-7 justify-center mt-9">
          <NeumorphicButton onClick={onWaitlist} className="w-full md:w-auto">
            Get started
          </NeumorphicButton>
        </div>
      </div>
    </AnimatedSection>
  );
};
