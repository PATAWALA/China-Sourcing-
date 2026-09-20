import { SearchCheck, Ship, ShieldCheck, MessageSquare, PackageCheck, Truck, type LucideIcon } from "lucide-react";

// --- Services ---
export interface Service {
  id: string;
  label: string;
  short: string;
  description: string;
  icon: LucideIcon;
  features: readonly string[];
}

export const services: readonly Service[] = [
  {
    id: "sourcing",
    label: "Achat & Sourcing",
    short: "Trouver un produit ou un fournisseur en Chine",
    description:
      "Nous identifions les fournisseurs, négocions les prix et sécurisons la commande pour vous.",
    icon: SearchCheck,
    features: [
      "Recherche et shortlist de fournisseurs vérifiés",
      "Négociation commerciale et volume",
      "Échantillonnage et validation produit",
      "Suivi de production jusqu'à l'expédition",
    ],
  },
  {
    id: "fret",
    label: "Expédition de Fret",
    short: "Colis, groupage ou conteneur vers l'Afrique",
    description:
      "Nous organisons le transport aérien et maritime depuis Guangzhou vers les villes africaines.",
    icon: Ship,
    features: [
      "Fret aérien express (5-10 jours)",
      "Fret maritime groupage (LCL)",
      "Conteneur complet (FCL 20'/40')",
      "Dédouanement et livraison porte-à-porte",
    ],
  },
  {
    id: "qualite",
    label: "Contrôle Qualité",
    short: "Inspection avant expédition en Chine",
    description:
      "Inspection physique de votre marchandise à l'usine avant expédition. Zéro surprise.",
    icon: ShieldCheck,
    features: [
      "Inspection usine avant chargement",
      "Vérification quantité et référence",
      "Rapport photo et vidéo complet",
      "Recommandation go / no-go",
    ],
  },
] as const;

// --- Process ---
export const process = [
  { icon: MessageSquare, title: "1. Vous décrivez", desc: "Produit, quantité, destination, budget." },
  { icon: SearchCheck, title: "2. On source", desc: "Fournisseurs vérifiés, prix négociés, échantillons." },
  { icon: PackageCheck, title: "3. On contrôle", desc: "Inspection avant expédition. Rapport photo/vidéo." },
  { icon: Truck, title: "4. On expédie", desc: "Fret aérien ou maritime jusqu'à votre ville." },
] as const;

// --- Destinations ---
export interface Destination {
  country: string;
  cities: readonly string[];
  modes: readonly ("Aérien" | "Maritime")[];
  leadTime: string;
}

export const destinations: readonly Destination[] = [
  { country: "Cameroun", cities: ["Douala", "Yaoundé"], modes: ["Aérien", "Maritime"], leadTime: "7-35 jours" },
  { country: "RDC", cities: ["Kinshasa", "Lubumbashi"], modes: ["Aérien", "Maritime"], leadTime: "10-40 jours" },
  { country: "Côte d'Ivoire", cities: ["Abidjan"], modes: ["Aérien", "Maritime"], leadTime: "7-30 jours" },
  { country: "Sénégal", cities: ["Dakar"], modes: ["Aérien", "Maritime"], leadTime: "7-30 jours" },
  { country: "Gabon", cities: ["Libreville"], modes: ["Aérien", "Maritime"], leadTime: "10-35 jours" },
] as const;

// --- Trust badges ---
export const trustBadges = [
  "Accompagnement de A à Z depuis Guangzhou",
  "Contrôle qualité avant expédition",
  "Réponse directe sur WhatsApp sous 30 min",
] as const;

// --- FAQ ---
export const faqs = [
  {
    q: "Combien coûte le sourcing en Chine ?",
    a: "Nos frais de service démarrent à un pourcentage de la valeur marchandise. Chaque projet étant différent, nous envoyons un devis précis après votre demande.",
  },
  {
    q: "Quels sont les délais d'expédition ?",
    a: "Fret aérien : 5 à 10 jours. Fret maritime groupage : 25 à 40 jours. Conteneur complet : 30 à 45 jours. Les délais varient selon la destination.",
  },
  {
    q: "Gérez-vous la douane dans mon pays ?",
    a: "Oui, nous proposons des solutions porte-à-porte incluant le dédouanement. Selon la destination, nous travaillons avec des partenaires locaux agréés.",
  },
  {
    q: "Puis-je payer à la livraison ?",
    a: "Non. Le règlement s'effectue en deux temps : acompte à la commande, solde avant expédition. C'est le standard sur le marché chinois.",
  },
  {
    q: "Contrôlez-vous la qualité avant expédition ?",
    a: "Oui, systématiquement pour toute commande de sourcing ou de fret. Nous fournissons un rapport photo/vidéo complet.",
  },
  {
    q: "Puis-je commander une petite quantité ?",
    a: "Oui pour le groupage (LCL). Nous travaillons en B2B à partir de quelques cartons — pas de vente à l'unité retail.",
  },
] as const;