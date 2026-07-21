"use client";

import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { LeadForm } from "@/components/site/lead-form";
import { CONTACTS, copyFor } from "@/content/site";
import { useI18n } from "@/modules/i18n";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const { locale } = useI18n();
  const c = copyFor(locale);
  const contacts = [
    { label: c.contact.phone, value: CONTACTS.phoneDisplay, href: CONTACTS.phoneHref, Icon: Phone },
    { label: c.contact.email, value: CONTACTS.email, href: CONTACTS.emailHref, Icon: Mail },
    { label: c.contact.telegram, value: "Telegram", href: CONTACTS.telegram, Icon: Send },
  ];
  return (
    <section id="lead" className={`section-block ${standalone ? "pt-10" : "bg-[#101828] text-white"}`}>
      <div className="site-shell">
        <div className="grid items-start gap-8 lg:grid-cols-[.82fr_1.18fr]">
          <div className={standalone ? "" : "pt-4"}>
            <span className={`section-eyebrow ${standalone ? "" : "!border-white/15 !bg-white/8 !text-[#8eb7ff]"}`}>{c.contact.eyebrow}</span>
            <h2 className={`mt-5 text-4xl font-semibold tracking-[-.045em] sm:text-5xl ${standalone ? "text-[#101828]" : "text-white"}`}>{c.contact.title}</h2>
            <p className={`mt-5 max-w-xl text-base leading-7 ${standalone ? "text-[#667085]" : "text-white/62"}`}>{c.contact.subtitle}</p>
            <div className="mt-8 grid gap-3">
              {contacts.map(({ label, value, href, Icon }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={`group flex items-center justify-between rounded-2xl border p-4 transition ${standalone ? "border-[#e4e7ec] bg-white hover:border-[#bfd3ff]" : "border-white/12 bg-white/[.055] hover:bg-white/[.09]"}`}>
                  <span className="flex items-center gap-3"><span className={`grid h-11 w-11 place-items-center rounded-xl ${standalone ? "bg-[#eef4ff] text-[#1769ff]" : "bg-white/8 text-[#8eb7ff]"}`}><Icon className="h-5 w-5" /></span><span><span className={`block text-xs font-bold uppercase tracking-[.1em] ${standalone ? "text-[#98a2b3]" : "text-white/38"}`}>{label}</span><span className={`mt-1 block text-sm font-bold ${standalone ? "text-[#101828]" : "text-white"}`}>{value}</span></span></span>
                  <ArrowUpRight className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${standalone ? "text-[#1769ff]" : "text-white/55"}`} />
                </a>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
