export const site = {
  name: "China Sourcing",
  legalName: "China Sourcing / Mr ODA",
  city: "Guangzhou",
  description:
    "Sourcing, contrôle qualité et expédition de fret depuis Guangzhou vers l'Afrique.",
  whatsapp: {
    number: "447441427635",
    display: "+44 744 142 7635",
    responseTime: "30 min",
  },
  email: "contact@china-sourcing.com",
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/#services", label: "Services" },
    { href: "/#process", label: "Process" },
    { href: "/#destinations", label: "Destinations" },
    { href: "/#faq", label: "FAQ" },
    { href: "/a-propos", label: "À propos" },
  ],
  stats: [
    { value: "500+", label: "Conteneurs expédiés" },
    { value: "5", label: "Pays desservis" },
    { value: "48h", label: "Devis retour" },
    { value: "100%", label: "Contrôle qualité" },
  ],
} as const;