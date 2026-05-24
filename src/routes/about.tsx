import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Target, Eye, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About KEM Engineering & Design | Kasoa, Ghana" },
      { name: "description", content: "Premium civil and structural engineering studio in Iron-City, Kasoa, delivering high-value construction projects across Ghana." },
      { property: "og:title", content: "About KEM Engineering & Design" },
      { property: "og:description", content: "Premium civil and structural engineering studio in Kasoa, Ghana." },
      { property: "og:url", content: "https://apex-design-co.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://apex-design-co.lovable.app/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Lead Structural Engineer", role: "Principal · Structural Design", initials: "KE" },
  { name: "Senior Architect", role: "Architectural Lead", initials: "SA" },
  { name: "Project Manager", role: "Construction Supervision", initials: "PM" },
  { name: "Quantity Surveyor", role: "Cost & Tender Lead", initials: "QS" },
];

function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title={<>Engineering with <span className="text-gradient-gold">precision and care</span></>}
        subtitle="KEM Engineering & Design is a civil and structural engineering studio based in Iron-City, Kasoa. We help homeowners, developers and architects build with confidence."
      />

      <section className="container-x grid md:grid-cols-3 gap-6 pb-16">
        {[
          { icon: Target, title: "Mission", text: "Deliver engineering documentation and supervision that makes every project buildable, durable and code-compliant." },
          { icon: Eye, title: "Vision", text: "Be the engineering partner of choice for landmark residential and commercial projects across West Africa." },
          { icon: Award, title: "Values", text: "Precision, transparency, and a relentless commitment to the people who trust us with their projects." },
        ].map((c) => (
          <div key={c.title} className="rounded-xl p-6 border border-border bg-[var(--gradient-card)]">
            <div className="grid place-items-center size-11 rounded-lg bg-primary/10 text-primary border border-primary/20">
              <c.icon className="size-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="container-x pb-16">
        <h2 className="text-3xl font-bold">Our story</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            KEM Engineering & Design was founded with a simple conviction — that better engineering documentation
            saves money on site. After years of watching well-intentioned projects suffer from incomplete drawings,
            missing structural details and absent supervision, we set out to be the partner we wished existed.
          </p>
          <p>
            Today we work with private homeowners, real-estate developers and fellow architects across Ghana —
            providing AutoCAD drafting, structural engineering, architectural design, quantity surveying and
            on-site supervision under one roof.
          </p>
        </div>
      </section>

      <section className="container-x pb-24">
        <h2 className="text-3xl font-bold">The team</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl p-6 border border-border bg-card text-center">
              <div className="mx-auto grid place-items-center size-20 rounded-full bg-[var(--gradient-gold)] text-primary-foreground text-xl font-bold">
                {m.initials}
              </div>
              <div className="mt-4 font-semibold">{m.name}</div>
              <div className="text-xs text-muted-foreground">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
