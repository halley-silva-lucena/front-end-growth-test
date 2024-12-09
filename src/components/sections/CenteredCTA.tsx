import { CenteredCTASection } from "@/lib/types";
import Link from "next/link";
import React from "react";

export const CenteredCTA = ({ title, description, buttons }: CenteredCTASection) => {
  return (
    <section className="w-full  mx-auto flex flex-col justify-center items-center z-10 py-24 sm:bg-[#212121] text-white">
      <div className="max-w-7xl sm:w-1/2 flex flex-col px-8  sm:px-0 items-center justify-center gap-6">
        <p className="text-4xl sm:text-5xl font-medium text-center">{title}</p>
        <p className=" text-[#737373] font-medium text-lg text-center">{description}</p>
        <div className="flex gap-4 mt-6">
          {buttons.map((button) => (
            <Link
              key={button.id}
              className="bg-[#1040FF] text-white text-base font-semibold px-6 py-3 rounded-xl"
              href={button.url}
              target={button.newTab ? "_blank" : "_self"}>
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
