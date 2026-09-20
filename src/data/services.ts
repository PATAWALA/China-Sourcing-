import { SearchCheck, Ship, ShieldCheck, type LucideIcon } from "lucide-react";

export interface Service {
  slug: "sourcing" | "fret" | "controle-qualite";
  label: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: readonly string[];
  deliverables: readonly string[];
  audience: readonly string[];
}

export const services: readonly Service[] = [
  {
    slug: "sourcing",
    label: "Achat & Sourcing",
    short: "Trouver un produit ou un fournisseur en Chine",
    description:
      "Nous identifions les fournisseurs, négocions les prix et sécurisons la commande pour vous, sans intermédiaire inutile.",
    icon: SearchCheck,
    features: [
      "Recherche et shortlist de fournisseurs vérifiés",
      "Négociation commerciale et volume",
      "Vérification d'entreprise (licence, usine)",
      "Échantillonnage et validation produit",
      "Suivi de production jusqu'à l'expédition",
    ],
    deliverables: [
      "Rapport fournisseur comparatif",
      "Échantillons physiques si nécessaire",
      "Devis final tout compris",
    ],
    audience: [
      "Commerçants et revendeurs",
      "E-commerçants (Shopify, TikTok Shop)",
      "Entreprises en approvisionnement régulier",
    ],
  },
  {
    slug: "fret",
    label: "Expédition de Fret",
    short: "Colis, groupage ou conteneur vers l'Afrique",
    description:
      "Nous organisons le transport aérien et maritime depuis Guangzhou vers les principaux ports et villes africaines.",
    icon: Ship,
    features: [
      "Fret aérien express (5-10 jours)",
      "Fret maritime groupage (LCL)",
      "Conteneur complet (FCL 20'/40')",
      "Dédouanement et livraison porte-à-porte",
      "Assurance marchandise",
    ],
    deliverables: [
      "Devis fret chiffré sous 48h",
      "Suivi de colis en temps réel",
      "Bordereau et documents douaniers",
    ],
    audience: [
      "Importateurs réguliers",
      "Grossistes B2B",
      "Entreprises avec colis volumineux",
    ],
  },
  {
    slug: "controle-qualite",
    label: "Contrôle Qualité",
    short: "Inspection avant expédition en Chine",
    description:
      "Inspection physique de votre marchandise à l'usine avant expédition. Zéro surprise à l'arrivée.",
    icon: ShieldCheck,
    features: [
      "Inspection usine avant chargement",
      "Vérification quantité et référence",
      "Test fonctionnel sur échantillon",
      "Rapport photo et vidéo complet",
      "Recommandation go / no-go",
    ],
    deliverables: [
      "Rapport d'inspection détaillé",
      "Photos et vidéos horodatées",
      "Avis qualité documenté",
    ],
    audience: [
      "Premiers importateurs prudents",
      "Commandes à forte valeur",
      "Marques avec exigences qualité",
    ],
  },
] as const;