import Image from "next/image";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { placeholderAssets } from "@/data/placeholders";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "પ્રવૃત્તિઓ | K.M. Gandhi Primary School", description: "પ્રવૃત્તિઓ, રમતગમત, સાંસ્કૃતિક કાર્યક્રમો અને વિદ્યાર્થીઓનો આત્મવિશ્વાસ.", path: "/activities" });
const cards = [["રમતગમત અને મેદાન", placeholderAssets.playground], ["સભા અને કાર્યક્રમો", placeholderAssets.assembly], ["વાંચન ક્ષણો", placeholderAssets.study]];
export default function ActivitiesPage() {
  return <>
    <PageHero variant="gandhi-ref" content={{ eyebrow: "પ્રવૃત્તિઓ", title: "નાની ક્રિયાઓ. લાંબો આત્મવિશ્વાસ.", description: "પ્રવૃત્તિઓથી વિદ્યાર્થીઓ બોલે, રમે, સહકાર આપે, ઉજવે અને પાઠ્યપુસ્તક બહાર પણ વિકસે છે.", imageSrc: placeholderAssets.playground, imageAlt: "પ્લેસહોલ્ડર: મેદાન", primaryCta: { label: "એડમિશન", href: "/admissions" }, secondaryCta: { label: "સંપર્ક", href: "/contact" } }} />
    <section className="section-pad"><div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end"><div><p className="eyebrow">વિદ્યાર્થી જીવન</p><h1 className="editorial-title mt-4">રમો, રજૂ કરો, વાંચો અને ભાગ લો.</h1></div><p className="text-sm font-semibold leading-7 text-[var(--muted)]">પછી વાસ્તવિક કેમ્પસ તસવીરો ઉમેરો. હાલમાં દરેક દૃશ્ય પ્લેસહોલ્ડર છે અને દરેક પ્રવૃત્તિ વિષયક લખાણ પુષ્ટિ થાય ત્યાં સુધી સામાન્ય રાખ્યું છે.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{cards.map(([title,img])=><article className="image-card" key={title}><Image src={img} alt={`પ્લેસહોલ્ડર: ${title}`} fill className="object-cover" /><div className="image-card-content"><h3 className="text-2xl font-black text-white">{title}</h3><p className="mt-2 text-sm font-semibold text-white/78">ભાગીદારીથી આત્મવિશ્વાસ અને જોડાણ વધે છે.</p></div></article>)}</div></section>
    <section className="gold-band section-pad"><div className="grid gap-5 md:grid-cols-3">{["ટીમવર્ક", "શિસ્ત", "અભિવ્યક્તિ"].map((x)=><div className="paper-card bg-white/34" key={x}><h3 className="text-3xl font-black">{x}</h3><p className="mt-3 text-sm font-semibold leading-6 text-[var(--muted)]">શાળા કાર્યક્રમો અને વર્ગખંડની રૂટિનથી વધતો વિદ્યાર્થી જીવનનો એક સરળ પરિણામ.</p></div>)}</div></section>
    <section className="section-tight grid grid-cols-2 gap-4 md:grid-cols-4">{placeholderAssets.gallery.map((img,i)=><Image key={img} src={img} alt={`પ્લેસહોલ્ડર ગેલેરી ${i+1}`} width={520} height={520} className="aspect-square rounded-xl object-cover" />)}</section>
    <CTASection variant="gandhi-ref" title="ભાગીદારીથી વિદ્યાર્થીઓ કેવી રીતે વિકસે છે તે જુઓ." description="વાર્ષિક કાર્યક્રમો અને રમતગમત વિગતો પુષ્ટિ થયા પછી પ્રવૃત્તિઓનું લખાણ વિસ્તારી શકાય છે." primary={{ label: "શાળાનો સંપર્ક", href: "/contact" }} secondary={{ label: "અમારા વિશે", href: "/about" }} />
  </>;
}

