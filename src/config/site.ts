export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "TRIBES 3: Rivals Wiki",
  shortName: "TRIBES 3: Rivals",
  logoText: "T",
  tagline: "Classes, Weapons, Maps & Movement Guides",
  description: "Your ultimate TRIBES 3: Rivals guide covering classes, weapons, perks, maps, skiing and jetpack movement, Capture the Flag tactics, and beginner progression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tribes3v3.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://tribes3v3.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2687970/TRIBES_3_Rivals/",
  heroVideoId: "6Ci3RzUSKgk", // TRIBES 3: Rivals - Official Early Access Launch Trailer
  social: {
    discord: "https://discord.gg/tribes",
    youtube: "https://www.youtube.com/@tribes3rivals",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
