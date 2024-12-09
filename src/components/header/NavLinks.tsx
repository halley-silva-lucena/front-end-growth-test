"use client";

import { MenuItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavLinkProps {
  menu: MenuItem[];
}

export function NavLinks({ menu }: NavLinkProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuWithoutLoginItem = menu.slice(0, -1);

  return (
    <nav className={`hidden md:flex items-center gap-6`}>
      {menuWithoutLoginItem.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setOpenDropdown(item.id)}
          onMouseLeave={() => setOpenDropdown(null)}>
          {item.link ? (
            <Link
              href={item.link}
              target={item.openNewWindow ? "_blank" : undefined}
              className={`flex text-white h-12 items-center font-medium text-sm px-4 `}>
              {item.title}
            </Link>
          ) : (
            <button className={`flex text-white h-12 items-center font-medium text-sm px-4 `}>{item.title}</button>
          )}

          {item.dropdown.length > 0 && openDropdown === item.id && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[900px] bg-[#1d1d1d] rounded-md shadow-lg pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.id}
                    href={dropdownItem.link}
                    target={dropdownItem.openNewWindow ? "_blank" : undefined}
                    className="block px-4 py-2 text-sm hover:bg-muted text-white">
                    <div className="w-f flex items-start gap-4">
                      <div className="h-12 w-12 p-2 bg-white rounded flex items-center">
                        <Image src={"assets/icons/flash.svg"} width={48} height={48} alt={"Flash"} />
                      </div>
                      <div className="flex flex-col">
                        {dropdownItem.title}
                        <p className="text-sm text-[#919191] w-40">Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex items-center  justify-between p-6 bg-[#2d2d2d] text-white mt-4 rounded-b-md">
                <div>
                  <h3 className="font-bold text-base">Business & Enterprise</h3>
                  <p className="text-sm text-[#919191]">
                    Advanced features such as private model training, SLA, and high throughput.
                  </p>
                </div>
                <button className="p-3 bg-[#1040FF] rounded-lg text-sm font-semibold">Contact Sales</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
