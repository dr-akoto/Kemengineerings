import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { faqs } from "@/data/faqs";

const WhyUs = lazy(() => import("@/components/landing/WhyUs").then(m => ({ default: m.WhyUs })));
const Projects = lazy(() => import("@/components/landing/Projects").then(m => ({ default: m.Projects })));
const Process = lazy(() => import("@/components/landing/Process").then(m => ({ default: m.Process })));
const Testimonials = lazy(() => import("@/components/landing/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("@/components/landing/FAQ").then(m => ({ default: m.FAQ })));
const CTASection = lazy(() => import("@/components/landing/CTASection").then(m => ({ default: m.CTASection })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KEM Engineering & Design — Civil Engineers, Kasoa Ghana" },
      {
        name: "description",
        content:
          "Civil engineering studio in Kasoa, Ghana. AutoCAD drafting, structural drawings, architectural planning and on-site supervision. Book a free consultation.",
      },
      { property: "og:title", content: "KEM Engineering & Design — Civil Engineering & Construction" },
      { property: "og:description", content: "AutoCAD drafting, structural engineering, architectural planning and on-site supervision in Kasoa, Ghana." },
      { property: "og:url", content: "https://apex-design-co.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://apex-design-co.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <div className="-mt-24 md:-mt-28">
        <Hero />
        <TrustBar />
        <Services />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <WhyUs />
          <Projects />
          <Process />
          <Testimonials />
          <FAQ />
          <CTASection />
        </Suspense>
      </div>
    </SiteShell>
  );
}
