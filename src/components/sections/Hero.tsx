import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <Badge>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Bureau Guangzhou · En ligne
          </Badge>

          <h1 className="mt-6 text-[36px] font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[48px] lg:text-[56px]">
            Sourcing et fret Chine → Afrique,
            <span className="block text-zinc-400">sans intermédiaire inutile.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-[17px]">
            Nous identifions vos fournisseurs, contrôlons la qualité et expédions vers le Cameroun,
            la RDC, la Côte d'Ivoire, le Sénégal et le Gabon. Un interlocuteur unique, de A à Z.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg" variant="primary">
              Démarrer ma demande
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
            <Button
              href={buildWhatsAppUrl({ context: "Contact rapide depuis l'accueil" })}
              size="lg"
              variant="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
              WhatsApp direct
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <div className="text-[24px] font-semibold leading-none tracking-tight text-zinc-900">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[12px] text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}