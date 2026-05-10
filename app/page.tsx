import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home | K.M. Gandhi Primary School",
  description: "Gujarati-medium co-educational primary and upper-primary school in Vyara, Tapi, Gujarat.",
  path: "/",
});

const hero = {
  eyebrow: "Gujarati Medium Learning Since 1964",
  title: "Rooted Values, Brighter Futures.",
  description: "K.M. Gandhi Primary School, Vyara supports young learners with Gujarati-medium clarity, discipline, community trust, and steady foundational growth.",
  imageSrc: placeholderAssets.hero,
  imageAlt: "Placeholder child learning outdoors",
  primaryCta: { label: "Admission Inquiry", href: "/admissions" },
  secondaryCta: { label: "Learn More", href: "/about" },
};

const stats = [
  ["1964", "Established"],
  ["Gujarati", "Medium"],
  ["Co-Ed", "School Type"],
];

const programs = [
  ["Gujarati Foundation", "Reading, writing, speaking, and expression in a familiar learning language.", placeholderAssets.classroom],
  ["Computer-Aided Learning", "Digital basics and visual learning support classroom understanding.", placeholderAssets.computer],
  ["Playground and Activities", "Sports, assembly, events, and participation build confidence.", placeholderAssets.playground],
];

export default function HomePage() {
  return (
    <>
      <PageHero content={hero} variant="gandhi-ref" />
      <section className="section-pad grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">About Us</p>
          <h2 className="editorial-title mt-4">Together, We Build Strong Foundations.</h2>
        </div>
        <div>
          <p className="text-xl font-semibold leading-9 text-[var(--ink)]">Every child deserves a school environment where learning feels clear, disciplined, and connected to home values. K.M. Gandhi Primary School is positioned around Gujarati-medium instruction, care, and consistent academic habits.</p>
          <Link href="/about" className="btn-secondary mt-8">Our Story</Link>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">{stats.map(([value, label]) => <div key={label} className="paper-card"><p className="text-4xl font-black tracking-tight">{value}</p><p className="mt-1 text-xs font-bold text-[var(--muted)]">{label}</p></div>)}</div>
        </div>
      </section>
      <section className="section-tight">
        <div className="relative overflow-hidden rounded-xl">
          <Image src={placeholderAssets.assembly} alt="Placeholder school activity" width={1400} height={620} className="aspect-[16/7] w-full object-cover" />
          <div className="absolute inset-0 grid place-items-center bg-black/18"><div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--gold)] text-xl font-black">Play</div></div>
        </div>
      </section>
      <section className="section-tight">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><p className="eyebrow">Learning Programs</p><h2 className="editorial-title mt-4">Small Habits. Lasting Confidence.</h2></div>
          <p className="max-w-xl text-sm font-semibold leading-7 text-[var(--muted)]">From classroom routines to activities and computer-aided learning, the site content stays school-safe and editable until official details are confirmed.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{programs.map(([title, text, image]) => <article key={title} className="image-card"><Image src={image} alt={`Placeholder ${title}`} fill className="object-cover" /><div className="image-card-content"><h3 className="text-2xl font-black text-white">{title}</h3><p className="mt-2 text-sm font-semibold text-white/78">{text}</p><Link href="/academics" className="mt-4 inline-flex text-xs font-black text-[var(--gold)]">Learn More</Link></div></article>)}</div>
      </section>
      <CTASection variant="gandhi-ref" title="Begin the Admission Conversation Today" description="Ask about current class availability, visit guidance, documents, and the Gujarati-medium learning approach." primary={{ label: "View Admissions", href: "/admissions" }} secondary={{ label: "Contact School", href: "/contact" }} />
      <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center">
        <Image src={placeholderAssets.values} alt="Placeholder student learning" width={760} height={520} className="rounded-xl object-cover" />
        <div><p className="eyebrow">Values</p><h2 className="editorial-title mt-4">Learning with simplicity, discipline, and care.</h2><p className="mt-5 text-sm font-semibold leading-7 text-[var(--muted)]">Inspired by the Gandhi name, the visual identity uses simplicity, honest typography, warm paper textures, and practical school storytelling rather than loud decoration.</p><Link href="/activities" className="btn-secondary mt-7">See Student Life</Link></div>
      </section>
      <section className="section-tight grid gap-8 lg:grid-cols-[.8fr_1.2fr]" id="faq">
        <div><p className="eyebrow">FAQ</p><h2 className="editorial-title mt-4">Frequently Asked Questions?</h2><p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted)]">Final answers should be verified with the school office.</p></div>
        <div className="grid gap-3">
          {[
            ["Which medium does the school use?", "Public sources identify the school as Gujarati medium."],
            ["Which classes are shown on the website?", "The site uses Class 1 to 8 as an editable baseline because public sources vary."],
            ["Is the school co-educational?", "Public listings describe K.M. Gandhi Primary School as co-educational."],
            ["Are contact details final?", "Phone and email values are placeholders until official confirmation."],
          ].map(([q, a]) => <details key={q} className="faq-item"><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
    </>
  );
}

