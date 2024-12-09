"use client";

import Image from "next/image";

interface ModulesHeaderProps {
  title: string;
  description: string;
  onPrevClick: () => void;
  onNextClick: () => void;
  canScrollNext: boolean | undefined;
  canScrollPrev: boolean | undefined;
}

export function ModulesHeader({
  title,
  description,
  onPrevClick,
  onNextClick,
  canScrollPrev,
  canScrollNext,
}: ModulesHeaderProps) {
  return (
    <div className="mb-12 flex w-full items-center justify-between text-white">
      <div className="w-full sm:w-2/3 md:w-1/2">
        <h2 className="mb-4 text-3xl font-medium sm:text-5xl">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="gap-2 hidden sm:flex">
        <button
          disabled={!canScrollPrev}
          className={`rounded-full bg-white text-black ${!canScrollPrev ? "opacity-50 " : "hover:bg-gray-200"}`}
          onClick={onPrevClick}>
          <Image
            className={`h-11 w-11 p-3`}
            src={"assets/icons/ic-arrow-left-black.svg"}
            alt={"Arrow Left"}
            width={16}
            height={16}
          />
        </button>
        <button
          className={`rounded-full bg-white text-black ${!canScrollNext ? "opacity-50 " : "hover:bg-gray-200"}`}
          onClick={onNextClick}
          disabled={!canScrollNext}>
          <Image
            className="h-11 w-11 p-3"
            src={"assets/icons/ic-arrow-right-black.svg"}
            alt={"Arrow Right"}
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
