"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, MessageSquare, Clock, FileText } from "lucide-react";
import { services, destinations } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const MODES = [
  { id: "aerien", label: "Aérien" },
  { id: "maritime", label: "Maritime" },
  { id: "indifferent", label: "Peu importe" },
] as const;

const STEPS = [
  {
    icon: FileText,
    title: "Vous remplissez ce formulaire",
    desc: "3 informations clés, 30 secondes.",
  },
  {
    icon: MessageSquare,
    title: "Nous recevons votre demande",
    desc: "Directement sur notre WhatsApp business.",
  },
  {
    icon: Clock,
    title: "Réponse sous 48h maximum",
    desc: "Devis chiffré ou questions de précision.",
  },
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
          {/* Header explicite */}
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
              Demande de devis
            </p>
            <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px]">
              Recevez un devis chiffré
              <br className="hidden sm:block" /> sous 48h.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-500">
              Remplissez les 3 informations ci-dessous. Votre demande part
              directement sur notre WhatsApp — nous revenons vers vous avec un
              chiffrage précis ou des questions de précision.
            </p>
          </div>

          {/* Process en 3 étapes — rassure sur ce qui se passe */}
          <ol className="mt-12 grid gap-3 sm:grid-cols-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </span>
                    <span className="text-[10px] font-medium tabular-nums tracking-wider text-zinc-400">
                      ÉTAPE 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[12.5px] font-semibold leading-snug text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-snug text-zinc-500">
                    {step.desc}
                  </p>
                </li>
              );
            })}
          </ol>

          {/* Formulaire */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            {/* Barre de progression */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 sm:px-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
                Votre demande
              </span>
              <span className="text-[11px] font-medium tabular-nums text-zinc-400">
                {filledCount} / 2 champs requis
              </span>
            </div>

            <div className="flex flex-col gap-7 p-6 sm:p-8">
              {/* Q1 — Besoin */}
              <Field
                index="01"
                label="Quel type de service vous intéresse ?"
                helper="Choisissez l'option qui correspond à votre besoin principal."
              >
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

              {/* Q2 — Destination */}
              <Field
                index="02"
                label="Où doit arriver votre marchandise ?"
                helper="Ville d'arrivée finale pour le chiffrage du transport."
                required
              >
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
                      Sélectionnez un pays et une ville
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

              {/* Q3 — Mode */}
              <Field
                index="03"
                label="Comment préférez-vous expédier ?"
                helper="Optionnel. Laissez vide si vous ne savez pas encore."
              >
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

              {/* Q4 — Détails */}
              <Field
                index="04"
                label="Décrivez votre besoin en une phrase."
                helper="Produit, quantité, budget si connu. Plus c'est précis, plus notre devis sera juste."
                required
              >
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Exemple : 200 montres connectées, budget 5 000 €, livraison à Douala avant mars."
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-3.5 py-3 text-[14px] leading-relaxed outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900"
                />
              </Field>

              {/* CTA */}
              <div className="mt-1 border-t border-zinc-100 pt-6">
                <div className="mb-4 flex items-start gap-2.5 rounded-xl bg-zinc-50 p-3">
                  <MessageSquare
                    className="mt-0.5 h-4 w-4 shrink-0 text-zinc-500"
                    strokeWidth={1.75}
                  />
                  <p className="text-[12px] leading-relaxed text-zinc-600">
                    En cliquant ci-dessous, votre demande s&apos;ouvre dans
                    <strong className="font-medium text-zinc-900"> WhatsApp</strong> avec
                    toutes les informations déjà remplies. Vous n&apos;avez plus
                    qu&apos;à envoyer le message.
                  </p>
                </div>

                <a
                  href={canSubmit ? url : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!canSubmit}
                  onClick={(e) => {
                    if (!canSubmit) e.preventDefault();
                  }}
                  className={cn(
                    "flex h-14 w-full items-center justify-center gap-2.5 rounded-xl px-5 text-[14.5px] font-semibold transition-all",
                    canSubmit
                      ? "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.99]"
                      : "cursor-not-allowed bg-zinc-100 text-zinc-400",
                  )}
                >
                  {canSubmit ? (
                    <>
                      <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
                      Envoyer ma demande sur WhatsApp
                      <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                    </>
                  ) : (
                    <>
                      Complétez les champs requis
                      <span className="text-[12px] font-normal text-zinc-400">
                        ({filledCount}/2)
                      </span>
                    </>
                  )}
                </a>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-600" strokeWidth={2} />
                    Réponse sous 48h
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-600" strokeWidth={2} />
                    Sans engagement
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-emerald-600" strokeWidth={2} />
                    Aucun paiement en ligne
                  </span>
                </div>
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
  helper,
  required,
  children,
}: {
  index: string;
  label: string;
  helper?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2.5 flex items-baseline gap-2">
        <span className="text-[10px] font-medium tabular-nums tracking-wider text-zinc-300">
          {index}
        </span>
        <label className="text-[13px] font-medium text-zinc-900">
          {label}
          {required && <span className="ml-1 text-emerald-600">*</span>}
        </label>
      </div>
      {helper && (
        <p className="mb-2.5 text-[11.5px] leading-snug text-zinc-500">{helper}</p>
      )}
      {children}
    </div>
  );
}