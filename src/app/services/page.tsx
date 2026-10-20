import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Caption, Rule } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { serviceCategories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive solutions across real estate, logistics, investment, technology, facility management, and community development.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Comprehensive solutions across sectors, delivered with excellence."
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col gap-12">
          <nav aria-label="Service categories" className="flex flex-wrap gap-3">
            {serviceCategories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="rounded-full border border-navy/10 bg-white px-4 py-2 text-xs font-medium text-body transition-colors hover:border-primary/40 hover:text-primary md:text-sm"
              >
                {c.title}
              </a>
            ))}
          </nav>

          {serviceCategories.map((c) => (
            <div key={c.slug} id={c.slug} className="scroll-mt-24 flex flex-col gap-8">
              <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                <div className="flex items-center gap-3 lg:w-2/5">
                  <span className="caption-dot" aria-hidden="true" />
                  <p className="caption text-body">Service Category</p>
                </div>
                <div className="flex flex-col gap-6 lg:w-3/5">
                  <h2 className="t-h3">{c.title}</h2>
                  <p className="t-small text-body">{c.summary}</p>
                  <Rule />
                </div>
              </div>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-card bg-white/85 p-5 backdrop-blur-[7.5px]">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                    <span className="t-small text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Need a solution that spans more than one sector?"
        body="Our companies collaborate to deliver integrated, end-to-end support for complex projects."
        primary={{ label: "Talk to Our Team", href: "/contact" }}
        secondary={{ label: "View Companies", href: "/companies" }}
      />
    </>
  );
}
