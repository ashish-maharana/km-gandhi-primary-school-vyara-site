import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "એડમિશન | K.M. Gandhi Primary School", description: "K.M. Gandhi Primary School, વ્યારા માટે એડમિશન પૂછપરછ અને પ્રક્રિયા માર્ગદર્શન.", path: "/admissions" });
const steps = ["વિનંતી", "શાળા મુલાકાત", "દસ્તાવેજ ચકાસણી", "દાખલા માર્ગદર્શન"];
const docs = ["જન્મ પ્રમાણપત્રની નકલ", "જો લાગુ પડે તો અગાઉની શાળાનો રેકોર્ડ", "વિદ્યાર્થીના ફોટા", "વાલી ઓળખ/સરનામું પુરાવો", "જરૂરી તબીબી માહિતી (જો હોય તો)"];
export default function AdmissionsPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "એડમિશન", title: "પરિવારો માટે સ્પષ્ટ માર્ગ.", description: "વિનંતીથી શરૂઆત કરો, ક્લાસ ઉપલબ્ધતા પુષ્ટિ કરો, શાળાની મુલાકાત લો અને કચેરી સાથે દસ્તાવેજ પ્રક્રિયા પૂર્ણ કરો.", imageSrc: placeholderAssets.values, imageAlt: "પ્લેસહોલ્ડર: એડમિશન", primaryCta: { label: "હવે સંપર્ક કરો", href: "/contact" }, secondaryCta: { label: "અભ્યાસક્રમ", href: "/academics" } }} />
    <section className="section-pad" id="process"><p className="eyebrow">પ્રક્રિયા</p><h1 className="editorial-title mt-4">એડમિશન માટે ચાર સરળ પગલાં.</h1><div className="mt-10 grid gap-4 md:grid-cols-4">{steps.map((x,i)=><article className="paper-card" key={x}><p className="text-xs font-black text-[var(--gold-dark)]">0{i+1}</p><h3 className="mt-3 text-2xl font-black">{x}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">કચેરી માર્ગદર્શિત પગલું. અંતિમ લખાણ પ્રકાશિત કરતાં પહેલાં વિગતો પુષ્ટિ કરવી.</p></article>)}</div></section>
    <section className="gold-band section-pad grid gap-10 lg:grid-cols-2" id="documents"><div><p className="eyebrow">દસ્તાવેજો</p><h2 className="editorial-title mt-4">ચર્ચા માટે તૈયાર રાખો.</h2></div><div className="grid gap-3">{docs.map((x)=><div className="rounded-lg bg-white/34 px-4 py-3 text-sm font-black" key={x}>{x}</div>)}</div></section>
    <section className="section-tight grid gap-8 lg:grid-cols-[.8fr_1.2fr]" id="faq"><div><p className="eyebrow">FAQ</p><h2 className="editorial-title mt-4">એડમિશન સંબંધિત પ્રશ્નો.</h2></div><div className="grid gap-3">{[["શું એડમિશન ખુલ્લાં છે?", "હાલની બેઠકો/સીટ ઉપલબ્ધતા માટે સંપર્ક પૃષ્ઠથી પુષ્ટિ કરો."], ["કયા ધોરણો ઉપલબ્ધ છે?", "ધોરણોની શ્રેણી શાળા કચેરી પુષ્ટિ પછી અંતિમ કરવી."], ["શું આ ગુજરાતી માધ્યમ છે?", "જાહેર સ્ત્રોતોમાં શાળાનું માધ્યમ ગુજરાતી દર્શાવવામાં આવ્યું છે."], ["શું સંપર્ક મૂલ્ય અધિકૃત છે?", "અધિકૃત પુષ્ટિ થાય ત્યાં સુધી આ મૂલ્યો પ્લેસહોલ્ડર છે."]].map(([q,a])=><details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <CTASection variant="gandhi-ref" title="આજે તમારી વિનંતી શરૂ કરો." description="આ અંતિમ પૃષ્ઠને પછી બેકએન્ડ સાથે જોડાઈ શકાય છે; હાલમાં આ સ્ટેટિક પૂછપરછ પ્રવાહ છે." primary={{ label: "શાળાનો સંપર્ક", href: "/contact" }} secondary={{ label: "કચેરીને કોલ કરો", href: "tel:+919876543210" }} />
  </>;
}

