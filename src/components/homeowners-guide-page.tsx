import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CircleDollarSign,
  ClipboardCheck,
  FileDown,
  Factory,
  FileText,
  FlaskConical,
  Handshake,
  Home,
  IndianRupee,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Truck,
  Waves,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { SectionKicker } from "@/components/section-kicker";
import { SiteHeader } from "@/components/site-header";
import { FaqList } from "@/components/faq-list";
import { LeadForm } from "@/components/lead-form";

type AudienceGuideSlug =
  | "tmt-steel-bar-guide-homeowners"
  | "tmt-steel-bar-guide-engineers-architects"
  | "tmt-steel-bar-guide-civil-contractors";

type AudienceCard = {
  title: string;
  body: string;
  icon: LucideIcon;
  image: string;
  href?: string;
  cta?: string;
};

type AudienceGuideConfig = {
  eyebrow: string;
  heroBadge: string;
  heroTitle: string;
  heroAccent: string;
  heroBody: string;
  heroImage: string;
  heroImageAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: { value: string; label: string }[];
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  featurePanels: AudienceCard[];
  carousel: AudienceCard[];
  proof: {
    eyebrow: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    badge: string;
    items: { title: string; body: string; icon: LucideIcon }[];
  };
  resources: AudienceCard[];
  resourceSection: {
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  support: {
    eyebrow: string;
    title: string;
    body: string;
    phoneLabel: string;
    phone: string;
    phoneHref: string;
    phoneNote: string;
    tags: string[];
    image: string;
    imageAlt: string;
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

const homeownerRail = "ars-container";
const homeownerSectionTitle =
  "font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.16] text-ink-900";
const homeownerSectionCopy = "mt-5 max-w-2xl text-base leading-8 text-steel-700";

const audienceGuides: Record<AudienceGuideSlug, AudienceGuideConfig> = {
  "tmt-steel-bar-guide-homeowners": {
    eyebrow: "Homeowner guide",
    heroBadge: "TRUSTED SINCE 1987",
    heroTitle: "Your Dream Home Deserves Steel",
    heroAccent: "You Can Trust.",
    heroBody:
      "ARS Green Steel helps homeowners choose TMT bars with confidence — from steel grade and durability to dealer access and cost planning.",
    heroImage: "/ars-assets/Solutions/HomeOwners/heroBanner.jpg",
    heroImageAlt: "Homeowners standing outside a completed home",
    primaryCta: { label: "Explore products", href: "/products" },
    secondaryCta: { label: "Get a Quote", href: "/request-quote" },
    stats: [
      { value: "550D", label: "Home-ready strength" },
      { value: "SGS", label: "Quality proof" },
      { value: "8-32", label: "Bar size range" },
      { value: "1", label: "Simple enquiry path" },
    ],
    intro: {
      eyebrow: "Homeowner's Buying Guide",
      title: "Choosing the Right Steel for Your Home Starts Here.",
      body:
        "Selecting TMT bars is one of the most important decisions during home construction. The right choice depends on your project's location, environmental conditions, structural requirements, and the quality standards followed by the manufacturer. Here's what every homeowner should know before making a decision.",
    },
    featurePanels: [
      {
        title: "Choose Steel Based on Where You're Building",
        body:
          "Not every construction site faces the same environmental conditions. Homes built in normal environments have different reinforcement requirements than those exposed to moisture, coastal weather, or high-salinity conditions. Choosing the right type of TMT bar based on your location helps improve structural durability and long-term protection.",
        icon: Home,
        image: "/ars-assets/home-owner-banner-1.png",
      },
      {
        title: "Understand Standard and Corrosion-Resistant Steel",
        body:
          "For most residential construction, Fe550D TMT bars provide the strength and ductility required for modern homes. In coastal or high-salinity areas, Corrosion Resistant Steel TMT bars offer additional protection against rust.",
        icon: Handshake,
        image: "/ars-assets/ARSHOME1.jpg",
      },
    ],
    carousel: [
      {
        title: "Quality assurance",
        body:
          "Advanced manufacturing, rigorous testing, and certification help homeowners trust the steel inside their structure.",
        icon: BadgeCheck,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "Enhanced durability",
        body:
          "Strength, flexibility, corrosion resistance, and better concrete bonding improve the life of foundations, beams, and pillars.",
        icon: ShieldCheck,
        image: "/ars-assets/products-all.png",
      },
      {
        title: "Cost savings",
        body:
          "Use the construction calculator to plan requirements before discussing product selection with a dealer or contractor.",
        icon: IndianRupee,
        image: "/ars-assets/ARSHOME4.jpg",
      },
      {
        title: "Home construction cost calculator",
        body: "Estimate requirements by project type, bar size, floors, and built-up area before speaking with sales.",
        icon: Calculator,
        image: "/ars-assets/Solutions/HomeOwners/RecognitionMatters.jpg",
        href: "/tmt-steel-calculator",
        cta: "Open calculator",
      },
      {
        title: "SGS certified assurance",
        body:
          "Independent testing and certification cues give homeowners added confidence before choosing a product.",
        icon: BadgeCheck,
        image: "/ars-assets/awards-certificates-img2.png",
      },
      {
        title: "Home building tips",
        body: "Use simple guidance before finalizing steel grade, bar size, quantity, and dealer support.",
        icon: Ruler,
        image: "/ars-assets/ARSHOME2.jpg",
        href: "/blog.html",
        cta: "Read guides",
      },
    ],
    proof: {
      eyebrow: "Home strength",
      title: "Everything you need to make the right decision for your home.",
      body:
        "ARS keeps the steel decision simple by connecting product proof, construction guidance, testing confidence, and expert support in one homeowner journey.",
      image: "/ars-assets/ARSHOME1.jpg",
      imageAlt: "ARS construction support for residential projects",
      badge: "Better steel choices at every stage of home construction.",
      items: [
        {
          title: "Strong foundations",
          body:
            "TMT bars provide tensile strength and flexibility to withstand loads, moisture, and long-term stresses.",
          icon: Ruler,
        },
        {
          title: "Stronger beams",
          body: "Quality steel rods improve load distribution and help beams perform reliably over time.",
          icon: Wrench,
        },
        {
          title: "Dependable pillars",
          body:
            "High-strength TMT bars support vertical loads and help protect the structural framework of the home.",
          icon: Factory,
        },
      ],
    },
    resources: [
      {
        title: "Build with the future in mind",
        body: "Plan for durability, expansion, energy efficiency, and modern amenities before construction begins.",
        href: "/blog.html",
        icon: Sparkles,
        image: "/ars-assets/ARSHOME2.jpg",
      },
      {
        title: "High quality materials, higher returns",
        body: "The right steel decision protects structural performance and long-term value.",
        href: "/products",
        icon: ShieldCheck,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Trust the experts",
        body: "Get guidance before finalizing steel grade, size, quantity, and source.",
        href: "/contact",
        icon: Phone,
        image: "/ars-assets/Contact_banner.png",
      },
    ],
    resourceSection: {
      eyebrow: "Useful resources",
      title: "Helpful next steps for homeowners.",
      body:
        "Keep product clarity, planning tools, and guidance in one place while you evaluate the right steel path for your home.",
      ctaLabel: "View all products",
      ctaHref: "/products",
    },
    support: {
      eyebrow: "Support",
      title: "Get support from the ARS team.",
      body:
        "Our steel support team can help with product selection, construction guidance, dealer discovery, and site-level questions before you finalize materials.",
      phoneLabel: "Phone",
      phone: "+91 97104 11111",
      phoneHref: "tel:+919710411111",
      phoneNote: "For product, dealer, and project enquiries",
      tags: ["Technical queries", "Order tracking", "Site assistance", "Dealer support"],
      image: "/ars-assets/home-owner-banner-1.png",
      imageAlt: "ARS support for homeowners choosing steel",
    },
    finalCta: {
      eyebrow: "READY TO BUILD?",
      headline: "Let's Build a Stronger Home Together",
      body:
        "Whether you're planning your first home or your next construction project, our team is here to help you choose the right TMT bars, connect with an authorised dealer, and provide the information you need to build with confidence.",
      primaryLabel: "Explore Products",
      primaryHref: "/products",
      secondaryLabel: "Talk to Our Experts",
      secondaryHref: "/contact",
    },
  },
  "tmt-steel-bar-guide-engineers-architects": {
    eyebrow: "Engineers & architects",
    heroBadge: "Specification-Led Construction",
    heroTitle: "The Right Steel.",
    heroAccent: "The Right Specification.",
    heroBody:
      "Every ARS TMT bar is backed by consistent manufacturing, rigorous testing, and transparent technical documentation to support specification-led construction.",
    heroImage: "/ars-assets/Solutions/EngineersArchitects/forEngineersBanner.jpg",
    heroImageAlt: "ARS steel quality testing and technical review",
    primaryCta: { label: "View Technical Specifications", href: "#technical-performance" },
    secondaryCta: { label: "View Products", href: "#engineered-solutions" },
    stats: [
      { value: "550D", label: "Fe-550D grade" },
      { value: "IS", label: "IS 1786:2008" },
      { value: "SGS", label: "Certification proof" },
      { value: "CRS", label: "Corrosion option" },
    ],
    intro: {
      eyebrow: "Technical Foundation",
      title: "Key Technical Parameters for Selecting TMT Bars",
      body:
        "Selecting reinforcement steel goes beyond grade and price. Engineers evaluate mechanical performance, material consistency, manufacturing quality, and compliance with applicable standards to ensure every structure delivers the required strength, durability, and service life.",
    },
    featurePanels: [
      {
        title: "Chemical Composition",
        body:
          "The chemical composition of TMT bars directly influences strength, weldability, ductility, and long-term performance. Maintaining controlled levels of Carbon, Sulphur, Phosphorus, Manganese, and Carbon Equivalent helps achieve consistent mechanical properties while meeting the requirements of IS 1786.",
        icon: FlaskConical,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "Thermo-Mechanical Treatment",
        body:
          "The Thermo-Mechanical Treatment process combines controlled quenching and self-tempering to create a tough outer layer with a ductile core. This improves strength, bendability, weldability, and earthquake-resistant performance without compromising structural reliability.",
        icon: Factory,
        image: "/ars-assets/products-all.png",
      },
    ],
    carousel: [
      {
        title: "Innovative quenching process",
        body:
          "Rapid surface cooling with a softer core helps create high tensile strength without making the bar brittle.",
        icon: Waves,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Precision rib creation",
        body:
          "Rib patterns improve bonding with concrete, helping anchorage and long-term structural stability.",
        icon: Ruler,
        image: "/ars-assets/products-all.png",
      },
      {
        title: "Distinctive logo mold",
        body:
          "Product marking supports authenticity, traceability, and confidence that the steel used is genuine ARS material.",
        icon: BadgeCheck,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Physical properties",
        body:
          "Fe-550D benchmark values and ARS product data should be reviewed against the latest test certificate before final publishing.",
        icon: FileText,
        image: "/ars-assets/awards-certificates-img3.png",
        href: "/products/ars-550d#specifications",
        cta: "View specs",
      },
      {
        title: "Chemical properties",
        body:
          "Chemical composition details are preserved from the source content and remain a client-verification item before launch.",
        icon: TestTube2,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "Mobile steel patrol",
        body:
          "On-road testing support helps engineers verify material quality closer to the project site.",
        icon: Truck,
        image: "/ars-assets/Contact_banner.png",
        href: "/steel-testing",
        cta: "View testing",
      },
    ],
    proof: {
      eyebrow: "Proof system",
      title: "Bring specification, certification, and site confidence into one flow.",
      body:
        "For engineers and architects, ARS connects product specifications, certification cues, testing support, and grade choice into a simpler review path.",
      image: "/ars-assets/awards-certificates-img3.png",
      imageAlt: "ARS product certification and quality proof",
      badge: "Specification support with certification-led confidence.",
      items: [
        {
          title: "Product specifications",
          body: "Use the ARS Fe 550D and CRS 550D pages for grade-level technical review.",
          icon: FileText,
        },
        {
          title: "Testing transparency",
          body: "Quality and testing pages keep proof close to engineering decisions.",
          icon: TestTube2,
        },
        {
          title: "Project collaboration",
          body: "ARS can support grade selection, product verification, and technical enquiry handoff.",
          icon: Handshake,
        },
      ],
    },
    resources: [
      {
        title: "ARS Fe 550D specifications",
        body: "Review the core grade for yield, UTS, elongation, sizes, and project fit.",
        href: "/product-550d",
        icon: FileText,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "ARS CRS Fe 550D",
        body: "Use CRS for coastal, humid, exposed, and long-life construction conditions.",
        href: "/product-crs-550d",
        icon: Waves,
        image: "/ars-assets/logos/ARSCRS550D.png",
      },
      {
        title: "Quality certifications",
        body: "Keep SGS, IS, and environmental proof close to technical review.",
        href: "/our-certification",
        icon: BadgeCheck,
        image: "/ars-assets/awards-certificates-img2.png",
      },
    ],
    resourceSection: {
      eyebrow: "Useful resources",
      title: "Tools and proof for specification-led decisions.",
      body:
        "Keep product data, corrosion guidance, and certification proof close to design reviews, consultant discussions, and technical sign-off.",
      ctaLabel: "View all products",
      ctaHref: "/products",
    },
    support: {
      eyebrow: "Technical support",
      title: "Get support from the ARS technical team.",
      body:
        "Use ARS for grade selection guidance, certification review, testing questions, and product clarification before you finalize specifications.",
      phoneLabel: "Technical desk",
      phone: "+91 97104 11111",
      phoneHref: "tel:+919710411111",
      phoneNote: "For technical review, product proof, and project enquiries",
      tags: ["Specification help", "Test certificates", "Grade guidance", "Project review"],
      image: "/ars-assets/our-quality-1.png",
      imageAlt: "ARS technical and quality support",
    },
    finalCta: {
      eyebrow: "Technical support",
      headline: "Partner with ARS for Specification-Led Construction",
      body:
        "Whether you're preparing project specifications, reviewing technical documentation, or selecting the right reinforcement steel, our engineering team is ready to support your project from design to execution.",
      primaryLabel: "Download ARS Brochure",
      primaryHref: "/certifications#downloads",
      secondaryLabel: "Contact Engineering Team",
      secondaryHref: "/contact",
    },
  },
  "tmt-steel-bar-guide-civil-contractors": {
    eyebrow: "Civil Circle / Contractors",
    heroBadge: "For Contractors & Builders",
    heroTitle: "Built for Every Site.",
    heroAccent: "Trusted for Every Project.",
    heroBody:
      "From individual homes to large construction projects, every build depends on reliable reinforcement. ARS TMT Bars are engineered to deliver consistent quality, dependable strength, and the confidence contractors need to build without compromise.",
    heroImage: "/ars-assets/home/Contractors.jpg",
    heroImageAlt: "Contractors working on an ARS-supported construction project",
    primaryCta: { label: "Explore Products", href: "/products" },
    secondaryCta: { label: "Calculate Steel", href: "/tmt-steel-calculator" },
    stats: [
      { value: "8-32", label: "Bar size range" },
      { value: "550D", label: "Project grade" },
      { value: "SGS", label: "Quality proof" },
      { value: "Site", label: "Testing support" },
    ],
    intro: {
      eyebrow: "Buyer's Guide",
      title: "Choose Steel That Performs on Site",
      body:
        "The right TMT bar does more than strengthen a structure—it helps reduce rework, improves construction efficiency, and gives your clients lasting confidence. Before making a purchase, every contractor should consider consistent quality, workability, strength, availability, genuine products, and long-term value.",
    },
    featurePanels: [
      {
        title: "Consistent Quality",
        body:
          "Every bundle should deliver the same strength and performance. Consistent quality helps avoid unexpected issues during construction.",
        icon: Handshake,
        image: "/ars-assets/ARSHOME1.jpg",
      },
      {
        title: "Easy to Bend & Work With",
        body:
          "Good TMT bars should be easy to bend, cut, and place without affecting their strength, helping save valuable time on site.",
        icon: FlaskConical,
        image: "/ars-assets/our-quality-1.png",
      },
    ],
    carousel: [
      {
        title: "Ductility test result",
        body:
          "High elongation and flexibility help TMT bars absorb stress and deformation without compromising site confidence.",
        icon: ShieldCheck,
        image: "/ars-assets/products-all.png",
      },
      {
        title: "Bendability test",
        body:
          "Bend and rebend testing confirms that bars can withstand handling without visible cracks or loss of integrity.",
        icon: Wrench,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Martensite test",
        body:
          "Testing the quenched outer layer helps validate hardness, strength, and resistance to wear and impact.",
        icon: TestTube2,
        image: "/ars-assets/our-quality-1.png",
      },
      {
        title: "On-site spectrometer testing",
        body:
          "Mobile testing support gives immediate chemical analysis at the construction site when required.",
        icon: Truck,
        image: "/ars-assets/Contact_banner.png",
        href: "/steel-testing",
        cta: "View testing",
      },
      {
        title: "TMT calculation assistance",
        body:
          "ARS can help translate project needs into bar-size, quantity, strength, and ductility conversations.",
        icon: Calculator,
        image: "/ars-assets/ARSHOME4.jpg",
        href: "/tmt-steel-calculator",
        cta: "Calculate steel",
      },
      {
        title: "Quality certifications",
        body:
          "Certification and product proof help contractors support client and consultant conversations.",
        icon: BadgeCheck,
        image: "/ars-assets/awards-certificates-img2.png",
        href: "/our-certification",
        cta: "View proof",
      },
    ],
    proof: {
      eyebrow: "Site confidence",
      title: "A practical support path for civil project teams.",
      body:
        "ARS helps contractors reduce uncertainty across product selection, quantity planning, quality checks, and quote handoff.",
      image: "/ars-assets/Contact_banner.png",
      imageAlt: "ARS project support contact interface",
      badge: "From requirement planning to steel supply enquiry.",
      items: [
        {
          title: "Requirement clarity",
          body: "Calculator and quote routes help structure project needs before sales conversation.",
          icon: ClipboardCheck,
        },
        {
          title: "Quality assurance",
          body: "Testing and certification cues support contractor confidence.",
          icon: BadgeCheck,
        },
        {
          title: "Project handoff",
          body: "Contact and quote paths keep the next step clear for site teams.",
          icon: ArrowRight,
        },
      ],
    },
    resources: [
      {
        title: "Project quote",
        body: "Share product, quantity, site, and project details in one structured request.",
        href: "/request-quote",
        icon: FileText,
        image: "/ars-assets/Contact_banner.png",
      },
      {
        title: "TMT calculator",
        body: "Estimate requirement by project type, built-up area, floors, and bar size.",
        href: "/tmt-steel-calculator",
        icon: Calculator,
        image: "/ars-assets/TMT-Bars.png",
      },
      {
        title: "Steel testing",
        body: "Review testing support and quality verification before high-volume procurement.",
        href: "/steel-testing",
        icon: TestTube2,
        image: "/ars-assets/our-quality-1.png",
      },
    ],
    resourceSection: {
      eyebrow: "Useful resources",
      title: "Project tools that keep site decisions moving.",
      body:
        "Bring steel planning, testing support, and quote handoff into a cleaner contractor workflow without losing the proof behind the product.",
      ctaLabel: "Request project quote",
      ctaHref: "/request-quote",
    },
    support: {
      eyebrow: "Contractor support",
      title: "Get support from the ARS project team.",
      body:
        "Speak with ARS for quantity planning, site testing support, dealer coordination, and project-led product discussions.",
      phoneLabel: "Project support",
      phone: "+91 97104 11111",
      phoneHref: "tel:+919710411111",
      phoneNote: "For project requirements, testing, and supply enquiries",
      tags: ["Quantity planning", "Site testing", "Order support", "Dealer routing"],
      image: "/ars-assets/ARSHOME1.jpg",
      imageAlt: "ARS support for civil contractors",
    },
    finalCta: {
      eyebrow: "Contractor support",
      headline: "Need reliable steel support for your next site?",
      body:
        "Share your project requirement and move from planning to quote with product proof close by.",
      primaryLabel: "Request quote",
      primaryHref: "/request-quote",
      secondaryLabel: "Call ARS",
      secondaryHref: "/contact",
    },
  },
};

const contractorBuyingFactors = [
  ["Consistent Quality", "Every bundle should deliver the same strength and performance. Consistent quality helps avoid unexpected issues during construction."],
  ["Easy to Bend & Work With", "Good TMT bars should be easy to bend, cut, and place without affecting their strength, helping save valuable time on site."],
  ["Strong & Durable", "Choose reinforcement that delivers high strength while remaining flexible enough to perform during heavy loads and seismic conditions."],
  ["Reliable Availability", "A dependable supply helps keep construction moving without delays. Working with an established manufacturer also ensures easy product availability."],
  ["Buy Genuine Products", "Always purchase from authorised dealers and verify product markings to ensure you're using genuine, quality-assured TMT bars."],
  ["Think Beyond Today's Cost", "Quality steel protects the structure for decades. Investing in reliable reinforcement today can reduce maintenance and repair costs in the future."],
] as const;

const contractorBuyingPanels = [
  { image: "/ars-assets/Solutions/Contractors/ConsistentQuality.jpg", alt: "ARS TMT bars representing consistent construction quality", icon: Handshake },
  { image: "/ars-assets/Solutions/Contractors/EasytoBendWorkWith.jpg", alt: "ARS TMT bars designed for efficient bending and site work", icon: FlaskConical },
  { image: "/ars-assets/blog-banners/what-makes-steel-bars-last-long-in-construction-exploring-their-strength-durability/high-strength-and-ductility-1.webp", alt: "High-strength TMT steel reinforcement for durable construction", icon: ShieldCheck },
  { image: "/ars-assets/Solutions/Contractors/ReliableAvailability.jpg", alt: "ARS steel supply supporting uninterrupted construction work", icon: Truck },
  { image: "/ars-assets/blog-banners/check-tmt-bar-quality-on-site/How-to-Check-TMT-Bar-Quality-On-Site-.jpeg", alt: "On-site TMT bar quality verification before purchase", icon: BadgeCheck },
  { image: "/ars-assets/Solutions/Contractors/ThinkBeyondTodayCost.jpg", alt: "ARS TMT bar range for long-term construction value", icon: IndianRupee },
] as const;

const contractorProducts = [
  ["ARS CRS Fe 550D TMT Bars", "Designed for projects exposed to high moisture, high salinity, and corrosive environments. Its enhanced corrosion resistance helps improve the durability and service life of structures, making it suitable for demanding conditions.", "Explore ARS CRS Fe 550D", "/product-crs-550d", "/ars-assets/logos/ARSCRS550D.png"],
  ["ARS Fe 550D TMT Bars", "Ideal for general residential, commercial, and infrastructure construction where high strength, excellent ductility, and reliable performance are essential. A trusted choice for everyday construction projects.", "Explore ARS Fe 550D", "/product-550d", "/ars-assets/TMT-Bars.png"],
  ["ARS Binders", "Factory-made steel binders designed for consistent dimensions, accurate bends, and faster reinforcement work on site. Manufactured with precision to help improve productivity, reduce manual bending time, and deliver uniform quality across construction projects.", "Explore ARS Binders", "/ars-binders", "/ars-assets/logos/BinderLogo.png"],
] as const;

const contractorPerformance = [
  ["High Strength for Reliable Structures", "Engineered to provide dependable strength and long-lasting support for residential, commercial, and infrastructure projects."],
  ["Easy Bendability & Workability", "Designed for smooth bending and easy handling, helping speed up reinforcement work on site."],
  ["Better Weldability", "Supports secure and efficient welding when required, making fabrication and construction easier."],
  ["Superior Ductility", "Offers excellent flexibility to absorb stress and perform reliably under changing load conditions."],
  ["Enhanced Corrosion Resistance (CRS)", "Specially designed to resist corrosion in high moisture and high salinity environments, helping improve structural durability."],
  ["Consistent Manufacturing Quality", "Manufactured under strict quality controls to deliver uniform performance and dependable results in every batch."],
] as const;

const contractorWhyArs = [
  ["35+ Years of Manufacturing Excellence", "Decades of experience in producing quality TMT bars trusted across residential, commercial, and infrastructure projects."],
  ["Consistent Quality", "Every batch is manufactured under strict quality controls to deliver reliable performance across every project."],
  ["Reliable Product Availability", "An extensive dealer network across South India helps contractors source ARS products quickly and conveniently."],
  ["Trusted Across South India", "A preferred choice for contractors, builders, engineers, and developers across thousands of successful construction projects."],
  ["Dedicated Customer Support", "From product selection to dealer assistance, our team is always ready to help throughout your construction journey."],
  ["Products You Can Build With Confidence", "Manufactured to meet recognised quality standards, giving contractors confidence on every project."],
] as const;

const contractorCertifications = ["BIS Certification", "ISO 9001", "ISO 14001", "SGS Tested", "Environmental Product Declaration (EPD)", "GreenPro Certification", "SGBC 4-Ticks Leader Rating", "Government of Tamil Nadu PWD Product Approval"] as const;

const contractorFaqs = [
  ["Which ARS TMT bar is suitable for my project?", "ARS Fe 550D TMT Bars are ideal for most residential, commercial, and infrastructure projects. If your project is located in areas with high moisture or high salinity, ARS CRS Fe 550D TMT Bars are recommended for improved corrosion resistance."],
  ["How can I identify genuine ARS TMT Bars?", "Always purchase from an authorised ARS dealer. Check for product identification markings on the bars and ensure the material is supplied with the appropriate documentation."],
  ["What are ARS Binders used for?", "ARS Binders are factory-made reinforcement binders designed to provide accurate dimensions and consistent bends. They help reduce manual bending time, improve productivity, and ensure uniform reinforcement across the project."],
  ["Are ARS TMT Bars suitable for both residential and commercial construction?", "Yes. ARS TMT Bars are suitable for individual homes, apartments, commercial buildings, industrial projects, and infrastructure developments."],
  ["Why should I choose CRS TMT Bars instead of standard TMT Bars?", "CRS TMT Bars offer enhanced corrosion resistance, making them an ideal choice for projects exposed to high moisture and high salinity conditions where long-term durability is important."],
  ["How does ARS ensure consistent product quality?", "Every batch is manufactured under strict quality control processes, including advanced spectrometer testing and multiple quality checks, to ensure consistent performance and compliance with industry standards."],
  ["Where can I buy ARS products?", "ARS products are available through an extensive network of authorised dealers across South India. You can also contact our team to locate the nearest dealer."],
  ["Can ARS help me choose the right product for my project?", "Yes. Our team can help you select the right TMT bars or binders based on your project's requirements, construction environment, and application."],
] as const;

function AudienceSectionHeading({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  light?: boolean;
}) {
  return (
    <div className="section-intro">
      <SectionKicker variant={light ? "light" : "brand"}>{eyebrow}</SectionKicker>
      <h2 className={light ? "section-title section-title-light" : "section-title"}>{title}</h2>
      <p className={light ? "section-copy section-copy-light" : "section-copy"}>{body}</p>
    </div>
  );
}

function AudienceFeaturePanel({ card }: { card: AudienceCard }) {
  const Icon = card.icon;

  return (
    <article className="group relative min-h-[320px] overflow-hidden rounded-[18px] border border-ink-900/10 bg-brand-blue shadow-[0_22px_65px_rgba(15,23,42,0.08)]">
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/94 via-[#0D2B6E]/62 to-[#0D2B6E]/12" />
      <div className="relative flex min-h-[320px] flex-col justify-end p-7 md:p-9">
        <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/24 bg-white/14 text-white backdrop-blur">
          <Icon size={20} />
        </span>
        <h3 className="mt-7 max-w-xl font-display text-2xl font-bold leading-tight text-white md:text-3xl">
          {card.title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/76 md:text-base">{card.body}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white">
          Learn more <ArrowRight size={15} />
        </span>
      </div>
    </article>
  );
}

function AudienceCarouselCard({ card }: { card: AudienceCard }) {
  const Icon = card.icon;
  const content = (
    <article className="group flex h-full min-h-[440px] flex-col overflow-hidden rounded-[14px] border border-brand-blue/14 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_24px_70px_rgba(13,43,110,0.14)]">
      <div className="relative h-44 shrink-0 overflow-hidden bg-[#eef2f7]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="320px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/36 to-transparent" />
        <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_14px_36px_rgba(6,13,30,0.18)]">
          <Icon size={21} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-ink-900">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-steel-700">{card.body}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-blue">
          {card.cta ?? "Learn more"} <ArrowRight size={15} />
        </span>
      </div>
    </article>
  );

  return card.href ? (
    <Link className="focus-ring block w-[82vw] max-w-[330px] shrink-0 snap-start" href={card.href}>
      {content}
    </Link>
  ) : (
    <div className="w-[82vw] max-w-[330px] shrink-0 snap-start">{content}</div>
  );
}

function HomeownerAutoScrollCard({ card, hidden = false }: { card: AudienceCard; hidden?: boolean }) {
  const Icon = card.icon;
  const cardContent = (
    <article className="group flex min-h-[360px] w-[310px] flex-col overflow-hidden rounded-[16px] border border-brand-blue/12 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:w-[340px]">
      <div className="relative h-40 shrink-0 overflow-hidden bg-surface-50">
        <Image
          src={card.image}
          alt={hidden ? "" : card.title}
          fill
          sizes="340px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/20 to-transparent" />
        <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_14px_36px_rgba(6,13,30,0.14)]">
          <Icon size={21} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-ink-900">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-steel-700">{card.body}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-brand-blue">
          {card.cta ?? "Learn more"} <ArrowRight size={15} />
        </span>
      </div>
    </article>
  );

  if (hidden || !card.href) {
    return (
      <div className="shrink-0" aria-hidden={hidden}>
        {cardContent}
      </div>
    );
  }

  return (
    <Link className="focus-ring block shrink-0" href={card.href}>
      {cardContent}
    </Link>
  );
}

function ProductPathStrip() {
  const products = [
    {
      title: "ARS CRS Fe 550D",
      label: "Corrosion resistant",
      body: "CRS steel for coastal, humid, exposed, and durability-focused construction conditions.",
      image: "/ars-assets/logos/ARSCRS550D.png",
      href: "/product-crs-550d",
    },
    {
      title: "ARS Fe 550D",
      label: "Core TMT range",
      body: "High-strength ductile TMT bars for residential, commercial, and everyday structural work.",
      image: "/ars-assets/logos/ARS550D.png",
      href: "/product-550d",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={homeownerRail}>
        <div className="mb-12 max-w-4xl">
          <SectionKicker>Product paths</SectionKicker>
          <h2 className="section-title">Two product paths for stronger decisions.</h2>
          <p className="section-copy">
            Keep product choice simple: standard high-strength TMT for everyday structures, or
            corrosion-resistant steel for exposed conditions.
          </p>
        </div>

        <div className="grid gap-5">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="focus-ring group grid overflow-hidden rounded-[16px] border border-brand-blue/18 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-brand-blue/45 md:grid-cols-[0.42fr_1fr_auto]"
            >
              <div className="relative min-h-[210px] bg-surface-50">
                <Image
                  src={product.image}
                  alt={`${product.title} product logo`}
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-contain p-8"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-brand-blue">
                  {product.label}
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold text-ink-900 md:text-4xl">
                  {product.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-steel-700">{product.body}</p>
              </div>
              <div className="flex items-center px-6 pb-6 md:px-8 md:pb-0">
                <span className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-5 text-sm font-bold text-white transition group-hover:bg-brand-red">
                  View product <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeownerProductRange() {
  const products = [
    {
      title: "ARS CRS Fe 550D",
      subtitle: "Corrosion Resistant TMT Bar",
      grade: "CRS 550D",
      image: "/ars-assets/logos/ARSCRS550D.png",
      href: "/product-crs-550d",
      tags: ["Corrosion resistance", "Exposed conditions"],
    },
    {
      title: "ARS Fe 550D",
      subtitle: "High Strength TMT Bar",
      grade: "Fe 550D",
      badge: "Core TMT grade",
      badgeColor: "bg-brand-blue",
      image: "/ars-assets/products-all.png",
      href: "/product-550d",
      tags: ["High strength", "Ductility"],
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={homeownerRail}>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <SectionKicker>Product range</SectionKicker>
            <h2 className={homeownerSectionTitle}>Useful ARS resources</h2>
            <p className={homeownerSectionCopy}>
              Compare the two available ARS TMT product paths before discussing the project with a
              contractor or dealer.
            </p>
          </div>
          <Link
            href="/products"
            className="focus-ring inline-flex h-12 w-fit items-center justify-center gap-3 rounded-[4px] border-2 border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            View All Products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-[16px] border border-brand-blue/12 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,43,110,0.12)]"
            >
              <Link href={product.href} className="focus-ring block">
                <div className="relative h-56 overflow-hidden bg-surface-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/22 to-transparent" />
                  {product.badge ? (
                    <span
                      className={`absolute left-5 top-5 rounded-[4px] px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-white ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  ) : null}
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-steel-600">{product.subtitle}</p>
                  </div>
                  <span className="shrink-0 rounded-[5px] bg-brand-blue/7 px-3 py-2 text-sm font-bold text-brand-blue">
                    {product.grade}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-50 px-3 py-2 text-xs font-bold text-steel-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/request-quote"
                    className="focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-[5px] bg-surface-50 px-4 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                  >
                    Request product information
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeownerSupportSection() {
  const supportItems = ["Technical queries", "Order tracking", "Site assistance", "Dealer support"];

  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-28">
      <div className={`${homeownerRail} grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center`}>
        <div>
          <SectionKicker>Support</SectionKicker>
          <h2 className={homeownerSectionTitle}>Get support from the ARS team.</h2>
          <p className={homeownerSectionCopy}>
            Our steel support team can help with product selection, construction guidance, dealer
            discovery, and site-level questions before you finalize materials.
          </p>

          <a
            href="tel:+919710411111"
            className="focus-ring mt-9 flex max-w-xl items-center gap-5 rounded-[14px] border border-brand-blue/10 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.04)] transition hover:border-brand-blue/30"
          >
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-brand-blue/7 text-brand-blue">
              <Phone size={22} />
            </span>
            <span>
              <span className="block font-technical text-xs font-black uppercase tracking-[0.18em] text-steel-500">
                Phone
              </span>
              <span className="mt-1 block font-display text-2xl font-bold text-ink-900">
                +91 97104 11111
              </span>
              <span className="mt-1 block text-sm font-semibold text-steel-500">
                For product, dealer, and project enquiries
              </span>
            </span>
          </a>

          <div className="mt-5 flex max-w-xl flex-wrap gap-3">
            {supportItems.map((item) => (
              <span
                key={item}
                className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-brand-blue/10 bg-white px-4 text-sm font-bold text-steel-700"
              >
                <BadgeCheck size={16} className="text-brand-blue" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[20px] shadow-[0_26px_75px_rgba(15,23,42,0.16)] lg:min-h-[520px]">
          <Image
            src="/ars-assets/home-owner-banner-1.png"
            alt="ARS support for homeowners choosing steel"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/18 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function AudienceResourceSection({ config }: { config: AudienceGuideConfig }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className={homeownerRail}>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <SectionKicker>{config.resourceSection.eyebrow}</SectionKicker>
            <h2 className={homeownerSectionTitle}>{config.resourceSection.title}</h2>
            <p className={homeownerSectionCopy}>{config.resourceSection.body}</p>
          </div>
          <Link
            href={config.resourceSection.ctaHref}
            className="focus-ring inline-flex h-12 w-fit items-center justify-center gap-3 rounded-[4px] border-2 border-brand-blue px-6 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            {config.resourceSection.ctaLabel} <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {config.resources.map((resource) => (
            <article
              key={resource.title}
              className="group overflow-hidden rounded-[16px] border border-brand-blue/12 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(13,43,110,0.12)]"
            >
              <Link href={resource.href ?? "/contact"} className="focus-ring block">
                <div className="relative h-56 overflow-hidden bg-surface-50">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/22 to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-[0_14px_36px_rgba(6,13,30,0.14)]">
                    <resource.icon size={21} />
                  </span>
                </div>
              </Link>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">
                  {resource.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-steel-700">{resource.body}</p>

                <div className="mt-6">
                  <Link
                    href={resource.href ?? "/contact"}
                    className="focus-ring inline-flex h-11 w-full items-center justify-center gap-2 rounded-[5px] bg-surface-50 px-4 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                  >
                    {resource.cta ?? "Open resource"} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSupportSection({ config }: { config: AudienceGuideConfig }) {
  return (
    <section className="bg-[#F4F7FF] py-20 lg:py-28">
      <div className={`${homeownerRail} grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center`}>
        <div>
          <SectionKicker>{config.support.eyebrow}</SectionKicker>
          <h2 className={homeownerSectionTitle}>{config.support.title}</h2>
          <p className={homeownerSectionCopy}>{config.support.body}</p>

          <a
            href={config.support.phoneHref}
            className="focus-ring mt-9 flex max-w-xl items-center gap-5 rounded-[14px] border border-brand-blue/10 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.04)] transition hover:border-brand-blue/30"
          >
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-brand-blue/7 text-brand-blue">
              <Phone size={22} />
            </span>
            <span>
              <span className="block font-technical text-xs font-black uppercase tracking-[0.18em] text-steel-500">
                {config.support.phoneLabel}
              </span>
              <span className="mt-1 block font-display text-2xl font-bold text-ink-900">
                {config.support.phone}
              </span>
              <span className="mt-1 block text-sm font-semibold text-steel-500">
                {config.support.phoneNote}
              </span>
            </span>
          </a>

          <div className="mt-5 flex max-w-xl flex-wrap gap-3">
            {config.support.tags.map((item) => (
              <span
                key={item}
                className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-brand-blue/10 bg-white px-4 text-sm font-bold text-steel-700"
              >
                <BadgeCheck size={16} className="text-brand-blue" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[20px] shadow-[0_26px_75px_rgba(15,23,42,0.16)] lg:min-h-[520px]">
          <Image
            src={config.support.image}
            alt={config.support.imageAlt}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/18 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function AudienceGuideAlignedContent({ config }: { config: AudienceGuideConfig }) {
  return (
    <>
      <section className="bg-white py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="max-w-3xl">
            <SectionKicker>{config.intro.eyebrow}</SectionKicker>
            <h2 className={homeownerSectionTitle}>{config.intro.title}</h2>
            <p className={homeownerSectionCopy}>{config.intro.body}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {config.featurePanels.map((card) => (
              <AudienceFeaturePanel key={card.title} card={card} />
            ))}
          </div>

          <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden">
            <div className="marquee-frame rounded-none">
              <div className="marquee-track marquee-right py-1">
                {config.carousel.map((card) => (
                  <HomeownerAutoScrollCard key={card.title} card={card} />
                ))}
                {config.carousel.map((card) => (
                  <HomeownerAutoScrollCard key={`${card.title}-duplicate`} card={card} hidden />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-28">
        <div className={homeownerRail}>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <SectionKicker>{config.proof.eyebrow}</SectionKicker>
              <h2 className={homeownerSectionTitle}>{config.proof.title}</h2>
              <div className="mt-7 max-w-2xl space-y-6 text-base leading-8 text-steel-700 lg:text-lg">
                <p>{config.proof.body}</p>
                <p>{config.proof.badge}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {config.proof.items.map((item) => (
                  <span
                    key={item.title}
                    className="rounded-full bg-brand-blue/7 px-5 py-3 text-sm font-bold text-brand-blue"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[20px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
                <Image
                  src={config.proof.image}
                  alt={config.proof.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/62 to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[170px] overflow-hidden rounded-[18px]">
                  <Image
                    src={config.featurePanels[0]?.image ?? config.proof.image}
                    alt={config.featurePanels[0]?.title ?? config.proof.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-blue/18" />
                </div>
                <div className="flex min-h-[170px] flex-col justify-between rounded-[18px] bg-brand-blue p-6 text-white">
                  <p className="font-technical text-xs font-black uppercase tracking-[0.22em] text-white/62">
                    {config.heroBadge}
                  </p>
                  <p className="font-display text-5xl font-bold">{config.stats[0]?.value ?? "ARS"}</p>
                  <p className="text-sm font-semibold leading-6 text-white/70">
                    {config.stats[0]?.label ?? "Support built into the buying path."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AudienceResourceSection config={config} />

      <AudienceSupportSection config={config} />
    </>
  );
}

const engineerTechnicalParameters = [
  {
    title: "Chemical Composition",
    body: "The chemical composition of TMT bars directly influences strength, weldability, ductility, and long-term performance. Maintaining controlled levels of Carbon (C), Sulphur (S), Phosphorus (P), Manganese (Mn), and Carbon Equivalent (CE) helps achieve consistent mechanical properties while meeting the requirements of IS 1786.",
    icon: FlaskConical,
    image: "/ars-assets/Solutions/EngineersArchitects/engineer-image.jpg",
    imageAlt: "Engineer reviewing ARS reinforcement for a construction project",
  },
  {
    title: "Mechanical Properties",
    body: "Mechanical performance determines how steel behaves under structural loads. Engineers typically evaluate Yield Strength (550 MPa), Ultimate Tensile Strength, Elongation, Yield-to-Tensile Ratio, and Bend & Rebend Performance to ensure the reinforcement meets design and seismic requirements.",
    icon: Ruler,
    image: "/ars-assets/Solutions/EngineersArchitects/MechanicalProperties.jpg",
    imageAlt: "ARS TMT bar detail",
  },
  {
    title: "Thermo-Mechanical Treatment",
    body: "The Thermo-Mechanical Treatment (TMT) process combines controlled quenching and self-tempering to create a tough outer layer with a ductile core. This improves strength, bendability, weldability, and earthquake-resistant performance without compromising structural reliability.",
    icon: Factory,
    image: "/ars-assets/homepage-manufacturing-detail.jpg",
    imageAlt: "ARS manufacturing detail",
  },
  {
    title: "Rib Design & Bond Strength",
    body: "Uniform rib geometry improves the bond between steel and concrete, enabling efficient load transfer and reducing the possibility of slippage. Consistent rib patterns also contribute to better structural stability throughout the service life of reinforced concrete.",
    icon: Handshake,
    image: "/ars-assets/Solutions/EngineersArchitects/ribImage.jpg",
    imageAlt: "ARS TMT bar rib detail for concrete bonding",
  },
  {
    title: "Product Identification & Traceability",
    body: "Clear product embossing, heat numbers, and batch identification allow engineers, contractors, and quality teams to verify product authenticity and maintain traceability from manufacturing through project execution.",
    icon: BadgeCheck,
    image: "/ars-assets/quality-policy-banner.jpg",
    imageAlt: "ARS quality assurance facility",
  },
  {
    title: "Technical Documentation",
    body: "Reliable manufacturers provide comprehensive technical documentation, including product specifications, mill test certificates, chemical composition reports, and mechanical test results, enabling engineers to verify compliance before specification and procurement.",
    icon: FileText,
    image: "/ars-assets/Solutions/EngineersArchitects/TechnicalDocumentation.jpg",
    imageAlt: "ARS certification documentation",
  },
];

const engineerReasons = [
  ["01.", "Precision Manufacturing", "Every ARS TMT bar is manufactured using advanced rolling and Thermo-Mechanical Treatment (TMT) technology to achieve consistent mechanical properties, dimensional accuracy, and reliable performance. Controlled manufacturing processes help ensure uniform quality across every heat and every batch."],
  ["02.", "Stringent Quality Control", "Quality is verified at every stage of production—from raw material inspection to finished product testing. ARS conducts rigorous checks on chemical composition, yield strength, tensile strength, elongation, bend and rebend performance, ensuring compliance with IS 1786 and other applicable quality standards before dispatch."],
  ["03.", "Engineering Documentation", "Every project demands technical transparency. ARS provides comprehensive engineering documentation, including Mill Test Certificates (MTCs), chemical and mechanical test reports, product specifications, and technical brochures, enabling consultants and project teams to verify compliance before procurement and execution."],
  ["04.", "Recognised Certifications", "ARS products are backed by nationally and internationally recognised certifications, reflecting the company's commitment to quality, sustainability, and responsible manufacturing."],
  ["05.", "Reliable Product Availability", "With an established manufacturing base and an extensive dealer network across South India, ARS ensures dependable product availability for projects of every scale. Consistent supply helps minimise procurement delays and supports uninterrupted construction schedules."],
  ["06.", "Technical Assistance", "Beyond supplying steel, ARS supports project teams with technical guidance throughout the specification and procurement process. Whether it's selecting the appropriate TMT grade, understanding product performance, accessing technical documentation, or locating authorised dealers, our team is available to assist every step of the way."],
] as const;

const engineerCertifications = [
  "BIS Certification",
  "ISO 9001",
  "ISO 14001",
  "SGS Tested",
  "Environmental Product Declaration (EPD)",
  "GreenPro Certification",
  "SGBC 4-Ticks Leader Rating",
  "Government of Tamil Nadu PWD Product Approval",
];

function EngineersArchitectsGuideContent() {
  return (
    <>
      <section className="bg-[#F4F7FF] py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="mx-auto max-w-2xl text-center">
            <SectionKicker align="center" showEndLine>TECHNICAL FOUNDATION</SectionKicker>
            <h2 className={`${homeownerSectionTitle} mt-5`}>Key Technical Parameters for Selecting TMT Bars</h2>
            <p className={`${homeownerSectionCopy} mx-auto`}>
              Selecting reinforcement steel goes beyond grade and price. Engineers evaluate mechanical performance, material consistency, manufacturing quality, and compliance with applicable standards to ensure every structure delivers the required strength, durability, and service life.
            </p>
          </div>
          <div className="mt-12 grid gap-5">
            {engineerTechnicalParameters.map(({ title, body, icon: Icon, image, imageAlt }, index) => (
              <article key={title} className="grid overflow-hidden border border-[#0D2B6E]/20 bg-white md:grid-cols-2">
                <div className={`relative min-h-64 bg-[#E8ECF4] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image src={image} alt={imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[#060D1E]/18" />
                </div>
                <div className="flex min-h-64 flex-col justify-center p-7 md:p-10">
                  <span aria-hidden="true" className="mb-6 h-0.5 w-10 bg-brand-red" />
                  <span className="flex size-11 items-center justify-center bg-brand-blue text-white"><Icon aria-hidden="true" className="size-5" /></span>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-ink-900">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-steel-700">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white lg:py-28">
        <div className={homeownerRail}>
          <div className="max-w-3xl">
            <SectionKicker variant="light">WHY ARS</SectionKicker>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.16] text-white">Built to Meet Engineering Expectations</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
              For over 35 years, ARS has partnered with engineers, architects, consultants, contractors, and infrastructure developers by delivering TMT bars that combine consistent manufacturing, verified quality, and dependable technical support. Every bar is produced to meet stringent quality standards, helping professionals specify with confidence across residential, commercial, industrial, and infrastructure projects.
            </p>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-2">
            {engineerReasons.map(([number, title, body]) => (
              <article key={number} className="border-t border-white/15 pt-5">
                <p className="font-technical text-xs font-black tracking-[0.18em] text-brand-red">{number}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{body}</p>
                {number === "04." ? (
                  <ul className="mt-5 grid gap-2 text-sm font-semibold leading-6 text-white/78">
                    {["BIS Certified", "ISO 9001 & ISO 14001 Certified", "SGS Tested", "Environmental Product Declaration (EPD)", "GreenPro Certified", "SGBC 4-Ticks Leader Rating", "Government of Tamil Nadu PWD Product Approval"].map((item) => (
                      <li key={item} className="flex gap-3"><BadgeCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-red" />{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="engineered-solutions" className="scroll-mt-24 bg-[#F4F7FF] py-20 lg:py-28">
        <div className={homeownerRail}>
          <SectionKicker>ENGINEERED SOLUTIONS</SectionKicker>
          <h2 className={homeownerSectionTitle}>Choose the Right ARS TMT Bar for Your Project</h2>
          <p className={homeownerSectionCopy}>ARS offers certified Fe550D and CRS 550D TMT bars engineered for different structural and environmental requirements, helping engineers and architects specify with confidence.</p>
          <div className="mt-11 grid gap-6 lg:grid-cols-2">
            {[
              { title: "ARS CRS Fe 550D", heading: "ARS CRS Fe 550D TMT Bars", body: "Corrosion-resistant reinforcement for high-salinity, humid, and demanding environments while maintaining the strength and ductility required for durable construction.", recommended: ["Coastal & High-Salinity Regions", "Bridges & Flyovers", "Water Treatment Plants", "Marine Structures", "Industrial Facilities", "Long-Life Infrastructure Projects"], href: "/product-crs-550d", cta: "Explore ARS CRS Fe 550D", image: "/ars-assets/logos/ARSCRS550D.png" },
              { title: "ARS Fe 550D", heading: "ARS Fe 550D Fe550D TMT Bars", body: "High-strength, ductile reinforcement for structural applications where reliable performance, bendability, weldability, and seismic confidence matter.", recommended: ["Residential Buildings", "Commercial Buildings", "High-Rise Structures", "Industrial Projects", "Infrastructure Development"], href: "/product-550d", cta: "Explore ARS Fe 550D", image: "/ars-assets/logos/ARS550D.png" },
            ].map((product) => (
              <article key={product.title} className="group overflow-hidden border border-brand-blue/15 bg-white shadow-[0_16px_38px_rgba(6,13,30,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_24px_58px_rgba(6,13,30,0.12)]">
                <div className="relative h-52 overflow-hidden bg-[#F4F7FF]"><div className="absolute inset-x-0 top-0 h-1 bg-brand-red" /><Image src={product.image} alt={`${product.title} product logo`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-10 transition duration-500 group-hover:scale-105" /></div>
                <div className="p-6 md:p-8"><p className="font-technical text-xs font-black uppercase tracking-[0.18em] text-brand-blue">{product.title}</p><h3 className="mt-3 font-display text-3xl font-bold text-ink-900">{product.heading}</h3><p className="mt-4 text-base leading-8 text-steel-700">{product.body}</p><div className="mt-7 border-t border-brand-blue/12 pt-6"><h4 className="font-display text-lg font-bold text-ink-900">Recommended for</h4><ul className="mt-3 grid gap-2 text-sm leading-6 text-steel-700 sm:grid-cols-2">{product.recommended.map((item) => <li key={item} className="flex gap-2"><BadgeCheck aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-brand-blue" />{item}</li>)}</ul></div><Link href={product.href} className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">{product.cta} <ArrowRight size={16} /></Link></div>
              </article>
            ))}
          </div>
          <div className="mt-10 overflow-x-auto border border-brand-blue/15 bg-white shadow-[0_16px_38px_rgba(6,13,30,0.05)]"><table className="w-full min-w-[720px] border-collapse text-left"><caption className="border-b border-brand-blue/15 bg-[#060D1E] p-5 text-left font-display text-2xl font-bold text-white">Quick Comparison</caption><thead className="bg-surface-50 text-ink-900"><tr><th scope="col" className="border-b border-brand-blue/15 p-4">If your project is...</th><th scope="col" className="border-l border-b border-brand-blue/15 p-4">Recommended Choice</th></tr></thead><tbody className="text-steel-700">{[["General structural construction", "ARS Fe 550D"], ["High-rise or industrial projects", "ARS Fe 550D"], ["Coastal or high-salinity sites", "ARS CRS Fe 550D"], ["Marine or water-facing infrastructure", "ARS CRS Fe 550D"]].map(([condition, choice]) => <tr key={condition} className="odd:bg-white even:bg-[#F8FAFC]"><th scope="row" className="border-t border-brand-blue/15 p-4 font-semibold">{condition}</th><td className="border-l border-t border-brand-blue/15 p-4 font-bold text-brand-blue">{choice}</td></tr>)}</tbody></table></div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28"><div className={homeownerRail}><div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"><div className="relative min-h-[280px] self-end overflow-hidden bg-[#F4F7FF]"><Image src="/ars-assets/blog-banners/importance-of-tds-in-steel-manufacturing/TDS-and-its-significance.jpeg" alt="TDS testing for construction water" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[center_bottom]" /><div className="absolute inset-x-0 bottom-0 h-1 bg-brand-red" /></div><div><SectionKicker>FREE TDS TESTING</SectionKicker><h2 className={homeownerSectionTitle}>Design with Data. Build for Durability.</h2><p className={homeownerSectionCopy}>ARS offers free TDS testing to help engineers and architects assess site water conditions during the planning stage. Understanding TDS levels supports informed material selection, particularly where corrosion resistance is critical. Based on the test results, our technical team recommends the appropriate TMT bar solution to enhance structural durability and long-term performance.</p><form className="mt-8 grid gap-3 rounded-xl border border-ink-900/10 bg-white p-5 shadow-[0_8px_24px_rgba(6,13,30,0.05)] sm:grid-cols-2" action="/contact" method="get"><label className="sr-only" htmlFor="engineer-tds-name">Name</label><input id="engineer-tds-name" name="name" autoComplete="name" placeholder="Name" className="h-12 rounded-[6px] border border-ink-900/12 bg-white px-4 text-sm outline-none transition focus:border-brand-blue" /><label className="sr-only" htmlFor="engineer-tds-phone">Phone</label><input id="engineer-tds-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" className="h-12 rounded-[6px] border border-ink-900/12 bg-white px-4 text-sm outline-none transition focus:border-brand-blue" /><label className="sr-only" htmlFor="engineer-tds-region">Region</label><select id="engineer-tds-region" name="region" defaultValue="" className="h-12 rounded-[6px] border border-ink-900/12 bg-white px-4 text-sm outline-none transition focus:border-brand-blue"><option value="">Region</option><option>Andhra Pradesh</option><option>Karnataka</option><option>Kerala</option><option>Tamil Nadu</option></select><button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-[#c90f16]">Schedule a Free TDS Test <ArrowRight size={16} aria-hidden="true" /></button></form></div></div></div></section>
      <section id="technical-performance" className="scroll-mt-24 bg-[#F4F7FF] py-20 lg:py-28">
        <div className={homeownerRail}>
          <div className="max-w-3xl"><SectionKicker>TECHNICAL PERFORMANCE</SectionKicker><h2 className={homeownerSectionTitle}>Verified Mechanical &amp; Chemical Properties</h2><p className={homeownerSectionCopy}>Every ARS TMT bar is manufactured under stringent quality controls and tested to deliver consistent mechanical performance and chemical composition. The values below represent the typical properties of ARS Fe 550D and ARS CRS Fe 550D, manufactured in compliance with IS 1786.</p><p className="mt-5 text-base italic leading-8 text-steel-700">All values comply with the applicable requirements of IS 1786.</p></div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="overflow-x-auto border border-[#0D2B6E]/20 bg-white"><table className="min-w-[540px] w-full border-collapse text-left text-sm"><caption className="bg-brand-blue p-4 text-left font-display text-xl font-bold text-white">Mechanical Properties</caption><thead><tr className="border-b border-brand-blue/15 bg-white"><th scope="col" className="p-4">Property</th><th scope="col" className="p-4">ARS Fe 550D</th><th scope="col" className="p-4">ARS CRS Fe 550D</th></tr></thead><tbody>{[["Yield Strength", "550 MPa Min.", "560 MPa Min."], ["Tensile Strength", "600 MPa Min.", "620 MPa Min."], ["TS / YS Ratio", "1.10 Min.", "1.08 Min."], ["Elongation", "16% Min.", "16% Min."]].map(([property, standard, crs], index) => <tr key={property} className={`border-b border-brand-blue/15 ${index % 2 === 0 ? "bg-white" : "bg-[#F4F7FF]"}`}><th scope="row" className="p-4">{property}</th><td className="p-4">{standard}</td><td className="p-4">{crs}</td></tr>)}</tbody></table></div>
            <div className="overflow-x-auto border border-[#0D2B6E]/20 bg-white"><table className="min-w-[540px] w-full border-collapse text-left text-sm"><caption className="bg-brand-blue p-4 text-left font-display text-xl font-bold text-white">Chemical Properties</caption><thead><tr className="border-b border-brand-blue/15 bg-white"><th scope="col" className="p-4">Property</th><th scope="col" className="p-4">ARS Fe 550D</th><th scope="col" className="p-4">ARS CRS Fe 550D</th></tr></thead><tbody>{[["Carbon (C)", "0.25% Max.", "0.25% Max."], ["Sulphur (S)", "0.04% Max.", "0.04% Max."], ["Phosphorus (P)", "0.04% Max.", "0.04% Max."], ["Sulphur + Phosphorus", "0.075% Max.", "0.075% Max."], ["Carbon Equivalent (CE)", "0.42% Max.", "—"], ["Corrosion Resistance Equivalent (CRE)*", "—", "0.45% Min."]].map(([property, standard, crs], index) => <tr key={property} className={`border-b border-brand-blue/15 ${index % 2 === 0 ? "bg-white" : "bg-[#F4F7FF]"}`}><th scope="row" className="p-4">{property}</th><td className="p-4">{standard}</td><td className="p-4">{crs}</td></tr>)}</tbody></table></div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <SectionKicker>CERTIFICATIONS &amp; RECOGNITION</SectionKicker>
              <h2 className={homeownerSectionTitle}>Certified Quality. Recognised Performance.</h2>
              <p className={homeownerSectionCopy}>Every ARS TMT bar is backed by recognised certifications, independent testing, and regulatory approvals that reflect our commitment to quality, safety, sustainability, and responsible manufacturing. These recognitions provide engineers, consultants, and project teams with added confidence during specification and procurement.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {engineerCertifications.slice(0, 2).map((item) => (
                <article key={item} className="group grid min-h-[190px] overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] sm:grid-rows-[72px_1fr]">
                  <div className="flex items-center justify-center bg-white p-5"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><BadgeCheck size={21} /></span></div>
                  <div className="border-t border-brand-blue/8 bg-brand-blue p-5 text-white"><h3 className="font-display text-xl font-bold">{item}</h3></div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineerCertifications.slice(2).map((item) => (
              <article key={item} className="rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[0_14px_42px_rgba(13,43,110,0.05)]"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><BadgeCheck size={21} /></span><h3 className="mt-7 font-display text-xl font-bold text-ink-900">{item}</h3></article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-28"><div className={homeownerRail}><div className="max-w-3xl"><SectionKicker>TECHNICAL CONSULTATION</SectionKicker><h2 className={homeownerSectionTitle}>Need Help with Product Specification?</h2></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["Grade Selection", "Product Comparison", "Test Certificates", "Technical Clarifications", "Project Documentation", "Dealer Assistance"].map((item) => <div key={item} className="flex min-h-24 items-center border border-[#0D2B6E]/20 bg-white p-5 font-bold text-ink-900"><BadgeCheck aria-hidden="true" className="mr-3 size-5 shrink-0 text-brand-red" />{item}</div>)}</div><Link href="/certifications#downloads" className="focus-ring mt-9 inline-flex h-12 items-center gap-3 bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-red">Download ARS Brochure <ArrowRight size={17} /></Link></div></section>

      <section className="bg-white py-20 lg:py-24"><div className={`${homeownerRail} max-w-[1180px]`}><SectionKicker>FAQS</SectionKicker><FaqList className="mt-8" items={[["How do I choose the right TMT bar for my project?", "Selection depends on structural design, environmental exposure, durability requirements, and project specifications. Standard Fe550D TMT bars are suitable for most reinforced concrete structures, while corrosion-resistant TMT bars are recommended for coastal and high-salinity environments."], ["What technical documents should be reviewed before specifying TMT bars?", "Engineers should review product specifications, chemical composition, mechanical properties, bend and rebend performance, test certificates, and applicable certifications before finalising specifications."], ["When should CRS TMT bars be specified?", "CRS TMT bars are recommended for structures exposed to coastal weather, high humidity, marine environments, industrial pollution, or high-salinity conditions where additional corrosion resistance improves long-term durability."], ["How can engineers verify product quality?", "Review recognised certifications, test certificates, technical specifications, and manufacturer documentation. Purchasing through authorised channels also helps ensure genuine products."], ["Does ARS provide technical support during specification?", "Yes. ARS provides technical assistance for product selection, specification guidance, documentation, and engineering queries to support consultants, architects, and project teams."]].map(([question, answer]) => ({ question, answer }))} /></div></section>
    </>
  );
}

function HomeownerFigmaContent() {
  const buyingGuidePanels: ReadonlyArray<{
    title: string;
    icon: LucideIcon;
    image: string;
    paragraphs: readonly string[];
    list?: readonly string[];
    outro?: string;
    tone: "light" | "dark";
  }> = [
    { title: "Choose Steel Based on Where You're Building", icon: MapPin, image: "/ars-assets/Solutions/HomeOwners/chooseSteel.jpg", paragraphs: ["Not every construction site faces the same environmental conditions. Homes built in normal environments have different reinforcement requirements than those exposed to moisture, coastal weather, or high-salinity conditions.", "Choosing the right type of TMT bar based on your location helps improve structural durability and long-term protection."], tone: "light" },
    { title: "Understand the Difference Between Standard and Corrosion-Resistant Steel", icon: ShieldCheck, image: "/ars-assets/Solutions/HomeOwners/understandDifference.jpg", paragraphs: ["For most residential construction, Fe550D TMT bars provide the strength and ductility required for modern homes.", "If your project is located near the coast or in areas with high humidity, high TDS, or salinity, Corrosion Resistant Steel (CRS) TMT bars offer additional protection against rust, helping extend the life of the structure."], tone: "dark" },
    { title: "Don't Judge Steel by Grade Alone", icon: Building2, image: "/ars-assets/Solutions/HomeOwners/dontJudge.jpg", paragraphs: ["A higher grade is only one part of the decision. Before choosing TMT bars, always look for:"], list: ["BIS certification", "High ductility for improved earthquake resistance", "Corrosion resistance where required", "Consistent manufacturing quality", "Reliable testing and quality assurance", "Purchase through authorised dealers"], outro: "These factors together contribute to safer, stronger, and more durable construction.", tone: "light" },
    { title: "Recognition Matters", icon: BadgeCheck, image: "/ars-assets/Solutions/HomeOwners/RecognitionMatters.jpg", paragraphs: ["A strong reputation is built over years of consistent quality and performance. Before choosing TMT bars, consider whether the manufacturer is recognised by respected industry organisations, government initiatives, and independent institutions. Such recognition reflects a long-term commitment to quality, reliability, and responsible manufacturing—not just marketing claims."], tone: "dark" },
  ];
  const products = [
    { title: "ARS CRS Fe 550D", heading: "ARS CRS Fe 550D TMT Bars", body: "Designed for structures exposed to higher moisture, coastal weather, and high-salinity environments where corrosion resistance becomes critical.", recommended: ["Coastal homes", "High-TDS regions", "Water-facing properties", "2x Long-life residential structures"], highlights: ["Superior corrosion resistance", "High ductility", "Reliable structural performance", "BIS-certified manufacturing"], href: "/product-crs-550d", cta: "Explore ARS CRS Fe 550D", image: "/ars-assets/logos/ARSCRS550D.png" },
    { title: "ARS Fe 550D", heading: "ARS Fe 550D TMT Bars", body: "Ideal for residential buildings constructed under normal environmental conditions.", recommended: ["Independent homes", "Villas", "Apartments", "Residential extensions", "General RCC construction"], highlights: ["High strength", "Excellent ductility", "Earthquake-resistant performance", "BIS-certified quality"], href: "/product-550d", cta: "Explore ARS Fe 550D", image: "/ars-assets/logos/ARS550D.png" },
  ] as const;
  const trustCards = [
    { title: "35+ Years of Manufacturing Excellence", icon: Factory, body: "For more than three decades, ARS has been manufacturing high-quality TMT bars trusted across residential, commercial, and infrastructure projects, delivering consistent quality with every bar produced." },
    { title: "Recognised by Government & Industry", icon: BadgeCheck, body: "Trust is earned through recognition. ARS Fe 550D TMT Bars are approved by the Government of Tamil Nadu Public Works Department (PWD) and supported by recognised industry bodies, reflecting consistent quality and adherence to established standards." },
    { title: "Quality You Can Build On", icon: ShieldCheck, body: "Every ARS TMT bar is manufactured under stringent quality control and backed by recognised testing and certifications, ensuring dependable strength, ductility, and long-term structural performance." },
    { title: "Trusted Dealer Network", icon: Handshake, body: "A strong network of authorised dealers, long-standing customer relationships, and decades of proven performance have made ARS one of South India's trusted names in TMT bars." },
  ] as const;
  const tools = [
    { title: "Know Today's Steel Price", icon: CircleDollarSign, image: "/ars-assets/ARSHOME4.jpg", body: "Stay informed with the latest ARS TMT steel prices to plan your construction budget with greater confidence.", cta: "Check Steel Price", href: "/tmt-steel-price-today" },
    { title: "Calculate Steel Requirement", icon: Calculator, image: "/ars-assets/Contact_banner.png", body: "Estimate the approximate quantity of TMT bars required for your home based on your construction needs.", cta: "Open Steel Calculator", href: "/tmt-steel-calculator" },
    { title: "Find Your Nearest Dealer", icon: MapPin, image: "/ars-assets/ARSHOME1.jpg", body: "Locate an authorised ARS dealer near you to purchase genuine TMT bars with confidence.", cta: "Find a Dealer", href: "/our-network" },
  ] as const;
  const proofItems = ["35+ Years of Manufacturing", "Government of Tamil Nadu PWD Approved", "BIS Certified Products", "SGBC 4-Ticks Leader Rating", "EPD Verified Green Steel"] as const;
  const faqs = [
    ["Which TMT bar is best for home construction?", "The best TMT bar for home construction depends on your project's location and structural requirements. For homes built in normal environmental conditions, Fe550D grade TMT bars are widely preferred for their strength and ductility. If your home is located in coastal, high-humidity, or high-salinity areas, corrosion-resistant (CRS) TMT bars provide added protection against rust, helping improve the long-term durability of the structure. Always consult your structural engineer before making the final choice."],
    ["What is the difference between Fe550D and CRS 550D TMT bars?", "Fe550D TMT bars are designed to deliver high strength and excellent ductility for residential and commercial construction. CRS 550D TMT bars offer the same structural performance while providing enhanced resistance to corrosion, making them suitable for coastal regions, humid climates, and areas with high salinity. Choosing the right type depends on your project's environmental conditions."],
    ["Why is BIS certification important when choosing TMT bars?", "BIS certification confirms that TMT bars are manufactured in accordance with Indian quality standards and comply with specified requirements for strength, ductility, and performance. Choosing BIS-certified TMT bars helps ensure consistent quality, reliability, and safety for residential construction."],
    ["How do I choose the right TMT bar brand for my home?", "Look beyond the product grade. Choose a manufacturer with a proven track record, recognised industry approvals, consistent manufacturing standards, and a strong authorised dealer network. A trusted brand is more likely to deliver reliable quality, genuine products, and long-term support throughout your construction journey."],
    ["How can I estimate the steel required for my home?", "The quantity of steel required depends on factors such as the size of your home, structural design, number of floors, and engineering specifications. Using a steel calculator provides an approximate estimate for planning and budgeting. For accurate quantities, always follow the recommendations of your structural engineer."],
  ] as const;

  return <>
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className={homeownerRail}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionKicker align="center" showEndLine>HOMEOWNER&apos;S BUYING GUIDE</SectionKicker>
          <h2 className={`${homeownerSectionTitle} mx-auto max-w-3xl`}>Choosing the Right Steel for Your Home Starts Here.</h2>
          <p className={`${homeownerSectionCopy} mx-auto`}>Selecting TMT bars is one of the most important decisions during home construction. The right choice depends on your project&apos;s location, environmental conditions, structural requirements, and the quality standards followed by the manufacturer. Here&apos;s what every homeowner should know before making a decision.</p>
        </div>
        <div className="mt-11 space-y-5 lg:space-y-6">
          {buyingGuidePanels.map(({ title, icon: Icon, image, paragraphs, list, outro, tone }, index) => (
            <article key={title} className={`group grid overflow-hidden rounded-[8px] border border-brand-blue/15 bg-white transition duration-300 hover:border-brand-blue/35 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>.buying-guide-media]:order-2" : ""}`}>
              <div className="buying-guide-media relative min-h-64 overflow-hidden sm:min-h-80 lg:min-h-full">
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover transition duration-700 group-hover:scale-105 ${title === "Recognition Matters" ? "object-contain bg-[#F4F7FF]" : ""}`} />
                <div className={`absolute inset-0 ${tone === "dark" ? "bg-gradient-to-br from-[#060D1E]/12 via-transparent to-[#0D2B6E]/24" : "bg-gradient-to-br from-[#0D2B6E]/8 via-transparent to-white/16"}`} />
              </div>
              <div className="relative flex flex-col justify-center p-7 md:p-9 lg:p-11">
                <div className="flex items-center gap-4"><div className="flex size-11 items-center justify-center rounded-[6px] bg-brand-blue text-white"><Icon aria-hidden="true" size={21} /></div><span aria-hidden="true" className="h-px w-7 bg-brand-red" /></div>
                <h3 className="mt-7 font-display text-[clamp(1.6rem,2.4vw,2.15rem)] font-bold leading-tight text-ink-900">{title}</h3>
                <div className="mt-5 space-y-4 text-base leading-8 text-steel-700">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {list ? <ul className="mt-6 grid gap-2 text-base leading-7 text-steel-700">{list.map((item) => <li key={item} className="flex gap-3"><BadgeCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-red" />{item}</li>)}</ul> : null}
                {outro ? <p className="mt-5 text-base leading-8 text-steel-700">{outro}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="relative overflow-hidden bg-[#F4F7FF] py-20 lg:py-28"><div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(135deg,transparent_0,transparent_48%,rgba(13,43,110,0.04)_48%,rgba(13,43,110,0.04)_52%,transparent_52%)] lg:block" /><div className={`${homeownerRail} relative`}><SectionKicker>FIND THE RIGHT PRODUCT</SectionKicker><h2 className={homeownerSectionTitle}>Choose the Right ARS TMT Bar for Your Home</h2><h3 className="mt-8 font-display text-xl font-bold text-ink-900">Introduction</h3><p className={homeownerSectionCopy}>Every home is different. That&apos;s why ARS offers TMT bars designed for different construction environments. Whether you&apos;re building in standard conditions or in areas exposed to higher corrosion risks, there&apos;s a solution engineered for your project&apos;s needs.</p><div className="mt-11 grid gap-6 lg:grid-cols-2">{products.map((product, index) => <article key={product.title} className="group overflow-hidden border border-brand-blue/15 bg-white shadow-[0_16px_38px_rgba(6,13,30,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_24px_58px_rgba(6,13,30,0.12)]"><div className={`relative h-52 overflow-hidden ${index === 0 ? "bg-[#F4F7FF]" : "bg-[#F4F7FF]"}`}><div className="absolute inset-x-0 top-0 h-1 bg-brand-red" /><Image src={product.image} alt={`${product.title} product logo`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-10 transition duration-500 group-hover:scale-105" /></div><div className="p-6 md:p-8"><p className="font-technical text-xs font-black uppercase tracking-[0.18em] text-brand-blue">{product.title}</p><h3 className="mt-3 font-display text-3xl font-bold text-ink-900">{product.heading}</h3><p className="mt-4 text-base leading-8 text-steel-700">{product.body}</p><div className="mt-7 grid gap-6 border-t border-brand-blue/12 pt-6 sm:grid-cols-2"><div><h4 className="font-display text-lg font-bold text-ink-900">Recommended for</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-steel-700">{product.recommended.map((item) => <li key={item} className="flex gap-2"><BadgeCheck aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-brand-blue" />{item}</li>)}</ul></div><div><h4 className="font-display text-lg font-bold text-ink-900">Highlights</h4><ul className="mt-3 space-y-2 text-sm leading-6 text-steel-700">{product.highlights.map((item) => <li key={item} className="flex gap-2"> <BadgeCheck aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-brand-red" />{item}</li>)}</ul></div></div><Link href={product.href} className="focus-ring mt-8 inline-flex min-h-12 items-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">{product.cta} <ArrowRight size={16} /></Link></div></article>)}</div><div className="mt-10 overflow-x-auto border border-brand-blue/15 bg-white shadow-[0_16px_38px_rgba(6,13,30,0.05)]"><table className="w-full min-w-[580px] border-collapse text-left"><caption className="border-b border-brand-blue/15 bg-[#060D1E] p-5 text-left font-display text-2xl font-bold text-white">Quick Comparison</caption><thead className="bg-surface-50 text-ink-900"><tr><th scope="col" className="border-b border-brand-blue/15 p-4">If your project is...</th><th scope="col" className="border-l border-b border-brand-blue/15 p-4">Recommended Choice</th></tr></thead><tbody className="text-steel-700">{[["Standard residential construction", "ARS Fe 550D"], ["Coastal region", "ARS CRS Fe 550D"], ["High-TDS region", "ARS CRS Fe 550D"], ["High salinity", "ARS CRS Fe 550D"]].map(([condition, choice]) => <tr key={condition} className="odd:bg-white even:bg-[#F8FAFC]"><th scope="row" className="border-t border-brand-blue/15 p-4 font-semibold">{condition}</th><td className="border-l border-t border-brand-blue/15 p-4 font-bold text-brand-blue">{choice}</td></tr>)}</tbody></table></div></div></section>
    <section className="relative overflow-hidden bg-[#060D1E] py-20 text-white lg:py-28"><div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(115deg, transparent 0 46%, #ffffff 46% 47%, transparent 47% 100%)", backgroundSize: "28px 28px" }} /><div className={`${homeownerRail} relative`}><SectionKicker variant="light">WHY HOMEOWNERS TRUST ARS</SectionKicker><h2 className="font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.16] text-white">Built on Trust. Proven Through Performance.</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/74">A home is built only once, and the steel inside it should be chosen with confidence. For over three decades, ARS has earned the trust of homeowners, builders, engineers, and government institutions through consistent quality, responsible manufacturing, and independently recognised standards.</p><div className="mt-11 grid gap-px border border-white/15 bg-white/15 md:grid-cols-2">{trustCards.map(({ title, body, icon: Icon }) => <article key={title} className="bg-[#060D1E]/90 p-6 transition hover:bg-white/[0.08] md:p-8"><Icon aria-hidden="true" className="size-6 text-brand-red" /><h3 className="mt-6 font-display text-2xl font-bold text-white">{title}</h3><p className="mt-4 text-base leading-8 text-white/72">{body}</p></article>)}</div><div className="homeowner-proof-marquee mt-10 overflow-hidden py-1"><div className="marquee-frame"><ul className="marquee-track marquee-right gap-3" aria-label="ARS proof points">{[...proofItems, ...proofItems].map((item, index) => <li key={`${item}-${index}`} aria-hidden={index >= proofItems.length ? true : undefined} className="marquee-card flex min-h-16 min-w-[250px] items-center gap-3 border border-brand-blue/15 bg-white px-5 text-sm font-bold leading-5 text-ink-900 shadow-[0_8px_24px_rgba(6,13,30,0.08)]"><BadgeCheck aria-hidden="true" className="size-5 shrink-0 text-brand-red" />{item}</li>)}</ul></div></div><Link href="/our-certification" className="focus-ring mt-9 inline-flex min-h-12 items-center gap-2 rounded-[6px] border border-white/35 bg-white px-5 text-sm font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white">Explore Certifications &amp; Recognitions <ArrowRight size={16} /></Link></div></section>
    <section className="bg-white py-20 lg:py-28"><div className={homeownerRail}><div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"><div className="relative min-h-[280px] self-end overflow-hidden bg-[#F4F7FF]"><Image src="/ars-assets/blog-banners/importance-of-tds-in-steel-manufacturing/TDS-and-its-significance.jpeg" alt="TDS testing of construction water" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[center_bottom]" /><div className="absolute inset-x-0 bottom-0 h-1 bg-brand-red" /></div><div><SectionKicker>FREE TDS TESTING</SectionKicker><h2 className={homeownerSectionTitle}>Know Your Water Before You Build.</h2><p className={homeownerSectionCopy}>ARS offers free TDS testing to help homeowners understand the water conditions at their construction site. High TDS levels can increase the risk of steel corrosion over time. Based on the test results, our team helps you choose the right TMT bars for better durability, long-term structural protection, and peace of mind.</p><form className="mt-8 grid gap-3 rounded-xl border border-ink-900/10 bg-white p-5 shadow-[0_8px_24px_rgba(6,13,30,0.05)] sm:grid-cols-2" action="/contact" method="get"><label className="sr-only" htmlFor="tds-test-name">Name</label><input id="tds-test-name" name="name" autoComplete="name" placeholder="Name" className="h-12 rounded-[6px] border border-ink-900/12 bg-white px-4 text-sm outline-none transition focus:border-brand-blue" /><label className="sr-only" htmlFor="tds-test-phone">Phone</label><input id="tds-test-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone" className="h-12 rounded-[6px] border border-ink-900/12 bg-white px-4 text-sm outline-none transition focus:border-brand-blue" /><label className="sr-only" htmlFor="tds-test-region">Region</label><select id="tds-test-region" name="region" defaultValue="" className="h-12 rounded-[6px] border border-ink-900/12 bg-white px-4 text-sm outline-none transition focus:border-brand-blue"><option value="">Region</option><option>Andhra Pradesh</option><option>Karnataka</option><option>Kerala</option><option>Tamil Nadu</option></select><button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-red px-5 text-sm font-bold text-white transition hover:bg-[#c90f16]">Schedule a Free TDS Test <ArrowRight size={16} aria-hidden="true" /></button></form></div></div></div></section>
    <section className="relative overflow-hidden bg-[#F4F7FF] py-20 lg:py-28"><div className={`${homeownerRail} relative`}><SectionKicker>HOME BUILDING TOOLS</SectionKicker><h2 className={homeownerSectionTitle}>Everything You Need Before You Start Building</h2><p className={homeownerSectionCopy}>From estimating your steel requirement to finding an authorised dealer, access practical tools and resources designed to help you make informed decisions throughout your home construction journey.</p><div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{tools.map((tool) => { const Icon = tool.icon; return <article key={tool.title} className="group relative flex min-h-[330px] flex-col overflow-hidden border border-brand-blue/15 bg-white p-6 shadow-[0_12px_32px_rgba(6,13,30,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_24px_48px_rgba(6,13,30,0.10)]"><div className="absolute inset-x-0 top-0 h-24 overflow-hidden"><Image src={tool.image} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover opacity-20 grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-b from-brand-blue/25 to-white" /></div><div className="relative flex size-11 items-center justify-center rounded-[6px] bg-brand-blue text-white"><Icon aria-hidden="true" size={21} /></div><h3 className="relative mt-10 font-display text-xl font-bold leading-tight text-ink-900">{tool.title}</h3><p className="relative mt-4 text-sm leading-7 text-steel-700">{tool.body}</p><Link href={tool.href} className="focus-ring relative mt-auto inline-flex min-h-11 items-center gap-2 pt-7 text-sm font-bold text-brand-blue transition hover:text-brand-red">{tool.cta} <ArrowRight size={15} /></Link></article> })}<article className="relative flex min-h-[330px] flex-col overflow-hidden border border-brand-blue/15 bg-[#060D1E] p-6 text-white"><div className="absolute right-0 top-0 h-1 w-full bg-brand-red" /><div className="relative flex size-11 items-center justify-center rounded-[6px] bg-white/10 text-white"><FileDown aria-hidden="true" size={21} /></div><h3 className="relative mt-10 font-display text-xl font-bold leading-tight">Download Product Brochures</h3><p className="relative mt-4 text-sm leading-7 text-white/72">Access product brochures, technical specifications, and supporting documents to better understand ARS TMT bars before you build.</p><span aria-disabled="true" className="relative mt-auto inline-flex min-h-11 items-center pt-7 text-sm font-bold text-white/45">Download Brochures</span></article></div></div></section>
    <section className="bg-white py-20 lg:py-28"><div className={`${homeownerRail} max-w-4xl`}><SectionKicker>FAQs</SectionKicker><h2 className={homeownerSectionTitle}>FAQs</h2><FaqList className="mt-9" items={faqs.map(([question, answer]) => ({ question, answer }))} /></div></section>
    <section className="bg-[#F4F7FF] py-20 lg:py-28">
      <div className={`${homeownerRail} grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start`}>
        <div className="max-w-xl">
          <SectionKicker>CONTACT ARS</SectionKicker>
          <h2 className={homeownerSectionTitle}>Talk to Our Team Before You Build.</h2>
          <p className={`${homeownerSectionCopy} mt-5`}>Share your project details and our team will help you choose the right product and next step.</p>
        </div>
        <LeadForm title="Plan Your Home Build with Confidence" body="Tell us what you are building and where. We will help you find the right ARS solution." intent="contact" />
      </div>
    </section>
  </>;
}

function ContractorGuideContent() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <div className={homeownerRail}>
          <div className="mx-auto max-w-3xl text-center">
            <SectionKicker align="center" showEndLine>{"BUYER'S GUIDE"}</SectionKicker>
            <h2 className={`${homeownerSectionTitle} mx-auto max-w-3xl`}>Choose Steel That Performs on Site</h2>
            <p className={`${homeownerSectionCopy} mx-auto`}>
              The right TMT bar does more than strengthen a structure—it helps reduce rework, improves construction efficiency, and gives your clients lasting confidence. Before making a purchase, every contractor should consider these essential factors.
            </p>
          </div>
          <div className="mt-11 space-y-5 lg:space-y-6">
            {contractorBuyingFactors.map(([title, body], index) => {
              const panel = contractorBuyingPanels[index];
              const Icon = panel.icon;

              return (
                <article key={title} className={`group grid overflow-hidden rounded-[8px] border border-brand-blue/15 bg-white transition duration-300 hover:border-brand-blue/35 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>.contractor-guide-media]:order-2" : ""}`}>
                  <div className="contractor-guide-media relative min-h-64 overflow-hidden bg-surface-50 sm:min-h-80 lg:min-h-full">
                    <Image src={panel.image} alt={panel.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D2B6E]/10 via-transparent to-white/20" />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-9 lg:p-11">
                    <div className="flex items-center gap-4"><span className="flex size-11 items-center justify-center rounded-[6px] bg-brand-blue text-white"><Icon aria-hidden="true" size={21} /></span><span aria-hidden="true" className="h-px w-7 bg-brand-red" /></div>
                    <h3 className="mt-7 font-display text-[clamp(1.6rem,2.4vw,2.15rem)] font-bold leading-tight text-ink-900">{title}</h3>
                    <p className="mt-5 text-base leading-8 text-steel-700">{body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F4F7FF] py-20 lg:py-28">
        <div className={homeownerRail}>
          <div className="max-w-3xl">
            <SectionKicker>ARS PRODUCTS</SectionKicker>
            <h2 className={homeownerSectionTitle}>Products Built for Modern Construction</h2>
            <p className={homeownerSectionCopy}>
              {"Whether you're building an individual home, an apartment, a commercial building, or a large infrastructure project, choosing the right TMT bar is essential. ARS offers two high-quality reinforcement solutions, allowing you to select the product that best suits your project's environment and performance requirements."}
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contractorProducts.map(([title, body, cta, href, image], index) => (
              <article key={title} className="group overflow-hidden rounded-[8px] border border-brand-blue/15 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35">
                <div className="relative h-52 overflow-hidden bg-[#F4F7FF]">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 bg-brand-red" />
                  <Image src={image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-contain p-9 transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">{title}</h3>
                  <p className="mt-4 text-base leading-8 text-steel-700">{body}</p>
                  <Link href={href} className="focus-ring mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-red">
                    {cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#060D1E] py-20 text-white lg:py-24">
        <div className={homeownerRail}>
          <div className="max-w-3xl">
            <SectionKicker variant="light">SITE PERFORMANCE</SectionKicker>
            <h2 className="mt-6 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.16] text-white">Designed for Everyday Construction</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contractorPerformance.map(([title, body]) => (
              <article key={title} className="border border-white/14 bg-white/[0.04] p-7">
                <h3 className="font-display text-xl font-bold leading-tight text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <SectionKicker>WHY ARS</SectionKicker>
              <h2 className={homeownerSectionTitle}>A Trusted Partner for Construction Professionals</h2>
            </div>
            <p className={homeownerSectionCopy}>
              For over 35 years, ARS has supported contractors, builders, and construction professionals with dependable TMT bars backed by consistent manufacturing, reliable supply, and dedicated customer support.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contractorWhyArs.map(([title, body]) => (
              <article key={title} className="border-t-2 border-brand-blue pt-6">
                <h3 className="font-display text-xl font-bold text-ink-900">{title}</h3>
                <p className="mt-3 text-base leading-8 text-steel-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-50 py-20 lg:py-24">
        <div className={`${homeownerRail} grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center`}>
          <div>
            <SectionKicker>QUALITY ASSURANCE</SectionKicker>
            <h2 className={homeownerSectionTitle}>Tested Before Production. Verified Before Construction.</h2>
            <p className={homeownerSectionCopy}>
              Every ARS TMT bar undergoes advanced Spectrometer Testing to verify its chemical composition before production, ensuring consistent quality, strength, and compliance with industry standards. For project sites, ARS also offers Free TDS Testing to assess water conditions and recommend the right TMT bar for enhanced corrosion resistance and long-term structural durability.
            </p>
          </div>
          <div className="border border-brand-blue/16 bg-white p-8 md:p-10">
            <div className="space-y-4">
              <Link href="/steel-testing" className="focus-ring flex min-h-12 items-center justify-between gap-3 border-b border-brand-blue/12 pb-4 text-base font-bold text-brand-blue transition hover:text-brand-red">
                Free On-Site Spectro-meter Testing <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="focus-ring flex min-h-12 items-center justify-between gap-3 border-b border-brand-blue/12 pb-4 text-base font-bold text-brand-blue transition hover:text-brand-red">
                Free TDS Testing <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="focus-ring inline-flex min-h-12 items-center gap-3 rounded-[6px] bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-blue">
                Book Now <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="max-w-3xl">
            <SectionKicker>TOOLS & SUPPORT</SectionKicker>
            <h2 className={homeownerSectionTitle}>Everything You Need to Build with Confidence</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link href="/our-network" className="focus-ring group grid min-h-40 grid-cols-[160px_1fr] overflow-hidden border border-brand-blue/15 bg-white transition hover:border-brand-blue/35">
              <span aria-hidden="true" className="flex h-full min-h-full items-center justify-center bg-[#EAF0FF] text-brand-blue"><Truck size={36} strokeWidth={1.8} /></span>
              <span className="flex flex-col justify-center px-6 py-6 font-display text-2xl font-bold leading-[1.08] text-ink-900"><span>Find Your</span><span>Nearest Dealer</span></span>
            </Link>
            <Link href="/tmt-steel-calculator" className="focus-ring group grid min-h-40 grid-cols-[160px_1fr] overflow-hidden border border-brand-blue/15 bg-white transition hover:border-brand-blue/35">
              <span aria-hidden="true" className="flex h-full min-h-full items-center justify-center bg-[#EAF0FF] text-brand-blue"><Calculator size={36} strokeWidth={1.8} /></span>
              <span className="flex flex-col justify-center px-6 py-6 font-display text-2xl font-bold leading-[1.08] text-ink-900"><span>Calculate Steel</span><span>Requirement</span></span>
            </Link>
            <span aria-disabled="true" className="grid min-h-40 grid-cols-[160px_1fr] overflow-hidden border border-brand-blue/15 bg-white">
              <span aria-hidden="true" className="flex h-full min-h-full items-center justify-center bg-[#EAF0FF] text-brand-blue"><FileText size={36} strokeWidth={1.8} /></span>
              <span className="flex flex-col justify-center px-6 py-6 font-display text-2xl font-bold leading-[1.08] text-steel-500"><span>Download Product</span><span>Brochures</span></span>
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FF] py-20 lg:py-24">
        <div className={homeownerRail}>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <SectionKicker>CERTIFICATIONS &amp; RECOGNITION</SectionKicker>
              <h2 className={homeownerSectionTitle}>Certified Quality. Recognised Performance.</h2>
              <p className={homeownerSectionCopy}>Every ARS TMT bar is backed by recognised certifications, independent testing, and regulatory approvals that reflect our commitment to quality, safety, sustainability, and responsible manufacturing. These recognitions provide engineers, consultants, and project teams with added confidence during specification and procurement.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contractorCertifications.slice(0, 2).map((item) => <article key={item} className="group grid min-h-[190px] overflow-hidden rounded-[18px] border border-brand-blue/10 bg-white shadow-[var(--shadow-soft)] sm:grid-rows-[72px_1fr]"><div className="flex items-center justify-center bg-white p-5"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><BadgeCheck size={21} /></span></div><div className="border-t border-brand-blue/8 bg-brand-blue p-5 text-white"><h3 className="font-display text-xl font-bold">{item}</h3></div></article>)}
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contractorCertifications.slice(2).map((item) => <article key={item} className="rounded-[16px] border border-brand-blue/10 bg-white p-6 shadow-[0_14px_42px_rgba(13,43,110,0.05)]"><span className="inline-flex size-11 items-center justify-center rounded-[10px] bg-[#edf5ff] text-brand-blue ring-1 ring-brand-blue/10"><BadgeCheck size={21} /></span><h3 className="mt-7 font-display text-xl font-bold text-ink-900">{item}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className={`${homeownerRail} max-w-4xl`}>
          <SectionKicker>FAQs</SectionKicker>
          <FaqList className="mt-9" items={contractorFaqs.map(([question, answer]) => ({ question, answer }))} />
        </div>
      </section>
    </>
  );
}

export function AudienceGuidePage({ slug }: { slug: AudienceGuideSlug }) {
  const config = audienceGuides[slug];
  const isHomeownerGuide = slug === "tmt-steel-bar-guide-homeowners";

  return (
    <main id="main-content" className="min-h-screen overflow-x-clip bg-white text-ink-900">
      <SiteHeader />

      <section className="ars-page-hero min-h-[560px] md:min-h-[600px] lg:h-[680px] lg:min-h-[680px] lg:max-h-[680px] relative overflow-hidden bg-[#060D1E] text-white">
        <div className="absolute inset-0">
          <Image
            src={config.heroImage}
            alt={config.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D1E]/92 via-[#0D2B6E]/66 to-[#0D2B6E]/16" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060D1E]/92 via-transparent to-[#060D1E]/8" />
        </div>

        <div className={`${homeownerRail} ars-page-hero-content relative flex items-end pb-14 pt-36 md:pb-20`}>
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
              {config.heroBadge}
            </div>
            <h1 className="font-display text-white [overflow-wrap:anywhere]">
              {config.heroTitle}
              <span className="sr-only"> </span>
              <span className="block text-brand-red">{config.heroAccent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              {config.heroBody}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className="focus-ring inline-flex h-12 items-center justify-center gap-3 rounded-[6px] bg-brand-blue px-6 text-sm font-bold text-white shadow-[0_18px_44px_rgba(13,43,110,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-blue-dark md:text-base"
                href={config.primaryCta.href}
              >
                {config.primaryCta.label} <ArrowRight size={18} />
              </Link>
              <Link
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-[6px] border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand-blue md:text-base"
                href={config.secondaryCta.href}
              >
                {config.secondaryCta.label} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {slug === "tmt-steel-bar-guide-civil-contractors" ? (
        <ContractorGuideContent />
      ) : isHomeownerGuide ? (
        <HomeownerFigmaContent />
      ) : slug === "tmt-steel-bar-guide-engineers-architects" ? (
        <EngineersArchitectsGuideContent />
      ) : (
        <AudienceGuideAlignedContent config={config} />
      )}

      <ContactCta
        eyebrow={slug === "tmt-steel-bar-guide-civil-contractors" ? "" : config.finalCta.eyebrow}
        headline={slug === "tmt-steel-bar-guide-civil-contractors" ? "Ready to Build with Confidence?" : config.finalCta.headline}
        body={slug === "tmt-steel-bar-guide-civil-contractors" ? "Whether you're building a home, apartment, commercial complex, or infrastructure project, ARS delivers the quality, reliability, and support you need to build with confidence." : config.finalCta.body}
        primaryLabel={slug === "tmt-steel-bar-guide-civil-contractors" ? "Contact Us" : config.finalCta.primaryLabel}
        primaryHref={slug === "tmt-steel-bar-guide-civil-contractors" ? "/contact" : config.finalCta.primaryHref}
        secondaryLabel={slug === "tmt-steel-bar-guide-civil-contractors" ? "Request Quote" : config.finalCta.secondaryLabel}
        secondaryHref={slug === "tmt-steel-bar-guide-civil-contractors" ? "/request-quote" : config.finalCta.secondaryHref}
      />
    </main>
  );
}
