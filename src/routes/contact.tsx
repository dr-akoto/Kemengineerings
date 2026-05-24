import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { ContactForm } from "@/components/landing/ContactForm";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact KEM Engineering & Design | Iron-City, Kasoa, Ghana" },
      { name: "description", content: "Visit our office in Iron-City, Kasoa or reach us by phone, WhatsApp or email. Free consultations for new engineering projects in Ghana." },
      { property: "og:title", content: "Contact KEM Engineering & Design" },
      { property: "og:description", content: "Reach our engineering studio in Iron-City, Kasoa, Ghana." },
      { property: "og:url", content: "https://apex-design-co.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://apex-design-co.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Let's <span className="text-gradient-gold">build together</span></>}
        subtitle="Tell us about your project and a senior engineer will respond within one business day."
      />

      <section className="container-x grid lg:grid-cols-2 gap-10 pb-16">
        <div className="space-y-5">
          <a href="tel:+233208450327" className="flex gap-4 p-5 rounded-xl border border-border hover:border-primary/50 transition">
            <span className="grid place-items-center size-12 rounded-lg bg-primary/10 text-primary"><Phone className="size-5" /></span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Phone</div>
              <div className="font-semibold mt-0.5">020 845 0327</div>
            </div>
          </a>
          <a href="https://wa.me/233208450327?text=Hi%20KEM%20Engineering%20%26%20Design%2C%20I%27d%20like%20a%20consultation" target="_blank" rel="noopener noreferrer" className="flex gap-4 p-5 rounded-xl border border-border hover:border-primary/50 transition">
            <span className="grid place-items-center size-12 rounded-lg bg-primary/10 text-primary"><MessageCircle className="size-5" /></span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</div>
              <div className="font-semibold mt-0.5">Chat with us instantly</div>
            </div>
          </a>
          <a href="mailto:kemclassic7@icloud.com" className="flex gap-4 p-5 rounded-xl border border-border hover:border-primary/50 transition">
            <span className="grid place-items-center size-12 rounded-lg bg-primary/10 text-primary"><Mail className="size-5" /></span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Email</div>
              <div className="font-semibold mt-0.5">kemclassic7@icloud.com</div>
            </div>
          </a>
          <div className="flex gap-4 p-5 rounded-xl border border-border">
            <span className="grid place-items-center size-12 rounded-lg bg-primary/10 text-primary"><MapPin className="size-5" /></span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Office</div>
              <div className="font-semibold mt-0.5">Iron-City, Kasoa, Accra, Ghana</div>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-xl border border-border">
            <span className="grid place-items-center size-12 rounded-lg bg-primary/10 text-primary"><Clock className="size-5" /></span>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Hours</div>
              <div className="font-semibold mt-0.5">Mon–Sat · 8:00 – 18:00</div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm variant="page" />
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-2xl overflow-hidden border border-border">
          <iframe
            title="KEM Engineering & Design — Iron-City, Kasoa, Ghana"
            src="https://www.google.com/maps?q=Iron+City+Kasoa+Ghana&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </SiteShell>
  );
}
