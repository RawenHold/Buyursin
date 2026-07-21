import { AudienceSelector } from "@/components/site/audience-selector";
import { CompanySection } from "@/components/site/company-section";
import { ContactSection } from "@/components/site/contact-section";
import { EfficiencyCalculator } from "@/components/site/efficiency-calculator";
import { HeroStatic } from "@/components/site/hero-static";
import { ProcessSection } from "@/components/site/process-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { ScenarioExplorer } from "@/components/site/scenario-explorer";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SolutionsGrid } from "@/components/site/solutions-grid";
import { StaticComparison } from "@/components/site/static-comparison";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroStatic />
      <AudienceSelector />
      <ScenarioExplorer />
      <EfficiencyCalculator />
      <StaticComparison />
      <SolutionsGrid />
      <ProcessSection />
      <ProjectsSection />
      <CompanySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
