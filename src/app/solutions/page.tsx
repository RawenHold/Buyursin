import type { Metadata } from "next";
import { ProcessSection } from "@/components/site/process-section";
import { ScenarioExplorer } from "@/components/site/scenario-explorer";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SolutionsGrid } from "@/components/site/solutions-grid";

export const metadata: Metadata = { title: "Решения — Buyursin Technics", description: "BMS, АСКУЭ, климат, освещение, вода, безопасность и сервис инженерных систем." };

export default function SolutionsPage() {
  return <main><SiteHeader /><PageHero kind="solutions" /><SolutionsGrid full /><ScenarioExplorer compact /><ProcessSection /><SiteFooter /></main>;
}
