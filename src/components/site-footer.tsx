import Link from "next/link";
import { companies } from "@/lib/companies";
import { navLinks, siteConfig, socialLinks } from "@/lib/site";
import { Logo } from "@/components/site-header";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${siteConfig.name} home`}>
            <Logo tone="light" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {siteConfig.tagline}. A diversified Nigerian conglomerate delivering integrated
            solutions across real estate, logistics, technology, business support, facility
            management, and community development.
          </p>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Quick Links</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/75 hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our companies" className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Our Companies</h2>
          <ul className="mt-5 flex flex-col gap-3">
            {companies.map((c) => (
              <li key={c.slug}>
                <Link href={`/companies#${c.slug}`} className="text-sm text-white/75 hover:text-white">
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Contact</h2>
          <ul className="mt-5 flex flex-col gap-4 text-sm text-white/75">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
              <a href={siteConfig.phoneHref} className="hover:text-white">{siteConfig.phone}</a>
            </li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/75 hover:border-white/40 hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} {siteConfig.name}. All Rights Reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
