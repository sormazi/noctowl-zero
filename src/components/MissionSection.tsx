
import React, { useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export const MissionSection = () => {
  const textBlockRef = useRef<HTMLDivElement>(null);

  const buildAnimatedWords = (text: string) =>
    text.split(" ").map((word, idx) => (
      <span key={idx} className="inline-block">{word}&nbsp;</span>
    ));

  return (
    <AnimatedSection as="section" id="mission" className="w-full mt-24 relative" delay={150}>
      <div className="w-full relative left-0 right-0">
        <div className="max-w-4xl mx-auto px-4">
          <GlassCard>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex-grow">
                <h2
                  className="text-3xl md:text-4xl font-light tracking-tightest font-sans text-black dark:text-white mb-2"
                  style={{ letterSpacing: "-0.07em" }}
                >
                  Why NoctOWL ZERO?
                </h2>
                <div
                  ref={textBlockRef}
                  className="mt-4 flex flex-col text-black/80 dark:text-white/80 text-lg font-light max-w-2xl"
                >
                  <div className="mb-7">
                    <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                      {buildAnimatedWords("🧠 LLM-Driven Valuation Engine")}
                    </span>
                    <p className="mt-2 text-base font-normal opacity-90">
                      {buildAnimatedWords("Ingest 10-Ks, earnings transcripts, or investor presentations and receive structured outputs:")}
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                      {[
                        "Full-stack financial models (DCF, LBO, comparables)",
                        "Risk flags and accounting anomalies",
                        "Sector-relative KPI benchmarking",
                        "Embedded management sentiment analysis",
                      ].map((item, i) => (
                        <li key={i}>{buildAnimatedWords(item)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
                  </div>
                  <div className="mb-6 mt-1">
                    <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                      {buildAnimatedWords("📉 Quantitative & HFT Intelligence Layer")}
                    </span>
                    <p className="mt-2 text-base font-normal opacity-90">
                      {buildAnimatedWords("Run AI-assisted analytics over time-series and market microstructure data to:")}
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                      {[
                        "Detect high-sigma volatility and volume dislocations",
                        "Identify alpha clusters and structural inefficiencies",
                        "Auto-generate and backtest synthetic trading strategies",
                      ].map((item, i) => (
                        <li key={i}>{buildAnimatedWords(item)}</li>
                      ))}
                    </ul>
                    <p className="italic text-[0.98rem] mt-3">
                      {buildAnimatedWords("e.g., “Scan for tickers with option-implied divergence vs realized volatility over the last 3 sessions”")}
                    </p>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
                  </div>
                  <div className="mb-6 mt-1">
                    <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                      {buildAnimatedWords("📰 Macro + Earnings Analysis Mode")}
                    </span>
                    <p className="mt-2 text-base font-normal opacity-90">
                      {buildAnimatedWords("Deploy AI agents capable of:")}
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                      {[
                        "Parsing monetary policy signals across global central banks",
                        "Quantifying forward guidance shifts in tone and semantics",
                        "Compressing multi-quarter earnings calls into narrative-rich, KPI-aware executive summaries",
                      ].map((item, i) => (
                        <li key={i}>{buildAnimatedWords(item)}</li>
                      ))}
                    </ul>
                    <p className="italic text-[0.98rem] mt-3">
                      {buildAnimatedWords("Ask: “Map Powell’s forward tone against 2Y yield movements” or “Extract key margin commentary from NVDA Q1–Q5”")}
                    </p>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
                  </div>
                  <div className="mb-2 mt-1">
                    <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                      {buildAnimatedWords("🐍 API-First Architecture for Trading Systems")}
                    </span>
                    <p className="mt-2 text-base font-normal opacity-90">
                      {buildAnimatedWords("Integrate seamlessly with internal quant and trading infra:")}
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                      {[
                        "RESTful and streaming endpoints for signal retrieval",
                        "Support for JSON, protobuf, and model-chaining workflows",
                        "Real-time event-driven triggers for alerts, trades, and commentary",
                        "Modular deployment: on-prem, cloud-native, or hybrid execution",
                      ].map((item, i) => (
                        <li key={i}>{buildAnimatedWords(item)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
};
