import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 12% 20%, rgba(198,40,40,0.85), transparent 55%), radial-gradient(circle at 85% 0%, rgba(229,57,53,0.5), transparent 50%)",
        }}
      />
      <div className="container-site relative flex flex-col gap-6 py-20 md:py-24 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/60">
          <Link href="/" className="hover:text-white">Home</Link>
          <ArrowRightIcon className="h-3.5 w-3.5" />
          <span className="text-white/85">{eyebrow ?? title}</span>
        </nav>
        <h1 className="t-h1 max-w-3xl text-white">{title}</h1>
        {subtitle ? <div className="t-body max-w-2xl text-white/80">{subtitle}</div> : null}
        {children}
      </div>
    </section>
  );
}
