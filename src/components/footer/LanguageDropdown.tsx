"use client";
import { redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LANGUAGES_NAMES } from "@/lib/constants";

interface DropdownProps {
  languages: string[];
  locale: string;
}

const LanguageDropdown = ({ languages, locale }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  useEffect(() => {
    console.log("Dropdown -> languages", languages);
  }, [languages]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  return (
    <div className="w-full py-6 pb-8">
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          type="button"
          className="px-4 py-2 text-white text-base  justify-between w-52 bg-white bg-opacity-10 hover:bg-opacity-20  focus:outline-none  font-medium rounded-lg inline-flex items-center"
          onClick={toggleDropdown}>
          {LANGUAGES_NAMES[locale]} <FaChevronDown className="pl-2 text-xl" />
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-4 w-52 rounded-lg  bg-white ring-1  ">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {languages.map((lang) => (
                <li
                  key={lang}
                  className="block px-4 py-2 text-sm rounded-lg  text-gray-700 cursor-pointer"
                  role="menuitem"
                  onClick={() => {
                    closeDropdown();
                    lang !== locale ? redirect(`/${lang}`) : null;
                  }}>
                  {LANGUAGES_NAMES[lang]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
