import { ButtonLink } from "@/components/button";
import { Caption } from "@/components/ui";

export function CtaBanner({
  eyebrow = "Let's Build Together",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-cream pb-20 pt-0 md:pb-28">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[32px] bg-mist px-6 py-14 text-navy md:px-12 md:py-16 lg:px-16">
          <div className="relative flex flex-col gap-6 lg:max-w-2xl">
            <Caption>{eyebrow}</Caption>
            <h2 className="h-section text-navy">{title}</h2>
            <p className="body-lg text-body">{body}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={primary.href} variant="primary" size="lg" withArrow>
                {primary.label}
              </ButtonLink>
              {secondary ? (
                <ButtonLink href={secondary.href} variant="secondary" size="lg">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
