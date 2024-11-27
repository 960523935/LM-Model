import type { Locale } from "./settings";
import en from "./dictionaries/en";
import zh from "./dictionaries/zh";

const dictionaries = { en, zh };

export const getDictionary = (locale: Locale) => dictionaries[locale];
