import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Caption, Rule } from "@/components/ui";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { businessHours, siteConfig, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dumain Group. Head office in Gwarimpa, Abuja. Email dumainops@gmail.com or call 08065307988.",
};

const mapQuery = encodeURIComponent(siteConfig.address);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Us" subtitle="We would love to hear from you." />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8 lg:w-[40%]">
            <div className="flex flex-col gap-3">
              <Caption>Contact Information</Caption>
              <h2 className="t-h3b">Reach the right team, fast.</h2>
              <Rule />
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-body/60">Head Office</span>
                  <span className="t-small">{siteConfig.address}</span>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-body/60">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="t-small">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-body/60">Phone</span>
                  <a href={siteConfig.phoneHref} className="t-small">
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
            </ul>

            <div className="rounded-card bg-white p-6">
              <div className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-primary" />
                <h3 className="t-h5">Business Hours</h3>
              </div>
              <dl className="mt-4 flex flex-col gap-3">
                {businessHours.map((e) => (
                  <div key={e.day} className="flex items-center justify-between gap-4">
                    <dt className="t-small text-body/80">{e.day}</dt>
                    <dd className="t-small font-medium text-navy">{e.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-body/60">Follow Us</h3>
              <ul className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-navy/10 px-4 py-2 text-xs font-medium text-body hover:border-primary/40 hover:text-primary"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-[55%]">
            <div className="rounded-card bg-white p-6 md:p-10">
              <div className="mb-8 flex flex-col gap-2">
                <h2 className="t-h3b">Send us a message</h2>
                <p className="t-small text-body">
                  Fill in the form below and our team will respond as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="container-site">
          <div className="overflow-hidden rounded-card border border-navy/5">
            <iframe
              title={`Map showing ${siteConfig.name} head office`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full border-0 md:h-[440px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
