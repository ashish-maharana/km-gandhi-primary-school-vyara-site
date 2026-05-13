import { placeholderAssets } from "@/data/placeholders";
import type { HeroContent } from "@/lib/types";

// Content verification checklist:
// - Confirm official admission desk timings, phone numbers, and map pin.
export const contactHero: HeroContent = {
  eyebrow: "સંપર્ક | K.M. Gandhi Primary School",
  title: "મુલાકાત કરો, પૂછો, પુષ્ટિ કરો.",
  description: "એડમિશન માર્ગદર્શન અને અધિકૃત શાળા માહિતી માટે શાળા કચેરીનો સંપર્ક કરો.",
  imageSrc: placeholderAssets.contact,
  imageAlt: "પ્લેસહોલ્ડર: શાળા સંપર્ક દ્રશ્ય",
  primaryCta: { label: "એડમિશન", href: "/admissions" },
  secondaryCta: { label: "મુખ્ય પૃષ્ઠ", href: "/" },
};
export const officeHours = ["કચેરી સમય પુષ્ટિ બાકી", "મુલાકાત પહેલાં કૃપા કરી કોલ કરો"];
