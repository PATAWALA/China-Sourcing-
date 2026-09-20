import { Container } from "@/components/ui/Container";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-tight text-zinc-900 sm:text-[44px]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-zinc-500">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}