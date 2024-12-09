import { CardContentGridSection } from "@/lib/types";
import React from "react";
import { FeatureCard } from "../ui/FeatureCard";

export const CardContentGrid = ({ preTitle, title, description, cards }: CardContentGridSection) => {
  // console.log("CardContentGrid -> cards", cards);
  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center items-center z-10 py-8 md:py-24">
      <div className="flex flex-col w-full md:w-1/2 items-center gap-4">
        <span className="text-[#75A5FF] font-medium text-sm">{preTitle}</span>
        <h2 className="font-medium text-[32px] md:text-4xl text-white text-center">{title}</h2>
        <p className="text-lg text-[#858585] font-medium text-center px-5">{description}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {cards.map((card) => (
          <FeatureCard key={card.id} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </section>
  );
};
