"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function BmiCalculatorClient() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");

  const bmi = useMemo(() => {
    const w = Number(weight);
    const hCm = Number(height);

    if (isNaN(w) || isNaN(hCm) || w <= 0 || hCm <= 0) {
      return null;
    }

    const hM = hCm / 100;
    return w / (hM * hM);
  }, [weight, height]);

  const category = useMemo(() => {
    if (bmi === null) return "";

    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
  }, [bmi]);

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your body mass index using your height and weight."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Your BMI"
        value={bmi === null ? "Invalid input" : bmi.toFixed(2)}
        extra={bmi !== null ? `Category: ${category}` : undefined}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-3 text-xl font-semibold">How BMI works</h2>
          <p className="text-sm leading-7 text-slate-600">
            BMI is calculated by dividing your weight in kilograms by your
            height in meters squared. It is commonly used as a general health
            screening tool.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <h2 className="mb-3 text-xl font-semibold">Example</h2>
          <p className="text-sm leading-7 text-slate-600">
            A person who weighs 70 kg and is 170 cm tall has a BMI of around
            24.22, which falls into the normal weight category.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-4 text-xl font-semibold">Related calculators</h2>
        <div className="flex flex-wrap gap-3">
          <a href="/age-calculator" className="rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200">
            Age Calculator
          </a>
          <a href="/calorie-calculator" className="rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 hover:bg-slate-200">
            Calorie Calculator
          </a>
        </div>
      </div>
    </CalculatorLayout>
  );
}