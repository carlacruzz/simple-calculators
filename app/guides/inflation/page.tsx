import Link from "next/link";

export const metadata = {
  title: "How Inflation Affects Money | Simple Calculators",
  description:
    "Learn how inflation changes the purchasing power and future value of money.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How Inflation Affects Money
      </h1>

      <p className="mb-6 text-slate-600">
        Inflation is the gradual increase in prices over time. As inflation
        rises, the same amount of money buys fewer goods and services.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Why inflation matters
      </h2>

      <p className="text-slate-600">
        Inflation affects savings, investments, salaries, and long-term
        planning. It is important to understand how purchasing power changes
        over time.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If inflation is 3% per year, something that costs $100 today could cost
        about $134 in ten years.
      </p>

      <div className="mt-10">
        <Link
          href="/inflation-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the inflation calculator
        </Link>
      </div>
    </main>
  );
}