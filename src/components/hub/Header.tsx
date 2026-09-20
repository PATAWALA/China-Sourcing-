import { hubData } from "@/data/hubData";

export function Header() {
  return (
    <header className="flex flex-col items-center text-center">
      {/* Logo / Initiale B2B */}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-[15px] font-semibold tracking-tight text-white">
        {hubData.brand.initials}
      </div>

      {/* Badge statut live */}
      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-medium tracking-wide text-zinc-500">
          {hubData.status.label} · {hubData.status.state}
        </span>
      </div>

      {/* Titre + sous-titre */}
      <h1 className="mt-5 text-[22px] font-semibold leading-[1.2] tracking-tight text-zinc-900">
        {hubData.brand.headline}
      </h1>
      <p className="mt-2 max-w-[19rem] text-[13px] leading-relaxed text-zinc-500">
        {hubData.brand.tagline}
      </p>
    </header>
  );
}