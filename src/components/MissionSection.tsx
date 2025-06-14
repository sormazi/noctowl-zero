
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Youtube } from "lucide-react";

export const MissionSection = () => (
  <AnimatedSection as="section" id="mission" className="max-w-4xl mx-auto mt-24" delay={150}>
    <GlassCard>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-grow">
          <h2 className="text-3xl md:text-4xl font-light tracking-tightest font-sans text-black dark:text-white mb-2"
              style={{ letterSpacing: "-0.07em" }}>
            Why <span className="font-bold">NoctOWL ZERO?</span>
          </h2>
          <p className="mt-3 text-black/70 dark:text-white/70 opacity-80 font-light text-lg leading-tight max-w-2xl">
            <span className="block mb-2">
             Our mission is to democratize access to advanced financial AI. 
            </span>
            We believe valuation and financial reasoning are core to the world's progress. 
            <span className="block mt-2">
            By building a transparent, reliable, and secure LLM specializing in finance, we're enabling professionals and innovators worldwide to unlock value, make better decisions, and drive the future economy.
            </span>
          </p>
        </div>
        <div className="pt-4 pl-0 md:pl-12 flex-shrink-0 flex flex-col items-center">
          <span className="bg-gradient-to-br from-cyan-200 to-cyan-500 rounded-full p-5 shadow-neu shadow-cyan-300/20">
            <Youtube size={32} strokeWidth={1.2} className="text-cyan-600/90" />
          </span>
          <span className="mt-2 text-xs font-light tracking-tight uppercase opacity-60">Discover</span>
        </div>
      </div>
    </GlassCard>
  </AnimatedSection>
);
