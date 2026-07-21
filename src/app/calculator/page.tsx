import type { Metadata } from "next";
import { ContactSection } from "@/components/site/contact-section";
import { EfficiencyCalculator } from "@/components/site/efficiency-calculator";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = { title: "Расчёт эффективности — Buyursin Technics", description: "Предварительный расчёт экономии и срока окупаемости автоматизации здания." };

export default function CalculatorPage() {
  return <main><SiteHeader /><PageHero kind="calculator" compact /><EfficiencyCalculator standalone /><ContactSection /><SiteFooter /></main>;
}
