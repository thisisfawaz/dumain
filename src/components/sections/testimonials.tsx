import { ReviewCard } from "@/components/cards";
import { Rule } from "@/components/ui";
import { media } from "@/lib/media";

const reviews = [
  { quote: "The 24/7 support has been invaluable in resolving issues quickly.", name: "David L", role: "Purchase Head, ABC Industries", rating: "4.5/5", avatar: media.reviewer1 },
  { quote: "Dumain Group's timely delivery and high-quality work have significantly improved our operations, saving us time and reducing costs.", name: "Nandha Sai", role: "COO, XYZ Solution", rating: "4.8/5", avatar: media.reviewer2 },
  { quote: "Our production has become more efficient with their reliable supply. We've noticed considerable savings and improved scheduling.", name: "Darwin N", role: "CMO, III Supply", rating: "4.9/5", avatar: media.reviewer3 },
  { quote: "Excellent service with dependable delivery and cost savings. Their work is always of high quality, helping us stay on track.", name: "Carles White", role: "Manager, MNO Industries", rating: "5/5", avatar: media.reviewer4 },
  { quote: "Switching to their service has streamlined our supply chain, cutting costs and ensuring timely delivery. A game changer for our business.", name: "Lisa P", role: "COO, PO Solution", rating: "4.7/5", avatar: media.reviewer5 },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-site flex flex-col gap-12">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <span className="caption-dot" aria-hidden="true" />
            <p className="caption text-body">Real Stories, Real Success</p>
          </div>
          <h3 className="t-h3b">Authentic feedback from<br />our valued clients</h3>
          <Rule />
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:px-0">
          {reviews.map((r) => (
            <div key={r.name} className="w-[300px] shrink-0 snap-start md:w-[360px] lg:w-[420px]">
              <ReviewCard {...r} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
