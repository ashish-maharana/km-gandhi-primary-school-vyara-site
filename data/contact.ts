import { placeholderAssets } from "@/data/placeholders";
import type { HeroContent } from "@/lib/types";

// Content verification checklist:
// - Confirm official admission desk timings, phone numbers, and map pin.
export const contactHero: HeroContent = {
  eyebrow: "Contact K.M. Gandhi Primary School",
  title: "Visit, Ask, Confirm.",
  description: "Reach the school office for admission guidance and official school information.",
  imageSrc: placeholderAssets.contact,
  imageAlt: "Placeholder school contact visual",
  primaryCta: { label: "Admissions", href: "/admissions" },
  secondaryCta: { label: "Home", href: "/" },
};
export const officeHours = ["Office timings to be confirmed", "Please call before visiting"];
