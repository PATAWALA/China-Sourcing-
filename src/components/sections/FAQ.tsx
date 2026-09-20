"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-zinc-200 bg-zinc-50 py-20 sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">FAQ</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 sm:text-[36px]">
            Les questions qu'on nous pose le plus.
          </h2>
        </div>

        <div className="mt-12 max-w-3xl divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-[14px] font-medium text-zinc-900">{item.q}</span>
                  <ChevronDown
                    className={cn("h-4 w-4 shrink-0 text-zinc-400 transition-transform", isOpen && "rotate-180")}
                    strokeWidth={1.75}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[13.5px] leading-relaxed text-zinc-600">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}