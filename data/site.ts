import type { NavItem, SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "K.M. Gandhi Primary School",
  shortName: "K.M. Gandhi",
  location: "Vyara, Tapi, Gujarat",
  email: "admissions@kmgandhischoolvyara.in",
  phones: ["+91 98765 43210", "+91 02626 000000"],
  address: "Vyara, Tapi, Gujarat - 394650",
  brand: {
    palette: {
      bg: "#F7F2E8",
      ink: "#14110F",
      primary: "#211B1D",
      accent: "#F8C400",
      support: "#6C7A55",
      highlight: "#D8C99D",
    },
    motif: "default",
    buttonStyle: "arched",
    sectionSpacing: "airy",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quick: navigation,
  admissions: [
    { label: "Admission Process", href: "/admissions#process" },
    { label: "Documents", href: "/admissions#documents" },
    { label: "FAQ", href: "/admissions#faq" },
  ],
};

export const socialLinks = [
  { platform: "Facebook", url: "https://facebook.com/", ariaLabel: "Follow us on Facebook" },
  { platform: "Instagram", url: "https://instagram.com/", ariaLabel: "Follow us on Instagram" },
  { platform: "YouTube", url: "https://youtube.com/", ariaLabel: "Follow us on YouTube" },
] as const;

