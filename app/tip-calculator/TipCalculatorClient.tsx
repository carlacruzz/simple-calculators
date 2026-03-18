"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function TipCalculatorClient() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [people, setPeople] = useState("");

  const results = useMemo(() => {
    if (!billAmount || !tipPercent || !people) return null;

    const bill = Number(billAmount);
    const tip = Number(tipPercent);
    const count = Number(people);

    if (
      isNaN(bill) ||
      isNaN(tip) ||
      isNaN(count) ||
      bill < 0 ||
      tip < 0 ||
      count <= 0
    ) {
      return null;
    }

    const tipAmount = (tip / 100) * bill;
    const total = bill + tipAmount;
    const perPerson = total / count;

    return { tipAmount, total, perPerson };
  }, [billAmount, tipPercent, people]);

  return (
    <CalculatorLayout
      title="Tip Calculator"
      description="Calculate the tip amount, total bill, and how much each person should pay."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Bill amount ($)</label>
          <input
            type="number"
            placeholder="e.g. 80"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Tip (%)</label>
          <input
            type="number"
            placeholder="e.g. 15"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">People</label>
          <input
            type="number"
            placeholder="e.g. 4"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Tip amount"
        value={results === null ? "Enter values" : `$${results.tipAmount.toFixed(2)}`}
        extra={
          results !== null
            ? `Total bill: $${results.total.toFixed(2)} · Per person: $${results.perPerson.toFixed(2)}`
            : undefined
        }
      />

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Learn how tip percentages affect the final bill and how to split the cost fairly between multiple people.
        </p>
        <a
          href="/guides/tip"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the tip guide
        </a>
      </div>
    </CalculatorLayout>
  );
}