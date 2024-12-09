"use client";

import { use, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ModulesSection } from "@/lib/types";
import { ModulesHeader } from "../ui/ModulesHeader";
import { ModuleCard } from "../ui/ModuleCard";

export function Modules({ theme, preTitle, title, description, cards }: ModulesSection) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial state

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative lg:mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ModulesHeader
        title={title}
        description={description}
        onPrevClick={scrollPrev}
        onNextClick={scrollNext}
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
      />
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {cards.map((card) => (
            <div key={card.id} className="flex-[0_0_99%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]">
              <ModuleCard title={card.title} description={card.description} button={card.button} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
