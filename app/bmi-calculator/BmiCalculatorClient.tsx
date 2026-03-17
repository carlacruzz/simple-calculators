"use client";

import { useMemo, useState } from "react";

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
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
          ← Back to home
        </a>

        <h1 className="mb-2 text-4xl font-bold">BMI Calculator</h1>
        <p className="mb-8 text-gray-600">
          Calculate your body mass index using your weight and height.
        </p>

        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none"
            />
          </div>

          <div className="rounded-2xl bg-gray-50 p-5">
            <p className="mb-2 text-sm text-gray-500">Your BMI</p>
            <p className="text-3xl font-bold">
              {bmi === null ? "Invalid input" : bmi.toFixed(2)}
            </p>
            {bmi !== null && (
              <p className="mt-2 text-gray-700">Category: {category}</p>
            )}
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-3 text-2xl font-semibold">How BMI works</h2>
          <p className="text-gray-700">
            BMI is calculated by dividing weight in kilograms by height in meters squared.
            It is a simple screening tool often used to classify body weight ranges.
          </p>
        </section>
      </div>
    </main>
  );
}