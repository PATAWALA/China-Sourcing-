"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
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
                className={cn(
                  "h-4 w-4 shrink-0 text-zinc-400 transition-transform",
                  isOpen && "rotate-180",
                )}
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
  );
}