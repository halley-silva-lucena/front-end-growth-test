import { GlobalData } from "@/lib/types";
import { notFound } from "next/navigation";
import { Locale, LOCALES } from "./constants";
import { apiGlobalData } from "./payload/payload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function getGlobalData(locale: Locale = "en"): Promise<GlobalData> {
//   if (!LOCALES.includes(locale)) {
//     return notFound();
//   }

//   const globalRes = await fetch(`${API_URL}/global?locale=${locale}`);
//   const global = await globalRes.json();
//   // console.log("GLOBAL >>> Data", global);

//   return global;
// }

export async function getGlobalData(locale: Locale = "en"): Promise<GlobalData> {
  if (!LOCALES.includes(locale)) {
    return notFound();
  }

  const global = await apiGlobalData(locale);
  // console.log("GLOBAL >>> Data", global);

  return global;
}
