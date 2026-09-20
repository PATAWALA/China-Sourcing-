import { destinations } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Destinations() {
  return (
    <section id="destinations" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
            Destinations
          </p>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px]">
            Cinq marchés,
            <br className="hidden sm:block" /> maîtrisés de bout en bout.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-500">
            Aérien ou maritime, jusqu'à votre ville. Délais indicatifs selon
            la destination.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div
              key={d.country}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[15px] font-semibold tracking-tight text-zinc-900">
                  {d.country}
                </h3>
                <span className="text-[11px] tabular-nums text-zinc-400">
                  {d.leadTime}
                </span>
              </div>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {d.cities.map((c) => (
                  <li
                    key={c}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-[3px] text-[11px] text-zinc-600"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex gap-1.5 border-t border-zinc-100 pt-4">
                {d.modes.map((m) => (
                  <span
                    key={m}
                    className="rounded-md bg-zinc-900 px-2 py-[3px] text-[10.5px] font-medium uppercase tracking-wider text-white"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}