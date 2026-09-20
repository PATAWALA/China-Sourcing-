import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Destinations } from "@/components/sections/Destinations";
import { QualifiedForm } from "@/components/sections/QualifiedForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Services />
      <Process />
      <Destinations />
      <QualifiedForm />
    </>
  );
}