export const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
export const business = {
  name: "Ilford Electricians",
  phone: "020 8719 0078",
  phoneHref: "tel:+442087190078",
  email: "info@ilford-electricians.co.uk",
  address: "17 St Lukes Avenue, Ilford, IG1 2JA",
  source: "https://ilford-electricians.co.uk/",
};
export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Areas Covered", href: "#areas" },
  { label: "Contact", href: "#contact" },
];
export const services = [
  {
    icon: "repairs",
    title: "Electrical Repairs",
    text: "From troublesome sockets to electrical faults, discuss the repairs your home or business needs.",
  },
  {
    icon: "testing",
    title: "Testing & Inspections",
    text: "Understand the condition of your electrics with electrical inspection and testing services.",
  },
  {
    icon: "lighting",
    title: "Lighting Installations",
    text: "Thoughtful lighting design and installation to bring your rooms and working spaces to life.",
  },
  {
    icon: "security",
    title: "Alarm & Security Systems",
    text: "Explore alarm and security options to suit your property and the way you use it.",
  },
  {
    icon: "home",
    title: "Domestic Electrical Work",
    text: "Electrical installations, repairs and maintenance for the place you call home.",
  },
  {
    icon: "commercial",
    title: "Commercial Electrical Work",
    text: "Electrical support for offices, shops and other commercial premises across Ilford.",
  },
] as const;
export const gallery = [
  {
    src: "/images/lighting.jpg",
    alt: "Illustrative contemporary kitchen with pendant lighting",
    title: "A brighter living space",
    category: "LIGHTING INSPIRATION",
  },
  {
    src: "/images/hero.webp",
    alt: "AI-generated electrician beside a domestic consumer unit",
    title: "Every detail considered",
    category: "DOMESTIC ELECTRICS",
  },
  {
    src: "/images/commercial.jpg",
    alt: "Illustrative modern workspace with overhead lighting",
    title: "Powering the working day",
    category: "COMMERCIAL SPACES",
  },
];
export const faqs = [
  {
    question: "What electrical work can I enquire about?",
    answer:
      "The existing business website lists electrical services and repairs, inspection and testing, lighting design and installation, and alarm and security systems for domestic and commercial customers. Contact the business to confirm your specific requirements.",
  },
  {
    question: "How do I request a quotation?",
    answer:
      "Call 020 8719 0078 or email info@ilford-electricians.co.uk with your postcode and a description of the work. The business can confirm what information or visit is needed before quoting. The form on this concept website is a demonstration only.",
  },
  {
    question: "Do you cover my area?",
    answer:
      "The existing website states Ilford and surrounding areas. Nearby locations shown here are examples, not a confirmed coverage list. Contact the business with your postcode to check availability.",
  },
  {
    question: "Can I enquire about work at a business property?",
    answer:
      "Yes. The existing website describes work for domestic and commercial customers, including offices and shops. Discuss access, the scope of the work and any scheduling needs directly with the business.",
  },
  {
    question: "Will this form send my details to the business?",
    answer:
      "No. This is an independent redesign concept. The demo form validates your entries in your browser, but does not send or save them. Use the telephone or email links to contact the actual business.",
  },
];
