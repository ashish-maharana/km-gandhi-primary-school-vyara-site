import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "મુખ્ય પૃષ્ઠ | K.M. Gandhi Primary School",
  description: "વ્યારા, તાપી, ગુજરાત ખાતેનું ગુજરાતી-માધ્યમ સહ-શિક્ષણ પ્રાથમિક તથા ઉચ્ચ-પ્રાથમિક શાળાનું પરિચય પૃષ્ઠ.",
  path: "/",
});

const hero = {
  eyebrow: "1964 થી ગુજરાતી-માધ્યમ શિક્ષણ",
  title: "મૂલ્યોમાં જડેલું, ઉજ્જવળ ભવિષ્ય.",
  description: "K.M. Gandhi Primary School, વ્યારા ખાતે શિક્ષણ ગુજરાતી-માધ્યમ સ્પષ્ટતા, શિસ્ત, સમુદાયનો વિશ્વાસ અને મજબૂત આધાર પર કેન્દ્રિત છે.",
  imageSrc: placeholderAssets.hero,
  imageAlt: "પ્લેસહોલ્ડર: વિદ્યાર્થી અભ્યાસ કરે છે",
  primaryCta: { label: "Admissions પૂછપરછ", href: "/admissions" },
  secondaryCta: { label: "વધુ જાણો", href: "/about" },
};

const stats = [
  ["1964", "સ્થાપના"],
  ["ગુજરાતી", "માધ્યમ"],
  ["સહ-શિક્ષણ", "શાળાનો પ્રકાર"],
];

const programs = [
  ["ગુજરાતી આધાર", "વાંચન, લખાણ, બોલચાલ અને અભિવ્યક્તિ માટે માર્ગદર્શિત અભ્યાસ.", placeholderAssets.classroom],
  ["કમ્પ્યુટર આધારિત શીખણ", "ડિજિટલ મૂળભૂત બાબતો અને દૃશ્ય શીખણથી સમજણને ટેકો.", placeholderAssets.computer],
  ["મેદાન અને પ્રવૃત્તિઓ", "રમતગમત, સભા, કાર્યક્રમો અને ભાગીદારીથી આત્મવિશ્વાસ વધે.", placeholderAssets.playground],
];

export default function HomePage() {
  return (
    <>
      <PageHero content={hero} variant="gandhi-ref" />
      <section className="section-pad grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">અમારા વિશે</p>
          <h2 className="editorial-title mt-4">ચાલો મળીને મજબૂત આધાર ઊભો કરીએ.</h2>
        </div>
        <div>
          <p className="text-xl font-semibold leading-9 text-[var(--ink)]">દરેક બાળકને એવું શૈક્ષણિક વાતાવરણ જોઈએ જ્યાં શીખવાનું સ્પષ્ટ, શિસ્તબદ્ધ અને ઘરનાં મૂલ્યો સાથે જોડાયેલું લાગે. આ શાળા ગુજરાતી-માધ્યમ શિક્ષણ, કાળજી અને નિયમિત અભ્યાસની ટેવો પર ધ્યાન આપે છે.</p>
          <Link href="/about" className="btn-secondary mt-8">અમારી કહાણી</Link>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">{stats.map(([value, label]) => <div key={label} className="paper-card"><p className="text-4xl font-black tracking-tight">{value}</p><p className="mt-1 text-xs font-bold text-[var(--muted)]">{label}</p></div>)}</div>
        </div>
      </section>
      <section className="section-tight">
        <div className="relative overflow-hidden rounded-xl">
          <Image src={placeholderAssets.assembly} alt="પ્લેસહોલ્ડર: શાળા પ્રવૃત્તિ" width={1400} height={620} className="aspect-[16/7] w-full object-cover" />
          <div className="absolute inset-0 grid place-items-center bg-black/18"><div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--gold)] text-xl font-black">પ્લે</div></div>
        </div>
      </section>
      <section className="section-tight">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><p className="eyebrow">શૈક્ષણિક કાર્યક્રમો</p><h2 className="editorial-title mt-4">નાની ટેવો. લાંબો આત્મવિશ્વાસ.</h2></div>
          <p className="max-w-xl text-sm font-semibold leading-7 text-[var(--muted)]">વર્ગખંડની રૂટિનથી લઈને પ્રવૃત્તિઓ અને કમ્પ્યુટર આધારિત શીખણ સુધી, અધિકૃત વિગતો પુષ્ટિ થાય ત્યાં સુધી લખાણ શાળાને અનુરૂપ અને સંપાદિત કરી શકાય તેવું રાખવામાં આવ્યું છે.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{programs.map(([title, text, image]) => <article key={title} className="image-card"><Image src={image} alt={`પ્લેસહોલ્ડર: ${title}`} fill className="object-cover" /><div className="image-card-content"><h3 className="text-2xl font-black text-white">{title}</h3><p className="mt-2 text-sm font-semibold text-white/78">{text}</p><Link href="/academics" className="mt-4 inline-flex text-xs font-black text-[var(--gold)]">વધુ જાણો</Link></div></article>)}</div>
      </section>
      <CTASection variant="gandhi-ref" title="આજે Admissions અંગે વાતચીત શરૂ કરો" description="હાલની ક્લાસ ઉપલબ્ધતા, મુલાકાત માર્ગદર્શન, દસ્તાવેજો અને ગુજરાતી-માધ્યમ અભિગમ વિશે પૂછો." primary={{ label: "Admissions જુઓ", href: "/admissions" }} secondary={{ label: "શાળાનો સંપર્ક", href: "/contact" }} />
      <section className="section-pad grid gap-10 lg:grid-cols-2 lg:items-center">
        <Image src={placeholderAssets.values} alt="પ્લેસહોલ્ડર: વિદ્યાર્થી અભ્યાસ" width={760} height={520} className="rounded-xl object-cover" />
        <div><p className="eyebrow">મૂલ્યો</p><h2 className="editorial-title mt-4">સરળતા, શિસ્ત અને કાળજી સાથેનું શીખણ.</h2><p className="mt-5 text-sm font-semibold leading-7 text-[var(--muted)]">આ ડિઝાઇન સરળતા, પ્રામાણિક ટાઇપોગ્રાફી અને વ્યવહારુ શાળા-કથન પર આધારિત છે, જેથી માહિતી સ્પષ્ટ અને વિશ્વાસપાત્ર લાગે.</p><Link href="/activities" className="btn-secondary mt-7">વિદ્યાર્થી જીવન જુઓ</Link></div>
      </section>
      <section className="section-tight grid gap-8 lg:grid-cols-[.8fr_1.2fr]" id="faq">
        <div><p className="eyebrow">FAQ</p><h2 className="editorial-title mt-4">વારંવાર પૂછાતા પ્રશ્નો</h2><p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted)]">અંતિમ જવાબો માટે શાળા કચેરી સાથે પુષ્ટિ કરવી.</p></div>
        <div className="grid gap-3">
          {[
            ["શાળાનું માધ્યમ કયું છે?", "જાહેર સ્ત્રોતોમાં શાળાનું માધ્યમ ગુજરાતી દર્શાવવામાં આવ્યું છે."],
            ["વેબસાઇટમાં કયા ધોરણો બતાવવામાં આવ્યા છે?", "જાહેર માહિતી અલગ હોઈ શકે છે, તેથી ધોરણ 1 થી 8ને સંપાદિત કરી શકાય તેવા આધારરૂપે દર્શાવ્યું છે."],
            ["શું શાળા સહ-શિક્ષણ છે?", "જાહેર સૂચિઓમાં શાળાને સહ-શિક્ષણ તરીકે વર્ણવવામાં આવી છે."],
            ["સંપર્ક વિગતો અંતિમ છે?", "ફોન અને ઇમેઇલ અધિકૃત પુષ્ટિ થાય ત્યાં સુધી પ્લેસહોલ્ડર છે."],
          ].map(([q, a]) => <details key={q} className="faq-item"><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
    </>
  );
}

