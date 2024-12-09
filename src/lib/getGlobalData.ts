import { GlobalData } from "@/lib/types";
import { notFound } from "next/navigation";
import { Locale, LOCALES } from "./constants";

export async function getGlobalData(locale: Locale = "en"): Promise<GlobalData> {
  if (!LOCALES.includes(locale)) {
    return notFound();
  }

  const globalRes = await fetch(`http://localhost:4000/global?locale=${locale}`);
  const global = await globalRes.json();
  // console.log("GLOBAL >>> Data", global);

  return global;
}
