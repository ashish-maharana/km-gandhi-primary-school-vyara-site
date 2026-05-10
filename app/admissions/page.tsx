import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Admissions | K.M. Gandhi Primary School", description: "Admission inquiry process for K.M. Gandhi Primary School, Vyara.", path: "/admissions" });
const steps = ["Inquiry", "School Visit", "Document Check", "Enrollment Guidance"];
const docs = ["Birth certificate copy", "Previous school record if applicable", "Student photographs", "Parent ID and address proof", "Any required medical information"];
export default function AdmissionsPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "Admissions", title: "A Clear Path for Families.", description: "Start with an inquiry, confirm class availability, visit the school, and complete documents with the office team.", imageSrc: placeholderAssets.values, imageAlt: "Placeholder admissions", primaryCta: { label: "Contact Now", href: "/contact" }, secondaryCta: { label: "Academics", href: "/academics" } }} />
    <section className="section-pad" id="process"><p className="eyebrow">Process</p><h1 className="editorial-title mt-4">Four simple admission steps.</h1><div className="mt-10 grid gap-4 md:grid-cols-4">{steps.map((x,i)=><article className="paper-card" key={x}><p className="text-xs font-black text-[var(--gold-dark)]">0{i+1}</p><h3 className="mt-3 text-2xl font-black">{x}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">Office-guided step. Details should be confirmed before publishing final admissions copy.</p></article>)}</div></section>
    <section className="gold-band section-pad grid gap-10 lg:grid-cols-2" id="documents"><div><p className="eyebrow">Documents</p><h2 className="editorial-title mt-4">Keep these ready for discussion.</h2></div><div className="grid gap-3">{docs.map((x)=><div className="rounded-lg bg-white/34 px-4 py-3 text-sm font-black" key={x}>{x}</div>)}</div></section>
    <section className="section-tight grid gap-8 lg:grid-cols-[.8fr_1.2fr]" id="faq"><div><p className="eyebrow">FAQ</p><h2 className="editorial-title mt-4">Admission questions.</h2></div><div className="grid gap-3">{[["Are admissions open?", "Use the contact page to confirm current seat availability."], ["Which classes are available?", "Class range is editable until confirmed by the school office."], ["Is this Gujarati medium?", "Public sources list the school as Gujarati medium."], ["Are contact values official?", "They are placeholders until verified."]].map(([q,a])=><details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <CTASection variant="gandhi-ref" title="Begin your school inquiry today." description="The final admissions page can be connected to a backend later. For now, it is a static inquiry flow." primary={{ label: "Contact School", href: "/contact" }} secondary={{ label: "Call Office", href: "tel:+919876543210" }} />
  </>;
}

