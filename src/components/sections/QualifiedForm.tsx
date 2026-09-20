"use client";

import { useMemo, useState } from "react";
import { MessageSquare } from "lucide-react";
import { services, destinations } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const MODES = [
  { id: "aerien", label: "Aérien" },
  { id: "maritime", label: "Maritime" },
  { id: "indifferent", label: "Peu importe" },
] as const;

export function QualifiedForm() {
  const [need, setNeed] = useState<string>(services[0].id);
  const [destination, setDestination] = useState<string>("");
  const [mode, setMode] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const canSubmit = destination !== "" && details.trim().length > 3;

  const url = useMemo(
    () =>
      buildWhatsAppUrl({
        context: "Demande qualifiée",
        need: services.find((s) => s.id === need)?.label,
        destination,
        mode: MODES.find((m) => m.id === mode)?.label,
        details: details.trim(),
      }),
    [need, destination, mode, details],
  );

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">Contact</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[36px]">
              Décrivez votre besoin.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
              Réponse sous 48h. Directement sur WhatsApp.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <div className="grid gap-5">
              <Field label="Type de besoin">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {services.map((s) => {
                    const Icon = s.icon;
                    const active = need === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setNeed(s.id)}
                        className={cn(
                          "flex items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left text-[13px] font-medium transition-all",
                          active
                            ? "border-zinc-900 bg-zinc-900 text-white"
                            : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300",
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Destination">
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 text-[14px] outline-none focus:border-zinc-400 focus:bg-white"
                  >
                    <option value="" disabled>Sélectionner un pays / une ville</option>
                    {destinations.map((d) => (
                      <optgroup key={d.country} label={d.country}>
                        {d.cities.map((c) => (
                          <option key={c} value={`${c}, ${d.country}`}>{c}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </Field>

                <Field label="Mode d'expédition">
                  <div className="grid grid-cols-3 gap-2">
                    {MODES.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMode(m.id)}
                        className={cn(
                          "h-11 rounded-xl border text-[13px] font-medium transition-all",
                          mode === m.id
                            ? "border-zinc-900 bg-zinc-900 text-white"
                            : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-300",
                        )}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <Field label="Votre besoin en une phrase">
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ex : 200 montres connectées, budget 5000€"
                  className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 text-[14px] outline-none placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
                />
              </Field>

              <a
                href={canSubmit ? url : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!canSubmit}
                onClick={(e) => { if (!canSubmit) e.preventDefault(); }}
                className={cn(
                  "mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-xl text-[15px] font-semibold transition-all",
                  canSubmit
                    ? "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.99]"
                    : "cursor-not-allowed bg-zinc-100 text-zinc-400",
                )}
              >
                <MessageSquare className="h-[18px] w-[18px]" strokeWidth={1.75} />
                Envoyer sur WhatsApp
              </a>

              <p className="text-center text-[11.5px] text-zinc-400">
                Réponse directe sous 30 min · sans engagement
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-medium text-zinc-600">{label}</label>
      {children}
    </div>
  );
}