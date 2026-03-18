"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function LoanCalculatorClient() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");

  const payment = useMemo(() => {
    if (!amount || !rate || !years) return null;

    const P = Number(amount);
    const r = Number(rate) / 100 / 12;
    const n = Number(years) * 12;

    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r <= 0 || n <= 0) {
      return null;
    }

    return (P * r) / (1 - Math.pow(1 + r, -n));
  }, [amount, rate, years]);

  return (
    <CalculatorLayout
      title="Loan Calculator"
      description="Calculate monthly loan payments based on amount, interest rate, and loan term."
    >
      <div className="grid gap-5 md:grid-cols-3">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Loan amount ($)
          </label>
          <input
            type="number"
            placeholder="e.g. 10000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Interest rate (%)
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
            placeholder="e.g. 5"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

      </div>

      <ResultBox
        label="Estimated monthly payment"
        value={payment === null ? "Enter values" : `$${payment.toFixed(2)}`}
      />
    </CalculatorLayout>
  );
}