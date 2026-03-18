import Link from "next/link";

export const metadata = {
  title: "How to Scale Recipes | Simple Calculators",
  description:
    "Learn how to adjust ingredient quantities when cooking for more or fewer people.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How to Scale Recipes
      </h1>

      <p className="mb-6 text-slate-600">
        Scaling a recipe means adjusting ingredient quantities when you want to cook
        for more or fewer people than the original recipe was designed for.
        The goal is to keep the proportions of all ingredients balanced.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Basic formula
      </h2>

      <pre className="rounded-lg bg-slate-100 p-4 text-sm">
{`new amount = original amount × (desired servings / original servings)`}
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If a recipe serves 4 people and uses 500 g of flour, but you want to cook
        for 8 people, you multiply the ingredient by 2. So you would need 1000 g of flour.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Why it matters
      </h2>

      <p className="text-slate-600">
        Recipe scaling is especially useful for meal prep, parties, and batch cooking.
        It helps avoid mistakes when increasing or reducing the amount of food.
      </p>

      <div className="mt-10">
        <Link
          href="/recipe-servings-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the recipe servings calculator
        </Link>
      </div>
    </main>
  );
}