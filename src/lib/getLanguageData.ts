export async function getLanguageData(): Promise<string[]> {
  const languageRes = await fetch(`http://localhost:4000/languages`);
  const languages = await languageRes.json();

  return languages;
}
