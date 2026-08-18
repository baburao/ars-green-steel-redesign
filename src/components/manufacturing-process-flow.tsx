import Image from "next/image";

type ManufacturingProcessFlowProps = {
  stages: readonly string[];
};

const iconByStage: Record<string, string> = {
  "Raw Material": "/ars-assets/manufacturing/Raw_Material.svg",
  "Steel Making": "/ars-assets/manufacturing/Steel_Making.svg",
  "Continuous Casting": "/ars-assets/manufacturing/Continuous_Casting.svg",
  "Billet Formation": "/ars-assets/manufacturing/Billet_Formation.svg",
  "Rolling Mill": "/ars-assets/manufacturing/Rolling_Mill.svg",
  "Thermo Mechanical Treatment": "/ars-assets/manufacturing/Thermo_Mechanical_Treatment.svg",
  "Cooling Bed": "/ars-assets/manufacturing/Cooling_Bed.svg",
  "Cutting & Bundling": "/ars-assets/manufacturing/Cutting_&_Bundling.svg",
  Dispatch: "/ars-assets/manufacturing/Dispatch.svg",
};

export function ManufacturingProcessFlow({ stages }: ManufacturingProcessFlowProps) {
  const rows = [stages.slice(0, 4), stages.slice(4, 8), stages.slice(8, 9)];

  return (
    <ol className="manufacturing-process-flow mt-14 list-none">
      {rows.map((row, rowIndex) => (
        <li
          key={rowIndex}
          className={`manufacturing-process-row relative grid list-none gap-8 ${row.length === 1 ? "lg:flex lg:justify-center" : "lg:grid-cols-4 lg:gap-14"}`}
        >
          {row.map((stage, columnIndex) => {
            const index = rowIndex * 4 + columnIndex;

            return (
              <div key={stage} className={`relative ${row.length === 1 ? "lg:w-[calc((100%-10.5rem)/4)]" : ""}`}>
                <div className="manufacturing-process-step relative flex min-h-36 items-center gap-5 rounded-[16px] border border-brand-blue/10 bg-white px-6 py-6 shadow-[0_10px_28px_rgba(13,43,110,0.07)] md:min-h-40 md:px-8 lg:h-[210px] lg:min-h-0 lg:flex-col lg:justify-center lg:gap-3 lg:px-4 lg:text-center xl:h-auto xl:min-h-[144px] xl:flex-row xl:justify-start xl:gap-4 xl:px-5 xl:text-left">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-[58px] shrink-0 items-center justify-center rounded-full border-2 border-brand-blue font-technical text-[20px] font-medium tracking-[-0.04em] text-brand-blue lg:size-10 lg:text-sm xl:size-12 xl:text-base"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={iconByStage[stage]}
                    alt=""
                    width={84}
                    height={84}
                    className="size-[78px] shrink-0 object-contain lg:size-14 xl:size-16"
                  />
                  <h3 className="min-w-0 font-display text-lg font-bold leading-[1.1] text-ink-900 xl:text-xl">
                    {stage}
                  </h3>
                </div>
                {columnIndex < row.length - 1 ? <span aria-hidden="true" className="manufacturing-process-arrow" /> : null}
              </div>
            );
          })}
        </li>
      ))}
    </ol>
  );
}
