import Link from "next/link";

export const metadata = {
  title: "How to Calculate a Tip | Simple Calculators",
  description:
    "Learn how tip percentages affect the final bill and how to split the total between multiple people.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How to Calculate a Tip
      </h1>

      <p className="mb-6 text-slate-600">
        A tip is usually calculated as a percentage of the original bill.
        Once the tip is added, you can also divide the final amount between
        several people if the bill is shared.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Basic formula
      </h2>

      <pre className="rounded-lg bg-slate-100 p-4 text-sm">
{`tip amount = bill × (tip % / 100)
total bill = bill + tip amount
per person = total bill / number of people`}
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If the bill is $80 and you leave a 15% tip, the tip amount is $12.
        The final bill becomes $92. If 4 people split the bill, each person pays $23.
      </p>

      <div className="mt-10">
        <Link
          href="/tip-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the tip calculator
        </Link>
      </div>
    </main>
  );
}