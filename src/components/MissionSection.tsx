
import React, { useEffect, useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    ctx = gsap.context(() => {
      if (!sectionRef.current || !bgRef.current || !textBlockRef.current) return;

      // Clean up existing ScrollTriggers for this section
      ScrollTrigger.getAll().forEach(trigger => {
        if (
          (trigger as any)?.trigger === sectionRef.current
        ) {
          trigger.kill();
        }
      });

      // Smoother, less jarring pin behavior
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=68",  // Start earlier, closer to top for less abruptness
        end: "+=72%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 0.8, // More gentle
        scrub: false,
      });

      // Fade in background more gently
      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top+=120",
            end: "+=23%",
            scrub: true,
          },
        }
      );

      // Animate text word by word - subtle, with slightly less translate-y
      const textWords = textBlockRef.current.querySelectorAll(".gsap-word");
      gsap.fromTo(
        textWords,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.68,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 53%",
            scrub: false,
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx && ctx.revert();
  }, []);

  // Word-by-word animated render
  const buildAnimatedWords = (text: string) =>
    text.split(" ").map((word, idx) => (
      <span key={idx} className="gsap-word inline-block opacity-0">{word}&nbsp;</span>
    ));

  return (
    <AnimatedSection as="section" id="mission" className="max-w-4xl mx-auto mt-24 relative" delay={150}>
      <div ref={sectionRef} className="relative">
        {/* Fading-in background */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-[-1] bg-gradient-to-br from-[#2e3752]/75 via-[#181c31]/65 to-[#16192d]/80 rounded-[2.7rem] scale-105 blur-md opacity-0 pointer-events-none transition-all duration-700"
        />
        <GlassCard>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-grow">
              {/* Section header always rendered */}
              <h2
                className="text-3xl md:text-4xl font-light tracking-tightest font-sans text-black dark:text-white mb-2"
                style={{ letterSpacing: "-0.07em" }}
              >
                {/* Render the heading NOT wrapped in 'gsap-word' */}
                Why NoctOWL ZERO?
              </h2>
              <div
                ref={textBlockRef}
                className="mt-4 flex flex-col text-black/80 dark:text-white/80 text-lg font-light max-w-2xl"
              >
                {/* All features now animate in word by word */}
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
                {/* Divider */}
                <div className="flex items-center justify-center my-2">
                  <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
                </div>
                {/* Feature 2 */}
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
                {/* Divider */}
                <div className="flex items-center justify-center my-2">
                  <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
                </div>
                {/* Feature 3 */}
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
                {/* Divider */}
                <div className="flex items-center justify-center my-2">
                  <span className="flex-grow border-t border-dashed border-white/25 dark:border-black/10" />
                </div>
                {/* Feature 4 */}
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
    </AnimatedSection>
  );
};
