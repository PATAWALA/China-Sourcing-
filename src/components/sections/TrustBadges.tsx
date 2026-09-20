import { ShieldCheck, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

const POINTS = [
  { icon: MapPin, label: "Accompagnement A → Z depuis Guangzhou" },
  { icon: ShieldCheck, label: "Contrôle qualité avant expédition" },
  { icon: Clock, label: "Réponse WhatsApp sous 30 minutes" },
] as const;

export function TrustBadges() {
  return (
    <Container className="pt-14">
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
        {POINTS.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 bg-white px-5 py-4"
          >
            <Icon className="h-4 w-4 shrink-0 text-zinc-400" strokeWidth={1.5} />
            <span className="text-[12.5px] leading-snug text-zinc-600">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </Container>
  );
}