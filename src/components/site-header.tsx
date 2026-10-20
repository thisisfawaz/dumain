"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/button";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
          tone === "dark" ? "bg-navy text-white" : "bg-white/20 text-white"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 2 4 6.5v11L12 22l8-4.5v-11L12 2Zm0 2.3 5.8 3.3L12 10.9 6.2 7.6 12 4.3Zm-6 5.1 5 2.8v7.4l-5-2.8V9.4Zm7 10.2v-7.4l5-2.8v7.4l-5 2.8Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-base font-semibold tracking-tight ${tone === "dark" ? "text-navy" : "text-white"}`}>
          DUMAIN
        </span>
        <span
          className={`text-[0.65rem] font-medium uppercase tracking-[0.28em] ${
            tone === "dark" ? "text-primary" : "text-white/80"
          }`}
        >
          Group
        </span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-cream/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-body hover:bg-navy/5 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="sm" withArrow>
            Get in Touch
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-navy/10 bg-cream lg:hidden">
        <nav aria-label="Mobile" className="container-site flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-3 text-base font-medium ${
                isActive(link.href) ? "bg-primary/10 text-primary" : "text-body"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/contact" size="md" withArrow className="mt-3 w-full">
            Get in Touch
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
