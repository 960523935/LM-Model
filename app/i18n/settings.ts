import type { NextConfig } from "next";

export const i18n = {
  locales: ["en", "zh"],
  defaultLocale: "zh",
} as const satisfies NextConfig["i18n"];

export type Locale = (typeof i18n)["locales"][number];
