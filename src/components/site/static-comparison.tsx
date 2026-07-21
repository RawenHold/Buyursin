"use client";

import { Check, CircleX, Network, PanelsTopLeft } from "lucide-react";
import { copyFor } from "@/content/site";
import { useI18n } from "@/modules/i18n";

export function StaticComparison() {
  const { locale } = useI18n();
  const c = copyFor(locale);
  return (
    <section className="section-block bg-white">
      <div className="site-shell">
        <div className="section-heading">
          <span className="section-eyebrow">{c.comparison.eyebrow}</span>
          <h2>{c.comparison.title}</h2>
        </div>
        <div className="mt-10 grid overflow-hidden rounded-[28px] border border-[#e4e7ec] lg:grid-cols-2">
          <div className="bg-[#fff8f7] p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 text-lg font-bold text-[#b42318]"><CircleX className="h-6 w-6" />{c.comparison.beforeTitle}</div>
            <div className="mt-8 grid gap-4 xl:grid-cols-[.9fr_1.1fr]">
              <ul className="space-y-4">
                {c.comparison.before.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#7a514c]"><CircleX className="mt-1 h-4 w-4 shrink-0 text-[#f04438]" />{item}</li>)}
              </ul>
              <div className="rounded-2xl border border-[#f3d4cf] bg-white p-5">
                <div className="text-xs font-bold uppercase tracking-[.1em] text-[#a66b63]">Fragmented systems</div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {(locale === "ru" ? ["ОВиК", "Электро", "Вода", "Доступ", "Видео", "Excel"] : ["HVAC", "Elektr", "Suv", "Kirish", "Video", "Excel"]).map((item) => <div key={item} className="rounded-xl border border-[#f3d4cf] bg-[#fffafa] px-3 py-3 text-center text-xs font-bold text-[#7a514c]">{item}</div>)}
                </div>
                <Network className="mx-auto mt-5 h-10 w-10 text-[#f04438]" strokeWidth={1.4} />
              </div>
            </div>
          </div>
          <div className="border-t border-[#d8eee3] bg-[#f3fbf7] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="flex items-center gap-3 text-lg font-bold text-[#067647]"><Check className="h-6 w-6" />{c.comparison.afterTitle}</div>
            <div className="mt-8 grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-2xl border border-[#ccebdc] bg-white p-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-[.1em] text-[#667085]">Buyursin BMS</div>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#22a06b]" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {(locale === "ru" ? ["Энергия", "Климат", "Риски"] : ["Energiya", "Iqlim", "Xavf"]).map((item, index) => <div key={item} className="rounded-xl bg-[#f6fef9] p-3"><div className="text-[10px] text-[#667085]">{item}</div><div className="mt-2 text-sm font-bold text-[#101828]">{index === 0 ? "–18%" : locale === "ru" ? "Норма" : "Me’yor"}</div></div>)}
                </div>
                <div className="mt-3 h-24 rounded-xl bg-[linear-gradient(180deg,#f4f7ff,#ffffff)] p-3">
                  <svg viewBox="0 0 300 80" className="h-full w-full" aria-label="Energy trend">
                    <path d="M0 56 C35 44,55 62,83 38 S130 45,160 25 S215 42,250 18 S278 22,300 8" fill="none" stroke="#1769ff" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <ul className="space-y-4">
                {c.comparison.after.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#176b4b]"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#dcfae6] text-[#067647]"><Check className="h-3 w-3" /></span>{item}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#ccebdc] bg-white px-4 py-3 text-sm font-bold text-[#067647]"><PanelsTopLeft className="h-5 w-5" />{locale === "ru" ? "Единая картина объекта 24/7" : "Obyektning yagona ko‘rinishi 24/7"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
