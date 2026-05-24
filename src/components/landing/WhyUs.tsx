import { CheckCircle2 } from "lucide-react";
import img from "@/assets/why-choose.jpg";
import { SectionTitle } from "./SectionTitle";
import { Counter } from "./Counter";

const points = [
  "Precision-first engineering and detailed QA",
  "Senior PE-licensed engineers on every project",
  "Fast project delivery with milestone tracking",
  "Latest BIM, AutoCAD and structural analysis tools",
  "Transparent, competitive pricing",
  "Full regulatory & building-code compliance",
  "Client-centered, communication-driven workflow",
];

export function WhyUs() {
  return (
    <section id="why" className="section-y">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[var(--gradient-gold)] opacity-20 blur-2xl" />
          <img
            src={img}
            alt="Architectural blueprints and engineering tools"
            loading="lazy"
            width={1280}
            height={1280}
            className="relative rounded-2xl border border-border shadow-[var(--shadow-elegant)]"
          />
          <div className="absolute -bottom-6 -right-4 md:-right-8 glass rounded-2xl p-5 shadow-[var(--shadow-card)]">
            <div className="text-3xl font-display font-bold text-gradient-gold">
              <Counter to={98} />%
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
              On-time Delivery
            </div>
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="Why Choose Us"
            title={
              <>
                Built on precision, <span className="text-gradient-gold">backed by experience</span>
                .
              </>
            }
            subtitle="We combine decades of structural expertise with modern engineering technology to deliver designs that are buildable, durable and code-compliant."
          />
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
