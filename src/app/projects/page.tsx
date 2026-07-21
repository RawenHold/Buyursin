import type { Metadata } from "next";
import { ContactSection } from "@/components/site/contact-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = { title: "Проекты — Buyursin Technics", description: "Объекты, клиенты и партнёры Buyursin Technics." };

export default function ProjectsPage() {
  return <main><SiteHeader /><PageHero kind="projects" /><ProjectsSection full /><ContactSection /><SiteFooter /></main>;
}
