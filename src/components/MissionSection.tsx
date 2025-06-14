
import React, { useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ScrollTypingEffect } from "@/components/ScrollTypingEffect";

const featureText = `
🧠 LLM-Driven Valuation Engine

Ingest 10-Ks, earnings transcripts, or investor presentations and receive structured outputs:
• Full-stack financial models (DCF, LBO, comparables)
• Risk flags and accounting anomalies
• Sector-relative KPI benchmarking
• Embedded management sentiment analysis

────────────────────────────

📉 Quantitative & HFT Intelligence Layer

Run AI-assisted analytics over time-series and market microstructure data to:
• Detect high-sigma volatility and volume dislocations
• Identify alpha clusters and structural inefficiencies
• Auto-generate and backtest synthetic trading strategies
e.g., "Scan for tickers with option-implied divergence vs realized volatility over the last 3 sessions"

────────────────────────────

📰 Macro + Earnings Analysis Mode

Deploy AI agents capable of:
• Parsing monetary policy signals across global central banks
• Quantifying forward guidance shifts in tone and semantics
• Compressing multi-quarter earnings calls into narrative-rich, KPI-aware executive summaries
Ask: "Map Powell's forward tone against 2Y yield movements" or "Extract key margin commentary from NVDA Q1–Q5"

────────────────────────────

🐍 API-First Architecture for Trading Systems

Integrate seamlessly with internal quant and trading infra:
• RESTful and streaming endpoints for signal retrieval
• Support for JSON, protobuf, and model-chaining workflows
• Real-time event-driven triggers for alerts, trades, and commentary
• Modular deployment: on-prem, cloud-native, or hybrid execution
`;

export const MissionSection = () => {
  return (
    <AnimatedSection as="section" id="mission" className="w-full mt-24 relative" delay={150}>
      <div className="w-full relative left-0 right-0">
        <div className="max-w-4xl mx-auto px-4">
          {/* Increased opacity by overriding GlassCard glass bg color */}
          <GlassCard className="bg-[#23243a]/95 dark:bg-[#16171f]/95">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex-grow">
                <h2
                  className="text-3xl md:text-4xl font-light tracking-tightest font-sans text-black dark:text-white mb-2"
                  style={{ letterSpacing: "-0.07em" }}
                >
                  Why NoctOWL ZERO?
                </h2>
                <ScrollTypingEffect
                  text={featureText.trim()}
                  className="mt-4 flex flex-col text-black/80 dark:text-white/80 text-lg font-light max-w-2xl"
                  fontClassName="whitespace-pre-line"
                  typingDelay={12}
                  deletingDelay={7}
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
};
