import { notFound } from "next/navigation";
import CalculatorCard from "@/components/CalculatorCard";

const calculators = [
  {
    title: "Compound Interest Calculator",
    description: "Estimate investment growth.",
    href: "/compound-interest-calculator",
    category: "Finance",
  },
  {
    title: "Loan Calculator",
    description: "Calculate monthly loan payments.",
    href: "/loan-calculator",
    category: "Finance",
  },
  {
    title: "Savings Calculator",
    description: "Estimate long-term savings.",
    href: "/savings-calculator",
    category: "Finance",
  },
  {
    title: "Inflation Calculator",
    description: "Estimate the future value of money.",
    href: "/inflation-calculator",
    category: "Finance",
  },
  {
    title: "VAT Calculator",
    description: "Calculate VAT and total price.",
    href: "/vat-calculator",
    category: "Finance",
  },
  {
    title: "BMI Calculator",
    description: "Calculate your BMI.",
    href: "/bmi-calculator",
    category: "Health",
  },
  {
    title: "Calorie Calculator",
    description: "Estimate daily calorie needs.",
    href: "/calorie-calculator",
    category: "Health",
  },
  {
    title: "Age Calculator",
    description: "Calculate your age.",
    href: "/age-calculator",
    category: "Health",
  },
  {
    title: "Recipe Servings Calculator",
    description: "Scale recipe ingredients.",
    href: "/recipe-servings-calculator",
    category: "Food",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages.",
    href: "/percentage-calculator",
    category: "Math",
  },
  {
    title: "Discount Calculator",
    description: "Calculate discounts.",
    href: "/discount-calculator",
    category: "Math",
  },
];

const validCategories = ["Finance", "Health", "Food", "Math"];

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categoryName =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  if (!validCategories.includes(categoryName)) {
    notFound();
  }

  const filtered = calculators.filter(
    (calc) => calc.category === categoryName
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        {categoryName} Calculators
      </h1>

      <p className="mb-10 text-slate-600">
        Browse all calculators related to {categoryName.toLowerCase()}.
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((calc) => (
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