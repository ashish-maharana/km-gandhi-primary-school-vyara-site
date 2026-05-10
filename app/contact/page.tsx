import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "Contact | K.M. Gandhi Primary School", description: "Contact K.M. Gandhi Primary School, Vyara, Tapi, Gujarat.", path: "/contact" });
export default function ContactPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "Contact", title: "Visit, Ask, Confirm.", description: "Reach the school office for admission guidance, class availability, visit timing, and official information.", imageSrc: placeholderAssets.contact, imageAlt: "Placeholder school exterior", primaryCta: { label: "Admission Inquiry", href: "/admissions" }, secondaryCta: { label: "Academics", href: "/academics" } }} />
    <section className="section-pad grid gap-5 md:grid-cols-3"><article className="paper-card"><MapPin /><h2 className="mt-4 text-2xl font-black">Address</h2><p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">{site.address}</p></article><article className="paper-card"><Phone /><h2 className="mt-4 text-2xl font-black">Phone</h2>{site.phones.map((p)=><p className="mt-2 text-sm font-semibold text-[var(--muted)]" key={p}>{p}</p>)}</article><article className="paper-card"><Mail /><h2 className="mt-4 text-2xl font-black">Email</h2><p className="mt-2 text-sm font-semibold text-[var(--muted)]">{site.email}</p></article></section>
    <section className="section-tight grid gap-8 lg:grid-cols-[1.05fr_.95fr]"><article className="paper-card"><p className="eyebrow">Inquiry Form</p><h2 className="editorial-title mt-4">Send a message.</h2><form className="mt-8 grid gap-4" action="#"><input className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="Parent Name" /><input className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="Phone" /><input className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="Email" /><textarea className="min-h-32 rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3" placeholder="Message" /><button type="button" className="btn-primary w-fit">Submit Inquiry</button></form></article><div className="space-y-5"><Image src={placeholderAssets.contact} alt="Placeholder map visual" width={760} height={460} className="rounded-xl" /><article className="paper-card"><h3 className="text-2xl font-black">Visit Timings</h3><p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">Monday to Saturday, school office hours to be confirmed. Please call before visiting.</p></article></div></section>
    <CTASection variant="gandhi-ref" title="Confirm details before visiting." description="Phone, email, and timings are editable placeholders until the school provides official information." primary={{ label: "Admissions", href: "/admissions" }} secondary={{ label: "Home", href: "/" }} />
  </>;
}

