export type Service = {
  slug: string;
  title: string;
  short: string;
  who: string;
  description: string;
  deliverables: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "autocad-drafting",
    title: "AutoCAD Drafting",
    short: "Production-grade 2D drafting for architectural, structural, MEP and civil layouts.",
    who: "Architects, contractors and developers needing accurate, ready-to-build construction documents.",
    description:
      "Our drafting team produces clean, code-compliant CAD documentation across architectural, structural, MEP and civil disciplines. We follow your office standards or apply industry best practices for layer naming, line weights and titleblocks.",
    deliverables: [
      "Floor plans, elevations and sections",
      "Site and survey drawings",
      "Detail callouts and schedules",
      "DWG, DXF and PDF deliverables",
    ],
    icon: "DraftingCompass",
  },
  {
    slug: "structural-drawings",
    title: "Structural Engineering Drawings",
    short: "Stamped structural drawings for foundations, columns, slabs and steel detailing.",
    who: "Developers and homeowners building from foundation up — residential to commercial.",
    description:
      "Full structural design and documentation: load analysis, member sizing, foundation design and detailed reinforcement drawings. Every drawing is reviewed by a senior engineer before release.",
    deliverables: [
      "Foundation and slab design",
      "Column, beam and roof framing",
      "Reinforcement detailing",
      "Structural calculations report",
    ],
    icon: "Layers3",
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    short: "Concept-to-permit architectural design rooted in function and aesthetic.",
    who: "Clients planning new builds, additions or major renovations.",
    description:
      "From concept sketches to permit-ready drawings, we design spaces that are beautiful, buildable and tailored to how you actually live or work.",
    deliverables: [
      "Concept and schematic design",
      "Permit drawing set",
      "3D massing studies",
      "Material and finish recommendations",
    ],
    icon: "Compass",
  },
  {
    slug: "building-planning",
    title: "Building Planning",
    short: "Master plans, zoning analysis and code-compliant site planning.",
    who: "Land owners, developers and investors evaluating site potential.",
    description:
      "We translate your land into a development plan that maximises value while staying compliant with zoning and building codes.",
    deliverables: [
      "Site analysis and zoning report",
      "Master plan options",
      "Setback and FAR studies",
      "Permit submission package",
    ],
    icon: "Ruler",
  },
  {
    slug: "construction-supervision",
    title: "Construction Supervision",
    short: "On-site quality control, RFI handling and milestone supervision.",
    who: "Owners building remotely or anyone wanting an independent set of eyes on site.",
    description:
      "Senior engineers visit site at agreed milestones, issue inspection reports and resolve construction queries — keeping quality high and rework low.",
    deliverables: [
      "Milestone inspection reports",
      "RFI and change-order management",
      "Quality control checklists",
      "Photographic progress logs",
    ],
    icon: "HardHat",
  },
  {
    slug: "quantity-surveying",
    title: "Quantity Surveying",
    short: "Accurate BOQs, cost estimation and tender documentation.",
    who: "Owners and developers wanting transparent pricing before breaking ground.",
    description:
      "Detailed bills of quantities and cost plans help you compare contractor bids fairly and avoid budget shocks mid-project.",
    deliverables: [
      "Bill of quantities (BOQ)",
      "Pre-tender cost estimate",
      "Tender evaluation report",
      "Variation and valuation tracking",
    ],
    icon: "Pencil",
  },
  {
    slug: "renovation-planning",
    title: "Renovation Planning",
    short: "Retrofits, structural upgrades and adaptive reuse strategies.",
    who: "Owners modernising older properties or repurposing existing buildings.",
    description:
      "We assess the existing structure, identify what can stay and what must be upgraded, and design a renovation plan that respects the building's bones.",
    deliverables: [
      "Existing condition survey",
      "Structural feasibility report",
      "Renovation drawings",
      "Phased construction plan",
    ],
    icon: "Wrench",
  },
  {
    slug: "3d-visualization",
    title: "3D Visualization",
    short: "Photoreal renders and walkthroughs for client and stakeholder buy-in.",
    who: "Developers marketing pre-construction projects or clients wanting to preview their home.",
    description:
      "Photoreal interior and exterior renders that help you sell, secure financing, or simply fall in love with your design before a single block is laid.",
    deliverables: [
      "Exterior renders (day & night)",
      "Interior renders",
      "Animated walkthrough video",
      "Marketing-ready stills",
    ],
    icon: "Building2",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
