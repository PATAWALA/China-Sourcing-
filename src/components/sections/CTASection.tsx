import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function CTASection() {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-zinc-900 px-8 py-14 text-center sm:px-14 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-[36px]">
            Prêt à lancer votre prochaine commande ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-zinc-400">
            Décrivez votre besoin, nous revenons vers vous avec une estimation sous 48h.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" variant="secondary" className="!border-transparent !bg-white !text-zinc-900 hover:!bg-zinc-100">
              Démarrer ma demande
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Button>
            <Button
              href={buildWhatsAppUrl({ context: "Prise de contact depuis CTA" })}
              size="lg"
              variant="whatsapp"
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
              WhatsApp direct
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}