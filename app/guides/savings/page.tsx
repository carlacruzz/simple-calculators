import Link from "next/link";

export const metadata = {
  title: "How Savings Grow Over Time | Simple Calculators",
  description:
    "Learn how regular savings contributions can grow over time with interest.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How Savings Grow Over Time
      </h1>

      <p className="mb-6 text-slate-600">
        Savings grow faster when you contribute regularly and earn interest on
        the accumulated balance. Over time, this can create significant growth.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Why regular saving matters
      </h2>

      <p className="text-slate-600">
        Even small monthly contributions can build into a large amount when
        combined with consistent interest over several years.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        Saving $200 per month for 10 years with annual interest can produce a
        much larger balance than simply multiplying $200 by the number of months.
      </p>

      <div className="mt-10">
        <Link
          href="/savings-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the savings calculator
        </Link>
      </div>
    </main>
  );
}