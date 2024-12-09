import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LOCALES } from "@/lib/constants";
import { getGlobalData, getLanguageData } from "@/lib/getGlobalData";
import { Params } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moises",
  description: "Generated by create next app",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;

  // const locale = LOCALES.includes(params.locale as any) ? params.locale : LOCALES[0];
  const globalData = await getGlobalData(locale);

  const langData = await getLanguageData();

  // console.log("GLOBAL >>> Data", globalData);
  globalData.siteName && (metadata.title = globalData.siteName);

  // console.log("LANG >>> Data", langData);

  return (
    <div className="flex min-h-screen flex-col">
      <Header menu={globalData.menu} locale={locale} />

      <main className="flex flex-col space-y-8">{children}</main>
      <Footer global={globalData} languages={langData} />
    </div>
  );
}
