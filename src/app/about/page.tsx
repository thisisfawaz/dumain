import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { Caption, Checklist, Rule } from "@/components/ui";
import { coreValues } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dumain Group: our story, mission, vision, core values, leadership philosophy, and commitment to Nigeria.",
};

const commitment = [
  "Creating jobs for Nigerian youth",
  "Supporting local businesses and suppliers",
  "Developing infrastructure that serves communities",
  "Promoting ethical business practices",
  "Contributing to Nigeria's economic diversification",
];

const leadershipPrinciples = [
  "Lead by example",
  "Invest in people",
  "Never compromise on integrity",
  "Always give back",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Dumain Group"
        subtitle="A proudly Nigerian conglomerate built on integrity, innovation, and impact."
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex items-center gap-3 lg:w-2/5">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">Our Story</p>
          </div>
          <div className="flex flex-col gap-10 lg:w-3/5">
            <h2 className="t-h3 text-navy">From Vision to Reality</h2>
            <p className="t-body text-body">
              Dumain Group was born from a simple but powerful idea: that Nigerian businesses can compete on a global scale while staying true to local values. What started as a single venture has grown into a diversified group of companies united by a common purpose &mdash; to deliver solutions that improve lives and drive economic growth.
            </p>
            <p className="t-small text-body">
              Our growth has been deliberate. Each company we&rsquo;ve launched addresses a critical need in the Nigerian economy, from housing and infrastructure to logistics and technology. Together, these companies form an ecosystem that supports businesses, empowers communities, and creates lasting value.
            </p>
            <Rule />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-4 rounded-card bg-cream p-8 md:p-10">
            <Caption>Our Mission</Caption>
            <h2 className="t-h3">To deliver innovative, reliable, and sustainable solutions across multiple sectors.</h2>
            <p className="t-small text-body">We create value for our clients, opportunities for our people, and prosperity for our communities.</p>
          </article>
          <article className="flex flex-col gap-4 rounded-card bg-primary p-8 text-white md:p-10">
            <Caption tone="light">Our Vision</Caption>
            <h2 className="t-h3 text-white">To be Africa&rsquo;s most trusted and impactful conglomerate.</h2>
            <p className="t-small text-white/75">Known for excellence, integrity, and a relentless commitment to community development.</p>
          </article>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <span className="caption-dot" aria-hidden="true" />
              <p className="caption text-body">Our Core Values</p>
            </div>
            <h3 className="t-h3b">The principles behind every decision we make.</h3>
            <Rule />
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <li key={v.title} className="flex h-full flex-col gap-3 rounded-card bg-white/85 p-6 backdrop-blur-[7.5px] md:p-7">
                <span className="text-xs font-semibold tracking-[0.2em] text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h5">{v.title}</h3>
                <p className="t-small text-body">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-8 lg:w-[36%]">
            <div className="flex items-center gap-3">
              <span className="caption-dot" aria-hidden="true" />
              <p className="caption text-body">Our Leadership</p>
            </div>
            <h3 className="t-h3b">Guided by visionaries.</h3>
            <p className="t-small text-body">
              Dumain Group is guided by a leadership team with deep expertise across real estate, finance, logistics, technology, and social development. Our leaders are not just managers &mdash; they are visionaries who are passionate about building a better Nigeria.
            </p>
            <Rule />
          </div>
          <div className="rounded-card bg-cream p-8 md:p-10 lg:w-[55%]">
            <h3 className="t-h5">Leadership Philosophy</h3>
            <div className="mt-6"><Checklist items={leadershipPrinciples} /></div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex items-center gap-3 lg:w-2/5">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">Our Commitment to Nigeria</p>
          </div>
          <div className="flex flex-col gap-10 lg:w-3/5">
            <h3 className="t-h3b">Proudly Nigerian. Purposefully Global.</h3>
            <Checklist items={commitment} columns={2} />
            <Rule />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Partner with a group that builds for the long term."
        body="Talk to us about your next project, partnership, or investment opportunity."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Our Companies", href: "/companies" }}
      />
    </>
  );
}
