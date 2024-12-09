import { HeroSection } from "@/lib/types";
import Image from "next/image";
import React from "react";
import AudioPlayer from "../audio/AudioPlayer";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const HeroVideo = ({ theme, title, description, buttons, background }: HeroSection) => {
  return (
    <section className="w-full md:w-4/5 lg:w-full h-auto flex items center flex-col md:mx-auto lg:mx-auto px-4 lg:px-0">
      <div className="absolute inset-0">
        <Image
          src={background.url}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
      </div>
      <div className="relative  container mx-auto h-full my-auto max-w-7xl z-10  px-0 md:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center mx-auto py-24 w-full lg:w-1/2 mt-10">
            <div>
              <h1 className="text-5xl lg:text-6xl font-medium text-white mb-6">{title}</h1>
              <p className="max-w-3xl  text-lg lg:text-xl font-medium text-[#858585]">{description}</p>
            </div>

            <div className="mt-4">
              <p className="text-[#858585] font-medium text-xs text-left">Try now</p>
              <div className="flex justify-between border-[#262626] rounded-xl  border h-[90px] w-full mt-4 p-4">
                <AudioPlayer />
                <div className="border-r border border-[#262626] mx-2 md:mx-4"></div>
                <Link className=" text-white cursor-pointer" href={"/dash"}>
                  <p className="text-white">Upload your own track</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col w-full justify-center items-center  mt-10 lg:mt-20">
              <div className="flex flex-wrap gap-4 justify-center">
                {buttons.map((button) => (
                  <button
                    key={button.id}
                    className={`p-4 text-base text-white font-semibold ${
                      button.appearance === "solid"
                        ? " rounded-xl bg-[#1040FF] hover:bg-blue-600"
                        : "border-white/20 text-white "
                    }`}>
                    <a
                      href={button.url}
                      target={button.newTab ? "_blank" : undefined}
                      rel={button.newTab ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2">
                      {button.text}
                      {button.endIcon === "arrow-right" && <FaArrowRight className="h-4 w-4" />}
                    </a>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
