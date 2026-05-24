import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const items = [
  {
    name: "Daniel Whitmore",
    role: "Developer, Whitmore Group",
    avatar: "https://i.pravatar.cc/120?img=11",
    rating: 5,
    quote:
      "KEM Engineering & Design delivered structural drawings two weeks ahead of schedule. Their attention to detail saved us six figures during construction. Easily the most professional engineering team we've worked with.",
  },
  {
    name: "Amelia Chen",
    role: "Principal Architect, Studio Nord",
    avatar: "https://i.pravatar.cc/120?img=47",
    rating: 5,
    quote:
      "Our drawings are precise, code-compliant and beautifully documented. They feel like an extension of our architectural team — communication is unmatched.",
  },
  {
    name: "Marcus Rivera",
    role: "Owner, Rivera Construction",
    avatar: "https://i.pravatar.cc/120?img=14",
    rating: 5,
    quote:
      "The supervision team caught issues on site that would have cost us months. This is the kind of partner you keep on speed dial.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  return (
    <section className="section-y bg-[var(--charcoal)]/40">
      <div className="container-x">
        <SectionTitle
          eyebrow="Testimonials"
          title={
            <>
              Trusted by <span className="text-gradient-gold">developers & architects</span>
            </>
          }
          align="center"
        />

        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-[var(--shadow-elegant)] relative">
            <Quote className="absolute -top-4 -left-2 size-14 text-primary/30" />
            <div className="flex gap-1 text-primary mb-5">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/95">"{t.quote}"</p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="size-12 rounded-full border border-border"
                loading="lazy"
              />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-4 bg-border"}`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="grid place-items-center size-10 rounded-full border border-border hover:border-primary hover:text-primary transition"
                aria-label="Previous"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={next}
                className="grid place-items-center size-10 rounded-full border border-border hover:border-primary hover:text-primary transition"
                aria-label="Next"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
