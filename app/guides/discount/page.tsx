import Link from "next/link";

export const metadata = {
  title: "How to Calculate Discounts | Simple Calculators",
  description:
    "Learn how discounts are calculated and how to find the final price after a percentage reduction.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How to Calculate Discounts
      </h1>

      <p className="mb-6 text-slate-600">
        A discount reduces the original price of a product by a percentage.
        To calculate the final price, first calculate the discount amount and
        then subtract it from the original price.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Formula
      </h2>

      <pre className="rounded-lg bg-slate-100 p-4 text-sm">
{`final price = original price - (discount % × original price)`}
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If an item costs $100 and has a 25% discount, the discount amount is
        $25 and the final price is $75.
      </p>

      <div className="mt-10">
        <Link
          href="/discount-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the discount calculator
        </Link>
      </div>
    </main>
  );
}