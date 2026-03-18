"use client";

import { useMemo, useState } from "react";
import CalculatorCard from "@/components/CalculatorCard";

const calculators = [
  {
    title: "Compound Interest Calculator",
    description: "Estimate how your money could grow over time with compound interest.",
    href: "/compound-interest-calculator",
    category: "Finance",
  },
  {
    title: "Loan Calculator",
    description: "Calculate monthly loan payments based on amount, rate, and term.",
    href: "/loan-calculator",
    category: "Finance",
  },
  {
    title: "BMI Calculator",
    description: "Check your body mass index using your weight and height.",
    href: "/bmi-calculator",
    category: "Health",
  },
  {
    title: "Recipe Servings Calculator",
    description: "Scale ingredients automatically for more or fewer servings.",
    href: "/recipe-servings-calculator",
    category: "Food",
  },
  {
    title: "Percentage Calculator",
    description: "Find percentages, increases, decreases, and differences.",
    href: "/percentage-calculator",
    category: "Math",
  },
  {
    title: "Savings Calculator",
    description: "Estimate how much you could save over time with regular contributions.",
    href: "/savings-calculator",
    category: "Finance",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCalculators = useMemo(() => {
    const q = search.toLowerCase().trim();

    if (!q) return calculators;

    return calculators.filter((calc) =>
      [calc.title, calc.description, calc.category].join(" ").toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Free Online Tools
            </p>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900">
              Free online calculators for money, health, recipes, and everyday life
            </h1>

            <p className="mb-8 text-lg leading-8 text-slate-600">
              Fast, simple, and accurate tools designed to help you make better
              everyday decisions in seconds.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#calculators"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Explore calculators
              </a>

              <a
                href="/recipe-servings-calculator"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Try recipe calculator
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Finance</p>
            <p className="mt-2 text-sm text-slate-600">
              Loans, savings, mortgage, interest, and more.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Health</p>
            <p className="mt-2 text-sm text-slate-600">
              BMI, calories, macros, age, and body-related tools.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Food</p>
            <p className="mt-2 text-sm text-slate-600">
              Recipe scaling, ingredients, and kitchen helpers.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">Everyday Math</p>
            <p className="mt-2 text-sm text-slate-600">
              Percentages, discounts, tips, and conversions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Find a calculator</h2>
            <p className="mt-2 text-slate-600">
              Search by name, topic, or category.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search calculators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Most popular</h2>
          <p className="mt-3 text-slate-600">
            Start with our most useful tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <CalculatorCard
            title="Loan Calculator"
            description="Calculate monthly loan payments in seconds."
            href="/loan-calculator"
            category="Finance"
          />
          <CalculatorCard
            title="Compound Interest Calculator"
            description="Estimate investment growth over time."
            href="/compound-interest-calculator"
            category="Finance"
          />
          <CalculatorCard
            title="BMI Calculator"
            description="Check your BMI using height and weight."
            href="/bmi-calculator"
            category="Health"
          />
          <CalculatorCard
            title="Recipe Servings Calculator"
            description="Scale ingredients for more or fewer servings."
            href="/recipe-servings-calculator"
            category="Food"
          />
        </div>
      </section>

      <section id="calculators" className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">All calculators</h2>
          <p className="mt-3 text-slate-600">
            Browse all available tools.
          </p>
        </div>

        {filteredCalculators.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-600">No calculators found.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCalculators.map((calc) => (
              <CalculatorCard
                key={calc.href}
                title={calc.title}
                description={calc.description}
                href={calc.href}
                category={calc.category}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}