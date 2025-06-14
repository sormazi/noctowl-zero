
import React from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

export const AboutSection = () => (
  <AnimatedSection
    as="section"
    id="about"
    className="max-w-2xl mx-auto mt-24"
    delay={200}
  >
    <GlassCard>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 tracking-tight font-sans text-black dark:text-white" style={{letterSpacing:"-.05em"}}>
        About
      </h2>
      <p className="text-base md:text-lg font-light text-black/80 dark:text-white/80">
        We're a bunch of Harvard fin-bros fed-up with half-baked underwhelming bloatware. Our quest is to build and provide tools optimized for speed, precision and nuance—most importantly, when the bell dings, perform EXACTLY as advertised.
      </p>
    </GlassCard>
  </AnimatedSection>
);
