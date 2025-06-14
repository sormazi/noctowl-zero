
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
  const [api, setApi] = React.useState<any>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const isHovered = React.useRef(false);

  React.useEffect(() => {
    if (!api) return;

    // Auto-scroll forward every 1.7s, unless hovered
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) {
        api.scrollNext?.();
      }
    }, 1700);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);

  return (
    <section
      className="w-full max-w-5xl mx-auto py-14 md:py-20 px-3 mt-16 mb-2"
      aria-label="As featured in"
      ref={containerRef}
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
    >
      <h3
        className="text-center text-base md:text-lg font-light uppercase tracking-[.15em] text-white/40 mb-7"
        style={{ letterSpacing: "0.16em" }}
      >
        AS FEATURED IN
      </h3>
      <Carousel
        opts={{
          loop: true,
          align: "center",
        }}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="items-center h-16">
          {publications.map(({ name, Logo }, idx) => (
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
