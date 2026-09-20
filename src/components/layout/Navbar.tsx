"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-[12px] font-semibold text-white">
            CS
          </span>
          <span className="text-[14px] font-semibold tracking-tight text-zinc-900">
            {site.name}
            <span className="ml-1.5 font-normal text-zinc-400">/ {site.city}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active = item.href === "/a-propos" && pathname === "/a-propos";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-[13px] font-medium transition-colors",
                  active ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:text-zinc-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={buildWhatsAppUrl({ context: "Prise de contact depuis le site" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-emerald-600 px-3.5 text-[13px] font-medium text-white transition-colors hover:bg-emerald-700"
          >
            <MessageSquare className="h-3.5 w-3.5" strokeWidth={1.75} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <Container className="flex flex-col py-3">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[14px] font-medium text-zinc-700 hover:bg-zinc-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppUrl({ context: "Prise de contact depuis le menu mobile" })}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-[14px] font-medium text-white"
            >
              <MessageSquare className="h-4 w-4" strokeWidth={1.75} />
              Contacter sur WhatsApp
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}