import { Footer } from "@/components/hub/Footer";
import { Header } from "@/components/hub/Header";
import { OrientationWizard } from "@/components/hub/OrientationWizard";
import { TrustBadges } from "@/components/hub/TrustBadges";

export default function Home() {
  return (
    <main className="min-h-dvh bg-zinc-50">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-8">
        <Header />

        <div className="mt-7">
          <OrientationWizard />
        </div>

        <div className="mt-5">
          <TrustBadges />
        </div>

        <Footer />
      </div>
    </main>
  );
}