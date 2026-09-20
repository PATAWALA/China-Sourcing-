import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">Nos services</p>
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
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-zinc-900">
                  {service.label}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-zinc-500">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-900">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}