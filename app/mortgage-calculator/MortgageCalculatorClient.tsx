"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function MortgageCalculatorClient() {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  const results = useMemo(() => {
    if (!homePrice || !downPayment || !interestRate || !loanTerm) return null;

    const price = Number(homePrice);
    const down = Number(downPayment);
    const annualRate = Number(interestRate);
    const years = Number(loanTerm);

    if (
      isNaN(price) ||
      isNaN(down) ||
      isNaN(annualRate) ||
      isNaN(years) ||
      price <= 0 ||
      down < 0 ||
      annualRate <= 0 ||
      years <= 0 ||
      down >= price
    ) {
      return null;
    }

    const principal = price - down;
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterest = totalPaid - principal;

    return {
      principal,
      monthlyPayment,
      totalPaid,
      totalInterest,
    };
  }, [homePrice, downPayment, interestRate, loanTerm]);

  return (
    <CalculatorLayout
      title="Mortgage Calculator"
      description="Estimate your monthly mortgage payment based on home price, down payment, interest rate, and loan term."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Home price ($)</label>
          <input
            type="number"
            placeholder="e.g. 250000"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Down payment ($)</label>
          <input
            type="number"
            placeholder="e.g. 50000"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Interest rate (%)</label>
          <input
            type="number"
            placeholder="e.g. 4.5"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Loan term (years)</label>
          <input
            type="number"
            placeholder="e.g. 30"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Estimated monthly payment"
        value={
          results === null
            ? "Enter values"
            : `$${results.monthlyPayment.toFixed(2)}`
        }
        extra={
          results !== null
            ? `Loan amount: $${results.principal.toFixed(2)} · Total interest: $${results.totalInterest.toFixed(2)}`
            : undefined
        }
      />

      {results && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="mb-3 text-xl font-semibold">Summary</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Loan amount: ${results.principal.toFixed(2)}</li>
              <li>Total paid: ${results.totalPaid.toFixed(2)}</li>
              <li>Total interest: ${results.totalInterest.toFixed(2)}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="mb-3 text-xl font-semibold">How it works</h2>
            <p className="text-sm leading-7 text-slate-600">
              Mortgage payments are calculated using the loan amount, annual
              interest rate, and repayment period. This gives you a fixed monthly
              payment for a standard amortized mortgage.
            </p>
          </div>
        </div>
      )}

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Learn how mortgage payments are calculated and how loan term and interest rate affect your monthly costs.
        </p>
        <a
          href="/guides/mortgage"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the mortgage guide
        </a>
      </div>
    </CalculatorLayout>
  );
}