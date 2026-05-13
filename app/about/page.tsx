import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "અમારા વિશે | K.M. Gandhi Primary School", description: "K.M. Gandhi Primary School, વ્યારા (1964) વિશેની માહિતી અને શાળાનો પરિચય.", path: "/about" });

export default function AboutPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "શાળાનો પરિચય", title: "વ્યારા ખાતેની વિશ્વસનીય શાળા કહાણી.", description: "1964 થી સ્થાપિત K.M. Gandhi Primary School જાહેર સૂચિઓમાં વ્યારા શહેર વિસ્તારમાં ગુજરાતી-માધ્યમ, સહ-શિક્ષણ, ખાનગી (અનુદાન વિના) શાળા તરીકે દર્શાવવામાં આવે છે.", imageSrc: placeholderAssets.classroom, imageAlt: "પ્લેસહોલ્ડર: વર્ગખંડ", primaryCta: { label: "અભ્યાસક્રમ", href: "/academics" }, secondaryCta: { label: "સંપર્ક", href: "/contact" } }} />
    <section className="section-pad grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <div><p className="eyebrow">વારસો</p><h1 className="editorial-title mt-4">1964 થી મૂળમાં. રોજિંદા શીખણ માટે તૈયાર.</h1></div>
      <div className="space-y-6 text-lg font-semibold leading-9 text-[var(--muted)]"><p>આ વેબસાઇટ જાહેર સ્ત્રોતો પરથી શાળાનો સાવચેતીપૂર્વક આધારરૂપ પરિચય રજૂ કરે છે: ગુજરાતી માધ્યમ, સહ-શિક્ષણ શીખણ, વ્યારા શહેર સ્થાન અને પ્રાથમિક સાથે ઉચ્ચ-પ્રાથમિક દિશા.</p><p>પ્રિન્સિપલ, અધિકૃત સંપર્ક, ધોરણોની ચોક્કસ શ્રેણી અને સુવિધાઓની ગણતરી જેવી વિગતો અંતિમ પ્રકાશન પહેલાં શાળા કચેરી સાથે પુષ્ટિ કરવી. ત્યાં સુધી આ સાઇટમાં પ્લેસહોલ્ડર અને સંપાદિત કરી શકાય તેવું લખાણ રાખ્યું છે.</p></div>
    </section>
    <section className="section-tight grid gap-5 md:grid-cols-4">{[["ગુજરાતી", "માધ્યમ"], ["સહ-શિક્ષણ", "પ્રકાર"], ["1964", "સ્થાપના"], ["વ્યારા", "સ્થાન"]].map(([a,b]) => <div className="paper-card" key={b}><p className="text-4xl font-black">{a}</p><p className="mt-2 text-xs font-bold text-[var(--muted)]">{b}</p></div>)}</section>
    <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center"><Image src={placeholderAssets.values} alt="પ્લેસહોલ્ડર: મૂલ્યો" width={760} height={560} className="rounded-xl" /><div><p className="eyebrow">મૂલ્યો</p><h2 className="editorial-title mt-4">સરળતા, શિસ્ત, આત્મવિશ્વાસ, સમુદાય.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{["માન", "સારી ટેવો", "ભાષા સ્પષ્ટતા", "ભાગીદારી"].map((x) => <div className="paper-card" key={x}><h3 className="text-2xl font-black">{x}</h3><p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">શાળાનું મૂલ્ય જે રોજિંદા વર્ગખંડમાં વર્તન અને વિદ્યાર્થી વિકાસમાં દેખાય છે.</p></div>)}</div></div></section>
    <CTASection variant="gandhi-ref" title="મુલાકાત કરો, પૂછો અને વિગતો પુષ્ટિ કરો." description="અધિકૃત વિગતો એકત્ર થતી રહે ત્યાં સુધી આ સાઇટને પ્રીમિયમ શાળા-પ્રોફાઇલ ડ્રાફ્ટ તરીકે ઉપયોગ કરો." primary={{ label: "શાળાનો સંપર્ક", href: "/contact" }} secondary={{ label: "એડમિશન", href: "/admissions" }} />
  </>;
}

