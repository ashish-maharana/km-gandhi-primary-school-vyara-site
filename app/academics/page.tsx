import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "અભ્યાસક્રમ | K.M. Gandhi Primary School", description: "પ્રાથમિક અને ઉચ્ચ-પ્રાથમિક માટે ગુજરાતી-માધ્યમ અભ્યાસક્રમ અને શીખણ દિશા.", path: "/academics" });
const subjects = ["ગુજરાતી ભાષા", "ગણિત", "પર્યાવરણ અભ્યાસ", "હિન્દી અને અંગ્રેજી આધાર", "સામાજિક સમજણ", "કમ્પ્યુટર આધારિત શીખણ"];
export default function AcademicsPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "અભ્યાસક્રમ", title: "ગુજરાતી સ્પષ્ટતા, દૈનિક અભ્યાસ.", description: "અભ્યાસક્રમ પ્રાથમિક અને ઉચ્ચ-પ્રાથમિક માટે વિચાર સ્પષ્ટતા, નિયમિત પુનરાવર્તન, મૂલ્યો અને વર્ગખંડ આત્મવિશ્વાસ પર આધારિત છે.", imageSrc: placeholderAssets.study, imageAlt: "પ્લેસહોલ્ડર: અભ્યાસ", primaryCta: { label: "એડમિશન", href: "/admissions" }, secondaryCta: { label: "AI લર્નિંગ", href: "/ai-learning" } }} />
    <section className="section-pad grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">શીખણ માર્ગ</p><h1 className="editorial-title mt-4">વાંચનની આરામદાયકતા થી આત્મવિશ્વાસભર્યા અભિવ્યક્તિ સુધી.</h1></div><div className="grid gap-4">{["વર્ગખંડ રૂટિન", "ધારણા સમજાવટ", "લખાણ અભ્યાસ", "પુનરાવર્તન અને મૂલ્યાંકન"].map((x,i)=><div className="paper-card" key={x}><p className="text-xs font-black text-[var(--gold-dark)]">0{i+1}</p><h3 className="mt-2 text-3xl font-black">{x}</h3><p className="mt-2 text-sm font-semibold leading-6 text-[var(--muted)]">અભ્યાસની સ્પષ્ટ અવસ્થા, જેને જરૂર મુજબ શાળા અનુસાર સંપાદિત કરી શકાય છે.</p></div>)}</div></section>
    <section className="section-tight"><p className="eyebrow">વિષયો</p><h2 className="editorial-title mt-4">વર્ગખંડના મુખ્ય ધ્યાન કેન્દ્રો.</h2><div className="card-grid mt-10">{subjects.map((s)=><article className="paper-card" key={s}><h3 className="text-2xl font-black">{s}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">ગુજરાતી-માધ્યમ શાળા સંચાર માટે સંપાદિત કરી શકાય તેવું વિષય વર્ણન.</p></article>)}</div></section>
    <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center"><Image src={placeholderAssets.classroom} alt="પ્લેસહોલ્ડર: વર્ગખંડ" width={760} height={560} className="rounded-xl" /><div><p className="eyebrow">મૂલ્યાંકન</p><h2 className="editorial-title mt-4">સ્થિર પ્રગતિ, મોટા દાવા નહીં.</h2><p className="mt-5 text-sm font-semibold leading-7 text-[var(--muted)]">આ પૃષ્ઠ અપ્રમાણિત દાવાઓ ટાળે છે અને પેરેન્ટ્સ માટે મહત્વની બાબતો પર ધ્યાન આપે છે: રચના, સ્પષ્ટતા, પુનરાવર્તન અને કાળજી.</p></div></section>
    <CTASection variant="gandhi-ref" title="ક્લાસ ઉપલબ્ધતા વિશે પૂછો." description="અંતિમ પ્રકાશન પહેલાં ધોરણોની શ્રેણી અને એડમિશન વિગતો શાળા કચેરી સાથે પુષ્ટિ કરવી." primary={{ label: "એડમિશન પ્રક્રિયા", href: "/admissions" }} secondary={{ label: "સંપર્ક", href: "/contact" }} />
  </>;
}

