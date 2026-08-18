export const calculatorRegions = ["Tamil Nadu", "Andhra Pradesh", "Kerala", "Karnataka"] as const;
export type CalculatorRegion = (typeof calculatorRegions)[number];

export const calculatorCities: Record<CalculatorRegion, readonly string[]> = {
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Tirunelveli", "Erode", "Vellore"],
  "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati", "Nellore", "Kurnool", "Rajahmundry"],
  Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Kannur", "Alappuzha"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi", "Davanagere", "Ballari"],
};

export const calculatorProducts = ["ARS CRS Fe 550D", "ARS Fe 550D"] as const;
export type CalculatorProduct = (typeof calculatorProducts)[number];

export const requirementModes = ["Rods", "Weight (Kgs)"] as const;
export type RequirementMode = (typeof requirementModes)[number];

export const calculatorBars = [
  { size: "8mm", piecesPerBundle: 10, meanBundleWeight: 46.482 },
  { size: "10mm", piecesPerBundle: 7, meanBundleWeight: 50.856 },
  { size: "12mm", piecesPerBundle: 5, meanBundleWeight: 52.826 },
  { size: "16mm", piecesPerBundle: 3, meanBundleWeight: 56.3825 },
  { size: "20mm", piecesPerBundle: 2, meanBundleWeight: 59.365 },
  { size: "25mm", piecesPerBundle: 1, meanBundleWeight: 46.2625 },
  { size: "32mm", piecesPerBundle: 1, meanBundleWeight: 75.829 },
] as const;

export type CalculatorBar = (typeof calculatorBars)[number];
export type CalculatorInputs = Record<string, number>;

export const pricePerTon: Record<CalculatorRegion, Record<CalculatorProduct, Record<string, number>>> = {
  "Tamil Nadu": {
    "ARS Fe 550D": { "8mm": 67000.4, "10mm": 67000.4, "12mm": 66000.35, "16mm": 66000.35, "20mm": 66000.35, "25mm": 66000.35, "32mm": 67000.4 },
    "ARS CRS Fe 550D": { "8mm": 69999.96, "10mm": 69999.96, "12mm": 68999.91, "16mm": 68999.91, "20mm": 68999.91, "25mm": 68999.91, "32mm": 69999.96 },
  },
  "Andhra Pradesh": {
    "ARS Fe 550D": { "8mm": 65584.4, "10mm": 65584.4, "12mm": 64584.35, "16mm": 64584.35, "20mm": 64584.35, "25mm": 64584.35, "32mm": 65584.4 },
    "ARS CRS Fe 550D": { "8mm": 68583.96, "10mm": 68583.96, "12mm": 67583.91, "16mm": 67583.91, "20mm": 67583.91, "25mm": 67583.91, "32mm": 68583.96 },
  },
  Kerala: {
    "ARS Fe 550D": { "8mm": 64109.4, "10mm": 64109.4, "12mm": 63109.35, "16mm": 63109.35, "20mm": 63109.35, "25mm": 63109.35, "32mm": 64109.4 },
    "ARS CRS Fe 550D": { "8mm": 67108.96, "10mm": 67108.96, "12mm": 66108.91, "16mm": 66108.91, "20mm": 66108.91, "25mm": 66108.91, "32mm": 67108.96 },
  },
  Karnataka: {
    "ARS Fe 550D": { "8mm": 65525.4, "10mm": 65525.4, "12mm": 64525.35, "16mm": 64525.35, "20mm": 64525.35, "25mm": 64525.35, "32mm": 65525.4 },
    "ARS CRS Fe 550D": { "8mm": 68524.96, "10mm": 68524.96, "12mm": 67524.91, "16mm": 67524.91, "20mm": 67524.91, "25mm": 67524.91, "32mm": 68524.96 },
  },
};

export function calculateBar(bar: CalculatorBar, mode: RequirementMode, input: number) {
  const safeInput = Number.isFinite(input) && input > 0 ? input : 0;
  const rods = mode === "Weight (Kgs)"
      ? Math.round((safeInput / bar.meanBundleWeight) * bar.piecesPerBundle)
      : Math.round(safeInput);
  const bundles = Math.floor(rods / bar.piecesPerBundle);
  const remainingRods = rods - bundles * bar.piecesPerBundle;
  const kilograms = (rods / bar.piecesPerBundle) * bar.meanBundleWeight;
  return { input: safeInput, rods, bundles, remainingRods, kilograms };
}

export function getRatePerKg(region: string, product: string, size: string) {
  return ((pricePerTon as Record<string, Record<string, Record<string, number>>>)[region]?.[product]?.[size] ?? 0) / 1000;
}

export const calculatorNotes = [
  "Rates are inclusive of GST and are indicative until ARS confirms the current order rate.",
  "Each piece is 12 metres long. Delivery, transportation, and loading/unloading charges are extra.",
  "Dimensions are subject to BIS tolerances; verify piece counts at delivery.",
];
