import { hubData } from "@/data/hubData";

export function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-1 text-center">
      <p className="text-[11px] text-zinc-400">
        {hubData.brand.name} · {hubData.brand.location} — {hubData.whatsapp.display}
      </p>
      <p className="text-[11px] text-zinc-400">
        © {new Date().getFullYear()} — Tous droits réservés.
      </p>
    </footer>
  );
}