"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function CompoundInterestCalculatorClient() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const result = useMemo(() => {
    if (!principal || !rate || !years) return null;

    const p = Number(principal);
    const r = Number(rate);
    const y = Number(years);

    if (isNaN(p) || isNaN(r) || isNaN(y) || p < 0 || r < 0 || y < 0) {
      return null;
    }

    return p * Math.pow(1 + r / 100, y);
  }, [principal, rate, years]);

  const invested = principal ? Number(principal) : 0;
  const interestEarned = result !== null ? result - invested : null;

  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="Estimate how much your investment could grow over time using compound interest."
    >
      <div className="grid gap-5 md:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Initial amount ($)
          </label>
          <input
            type="number"
            placeholder="e.g. 1000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Annual interest rate (%)
          </label>
          <input
            type="number"
            placeholder="e.g. 5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Years
          </label>
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
        label="Estimated final amount"
        value={result === null ? "Enter values" : `$${result.toFixed(2)}`}
        extra={
          result !== null && interestEarned !== null
            ? `Interest earned: $${interestEarned.toFixed(2)}`
            : undefined
        }
      />
    </CalculatorLayout>
  );
}