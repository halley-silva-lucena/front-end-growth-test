import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Locale } from "@/lib/constants";
import { getGlobalData } from "@/lib/getGlobalData";
import { getLanguageData } from "@/lib/getLanguageData";
import { Params } from "@/lib/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moises",
  description: "Generated by create next app",
  robots: "follow, index",
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Params }) {
  const { locale } = await params;
  const globalData = await getGlobalData(locale as Locale);
  const langData = await getLanguageData();

  if (globalData.metadata.metaTitle) metadata.title = globalData.metadata.metaTitle;
  if (globalData.metadata.metaDescription) metadata.description = globalData.metadata.metaDescription;
  if (globalData.metadata.robots) metadata.robots = globalData.metadata.robots;

  return (
    <div className="flex min-h-screen flex-col">
      <Header menu={globalData.menu} locale={locale} />

      <main className="flex flex-col space-y-8">{children}</main>
      <Footer global={globalData} languages={langData} />
    </div>
  );
}
