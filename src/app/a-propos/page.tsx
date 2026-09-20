import { PageHero } from "@/components/ui/PageHero";
import { Stats } from "@/components/sections/Stats";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "À propos",
  description: "Bureau basé à Guangzhou, tourné vers l'Afrique.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Un bureau à Guangzhou, tourné vers l'Afrique."
        description="China Sourcing accompagne depuis plusieurs années des importateurs et entreprises africaines dans leurs achats en Chine."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-zinc-600">
            <p>
              Nous avons commencé par le sourcing pur, avant d'ajouter le fret et le contrôle qualité —
              parce que nos clients nous demandaient de gérer toute la chaîne.
            </p>
            <p>
              Aujourd'hui, nous couvrons l'ensemble du parcours : recherche fournisseur, négociation,
              inspection usine et expédition porte-à-porte.
            </p>
            <p>
              Nous travaillons exclusivement en B2B. Notre force n'est pas le prix le plus bas, c'est
              la fiabilité et la transparence sur chaque commande.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
            <h3 className="text-[12px] font-semibold uppercase tracking-wider text-zinc-500">
              En chiffres
            </h3>
            <div className="mt-6">
              <Stats />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}