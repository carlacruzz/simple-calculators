"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

const unitFactors: Record<string, number> = {
  meter: 1,
  kilometer: 1000,
  centimeter: 0.01,
  mile: 1609.34,
  foot: 0.3048,
  inch: 0.0254,
};

export default function UnitConverterClient() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");

  const converted = useMemo(() => {
    if (!value || !fromUnit || !toUnit) return null;

    const num = Number(value);
    if (isNaN(num)) return null;

    const valueInMeters = num * unitFactors[fromUnit];
    return valueInMeters / unitFactors[toUnit];
  }, [value, fromUnit, toUnit]);

  return (
    <CalculatorLayout
      title="Unit Converter"
      description="Convert between common length units quickly and accurately."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">Value</label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          >
            <option value="">Select unit</option>
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="centimeter">Centimeter</option>
            <option value="mile">Mile</option>
            <option value="foot">Foot</option>
            <option value="inch">Inch</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          >
            <option value="">Select unit</option>
            <option value="meter">Meter</option>
            <option value="kilometer">Kilometer</option>
            <option value="centimeter">Centimeter</option>
            <option value="mile">Mile</option>
            <option value="foot">Foot</option>
            <option value="inch">Inch</option>
          </select>
        </div>
      </div>

      <ResultBox
        label="Converted value"
        value={converted === null ? "Enter values" : converted.toFixed(4)}
        extra={converted !== null ? `${value} ${fromUnit} = ${converted.toFixed(4)} ${toUnit}` : undefined}
      />

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Learn how unit conversion works and how to move between common metric and imperial length units.
        </p>
        <a
          href="/guides/unit-conversion"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the unit conversion guide
        </a>
      </div>
    </CalculatorLayout>
  );
}