import { ArrowRight, Phone } from "lucide-react";
import { verifiedContactDetails } from "@/data/business-verification";
import { QuoteRequestForm } from "@/components/quote-request-form";

type LeadFormProps = {
  title?: string;
  body?: string;
  intent?: "quote" | "contact" | "dealer";
  submission?: "quote";
};

const projectTypes = ["Residential", "Commercial", "Road / infrastructure", "Dealer enquiry"];
const tamilNaduCities = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

export function LeadForm({
  title = "Share your requirement",
  body = "This front-end form is ready for CRM or email routing once the final lead destination is confirmed.",
  intent = "quote",
  submission,
}: LeadFormProps) {
  if (submission === "quote") return <QuoteRequestForm title={title} body={body} />;

  return (
    <div className="rounded-[8px] border border-ink-900/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-blue">
          {intent === "dealer" ? "Dealer support" : intent === "contact" ? "Sales contact" : "Quote request"}
        </p>
        <h2 className="mt-4 font-display text-[clamp(2rem,3.4vw,2.25rem)] font-bold leading-[1.04] tracking-normal text-ink-900">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-steel-700">{body}</p>
      </div>

      <form className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-ink-900">
            Name
            <input name="name" autoComplete="name" className="h-12 rounded-[6px] border border-ink-900/12 bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-ink-900">
            Phone
            <input name="phone" autoComplete="tel" inputMode="tel" className="h-12 rounded-[6px] border border-ink-900/12 bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue" placeholder="+91" />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-ink-900">
            Project type
            <select name="projectType" className="h-12 rounded-[6px] border border-ink-900/12 bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue">
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-ink-900">
            City / location
            <select name="city" className="h-12 rounded-[6px] border border-ink-900/12 bg-[#f8f9fb] px-4 text-base font-normal outline-none transition focus:border-brand-blue">
              <option>Please choose an option</option>
              {tamilNaduCities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-bold text-ink-900">
          Requirement
          <textarea name="requirement" className="min-h-32 rounded-[6px] border border-ink-900/12 bg-[#f8f9fb] px-4 py-3 text-base font-normal outline-none transition focus:border-brand-blue" placeholder="Tell us grade, size, quantity, delivery location, or project stage." />
        </label>

        <div className="grid gap-3 pt-2 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-sm leading-6 text-steel-700">
            Form submission endpoint and public inbox need ARS confirmation. For now, use phone contact for live enquiries.
          </p>
          <button className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark" type="button">
            Send enquiry <ArrowRight size={17} />
          </button>
        </div>

        <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-ink-900/12 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue sm:w-fit" href={`tel:${verifiedContactDetails.mobile.replace(/\s/g, "")}`}>
          <Phone size={17} /> Call {verifiedContactDetails.mobile}
        </a>
      </form>
    </div>
  );
}
