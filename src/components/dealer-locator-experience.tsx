"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation, Phone, Search, SlidersHorizontal, X } from "lucide-react";
import { SectionKicker } from "@/components/section-kicker";
import type { Dealer } from "@/data/dealers";

type DealerLocatorExperienceProps = {
  dealers: Dealer[];
};

const INITIAL_VISIBLE_COUNT = 24;
const LOAD_MORE_COUNT = 24;

const topCityHints = ["Chennai", "Coimbatore", "Madurai", "Tiruvallur", "Kanchipuram", "Salem", "Vellore"];

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function formatPhone(phone: string) {
  if (!phone) return "";
  if (phone.length === 10) {
    return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  }
  return phone;
}

function dealerLocation(dealer: Dealer) {
  return [dealer.city, dealer.district, dealer.state, dealer.pincode].filter(Boolean).join(", ");
}

function mapUrl(dealer: Dealer) {
  const query = dealer.geo || dealer.address || dealerLocation(dealer);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function DealerLocatorExperience({ dealers }: DealerLocatorExperienceProps) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const cities = useMemo(
    () => uniqueSorted(dealers.filter((dealer) => !state || dealer.state === state).map((dealer) => dealer.city)),
    [dealers, state],
  );
  const states = useMemo(() => uniqueSorted(dealers.map((dealer) => dealer.state)), [dealers]);

  const filteredDealers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return dealers.filter((dealer) => {
      const matchesQuery = !normalizedQuery || dealer.searchText.includes(normalizedQuery);
      const matchesCity = !city || dealer.city === city;
      const matchesState = !state || dealer.state === state;

      return matchesQuery && matchesCity && matchesState;
    });
  }, [city, dealers, query, state]);

  const visibleDealers = filteredDealers.slice(0, visibleCount);
  const hasActiveFilters = Boolean(query || city || state);

  const resetFilters = () => {
    setQuery("");
    setCity("");
    setState("");
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  const applyCityHint = (nextCity: string) => {
    setCity(nextCity);
    setQuery("");
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section className="bg-white py-16 lg:py-20" id="dealer-search">
      <div className="ars-container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionKicker>Search dealers</SectionKicker>
            <h2 className="section-title mt-5 max-w-3xl">Find ARS dealer records by location.</h2>
          </div>
          <p className="section-copy section-copy-flush max-w-2xl lg:justify-self-end">
            Search by city, district, pincode, or dealer name. The list is loaded from the updated
            ARS dealer sheet and can be refreshed as client data changes.
          </p>
        </div>

        <div className="mt-10 rounded-[24px] border border-brand-blue/10 bg-surface-50 p-4 shadow-[0_22px_70px_rgba(13,43,110,0.1)] lg:p-6">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_0.8fr_0.7fr_auto]">
            <label className="relative block">
              <span className="sr-only">Search dealers</span>
              <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-brand-blue" size={20} />
              <input
                className="focus-ring h-14 w-full rounded-full border border-brand-blue/10 bg-white pl-13 pr-5 text-base font-semibold text-ink-900 outline-none transition placeholder:text-steel-700/55"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setVisibleCount(INITIAL_VISIBLE_COUNT);
                }}
                placeholder="Search city, pincode, dealer name..."
                type="search"
              />
            </label>

            <label className="block">
              <span className="sr-only">Filter by state</span>
              <select
                className="focus-ring h-14 w-full rounded-full border border-brand-blue/10 bg-white px-5 text-base font-bold text-brand-blue outline-none"
                value={state}
                onChange={(event) => {
                  setState(event.target.value);
                  setCity("");
                  setVisibleCount(INITIAL_VISIBLE_COUNT);
                }}
              >
                <option value="">All states</option>
                {states.map((stateOption) => (
                  <option key={stateOption} value={stateOption}>
                    {stateOption}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Filter by city</span>
              <select
                className="focus-ring h-14 w-full rounded-full border border-brand-blue/10 bg-white px-5 text-base font-bold text-brand-blue outline-none"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                  setVisibleCount(INITIAL_VISIBLE_COUNT);
                }}
              >
                <option value="">All cities</option>
                {cities.map((cityOption) => (
                  <option key={cityOption} value={cityOption}>
                    {cityOption}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="focus-ring inline-flex h-14 items-center justify-center gap-2 rounded-full border border-brand-blue/10 bg-white px-5 text-base font-bold text-brand-blue transition hover:border-brand-blue/30 hover:bg-[#edf5ff]"
              onClick={resetFilters}
              type="button"
            >
              {hasActiveFilters ? <X size={18} /> : <SlidersHorizontal size={18} />}
              Reset
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-bold text-steel-700">Popular cities:</span>
            {topCityHints
              .filter((hint) => cities.includes(hint))
              .map((hint) => (
                <button
                  className="focus-ring rounded-full border border-brand-blue/10 bg-white px-4 py-2 text-sm font-bold text-brand-blue transition hover:border-brand-blue/30 hover:bg-[#edf5ff]"
                  key={hint}
                  onClick={() => applyCityHint(hint)}
                  type="button"
                >
                  {hint}
                </button>
              ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-b border-brand-blue/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold text-ink-900">
              {filteredDealers.length.toLocaleString("en-IN")} dealer records found
            </p>
            <p className="mt-1 text-sm font-medium text-steel-700">
              Showing {visibleDealers.length.toLocaleString("en-IN")} records. Contact details should be verified before final launch.
            </p>
          </div>
          <Link
            className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-red-dark"
            href="/request-quote"
          >
            Need ARS help? <ArrowRight size={17} />
          </Link>
        </div>

        {visibleDealers.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleDealers.map((dealer) => (
              <article
                className="flex min-h-[310px] flex-col rounded-[18px] border border-brand-blue/10 bg-white p-6 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_24px_70px_rgba(13,43,110,0.13)]"
                key={`${dealer.code}-${dealer.phone}-${dealer.pincode}`}
              >
                <h3 className="font-display text-2xl font-bold leading-tight text-ink-900">{dealer.name}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm font-bold leading-6 text-brand-blue">
                  <MapPin className="mt-1 shrink-0" size={17} />
                  {dealerLocation(dealer) || "Location details available in dealer record"}
                </p>
                <p className="mt-4 line-clamp-3 text-sm leading-7 text-steel-700">{dealer.address}</p>

                <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                  {dealer.phone ? (
                    <a
                      className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-blue px-4 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                      href={`tel:+91${dealer.phone}`}
                    >
                      <Phone size={16} />
                      Call
                    </a>
                  ) : (
                    <Link
                      className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-blue px-4 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                      href="/contact"
                    >
                      Contact ARS
                    </Link>
                  )}
                  <a
                    className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand-blue/15 bg-white px-4 text-sm font-bold text-brand-blue transition hover:border-brand-blue/35 hover:bg-[#edf5ff]"
                    href={mapUrl(dealer)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Navigation size={16} />
                    Directions
                  </a>
                </div>

                {dealer.phone ? (
                  <p className="mt-3 text-center text-xs font-semibold text-steel-700">{formatPhone(dealer.phone)}</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[22px] border border-brand-blue/10 bg-surface-50 p-8 text-center shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-3xl font-bold text-ink-900">No matching dealer found.</h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-steel-700">
              Try another city, pincode, or district. If the project is urgent, send the requirement to ARS and the team can guide the nearest support route.
            </p>
            <Link
              className="focus-ring mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 text-sm font-bold text-white transition hover:bg-brand-red-dark"
              href="/request-quote"
            >
              Request support <ArrowRight size={17} />
            </Link>
          </div>
        )}

        {visibleCount < filteredDealers.length ? (
          <div className="mt-10 flex justify-center">
            <button
              className="focus-ring inline-flex h-13 items-center justify-center rounded-full border border-brand-blue/15 bg-white px-8 text-base font-bold text-brand-blue shadow-[var(--shadow-soft)] transition hover:border-brand-blue/35 hover:bg-[#edf5ff]"
              onClick={() => setVisibleCount((count) => count + LOAD_MORE_COUNT)}
              type="button"
            >
              Load more dealers
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
