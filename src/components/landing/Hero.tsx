import heroImg from "@/assets/hero-construction.jpg";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Modern skyscraper construction at dusk with cranes and steel framework"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-primary">
            <Sparkles className="size-3.5" /> Licensed Civil Engineers
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Precision Engineering &<br />
            <span className="text-gradient-gold">Modern Construction</span>
            <br />Solutions
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            From AutoCAD drafting and structural drawings to architectural planning and on-site supervision — we engineer landmark projects with precision, code-compliance, and a relentless eye for detail.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5">
              Request Consultation <ArrowRight className="size-4" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition-colors">
              View Projects
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Senior PE Engineers</div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="hidden sm:block">Licensed Structural Engineers</div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <ContactForm variant="hero" />
        </motion.div>
      </div>
    </section>
  );
}
