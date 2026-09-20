import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-50 blur-3xl" />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <Badge>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Bureau Guangzhou · En ligne
          </Badge>

          <h1 className="mt-8 text-[38px] font-semibold leading-[1.08] tracking-tight text-zinc-900 sm:text-[52px] lg:text-[60px]">
            Sourcing et fret
            <br />
            Chine
            <span className="text-zinc-300"> → </span>
            Afrique.
          </h1>

          <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-zinc-600 sm:text-[18px]">
            Sans intermédiaire inutile.
          </p>

          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-zinc-400 sm:text-[15px]">
            Fournisseurs vérifiés, contrôle qualité, expédition porte-à-porte
            vers le Cameroun, la RDC, la Côte d'Ivoire, le Sénégal et le Gabon.
          </p>

          <div className="mt-10">
            <Button href="#contact" size="lg" variant="primary">
              Démarrer ma demande
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}