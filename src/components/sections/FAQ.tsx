"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-y border-zinc-200 bg-zinc-50 py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
            FAQ
          </p>
          <h2 className="mt-4 text-[32px] font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-[42px]">
            Les questions
            <br className="hidden sm:block" /> qu'on nous pose le plus.
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={item.q}
                className={cn(
                  "border-t border-zinc-200 transition-colors",
                  i === faqs.length - 1 && "border-b",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={cn(
                      "text-[14.5px] font-medium transition-colors",
                      isOpen ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900",
                    )}
                  >
                    {item.q}
                  </span>

                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-300",
                      isOpen && "rotate-45 text-zinc-900",
                    )}
                    strokeWidth={1.5}
                  />
                </button>

                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="min-h-0 pr-8 text-[13.5px] leading-relaxed text-zinc-500">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}