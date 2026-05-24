import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog | KEM Engineering & Design | Ghana" },
      { name: "description", content: "Practical guides on building, structural engineering and construction in Ghana — from the engineering team at KEM." },
      { property: "og:title", content: "Insights & Blog | KEM Engineering & Design" },
      { property: "og:description", content: "Practical engineering and construction guides for Ghana." },
      { property: "og:url", content: "https://apex-design-co.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://apex-design-co.lovable.app/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Insights"
        title={<>From the <span className="text-gradient-gold">engineering desk</span></>}
        subtitle="Practical guides on building costs, structural design and construction best-practice in Ghana."
      />
      <section className="container-x pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-xl p-6 border border-border bg-[var(--gradient-card)] hover:border-primary/40 transition">
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary">
                {new Date(p.date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })} · {p.readMins} min read
              </div>
              <h2 className="mt-3 text-xl font-semibold group-hover:text-primary transition">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
