export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "cost-to-build-house-ghana-2025",
    title: "How Much Does It Cost to Build a House in Ghana in 2025?",
    excerpt:
      "A transparent breakdown of land, foundation, structure, finishing and professional fees for building a home in Ghana in 2025.",
    date: "2025-03-12",
    readMins: 7,
    body: [
      "Building a house in Ghana in 2025 typically costs between GHS 5,500 and GHS 12,000 per square metre, depending on location, finishes and the structural system you choose. The cost is driven by four main buckets: land, structure, finishing, and professional fees.",
      "Land prices vary dramatically — a serviced plot in East Legon will cost many times more than the same size in Kasoa or Nsawam. Always factor in survey, title perfection and any required site preparation before committing to a budget.",
      "On the structural side, a single-storey, three-bedroom house with conventional block-and-column construction will generally land between GHS 350,000 and GHS 700,000 for the shell. Switching to lightweight steel framing or pre-cast systems can shorten the schedule but increases material cost.",
      "Finishing is where budgets most often overrun. Tiles, sanitary ware, kitchens and joinery can account for 30–40% of total cost. Lock down a finishes schedule before tendering to avoid surprises.",
      "Professional fees (architectural, structural, supervision) typically run 6–10% of construction cost — a small price to pay for drawings that prevent expensive on-site mistakes.",
      "Want a tailored estimate for your project? Request a free consultation and we'll prepare a high-level cost plan within 3 working days.",
    ],
  },
  {
    slug: "why-you-need-structural-engineer",
    title: "Why You Need a Structural Engineer Before Starting Construction",
    excerpt:
      "Skipping the structural engineer is the single most expensive mistake homeowners make. Here's why.",
    date: "2025-02-20",
    readMins: 5,
    body: [
      "It's tempting to ask the contractor to 'just build it' from a borrowed plan. We see the consequences every week — walls cracking within 18 months, slabs deflecting, columns under-sized for the loads they actually carry.",
      "A structural engineer does three things a contractor cannot: calculates the actual loads on every member, designs the foundation for the soil under your specific site, and stamps drawings that protect you legally if anything goes wrong.",
      "Structural fees usually represent less than 2% of total project cost. Remediation after a structural failure can easily exceed 30%. The math is not subtle.",
      "If you're about to start construction, get a structural review of any drawings you have — even ones from a friend. It's the cheapest insurance policy you'll ever buy.",
    ],
  },
  {
    slug: "top-construction-mistakes-accra",
    title: "Top 5 Construction Mistakes Homeowners Make in Accra",
    excerpt:
      "From skipping soil tests to underestimating drainage, these five mistakes cost Accra homeowners millions every year.",
    date: "2025-01-30",
    readMins: 6,
    body: [
      "1. Skipping the soil test. Accra's soils vary block by block. Building on poorly understood ground is the #1 cause of foundation cracks.",
      "2. Buying materials before drawings are finalised. You'll over-order on some items and run out of others — both expensive.",
      "3. Hiring the cheapest contractor. The cheapest bid almost always becomes the most expensive project once variations and rework are added.",
      "4. Ignoring drainage. Accra's rainy season is unforgiving. Plan stormwater drainage before pouring the first column footing.",
      "5. No site supervision. Even good contractors cut corners when no one is watching. An independent supervisor pays for themselves many times over.",
    ],
  },
  {
    slug: "hiring-engineering-firm-ghana",
    title: "What to Look for When Hiring an Engineering Firm in Ghana",
    excerpt: "Five questions to ask any engineering firm before you sign the contract.",
    date: "2025-01-10",
    readMins: 4,
    body: [
      "1. Are your engineers registered with the Ghana Institution of Engineers? Registration matters — it means your drawings will be accepted by the assembly without delays.",
      "2. Can I see drawings from past projects? A real firm will share redacted samples of similar work.",
      "3. Who will actually work on my project? Make sure the senior engineer you meet is the one signing your drawings.",
      "4. What's your revision policy? Reasonable firms include 1–2 rounds of design revisions in the base fee.",
      "5. Do you offer construction supervision? The firm that designed the building is best placed to supervise it being built.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
