
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { OwlEyesGlowOverlay } from "./OwlEyesGlowOverlay";

const featureText = `
🧠 LLM-Driven Valuation Engine

Ingest 10-Ks, earnings transcripts, or investor presentations and receive structured outputs:
• Full-stack financial models (DCF, LBO, comparables)
• Risk flags and accounting anomalies
• Sector-relative KPI benchmarking
• Embedded management sentiment analysis

📉 Quantitative & HFT Intelligence Layer

Run AI-assisted analytics over time-series and market microstructure data to:
• Detect high-sigma volatility and volume dislocations
• Identify alpha clusters and structural inefficiencies
• Auto-generate and backtest synthetic trading strategies
e.g., "Scan for tickers with option-implied divergence vs realized volatility over the last 3 sessions"

📰 Macro + Earnings Analysis Mode

Deploy AI agents capable of:
• Parsing monetary policy signals across global central banks
• Quantifying forward guidance shifts in tone and semantics
• Compressing multi-quarter earnings calls into narrative-rich, KPI-aware executive summaries
Ask: "Map Powell's forward tone against 2Y yield movements" or "Extract key margin commentary from NVDA Q1–Q5"

🐍 API-First Architecture for Trading Systems

Integrate seamlessly with internal quant and trading infra:
• RESTful and streaming endpoints for signal retrieval
• Support for JSON, protobuf, and model-chaining workflows
• Real-time event-driven triggers for alerts, trades, and commentary
• Modular deployment: on-prem, cloud-native, or hybrid execution
`;

export const MissionSection = () => {
  return (
    <AnimatedSection as="section" id="mission" className="w-full mt-16 md:mt-24 relative" delay={150}>
      <div className="w-full relative left-0 right-0">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
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
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-12">
              <div className="flex-grow w-full">
                <h2
                  className="text-2xl xs:text-3xl md:text-4xl font-light tracking-tightest font-sans text-black dark:text-white mb-2"
                  style={{ letterSpacing: "-0.07em" }}
                >
                  Why NoctOWL ZERO?
                </h2>
                <pre
                  className="mt-4 flex flex-col text-black/80 dark:text-white/80 text-base xs:text-lg md:text-lg font-light w-full max-w-full whitespace-pre-line leading-relaxed"
                  style={{ fontFamily: 'inherit', maxWidth: '100%' }}
                >
                  {featureText.trim()}
                </pre>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
};
