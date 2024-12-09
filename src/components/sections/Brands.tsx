"use client";

import { BrandsSection } from "@/lib/types";
import { useEffect, useRef } from "react";

export function Brands({ theme, brands }: BrandsSection) {
  const duplicatedBrands = [...brands, ...brands];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scrollAnimation = track.animate([{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }], {
      duration: 40000,
      iterations: Infinity,
      easing: "linear",
    });

    const pauseAnimation = () => scrollAnimation.pause();
    const playAnimation = () => scrollAnimation.play();

    track.addEventListener("mouseenter", pauseAnimation);
    track.addEventListener("mouseleave", playAnimation);

    return () => {
      track.removeEventListener("mouseenter", pauseAnimation);
      track.removeEventListener("mouseleave", playAnimation);
      scrollAnimation.cancel();
    };
  }, []);

  return (
    <section className="relative overflow-hidden w-full py-4 lg:py-8">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 w-[200px] h-full z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 w-[200px] h-full z-10 bg-gradient-to-l from-background to-transparent" />

      {/* Brand Track */}
      <div ref={trackRef} className="flex w-max">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="h-[50px] mx-8 flex items-center justify-center transition-opacity duration-300 hover:opacity-70">
            <img
              src={brand.url}
              alt={brand.title}
              className="h-full w-auto object-contain grayscale transition-[filter] duration-300 hover:grayscale-0 invert dark:invert-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
