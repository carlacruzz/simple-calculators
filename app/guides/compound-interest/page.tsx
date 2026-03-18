import Link from "next/link";

export const metadata = {
  title: "How Compound Interest Works | Simple Calculators",
  description:
    "Learn what compound interest is and how it helps investments grow over time.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How Compound Interest Works
      </h1>

      <p className="mb-6 text-slate-600">
        Compound interest is the process where interest is added not only to the
        original amount of money, but also to the interest already earned over time.
        This means your investment can grow faster the longer it stays invested.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Basic formula
      </h2>

      <pre className="rounded-lg bg-slate-100 p-4 text-sm">
{`A = P (1 + r)^t`}
      </pre>

      <p className="mt-6 text-slate-600">
        Where:
      </p>

      <ul className="list-disc pl-6 text-slate-600">
        <li>P = initial investment</li>
        <li>r = annual interest rate</li>
        <li>t = number of years</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If you invest $1,000 at 5% annual interest for 10 years, your money will
        grow to about $1,628. This is more than simple interest because each year
        the new interest is calculated on a larger total.
      </p>

      <div className="mt-10">
        <Link
          href="/compound-interest-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the compound interest calculator
        </Link>
      </div>
    </main>
  );
}