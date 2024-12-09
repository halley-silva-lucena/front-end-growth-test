"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function ModuleCard({ title, description, button }: Omit<any, "id">) {
  return (
    <div className="flex h-full flex-col rounded-lg bg-[#212121] p-6">
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-4 flex-grow text-sm text-[#A8A8A8]">{description}</p>
      <Link
        href={button.url}
        className="group inline-flex items-center gap-2 text-base font-medium text-[#75A5FF] hover:text-primary/80">
        {button.text}
        <Image
          className="h-6 w-6 transition-transform group-hover:translate-x-1"
          src={"assets/icons/ic-arrow-up.svg"}
          width={24}
          height={24}
          alt={"Arrow Up"}
        />
      </Link>
    </div>
  );
}
