import Image from "next/image";
import { Rule } from "@/components/ui";
import { media } from "@/lib/media";

export function Core() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-site flex flex-col gap-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex items-center gap-3 lg:w-[30%] lg:pt-2">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">Our Core Thing</p>
          </div>
          <div className="flex flex-col gap-10 lg:w-[60%] lg:ml-auto">
            <h2 className="t-h3 text-navy">
              Our mission is to empower Nigerian businesses with reliable, high-quality multi-sector solutions that keep operations running smoothly, no matter the challenge.
            </h2>
            <Rule />
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="relative h-[230px] w-full overflow-hidden rounded-card lg:w-[30%] lg:self-stretch">
            <Image src={media.coreLab} alt="Dumain Group operations" fill sizes="(max-width: 1023px) 100vw, 340px" className="object-cover" />
          </div>
          <div className="flex flex-col gap-10 lg:w-[60%] lg:ml-auto lg:flex-row lg:gap-11">
            <div className="flex flex-col gap-2">
              <h3 className="t-h5">Reliability</h3>
              <p className="t-small max-w-[253px] text-body">The speedy and dependable delivery of our services ensures your business activities remain persistent.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="t-h5">Quality</h3>
              <p className="t-small max-w-[275px] text-body">We deliver exclusively premium work, conforming to strict industry standards to aid your success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
