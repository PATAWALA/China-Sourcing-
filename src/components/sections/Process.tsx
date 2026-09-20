import { process } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Process() {
  return (
    <section
      id="process"
      className="border-y border-zinc-200 bg-zinc-50 py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
            Process
          </p>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px]">
            Quatre étapes,
            <br className="hidden sm:block" /> zéro angle mort.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-500">
            Vous savez toujours où en est votre commande. Chaque étape est
            documentée.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Ligne de connexion desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-zinc-200 lg:block"
          />

          {process.map((step, i) => {
            const Icon = step.icon;

            return (
              <li key={step.title} className="relative">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </div>

                <p className="mt-6 text-[11px] font-medium tabular-nums tracking-wider text-zinc-400">
                  ÉTAPE 0{i + 1}
                </p>
                <h3 className="mt-1.5 text-[15px] font-semibold tracking-tight text-zinc-900">
                  {step.title.replace(/^\d+\.\s*/, "")}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
                  {step.desc}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}