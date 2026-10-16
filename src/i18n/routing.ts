import { defineRouting } from "next-intl/routing";

// 语言集合唯一真相源：request.ts / language-switcher.tsx / src/locales/*.json 必须与此保持一致。
export const locales = ["en", "de", "fr", "ja"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
