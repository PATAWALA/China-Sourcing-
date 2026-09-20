import { process } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Process() {
  return (
    <section id="process" className="border-y border-zinc-200 bg-zinc-50 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">Process</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[36px]">
            Quatre étapes, zéro angle mort.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
            Vous savez toujours où en est votre commande. Chaque étape est documentée.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-[14px] font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-500">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}