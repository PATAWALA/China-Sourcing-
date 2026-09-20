import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "China Sourcing / Guangzhou — Achat & Expédition Chine → Afrique",
  description:
    "Sourcing, contrôle qualité et expédition de fret depuis Guangzhou vers le Cameroun, la RDC, la Côte d'Ivoire, le Sénégal et le Gabon.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}