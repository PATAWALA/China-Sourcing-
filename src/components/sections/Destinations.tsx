import { MapPin } from "lucide-react";
import { destinations } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Destinations() {
  return (
    <section id="destinations" className="py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">Destinations</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[36px]">
            Cinq marchés africains, maîtrisés.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div key={d.country} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-semibold text-zinc-900">{d.country}</h3>
                <span className="text-[11px] text-zinc-400">{d.leadTime}</span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {d.cities.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-[11px] text-zinc-600"
                  >
                    <MapPin className="h-3 w-3 text-zinc-400" strokeWidth={1.75} />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-1.5 border-t border-zinc-100 pt-4">
                {d.modes.map((m) => (
                  <span key={m} className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10.5px] font-medium text-zinc-600">
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