"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function InflationCalculatorClient() {
  const [amount, setAmount] = useState("");
  const [inflationRate, setInflationRate] = useState("");
  const [years, setYears] = useState("");

  const futureCost = useMemo(() => {
    if (!amount || !inflationRate || !years) return null;

    const a = Number(amount);
    const r = Number(inflationRate) / 100;
    const y = Number(years);

    if (isNaN(a) || isNaN(r) || isNaN(y)) return null;
    if (a < 0 || r < 0 || y < 0) return null;

    return a * Math.pow(1 + r, y);
  }, [amount, inflationRate, years]);

  return (
    <CalculatorLayout
      title="Inflation Calculator"
      description="Estimate how inflation affects the future cost of money."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Current amount ($)</label>
          <input
            type="number"
            placeholder="e.g. 100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Inflation rate (%)</label>
          <input
            type="number"
            placeholder="e.g. 3"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Years</label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Future value"
        value={futureCost === null ? "Enter values" : `$${futureCost.toFixed(2)}`}
      />
    </CalculatorLayout>
  );
}