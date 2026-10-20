import Image from "next/image";
import { Rule } from "@/components/ui";
import { media } from "@/lib/media";

export function WhyUs() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-site flex flex-col gap-12">
        <div data-reveal className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">The Dumain Advantage</p>
          </div>
          <h2 className="t-h3b text-navy">Leading the Way in Multi-Sector Solutions</h2>
          <p className="t-h4 max-w-2xl text-body">Explore the key reasons businesses choose us as their partner.</p>
          <Rule />
        </div>

        <div className="grid gap-5 lg:h-[600px] lg:grid-cols-3 lg:grid-rows-2">
          <div className="flex flex-col gap-5 lg:row-span-2">
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-card">
              <Image src={media.whyTubes} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover" />
            </div>
            <div className="flex flex-col gap-16 rounded-card bg-mist p-6">
              <h3 className="t-h3">300+<br />Deliveries</h3>
              <p className="t-small text-body">Join countless satisfied customers who&rsquo;ve relied on our consistent, expert delivery.</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-card p-6 lg:row-span-2">
            <Image src={media.whyThumbs} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover object-[50%_35%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/85" />
            <div className="relative flex h-full flex-col justify-between">
              <h3 className="t-h3 text-white">98.3%<br />On-time rate</h3>
              <p className="t-small text-white">You can rely on us to keep your operations running smoothly without delays.</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:row-span-2">
            <div className="flex flex-col gap-16 rounded-card bg-beige p-6">
              <p className="t-small text-body">Our unwavering quality ensures you receive top-standard work, always meeting your expectations.</p>
              <h3 className="t-h3">99.8%<br />Quality standard</h3>
            </div>
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-card">
              <Image src={media.whyPurity} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
