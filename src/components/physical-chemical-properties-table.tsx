import { ars550SmPlusSpecifications } from "@/lib/product-catalog";

type PropertyRow = readonly [property: string, unit: string, standard: string, ars: string];

type PhysicalChemicalPropertiesTableProps = {
  grade: "Fe 550D" | "Fe 550D CRS" | "550 SM+";
  chemicalRows: readonly PropertyRow[];
  physicalRows: readonly PropertyRow[];
};

const presentationRows = {
  "Fe 550D": {
    benchmarkLabel: "IS 1786 – 2008",
    chemical: [
      ["Carbon", "%", "0.25 Max", "0.25 Max"],
      ["Phosphorous", "%", "0.04 Max", "0.04 Max"],
      ["Sulphur", "%", "0.04 Max", "0.04 Max"],
      ["P + S", "%", "0.075 Max", "0.070 Max"],
      ["*CE (Carbon equivalent)", "%", "0.42 Min", "0.35 Min"],
    ],
    physical: [
      ["Yield Strength", "N/mm2", "550 Min", "560 Min"],
      ["Tensile Strength", "N/mm2", "600 Min", "630 Min"],
      ["TS / YS", "Ratio", "1.08 Min", "1.10 Min"],
      ["Elongation", "%", "14.5 Min", "16 Min 22 Max"],
    ],
  },
  "Fe 550D CRS": {
    benchmarkLabel: "IS 1786 – 2008",
    chemical: [
      ["Carbon", "%", "0.25 Max", "0.25 Max"],
      ["Phosphorous", "%", "0.04 Max", "0.04 Max"],
      ["Sulphur", "%", "0.04 Max", "0.04 Max"],
      ["P + S", "%", "0.075 Max", "0.070 Max"],
      ["*CRE (Cr+Cu+Mo+Ni)", "%", "Not Less than 0.4%", "Not less than 0.40%"],
    ],
    physical: [
      ["Yield Strength", "N/mm2", "550 Min", "560 Min"],
      ["Tensile Strength", "N/mm2", "600 Min", "630 Min"],
      ["TS / YS", "Ratio", "1.08 Min", "1.10 Min"],
      ["Elongation", "%", "14.5 Min", "16 Min"],
    ],
  },
  "550 SM+": {
    benchmarkLabel: "Fe 550 Benchmark",
    chemical: [
      ["Carbon (C), Max.", "%", "0.30", "0.20"],
      ["Manganese (Mn), Min.", "%", "—", "0.75"],
      ["Phosphorus (P), Max.", "%", "0.055", "0.055"],
      ["Sulphur (S), Max.", "%", "0.055", "0.035"],
      ["Sulphur + Phosphorus (S+P), Max.", "%", "0.100", "0.090"],
      ["Nitrogen (N), Max.", "%", "0.012", "0.012"],
    ],
    physical: [
      ["Yield Strength (Min.)", "MPa", "550", "550"],
      ["Tensile Strength (Min.)", "MPa", "585", "635"],
      ["Elongation (Min.)", "%", "10", "16"],
      ["TS/YS Ratio", "—", "1.06 minimum", ars550SmPlusSpecifications.tsYsRatio],
    ],
  },
} as const satisfies Record<PhysicalChemicalPropertiesTableProps["grade"], { benchmarkLabel: string; chemical: readonly PropertyRow[]; physical: readonly PropertyRow[] }>;

function PropertiesTable({
  label,
  grade,
  benchmarkLabel,
  rows,
}: {
  label: "CHEMICAL PROPERTIES" | "PHYSICAL PROPERTIES";
  grade: PhysicalChemicalPropertiesTableProps["grade"];
  benchmarkLabel: string;
  rows: readonly PropertyRow[];
}) {
  return (
    <div className="min-w-0 overflow-hidden rounded-[10px] border border-brand-blue/15 bg-white">
      <p className="border-b border-brand-blue/10 bg-surface-50 px-4 py-2 text-xs font-medium text-steel-700 sm:hidden">
        Swipe horizontally to view the full comparison.
      </p>
      <div className="overflow-x-auto" role="region" aria-label={`${label.toLowerCase()} comparison table`} tabIndex={0}>
        <table className="w-full min-w-[560px] border-collapse text-left text-ink-900">
          <caption className="border-b border-white/10 bg-brand-blue px-5 py-4 text-left font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            {label}
          </caption>
          <thead className="bg-surface-50">
            <tr className="align-middle font-technical text-[10px] font-bold uppercase leading-[1.35] tracking-[0.08em] text-brand-blue sm:text-[11px]">
              <th scope="col" className="w-[36%] px-4 py-4 sm:px-5">Properties</th>
              <th scope="col" className="w-[13%] px-3 py-4 text-center">Unit</th>
              <th scope="col" className="w-[22%] px-3 py-4 text-center">{benchmarkLabel}</th>
              <th scope="col" className="w-[29%] border-l border-brand-blue/15 bg-[#EAF0FF] px-3 py-4 text-center">ARS {grade}</th>
            </tr>
          </thead>
          <tbody className="text-[13px] leading-[1.5] text-steel-700 sm:text-sm">
            {rows.map(([property, unit, standard, ars], index) => (
              <tr key={property} className={`border-t border-brand-blue/10 ${index % 2 === 0 ? "bg-white" : "bg-surface-50/70"}`}>
                <th scope="row" className="px-4 py-4 font-semibold text-ink-900 sm:px-5">{property}</th>
                <td className="px-3 py-4 text-center tabular-nums">{unit}</td>
                <td className="px-3 py-4 text-center tabular-nums">{standard}</td>
                <td className="border-l border-brand-blue/15 bg-[#F0F4FF] px-3 py-4 text-center font-bold text-brand-blue tabular-nums">{ars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PhysicalChemicalPropertiesTable({ grade }: Pick<PhysicalChemicalPropertiesTableProps, "grade">) {
  const rows = presentationRows[grade];

  return (
    <section className="overflow-hidden rounded-[14px] border border-brand-blue/15 bg-white text-ink-900 shadow-[0_18px_48px_rgba(13,43,110,0.08)]" aria-label={`Physical and chemical properties for ARS ${grade}`}>
      <header className="relative border-b border-white/10 bg-ink-950 px-6 py-6 text-white sm:px-8">
        <span className="absolute inset-y-0 left-0 w-1 bg-brand-red" aria-hidden="true" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-[1.75rem]">
            Physical &amp; Chemical Properties
          </h3>
          <p className="shrink-0 border-l-2 border-brand-red pl-4 font-technical text-[11px] font-bold uppercase tracking-[0.14em] text-white/78 sm:text-right">
            {grade}
          </p>
        </div>
      </header>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid gap-5 xl:grid-cols-2">
          <PropertiesTable label="CHEMICAL PROPERTIES" grade={grade} benchmarkLabel={rows.benchmarkLabel} rows={rows.chemical} />
          <PropertiesTable label="PHYSICAL PROPERTIES" grade={grade} benchmarkLabel={rows.benchmarkLabel} rows={rows.physical} />
        </div>
        {grade === "Fe 550D CRS" ? (
          <p className="mt-5 border-t border-brand-blue/10 pt-4 text-xs font-medium leading-6 text-steel-700">
            *Corrosion resistant equivalent
          </p>
        ) : null}
      </div>
    </section>
  );
}
