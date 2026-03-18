"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function PercentageCalculatorClient() {
  const [percent, setPercent] = useState("");
  const [value, setValue] = useState("");

  const result = useMemo(() => {
    if (!percent || !value) return null;

    const p = Number(percent);
    const v = Number(value);

    if (isNaN(p) || isNaN(v)) return null;

    return (p / 100) * v;
  }, [percent, value]);

  return (
    <CalculatorLayout
      title="Percentage Calculator"
      description="Find what percentage of a number is, quickly and easily."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Percentage (%)</label>
          <input
            type="number"
            placeholder="e.g. 20"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Value</label>
          <input
            type="number"
            placeholder="e.g. 150"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Result"
        value={result === null ? "Enter values" : result.toFixed(2)}
      />

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Example</h2>
        <p className="text-sm leading-7 text-slate-600">
          20% of 150 is 30.
        </p>
      </div>
    </CalculatorLayout>
  );
}