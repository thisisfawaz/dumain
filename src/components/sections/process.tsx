import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { ProcessCard } from "@/components/cards";
import { Rule } from "@/components/ui";
import { media } from "@/lib/media";

const steps = [
  {
    step: "01.",
    title: "Tell us your goal",
    body: "Share the outcome you need — a property, a delivery, a facility, or a partnership — and we map it to the right company within the group.",
  },
  {
    step: "02.",
    title: "Get one coordinated plan",
    body: "Our teams across real estate, logistics, technology, and business services align on a single plan, budget, and timeline.",
  },
  {
    step: "03.",
    title: "We deliver end to end",
    body: "From design and construction to transport, systems, and ongoing management — one accountable partner handles the work.",
  },
  {
    step: "04.",
    title: "Grow with us",
    body: "We stay on as a long-term partner, maintaining what we build and supporting the communities we serve.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden">
      <Image src={media.processBg} alt="" fill sizes="100vw" className="object-cover object-[68%_45%]" />
      <div className="relative bg-navy/40 py-20 md:py-28">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="flex shrink-0 flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="caption-dot" aria-hidden="true" />
                <p className="caption text-mist">4 Simple Steps</p>
              </div>
              <h3 className="t-h3b whitespace-nowrap text-white">
                One group,
                <br />
                start to finish
              </h3>
            </div>
            <Rule tone="light" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid gap-5 lg:grid-cols-4">
              {steps.map((s) => (
                <ProcessCard key={s.step} step={s.step} title={s.title} body={s.body} />
              ))}
            </div>
            <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-white/85 px-6 py-6 backdrop-blur-[7.5px] md:flex-row md:items-center">
              <div className="flex items-center gap-5">
                <div className="flex -space-x-4">
                  {[media.avatar1, media.avatar5, media.avatar6, media.avatar2].map((src, i) => (
                    <span key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                      <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                  ))}
                </div>
                <p className="t-small text-body">One partner across every sector you need</p>
              </div>
              <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
                Start a conversation
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
