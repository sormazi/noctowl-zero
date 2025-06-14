
import React from "react";
import { TechCrunchLogo } from "./publication-logos/TechCrunchLogo";
import { FinextraLogo } from "./publication-logos/FinextraLogo";
import { A16zLogo } from "./publication-logos/A16zLogo";
import { TheInformationLogo } from "./publication-logos/TheInformationLogo";
import { YCombinatorLogo } from "./publication-logos/YCombinatorLogo";
import { HackerNewsLogo } from "./publication-logos/HackerNewsLogo";

// List of publication logo components (order matters!)
const publications = [
  {
    name: "TechCrunch",
    Logo: TechCrunchLogo,
  },
  {
    name: "Finextra",
    Logo: FinextraLogo,
  },
  {
    name: "a16z",
    Logo: A16zLogo,
  },
  {
    name: "The Information",
    Logo: TheInformationLogo,
  },
  {
    name: "Y Combinator",
    Logo: YCombinatorLogo,
  },
  {
    name: "Hacker News",
    Logo: HackerNewsLogo,
  },
];

export const AsFeaturedInSection = () => (
  <section
    className="w-full max-w-5xl mx-auto py-14 md:py-20 px-3 mt-16 mb-2"
    aria-label="As featured in"
  >
    <h3
      className="text-center text-base md:text-lg font-light uppercase tracking-[.15em] text-white/40 mb-7"
      style={{ letterSpacing: "0.16em" }}
    >
      AS FEATURED IN
    </h3>
    <div className="flex flex-wrap justify-center items-center gap-7 sm:gap-10 md:gap-14 px-1">
      {publications.map(({ name, Logo }) => (
        <span
          key={name}
          className="flex justify-center items-center opacity-95 hover:opacity-100 transition-opacity"
          style={{ minWidth: 54, minHeight: 32 }}
          aria-label={name}
        >
          <Logo style={{ display: "block", maxWidth: 130, height: 32 }} />
        </span>
      ))}
    </div>
  </section>
);

