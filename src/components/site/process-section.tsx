"use client";

import { CheckCircle2 } from "lucide-react";
import { copyFor } from "@/content/site";
import { useI18n } from "@/modules/i18n";

export function ProcessSection() {
  const { locale } = useI18n();
  const c = copyFor(locale);
  return (
    <section className="section-block bg-white">
      <div className="site-shell">
        <div className="section-heading">
          <span className="section-eyebrow">{c.process.eyebrow}</span>
          <h2>{c.process.title}</h2>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-[#e4e7ec] bg-[#e4e7ec] lg:grid-cols-5">
          {c.process.steps.map((step, index) => (
            <article key={step.title} className="relative min-h-64 bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eef4ff] text-[#1769ff]"><CheckCircle2 className="h-5 w-5" /></span>
                <span className="text-xs font-bold text-[#98a2b3]">0{index + 1}</span>
              </div>
              <h3 className="mt-12 text-xl font-bold text-[#101828]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#667085]">{step.text}</p>
              {index < c.process.steps.length - 1 && <div className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 rotate-45 border-r border-t border-[#e4e7ec] bg-white lg:block" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
