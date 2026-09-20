import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-[12px] font-semibold text-white">
                CS
              </span>
              <span className="text-[14px] font-semibold text-zinc-900">
                {site.name} / {site.city}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-zinc-500">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-zinc-900">
              Navigation
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-zinc-500 transition-colors hover:text-zinc-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-zinc-900">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13px] text-zinc-500">
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" strokeWidth={1.75} />
                Guangzhou, Chine
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-zinc-400" strokeWidth={1.75} />
                {site.email}
              </li>
              <li>WhatsApp : {site.whatsapp.display}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] text-zinc-400">
            © {new Date().getFullYear()} {site.legalName}. Tous droits réservés.
          </p>
          <p className="text-[11px] text-zinc-400">
            Douala · Kinshasa · Abidjan · Dakar · Libreville
          </p>
        </div>
      </Container>
    </footer>
  );
}