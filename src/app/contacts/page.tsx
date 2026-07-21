import type { Metadata } from "next";
import { ContactSection } from "@/components/site/contact-section";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = { title: "Контакты — Buyursin Technics", description: "Телефон, email, Telegram и форма заявки Buyursin Technics." };

export default function ContactsPage() {
  return <main><SiteHeader /><PageHero kind="contacts" /><ContactSection standalone /><SiteFooter /></main>;
}
