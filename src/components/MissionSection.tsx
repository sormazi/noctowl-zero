
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Youtube } from "lucide-react";

export const MissionSection = () => (
  <AnimatedSection as="section" id="mission" className="max-w-4xl mx-auto mt-24" delay={150}>
    <GlassCard>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-grow">
          <h2
            className="text-3xl md:text-4xl font-light tracking-tightest font-sans text-black dark:text-white mb-2"
            style={{ letterSpacing: "-0.07em" }}
          >
            Why <span className="font-bold">NoctOWL ZERO?</span>
          </h2>
          <div className="mt-4 flex flex-col text-black/80 dark:text-white/80 text-lg font-light max-w-2xl">
            {/* Feature 1 */}
            <div className="mb-7">
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                🧠 LLM-Driven Valuation Engine
              </span>
              <p className="mt-2 text-base font-normal opacity-90">
                Ingest 10-Ks, earnings transcripts, or investor presentations and receive structured outputs:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                <li>Full-stack financial models (DCF, LBO, comparables)</li>
                <li>Risk flags and accounting anomalies</li>
                <li>Sector-relative KPI benchmarking</li>
                <li>Embedded management sentiment analysis</li>
              </ul>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center my-2">
              <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
            </div>
            {/* Feature 2 */}
            <div className="mb-6 mt-1">
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                📉 Quantitative &amp; HFT Intelligence Layer
              </span>
              <p className="mt-2 text-base font-normal opacity-90">
                Run AI-assisted analytics over time-series and market microstructure data to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                <li>Detect high-sigma volatility and volume dislocations</li>
                <li>Identify alpha clusters and structural inefficiencies</li>
                <li>Auto-generate and backtest synthetic trading strategies</li>
              </ul>
              <p className="italic text-[0.98rem] mt-3">
                e.g., “Scan for tickers with option-implied divergence vs realized volatility over the last 3 sessions”
              </p>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center my-2">
              <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
            </div>
            {/* Feature 3 */}
            <div className="mb-6 mt-1">
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                📰 Macro + Earnings Analysis Mode
              </span>
              <p className="mt-2 text-base font-normal opacity-90">
                Deploy AI agents capable of:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                <li>Parsing monetary policy signals across global central banks</li>
                <li>Quantifying forward guidance shifts in tone and semantics</li>
                <li>Compressing multi-quarter earnings calls into narrative-rich, KPI-aware executive summaries</li>
              </ul>
              <p className="italic text-[0.98rem] mt-3">
                Ask: “Map Powell’s forward tone against 2Y yield movements” or “Extract key margin commentary from NVDA Q1–Q5”
              </p>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center my-2">
              <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
            </div>
            {/* Feature 4 */}
            <div className="mb-2 mt-1">
              <span className="text-xl md:text-2xl font-semibold leading-relaxed select-none">
                🐍 API-First Architecture for Trading Systems
              </span>
              <p className="mt-2 text-base font-normal opacity-90">
                Integrate seamlessly with internal quant and trading infra:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1.5 text-base font-normal">
                <li>RESTful and streaming endpoints for signal retrieval</li>
                <li>Support for JSON, protobuf, and model-chaining workflows</li>
                <li>Real-time event-driven triggers for alerts, trades, and commentary</li>
                <li>Modular deployment: on-prem, cloud-native, or hybrid execution</li>
              </ul>
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
