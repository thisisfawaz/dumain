import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Rule } from "@/components/ui";
import { ArrowRightIcon, companyIconMap } from "@/components/icons";
import { companies } from "@/lib/companies";
import { companyImages } from "@/lib/media";

export function CompaniesGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-site flex flex-col gap-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3 lg:w-2/5">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">Our Companies</p>
          </div>
          <div className="flex flex-col gap-10 lg:w-3/5">
            <h2 className="t-h3 text-navy">
              One Group. Multiple Solutions. Endless Possibilities.
            </h2>
            <Rule />
          </div>
        </div>

        {/* Stacking cards: each sticks under the header while the next slides up */}
        <ul className="flex flex-col gap-6">
          {companies.map((company, index) => {
            const Icon = companyIconMap[company.slug as keyof typeof companyIconMap];
            const image = companyImages[company.slug];

            return (
              <li
                key={company.slug}
                className="sticky"
                style={{ top: `${96 + index * 16}px` }}
              >
                <article className="grid overflow-hidden rounded-card border border-navy/5 bg-cream shadow-[0_1px_2px_rgba(13,13,57,0.05)] md:grid-cols-2">
                  {/* Left: image */}
                  <div className="relative min-h-[260px] md:min-h-[420px]">
                    {image ? (
                      <Image
                        src={image}
                        alt={company.shortName}
                        fill
                        sizes="(max-width: 767px) 100vw, 620px"
                        className="object-cover"
                      />
                    ) : null}
                    <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-primary backdrop-blur">
                      {Icon ? <Icon className="h-5 w-5" /> : null}
                    </span>
                  </div>

                  {/* Right: headline + explanation */}
                  <div className="flex flex-col justify-between gap-10 p-7 md:p-12">
                    <div className="flex flex-col gap-5">
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                        {company.sector}
                      </p>
                      <h3 className="t-h5">{company.shortName}</h3>
                      <p className="t-small font-medium leading-relaxed text-accent">
                        {company.tagline}
                      </p>
                      <p className="t-small leading-relaxed text-body">{company.description}</p>
                    </div>

                    <Link
                      href={`/companies#${company.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
                    >
                      Learn more
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div>
          <ButtonLink href="/companies" size="lg" withArrow>
            Learn More About Our Companies
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
