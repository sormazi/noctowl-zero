import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Youtube } from "lucide-react";
import { LogoCarousel } from "@/components/LogoCarousel";

export const MissionSection = () => (
  <AnimatedSection as="section" id="mission" className="max-w-4xl mx-auto mt-24" delay={150}>
    <GlassCard>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-grow">
          <h2 className="text-3xl md:text-4xl font-light tracking-tightest font-sans text-black dark:text-white mb-2"
              style={{ letterSpacing: "-0.07em" }}>
            Why <span className="font-bold">NoctOWL ZERO?</span>
          </h2>
          <LogoCarousel />
          <div className="mt-3 flex flex-col text-black/80 dark:text-white/80 text-lg space-y-7 font-light max-w-2xl">
            <div>
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">🧠 LLM-Powered Valuation</span>
              <div className="mt-1 text-base font-normal opacity-90">
                Upload a 10-K or earnings call → get full valuation models, comps, DCFs, and red flag detection in seconds.
              </div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">📉 Quant &amp; HFT Intelligence</span>
              <div className="mt-1 text-base font-normal opacity-90">
                Parse time series, detect anomaly clusters, generate synthetic alpha strategies.<br />
                <span className="italic">Ask:</span> “Which tickers have highest abnormal volume/volatility divergence this week?”
              </div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">📰 Macro &amp; Earnings Analyst Mode</span>
              <div className="mt-1 text-base font-normal opacity-90">
                <span className="italic">Ask:</span>
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  <li>
                    “How did Powell’s last 3 statements shift bond yields?”
                  </li>
                  <li>
                    “Summarize NVDA’s last 5 calls into a 30-second briefing.”
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">🐍 API-First for Traders</span>
              <div className="mt-1 text-base font-normal opacity-90">
                Integrate directly with your stack — use our endpoints for signal generation, portfolio commentary, or agentic trade assistants.
              </div>
            </div>
          </div>
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
