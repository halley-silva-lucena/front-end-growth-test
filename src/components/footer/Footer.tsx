import Link from "next/link";
import { GlobalData, MenuItem } from "@/lib/types";
import { FooterColumn } from "./FooterColumn";
import Image from "next/image";
import LanguageDropdown from "./LanguageDropdown";
import { FaCircle } from "react-icons/fa";
import { FooterSocial } from "./FooterSocial";

interface FooterProps {
  global: GlobalData;
  languages: string[];
}

export function Footer({ global, languages }: FooterProps) {
  return (
    <footer
      className="relative bg-cover bg-left-top sm:bg-center"
      style={{ backgroundImage: "url('assets/gradient.svg')" }} // Ensure the path is correct
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="xl:col-span-2">
            <Link href="/" className="relative">
              <Image src="assets/logo-moises-developer.svg" alt="Moises" width={158} height={32} />
            </Link>
            <p className="text-base font-medium text-white text-opacity-40 mt-4">{global.helpText}</p>
            <LanguageDropdown languages={languages} locale={global.locale} />
            <FooterSocial social={global.social} />
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-3 xl:mt-0">
            {global.footerMenu.map((menu: MenuItem) => (
              <FooterColumn key={menu.id} title={menu.title} links={menu.dropdown} />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-12 border-t border-white border-opacity-25 pt-8 gap-4">
          <p className="flex order-2 sm:order-1 w-full sm:w-1/2 text-base font-medium text-white text-opacity-40">
            {global.copyright}
          </p>
          <p className="w-full order-1 sm:order-2 sm:w-1/2 text-sm font-medium text-white text-opacity-40 flex items-center grow justify-start sm:justify-end">
            Status
            <span className="flex items-center text-green-400">
              <FaCircle className="mx-1 h-2" /> All systems are normal
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
