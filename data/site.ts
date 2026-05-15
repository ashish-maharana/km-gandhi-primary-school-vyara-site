import type { NavItem, SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "શ્રી ખુશાલદાસ મકનદાસ ગાંધી પ્રાથમિક શાળા",
  shortName: "શ્રી ખુશાલદાસ મકનદાસ ગાંધી પ્રાથમિક શાળા",
  location: "વ્યારા, તાપી, ગુજરાત",
  email: "admissions@kmgandhischoolvyara.in",
  phones: ["+91 98765 43210", "+91 02626 000000"],
  address: "વ્યારા, તાપી, ગુજરાત - 394650",
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
  { label: "મુખ્ય પૃષ્ઠ", href: "/" },
  { label: "અમારા વિશે", href: "/about" },
  { label: "અભ્યાસક્રમ", href: "/academics" },
  { label: "પ્રવૃત્તિઓ", href: "/activities" },
  { label: "AI લર્નિંગ", href: "/ai-learning" },
  { label: "એડમિશન", href: "/admissions" },
  { label: "સંપર્ક", href: "/contact" },
];

export const footerLinks = {
  quick: navigation,
  admissions: [
    { label: "એડમિશન પ્રક્રિયા", href: "/admissions#process" },
    { label: "દસ્તાવેજો", href: "/admissions#documents" },
    { label: "FAQ", href: "/admissions#faq" },
  ],
};

export const socialLinks = [
  { platform: "Facebook", url: "https://facebook.com/", ariaLabel: "Facebook પર અમને અનુસરો" },
  { platform: "Instagram", url: "https://instagram.com/", ariaLabel: "Instagram પર અમને અનુસરો" },
  { platform: "YouTube", url: "https://youtube.com/", ariaLabel: "YouTube પર અમને જુઓ" },
] as const;

