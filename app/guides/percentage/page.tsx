import Link from "next/link";

export const metadata = {
  title: "How to Calculate Percentages | Simple Calculators",
  description:
    "Learn how percentages work and how to calculate percentage values quickly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How to Calculate Percentages
      </h1>

      <p className="mb-6 text-slate-600">
        Percentages are used to express parts of a whole out of 100. They are
        common in finance, shopping, statistics, and everyday math.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Formula
      </h2>

      <pre className="rounded-lg bg-slate-100 p-4 text-sm">
{`result = (percentage / 100) × value`}
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        20% of 150 is 30. This is calculated by multiplying 150 by 0.20.
      </p>

      <div className="mt-10">
        <Link
          href="/percentage-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the percentage calculator
        </Link>
      </div>
    </main>
  );
}