export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  companySlug: string;
  icon: "building" | "truck" | "briefcase" | "cpu" | "wrench" | "heart";
};

export const industries: Industry[] = [
  {
    slug: "real-estate",
    name: "Real Estate",
    blurb: "Building dreams, creating legacies",
    companySlug: "property-real-estate",
    icon: "building",
  },
  {
    slug: "logistics",
    name: "Logistics",
    blurb: "Moving Nigeria forward",
    companySlug: "logistics-allied-services",
    icon: "truck",
  },
  {
    slug: "business",
    name: "Business",
    blurb: "Your partner for growth",
    companySlug: "business-solutions",
    icon: "briefcase",
  },
  {
    slug: "technology",
    name: "Technology",
    blurb: "Building the future",
    companySlug: "technologies-allied-services",
    icon: "cpu",
  },
  {
    slug: "facilities",
    name: "Facilities",
    blurb: "Managing facilities, enhancing lives",
    companySlug: "facility-management",
    icon: "wrench",
  },
  {
    slug: "community",
    name: "Community",
    blurb: "Transforming communities",
    companySlug: "foundation",
    icon: "heart",
  },
];
