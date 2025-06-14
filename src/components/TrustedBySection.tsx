
import React from "react";

// List of publications (simulate logos with stylized text for now)
const publications = [
  { name: "TechCrunch", className: "font-extrabold tracking-wide" },
  { name: "Bloomberg", className: "font-bold italic" },
  { name: "Finextra", className: "font-semibold tracking-tight" },
  { name: "The Information", className: "font-playfair text-lg" },
  { name: "a16z blog", className: "font-semibold uppercase tracking-wide" },
  { name: "Y Combinator", className: "font-bold" },
  { name: "Hacker News", className: "font-semibold text-orange-400" },
  { name: "Forbes", className: "font-extrabold italic" },
  { name: "Fortune", className: "font-bold tracking-widest" },
  { name: "Business Insider", className: "font-medium lowercase" },
];

// Split publications into two rows (top 5, bottom 5)
const ROWS = [
  publications.slice(0, 5),
  publications.slice(5),
];

export const AsFeaturedInSection = () => (
  <section className="w-full max-w-5xl mx-auto py-14 md:py-20 px-3 mt-16 mb-2">
    <h3
      className="text-center text-base md:text-lg font-light uppercase tracking-[.15em] text-white/40 mb-7"
      style={{ letterSpacing: "0.16em" }}
    >
      AS FEATURED IN
    </h3>
    <div className="flex flex-col gap-6 md:gap-8 items-center">
      {ROWS.map((row, i) => (
        <div
          key={i}
          className="flex flex-wrap justify-center gap-x-10 gap-y-4 px-1"
        >
          {row.map((pub) => (
            <span
              key={pub.name}
              className={`text-white/85 hover:text-white transition-colors duration-200 text-lg md:text-xl lg:text-2xl select-none opacity-90 ${pub.className}`}
              style={{ minWidth: "120px", textAlign: "center" }}
            >
              {pub.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  </section>
);
