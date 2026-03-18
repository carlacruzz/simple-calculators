"use client";

import { useMemo, useState } from "react";
import CalculatorCard from "@/components/CalculatorCard";

const calculators = [
  {
    title: "Compound Interest Calculator",
    description: "Estimate how your money grows with compound interest.",
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
    description: "Estimate how much you can save over time.",
    href: "/savings-calculator",
    category: "Finance",
  },
  {
    title: "Inflation Calculator",
    description: "Estimate how inflation changes the value of money.",
    href: "/inflation-calculator",
    category: "Finance",
  },
  {
    title: "VAT Calculator",
    description: "Calculate VAT and final price after tax.",
    href: "/vat-calculator",
    category: "Finance",
  },
  {
    title: "BMI Calculator",
    description: "Calculate your body mass index.",
    href: "/bmi-calculator",
    category: "Health",
  },
  {
    title: "Calorie Calculator",
    description: "Estimate your daily calorie needs.",
    href: "/calorie-calculator",
    category: "Health",
  },
  {
    title: "Age Calculator",
    description: "Calculate your age from birth date.",
    href: "/age-calculator",
    category: "Health",
  },
  {
    title: "Recipe Servings Calculator",
    description: "Scale ingredients for recipes.",
    href: "/recipe-servings-calculator",
    category: "Food",
  },
  {
    title: "Percentage Calculator",
    description: "Calculate percentages quickly.",
    href: "/percentage-calculator",
    category: "Math",
  },
  {
    title: "Discount Calculator",
    description: "Calculate price after discount.",
    href: "/discount-calculator",
    category: "Math",
  },
];

const categories = ["All", "Finance", "Health", "Food", "Math"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("a-z");

  const filtered = useMemo(() => {
    let result = [...calculators];

    if (search) {
      const q = search.toLowerCase();

      result = result.filter((c) =>
        (c.title + c.description + c.category)
          .toLowerCase()
          .includes(q)
      );
    }

    if (category !== "All") {
      result = result.filter((c) => c.category === category);
    }

    if (sort === "a-z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "z-a") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      {/* HERO */}

      <section className="mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Free Online Calculators
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Fast, simple tools for finance, health, cooking, and everyday math.
        </p>
      </section>

      {/* SEARCH */}

      <section className="mb-10">
        <input
          type="text"
          placeholder="Search calculators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3"
        />
      </section>

      {/* CATEGORY FILTER */}

      <section className="mb-10 flex flex-wrap gap-3">

        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition
              ${
                category === c
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
          >
            {c}
          </button>
        ))}

      </section>

      {/* SORT */}

      <section className="mb-10 flex items-center gap-4">

        <span className="text-sm text-slate-500">
          Sort:
        </span>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border border-slate-300 px-4 py-2"
        >
          <option value="a-z">A → Z</option>
          <option value="z-a">Z → A</option>
        </select>

      </section>

      {/* RESULTS COUNT */}

      <section className="mb-8 text-sm text-slate-500">
        Showing {filtered.length} calculator
        {filtered.length === 1 ? "" : "s"}
      </section>

      {/* CALCULATOR GRID */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map((calc) => (
          <CalculatorCard
            key={calc.href}
            title={calc.title}
            description={calc.description}
            href={calc.href}
            category={calc.category}
          />
        ))}

      </section>

    </main>
  );
}