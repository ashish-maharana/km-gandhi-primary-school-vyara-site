"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, site } from "@/data/site";
import { placeholderAssets } from "@/data/placeholders";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-40 px-4 pt-5 sm:px-8 sm:pt-6">
      <nav className="glass-nav mx-auto flex max-w-[1320px] items-center justify-between gap-2 rounded-xl px-4 py-3 sm:gap-3 sm:px-5 sm:py-3.5 min-[1200px]:gap-4">
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 text-white sm:gap-3 min-[1200px]:flex-initial">
          <Image src={placeholderAssets.logo} alt="K.M. ગાંધી લોગો પ્લેસહોલ્ડર" width={58} height={58} className="h-11 w-11 shrink-0 rounded-xl bg-white p-1 shadow-[0_8px_20px_rgba(0,0,0,0.18)] sm:h-[58px] sm:w-[58px]" />
          <span className="min-w-0 truncate text-base font-black leading-tight tracking-tight sm:text-lg min-[1200px]:overflow-visible min-[1200px]:whitespace-normal min-[1200px]:text-2xl xl:text-3xl">
            {site.shortName}
          </span>
        </Link>
        <div className="hidden shrink-0 items-center gap-4 min-[1200px]:flex xl:gap-7">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={`whitespace-nowrap text-xs font-bold transition ${pathname === item.href ? "text-[#f8c400]" : "text-white/82 hover:text-white"}`}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/admissions" className="hidden shrink-0 rounded-md bg-white px-4 py-2 text-xs font-black text-[#14110f] min-[1200px]:inline-flex">એડમિશન</Link>
        <button type="button" className="shrink-0 text-white min-[1200px]:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="glass-nav mx-auto mt-2 grid max-w-[1320px] gap-1 rounded-xl p-3 min-[1200px]:hidden">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-bold text-white/90 hover:bg-white/10">
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

