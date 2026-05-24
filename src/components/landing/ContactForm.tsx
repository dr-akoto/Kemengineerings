import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(6, "Phone is required").max(30),
  email: z.string().trim().email("Valid email required").max(255),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

const services = [
  "AutoCAD Drafting",
  "Structural Engineering Drawings",
  "Architectural Design",
  "Building Planning",
  "Construction Supervision",
  "Quantity Surveying",
  "Renovation Planning",
  "3D Building Visualization",
];

export function ContactForm({ variant = "hero" }: { variant?: "hero" | "page" }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const map: Record<string, string> = {};
      r.error.issues.forEach((i) => (map[String(i.path[0])] = i.message));
      setErrors(map);
      return;
    }
    setErrors({});

    const d = r.data;
    const subject = `Consultation Request — ${d.service}`;
    const body =
      `Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nService: ${d.service}\n\n${d.message}`;

    // Open email client (to company email)
    const mailto = `mailto:kemclassic7@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    // Also open WhatsApp to company phone in a new tab so the message reaches both channels
    const wa = `https://wa.me/233208450327?text=${encodeURIComponent(subject + "\n\n" + body)}`;
    window.open(wa, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  if (sent) {
    return (
      <div className={`glass rounded-2xl p-8 ${variant === "hero" ? "shadow-[var(--shadow-elegant)]" : ""}`}>
        <div className="flex flex-col items-center text-center py-8">
          <CheckCircle2 className="size-14 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Request received</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            Thanks — a senior engineer will reach out within one business day to schedule your consultation.
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-md bg-[var(--input)] border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";

  return (
    <form
      onSubmit={onSubmit}
      className={`glass rounded-2xl p-6 md:p-8 ${variant === "hero" ? "shadow-[var(--shadow-elegant)]" : ""}`}
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-xl font-semibold">Request Consultation</h3>
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary">Free</span>
      </div>
      <p className="text-xs text-muted-foreground mb-5">Reply within 1 business day.</p>

      <div className="space-y-3">
        <div>
          <input name="name" placeholder="Full Name" className={inputCls} maxLength={100} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input name="phone" placeholder="Phone Number" className={inputCls} maxLength={30} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
          </div>
          <div>
            <input name="email" type="email" placeholder="Email" className={inputCls} maxLength={255} />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
        </div>
        <div>
          <select name="service" defaultValue="" className={inputCls}>
            <option value="" disabled>Service Needed</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>
        <div>
          <textarea name="message" placeholder="Project details" rows={4} maxLength={1000} className={inputCls} />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-[var(--gradient-gold)] px-5 py-3.5 text-sm font-semibold text-white hover:shadow-[var(--shadow-gold)] transition-all hover:-translate-y-0.5"
        >
          Book My Consultation <ArrowRight className="size-4" />
        </button>
        <p className="text-[11px] text-center text-muted-foreground/80">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </form>
  );
}
