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
    <header className="absolute left-0 right-0 top-0 z-40 px-6 pt-6 sm:px-10">
      <nav className="glass-nav mx-auto flex max-w-[1320px] items-center justify-between rounded-xl px-5 py-3.5">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image src={placeholderAssets.logo} alt="K.M. Gandhi logo placeholder" width={58} height={58} className="rounded-xl bg-white p-1 shadow-[0_8px_20px_rgba(0,0,0,0.18)]" />
          <span className="text-2xl font-black tracking-tight sm:text-3xl">{site.shortName}</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={`text-xs font-bold transition ${pathname === item.href ? "text-[#f8c400]" : "text-white/82 hover:text-white"}`}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/admissions" className="hidden rounded-md bg-white px-4 py-2 text-xs font-black text-[#14110f] md:inline-flex">Apply Now</Link>
        <button className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="glass-nav mx-auto mt-2 grid max-w-[1320px] gap-1 rounded-xl p-3 md:hidden">
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

