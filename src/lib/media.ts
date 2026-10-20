// African, industry-matched stock photography (Unsplash + Pixabay).
// Unsplash URLs use the stable `photo-<id>?w=...&q=80&auto=format&fit=crop` form.
const UNSPLASH = "https://images.unsplash.com";
const PIXABAY = "https://cdn.pixabay.com";

const u = (id: string, w = 1200) => `${UNSPLASH}/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const media = {
  // Hero — African business skyline / professionals
  hero: u("photo-1486406146926-c627a92ad1ab", 1920),

  // Core — modern African office / operations
  coreLab:
    "https://images.pexels.com/photos/29168217/pexels-photo-29168217.jpeg?auto=compress&cs=tinysrgb&w=1200",

  // Industries section background — African city / construction
  industries: u("photo-1449824913935-59a10b8d2000", 1920),

  // Why-us — technology / hands-on work
  whyTubes: u("photo-1518770660439-4636190af475"),
  whyThumbs:
    "https://images.pexels.com/photos/5915200/pexels-photo-5915200.jpeg?auto=compress&cs=tinysrgb&w=1200",
  whyPurity:
    "https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&w=1200",

  // Solution — data / server / IT (African context)
  solutionRack:
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",

  // Process background — logistics / transport
  processBg: u("photo-1519003722824-194d4455a60c", 1920),

  // Advantages
  advantageFast:
    "https://images.pexels.com/photos/6285103/pexels-photo-6285103.jpeg?auto=compress&cs=tinysrgb&w=1200",
  advantageSupport:
    "https://images.pexels.com/photos/5922678/pexels-photo-5922678.jpeg?auto=compress&cs=tinysrgb&w=1200",
  advantageCustom:
    "https://images.pexels.com/photos/6285150/pexels-photo-6285150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  advantageIndustry:
    "https://images.pexels.com/photos/35175022/pexels-photo-35175022.jpeg?auto=compress&cs=tinysrgb&w=1200",
  advantageConsistency: u("photo-1454165804606-c3d57bc86b40"),

  // Misc backgrounds
  pricingBg: u("photo-1554224155-6726b3ff858f"),
  paperScientist: u("photo-1532187863486-abf9dbad1b69"),
  paperTubes: u("photo-1583912267550-d6c2ac3196c0"),
  paperThumbs: u("photo-1576091160399-112ba8d25d1d"),
  footerBg: u("photo-1477959858617-67f85cf4f1df", 1920),
  offer: u("photo-1521737604893-d14cc237f11d"),

  // Avatars / reviewers — African professionals
  avatar1: u("photo-1507003211169-0a1dd7228f2d", 200),
  avatar2: u("photo-1531123897727-8f129e1688ce", 200),
  avatar3: u("photo-1500648767791-00dcc994a43e", 200),
  avatar4: u("photo-1544005313-94ddf0286df2", 200),
  avatar5: u("photo-1534528741775-53994a69daeb", 200),
  avatar6: u("photo-1506794778202-cad84cf45f1d", 200),
  reviewer1: u("photo-1507152832244-10d45c7eda57", 200),
  reviewer2: u("photo-1531384441138-2736e62e0919", 200),
  reviewer3: u("photo-1489980557514-251d61e3eeb6", 200),
  reviewer4: u("photo-1519085360753-af0119f7cbe7", 200),
  reviewer5: u("photo-1508214751196-bcfd4ca60f91", 200),
} as const;

/** Industry-matched hero image for each company stacking card. */
export const companyImages: Record<string, string> = {
  // Real Estate — African modern housing / construction
  "property-real-estate": u("photo-1512917774080-9991f1c4c750", 1400),
  // Logistics — African trucking / freight
  "logistics-allied-services": u("photo-1586528116311-ad8dd3c8310d", 1400),
  // Business Solutions — African business meeting / professionals
  "business-solutions":
    "https://images.pexels.com/photos/12179672/pexels-photo-12179672.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // Technology — African tech workers / coding
  "technologies-allied-services": u("photo-1531482615713-2afd69097998", 1400),
  // Facility Management — facilities / hands-on maintenance
  "facility-management": u("photo-1581578731548-c64695cc6952", 1400),
  // Foundation — African community / volunteers
  foundation:
    "https://images.pexels.com/photos/31659139/pexels-photo-31659139.jpeg?auto=compress&cs=tinysrgb&w=1400",
};
