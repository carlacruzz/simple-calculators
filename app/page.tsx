"use client";

import { useMemo, useState } from "react";
import CalculatorCard from "@/components/CalculatorCard";
import { calculators, type CalculatorItem } from "@/lib/calculators";

const trendingCalculators: CalculatorItem[] = calculators.filter((c: CalculatorItem) =>
  [
    "/loan-calculator",
    "/bmi-calculator",
    "/recipe-servings-calculator",
    "/compound-interest-calculator",
  ].includes(c.href)
);

const categories = ["All", "Finance", "Health", "Food", "Math"] as const;

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [sort, setSort] = useState<"a-z" | "z-a">("a-z");

  const filtered: CalculatorItem[] = useMemo(() => {
    let result: CalculatorItem[] = [...calculators];

    if (search) {
      const q = search.toLowerCase().trim();

      result = result.filter((c: CalculatorItem) =>
        `${c.title} ${c.description} ${c.category}`.toLowerCase().includes(q)
      );
    }

    if (category !== "All") {
      result = result.filter((c: CalculatorItem) => c.category === category);
    }

    if (sort === "a-z") {
      result.sort((a: CalculatorItem, b: CalculatorItem) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sort === "z-a") {
      result.sort((a: CalculatorItem, b: CalculatorItem) =>
        b.title.localeCompare(a.title)
      );
    }

    return result;
  }, [search, category, sort]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900">
          Free Online Calculators
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Fast, simple tools for finance, health, cooking, and everyday math.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold tracking-tight">
          Trending Calculators
        </h2>

        <p className="mb-8 text-slate-600">
          The most popular tools used by visitors.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {trendingCalculators.map((calc: CalculatorItem) => (
            <CalculatorCard
              key={calc.href}
              title={calc.title}
              description={calc.description}
              href={calc.href}
              category={calc.category}
            />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <input
          type="text"
          placeholder="Search calculators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 px-4 py-3"
        />
      </section>

      <section className="mb-10 flex flex-wrap gap-3">
        {categories.map((c: (typeof categories)[number]) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              category === c
                ? "bg-slate-900 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {c}
          </button>
        ))}
      </section>

      <section className="mb-10 flex items-center gap-4">
        <span className="text-sm text-slate-500">Sort:</span>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "a-z" | "z-a")}
          className="rounded-xl border border-slate-300 px-4 py-2"
        >
          <option value="a-z">A → Z</option>
          <option value="z-a">Z → A</option>
        </select>
      </section>

      <section className="mb-8 text-sm text-slate-500">
        Showing {filtered.length} calculator{filtered.length === 1 ? "" : "s"}
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((calc: CalculatorItem) => (
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