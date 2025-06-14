import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
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

export const AsFeaturedInSection = () => {
  const apiRef = React.useRef<any>(null);
  const hoverRef = React.useRef(false);
  const rAFRef = React.useRef<number | null>(null);

  // Autoplay settings
  const AUTOPLAY_DELAY = 1800; // ms, time between scrolls

  // Autoplay loop using rAF + setTimeout for smoothest cross-browser support
  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastTime = Date.now();

    function play() {
      if (apiRef.current && !hoverRef.current) {
        apiRef.current.scrollNext();
      }
      // Re-arm with the delay; use rAF for frame sync
      timeoutId = setTimeout(() => {
        rAFRef.current = requestAnimationFrame(play);
      }, AUTOPLAY_DELAY);
    }

    // Start animation loop only if Embla is present
    if (apiRef.current) {
      play();
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
    // Only run on Embla API mount
  }, [apiRef.current]);

  // Mouse hover handlers to pause/resume
  const handleMouseEnter = () => {
    hoverRef.current = true;
  };

  const handleMouseLeave = () => {
    hoverRef.current = false;
  };

  return (
    <section
      className="w-full max-w-5xl mx-auto py-14 md:py-20 px-3 mt-16 mb-2"
      aria-label="As featured in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3
        className="text-center text-base md:text-lg font-light uppercase tracking-[.15em] text-white mb-7"
        style={{ letterSpacing: "0.16em" }}
      >
        AS FEATURED IN
      </h3>
      <Carousel
        opts={{
          loop: true,
          align: "center",
        }}
        setApi={(api) => {
          apiRef.current = api;
        }}
        className="relative"
      >
        <CarouselContent className="items-center h-16">
          {publications.map(({ name, Logo }) => (
            <CarouselItem
              key={name}
              className="basis-1/2 sm:basis-1/3 md:basis-1/6 flex justify-center"
            >
              <div className="flex justify-center items-center min-w-[56px] min-h-[40px] rounded-[5px] px-2 mx-auto bg-transparent hover-scale transition-all">
                <Logo style={{ display: "block", maxWidth: 130, height: 32 }} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
