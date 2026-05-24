import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { getPost, posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    const title = p ? `${p.title} | KEM Engineering & Design` : "Article";
    const desc = p?.excerpt ?? "";
    const url = `https://apex-design-co.lovable.app/blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: p
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: p.title,
                datePublished: p.date,
                author: { "@type": "Organization", name: "KEM Engineering & Design" },
                publisher: { "@type": "Organization", name: "KEM Engineering & Design" },
              }),
            },
          ]
        : [],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  return (
    <SiteShell>
      <article className="container-x py-12 max-w-3xl">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">
          ← All articles
        </Link>
        <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-primary">
          {new Date(post.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          · {post.readMins} min read
        </div>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-8 space-y-5 text-foreground/90 leading-relaxed">
          {post.body.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section className="container-x pb-24 max-w-3xl">
          <h2 className="text-xl font-semibold">Keep reading</h2>
          <div className="mt-5 grid sm:grid-cols-2 gap-5">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="rounded-xl p-5 border border-border hover:border-primary/40 transition"
              >
                <div className="font-semibold">{p.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.readMins} min read</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteShell>
  );
}
