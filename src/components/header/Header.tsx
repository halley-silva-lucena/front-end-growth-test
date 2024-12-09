"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import Image from "next/image";
import { MenuItem } from "@/lib/types";
import { useEffect, useState } from "react";

interface HeaderProps {
  menu: MenuItem[];
  locale?: string;
}

export const Header = ({ menu, locale }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileMenu]);

  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <header
      className={`fixed top-0 w-full flex ${!openMobileMenu ? "p-5" : ""} z-20 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-70 backdrop-blur-xl" : "bg-transparent"
      } ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="container mx-auto max-w-7xl  flex justify-between items-center">
        <Logo locale={locale} />
        <NavLinks menu={menu} />
        <Link href="/login" className="hidden md:flex items-center text-white h-12 font-semibold text-base">
          Login <Image src="/assets/icons/ic-arrow-right.svg" width={24} height={24} alt="Arrow Right" />
        </Link>
        <Image
          className="w-5 cursor-pointer flex md:hidden"
          src={!openMobileMenu ? "assets/icons/bars.svg" : "assets/icons/close.svg"}
          alt={"Menu"}
          width={18}
          height={12}
          onClick={() => handleMobileMenu()}
        />
      </div>
      <div className={`${!openMobileMenu ? "hidden" : "flex"} items-start p-5 absolute w-full h-screen z-50 bg-black`}>
        <div className="container mx-auto max-w-7xl flex flex-col justify-between items-center h-full">
          <div className="flex w-full justify-between">
            <Logo locale={locale} />
            <Image
              className="w-5 cursor-pointer"
              src={"assets/icons/close.svg"}
              alt={"Menu"}
              width={18}
              height={12}
              onClick={() => handleMobileMenu()}
            />
          </div>
          <div className="flex w-full flex-col h-full grow items-start justify-start mt-8">
            {menu.slice(0, -1).map((item, index) => (
              <div key={item.id} className={`relative mb-2`}>
                {item.link ? (
                  <Link
                    href={item.link}
                    target={item.openNewWindow ? "_blank" : undefined}
                    className={`flex text-white h-12 items-center font-medium text-sm `}>
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button className={`flex text-white h-12 items-center font-medium text-sm `}>{item.title}</button>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.id}
                        href={dropdownItem.link}
                        target={dropdownItem.openNewWindow ? "_blank" : undefined}
                        className="block px-4 py-1 text-sm hover:bg-muted text-[#858585]">
                        <div className="w-f flex items-start gap-4">{dropdownItem.title}</div>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
          <Link
            href="/login"
            className="flex w-full items-start justify-start text-white h-12 font-semibold text-base mb-12">
            Login <Image src="/assets/icons/ic-arrow-right.svg" width={24} height={24} alt="Arrow Right" />
          </Link>
        </div>
      </div>
    </header>
  );
};
