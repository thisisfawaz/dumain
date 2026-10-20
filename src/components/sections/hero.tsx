import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { ArrowRightIcon } from "@/components/icons";
import { media } from "@/lib/media";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <Image
        src={media.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[39%_51%] opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"
      />
      <div className="relative container-site flex flex-col gap-16 pb-20 pt-28 md:pb-28 md:pt-32 lg:pb-36 lg:pt-36">
        <div data-reveal className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-3 rounded bg-white/20 p-1 pr-3 backdrop-blur">
            <span className="rounded-sm bg-cream px-3 py-1 text-xs text-primary">Excellence</span>
            <span className="text-xs text-white">Delivered across every sector we serve</span>
          </div>
          <h1 className="t-h1 max-w-3xl text-white">
            Building Nigeria&rsquo;s<br />future with reliable<br />multi-sector solutions
          </h1>
        </div>

        <div data-reveal data-reveal-delay="180" className="flex flex-col gap-6">
          <p className="t-body max-w-[420px] text-white">
            Dumain Group is a diversified conglomerate delivering excellence across real estate, logistics, technology, business solutions, facility management, and community development.
          </p>
          <ButtonLink href="/companies" size="lg" withArrow className="w-fit">
            Explore Our Companies
          </ButtonLink>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[media.avatar1, media.avatar2, media.avatar3, media.avatar4].map((src, i) => (
                <span key={i} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white">
                  <Image src={src} alt="" fill sizes="32px" className="object-cover" />
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <ArrowRightIcon className="h-5 w-5 text-white" />
              <p className="t-small text-white">250+ Satisfied clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
