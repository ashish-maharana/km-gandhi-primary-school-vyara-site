import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "સંપર્ક | K.M. Gandhi Primary School", description: "K.M. Gandhi Primary School, વ્યારા (તાપી, ગુજરાત) માટે સંપર્ક માહિતી અને પૂછપરછ.", path: "/contact" });
export default function ContactPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "સંપર્ક", title: "મુલાકાત કરો, પૂછો, પુષ્ટિ કરો.", description: "એડમિશન માર્ગદર્શન, ક્લાસ ઉપલબ્ધતા, મુલાકાત સમય અને અધિકૃત માહિતી માટે શાળા કચેરીનો સંપર્ક કરો.", imageSrc: placeholderAssets.contact, imageAlt: "પ્લેસહોલ્ડર: શાળાનો બહારનો દ્રશ્ય", primaryCta: { label: "એડમિશન પૂછપરછ", href: "/admissions" }, secondaryCta: { label: "અભ્યાસક્રમ", href: "/academics" } }} />
    <section className="section-pad grid gap-5 md:grid-cols-3"><article className="paper-card"><MapPin /><h2 className="mt-4 text-2xl font-black">સરનામું</h2><p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">{site.address}</p></article><article className="paper-card"><Phone /><h2 className="mt-4 text-2xl font-black">ફોન</h2>{site.phones.map((p)=><p className="mt-2 text-sm font-semibold text-[var(--muted)]" key={p}>{p}</p>)}</article><article className="paper-card"><Mail /><h2 className="mt-4 text-2xl font-black">ઇમેઇલ</h2><p className="mt-2 text-sm font-semibold text-[var(--muted)]">{site.email}</p></article></section>
    <section className="section-tight grid gap-8 lg:grid-cols-[1.05fr_.95fr]"><article className="paper-card"><p className="eyebrow">વિનંતી ફોર્મ</p><h2 className="editorial-title mt-4">સંદેશ મોકલો.</h2><form className="mt-8 grid gap-4" action="#"><input className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="વાલીનું નામ" /><input className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="ફોન નંબર" /><input className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="ઇમેઇલ" /><textarea className="min-h-32 rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="સંદેશ" /><button type="button" className="btn-primary w-fit">વિનંતી મોકલો</button></form></article><div className="space-y-5"><Image src={placeholderAssets.contact} alt="પ્લેસહોલ્ડર: નકશો દ્રશ્ય" width={760} height={460} className="rounded-xl" /><article className="paper-card"><h3 className="text-2xl font-black">મુલાકાત સમય</h3><p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">સોમવારથી શનિવાર, કચેરી સમય પુષ્ટિ બાકી. મુલાકાત પહેલાં કૃપા કરી કોલ કરો.</p></article></div></section>
    <CTASection variant="gandhi-ref" title="મુલાકાત પહેલાં વિગતો પુષ્ટિ કરો." description="ફોન, ઇમેઇલ અને સમય જેવી વિગતો અધિકૃત માહિતી મળ્યા સુધી સંપાદિત કરી શકાય તેવા પ્લેસહોલ્ડર છે." primary={{ label: "એડમિશન", href: "/admissions" }} secondary={{ label: "મુખ્ય પૃષ્ઠ", href: "/" }} />
  </>;
}

