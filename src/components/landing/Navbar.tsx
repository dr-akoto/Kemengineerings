import { useEffect, useState } from "react";
import { Menu, X, Hammer } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/about" as const, label: "About" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/contact" as const, label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-[0_8px_30px_-12px_oklch(0_0_0/0.5)] max-md:!bg-background/90 max-md:!backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid place-items-center size-9 rounded-md bg-[var(--gradient-gold)] text-primary-foreground">
            <Hammer className="size-5" strokeWidth={2.4} />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-base md:text-lg tracking-tight">
              KEM <span className="text-gradient-gold">ENGINEERING</span>
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Consult & Design
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-[var(--gradient-gold)] px-4 lg:px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-gold)] transition-shadow"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border max-md:!bg-background/95">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center rounded-md bg-[var(--gradient-gold)] px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
