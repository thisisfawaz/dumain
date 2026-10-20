import Link from "next/link";
import Image from "next/image";
import type { Company } from "@/lib/companies";
import { companyIconMap, ArrowRightIcon } from "@/components/icons";
import { Rule } from "@/components/ui";

/** Company card used in the "Our Companies" grid. */
export function CompanyCard({ company }: { company: Company }) {
  const Icon = companyIconMap[company.slug as keyof typeof companyIconMap];
  return (
    <Link
      href={`/companies#${company.slug}`}
      className="group flex h-full flex-col gap-5 rounded-card border border-navy/5 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(13,13,57,0.45)] md:p-7"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </span>
      <div className="flex flex-col gap-2">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-primary/80">
          {company.sector}
        </p>
        <h3 className="t-h5">{company.shortName}</h3>
        <p className="t-small text-body/85">{company.shortDescription}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary">
        Learn more
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

/** Dark navy stat card with the 4px blue bar on the right edge (Achievements section). */
export function StatBarCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="relative flex min-h-[150px] flex-col justify-between overflow-hidden rounded-card bg-mist px-8 py-8 text-navy shadow-[0_12px_30px_-22px_rgba(31,41,55,0.45)] md:min-h-[172px]">
      <span className="t-h2 text-navy">{value}</span>
      <span className="flex flex-col">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-navy">{label}</span>
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-body/70">{sub}</span>
      </span>
      <span aria-hidden="true" className="absolute bottom-0 right-0 top-0 w-[15px] bg-primary" />
    </div>
  );
}

/** Numbered process card (01. 02. ...) on the deep navy background. */
export function ProcessCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex h-full flex-col gap-[60px] rounded-2xl bg-white/85 px-6 py-10 backdrop-blur-[7.5px]">
      <div className="flex flex-col gap-1">
        <h3 className="t-h3 text-navy">{step}</h3>
        <h4 className="t-h5 text-navy">{title}</h4>
      </div>
      <p className="t-small text-body">{body}</p>
    </div>
  );
}

/** Bento tile with a background image and optional gradient overlay. */
export function ImageTile({
  src,
  alt,
  className = "",
  rounded = "rounded-card",
  priority = false,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 809px) 100vw, 640px" className="object-cover" />
      {children}
    </div>
  );
}

/** Review card used in the testimonial carousel. */
export function ReviewCard({
  quote,
  name,
  role,
  rating,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  rating: string;
  avatar: string;
}) {
  return (
    <div className="flex h-full min-h-[480px] flex-col justify-between rounded-card bg-beige p-8 md:p-10">
      <div className="flex flex-col gap-6">
        <svg viewBox="0 0 44 32" className="h-8 w-11 fill-accent" aria-hidden="true">
          <path d="M9.66 11.64c1.9 0 3.76.6 5.34 1.71a9.8 9.8 0 0 1 3.54 4.57 9.6 9.6 0 0 1 .55 5.88 9.7 9.7 0 0 1-2.63 4.71 9.9 9.9 0 0 1-10.48 2.2A9.8 9.8 0 0 1 0 21.82v-1.45C0 14.96 2.03 9.78 5.63 5.96 9.24 2.14 14.13 0 19.23 0v5.82a13.6 13.6 0 0 0-9.57 4.26 16.7 16.7 0 0 0-1.37 1.68c.5-.08 1-.12 1.37-.12Zm24.72 0c1.9 0 3.75.6 5.34 1.71a9.8 9.8 0 0 1 3.54 4.57 9.6 9.6 0 0 1 .55 5.88 9.7 9.7 0 0 1-2.63 4.71 9.9 9.9 0 0 1-10.48 2.2 9.8 9.8 0 0 1-5.98-8.89v-1.45c0-5.41 2.03-10.59 5.63-14.41C33.95 2.14 38.85 0 43.95 0v5.82a13.6 13.6 0 0 0-9.57 4.26c-.5.5-.95 1.06-1.37 1.68.5-.08 1-.12 1.37-.12Z" />
        </svg>
        <p className="t-body text-navy">{quote}</p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <Rule />
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col">
            <h4 className="t-h5">{name}</h4>
            <p className="t-small text-body">{role}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image src={avatar} alt="" fill sizes="56px" className="object-cover" />
            </div>
            <p className="text-sm italic text-body">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
