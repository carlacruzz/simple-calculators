"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function BmiCalculatorClient() {
  const [sex, setSex] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const bmi = useMemo(() => {
    if (!height || !weight) return null;

    const h = Number(height);
    const w = Number(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      return null;
    }

    const heightInMeters = h / 100;
    return w / (heightInMeters * heightInMeters);
  }, [height, weight]);

  const category = useMemo(() => {
    if (bmi === null) return null;

    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obesity";
  }, [bmi]);

  const estimatedBodyFat = useMemo(() => {
    if (bmi === null || !age) return null;

    const a = Number(age);
    if (isNaN(a) || a <= 0) return null;

    // Deurenberg estimate:
    // Body fat % = 1.20 × BMI + 0.23 × age − 10.8 × sex − 5.4
    // sex = 1 for male, 0 for female
    // If "other / prefer not to say", we do not apply sex factor.

    if (sex === "male") {
      return 1.2 * bmi + 0.23 * a - 10.8 * 1 - 5.4;
    }

    if (sex === "female") {
      return 1.2 * bmi + 0.23 * a - 10.8 * 0 - 5.4;
    }

    return null;
  }, [bmi, age, sex]);

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your body mass index (BMI) from height and weight. You can also add sex and age for an estimated body fat percentage."
    >
      {/* INPUTS */}
      <div className="grid gap-5 md:grid-cols-2">
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
            Sex
          </label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          >
            <option value="">Select option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other / Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Age
          </label>
          <input
            type="number"
            placeholder="e.g. 30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      {/* BMI RESULT */}
      <ResultBox
        label="Your BMI"
        value={bmi === null ? "Enter height and weight" : bmi.toFixed(1)}
        extra={category ? `Category: ${category}` : undefined}
      />

      {/* OPTIONAL BODY FAT RESULT */}
      {(sex === "male" || sex === "female") && (
        <ResultBox
          label="Estimated body fat"
          value={
            estimatedBodyFat === null
              ? "Enter age"
              : `${estimatedBodyFat.toFixed(1)}%`
          }
          extra="This is only an estimate based on BMI, age, and sex."
        />
      )}

      {sex === "other" && (
        <div className="mt-6 rounded-2xl border border-slate-200 p-5">
          <p className="text-sm leading-7 text-slate-600">
            BMI itself does not use sex in the formula. Since you selected
            “Other / Prefer not to say”, no sex-based body fat estimate is applied.
          </p>
        </div>
      )}

      {/* INFO */}
      {bmi && (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="mb-3 text-xl font-semibold">
              BMI Categories
            </h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Underweight: {"< 18.5"}</li>
              <li>Normal weight: 18.5 – 24.9</li>
              <li>Overweight: 25 – 29.9</li>
              <li>Obesity: 30+</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <h2 className="mb-3 text-xl font-semibold">
              Important note
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              BMI is a simple screening tool and does not directly measure body fat.
              The BMI formula is the same for everyone, but the optional body fat
              estimate can vary depending on sex and age.
            </p>
          </div>
        </div>
      )}

      {/* GUIDE */}
      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Read the full guide to understand how BMI is calculated and how the categories are interpreted.
        </p>
        <a
          href="/guides/bmi"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the BMI guide
        </a>
      </div>
    </CalculatorLayout>
  );
}