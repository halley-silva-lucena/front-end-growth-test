import { Page } from "@/lib/types";
import { apiPageData } from "./payload/payload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function getPageData(locale: string = "en"): Promise<Page | undefined> {
//   const PagesRes = await fetch(`${API_URL}/pages?locale=${locale}`);
//   const pages = await PagesRes.json();
//   // console.log("PAGES >>> Data", pages);

//   return pages.find((page: { locale: string }) => page.locale === locale);
// }

export async function getPageData(locale: string = "en"): Promise<Page | undefined> {
  // const PagesRes = await fetch(`${API_URL}/pages?locale=${locale}`);
  const pages = await apiPageData(locale);
  // console.log("PAGES >>> Data", pages);

  return pages.find((page: { locale: string }) => page.locale === locale);
}
