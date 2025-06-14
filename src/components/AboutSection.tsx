
import React from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

export const AboutSection = () => (
  <AnimatedSection
    as="section"
    id="about"
    className="max-w-4xl mx-auto mt-24"
    delay={200}
  >
    {/* Increased opacity by changing transparency from /90 to /95 */}
    <GlassCard className="bg-[#23243a]/95 dark:bg-[#16171f]/95">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight font-sans text-black dark:text-white" style={{letterSpacing:"-.05em"}}>
        About
      </h2>
      <p className="text-base md:text-lg font-light text-black/80 dark:text-white/80">
        We are a team of Harvard-trained finance and technology professionals, driven by a shared mission: to help you build intelligent agents that are optimized for precision, speed, and financial nuance. Our solutions are designed to integrate seamlessly into your existing infrastructure—so you can focus entirely on generating alpha, while we handle the rest.
      </p>
    </GlassCard>
  </AnimatedSection>
);
