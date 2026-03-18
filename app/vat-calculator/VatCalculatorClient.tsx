"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function VatCalculatorClient() {
  const [price, setPrice] = useState("");
  const [vatRate, setVatRate] = useState("");

  const results = useMemo(() => {
    if (!price || !vatRate) return null;

    const p = Number(price);
    const v = Number(vatRate);

    if (isNaN(p) || isNaN(v) || p < 0 || v < 0) return null;

    const vatAmount = (v / 100) * p;
    const total = p + vatAmount;

    return { vatAmount, total };
  }, [price, vatRate]);

  return (
    <CalculatorLayout
      title="VAT Calculator"
      description="Calculate VAT amount and total price based on a tax percentage."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Price before VAT ($)</label>
          <input
            type="number"
            placeholder="e.g. 100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">VAT rate (%)</label>
          <input
            type="number"
            placeholder="e.g. 21"
            value={vatRate}
            onChange={(e) => setVatRate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="VAT amount"
        value={results === null ? "Enter values" : `$${results.vatAmount.toFixed(2)}`}
        extra={results !== null ? `Total price: $${results.total.toFixed(2)}` : undefined}
      />

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Read the full guide to understand how VAT is calculated and how to find the final price after tax.
        </p>
        <a
          href="/guides/vat"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the VAT guide
        </a>
      </div>
    </CalculatorLayout>
  );
}