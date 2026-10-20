"use client";

import Image from "next/image";
import { useState } from "react";
import { industries } from "@/lib/industries";
import { companyImages } from "@/lib/media";
import {
  BuildingIcon,
  TruckIcon,
  BriefcaseIcon,
  CpuIcon,
  WrenchIcon,
  HeartIcon,
} from "@/components/icons";

const iconMap = {
  building: BuildingIcon,
  truck: TruckIcon,
  briefcase: BriefcaseIcon,
  cpu: CpuIcon,
  wrench: WrenchIcon,
  heart: HeartIcon,
} as const;

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="relative isolate min-h-screen overflow-hidden bg-navy">
      {/* Full-screen background image — crossfades on hover */}
      {industries.map((ind, i) => {
        const src = companyImages[ind.companySlug];
        if (!src) return null;
        return (
          <Image
            key={ind.slug}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}

      {/* Scrim for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/40 to-navy/70"
      />

      {/* Bordered overlay panel */}
      <div className="relative flex min-h-screen items-center justify-center px-5 py-24 md:px-10 lg:px-16">
        <div className="w-full max-w-site overflow-hidden rounded-[24px] border-[24px] border-[#F2F2F0]">
          <div className="grid gap-0 lg:grid-cols-[3fr_2fr]">
            {/* Left: empty open space */}
            <div aria-hidden="true" className="hidden lg:block" />

            {/* Right: headline + sector list */}
            <div className="flex flex-col gap-6 bg-[#F2F2F0] p-5 md:p-7 lg:p-8">
              <div className="flex items-center gap-3">
                <span className="caption-dot" aria-hidden="true" />
                <h3 className="t-h3 text-navy">Sectors we support</h3>
              </div>

              <ul className="flex flex-col">
                {industries.map((ind, i) => {
                  const Icon = iconMap[ind.icon];
                  const isActive = i === active;

                  return (
                    <li key={ind.slug}>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        aria-pressed={isActive}
                        className={`flex w-full items-center gap-4 border-b border-navy/10 py-4 text-left transition-colors duration-300 ${
                          isActive ? "text-navy" : "text-navy/55 hover:text-navy/80"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                            isActive ? "bg-primary text-white" : "bg-navy/5 text-navy/60"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>

                        <span className="flex flex-1 flex-col gap-1">
                          <span className="t-h5">{ind.name}</span>
                          <span
                            className={`t-small transition-all duration-300 ${
                              isActive
                                ? "max-h-8 text-navy/70 opacity-100"
                                : "max-h-0 overflow-hidden opacity-0"
                            }`}
                          >
                            {ind.blurb}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
