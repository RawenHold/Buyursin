import type { Metadata } from "next";
import { CompanySection } from "@/components/site/company-section";
import { ContactSection } from "@/components/site/contact-section";
import { ProcessSection } from "@/components/site/process-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = { title: "О компании — Buyursin Technics", description: "Инженерный интегратор полного цикла: проектирование, монтаж, программирование и сервис." };

export default function CompanyPage() {
  return <main><SiteHeader /><PageHero kind="company" /><CompanySection full /><ProcessSection /><ContactSection /><SiteFooter /></main>;
}
