import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Academics | K.M. Gandhi Primary School", description: "Gujarati-medium academics for primary and upper-primary learners.", path: "/academics" });
const subjects = ["Gujarati Language", "Mathematics", "Environmental Studies", "Hindi and English Basics", "Social Understanding", "Computer-Aided Learning"];
export default function AcademicsPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "Academics", title: "Gujarati Clarity, Daily Practice.", description: "Academic content is shaped around primary and upper-primary learning, concept clarity, regular revision, values, and classroom confidence.", imageSrc: placeholderAssets.study, imageAlt: "Placeholder study", primaryCta: { label: "Admissions", href: "/admissions" }, secondaryCta: { label: "AI Learning", href: "/ai-learning" } }} />
    <section className="section-pad grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Learning Path</p><h1 className="editorial-title mt-4">From reading comfort to confident expression.</h1></div><div className="grid gap-4">{["Classroom routine", "Concept explanation", "Written practice", "Revision and assessment"].map((x,i)=><div className="paper-card" key={x}><p className="text-xs font-black text-[var(--gold-dark)]">0{i+1}</p><h3 className="mt-2 text-3xl font-black">{x}</h3><p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">A clear stage in the school learning rhythm for foundational and upper-primary students.</p></div>)}</div></section>
    <section className="section-tight"><p className="eyebrow">Subjects</p><h2 className="editorial-title mt-4">Core classroom focus areas.</h2><div className="card-grid mt-10">{subjects.map((s)=><article className="paper-card" key={s}><h3 className="text-2xl font-black">{s}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">Editable subject copy for Gujarati-medium school communication.</p></article>)}</div></section>
    <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center"><Image src={placeholderAssets.classroom} alt="Placeholder classroom" width={760} height={560} className="rounded-xl" /><div><p className="eyebrow">Assessment</p><h2 className="editorial-title mt-4">Steady progress, not noisy promises.</h2><p className="mt-5 text-sm font-semibold leading-7 text-[var(--muted)]">The academic page avoids unverifiable claims and focuses on the real parent decision: whether students receive structure, clarity, revision, and care.</p></div></section>
    <CTASection variant="gandhi-ref" title="Ask about class availability." description="Class range and admissions should be confirmed with the school office before final publication." primary={{ label: "Admission Process", href: "/admissions" }} secondary={{ label: "Contact", href: "/contact" }} />
  </>;
}

