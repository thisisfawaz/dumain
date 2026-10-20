import { ButtonLink } from "@/components/button";

export default function NotFound() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-site flex flex-col items-start gap-6">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Error 404</p>
        <h1 className="t-h1">This page could not be found.</h1>
        <p className="t-body max-w-xl text-body">
          The page you are looking for may have been moved or no longer exists. Explore our companies and services instead.
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/" size="lg" withArrow>Back to Home</ButtonLink>
          <ButtonLink href="/companies" variant="secondary" size="lg">Our Companies</ButtonLink>
        </div>
      </div>
    </section>
  );
}
