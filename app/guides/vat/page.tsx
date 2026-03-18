import Link from "next/link";

export const metadata = {
  title: "How VAT Is Calculated | Simple Calculators",
  description:
    "Learn how VAT works and how to calculate tax and final price.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How VAT Is Calculated
      </h1>

      <p className="mb-6 text-slate-600">
        VAT, or Value Added Tax, is a percentage added to the base price of
        goods or services. The total price is the original price plus the tax.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Formula
      </h2>

      <pre className="rounded-lg bg-slate-100 p-4 text-sm">
{`VAT amount = price × (VAT rate / 100)
total price = price + VAT amount`}
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If a product costs $100 and VAT is 21%, the VAT amount is $21 and the
        final price is $121.
      </p>

      <div className="mt-10">
        <Link
          href="/vat-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the VAT calculator
        </Link>
      </div>
    </main>
  );
}