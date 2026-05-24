import bg from "@/assets/cta-bg.jpg";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function CTASection() {
  return (
    <section id="contact" className="relative section-y overflow-hidden">
      <img src={bg} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.04 260 / 0.95), oklch(0.16 0.03 255 / 0.85))" }} />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-primary">
            Let's Build
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            Ready to Build With <span className="text-gradient-gold">Confidence?</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Whether it's a single-family build or a multi-story commercial project — let's design it together. Book a free 30-minute consultation today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:+233208450327" className="inline-flex items-center gap-3 rounded-md border border-border bg-card/40 backdrop-blur px-5 py-4 hover:border-primary/50 transition">
              <span className="grid place-items-center size-10 rounded-lg bg-primary/10 text-primary"><Phone className="size-4" /></span>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Call us</div>
                <div className="text-sm font-semibold">020 845 0327</div>
              </div>
            </a>
            <a href="mailto:kemclassic7@icloud.com" className="inline-flex items-center gap-3 rounded-md border border-border bg-card/40 backdrop-blur px-5 py-4 hover:border-primary/50 transition">
              <span className="grid place-items-center size-10 rounded-lg bg-primary/10 text-primary"><Mail className="size-4" /></span>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                <div className="text-sm font-semibold">kemclassic7@icloud.com</div>
              </div>
            </a>
          </div>

          <a href="#contact-form" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition">
            Book Free Consultation <ArrowRight className="size-4" />
          </a>
        </div>

        <div id="contact-form">
          <ContactForm variant="page" />
        </div>
      </div>
    </section>
  );
}
