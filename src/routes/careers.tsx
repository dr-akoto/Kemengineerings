import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | KEM Engineering & Design | Kasoa, Ghana" },
      { name: "description", content: "Join a growing engineering studio in Ghana. Send us your CV — we're always interested in talented engineers, drafters and architects." },
      { property: "og:title", content: "Careers at KEM Engineering & Design" },
      { property: "og:description", content: "Join a growing engineering studio in Ghana." },
      { property: "og:url", content: "https://apex-design-co.lovable.app/careers" },
    ],
    links: [{ rel: "canonical", href: "https://apex-design-co.lovable.app/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Careers"
        title={<>Build your career <span className="text-gradient-gold">with us</span></>}
        subtitle="We're a growing studio. There are no open roles right now — but we're always interested in meeting talented engineers, drafters and architects."
      />
      <section className="container-x pb-24">
        <div className="glass rounded-2xl p-8 max-w-2xl">
          <h2 className="text-2xl font-semibold">Send us your CV</h2>
          <p className="mt-2 text-muted-foreground">Email your CV and a short note about your work to <a href="mailto:kemclassic7@icloud.com" className="text-primary">kemclassic7@icloud.com</a>. If there's a fit, we'll be in touch.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-white">
            Or get in touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
