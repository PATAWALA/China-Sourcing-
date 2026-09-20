import { CheckCircle2 } from "lucide-react";
import { trustBadges } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function TrustBadges() {
  return (
    <Container className="pt-10">
      <ul className="grid gap-3 sm:grid-cols-3">
        {trustBadges.map((p) => (
          <li key={p} className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-3">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" strokeWidth={1.75} />
            <span className="text-[12.5px] leading-snug text-zinc-600">{p}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}