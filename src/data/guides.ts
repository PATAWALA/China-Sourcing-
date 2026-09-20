export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string;
}

export const guides: readonly Guide[] = [
  {
    slug: "importer-de-chine-au-cameroun",
    title: "Importer de Chine au Cameroun : le guide complet 2025",
    excerpt: "Douane, transport, paiement, fournisseurs : tout ce qu'il faut savoir avant votre première commande.",
    date: "2025-01-15",
    readingTime: "8 min",
    content: `## Étape 1 — Identifier le bon fournisseur\n\n...`,
  },
  {
    slug: "fret-aerien-vs-maritime",
    title: "Fret aérien vs maritime : lequel choisir ?",
    excerpt: "Coût, délai, volume : la grille de décision simple pour ne plus se tromper.",
    date: "2025-02-02",
    readingTime: "5 min",
    content: `## Comparatif rapide\n\n...`,
  },
  {
    slug: "eviter-arnaques-fournisseurs",
    title: "5 arnaques courantes des fournisseurs chinois (et comment les éviter)",
    excerpt: "Les signaux qui doivent vous alerter avant de payer un acompte.",
    date: "2025-03-10",
    readingTime: "6 min",
    content: `## Arnaque #1 — Le faux compte bancaire\n\n...`,
  },
] as const;