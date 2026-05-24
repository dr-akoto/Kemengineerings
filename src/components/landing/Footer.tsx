import { Hammer, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--charcoal)]/60">
      <div className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center size-9 rounded-md bg-[var(--gradient-gold)] text-primary-foreground">
              <Hammer className="size-5" strokeWidth={2.4} />
            </span>
            <span className="leading-tight">
              <span className="block font-display font-bold text-lg">
                KEM <span className="text-gradient-gold">ENGINEERING</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Consult & Design
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            A premium civil engineering and construction design studio. Engineering landmark projects with precision and care.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://wa.me/233208450327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid place-items-center size-9 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="mailto:kemclassic7@icloud.com"
              aria-label="Email"
              className="grid place-items-center size-9 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center size-9 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition">Projects</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/services/$slug" params={{ slug: "autocad-drafting" }} className="hover:text-primary transition">AutoCAD Drafting</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "structural-drawings" }} className="hover:text-primary transition">Structural Drawings</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "architectural-design" }} className="hover:text-primary transition">Architectural Design</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "construction-supervision" }} className="hover:text-primary transition">Construction Supervision</Link></li>
            <li><Link to="/services/$slug" params={{ slug: "3d-visualization" }} className="hover:text-primary transition">3D Visualization</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Visit Us</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="size-4 text-primary mt-0.5 shrink-0" /><span>Iron-City, Kasoa, Accra, Ghana</span></li>
            <li className="flex gap-3"><Phone className="size-4 text-primary mt-0.5 shrink-0" /><span>020 845 0327</span></li>
            <li className="flex gap-3"><Mail className="size-4 text-primary mt-0.5 shrink-0" /><span>kemclassic7@icloud.com</span></li>
          </ul>
          <div className="mt-5 rounded-lg overflow-hidden border border-border">
            <iframe
              title="Office location — Iron-City, Kasoa, Ghana"
              src="https://www.google.com/maps?q=Iron+City+Kasoa+Ghana&output=embed"
              className="w-full h-32"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© 2025 KEM Engineering & Design. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
