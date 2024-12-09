const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { apiLanguageData } from "./payload/payload";

// export async function getLanguageData(): Promise<string[]> {
//   const languageRes = await fetch(`${API_URL}/languages`);
//   const languages = await languageRes.json();

//   return languages;
// }

export async function getLanguageData(): Promise<string[]> {
  // const languageRes = await fetch(`${API_URL}/languages`);
  const languages = await apiLanguageData();

  return languages;
}
