import Image from "next/image";
import { Rule } from "@/components/ui";
import { media } from "@/lib/media";

export function Advantages() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-site flex flex-col gap-12">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">Benefits You&rsquo;ll Gain</p>
          </div>
          <h3 className="t-h3b">Unlock exclusive advantages</h3>
          <p className="t-h4 max-w-2xl text-body">Dumain Group provides flexible, cost-effective solutions for all your needs, ensuring consistent quality and dedicated support.</p>
          <Rule />
        </div>

        <div className="grid gap-5 lg:h-[600px] lg:grid-cols-6 lg:grid-rows-3">
          <div className="relative overflow-hidden rounded-card bg-deep p-8 lg:col-span-2 lg:row-span-3">
            <div className="relative z-10 flex flex-col gap-4">
              <h3 className="t-h3 text-white">Fast delivery</h3>
              <p className="t-small text-mist">Rely on swift, reliable delivery that guarantees no interruptions in service.</p>
            </div>
            <div className="absolute inset-0">
              <Image src={media.advantageFast} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/45" />
          </div>

          <div className="relative overflow-hidden rounded-card p-8 lg:col-span-2 lg:row-span-2">
            <Image src={media.advantageSupport} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover object-[50%_64%]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/85" />
            <div className="relative flex h-full flex-col justify-start">
              <h4 className="t-h5 text-white">Experience reliable support that keeps your business running smoothly, day and night.</h4>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-card bg-white p-8 lg:col-span-2">
            <div className="relative z-10">
              <h3 className="t-h3">Customized<br />solutions</h3>
            </div>
            <div className="absolute inset-0 opacity-40">
              <Image src={media.advantageCustom} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/25" />
          </div>

          <div className="relative overflow-hidden rounded-card lg:col-span-2 lg:row-span-2">
            <Image src={media.advantageIndustry} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover object-top" />
          </div>

          <div className="relative overflow-hidden rounded-card bg-accent p-6 lg:col-span-2">
            <div className="relative z-10 flex h-full flex-col justify-end">
              <p className="t-small text-white">Guaranteed consistency for uninterrupted operations.</p>
            </div>
            <div className="absolute -bottom-14 -left-40 right-[-93px] h-[343px] opacity-20 mix-blend-screen">
              <Image src={media.advantageConsistency} alt="" fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/35" />
          </div>
        </div>
      </div>
    </section>
  );
}
