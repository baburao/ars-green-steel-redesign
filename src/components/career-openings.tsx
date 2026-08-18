"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Search, X } from "lucide-react";
import { careerDepartments, type CareerJob } from "@/data/careers";

const allDepartments = "All departments";

export function CareerOpenings({ jobs }: { jobs: CareerJob[] }) {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState(allDepartments);
  const deferredQuery = useDeferredValue(query);

  const filteredJobs = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesDepartment = department === allDepartments || job.department === department;
      const searchableText = [job.title, job.department, job.summary, ...job.highlights].join(" ").toLowerCase();
      return matchesDepartment && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [deferredQuery, department, jobs]);

  const hasFilters = query.length > 0 || department !== allDepartments;

  function resetFilters() {
    setQuery("");
    setDepartment(allDepartments);
  }

  return (
    <div>
      <div className="grid gap-4 rounded-[12px] border border-ink-900/10 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.05)] md:grid-cols-[minmax(0,1fr)_280px_auto] md:items-end md:p-5">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-steel-700">Search roles</span>
          <span className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel-700" size={18} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title or keyword"
              className="focus-ring h-13 w-full rounded-[7px] border border-ink-900/15 bg-surface-50 pl-11 pr-4 text-base text-ink-900 placeholder:text-steel-700/70"
            />
          </span>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-steel-700">Department</span>
          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="focus-ring h-13 w-full rounded-[7px] border border-ink-900/15 bg-surface-50 px-4 text-base text-ink-900"
          >
            <option>{allDepartments}</option>
            {careerDepartments.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>

        <button
          type="button"
          onClick={resetFilters}
          disabled={!hasFilters}
          className="focus-ring inline-flex h-13 items-center justify-center gap-2 rounded-[7px] border border-ink-900/14 px-5 text-sm font-bold text-ink-900 transition hover:border-brand-blue hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
        >
          <X size={17} aria-hidden="true" /> Reset
        </button>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-b border-ink-900/10 pb-4">
        <p className="text-sm font-semibold text-steel-700" aria-live="polite">
          {filteredJobs.length} {filteredJobs.length === 1 ? "role" : "roles"}
        </p>
        <p className="hidden text-sm text-steel-700 sm:block">All listed positions are currently filled.</p>
      </div>

      {filteredJobs.length > 0 ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {filteredJobs.map((job) => (
            <article key={job.slug} className="group flex min-h-[330px] flex-col rounded-[10px] border border-ink-900/10 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 md:p-8">
              <div className="flex items-start justify-between gap-5">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-[8px] bg-brand-blue/7 text-brand-blue ring-1 ring-brand-blue/10">
                  <BriefcaseBusiness size={21} aria-hidden="true" />
                </span>
                <div className="flex flex-col items-end gap-2">
                  <span className="rounded-full bg-brand-red/8 px-3 py-1.5 text-right text-[11px] font-bold uppercase tracking-[0.12em] text-brand-red ring-1 ring-brand-red/15">
                    Position filled
                  </span>
                  <span className="text-xs font-semibold text-steel-700">{job.experience}</span>
                </div>
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">{job.department}</p>
              <h3 className="mt-3 font-display text-[1.7rem] font-bold leading-[1.12] tracking-[-0.02em] text-ink-900">{job.shortTitle}</h3>
              <p className="mt-5 flex-1 text-base leading-7 text-steel-700">{job.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.highlights.map((highlight) => (
                  <span key={highlight} className="rounded-full bg-surface-50 px-3 py-1.5 text-xs font-semibold text-steel-700">{highlight}</span>
                ))}
              </div>
              <Link href={`/careers/${job.slug}`} className="focus-ring mt-7 inline-flex items-center gap-2 self-start text-sm font-bold text-brand-blue transition group-hover:gap-3">
                View role details <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[10px] border border-dashed border-ink-900/20 bg-white px-6 py-16 text-center">
          <BriefcaseBusiness className="mx-auto text-steel-700" size={30} aria-hidden="true" />
          <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">No matching roles</h3>
          <p className="mx-auto mt-3 max-w-md text-base leading-7 text-steel-700">Try a different keyword or reset the department filter to review all current openings.</p>
          <button type="button" onClick={resetFilters} className="focus-ring mt-6 inline-flex h-11 items-center justify-center rounded-[6px] bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark">
            View all openings
          </button>
        </div>
      )}
    </div>
  );
}
