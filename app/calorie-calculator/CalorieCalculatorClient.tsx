"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function CalorieCalculatorClient() {
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("");

  const calories = useMemo(() => {
    if (!sex || !age || !weight || !height || !activity) return null;

    const a = Number(age);
    const w = Number(weight);
    const h = Number(height);
    const act = Number(activity);

    if (isNaN(a) || isNaN(w) || isNaN(h) || isNaN(act)) return null;
    if (a <= 0 || w <= 0 || h <= 0 || act <= 0) return null;

    let bmr = 0;

    if (sex === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else if (sex === "female") {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    } else {
      return null;
    }

    return bmr * act;
  }, [sex, age, weight, height, activity]);

  return (
    <CalculatorLayout
      title="Calorie Calculator"
      description="Estimate your daily calorie needs using age, sex, body measurements, and activity level."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Sex</label>
          <select
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
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

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">Activity level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white"
          >
            <option value="">Select activity level</option>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
            <option value="1.9">Extra active</option>
          </select>
        </div>
      </div>

      <ResultBox
        label="Estimated daily calories"
        value={calories === null ? "Enter values" : `${calories.toFixed(0)} kcal/day`}
      />
    </CalculatorLayout>
  );
}