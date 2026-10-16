import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub covering armor classes, weapons, perks, maps, skiing and jetpack movement, Capture the Flag tactics, and beginner progression for new and veteran players alike.</p>
      <p>We are not affiliated with Prophecy Games, Steam, or any official TRIBES 3: Rivals channel. All game names, artwork, and trademarks belong to their respective owners and are referenced here for informational purposes only.</p>
      <p>Questions, corrections, or content requests can be sent to <a className="text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
