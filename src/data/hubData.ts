export type NeedId = "sourcing" | "fret";
export type ShippingMode = "aerien" | "maritime";

export interface Need {
  id: NeedId;
  label: string;
  description: string;
}

export interface DestinationGroup {
  country: string;
  cities: readonly string[];
}

export const hubData = {
  brand: {
    name: "China Sourcing",
    location: "Guangzhou",
    initials: "CS",
    /** Intitulé complet (référence interne / SEO) */
    fullTitle: "Achat & Expédition Chine → Cameroun / RDC / Afrique",
    /** Titre affiché, court et orienté action */
    headline: "Achat & Expédition Chine → Afrique",
    tagline: "Sourcing, contrôle qualité et fret vers l'Afrique.",
  },
  status: {
    label: "Bureau Guangzhou",
    state: "En ligne",
  },
  whatsapp: {
    /** Format international sans "+", ni espaces — utilisé pour wa.me */
    number: "447441427635",
    display: "+44 744 142 7635",
    responseTime: "30 min",
  },
} as const;

export const needs: readonly Need[] = [
  {
    id: "sourcing",
    label: "Achat & Sourcing",
    description: "Trouver un produit ou un fournisseur en Chine",
  },
  {
    id: "fret",
    label: "Expédition de Fret",
    description: "Envoyer un colis, groupage ou conteneur",
  },
];

export const destinations: readonly DestinationGroup[] = [
  { country: "Cameroun", cities: ["Douala", "Yaoundé"] },
  { country: "RDC", cities: ["Kinshasa", "Lubumbashi"] },
  { country: "Côte d'Ivoire", cities: ["Abidjan"] },
  { country: "Sénégal", cities: ["Dakar"] },
  { country: "Gabon", cities: ["Libreville"] },
];