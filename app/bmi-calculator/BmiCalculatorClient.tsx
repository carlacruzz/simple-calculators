"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function BmiCalculatorClient() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const bmi = useMemo(() => {
    if (!weight || !height) return null;

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
          <label className="mb-2 block text-sm font-medium">
            Weight (kg)
          </label>
          <input
            type="number"
            placeholder="e.g. 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Height (cm)
          </label>
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
        label="Your BMI"
        value={bmi === null ? "Enter values" : bmi.toFixed(2)}
        extra={bmi !== null ? `Category: ${category}` : undefined}
      />
    </CalculatorLayout>
  );
}