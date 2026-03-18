"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");

  const age = useMemo(() => {
    if (!birthDate) return null;

    const birth = new Date(birthDate);
    const today = new Date();

    if (isNaN(birth.getTime())) return null;

    let years = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      years--;
    }

    return years;
  }, [birthDate]);

  return (
    <CalculatorLayout
      title="Age Calculator"
      description="Calculate your age from your date of birth."
    >
      <div className="max-w-md">
        <label className="mb-2 block text-sm font-medium">Date of birth</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <ResultBox
        label="Your age"
        value={age === null ? "Enter a date" : `${age} years`}
      />

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Read the full guide to understand how age is calculated based on your birth date.
        </p>
        <a
          href="/guides/age"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the age guide
        </a>
      </div>
    </CalculatorLayout>
  );
}