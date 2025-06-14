
import React from "react";

// List of companies (simulate logos with stylized text for now)
const companies = [
  { name: "Johnson & Johnson", className: "font-playfair text-xl" },
  { name: "DATADOG", className: "font-semibold" },
  { name: "stripe", className: "font-bold tracking-wide" },
  { name: "SAMSUNG", className: "font-bold tracking-widest" },
  { name: "instacart", className: "font-semibold lowercase" },
  { name: "perplexity", className: "font-light tracking-tightest lowercase" },
  { name: "ramp", className: "italic font-light" },
  { name: "shopify", className: "font-bold italic" },
  { name: "US FOODS", className: "font-extrabold tracking-tight" },
  { name: "mercado libre", className: "font-semibold lowercase" },
];

// Split companies into two rows (top 5, bottom 5)
const ROWS = [
  companies.slice(0, 5),
  companies.slice(5),
];

export const TrustedBySection = () => (
  <section className="w-full max-w-5xl mx-auto py-14 md:py-20 px-3 mt-16 mb-2">
    <h3
      className="text-center text-base md:text-lg font-light uppercase tracking-[.17em] text-white/40 mb-7"
      style={{ letterSpacing: "0.18em" }}
    >
      TRUSTED BY ENGINEERS AT
    </h3>
    <div className="flex flex-col gap-6 md:gap-8 items-center">
      {ROWS.map((row, i) => (
        <div
          key={i}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4 px-1"
        >
          {row.map((company, idx) => (
            <span
              key={company.name}
              className={`text-white/65 hover:text-white transition-colors duration-200 text-lg md:text-xl lg:text-2xl select-none opacity-75 ${company.className}`}
              style={{ minWidth: "98px", textAlign: "center" }}
            >
              {company.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);

