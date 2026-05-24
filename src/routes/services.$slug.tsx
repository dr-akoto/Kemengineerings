import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    const title = s ? `${s.title} | KEM Engineering & Design | Accra, Ghana` : "Service | KEM Engineering & Design";
    const desc = s?.short ?? "Engineering service by KEM Engineering & Design.";
    const url = `https://apex-design-co.lovable.app/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = projects.slice(0, 3);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Service"
        title={<span className="text-gradient-gold">{service.title}</span>}
        subtitle={service.short}
      />
      <section className="container-x pb-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Who it's for</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{service.who}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What's included</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Deliverables</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {service.deliverables.map((d: string) => (
                <li key={d} className="flex gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="glass rounded-2xl p-6 sticky top-28">
            <h3 className="text-lg font-semibold">Start your project</h3>
            <p className="mt-2 text-sm text-muted-foreground">Free 30-minute consultation. Quote within 48 hours.</p>
            <Link
              to="/contact"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-white hover:shadow-[var(--shadow-gold)] transition"
            >
              Request Consultation <ArrowRight className="size-4" />
            </Link>
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground">Other Services</h4>
              <ul className="mt-3 space-y-2">
                {services.filter((s) => s.slug !== service.slug).slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="text-sm hover:text-primary">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </section>

      <section className="container-x pb-24">
        <h2 className="text-2xl font-semibold">Related projects</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="group rounded-xl overflow-hidden border border-border">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover transition-transform group-hover:scale-105" loading="lazy" />
              <div className="p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary">{p.category}</div>
                <div className="mt-1 font-semibold">{p.name}</div>
                <div className="text-xs text-muted-foreground">{p.location}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
