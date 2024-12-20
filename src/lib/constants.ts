export const LOCALES = ["en", "pt"] as const;
export const DEFAULT_LOCALE = "en" as const;
export const LANGUAGES_NAMES: { [key: string]: string } = {
  en: "English",
  pt: "Português",
  es: "Español",
  fr: "Français",
};

export type Locale = (typeof LOCALES)[number];
