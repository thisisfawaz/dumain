import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { ButtonLink } from "@/components/button";
import { Caption, Rule } from "@/components/ui";
import { ArrowRightIcon, CheckIcon, companyIconMap } from "@/components/icons";
import { companies } from "@/lib/companies";

export const metadata: Metadata = {
  title: "Our Companies",
  description:
    "A family of specialized businesses working together to deliver comprehensive solutions across Nigeria.",
};

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Companies"
        title="Our Companies"
        subtitle="A family of specialized businesses working together to deliver comprehensive solutions."
      />

      <nav aria-label="Company shortcuts" className="border-b border-navy/10 bg-white">
        <div className="container-site flex flex-wrap gap-3 py-6">
          {companies.map((c) => (
            <Link
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-navy/10 px-4 py-2 text-xs font-medium text-body transition-colors hover:border-primary/40 hover:text-primary md:text-sm"
            >
              {c.shortName}
            </Link>
          ))}
        </div>
      </nav>

      {companies.map((c, index) => {
        const Icon = companyIconMap[c.slug as keyof typeof companyIconMap];
        return (
          <section
            key={c.slug}
            id={c.slug}
            className={`scroll-mt-24 py-20 md:py-28 ${index % 2 === 1 ? "bg-white" : "bg-cream"}`}
          >
            <div className="container-site flex flex-col gap-12">
              <div className="flex flex-col justify-between gap-10 lg:flex-row">
                <div className="flex flex-col gap-5 lg:w-2/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary">
                    {Icon ? <Icon className="h-6 w-6" /> : null}
                  </span>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">{c.sector}</p>
                  <h2 className="t-h3b">{c.shortName}</h2>
                  <p className="t-small font-medium text-accent">{c.tagline}</p>
                  <Rule />
                </div>
                <div className="lg:w-3/5">
                  <p className="t-body text-body">{c.description}</p>
                  <div className="mt-8 rounded-card bg-white p-6 md:p-8">
                    <h3 className="t-h5">Why Choose Us</h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {c.reasons.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                          <span className="t-small text-body">{r}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7">
                      <ButtonLink href="/contact" size="md" withArrow>Work with {c.shortName}</ButtonLink>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Caption>Services</Caption>
                <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {c.services.map((s) => (
                    <li key={s.title} className="flex h-full flex-col gap-2 rounded-card bg-white p-6">
                      <h4 className="t-h5">{s.title}</h4>
                      <p className="t-small text-body">{s.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-beige py-20 md:py-28">
        <div className="container-site flex flex-col items-start gap-6">
          <Caption>Keep Exploring</Caption>
          <h2 className="t-h3b max-w-2xl">See the full range of solutions across the group.</h2>
          <Link href="/services" className="group inline-flex items-center gap-2 text-base font-medium text-primary hover:text-accent">
            Browse all services
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaBanner
        title="One group. Multiple solutions. Endless possibilities."
        body="Tell us what you need and we will connect you with the right team across Dumain Group."
        primary={{ label: "Contact Us Today", href: "/contact" }}
        secondary={{ label: "About Us", href: "/about" }}
      />
    </>
  );
}
