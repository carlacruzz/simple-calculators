"use client";

import { useMemo, useState } from "react";

export default function LoanCalculatorClient() {

  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("5");

  const payment = useMemo(() => {
    const P = Number(amount);
    const r = Number(rate) / 100 / 12;
    const n = Number(years) * 12;

    if (!P || !r || !n) return null;

    const result = (P * r) / (1 - Math.pow(1 + r, -n));
    return result;
  }, [amount, rate, years]);

  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-2xl">

        <a href="/" className="text-blue-600 text-sm">← Back</a>

        <h1 className="text-4xl font-bold mb-4 mt-4">
          Loan Calculator
        </h1>

        <p className="text-gray-600 mb-8">
          Calculate monthly loan payments based on loan amount,
          interest rate and loan term.
        </p>

        <div className="border rounded-xl p-6">

          <label>Loan Amount ($)</label>
          <input
            className="w-full border p-2 mb-4"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
          />

          <label>Interest Rate (%)</label>
          <input
            className="w-full border p-2 mb-4"
            value={rate}
            onChange={(e)=>setRate(e.target.value)}
          />

          <label>Years</label>
          <input
            className="w-full border p-2 mb-4"
            value={years}
            onChange={(e)=>setYears(e.target.value)}
          />

          <div className="bg-gray-100 p-4 mt-4 rounded">
            <p className="text-sm text-gray-500">Monthly Payment</p>
            <p className="text-3xl font-bold">
              {payment ? `$${payment.toFixed(2)}` : "-"}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}