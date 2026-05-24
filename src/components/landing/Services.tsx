import {
  ArrowUpRight,
  Building2,
  Compass,
  DraftingCompass,
  HardHat,
  Layers3,
  Pencil,
  Ruler,
  Wrench,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const ICON_MAP = {
  DraftingCompass,
  Layers3,
  Compass,
  Ruler,
  HardHat,
  Pencil,
  Wrench,
  Building2,
} as const;

const services = [
  {
    slug: "autocad-drafting",
    icon: "DraftingCompass" as const,
    title: "AutoCAD Drafting",
    desc: "Production-grade 2D drafting for architectural, structural, MEP and civil layouts.",
  },
  {
    slug: "structural-drawings",
    icon: "Layers3" as const,
    title: "Structural Drawings",
    desc: "Stamped structural drawings for foundations, columns, slabs and steel detailing.",
  },
  {
    slug: "architectural-design",
    icon: "Compass" as const,
    title: "Architectural Design",
    desc: "Concept-to-permit architectural design rooted in function and aesthetic.",
  },
  {
    slug: "building-planning",
    icon: "Ruler" as const,
    title: "Building Planning",
    desc: "Master plans, zoning analysis and code-compliant site planning.",
  },
  {
    slug: "construction-supervision",
    icon: "HardHat" as const,
    title: "Construction Supervision",
    desc: "On-site quality control, RFI handling and milestone supervision.",
  },
  {
    slug: "quantity-surveying",
    icon: "Pencil" as const,
    title: "Quantity Surveying",
    desc: "Accurate BOQs, cost estimation and tender documentation.",
  },
  {
    slug: "renovation-planning",
    icon: "Wrench" as const,
    title: "Renovation Planning",
    desc: "Retrofits, structural upgrades and adaptive reuse strategies.",
  },
  {
    slug: "3d-visualization",
    icon: "Building2" as const,
    title: "3D Visualization",
    desc: "Photoreal renders and walkthroughs for client and stakeholder buy-in.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-y">
      <div className="container-x">
        <SectionTitle
          eyebrow="What We Do"
          title={
            <>
              End-to-end <span className="text-gradient-gold">engineering services</span>
            </>
          }
          subtitle="A complete civil and structural engineering studio — from the first line on a blueprint to the final inspection."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block rounded-xl p-6 border border-border bg-[var(--gradient-card)] hover:border-primary/40 transition-all overflow-hidden h-full"
                >
                  <div className="grid place-items-center size-12 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    Learn more{" "}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
