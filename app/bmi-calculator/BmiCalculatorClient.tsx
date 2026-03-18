"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "@/components/CalculatorLayout";
import ResultBox from "@/components/ResultBox";

type Ingredient = {
  id: number;
  name: string;
  amount: string;
  unit: string;
};

export default function RecipeServingsCalculatorClient() {
  const [originalServings, setOriginalServings] = useState("");
  const [desiredServings, setDesiredServings] = useState("");

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: "", amount: "", unit: "" },
  ]);

  const multiplier = useMemo(() => {
    if (!originalServings || !desiredServings) return null;

    const original = Number(originalServings);
    const desired = Number(desiredServings);

    if (!original || !desired || original <= 0 || desired <= 0) return null;

    return desired / original;
  }, [originalServings, desiredServings]);

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: Date.now(), name: "", amount: "", unit: "" },
    ]);
  };

  const removeIngredient = (id: number) => {
    setIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
  };

  const updateIngredient = (
    id: number,
    field: keyof Omit<Ingredient, "id">,
    value: string
  ) => {
    setIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient
      )
    );
  };

  const scaledIngredients = useMemo(() => {
    if (!multiplier) return [];

    return ingredients.map((ingredient) => {
      const amount = Number(ingredient.amount);
      const scaledAmount = isNaN(amount) ? null : amount * multiplier;

      return {
        ...ingredient,
        scaledAmount,
      };
    });
  }, [ingredients, multiplier]);

  return (
    <CalculatorLayout
      title="Recipe Servings Calculator"
      description="Scale ingredients automatically for more or fewer servings."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Original servings</label>
          <input
            type="number"
            placeholder="e.g. 4"
            value={originalServings}
            onChange={(e) => setOriginalServings(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Desired servings</label>
          <input
            type="number"
            placeholder="e.g. 8"
            value={desiredServings}
            onChange={(e) => setDesiredServings(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
      </div>

      <ResultBox
        label="Servings multiplier"
        value={multiplier ? `${multiplier.toFixed(2)}x` : "Enter values"}
      />

      <div className="mt-10">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Ingredients</h2>

          <button
            onClick={addIngredient}
            className="rounded-xl bg-slate-900 px-4 py-3 text-sm text-white"
          >
            + Add ingredient
          </button>
        </div>

        <div className="space-y-4">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="border border-slate-200 rounded-2xl p-5"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  placeholder="Ingredient name"
                  value={ingredient.name}
                  onChange={(e) =>
                    updateIngredient(ingredient.id, "name", e.target.value)
                  }
                  className="border border-slate-300 rounded-xl px-4 py-3"
                />

                <input
                  type="number"
                  placeholder="Amount"
                  value={ingredient.amount}
                  onChange={(e) =>
                    updateIngredient(ingredient.id, "amount", e.target.value)
                  }
                  className="border border-slate-300 rounded-xl px-4 py-3"
                />

                <input
                  placeholder="Unit"
                  value={ingredient.unit}
                  onChange={(e) =>
                    updateIngredient(ingredient.id, "unit", e.target.value)
                  }
                  className="border border-slate-300 rounded-xl px-4 py-3"
                />
              </div>

              {ingredients.length > 1 && (
                <button
                  onClick={() => removeIngredient(ingredient.id)}
                  className="mt-4 text-sm text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {multiplier && (
        <div className="mt-10 border border-slate-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Adjusted ingredients</h2>

          <ul className="space-y-2">
            {scaledIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.name || "Ingredient"} :{" "}
                {ingredient.scaledAmount !== null
                  ? ingredient.scaledAmount.toFixed(2)
                  : "-"}{" "}
                {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 rounded-2xl border border-slate-200 p-5">
        <h2 className="mb-3 text-xl font-semibold">Learn more</h2>
        <p className="mb-4 text-sm leading-7 text-slate-600">
          Read the full guide to learn how recipe scaling works and how to adjust ingredient quantities correctly.
        </p>
        <a
          href="/guides/recipe-scaling"
          className="inline-flex rounded-lg bg-slate-900 px-4 py-3 text-sm text-white hover:bg-slate-700"
        >
          Read the recipe scaling guide
        </a>
      </div>
    </CalculatorLayout>
  );
}