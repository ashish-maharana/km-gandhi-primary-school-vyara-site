import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/lib/types";

type HeroVariant = "default" | "gandhi-ref";

export function PageHero({ content, variant = "default" }: { content: HeroContent; variant?: HeroVariant }) {
  if (variant === "gandhi-ref") {
    return (
      <section className="hero-panel">
        {content.imageSrc ? <Image src={content.imageSrc} alt={content.imageAlt ?? content.title} fill priority className="object-cover" /> : null}
        <div className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="hero-title mt-4">{content.title}</h1>
          <p className="hero-desc">{content.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={content.primaryCta.href} className="btn-primary">{content.primaryCta.label}</Link>
            {content.secondaryCta ? <Link href={content.secondaryCta.href} className="btn-secondary">{content.secondaryCta.label}</Link> : null}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="section-pad bg-[var(--paper)]">
      <p className="eyebrow">{content.eyebrow}</p>
      <h1 className="editorial-title mt-4">{content.title}</h1>
      <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[var(--muted)]">{content.description}</p>
    </section>
  );
}

