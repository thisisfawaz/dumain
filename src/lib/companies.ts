export type Company = {
  slug: string;
  name: string;
  shortName: string;
  sector: string;
  tagline: string;
  shortDescription: string;
  description: string;
  services: { title: string; body: string }[];
  reasons: string[];
};

export const companies: Company[] = [
  {
    slug: "property-real-estate",
    name: "Dumain Property and Real Estate Development Limited",
    shortName: "Dumain Property",
    sector: "Real Estate & Construction",
    tagline: "Building Dreams, Creating Legacies",
    shortDescription:
      "Building dreams, creating legacies through premium property development and management.",
    description:
      "Dumain Property and Real Estate Development Limited is your trusted partner for all things real estate. From concept to completion, we deliver projects that stand the test of time.",
    services: [
      { title: "Property Development", body: "We identify prime locations and develop residential, commercial, and mixed-use properties that meet the highest standards of quality and design." },
      { title: "Estate Management", body: "We manage estates and residential communities, ensuring they remain safe, clean, and well-maintained for residents." },
      { title: "Building Construction", body: "Our construction team handles everything from foundation to finishing, delivering durable and beautiful structures." },
      { title: "Architectural Design", body: "Our architects create functional and aesthetically pleasing designs that maximize space and value." },
      { title: "Structural Design", body: "We provide structural engineering services to ensure every building is safe and sound." },
      { title: "Interior Decoration", body: "We transform spaces into beautiful, functional environments that reflect your personality and needs." },
      { title: "Quantity Surveying", body: "We provide accurate cost estimates and project management to keep your project on budget." },
      { title: "Property Valuation", body: "We offer professional valuation services for buying, selling, and investment purposes." },
      { title: "General Contracts", body: "We handle all types of construction and renovation contracts, big or small." },
      { title: "Building Materials", body: "We manufacture and supply high-quality building materials including bricks, tiles, pipes, and pottery." },
      { title: "Estate Agency", body: "We connect buyers with their dream properties and help sellers get the best value." },
      { title: "Auctioneering", body: "We provide professional auction services for properties and assets." },
    ],
    reasons: [
      "End-to-end solutions from land acquisition to property management",
      "Commitment to quality and durability",
      "Transparent pricing and ethical practices",
      "Experienced team of professionals",
      "Timely project delivery",
    ],
  },
  {
    slug: "logistics-allied-services",
    name: "Dumain Logistics and Allied Services Limited",
    shortName: "Dumain Logistics",
    sector: "Logistics & Transportation",
    tagline: "Moving Nigeria Forward",
    shortDescription:
      "Moving Nigeria forward with reliable haulage, cargo handling, and supply chain solutions.",
    description:
      "In today's fast-paced economy, efficient logistics can make or break a business. Dumain Logistics and Allied Services Limited provides reliable, cost-effective transportation and logistics solutions that keep your business moving.",
    services: [
      { title: "Haulage and Transportation", body: "We move goods safely and efficiently across Nigeria by road, rail, and water. Our fleet is well-maintained and our drivers are experienced professionals." },
      { title: "Logistics Management", body: "We provide end-to-end logistics solutions, from warehousing to last-mile delivery, optimizing your supply chain for speed and cost." },
      { title: "Project Management", body: "We manage complex logistics projects, coordinating multiple stakeholders to ensure seamless execution." },
      { title: "Cargo Handling", body: "We handle cargo of all sizes, ensuring it is loaded, transported, and unloaded safely and efficiently." },
      { title: "Ship-to-Ship Cargo Transfer", body: "We provide specialized services for transferring cargo between vessels, ensuring smooth operations at ports and offshore locations." },
      { title: "Freight Forwarding", body: "We coordinate the movement of goods across borders, handling customs clearance and documentation." },
      { title: "Warehousing and Storage", body: "We provide secure, well-managed warehouse facilities for short-term and long-term storage needs." },
      { title: "Distribution Services", body: "We distribute goods to retailers, wholesalers, and end consumers, ensuring timely delivery." },
      { title: "Fleet Management", body: "We manage vehicle fleets for businesses, ensuring optimal performance and cost efficiency." },
      { title: "General Contracts", body: "We handle all types of logistics contracts, tailored to your specific needs." },
    ],
    reasons: [
      "Modern fleet and equipment",
      "Experienced and professional team",
      "Real-time tracking and communication",
      "Competitive pricing",
      "Nationwide coverage",
      "Commitment to safety and reliability",
    ],
  },
  {
    slug: "business-solutions",
    name: "Dumain Business Solutions Limited",
    shortName: "Dumain Business Solutions",
    sector: "Investment, Trading & General Merchandise",
    tagline: "Your Partner for Growth",
    shortDescription:
      "Your partner for growth in investment, trading, and business support services.",
    description:
      "Dumain Business Solutions Limited is a versatile company that provides investment, trading, and business support services. We help businesses grow, connect buyers and sellers, and create opportunities for wealth creation.",
    services: [
      { title: "Investment Services", body: "We identify and invest in promising businesses and projects, providing capital and strategic support for growth." },
      { title: "General Contracting", body: "We handle contracts of all types, from supply to construction, delivering quality and value." },
      { title: "Import and Export", body: "We facilitate international trade, helping businesses source products from abroad and export Nigerian goods to global markets." },
      { title: "Trading and Marketing", body: "We buy, sell, and market a wide range of goods, connecting producers with consumers." },
      { title: "Supplies and Distribution", body: "We supply and distribute general goods, building materials, beverages, and more." },
      { title: "Commission Agency", body: "We act as intermediaries in business transactions, earning commissions for connecting buyers and sellers." },
      { title: "Manufacturer's Representation", body: "We represent manufacturers, helping them market and distribute their products in Nigeria." },
      { title: "General Merchandise", body: "We deal in all types of goods, from consumer products to industrial supplies." },
      { title: "Business Consulting", body: "We provide advisory services to help businesses improve operations, enter new markets, and increase profitability." },
    ],
    reasons: [
      "Diverse portfolio of services",
      "Strong network of partners and suppliers",
      "Experienced team with deep market knowledge",
      "Commitment to ethical business practices",
      "Flexible solutions tailored to your needs",
    ],
  },
  {
    slug: "technologies-allied-services",
    name: "Dumain Technologies and Allied Services Limited",
    shortName: "Dumain Technologies",
    sector: "Construction & Technology",
    tagline: "Building the Future with Technology",
    shortDescription:
      "Building the future with innovative construction and technology solutions.",
    description:
      "Dumain Technologies and Allied Services Limited combines construction expertise with technology to deliver innovative solutions for modern infrastructure challenges.",
    services: [
      { title: "Building and Civil Construction", body: "We construct residential, commercial, and industrial buildings, as well as roads, bridges, and other infrastructure." },
      { title: "General Contracting", body: "We handle all types of construction contracts, from design to delivery." },
      { title: "Import and Export", body: "We source and supply construction materials and technology products from around the world." },
      { title: "Trading and Distribution", body: "We trade and distribute construction and building materials of all kinds." },
      { title: "Construction Design", body: "We provide design services for buildings and structures, ensuring they are functional, safe, and aesthetically pleasing." },
      { title: "Repairs and Alterations", body: "We renovate and upgrade existing buildings and structures, extending their lifespan and improving their value." },
      { title: "Demolition Services", body: "We safely and efficiently demolish buildings and structures, preparing sites for new development." },
      { title: "Public Utility Construction", body: "We construct schools, hospitals, and other public facilities that serve communities." },
      { title: "Technology Integration", body: "We incorporate modern technology into construction projects, improving efficiency and sustainability." },
      { title: "Building Materials Supply", body: "We supply a wide range of construction and building materials." },
    ],
    reasons: [
      "Blend of construction expertise and technology",
      "Commitment to quality and safety",
      "Experienced team of engineers and builders",
      "Timely project delivery",
      "Competitive pricing",
      "Focus on sustainable construction practices",
    ],
  },
  {
    slug: "facility-management",
    name: "Dumain Facility Management Limited",
    shortName: "Dumain Facility Management",
    sector: "Facility Management",
    tagline: "Managing Facilities, Enhancing Lives",
    shortDescription:
      "Managing facilities, enhancing lives through comprehensive property care.",
    description:
      "Dumain Facility Management Limited provides comprehensive facility management services that ensure your property operates smoothly, safely, and efficiently.",
    services: [
      { title: "Property Management", body: "We manage residential, commercial, and industrial properties, handling everything from maintenance to tenant relations." },
      { title: "Maintenance Services", body: "We provide routine and emergency maintenance for buildings, equipment, and infrastructure." },
      { title: "Cleaning and Janitorial Services", body: "We keep your facilities clean, hygienic, and presentable." },
      { title: "Security Services", body: "We provide trained security personnel to protect your property and people." },
      { title: "Landscaping and Grounds Maintenance", body: "We maintain gardens, lawns, and outdoor spaces, keeping them beautiful and functional." },
      { title: "Utility Management", body: "We manage water, electricity, and other utilities, ensuring efficient use and cost control." },
      { title: "Space Planning", body: "We help you optimize your space for functionality and comfort." },
      { title: "Health and Safety Compliance", body: "We ensure your facility meets all health and safety regulations." },
      { title: "Vendor Management", body: "We coordinate with contractors and vendors to ensure quality service delivery." },
      { title: "Budgeting and Financial Management", body: "We manage facility budgets, ensuring cost-effective operations." },
    ],
    reasons: [
      "Comprehensive, one-stop facility management solutions",
      "Experienced and trained personnel",
      "Proactive maintenance approach",
      "Commitment to health, safety, and sustainability",
      "Cost-effective solutions",
      "24/7 support",
    ],
  },
  {
    slug: "foundation",
    name: "Joseph Ainoje Development Foundation",
    shortName: "The Foundation",
    sector: "Non-Profit & Community Development",
    tagline: "Transforming Communities, Changing Lives",
    shortDescription:
      "Transforming communities and changing lives through philanthropy and empowerment.",
    description:
      "The Joseph Ainoje Development Foundation is the heartbeat of Dumain Group's commitment to social responsibility. We believe that true success is measured not just by what we achieve, but by what we give back.",
    services: [
      { title: "Poverty Alleviation", body: "We initiate and support programs that help individuals and families escape poverty through skills training, microfinance, and economic empowerment initiatives." },
      { title: "Food Security and Nutrition", body: "We work to eliminate hunger by supporting sustainable agriculture, providing food assistance to vulnerable populations, and promoting healthy nutrition." },
      { title: "Health and Well-Being", body: "We promote good health by supporting maternal and child health programs, organizing health screenings, and improving access to healthcare in underserved communities." },
      { title: "Quality Education", body: "We believe education is the key to breaking the cycle of poverty. We provide scholarships, build and equip schools, and support technical and vocational training." },
      { title: "Women's Empowerment", body: "We initiate welfare schemes that provide economic empowerment opportunities for women, helping them become financially independent and contribute to their communities." },
    ],
    reasons: [
      "Scholarship schemes for indigent students",
      "Vocational training centers",
      "Maternal and child health clinics",
      "Community feeding programs",
      "Women's cooperative societies",
      "Youth mentorship programs",
      "Clean water projects",
      "Health awareness campaigns",
    ],
  },
];

export function getCompany(slug: string): Company | undefined {
  return companies.find((company) => company.slug === slug);
}
