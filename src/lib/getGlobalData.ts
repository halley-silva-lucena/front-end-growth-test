import { GlobalData } from "@/lib/types";
import { notFound } from "next/navigation";
import { LOCALES } from "./constants";

export async function getGlobalData(locale: string = "en"): Promise<GlobalData> {
  // console.log("GLOBAL >>> Locale", locale);

  // verify if locale is valid using LOCALES constant
  if (!LOCALES.includes(locale as any)) {
    return notFound();
  }

  const globalRes = await fetch(`http://localhost:4000/global?locale=${locale}`);
  const global = await globalRes.json();
  // console.log("GLOBAL >>> Data", global);

  return global;
}

export async function getLanguageData(): Promise<string[]> {
  const languageRes = await fetch(`http://localhost:4000/languages`);
  const languages = await languageRes.json();

  return languages;
}
