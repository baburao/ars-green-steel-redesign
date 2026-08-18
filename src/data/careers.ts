export type CareerDepartment = "Sales & Business Development" | "Operations & Logistics" | "Plant Leadership";

export type CareerJob = {
  slug: string;
  title: string;
  shortTitle: string;
  department: CareerDepartment;
  experience: string;
  status: "closed";
  summary: string;
  highlights: string[];
  responsibilities: string[];
  qualifications: string[];
  competencies?: string[];
  successMeasures?: string[];
};

export const careerDepartments: CareerDepartment[] = [
  "Sales & Business Development",
  "Operations & Logistics",
  "Plant Leadership",
];

export const careerJobs: CareerJob[] = [
  {
    slug: "oem-sales-senior-manager",
    title: "AGM / Senior Manager — OEM Sales, Steel & TMT",
    shortTitle: "AGM / Senior Manager, OEM Sales",
    department: "Sales & Business Development",
    experience: "6–10 years",
    status: "closed",
    summary:
      "Lead customer acquisition and enterprise relationships across OEM, manufacturing, SME, and MSME segments while building a disciplined sales pipeline.",
    highlights: ["Enterprise sales", "OEM relationships", "Pipeline ownership"],
    responsibilities: [
      "Acquire and develop customers across OEM, manufacturing, SME, and MSME segments.",
      "Build, manage, and forecast a healthy opportunity pipeline against revenue goals.",
      "Engage procurement teams and senior decision-makers through consultative selling.",
      "Negotiate commercial terms and coordinate internally to support customer activation and account growth.",
      "Maintain accurate activity, opportunity, and account information in the CRM.",
      "Track industry developments and translate market insight into practical sales action.",
    ],
    qualifications: [
      "Bachelor’s degree in engineering, business, marketing, or a related discipline; an MBA is preferred.",
      "6–10 years of B2B business development or enterprise sales experience.",
      "Experience in steel, industrial products, manufacturing, building materials, engineering, or distribution.",
      "Working knowledge of SME/MSME procurement, target-led sales, negotiation, CRM tools, and Microsoft Office.",
    ],
    competencies: [
      "Hunter mindset with consultative selling ability",
      "Relationship and stakeholder management",
      "Commercial judgement and negotiation",
      "Ownership, pipeline discipline, and data-led decision-making",
    ],
    successMeasures: [
      "Customer acquisition and revenue contribution",
      "Account activation, conversion, and repeat business",
      "Pipeline quality and forecast accuracy",
    ],
  },
  {
    slug: "logistics-manager-tmt-dispatch",
    title: "Manager — Logistics, TMT Dispatch",
    shortTitle: "Manager, Logistics & TMT Dispatch",
    department: "Operations & Logistics",
    experience: "10+ years",
    status: "closed",
    summary:
      "Own end-to-end TMT dispatch operations, transporter coordination, documentation, and cost control in a high-volume steel environment.",
    highlights: ["TMT dispatch", "Transport operations", "Cost control"],
    responsibilities: [
      "Manage end-to-end dispatch planning and execution for TMT products.",
      "Coordinate transporters and logistics vendors, including vehicle placement, scheduling, route planning, and rate discussions.",
      "Work closely with sales, production, stores, and accounts to maintain dispatch continuity.",
      "Ensure accurate freight billing and control LR, POD, and other dispatch documentation.",
      "Monitor logistics cost, service performance, and operational MIS.",
      "Resolve day-to-day constraints while maintaining control in a high-volume dispatch environment.",
    ],
    qualifications: [
      "10 or more years of logistics experience in TMT, steel, cement, or a comparable bulk-material environment.",
      "Strong knowledge of bulk dispatch, transporter management, freight documentation, and cost control.",
      "Demonstrated coordination, problem-solving, and operational planning ability.",
      "Experience with ERP or SAP systems is preferred.",
    ],
  },
  {
    slug: "business-development-project-sales",
    title: "Business Development — TMT Bars, Long Products & Project Sales",
    shortTitle: "Business Development, Project Sales",
    department: "Sales & Business Development",
    experience: "4–7 years",
    status: "closed",
    summary:
      "Develop project and institutional business for TMT bars and long products across construction, infrastructure, contractor, consultant, and EPC networks.",
    highlights: ["Project sales", "TMT bars", "Institutional business"],
    responsibilities: [
      "Develop sales opportunities across infrastructure and construction projects.",
      "Build relationships with builders, contractors, consultants, EPC organisations, and other project stakeholders.",
      "Manage the sales cycle from enquiry and registration through dispatch and collections.",
      "Support project approvals and vendor registration requirements.",
      "Coordinate dispatch execution and work toward monthly sales and collection goals.",
      "Gather market intelligence on projects, competitors, demand, and commercial movement.",
    ],
    qualifications: [
      "Graduate qualification; an MBA is preferred.",
      "4–7 years of relevant experience in steel, TMT, or project sales.",
      "An established network within construction or infrastructure markets.",
      "Strong negotiation, relationship-building, and commercial follow-through.",
      "Exposure to institutional, government, private, EPC, infrastructure, steel, or building-material sales is preferred.",
    ],
  },
  {
    slug: "factory-head-steel-plant",
    title: "Factory Head — Steel Melting Shop & Rolling Mill",
    shortTitle: "Factory Head, Steel Plant",
    department: "Plant Leadership",
    experience: "20+ years",
    status: "closed",
    summary:
      "Lead integrated steel-plant performance across the steel melting shop and rolling mill, balancing safety, quality, delivery, reliability, people, and cost.",
    highlights: ["Plant leadership", "SMS & rolling mill", "Operational excellence"],
    responsibilities: [
      "Lead steel melting shop, furnace, casting, and rolling-mill operations from raw material conversion through finished TMT output.",
      "Drive productivity, yield, process reliability, and first-time-right quality through disciplined operating systems.",
      "Own plant financial performance with focus on energy, fuel, consumables, waste, rejects, rework, and overall conversion cost.",
      "Identify debottlenecking and capacity-improvement opportunities and lead approved plant projects.",
      "Align production plans with sales, inventory, dispatch, and on-time delivery priorities.",
      "Strengthen preventive and predictive maintenance, equipment reliability, and operational readiness.",
      "Maintain BIS and internal quality controls together with safety, Factory Act, and pollution-control compliance.",
      "Build a culture of accountability, capability development, continuous improvement, and cross-functional cooperation.",
    ],
    qualifications: [
      "20 or more years of experience in steel or TMT manufacturing.",
      "At least 5 years in a Plant Head, Factory Head, or comparable senior operating role.",
      "Hands-on leadership experience across both a steel melting shop and rolling mill.",
      "Experience managing high-volume steel production and complex plant stakeholders.",
      "Strong command of plant P&L, maintenance, quality, safety, productivity, and process-improvement systems.",
    ],
    competencies: [
      "Visible safety and operations leadership",
      "Technical depth across SMS and rolling operations",
      "Commercial and cost ownership",
      "Structured problem-solving and continuous improvement",
      "People development and stakeholder alignment",
    ],
  },
];

export function getCareerJob(slug: string) {
  return careerJobs.find((job) => job.slug === slug);
}
