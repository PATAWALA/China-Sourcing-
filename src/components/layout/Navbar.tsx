"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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

        {/* CTA unique : la demande */}
        <div className="hidden md:block">
          <Button href="/#contact" variant="primary">
            Demander un devis
          </Button>
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
            <div className="mt-2">
              <Button href="/#contact" size="md" variant="primary" className="w-full">
                Demander un devis
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}