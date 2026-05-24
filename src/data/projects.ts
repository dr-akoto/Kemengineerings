import p1 from "@/assets/proj-1.jpg";
import p2 from "@/assets/proj-2.jpg";
import p3 from "@/assets/proj-3.jpg";
import p4 from "@/assets/proj-4.jpg";
import p5 from "@/assets/proj-5.jpg";
import p6 from "@/assets/proj-6.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  category: "Residential" | "Commercial" | "Structural Design" | "CAD Projects";
  image: string;
  scope: string;
  challenge: string;
  outcome: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "crestwood-villa",
    name: "Crestwood Villa",
    location: "East Legon, Accra",
    category: "Residential",
    image: p1,
    scope: "Full architectural and structural design for a 5-bedroom contemporary villa.",
    challenge: "A sloping site required custom stepped foundations and careful drainage planning.",
    outcome: "Delivered permit-ready drawings in 6 weeks; structure completed on time and on budget.",
    year: "2024",
  },
  {
    slug: "meridian-tower",
    name: "Meridian Tower",
    location: "Airport City, Accra",
    category: "Commercial",
    image: p2,
    scope: "Structural design and construction supervision for a 9-storey mixed-use tower.",
    challenge: "Tight downtown plot with limited staging area for materials and cranes.",
    outcome: "Phased construction plan reduced site congestion and shaved 4 months off the schedule.",
    year: "2024",
  },
  {
    slug: "beam-grid-detail",
    name: "Beam Grid Detailing",
    location: "Tema Industrial Area",
    category: "Structural Design",
    image: p3,
    scope: "Heavy-load steel beam grid for a 4,000 sqm warehouse facility.",
    challenge: "Long clear spans for forklift movement without intermediate columns.",
    outcome: "Optimised steel tonnage by 12% while meeting all deflection limits.",
    year: "2023",
  },
  {
    slug: "atrium-wireframe",
    name: "Atrium Wireframe",
    location: "Kasoa, Central Region",
    category: "CAD Projects",
    image: p4,
    scope: "Detailed CAD documentation for a triple-height retail atrium.",
    challenge: "Complex glazing and steel intersections required precise 3D coordination.",
    outcome: "Zero on-site clashes during atrium installation.",
    year: "2024",
  },
  {
    slug: "skyline-site",
    name: "Skyline Site",
    location: "Cantonments, Accra",
    category: "Commercial",
    image: p5,
    scope: "Site planning and architectural design for a boutique office complex.",
    challenge: "Maximising rentable area while preserving mature trees on site.",
    outcome: "Achieved 92% site coverage with zero tree loss and full code compliance.",
    year: "2023",
  },
  {
    slug: "halden-concrete-house",
    name: "Halden Concrete House",
    location: "Iron-City, Kasoa",
    category: "Residential",
    image: p6,
    scope: "Architectural and structural design for an exposed-concrete family home.",
    challenge: "Achieving fair-faced concrete finish in a humid coastal climate.",
    outcome: "Custom formwork and mix design produced a flawless architectural finish.",
    year: "2025",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
