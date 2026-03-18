"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function LoanCalculatorClient() {
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("5");

  const payment = useMemo(() => {
    const P = Number(amount);
    const r = Number(rate) / 100 / 12;
    const n = Number(years) * 12;

    if (!P || !r || !n) return null;

    return (P * r) / (1 - Math.pow(1 + r, -n));
  }, [amount, rate, years]);

  return (
    <CalculatorLayout
      title="Loan Calculator"
      description="Calculate monthly loan payments based on amount, interest rate, and loan term."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Loan amount ($)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Interest rate (%)</label>
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
        label="Estimated monthly payment"
        value={payment ? `$${payment.toFixed(2)}` : "Invalid input"}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-3 text-xl font-semibold">How it works</h2>
          <p className="text-sm leading-7 text-slate-600">
            This calculator estimates your monthly payment based on a standard
            amortized loan formula using principal, annual interest, and loan duration.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-3 text-xl font-semibold">Example</h2>
          <p className="text-sm leading-7 text-slate-600">
            A $10,000 loan at 5% annual interest over 5 years produces a fixed
            monthly payment that helps you estimate your budget.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-4 text-xl font-semibold">Related calculators</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/compound-interest-calculator" className="rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200">
            Compound Interest Calculator
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