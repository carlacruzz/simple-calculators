import Link from "next/link";

export const metadata = {
  title: "How Mortgage Payments Work | Simple Calculators",
  description:
    "Learn how mortgage payments are calculated using home price, down payment, interest rate, and loan term.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How Mortgage Payments Work
      </h1>

      <p className="mb-6 text-slate-600">
        A mortgage payment is usually made up of principal and interest. The
        amount you pay each month depends on the home price, the size of your
        down payment, the interest rate, and the number of years in the loan term.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Main factors
      </h2>

      <ul className="list-disc pl-6 text-slate-600">
        <li>Home price</li>
        <li>Down payment</li>
        <li>Interest rate</li>
        <li>Loan term</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If a house costs $250,000 and you pay $50,000 upfront, the mortgage
        loan amount is $200,000. Your monthly payment then depends on the
        interest rate and repayment period.
      </p>

      <div className="mt-10">
        <Link
          href="/mortgage-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the mortgage calculator
        </Link>
      </div>
    </main>
  );
}