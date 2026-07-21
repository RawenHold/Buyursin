"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "@/components/shared/brand";
import { CONTACTS, copyFor } from "@/content/site";
import { useI18n } from "@/modules/i18n";

const links = [
  ["/solutions", "solutions"],
  ["/#scenarios", "scenarios"],
  ["/calculator", "calculator"],
  ["/projects", "projects"],
  ["/company", "company"],
  ["/contacts", "contacts"],
] as const;

export function SiteHeader() {
  const { locale, setLocale } = useI18n();
  const c = copyFor(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.055] bg-white/90 backdrop-blur-2xl">
      <div className="site-shell flex h-[72px] items-center justify-between gap-6">
        <Brand />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {links.map(([href, key]) => {
            const active = href !== "/#scenarios" && pathname === href;
            return (
              <Link key={href} href={href} className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-[#f2f5fa] text-[#101828]" : "text-[#475467] hover:bg-[#f6f7f9] hover:text-[#101828]"}`}>
                {c.nav[key]}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={CONTACTS.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold text-[#344054] hover:text-[#1769ff]">
            <Phone className="h-4 w-4" /> {CONTACTS.phoneDisplay}
          </a>
          <div className="flex rounded-xl border border-[#e4e7ec] bg-white p-1 text-xs font-bold">
            {(["ru", "uz"] as const).map((item) => (
              <button key={item} type="button" onClick={() => setLocale(item)} className={`rounded-lg px-2.5 py-1.5 uppercase transition ${locale === item ? "bg-[#101828] text-white" : "text-[#667085] hover:bg-[#f2f4f7]"}`}>{item}</button>
            ))}
          </div>
          <Link href="/contacts#lead" className="button-primary">{c.nav.consultation}</Link>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-xl border border-[#e4e7ec] md:hidden" aria-label={c.nav.menu}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#eaecf0] bg-white md:hidden">
          <div className="site-shell py-4">
            <nav className="grid gap-1">
              {links.map(([href, key]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-semibold text-[#344054] hover:bg-[#f6f7f9]">{c.nav[key]}</Link>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <a href={CONTACTS.phoneHref} className="button-secondary justify-center">{CONTACTS.phoneDisplay}</a>
              <Link href="/contacts#lead" onClick={() => setOpen(false)} className="button-primary justify-center">{c.nav.consultation}</Link>
            </div>
            <div className="mt-3 flex gap-2">
              {(["ru", "uz"] as const).map((item) => (
                <button key={item} type="button" onClick={() => setLocale(item)} className={`flex-1 rounded-xl px-3 py-2 text-sm font-bold uppercase ${locale === item ? "bg-[#101828] text-white" : "bg-[#f2f4f7] text-[#667085]"}`}>{item}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
