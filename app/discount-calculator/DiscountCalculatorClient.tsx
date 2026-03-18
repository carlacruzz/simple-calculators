"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

export default function DiscountCalculatorClient() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const finalPrice = useMemo(() => {
    if (!originalPrice || !discount) return null;

    const price = Number(originalPrice);
    const disc = Number(discount);

    if (isNaN(price) || isNaN(disc) || price < 0 || disc < 0) return null;

    return price - (disc / 100) * price;
  }, [originalPrice, discount]);

  return (
    <CalculatorLayout
      title="Discount Calculator"
      description="Calculate the final price after applying a discount."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Original price ($)</label>
          <input
            type="number"
            placeholder="e.g. 100"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Discount (%)</label>
          <input
            type="number"
            placeholder="e.g. 25"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Final price"
        value={finalPrice === null ? "Enter values" : `$${finalPrice.toFixed(2)}`}
      />
    </CalculatorLayout>
  );
}