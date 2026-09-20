import { CheckCircle2 } from "lucide-react";

const TRUST_POINTS = [
  "Accompagnement de A à Z depuis Guangzhou",
  "Contrôle qualité avant expédition",
  "Réponse directe sur WhatsApp sous 30 min",
] as const;

export function TrustBadges() {
  return (
    <ul className="flex flex-col gap-2">
      {TRUST_POINTS.map((point) => (
        <li
          key={point}
          className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5"
        >
          <CheckCircle2
            className="h-3.5 w-3.5 shrink-0 text-emerald-600"
            strokeWidth={1.75}
          />
          <span className="text-[12px] leading-snug text-zinc-600">{point}</span>
        </li>
      ))}
    </ul>
  );
}