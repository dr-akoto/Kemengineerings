import { ClipboardList, Compass, FileSignature, HardHat, KeyRound, MapPinned } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const steps = [
  { icon: ClipboardList, title: "Consultation", desc: "We listen, scope your goals and align on outcomes." },
  { icon: MapPinned, title: "Site Assessment", desc: "On-site survey, soil/structural audit and feasibility." },
  { icon: Compass, title: "Design & Planning", desc: "Concept design, code review and stakeholder approvals." },
  { icon: FileSignature, title: "Structural Drafting", desc: "Detailed CAD/BIM drawings ready for permit & build." },
  { icon: HardHat, title: "Construction Support", desc: "On-site supervision, RFIs and quality assurance." },
  { icon: KeyRound, title: "Project Delivery", desc: "Handover, as-builts and post-occupancy support." },
];

export function Process() {
  return (
    <section id="process" className="section-y">
      <div className="container-x">
        <SectionTitle
          eyebrow="Our Process"
          title={<>A clear path from <span className="text-gradient-gold">brief to build</span>.</>}
          subtitle="Six structured stages that keep your project on time, on budget and engineered to last."
          align="center"
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-xl p-6 border border-border bg-[var(--gradient-card)] hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center size-12 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <s.icon className="size-5" />
                </div>
                <span className="text-4xl font-display font-bold text-primary/20">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
