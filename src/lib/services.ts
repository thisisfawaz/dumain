export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "real-estate-construction",
    title: "Real Estate and Construction",
    summary:
      "From land acquisition to the final finishing touch: property development, estate management, and building materials supply.",
    items: [
      "Property development",
      "Estate management",
      "Building construction",
      "Architectural and structural design",
      "Interior decoration",
      "Quantity surveying",
      "Property valuation",
      "Estate agency and auctioneering",
      "Building materials manufacturing and supply",
    ],
  },
  {
    slug: "logistics-transportation",
    title: "Logistics and Transportation",
    summary:
      "Reliable, cost-effective movement of goods across Nigeria by road, rail, and water.",
    items: [
      "Haulage and transportation",
      "Logistics management",
      "Project management",
      "Cargo handling",
      "Ship-to-ship cargo transfer",
      "Freight forwarding",
      "Warehousing and storage",
      "Distribution services",
      "Fleet management",
    ],
  },
  {
    slug: "investment-trading-business-support",
    title: "Investment, Trading, and Business Support",
    summary:
      "Capital, trade connections, and advisory support that help Nigerian businesses grow.",
    items: [
      "Investment services",
      "General contracting",
      "Import and export",
      "Trading and marketing",
      "Supplies and distribution",
      "Commission agency",
      "Manufacturer's representation",
      "General merchandise",
      "Business consulting",
    ],
  },
  {
    slug: "technology-construction",
    title: "Technology and Construction",
    summary:
      "Modern construction capability combined with technology integration for resilient infrastructure.",
    items: [
      "Building and civil construction",
      "General contracting",
      "Import and export",
      "Trading and distribution",
      "Construction design",
      "Repairs and alterations",
      "Demolition services",
      "Public utility construction",
      "Technology integration",
    ],
  },
  {
    slug: "facility-management",
    title: "Facility Management",
    summary:
      "Comprehensive property care that keeps your buildings safe, clean, and efficient around the clock.",
    items: [
      "Property management",
      "Maintenance services",
      "Cleaning and janitorial services",
      "Security services",
      "Landscaping and grounds maintenance",
      "Utility management",
      "Space planning",
      "Health and safety compliance",
      "Vendor management",
      "Budgeting and financial management",
    ],
  },
  {
    slug: "community-development",
    title: "Community Development",
    summary:
      "Philanthropic programs delivered through the Joseph Ainoje Development Foundation.",
    items: [
      "Poverty alleviation programs",
      "Food security and nutrition",
      "Health and well-being programs",
      "Quality education support",
      "Women's empowerment schemes",
    ],
  },
];
