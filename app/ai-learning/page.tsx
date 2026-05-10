import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "AI Learning | K.M. Gandhi Primary School", description: "Computer-aided learning and future skills for Gujarati-medium learners.", path: "/ai-learning" });
const modules = ["Digital Basics", "Visual Learning", "Quizzes and Practice", "Responsible Technology", "Guided Projects", "Presentation Confidence"];
export default function AiLearningPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "Computer-Aided Learning", title: "Future Skills, Made Simple.", description: "This page presents AI Learning as age-appropriate digital readiness: computers, visual learning, responsible habits, quizzes, and guided classroom projects.", imageSrc: placeholderAssets.computer, imageAlt: "Placeholder computer learning", primaryCta: { label: "View Academics", href: "/academics" }, secondaryCta: { label: "Admissions", href: "/admissions" } }} />
    <section className="section-pad grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">Digital Readiness</p><h1 className="editorial-title mt-4">Not hype. Practical computer confidence.</h1></div><p className="text-lg font-semibold leading-9 text-[var(--muted)]">Public listings mention computer-aided learning. The site translates that into careful, child-safe digital learning without overclaiming artificial intelligence facilities.</p></section>
    <section className="section-tight"><div className="card-grid">{modules.map((x)=><article className="paper-card" key={x}><h3 className="text-2xl font-black">{x}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">A gentle module for young learners, editable after the school confirms actual lab activities.</p></article>)}</div></section>
    <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center"><Image src={placeholderAssets.computer} alt="Placeholder computer lab" width={760} height={560} className="rounded-xl" /><div><p className="eyebrow">Learning Flow</p><h2 className="editorial-title mt-4">See, try, practice, explain.</h2><p className="mt-5 text-sm font-semibold leading-7 text-[var(--muted)]">The AI Learning route remains in the architecture but becomes a grounded computer-aided learning page suitable for a Gujarati-medium primary school.</p></div></section>
    <CTASection variant="gandhi-ref" title="Ask about computer-aided learning." description="Confirm lab timings, available computers, and class-wise digital activities with the school office." primary={{ label: "Contact", href: "/contact" }} secondary={{ label: "Academics", href: "/academics" }} />
  </>;
}

