"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
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

  const filledCount =
    (destination ? 1 : 0) + (details.trim().length > 3 ? 1 : 0);

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
              Devis
            </p>
            <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px]">
              Décrivez votre besoin.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-zinc-500">
              Réponse qualifiée sous 48h, directement sur WhatsApp.
            </p>
          </div>

          {/* Form card */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            {/* Barre de progression */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
                Demande qualifiée
              </span>
              <span className="text-[11px] font-medium tabular-nums text-zinc-400">
                {filledCount} / 2
              </span>
            </div>

            <div className="flex flex-col gap-7 p-6 sm:p-8">
              {/* Besoin */}
              <Field index="01" label="Type de besoin">
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
                          "relative flex items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left text-[13px] font-medium transition-all",
                          active
                            ? "border-zinc-900 bg-zinc-900 text-white"
                            : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300",
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                        <span className="truncate">{s.label}</span>
                        {active && (
                          <Check
                            className="ml-auto h-3.5 w-3.5 shrink-0"
                            strokeWidth={2}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </Field>

              {/* Destination + Mode */}
              <div className="grid gap-5 sm:grid-cols-2">
                <Field index="02" label="Destination">
                  <div className="relative">
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className={cn(
                        "h-11 w-full cursor-pointer appearance-none rounded-xl border border-zinc-200 bg-white pl-3.5 pr-10 text-[14px] outline-none transition-colors focus:border-zinc-900",
                        destination ? "text-zinc-900" : "text-zinc-400",
                      )}
                    >
                      <option value="" disabled>
                        Pays / ville
                      </option>
                      {destinations.map((d) => (
                        <optgroup key={d.country} label={d.country}>
                          {d.cities.map((c) => (
                            <option key={c} value={`${c}, ${d.country}`}>
                              {c}, {d.country}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>

                    <svg
                      className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Field>

                <Field index="03" label="Mode d'expédition">
                  <div className="grid grid-cols-3 gap-1.5">
                    {MODES.map((m) => {
                      const active = mode === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMode(m.id)}
                          className={cn(
                            "h-11 rounded-xl border text-[12.5px] font-medium transition-all",
                            active
                              ? "border-zinc-900 bg-zinc-900 text-white"
                              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300",
                          )}
                        >
                          {m.label}
                        </button>
                      );
                    })}
                  </div>
                </Field>
              </div>

              {/* Détails */}
              <Field index="04" label="Votre besoin en une phrase" required>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ex : 200 montres connectées, budget 5 000 €, livraison à Douala."
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-[14px] leading-relaxed outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900"
                />
              </Field>

              {/* CTA */}
              <div className="mt-1">
                <a
                  href={canSubmit ? url : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!canSubmit}
                  onClick={(e) => {
                    if (!canSubmit) e.preventDefault();
                  }}
                  className={cn(
                    "flex h-13 w-full items-center justify-between gap-3 rounded-xl px-5 text-[14.5px] font-medium transition-all",
                    canSubmit
                      ? "bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.99]"
                      : "cursor-not-allowed bg-zinc-100 text-zinc-400",
                  )}
                >
                  <span>
                    {canSubmit
                      ? "Envoyer ma demande"
                      : "Complétez les champs requis"}
                  </span>
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      canSubmit && "group-hover:translate-x-0.5",
                    )}
                    strokeWidth={1.75}
                  />
                </a>

                <p className="mt-3 text-center text-[11.5px] text-zinc-400">
                  Réponse WhatsApp sous 30 min · sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  index,
  label,
  required,
  children,
}: {
  index: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2.5 flex items-center gap-2">
        <span className="text-[10px] font-medium tabular-nums tracking-wider text-zinc-300">
          {index}
        </span>
        <label className="text-[12px] font-medium text-zinc-600">
          {label}
          {required && <span className="ml-1 text-zinc-400">· requis</span>}
        </label>
      </div>
      {children}
    </div>
  );
}