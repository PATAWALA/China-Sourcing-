"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  Plane,
  SearchCheck,
  Ship,
  type LucideIcon,
} from "lucide-react";

import {
  destinations,
  hubData,
  needs,
  type NeedId,
  type ShippingMode,
} from "@/data/hubData";
import { cn } from "@/lib/utils";

const NEED_ICONS: Record<NeedId, LucideIcon> = {
  sourcing: SearchCheck,
  fret: Ship,
};

const SHIPPING_MODES: { id: ShippingMode; label: string; icon: LucideIcon }[] = [
  { id: "aerien", label: "Aérien", icon: Plane },
  { id: "maritime", label: "Maritime", icon: Ship },
];

const STEP_TITLES: Record<1 | 2 | 3, string> = {
  1: "Quel est votre besoin ?",
  2: "Précisez votre demande",
  3: "Votre demande est prête",
};

export function OrientationWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [need, setNeed] = useState<NeedId | null>(null);
  const [destination, setDestination] = useState<string>("");
  const [mode, setMode] = useState<ShippingMode | null>(null);
  const [details, setDetails] = useState<string>("");

  const needLabel = needs.find((item) => item.id === need)?.label ?? "";
  const modeLabel = SHIPPING_MODES.find((item) => item.id === mode)?.label ?? "";

  const canContinue =
    destination !== "" && (need === "fret" ? mode !== null : true);

  const whatsappUrl = useMemo(() => {
    const lines = [
      `Bonjour ${hubData.brand.name} / ${hubData.brand.location},`,
      "",
      "Nouvelle demande qualifiée :",
      `• Besoin : ${needLabel || "—"}`,
      `• Destination : ${destination || "—"}`,
    ];

    if (modeLabel) lines.push(`• Mode d'expédition : ${modeLabel}`);
    if (details.trim()) lines.push(`• Détails : ${details.trim()}`);

    lines.push("", "Merci de me recontacter pour une estimation.");

    return `https://wa.me/${hubData.whatsapp.number}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
  }, [needLabel, destination, modeLabel, details]);

  const goBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const reset = () => {
    setStep(1);
    setNeed(null);
    setDestination("");
    setMode(null);
    setDetails("");
  };

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-5">
      {/* Indicateur de progression */}
      <div className="flex items-center gap-1.5" aria-hidden="true">
        {([1, 2, 3] as const).map((index) => (
          <span
            key={index}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors duration-300",
              index <= step ? "bg-zinc-900" : "bg-zinc-200",
            )}
          />
        ))}
      </div>

      {/* En-tête d'étape */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-400">
            Étape {step} / 3
          </p>
          <h2 className="mt-1 text-[15px] font-semibold tracking-tight text-zinc-900">
            {STEP_TITLES[step]}
          </h2>
        </div>

        {step > 1 && (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-[12px] font-medium text-zinc-400 transition-colors hover:bg-zinc-50 hover:text-zinc-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
            Retour
          </button>
        )}
      </div>

      {/* ÉTAPE 1 — Choix du besoin */}
      {step === 1 && (
        <div key="step-1" className="hub-step mt-5 flex flex-col gap-2.5">
          {needs.map((item) => {
            const Icon = NEED_ICONS[item.id];

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setNeed(item.id);
                  setStep(2);
                }}
                className="group flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-left transition-all hover:border-zinc-300 hover:bg-white active:scale-[0.99]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[14px] font-medium text-zinc-900">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-zinc-500">
                    {item.description}
                  </span>
                </span>

                <ArrowRight
                  className="h-4 w-4 shrink-0 text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-500"
                  strokeWidth={1.75}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* ÉTAPE 2 — Qualification */}
      {step === 2 && (
        <div key="step-2" className="hub-step mt-5 flex flex-col gap-4">
          {/* Destination */}
          <div>
            <label
              htmlFor="hub-destination"
              className="text-[12px] font-medium text-zinc-600"
            >
              Destination
            </label>

            <div className="relative mt-1.5">
              <select
                id="hub-destination"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                className="w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-3 pr-10 text-[14px] text-zinc-900 outline-none transition-colors focus:border-zinc-400 focus:bg-white"
              >
                <option value="" disabled>
                  Sélectionnez un pays / une ville
                </option>

                {destinations.map((group) => (
                  <optgroup key={group.country} label={group.country}>
                    {group.cities.map((city) => (
                      <option
                        key={`${group.country}-${city}`}
                        value={`${city}, ${group.country}`}
                      >
                        {city}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>

              <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
                strokeWidth={1.75}
              />
            </div>
          </div>

          {/* Mode d'expédition (fret uniquement) */}
          {need === "fret" && (
            <div>
              <span className="text-[12px] font-medium text-zinc-600">
                Mode d&apos;expédition
              </span>

              <div className="mt-1.5 grid grid-cols-2 gap-2">
                {SHIPPING_MODES.map((item) => {
                  const Icon = item.icon;
                  const isActive = mode === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setMode(item.id)}
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-[13px] font-medium transition-all active:scale-[0.98]",
                        isActive
                          ? "border-zinc-900 bg-zinc-900 text-white"
                          : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-300",
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Détails */}
          <div>
            <label
              htmlFor="hub-details"
              className="text-[12px] font-medium text-zinc-600"
            >
              {need === "fret" ? "Détails du colis" : "Produit recherché"}
              <span className="ml-1 font-normal text-zinc-400">(optionnel)</span>
            </label>

            <input
              id="hub-details"
              type="text"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder={
                need === "fret"
                  ? "Ex : 2 cartons de 20 kg"
                  : "Ex : 200 montres connectées"
              }
              className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-3 text-[14px] text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white"
            />
          </div>

          {/* Continuer */}
          <button
            type="button"
            disabled={!canContinue}
            onClick={() => setStep(3)}
            className={cn(
              "mt-1 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[14px] font-medium transition-all",
              canContinue
                ? "bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.99]"
                : "cursor-not-allowed bg-zinc-100 text-zinc-400",
            )}
          >
            Continuer
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      )}

      {/* ÉTAPE 3 — Action WhatsApp */}
      {step === 3 && (
        <div key="step-3" className="hub-step mt-5 flex flex-col gap-4">
          {/* Récapitulatif */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="flex items-center gap-2">
              <CheckCircle2
                className="h-4 w-4 text-emerald-600"
                strokeWidth={1.75}
              />
              <span className="text-[13px] font-medium text-zinc-900">
                Récapitulatif
              </span>
            </div>

            <dl className="mt-3 flex flex-col gap-2.5">
              <SummaryRow label="Besoin" value={needLabel} />
              <SummaryRow label="Destination" value={destination} />
              {modeLabel && <SummaryRow label="Mode" value={modeLabel} />}
              {details.trim() && (
                <SummaryRow label="Détails" value={details.trim()} />
              )}
            </dl>
          </div>

          {/* CTA WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-4 text-[14px] font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.99]"
          >
            <MessageSquare className="h-[18px] w-[18px]" strokeWidth={1.75} />
            Envoyer ma demande qualifiée sur WhatsApp
          </a>

          <p className="text-center text-[11px] text-zinc-400">
            Réponse directe sous {hubData.whatsapp.responseTime} · sans engagement
          </p>

          <button
            type="button"
            onClick={reset}
            className="mx-auto text-[12px] font-medium text-zinc-400 transition-colors hover:text-zinc-700"
          >
            Modifier ma demande
          </button>
        </div>
      )}
    </section>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="shrink-0 text-[12px] text-zinc-400">{label}</dt>
      <dd className="text-right text-[12px] font-medium text-zinc-800">
        {value}
      </dd>
    </div>
  );
}