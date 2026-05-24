import { Building2, ShieldCheck } from "lucide-react";
import { Counter } from "./Counter";

const items = [
  { icon: Building2, value: 480, suffix: "+", label: "Projects Delivered" },
  { icon: ShieldCheck, value: 99, suffix: "%", label: "Client Satisfaction" },
];

export function TrustBar() {
  return (
    <section className="relative mt-8 md:-mt-16 z-10">
      <div className="container-x">
        <div className="glass rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-[var(--shadow-card)]">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-4">
              <div className="grid place-items-center size-12 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                <it.icon className="size-5" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-display font-bold tracking-tight">
                  <Counter to={it.value} />{it.suffix}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{it.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
