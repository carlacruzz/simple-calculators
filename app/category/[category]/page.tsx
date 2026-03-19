import { notFound } from "next/navigation";
import CalculatorCard from "@/components/CalculatorCard";
import { calculators, type CalculatorItem } from "@/lib/calculators";

const validCategories = ["Finance", "Health", "Food", "Math"] as const;
type ValidCategory = (typeof validCategories)[number];

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryName =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  if (!validCategories.includes(categoryName as ValidCategory)) {
    notFound();
  }

  const filtered: CalculatorItem[] = calculators.filter(
    (calc: CalculatorItem) => calc.category === categoryName
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        {categoryName} Calculators
      </h1>

      <p className="mb-4 text-slate-600">
        Browse all calculators related to {categoryName.toLowerCase()}.
      </p>

      <p className="mb-10 max-w-3xl text-slate-600">
        These {categoryName.toLowerCase()} calculators help you solve common
        everyday problems quickly, whether you want to estimate payments,
        compare values, plan meals, or check health-related metrics.
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((calc: CalculatorItem) => (
          <CalculatorCard
            key={calc.href}
            title={calc.title}
            description={calc.description}
            href={calc.href}
            category={calc.category}
          />
        ))}
      </div>
    </main>
  );
}