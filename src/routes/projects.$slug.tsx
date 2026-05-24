import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { getProject, projects } from "@/data/projects";
import { ArrowRight, MapPin, Calendar, Tag } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — ${p.location} | KEM Engineering & Design` : "Project";
    const desc = p?.scope ?? "";
    const url = `https://apex-design-co.lovable.app/projects/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <SiteShell>
      <section className="container-x py-10">
        <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
          ← All projects
        </Link>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05]">{project.name}</h1>
        <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            {project.location}
          </span>
          <span className="flex items-center gap-2">
            <Tag className="size-4 text-primary" />
            {project.category}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" />
            {project.year}
          </span>
        </div>
      </section>

      <section className="container-x">
        <div className="rounded-2xl overflow-hidden border border-border">
          <img src={project.image} alt={project.name} className="w-full h-[420px] object-cover" />
        </div>
      </section>

      <section className="container-x py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Scope</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{project.scope}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Challenge</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Outcome</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        <aside>
          <div className="glass rounded-2xl p-6 sticky top-28">
            <h3 className="text-lg font-semibold">Have a similar project?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a tailored quote within 48 hours.
            </p>
            <Link
              to="/contact"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-white"
            >
              Start a Project <ArrowRight className="size-4" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="container-x pb-24">
        <h2 className="text-2xl font-semibold">More projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group rounded-xl overflow-hidden border border-border"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">
                  {p.category}
                </div>
                <div className="mt-1 font-semibold">{p.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
