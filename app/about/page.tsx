import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "About | K.M. Gandhi Primary School", description: "About K.M. Gandhi Primary School, Vyara, established 1964.", path: "/about" });

export default function AboutPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "About The School", title: "A Trusted Vyara School Story.", description: "Established in 1964, K.M. Gandhi Primary School is publicly listed as a Gujarati-medium, co-educational, private unaided school in urban Vyara.", imageSrc: placeholderAssets.classroom, imageAlt: "Placeholder classroom", primaryCta: { label: "Academics", href: "/academics" }, secondaryCta: { label: "Contact", href: "/contact" } }} />
    <section className="section-pad grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <div><p className="eyebrow">Heritage</p><h1 className="editorial-title mt-4">Rooted in 1964. Built for everyday learning.</h1></div>
      <div className="space-y-6 text-lg font-semibold leading-9 text-[var(--muted)]"><p>The website presents a careful public baseline: Gujarati medium, co-educational learning, urban Vyara location, and primary with upper-primary positioning.</p><p>Principal, official contacts, class range, and facility counts should be confirmed before final launch. Until then, the site uses honest placeholders and editable content blocks.</p></div>
    </section>
    <section className="section-tight grid gap-5 md:grid-cols-4">{[["Gujarati", "Medium"], ["Co-Ed", "Type"], ["1964", "Established"], ["Vyara", "Location"]].map(([a,b]) => <div className="paper-card" key={b}><p className="text-4xl font-black">{a}</p><p className="mt-2 text-xs font-bold text-[var(--muted)]">{b}</p></div>)}</section>
    <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center"><Image src={placeholderAssets.values} alt="Placeholder values" width={760} height={560} className="rounded-xl" /><div><p className="eyebrow">Values</p><h2 className="editorial-title mt-4">Simplicity, discipline, confidence, community.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Respect", "Good Habits", "Language Clarity", "Participation"].map((x) => <div className="paper-card" key={x}><h3 className="text-2xl font-black">{x}</h3><p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">A school value translated into everyday classroom behavior and student growth.</p></div>)}</div></div></section>
    <CTASection variant="gandhi-ref" title="Visit, ask, and confirm the details." description="Use this site as a premium school-facing draft while final official details are collected from management." primary={{ label: "Contact School", href: "/contact" }} secondary={{ label: "Admissions", href: "/admissions" }} />
  </>;
}

