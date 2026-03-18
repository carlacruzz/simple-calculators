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
          <label className="mb-2 block text-sm font-medium">Initial amount ($)</label>
          <input
            type="number"
            placeholder="e.g. 1000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Annual interest rate (%)</label>
          <input
            type="number"
            placeholder="e.g. 5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
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
        label="Estimated final amount"
        value={result === null ? "Enter values" : `$${result.toFixed(2)}`}
        extra={
          result !== null && interestEarned !== null
            ? `Interest earned: $${interestEarned.toFixed(2)}`
            : undefined
        }
      />

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Read the full guide to understand how compound interest works and why it matters for long-term investing.
        </p>
        <a
          href="/guides/compound-interest"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the compound interest guide
        </a>
      </div>
    </CalculatorLayout>
  );
}