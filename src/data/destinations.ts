export interface Destination {
  country: string;
  flag: string;
  cities: readonly string[];
  modes: readonly ("aerien" | "maritime")[];
  leadTime: string;
}

export const destinations: readonly Destination[] = [
  { country: "Cameroun", flag: "CM", cities: ["Douala", "Yaoundé"], modes: ["aerien", "maritime"], leadTime: "7-35 jours" },
  { country: "RDC", flag: "CD", cities: ["Kinshasa", "Lubumbashi"], modes: ["aerien", "maritime"], leadTime: "10-40 jours" },
  { country: "Côte d'Ivoire", flag: "CI", cities: ["Abidjan"], modes: ["aerien", "maritime"], leadTime: "7-30 jours" },
  { country: "Sénégal", flag: "SN", cities: ["Dakar"], modes: ["aerien", "maritime"], leadTime: "7-30 jours" },
  { country: "Gabon", flag: "GA", cities: ["Libreville"], modes: ["aerien", "maritime"], leadTime: "10-35 jours" },
] as const;