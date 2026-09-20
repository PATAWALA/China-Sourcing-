import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">Services</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[36px]">
            Trois expertises, un seul partenaire.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
            Chaque service fonctionne seul ou combiné. La plupart de nos clients combinent sourcing et fret.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-zinc-900">
                  {service.label}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-zinc-100 pt-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" strokeWidth={1.75} />
                      <span className="text-[12.5px] leading-snug text-zinc-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}