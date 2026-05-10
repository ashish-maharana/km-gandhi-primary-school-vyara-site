import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Activities | K.M. Gandhi Primary School", description: "Activities, sports, culture, and student confidence at K.M. Gandhi Primary School.", path: "/activities" });
const cards = [["Sports and Playground", placeholderAssets.playground], ["Assembly and Events", placeholderAssets.assembly], ["Reading Moments", placeholderAssets.study]];
export default function ActivitiesPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "Activities", title: "Small Actions. Lasting Confidence.", description: "Activities help students speak, play, collaborate, celebrate, and grow beyond textbook learning.", imageSrc: placeholderAssets.playground, imageAlt: "Placeholder playground", primaryCta: { label: "Admissions", href: "/admissions" }, secondaryCta: { label: "Contact", href: "/contact" } }} />
    <section className="section-pad"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="eyebrow">Student Life</p><h1 className="editorial-title mt-4">Play, perform, read, and participate.</h1></div><p className="text-sm font-semibold leading-7 text-[var(--muted)]">Use real campus images later. For now, every visual is a placeholder and every activity claim is kept general until confirmed.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{cards.map(([title,img])=><article className="image-card" key={title}><Image src={img} alt={`Placeholder ${title}`} fill className="object-cover" /><div className="image-card-content"><h3 className="text-2xl font-black text-white">{title}</h3><p className="mt-2 text-sm font-semibold text-white/78">Student participation that builds confidence and belonging.</p></div></article>)}</div></section>
    <section className="gold-band section-pad"><div className="grid gap-5 md:grid-cols-3">{["Teamwork", "Discipline", "Expression"].map((x)=><div className="paper-card bg-white/34" key={x}><h3 className="text-3xl font-black">{x}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">A simple student-life outcome supported by school events and classroom routines.</p></div>)}</div></section>
    <section className="section-tight grid grid-cols-2 gap-4 md:grid-cols-4">{placeholderAssets.gallery.map((img,i)=><Image key={img} src={img} alt={`Placeholder gallery ${i+1}`} width={520} height={520} className="aspect-square rounded-xl object-cover" />)}</section>
    <CTASection variant="gandhi-ref" title="See how students grow through participation." description="Activities content can be expanded once annual events and sports details are verified." primary={{ label: "Contact School", href: "/contact" }} secondary={{ label: "About", href: "/about" }} />
  </>;
}

