import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio | KEM Engineering & Design" },
      { name: "description", content: "Selected residential, commercial and structural engineering projects delivered across Ghana." },
      { property: "og:title", content: "Projects | KEM Engineering & Design" },
      { property: "og:description", content: "Selected residential, commercial and structural engineering projects across Ghana." },
      { property: "og:url", content: "https://apex-design-co.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://apex-design-co.lovable.app/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Selected Work"
        title={<>Engineered with <span className="text-gradient-gold">intent</span>.</>}
        subtitle="A glimpse into recent projects across residential, commercial and structural design in Ghana."
      />
      <section className="container-x pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group rounded-xl overflow-hidden border border-border bg-card"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{p.category}</div>
                <div className="mt-1 text-lg font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.location} · {p.year}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
