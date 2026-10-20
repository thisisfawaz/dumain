import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button";
import { Caption, Checklist, Rule } from "@/components/ui";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { getCompany } from "@/lib/companies";
import { foundationContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Joseph Ainoje Development Foundation",
  description:
    "Transforming communities and changing lives through poverty alleviation, food security, health, education, and women's empowerment.",
};

const programs = [
  { title: "Scholarship Schemes", body: "Providing financial assistance to indigent students to pursue their education." },
  { title: "Vocational Training Centers", body: "Equipping young people with practical skills for employment and entrepreneurship." },
  { title: "Maternal and Child Health Clinics", body: "Improving health outcomes for mothers and children in rural communities." },
  { title: "Community Feeding Programs", body: "Addressing hunger and malnutrition among vulnerable populations." },
  { title: "Women's Cooperative Societies", body: "Supporting women-led businesses and economic initiatives." },
  { title: "Youth Mentorship Programs", body: "Guiding young people towards positive life choices and career paths." },
  { title: "Clean Water Projects", body: "Providing access to safe, clean drinking water in underserved areas." },
  { title: "Health Awareness Campaigns", body: "Educating communities on disease prevention and healthy living." },
];

const waysToHelp = [
  { title: "Donate", body: "Your financial support enables us to fund our programs and reach more communities." },
  { title: "Volunteer", body: "Share your time and skills to support our initiatives." },
  { title: "Partner", body: "Collaborate with us on community projects and programs." },
  { title: "Sponsor", body: "Sponsor a scholarship, a program, or a specific initiative." },
];

export default function FoundationPage() {
  const focusAreas = getCompany("foundation")?.services ?? [];

  return (
    <>
      <PageHero
        eyebrow="Foundation"
        title="Joseph Ainoje Development Foundation"
        subtitle="Transforming Communities, Changing Lives"
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex items-center gap-3 lg:w-2/5">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">Our Heartbeat</p>
          </div>
          <div className="flex flex-col gap-10 lg:w-3/5">
            <h2 className="t-h3 text-navy">More Than Business. A Force for Good.</h2>
            <p className="t-body text-body">
              The Joseph Ainoje Development Foundation is the heartbeat of Dumain Group&rsquo;s commitment to social responsibility. We believe that true success is measured not just by what we achieve, but by what we give back. Established as a non-profit, non-political organization, the Foundation is dedicated to creating lasting change in Nigerian communities.
            </p>
            <Rule />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site grid gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-4 rounded-card bg-cream p-8 md:p-10">
            <Caption>Mission</Caption>
            <h2 className="t-h3">To empower individuals and communities through sustainable programs.</h2>
            <p className="t-small text-body">Addressing poverty, hunger, health, education, and economic empowerment.</p>
          </article>
          <article className="flex flex-col gap-4 rounded-card bg-primary p-8 text-white md:p-10">
            <Caption tone="light">Vision</Caption>
            <h2 className="t-h3 text-white">A Nigeria where every person has the opportunity to thrive.</h2>
            <p className="t-small text-white/75">Regardless of their background or circumstances.</p>
          </article>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <span className="caption-dot" aria-hidden="true" />
              <p className="caption text-body">Focus Areas</p>
            </div>
            <h3 className="t-h3b">Where we concentrate our efforts.</h3>
            <Rule />
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((a) => (
              <li key={a.title} className="flex h-full flex-col gap-3 rounded-card bg-white p-6 md:p-7">
                <h3 className="t-h5">{a.title}</h3>
                <p className="t-small text-body">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-beige py-20 md:py-28">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <span className="caption-dot" aria-hidden="true" />
              <p className="caption text-body">Our Programs</p>
            </div>
            <h3 className="t-h3b">Practical initiatives, lasting outcomes.</h3>
            <Rule />
          </div>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((p) => (
              <li key={p.title} className="flex h-full flex-col gap-2 rounded-card bg-white p-6">
                <h3 className="t-h5">{p.title}</h3>
                <p className="t-small text-body">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <span className="caption-dot" aria-hidden="true" />
              <p className="caption text-body">Join Us in Making a Difference</p>
            </div>
            <h3 className="t-h3b">How you can help.</h3>
            <Rule />
          </div>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {waysToHelp.map((w) => (
              <li key={w.title} className="flex h-full flex-col gap-3 rounded-card bg-white p-6 md:p-7">
                <h3 className="t-h5">{w.title}</h3>
                <p className="t-small text-body">{w.body}</p>
              </li>
            ))}
          </ul>
          <div><ButtonLink href="/contact" size="lg" withArrow>Support Our Foundation</ButtonLink></div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-site">
          <div className="flex flex-col gap-8 rounded-card bg-cream p-8 md:p-12">
            <div className="flex flex-col gap-3">
              <Caption>Contact the Foundation</Caption>
              <h2 className="t-h3">Get in touch with our team.</h2>
            </div>
            <ul className="grid gap-6 md:grid-cols-3">
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-body/60">Email</span>
                  <a href={`mailto:${foundationContact.email}`} className="t-small">{foundationContact.email}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-body/60">Phone</span>
                  <a href={foundationContact.phoneHref} className="t-small">{foundationContact.phone}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-body/60">Address</span>
                  <span className="t-small">{foundationContact.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
