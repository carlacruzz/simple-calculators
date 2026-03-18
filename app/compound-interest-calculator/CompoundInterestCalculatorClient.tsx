"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function CompoundInterestCalculatorClient() {
  const [principal, setPrincipal] = useState("1000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("10");

  const result = useMemo(() => {
    const p = Number(principal);
    const r = Number(rate);
    const y = Number(years);

    if (isNaN(p) || isNaN(r) || isNaN(y) || p < 0 || r < 0 || y < 0) {
      return null;
    }

    return p * Math.pow(1 + r / 100, y);
  }, [principal, rate, years]);

  const invested = Number(principal);
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
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Annual interest rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Years</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Estimated final amount"
        value={result === null ? "Invalid input" : `$${result.toFixed(2)}`}
        extra={
          result !== null && interestEarned !== null
            ? `Interest earned: $${interestEarned.toFixed(2)}`
            : undefined
        }
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-3 text-xl font-semibold">How it works</h2>
          <p className="text-sm leading-7 text-slate-600">
            Compound interest means your money grows not only on your initial
            investment, but also on the interest accumulated over time.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-3 text-xl font-semibold">Example</h2>
          <p className="text-sm leading-7 text-slate-600">
            If you invest $1,000 at 5% annual interest for 10 years, your final
            balance would be higher than your original investment because each
            year builds on the previous one.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-4 text-xl font-semibold">Related calculators</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/loan-calculator" className="rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200">
            Loan Calculator
          </a>
          <a href="/savings-calculator" className="rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200">
            Savings Calculator
          </a>
          <a href="/percentage-calculator" className="rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200">
            Percentage Calculator
          </a>
        </div>
      </div>
    </CalculatorLayout>
  );
}