import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>{siteConfig.name} is an independent fan-made guide hub. Content is provided for informational and entertainment purposes only.</p>
      <p>Game systems, balance changes, maps, and update details may change without notice. Always verify important information in-game or through official channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Prophecy Games or Steam property.</p>
      <p>Questions about these terms can be sent to <a className="text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
