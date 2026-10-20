import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Core } from "@/components/sections/core";
import { Industries } from "@/components/sections/industries";
import { CompaniesGrid } from "@/components/sections/companies-grid";
import { WhyUs } from "@/components/sections/why-us";
import { Achievements } from "@/components/sections/achievements";
import { Solution } from "@/components/sections/solution";
import { Process } from "@/components/sections/process";
import { Advantages } from "@/components/sections/advantages";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Core />
      <Industries />
      <CompaniesGrid />
      <WhyUs />
      <Achievements />
      <Solution />
      <Process />
      <Advantages />
      <Testimonials />
      <CtaBanner
        eyebrow="Ready to Work With Us?"
        title="Let's build something that lasts."
        body="Whether you need a property developed, goods transported, a facility managed, or a partner for your next big project, Dumain Group is ready."
        primary={{ label: "Contact Us Today", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
