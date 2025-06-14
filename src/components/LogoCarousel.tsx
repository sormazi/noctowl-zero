
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Array of logo data: name and (if wanted later) image src
const logos = [
  { name: "TechCrunch" },
  { name: "Bloomberg" },
  { name: "Finextra" },
  { name: "The Information" },
  { name: "a16z blog" },
  { name: "Y Combinator" },
];

// For best styling, we'll render each as a "logo token" with white text
export const LogoCarousel = () => {
  // carousel auto-scroll effect
  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 1700);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-7 mb-3">
      <Carousel
        opts={{
          loop: true,
          align: "center",
        }}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent className="items-center">
          {logos.map((logo, idx) => (
            <CarouselItem key={logo.name} className="basis-1/3 md:basis-1/6 flex justify-center">
              <div className="flex justify-center items-center h-12 md:h-14 min-w-[110px] px-3 py-2 mx-auto bg-white/10 rounded-lg border border-white/10 shadow-md">
                <span className="text-white text-base md:text-lg font-medium tracking-tightest opacity-90 whitespace-nowrap drop-shadow-lg  select-none">
                  {logo.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

