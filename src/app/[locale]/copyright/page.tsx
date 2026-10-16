import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>TRIBES 3: Rivals, Steam, and related logos, artwork, and media belong to Prophecy Games and their respective owners.</p>
      <p>{siteConfig.name} is a non-official fan wiki built for informational and guide presentation purposes. Game imagery is used for identification and commentary only.</p>
      <p>If you own rights to content displayed here and have a concern, please contact the site operator at <a className="text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
