import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section className="border-y border-zinc-200 bg-zinc-50">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">Ils nous font confiance</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[36px]">
            Ce que disent nos clients.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6">
              <Quote className="h-4 w-4 text-zinc-300" strokeWidth={1.75} />
              <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-zinc-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-zinc-100 pt-4">
                <div className="text-[13px] font-medium text-zinc-900">{t.name}</div>
                <div className="text-[12px] text-zinc-500">
                  {t.role} · {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}