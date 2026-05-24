import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFab } from "@/components/landing/WhatsAppFab";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="pt-24 md:pt-28">
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="container-x py-10 md:py-14">
      {eyebrow && (
        <div className="text-[11px] uppercase tracking-[0.25em] text-primary">{eyebrow}</div>
      )}
      <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-[1.05]">{title}</h1>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </section>
  );
}
