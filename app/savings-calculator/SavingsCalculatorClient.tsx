"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function SavingsCalculatorClient() {
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [years, setYears] = useState("");
  const [annualRate, setAnnualRate] = useState("");

  const finalAmount = useMemo(() => {
    if (!monthlyContribution || !years || !annualRate) return null;

    const monthly = Number(monthlyContribution);
    const y = Number(years);
    const rate = Number(annualRate) / 100 / 12;

    if (isNaN(monthly) || isNaN(y) || isNaN(rate) || monthly < 0 || y <= 0 || rate < 0) {
      return null;
    }

    const months = y * 12;
    let total = 0;

    for (let i = 0; i < months; i++) {
      total = total * (1 + rate) + monthly;
    }

    return total;
  }, [monthlyContribution, years, annualRate]);

  return (
    <CalculatorLayout
      title="Savings Calculator"
      description="Estimate how much you could save with regular monthly contributions."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Monthly contribution ($)</label>
          <input
            type="number"
            placeholder="e.g. 200"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
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

        <div>
          <label className="mb-2 block text-sm font-medium">Annual interest rate (%)</label>
          <input
            type="number"
            placeholder="e.g. 5"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Estimated savings"
        value={finalAmount === null ? "Enter values" : `$${finalAmount.toFixed(2)}`}
      />
    </CalculatorLayout>
  );
}