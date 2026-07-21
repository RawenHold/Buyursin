import Link from "next/link";

export function Brand({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Buyursin Technics">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-[14px] bg-[#1769ff] shadow-[0_10px_25px_rgba(23,105,255,.24)]">
        <span className="absolute h-5 w-2.5 -translate-x-1 rotate-45 rounded-full bg-white/95" />
        <span className="absolute h-5 w-2.5 translate-x-1 -rotate-45 rounded-full bg-white/72" />
      </span>
      {!compact && (
        <span className={`leading-none ${inverse ? "text-white" : "text-[#101828]"}`}>
          <span className="block text-[15px] font-extrabold tracking-[0.02em]">BUYURSIN</span>
          <span className={`mt-1 block text-[9px] font-semibold tracking-[0.28em] ${inverse ? "text-white/55" : "text-[#667085]"}`}>TECHNICS</span>
        </span>
      )}
    </Link>
  );
}
