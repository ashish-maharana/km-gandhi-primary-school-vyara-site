import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "AI Learning | K.M. Gandhi Primary School", description: "ગુજરાતી-માધ્યમ વિદ્યાર્થીઓ માટે કમ્પ્યુટર આધારિત શીખણ અને ભવિષ્ય કુશળતાઓ (પ્રાયોગિક, સાવચેતીપૂર્વક).", path: "/ai-learning" });
const modules = ["ડિજિટલ આધાર", "દૃશ્ય શીખણ", "ક્વિઝ અને અભ્યાસ", "જવાબદાર ટેકનોલોજી", "માર્ગદર્શિત પ્રોજેક્ટ", "પ્રસ્તુતિ આત્મવિશ્વાસ"];
export default function AiLearningPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "કમ્પ્યુટર આધારિત શીખણ", title: "ભવિષ્ય કુશળતા, સરળ રીતે.", description: "આ પૃષ્ઠ AI Learning ને ઉંમર અનુસાર ડિજિટલ તૈયારી તરીકે રજૂ કરે છે: કમ્પ્યુટર, દૃશ્ય શીખણ, જવાબદાર ટેક ટેવો, ક્વિઝ અને માર્ગદર્શિત વર્ગખંડ પ્રોજેક્ટ્સ.", imageSrc: placeholderAssets.computer, imageAlt: "પ્લેસહોલ્ડર: કમ્પ્યુટર શીખણ", primaryCta: { label: "અભ્યાસક્રમ જુઓ", href: "/academics" }, secondaryCta: { label: "Admissions", href: "/admissions" } }} />
    <section className="section-pad grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><p className="eyebrow">ડિજિટલ તૈયારી</p><h1 className="editorial-title mt-4">હાઇપ નહીં. વ્યવહારુ કમ્પ્યુટર આત્મવિશ્વાસ.</h1></div><p className="text-lg font-semibold leading-9 text-[var(--muted)]">જાહેર સૂચિઓમાં કમ્પ્યુટર આધારિત શીખણનો ઉલ્લેખ મળે છે. આ સાઇટ તેને બાળક-મૈત્રીપૂર્ણ અને સાવચેતીપૂર્વક ડિજિટલ શીખણ રૂપે રજૂ કરે છે, અતિશય AI દાવાઓ વગર.</p></section>
    <section className="section-tight"><div className="card-grid">{modules.map((x)=><article className="paper-card" key={x}><h3 className="text-2xl font-black">{x}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">શાળા વાસ્તવિક પ્રવૃત્તિઓ પુષ્ટિ કરે ત્યાર પછી વિગતવાર રીતે સંપાદિત કરી શકાય તેવી મોડ્યુલ નોંધ.</p></article>)}</div></section>
    <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center"><Image src={placeholderAssets.computer} alt="પ્લેસહોલ્ડર: કમ્પ્યુટર લૅબ" width={760} height={560} className="rounded-xl" /><div><p className="eyebrow">શીખણ પ્રવાહ</p><h2 className="editorial-title mt-4">જુઓ, અજમાવો, અભ્યાસ કરો, સમજાવો.</h2><p className="mt-5 text-sm font-semibold leading-7 text-[var(--muted)]">આ રૂટ આર્કિટેક્ચરમાં યથાવત રહેશે, પરંતુ લખાણ ગુજરાતી-માધ્યમ પ્રાથમિક શાળાને અનુરૂપ, વ્યવહારુ કમ્પ્યુટર આધારિત શીખણ તરીકે રજૂ કરવામાં આવે છે.</p></div></section>
    <CTASection variant="gandhi-ref" title="કમ્પ્યુટર આધારિત શીખણ વિશે પૂછો." description="લૅબ ટાઇમિંગ, ઉપલબ્ધ કમ્પ્યુટર અને ધોરણ મુજબની ડિજિટલ પ્રવૃત્તિઓ માટે શાળા કચેરી સાથે પુષ્ટિ કરો." primary={{ label: "સંપર્ક", href: "/contact" }} secondary={{ label: "અભ્યાસક્રમ", href: "/academics" }} />
  </>;
}

