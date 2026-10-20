import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { Rule } from "@/components/ui";
import { media } from "@/lib/media";

const points = [
  { t: "Customized delivery slot", d: "Tailor delivery times to match your production needs, ensuring a seamless supply chain." },
  { t: "Flexible subscription", d: "Choose the right plan for your business, with the ability to adjust as your needs evolve." },
  { t: "Real-time order tracking", d: "Stay informed with real-time tracking, so you always know when your supplies will arrive." },
];

export function Solution() {
  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-site">
        <div className="relative flex min-h-[600px] items-end overflow-hidden rounded-[40px] p-6 md:p-10">
          <Image src={media.solutionRack} alt="" fill sizes="100vw" className="object-cover" />
          <div className="relative w-full max-w-[522px] rounded-card bg-white/85 p-6 backdrop-blur-[7.5px]">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="caption-dot" aria-hidden="true" />
                  <p className="caption text-body">Key solutions</p>
                </div>
                <h3 className="t-h3b">Optimizing your<br />business operations</h3>
                <Rule />
              </div>
              <div className="flex flex-col gap-14">
                {points.map((p) => (
                  <div key={p.t} className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                    <h4 className="t-h5 lg:w-1/3">{p.t}</h4>
                    <p className="t-small text-body lg:w-1/2">{p.d}</p>
                  </div>
                ))}
              </div>
              <ButtonLink href="/services" size="lg" withArrow className="w-fit">Subscribe Now</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
