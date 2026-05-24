import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Engineering Services | KEM Engineering & Design" },
      { name: "description", content: "Civil and structural engineering services in Ghana — AutoCAD drafting, structural drawings, architectural design and on-site supervision." },
      { property: "og:title", content: "Engineering Services | KEM Engineering & Design" },
      { property: "og:description", content: "Civil and structural engineering services in Ghana." },
      { property: "og:url", content: "https://apex-design-co.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://apex-design-co.lovable.app/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="What We Do"
        title={<>Engineering services, <span className="text-gradient-gold">end to end</span></>}
        subtitle="From the first sketch to the final inspection — pick a service to see deliverables, who it's for and what's included."
      />
      <section className="container-x pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-xl p-6 border border-border bg-[var(--gradient-card)] hover:border-primary/40 transition-all"
            >
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Explore <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
