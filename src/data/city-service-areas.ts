import type { QuoteRequestSourcePage, QuoteRequestState } from "@/lib/quote-request-options";

export type CityServiceArea = {
  slug: string;
  city: string;
  shortCity: string;
  state: QuoteRequestState;
  path: Exclude<QuoteRequestSourcePage, "/request-quote">;
  title: string;
  description: string;
  h1: string;
  heroBody: string;
  intro: readonly [string, string];
  localHeading: string;
  localContext: string;
  benefits: readonly { title: string; body: string }[];
  applications: readonly { title: string; body: string }[];
  supportCopy: string;
  faqs: readonly { question: string; answer: string }[];
  relatedSlugs: readonly string[];
};

export const cityServiceAreas = [
  {
    slug: "coimbatore",
    city: "Coimbatore",
    shortCity: "Coimbatore",
    state: "Tamil Nadu",
    path: "/tmt-bars-coimbatore",
    title: "TMT Bars in Coimbatore | ARS Fe 550D & CRS Fe 550D",
    description: "Explore ARS Fe 550D, CRS Fe 550D and Binders for Coimbatore projects. Submit an enquiry for current dealer, availability and quote assistance.",
    h1: "TMT Bars in Coimbatore",
    heroBody: "Plan residential, commercial or industrial reinforcement requirements with ARS product information, dealer discovery and a location-aware quote enquiry.",
    intro: [
      "Construction requirements in Coimbatore can range from individual homes and apartments to commercial buildings, factory facilities and warehouses. Each project needs reinforcement selected from the structural drawings rather than from a generic grade recommendation.",
      "ARS helps project teams compare Fe 550D and corrosion-resistant CRS Fe 550D, review available bar sizes and move into dealer or quotation support. Share the exact site location, required diameters and approximate quantity so the team can respond with relevant information.",
    ],
    localHeading: "A practical route from specification to enquiry",
    localContext: "Coimbatore enquiries often involve a mix of residential and industrial project contexts. Product comparison, size guidance and exact locality details help buyers move into dealer or quotation support without assuming local stock or delivery.",
    benefits: [
      { title: "Project-ready product choice", body: "Compare core Fe 550D reinforcement with CRS Fe 550D where the engineer identifies corrosion resistance as a project priority." },
      { title: "Residential to industrial context", body: "Prepare enquiries for homes, apartments, commercial buildings, factory structures or warehouse requirements." },
      { title: "Size-aware assistance", body: "Include the diameters from the bar bending schedule and the approximate quantity to reduce follow-up questions." },
      { title: "Dealer and quote pathways", body: "Use the ARS dealer locator or submit the exact Coimbatore project locality for availability assistance." },
    ],
    applications: [
      { title: "Independent homes", body: "Reinforcement enquiries aligned to the structural engineer's drawings and specified bar diameters." },
      { title: "Apartment construction", body: "Product and quantity conversations for multi-unit residential developments." },
      { title: "Industrial buildings", body: "Steel requirements for factory buildings, production facilities and supporting structures." },
      { title: "Warehouses", body: "Project enquiries for storage, logistics and distribution structures." },
      { title: "Commercial projects", body: "Reinforcement support for offices, retail spaces and mixed-use construction." },
    ],
    supportCopy: "ARS can review a Coimbatore project enquiry and help identify the appropriate dealer or sales-support route. Availability, price and delivery depend on the confirmed location, product, size and quantity.",
    faqs: [
      { question: "Can individual home builders enquire for ARS TMT bars in Coimbatore?", answer: "Yes. Submit the quote form with the site location, required sizes and approximate quantity, or use the ARS dealer locator for current assistance." },
      { question: "Which ARS TMT grade should I choose for a Coimbatore project?", answer: "The structural engineer should select the grade. ARS Fe 550D supports high-strength, ductile reinforcement requirements, while CRS Fe 550D can be considered when corrosion resistance is specified." },
      { question: "Can I request several TMT bar sizes in one quotation?", answer: "Yes. List every required diameter and the estimated quantity in the requirement field so the ARS team can review the complete request." },
      { question: "Is site delivery guaranteed in Coimbatore?", answer: "No. Delivery depends on the exact location, order quantity and confirmed dealer arrangements. Submit the project details for assistance." },
    ],
    relatedSlugs: ["tiruppur", "salem", "madurai"],
  },
  {
    slug: "madurai",
    city: "Madurai",
    shortCity: "Madurai",
    state: "Tamil Nadu",
    path: "/tmt-bars-madurai",
    title: "TMT Bars in Madurai | ARS Fe 550D & CRS Fe 550D",
    description: "Review ARS TMT products for Madurai homes, institutions and commercial projects. Enquire for current dealer, size, availability and quote support.",
    h1: "TMT Bars in Madurai",
    heroBody: "Move from structural requirements to product guidance, dealer discovery and a Madurai project quotation without relying on unverified stock claims.",
    intro: [
      "A Madurai project may involve a private home, apartment development, school, healthcare building or commercial property. The reinforcement grade and diameters should always follow the structural design and the engineer's specification.",
      "ARS presents its Fe 550D, CRS Fe 550D and reinforcement-binder options in one place, then connects buyers to dealer and quote support. Providing a clear site location and requirement helps the team identify the next useful step.",
    ],
    localHeading: "Clear support for varied project scales",
    localContext: "Madurai enquiries can come from both individual builders and larger project teams. The experience separates product education from commercial confirmation so visitors can understand the options before asking about price or availability.",
    benefits: [
      { title: "Engineer-led selection", body: "Product information supports the decision, while the structural design remains the controlling source for grade and diameter." },
      { title: "Institutional project context", body: "Prepare requirements for schools, colleges, healthcare facilities and other institution-led construction." },
      { title: "Multiple-size enquiries", body: "Share the complete schedule of bar sizes instead of sending separate requests for each diameter." },
      { title: "Locality-aware follow-up", body: "Share the Madurai site locality so the ARS team can review the requirement with the right location context." },
    ],
    applications: [
      { title: "Homes and apartments", body: "Residential reinforcement planned from approved structural drawings." },
      { title: "Educational buildings", body: "Requirements for schools, colleges and campus construction." },
      { title: "Healthcare facilities", body: "Project discussions for clinics, hospitals and supporting buildings." },
      { title: "Retail and offices", body: "Commercial construction with clearly documented grade and size needs." },
      { title: "Public-facing infrastructure", body: "Enquiries for applicable civil works, subject to project specifications and approvals." },
    ],
    supportCopy: "Submit the Madurai site location, specified product grade, bar sizes and approximate quantity. ARS can then assist with the appropriate dealer or quotation pathway; commercial terms remain subject to confirmation.",
    faqs: [
      { question: "How can I find current ARS dealer support for Madurai?", answer: "Use the dealer locator or submit the project locality in an enquiry. Dealer records and availability should be confirmed for the exact project location." },
      { question: "What information should a Madurai project quotation include?", answer: "Include the site location, structural grade, required bar diameters, approximate quantity and project type." },
      { question: "Is CRS Fe 550D required for every project?", answer: "No. CRS Fe 550D is considered where corrosion resistance is specified. The structural engineer should confirm whether it is appropriate for the project." },
      { question: "Can an institution or contractor submit a bulk enquiry?", answer: "Yes. Submit the project context and estimated requirement for review. Availability and commercial terms will be confirmed separately." },
    ],
    relatedSlugs: ["salem", "coimbatore", "tiruppur"],
  },
  {
    slug: "salem",
    city: "Salem",
    shortCity: "Salem",
    state: "Tamil Nadu",
    path: "/tmt-bars-salem",
    title: "TMT Bars in Salem | ARS Fe 550D & CRS Fe 550D",
    description: "Explore ARS TMT reinforcement for Salem residential, commercial and industrial projects. Request dealer, size, availability and quotation assistance.",
    h1: "TMT Bars in Salem",
    heroBody: "Review ARS reinforcement options for Salem projects and submit a requirement with the sizes, quantity and site context needed for useful follow-up.",
    intro: [
      "Salem construction enquiries may cover homes, commercial properties, workshops, industrial facilities or civil works. A useful steel enquiry begins with the structural specification, not with a broad claim that one grade suits every project.",
      "ARS provides clear routes to compare its two TMT grades, understand binder applications, locate dealer records and request commercial assistance. Stock and delivery are confirmed only after the exact requirement is reviewed.",
    ],
    localHeading: "Specification first, commercial confirmation second",
    localContext: "For Salem projects, confirming the grade, bar sizes and project context before discussing price reduces ambiguity for both individual builders and procurement teams.",
    benefits: [
      { title: "Documented requirements", body: "Use the structural drawing or bar bending schedule to state grade, diameter and quantity." },
      { title: "Industrial project support", body: "Frame enquiries for workshops, industrial buildings and storage structures without assuming availability." },
      { title: "Product comparison", body: "Understand the intended distinction between Fe 550D and corrosion-resistant CRS Fe 550D." },
      { title: "Verified next steps", body: "Use the dealer search or submit the Salem project requirement instead of relying on an unconfirmed local listing." },
    ],
    applications: [
      { title: "Residential structures", body: "Steel requirements for individual houses and apartment projects." },
      { title: "Industrial facilities", body: "Reinforcement enquiries for plant buildings and operational structures." },
      { title: "Workshops and sheds", body: "Project-specific reinforcement for workshop and shed construction." },
      { title: "Commercial properties", body: "Requirements for retail, office and mixed-use construction." },
      { title: "Civil works", body: "Product enquiries aligned to the project's approved engineering specification." },
    ],
    supportCopy: "ARS supports Salem enquiries through its online quote and dealer-discovery pathways. Submit the exact locality and requirement so current availability, pricing and delivery possibilities can be checked.",
    faqs: [
      { question: "Can contractors submit a Salem project requirement to ARS?", answer: "Yes. Include the project location, grade, diameters and estimated quantity in the enquiry for review." },
      { question: "What is the difference between ARS Fe 550D and CRS Fe 550D?", answer: "Both are Fe 550D reinforcement products. CRS Fe 550D is intended for requirements where corrosion resistance is specified, while the final selection remains the structural engineer's decision." },
      { question: "Are live stock and prices shown for Salem?", answer: "No. Stock, price and delivery must be confirmed for the exact location, sizes and quantity in the submitted requirement." },
      { question: "Where can I check available TMT bar diameters?", answer: "Use the ARS Products page to review the supported diameter guides, then include the required sizes in the quotation request." },
    ],
    relatedSlugs: ["coimbatore", "tiruppur", "vellore"],
  },
  {
    slug: "tiruppur",
    city: "Tiruppur",
    shortCity: "Tiruppur",
    state: "Tamil Nadu",
    path: "/tmt-bars-tiruppur",
    title: "TMT Bars in Tiruppur | ARS Fe 550D & CRS Fe 550D",
    description: "Plan ARS TMT requirements for Tiruppur factory, warehouse, residential and commercial projects. Enquire for current dealer and quote assistance.",
    h1: "TMT Bars in Tiruppur",
    heroBody: "Prepare a location-aware reinforcement enquiry for factory, warehouse, residential or commercial construction in Tiruppur.",
    intro: [
      "Tiruppur project requirements can include factory buildings, warehouse structures, worker housing, apartments and commercial premises. These uses do not share one automatic reinforcement specification; the structural design must define the grade and diameters.",
      "ARS brings product guidance and buying support into one route. Buyers can compare product options, review common size guidance, search dealer records and send a requirement with enough detail for the sales team to respond accurately.",
    ],
    localHeading: "Built for project and procurement clarity",
    localContext: "Industrial and mixed-use enquiries often involve several diameters, staged quantities or more than one structure. The Tiruppur flow encourages a consolidated requirement rather than fragmented requests.",
    benefits: [
      { title: "Industrial requirement context", body: "Describe factory, shed or warehouse needs alongside the engineer-specified reinforcement schedule." },
      { title: "Consolidated quantity details", body: "Add all diameters and approximate quantities to one project enquiry for a more complete review." },
      { title: "Core and CRS options", body: "Compare ARS Fe 550D with CRS Fe 550D where exposure conditions make corrosion resistance relevant." },
      { title: "Location-aware sales handoff", body: "Include the Tiruppur site locality so follow-up can reflect the actual project location." },
    ],
    applications: [
      { title: "Factory buildings", body: "Reinforcement enquiries for production and manufacturing structures." },
      { title: "Warehouse facilities", body: "Requirements for logistics, inventory and storage buildings." },
      { title: "Worker and staff housing", body: "Residential construction planned to the approved structural design." },
      { title: "Apartments", body: "Multi-unit residential requirements across specified bar diameters." },
      { title: "Commercial premises", body: "Steel enquiries for offices, showrooms and supporting buildings." },
    ],
    supportCopy: "Share the Tiruppur site location, project type, grade, sizes and quantity. ARS can assist with a dealer or quotation route after reviewing the requirement; stock and delivery remain subject to confirmation.",
    faqs: [
      { question: "Can I enquire for an industrial project in Tiruppur?", answer: "Yes. Submit the structural grade, diameters, estimated quantity, project type and exact site location for review." },
      { question: "Can several structures be included in one enquiry?", answer: "Yes. Summarise each structure or project phase in the requirement field and include the combined size and quantity context." },
      { question: "Which grade should be used for a Tiruppur factory building?", answer: "The structural engineer must specify the grade. ARS product information can help the project team understand the available Fe 550D and CRS Fe 550D options." },
      { question: "Does ARS guarantee delivery to every Tiruppur locality?", answer: "No. Delivery depends on the exact locality, requirement and confirmed dealer arrangements. Submit the details for assistance." },
    ],
    relatedSlugs: ["coimbatore", "salem", "madurai"],
  },
  {
    slug: "vellore",
    city: "Vellore",
    shortCity: "Vellore",
    state: "Tamil Nadu",
    path: "/tmt-bars-vellore",
    title: "TMT Bars in Vellore | ARS Fe 550D & CRS Fe 550D",
    description: "Explore ARS TMT options for Vellore homes, institutions, healthcare and commercial projects. Request current dealer and quotation assistance.",
    h1: "TMT Bars in Vellore",
    heroBody: "Connect Vellore residential, institutional and commercial requirements to ARS product guidance, dealer discovery and quote support.",
    intro: [
      "Vellore enquiries may come from home builders, apartment teams, educational institutions, healthcare projects or commercial developers. Every project should use the reinforcement grade and diameters approved by its structural engineer.",
      "ARS product information supports that decision process, helping visitors move from product comparison to dealer discovery or quotation support without relying on unverified local stock or delivery promises.",
    ],
    localHeading: "Support for institutional and residential decisions",
    localContext: "Institution-led projects often need clear specification, documentation and procurement context, while home builders need a simpler path to the same accurate information. Both still depend on the engineer-approved reinforcement schedule.",
    benefits: [
      { title: "Institution-aware enquiries", body: "Include project type, site locality and procurement context for education or healthcare construction." },
      { title: "Home-builder guidance", body: "Move from engineer-specified sizes to product, dealer and quotation support." },
      { title: "Corrosion-resistance option", body: "Review CRS Fe 550D when the project team has identified durability or exposure considerations." },
      { title: "Locality-specific follow-up", body: "Include the Vellore site locality so dealer and quotation assistance can reflect the actual project location." },
    ],
    applications: [
      { title: "Independent houses", body: "Residential reinforcement purchased to the approved structural schedule." },
      { title: "Apartment developments", body: "Requirements across foundations, columns, beams, slabs and other specified elements." },
      { title: "Educational institutions", body: "Project enquiries for schools, colleges and campus buildings." },
      { title: "Healthcare construction", body: "Reinforcement requirements for clinics, hospitals and related facilities." },
      { title: "Commercial buildings", body: "Product and quote discussions for offices, retail and mixed-use projects." },
    ],
    supportCopy: "Share the Vellore project location and reinforcement schedule. ARS can assist with current dealer or quotation information after reviewing the details.",
    faqs: [
      { question: "Can institutions submit TMT requirements for Vellore projects?", answer: "Yes. Include the project location, type, specified grade, diameters and estimated quantity for review." },
      { question: "Can a Vellore home builder request product guidance?", answer: "Yes. ARS can explain the product options and assist with the buying pathway, while the structural engineer remains responsible for the final specification." },
      { question: "Are dealer details on the website guaranteed to be current?", answer: "Dealer records may change. Use the locator as a discovery tool and confirm the relevant record or submit an enquiry for assistance." },
      { question: "What should be included in the requirement field?", answer: "List the bar diameters, approximate quantity, delivery locality, project stage and any other information needed for a useful response." },
    ],
    relatedSlugs: ["salem", "coimbatore", "puducherry"],
  },
  {
    slug: "kochi",
    city: "Kochi (Ernakulam)",
    shortCity: "Kochi",
    state: "Kerala",
    path: "/tmt-bars-kochi",
    title: "TMT Bars in Kochi (Ernakulam) | ARS CRS Fe 550D",
    description: "Explore ARS Fe 550D and CRS Fe 550D for Kochi and Ernakulam projects. Enquire for current dealer, availability and quotation assistance.",
    h1: "TMT Bars in Kochi (Ernakulam)",
    heroBody: "Review high-strength and corrosion-resistant ARS reinforcement options for Kochi and Ernakulam project requirements.",
    intro: [
      "Kochi and Ernakulam project teams may be planning homes, apartments, commercial properties, industrial buildings or civil works. Exposure conditions can vary by site, so reinforcement decisions should be based on the engineer's assessment rather than a city-wide assumption.",
      "ARS CRS Fe 550D is the option to review when corrosion resistance forms part of that specification, while ARS Fe 550D supports core high-strength and ductility requirements. Both choices can be carried into dealer discovery or a project quotation enquiry.",
    ],
    localHeading: "Exposure-aware product consideration",
    localContext: "Humidity, moisture or coastal influence may be relevant to some Kochi and Ernakulam sites, but they do not automatically determine the reinforcement grade. The project engineer should evaluate the actual exposure and durability requirements.",
    benefits: [
      { title: "CRS product visibility", body: "Understand where corrosion-resistant reinforcement may be considered when it is included in the design specification." },
      { title: "Kochi and Ernakulam context", body: "State the exact project locality, whether it is commonly described as Kochi or within the wider Ernakulam area." },
      { title: "Site-specific enquiry", body: "Describe the actual locality and exposure context rather than relying on a broad coastal label." },
      { title: "Location-ready support", body: "Kerala and Kochi are identified in the enquiry so the project handoff begins with useful location context." },
    ],
    applications: [
      { title: "Residential buildings", body: "Homes and apartments designed for the site's structural and durability requirements." },
      { title: "Commercial developments", body: "Reinforcement enquiries for offices, retail, hospitality and mixed-use buildings." },
      { title: "Industrial facilities", body: "Project support for industrial and operational structures." },
      { title: "Moisture-exposed projects", body: "CRS consideration where the engineer identifies corrosion resistance as relevant." },
      { title: "Infrastructure works", body: "Steel requirements governed by the project's technical specification and approvals." },
    ],
    supportCopy: "ARS supports enquiries for Kochi and the wider Ernakulam context through its online channels. Submit the exact locality and requirement for current dealer, availability and quote assistance.",
    faqs: [
      { question: "Is CRS Fe 550D automatically required for every Kochi project?", answer: "No. Site exposure and durability requirements vary. The structural engineer should determine whether corrosion-resistant reinforcement is appropriate." },
      { question: "Does this page cover both Kochi and Ernakulam enquiries?", answer: "Yes. Use the exact project locality in the form so the ARS team can review the requirement accurately." },
      { question: "Can I request a quote for a residential project?", answer: "Yes. Include the Kerala site location, structural grade, diameters and approximate quantity in the enquiry." },
      { question: "Are local dealer and delivery details guaranteed?", answer: "No. Dealer records, stock and delivery arrangements must be confirmed for the submitted location and requirement." },
    ],
    relatedSlugs: ["coimbatore", "puducherry", "madurai"],
  },
  {
    slug: "puducherry",
    city: "Puducherry",
    shortCity: "Puducherry",
    state: "Puducherry",
    path: "/tmt-bars-puducherry",
    title: "TMT Bars in Puducherry | ARS Fe 550D & CRS Fe 550D",
    description: "Explore ARS TMT reinforcement for Puducherry projects. Submit the site locality and requirement for current dealer, size and quote assistance.",
    h1: "TMT Bars in Puducherry",
    heroBody: "Plan Puducherry reinforcement requirements with clear product comparison, factual exposure guidance and project-specific enquiry support.",
    intro: [
      "Puducherry, also commonly called Pondicherry, includes residential, institutional, hospitality and commercial project contexts. The site's structural design and exposure assessment should determine the reinforcement grade and diameters.",
      "ARS helps visitors compare Fe 550D with CRS Fe 550D, understand the role of reinforcement binders and submit a requirement using Puducherry as the correct Union Territory value. Availability and delivery are confirmed only after review.",
    ],
    localHeading: "Clear guidance for Puducherry and Pondicherry localities",
    localContext: "Puducherry is the official location name, while Pondicherry remains familiar to many buyers. In either case, the exact site locality, exposure conditions and structural specification are what make an enquiry useful.",
    benefits: [
      { title: "Correct Union Territory context", body: "Puducherry is treated as a Union Territory and kept distinct from neighbouring state locations." },
      { title: "Coastal-exposure caution", body: "CRS Fe 550D can be reviewed where the project engineer identifies moisture or corrosion exposure as relevant." },
      { title: "Hospitality and institutional context", body: "Prepare project enquiries for hotels, educational buildings, healthcare or other facilities." },
      { title: "Alternate-name clarity", body: "Both Puducherry and the familiar Pondicherry name can be understood while the exact project locality remains clear." },
    ],
    applications: [
      { title: "Homes and apartments", body: "Residential reinforcement aligned to structural drawings." },
      { title: "Hospitality projects", body: "Project enquiries for hotels and tourism-related buildings." },
      { title: "Institutional buildings", body: "Requirements for education, healthcare and civic facilities." },
      { title: "Commercial properties", body: "Steel support for offices, retail and mixed-use buildings." },
      { title: "Exposure-sensitive structures", body: "CRS consideration where the site's approved specification requires it." },
    ],
    supportCopy: "Submit the Puducherry locality, project type, specified grade, sizes and quantity. ARS can then assist with current dealer or quotation information without implying guaranteed stock or delivery.",
    faqs: [
      { question: "Can I enquire using either Puducherry or Pondicherry as the location?", answer: "Yes. Puducherry is the official name, and you can add the exact locality commonly described with either name in the project-location field." },
      { question: "Which ARS grade should be considered for a coastal site?", answer: "CRS Fe 550D can be reviewed when corrosion resistance is specified, but the structural engineer must make the final selection for the site's actual conditions." },
      { question: "Is Puducherry available in the quote form?", answer: "Yes. Puducherry is included as a separate state or Union Territory option and is prefilled on this page." },
      { question: "Is a nearby dealer or site delivery guaranteed?", answer: "No. Dealer support, availability and delivery depend on the exact locality and requirement and must be confirmed after enquiry." },
    ],
    relatedSlugs: ["vellore", "coimbatore", "kochi"],
  },
  {
    slug: "nellore",
    city: "Nellore",
    shortCity: "Nellore",
    state: "Andhra Pradesh",
    path: "/tmt-bars-nellore",
    title: "TMT Bars in Nellore | ARS Fe 550D & CRS Fe 550D",
    description: "Explore ARS TMT products for Nellore residential, industrial and infrastructure projects. Request current dealer and quotation assistance.",
    h1: "TMT Bars in Nellore",
    heroBody: "Prepare a Nellore reinforcement enquiry with the product grade, diameters, quantity and site context needed for accurate follow-up.",
    intro: [
      "Nellore requirements may relate to housing, commercial buildings, industrial structures or infrastructure work. Reinforcement must follow the project's approved structural design, with grade and diameter decisions made by the responsible engineer.",
      "ARS presents product information and enquiry routes without treating city interest as proof of stock or delivery. Visitors can compare Fe 550D and CRS Fe 550D, review product sizes and submit the exact Nellore project requirement.",
    ],
    localHeading: "Project details before commercial confirmation",
    localContext: "A Nellore enquiry should identify the site locality, project type, grade, diameters and approximate quantity before dealer, pricing or delivery possibilities are discussed. This keeps commercial guidance tied to the actual requirement.",
    benefits: [
      { title: "Clear state and city context", body: "The enquiry begins with Andhra Pradesh and Nellore identified, while the exact site locality can be added by the buyer." },
      { title: "Residential and industrial coverage", body: "Describe the actual project type and reinforcement schedule in one enquiry." },
      { title: "No fabricated availability", body: "Stock, dealer and delivery details are confirmed after the project requirement is reviewed." },
      { title: "Engineering-led grade choice", body: "Use the product comparison to understand options, then follow the structural specification." },
    ],
    applications: [
      { title: "Residential projects", body: "Reinforcement for homes and apartment buildings based on approved drawings." },
      { title: "Industrial structures", body: "Requirements for operational, production and storage facilities." },
      { title: "Commercial buildings", body: "Steel enquiries for office, retail and mixed-use construction." },
      { title: "Warehouses", body: "Project discussions for storage and logistics structures." },
      { title: "Infrastructure projects", body: "Reinforcement requirements controlled by technical specifications and project approvals." },
    ],
    supportCopy: "Share the Nellore site location, project type, required grade, diameters and quantity. ARS can assist with current dealer and quotation information once the requirement is reviewed.",
    faqs: [
      { question: "Can I submit an ARS TMT enquiry for Nellore?", answer: "Yes. Include the exact site location, grade, bar sizes and estimated quantity in the enquiry." },
      { question: "Can I check live dealer stock for Nellore?", answer: "Live stock is not shown. Dealer records and availability must be confirmed for the submitted location, sizes and quantity." },
      { question: "Can CRS Fe 550D be considered for a Nellore project?", answer: "It can be reviewed where the structural engineer specifies corrosion resistance based on the site's exposure and durability requirements." },
      { question: "What information helps with a Nellore quotation?", answer: "Include the exact site locality, engineer-specified grade, bar diameters, approximate quantity and project stage." },
    ],
    relatedSlugs: ["madurai", "vellore", "puducherry"],
  },
] as const satisfies readonly CityServiceArea[];

export const cityServiceAreaPaths = cityServiceAreas.map((area) => area.path);

export function getCityServiceArea(slug: string) {
  const area = cityServiceAreas.find((item) => item.slug === slug);
  if (!area) throw new Error(`Unknown city service area: ${slug}`);
  return area;
}

export function getRelatedCityServiceAreas(area: CityServiceArea) {
  return area.relatedSlugs.map((slug) => getCityServiceArea(slug));
}
