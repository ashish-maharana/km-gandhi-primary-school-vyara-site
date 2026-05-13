import Image from "next/image";
import Link from "next/link";
import { footerLinks, site, socialLinks } from "@/data/site";
import { placeholderAssets } from "@/data/placeholders";

export function Footer() {
  return (
    <footer className="dark-footer section-tight">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr_.7fr_.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src={placeholderAssets.logo} alt="K.M. ગાંધી લોગો પ્લેસહોલ્ડર" width={42} height={42} className="rounded-lg bg-[#f7f2e8]" />
            <h3 className="text-2xl font-black tracking-tight">{site.name}</h3>
          </div>
          <p className="mt-5 max-w-sm text-sm font-semibold leading-7 text-white/66">
            વ્યારા ખાતેનું ગુજરાતી-માધ્યમ શિક્ષણ શિસ્ત, મૂલ્યો, વર્ગખંડમાં આત્મવિશ્વાસ અને ધીમે ધીમે મજબૂત આધાર બાંધવા પર કેન્દ્રિત છે.
          </p>
          <form className="mt-6 flex max-w-md gap-2" action="#">
            <input className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40" placeholder="તમારું ઇમેઇલ" />
            <button type="button" className="btn-primary">સબ્સ્ક્રાઇબ કરો</button>
          </form>
        </div>
        <div>
          <h4 className="text-sm font-black">ઝડપી લિંક્સ</h4>
          <div className="mt-4 grid gap-3">{footerLinks.quick.slice(0, 5).map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold text-white/58 hover:text-white">{link.label}</Link>)}</div>
        </div>
        <div>
          <h4 className="text-sm font-black">એડમિશન</h4>
          <div className="mt-4 grid gap-3">{footerLinks.admissions.map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold text-white/58 hover:text-white">{link.label}</Link>)}</div>
        </div>
        <div>
          <h4 className="text-sm font-black">સંપર્ક</h4>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-white/58">
            <p>{site.address}</p>
            <p>{site.phones[0]}</p>
            <p>{site.email}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-white/42">
        <p>કોપીરાઇટ 2026 {site.shortName}. સર્વ અધિકાર સુરક્ષિત.</p>
        <div className="flex gap-4">{socialLinks.map((item) => <Link key={item.platform} href={item.url} aria-label={item.ariaLabel}>{item.platform}</Link>)}</div>
      </div>
    </footer>
  );
}

