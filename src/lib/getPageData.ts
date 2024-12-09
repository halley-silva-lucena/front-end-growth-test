import { Page } from "@/lib/types";

export async function getPageData(locale: string = "en"): Promise<Page | undefined> {
  const PagesRes = await fetch(`http://localhost:4000/pages?locale=${locale}`);
  const pages = await PagesRes.json();
  // console.log("PAGES >>> Data", pages);

  return pages.find((page: { locale: string }) => page.locale === locale);
}
