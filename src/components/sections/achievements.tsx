import { StatBarCard } from "@/components/cards";
import { Rule } from "@/components/ui";

export function Achievements() {
  return (
    <section className="bg-cream pb-20 md:pb-28">
      <div className="container-site flex flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-8 lg:w-[36%]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="caption-dot" aria-hidden="true" />
              <p className="caption text-body">Achievements at a glance</p>
            </div>
            <h3 className="t-h3b">Our edge in excellence</h3>
          </div>
          <p className="t-h4 text-body">With decades of industry experience, a diverse range of services, and a dedicated team, we deliver exceptional quality.</p>
          <Rule />
        </div>

        <div className="flex flex-col gap-5 lg:w-[60%] lg:flex-row lg:items-center lg:gap-8">
          <div className="lg:w-1/2">
            <StatBarCard value="250+" label="Subscribers" sub="Trust Us" />
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2">
            <StatBarCard value="62+" label="Services" sub="high-quality" />
            <StatBarCard value="25+" label="Years" sub="Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
