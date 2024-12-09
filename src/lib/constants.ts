export const LOCALES = ["en", "pt"] as const;
export const DEFAULT_LOCALE = "en" as const;

export type Locale = (typeof LOCALES)[number];

// language and the respective name ie: { en: "English", pt: "Portuguese" }
export const LANGUAGES_NAMES: { [key: string]: string } = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
};
