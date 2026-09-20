import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp";

interface Props {
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const VARIANTS: Record<Variant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-800",
  secondary: "bg-white text-zinc-900 border border-zinc-200 hover:border-zinc-300",
  whatsapp: "bg-emerald-600 text-white hover:bg-emerald-700",
};

const SIZES = {
  md: "h-11 px-5 text-[14px] rounded-xl",
  lg: "h-13 px-6 text-[15px] rounded-xl",
};

export function Button({ href, variant = "primary", size = "md", className, children, target, rel, onClick }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all active:scale-[0.98]",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  if (href) {
    return <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>{children}</Link>;
  }
  return <button type="button" className={classes} onClick={onClick}>{children}</button>;
}