"use client";

import { useMemo, useState } from "react";

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

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
          ← Back to home
        </a>

        <h1 className="mb-2 text-4xl font-bold">Compound Interest Calculator</h1>
        <p className="mb-8 text-gray-600">
          Estimate how much your money could grow over time with compound interest.
        </p>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium">
              Initial Amount ($)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">Years</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="mb-2 text-sm text-gray-500">Estimated Final Amount</p>
            <p className="text-3xl font-bold">
              {result === null ? "Invalid input" : `$${result.toFixed(2)}`}
            </p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-3 text-2xl font-semibold">How it works</h2>
          <p className="text-gray-700">
            This calculator uses the standard compound interest formula:
            money grows each year based on both the initial amount and the
            interest accumulated from previous years.
          </p>
        </section>
      </div>
    </main>
  );
}