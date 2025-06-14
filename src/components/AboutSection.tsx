
import React from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { OwlEyesGlowOverlay } from "./OwlEyesGlowOverlay";

export const AboutSection = () => (
  <AnimatedSection
    as="section"
    id="about"
    className="max-w-4xl mx-auto mt-16 md:mt-24 px-2 sm:px-4"
    delay={200}
  >
    <GlassCard
      className="
        bg-[#23243a]/20 dark:bg-[#16171f]/20
        relative
        backdrop-blur-2xl
        px-3 py-4 sm:px-8 sm:py-8
        shadow-glass
        transition-all
        duration-500
        ring-1 ring-cyan-200/5
      "
      style={{
        boxShadow: "0 8px 40px 0 rgba(97,239,255,0.13), 0 2px 12px 0 rgba(18,32,69,0.10)",
      }}
    >
      <OwlEyesGlowOverlay />
      <h2 className="text-xl xs:text-2xl md:text-3xl font-semibold mb-3 tracking-tight font-sans text-black dark:text-white" style={{letterSpacing:"-.05em"}}>
        About
      </h2>
      <p className="text-sm xs:text-base md:text-lg font-light text-black/80 dark:text-white/80 leading-relaxed">
        We are a team of Harvard-grads with backgrounds in technology, economics and finance, driven by a shared mission: to help you build intelligent agents that are optimized for precision, speed, and financial nuance. Our solutions are designed to integrate seamlessly into your existing infrastructure—so you can focus entirely on generating alpha, while we handle the rest.
      </p>
    </GlassCard>
  </AnimatedSection>
);
