import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { SectionTitle } from "./SectionTitle";
import { ArrowUpRight } from "lucide-react";
import { projects as allProjects } from "@/data/projects";

const cats = ["All", "Residential", "Commercial", "Structural Design", "CAD Projects"] as const;
type Cat = (typeof cats)[number];

const projects = allProjects.map((p, i) => ({
  slug: p.slug,
  src: p.image,
  title: p.name,
  location: p.location,
  cat: p.category as Cat,
  tall: i === 0 || i === 3,
}));

export function Projects() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="section-y bg-[var(--charcoal)]/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="Selected Work"
            title={
              <>
                Engineered with <span className="text-gradient-gold">intent</span>.
              </>
            }
            subtitle="A glimpse into recent projects across residential, commercial and structural design."
          />
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${
                  active === c
                    ? "bg-[var(--gradient-gold)] text-primary-foreground border-transparent"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-5">
          {filtered.map((p, i) => (
            <Link
              key={p.title + i}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className={`group relative overflow-hidden rounded-xl border border-border ${p.tall ? "row-span-2" : ""}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{p.cat}</div>
                  <div className="text-lg font-semibold mt-1">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.location}</div>
                </div>
                <span className="grid place-items-center size-9 rounded-full bg-[var(--gradient-gold)] text-primary-foreground translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
