import { MessageSquare, Search, PackageCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const STEPS = [
  { icon: MessageSquare, title: "1. Vous décrivez", desc: "Produit, quantité, destination, budget." },
  { icon: Search, title: "2. On source", desc: "Fournisseurs vérifiés, prix négociés, échantillons." },
  { icon: PackageCheck, title: "3. On contrôle", desc: "Inspection avant expédition. Rapport photo/vidéo." },
  { icon: Truck, title: "4. On expédie", desc: "Fret aérien ou maritime, jusqu'à votre ville." },
] as const;

export function ProcessTimeline() {
  return (
    <Section className="border-y border-zinc-200 bg-zinc-50">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">Notre process</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[36px]">
            Quatre étapes, zéro angle mort.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
            Vous savez toujours où en est votre commande. Nous documentons chaque étape.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-[14px] font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-500">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}