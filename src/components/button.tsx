import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost" | "beige";
type Size = "sm" | "md" | "lg";

type Common = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-accent border border-transparent",
  secondary: "bg-white text-primary border border-primary/70 hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-white border border-white/60 hover:bg-white hover:text-navy",
  beige: "bg-beige text-primary border border-transparent hover:bg-mist",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm md:text-base",
};

function cls(variant: Variant, size: Size, className?: string) {
  return [
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300",
    variants[variant],
    sizes[size],
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  children,
  className,
  ...rest
}: Common & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cls(variant, size, className)} {...rest}>
      {children}
      {withArrow ? (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  children,
  className,
  ...rest
}: Common & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "children" | "className"
  >) {
  return (
    <Link href={href} className={cls(variant, size, className)} {...rest}>
      {children}
      {withArrow ? (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}
