import Link from "next/link";

export const metadata = {
  title: "How Loan Payments Work | Simple Calculators",
  description:
    "Learn how monthly loan payments are calculated using amount, interest rate, and loan term.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How Loan Payments Work
      </h1>

      <p className="mb-6 text-slate-600">
        A loan payment usually includes both principal and interest. The monthly
        amount depends on the loan size, the interest rate, and how long you
        take to repay it.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Main factors
      </h2>

      <ul className="list-disc pl-6 text-slate-600">
        <li>Loan amount</li>
        <li>Interest rate</li>
        <li>Repayment term</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        A $10,000 loan at 5% annual interest over 5 years will have a fixed
        monthly payment based on an amortization formula.
      </p>

      <div className="mt-10">
        <Link
          href="/loan-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the loan calculator
        </Link>
      </div>
    </main>
  );
}