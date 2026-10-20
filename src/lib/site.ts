export const siteConfig = {
  name: "Dumain Group",
  tagline: "Building Nigeria's Future, One Solution at a Time",
  description:
    "Dumain Group is a diversified Nigerian conglomerate delivering excellence across real estate, logistics, technology, business solutions, facility management, and community development.",
  url: "https://dumaingroup.com",
  email: "dumainops@gmail.com",
  phone: "08065307988",
  phoneHref: "tel:+2348065307988",
  address: "Plot 479, Olive Close, MAB Global Estate, Gwarimpa, Abuja, FCT, Nigeria",
} as const;

export const foundationContact = {
  email: "foundation@dumaingroup.com",
  phone: "08065307988",
  phoneHref: "tel:+2348065307988",
  address: "Plot 479, Olive Close, MAB Global Estate, Gwarimpa, Abuja, FCT, Nigeria",
} as const;

export const businessHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Twitter / X", href: "https://x.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Companies", href: "/companies" },
  { label: "Services", href: "/services" },
  { label: "Foundation", href: "/foundation" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const coreValues = [
  { title: "Integrity", body: "We do what is right, even when no one is watching. Our word is our bond." },
  { title: "Excellence", body: "Good enough is never enough. We strive for the highest standards in everything we do." },
  { title: "Innovation", body: "We embrace change and use technology to solve problems smarter and faster." },
  { title: "Synergy", body: "We are stronger together. Our companies collaborate to deliver integrated solutions." },
  { title: "Community", body: "We measure our success not just by profits, but by the positive impact we have on people's lives." },
  { title: "Sustainability", body: "We build for the long term, ensuring our projects and practices protect the environment for future generations." },
] as const;

export const coreValuesShort = [
  "Excellence in every project",
  "Innovation in every solution",
  "Integrity in every relationship",
  "Impact in every community",
] as const;
