import Link from "next/link";

type CTAProps = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  variant?: "default" | "gandhi-ref";
};

export function CTASection({ title, description, primary, secondary, variant = "default" }: CTAProps) {
  const cls = variant === "gandhi-ref" ? "gold-band section-tight" : "section-tight bg-[var(--paper-2)]";
  return (
    <section className={cls}>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <p className="eyebrow">એડમિશન</p>
          <h2 className="editorial-title mt-4">{title}</h2>
        </div>
        <div>
          <p className="text-sm font-semibold leading-7 text-[var(--muted)]">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={primary.href} className="btn-secondary bg-white/55">{primary.label}</Link>
            {secondary ? <Link href={secondary.href} className="btn-secondary">{secondary.label}</Link> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

