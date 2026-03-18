"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function BmrCalculatorClient() {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const bmr = useMemo(() => {
    if (!sex || !age || !weight || !height) return null;

    const a = Number(age);
    const w = Number(weight);
    const h = Number(height);

    if (isNaN(a) || isNaN(w) || isNaN(h) || a <= 0 || w <= 0 || h <= 0) {
      return null;
    }

    if (sex === "male") {
      return 10 * w + 6.25 * h - 5 * a + 5;
    }

    if (sex === "female") {
      return 10 * w + 6.25 * h - 5 * a - 161;
    }

    return null;
  }, [sex, age, weight, height]);

  return (
    <CalculatorLayout
      title="BMR Calculator"
      description="Estimate your basal metabolic rate using sex, age, weight, and height."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Sex</label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          >
            <option value="">Select sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Age</label>
          <input
            type="number"
            placeholder="e.g. 30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Weight (kg)</label>
          <input
            type="number"
            placeholder="e.g. 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Height (cm)</label>
          <input
            type="number"
            placeholder="e.g. 170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Estimated BMR"
        value={bmr === null ? "Enter values" : `${bmr.toFixed(0)} kcal/day`}
      />

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Learn what basal metabolic rate means and how it helps estimate the calories your body burns at rest.
        </p>
        <a
          href="/guides/bmr"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the BMR guide
        </a>
      </div>
    </CalculatorLayout>
  );
}