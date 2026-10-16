import { BookOpen, Keyboard, Lightbulb, Swords, TrendingUp, Users, Wrench, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

// key 是翻译键（en.json 的 nav 命名空间），path 是 URL，二者不能混用。
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "controls", path: "/controls", icon: Keyboard, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "modes", path: "/modes", icon: Swords, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "tips", path: "/tips", icon: Lightbulb, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
