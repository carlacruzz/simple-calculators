import Link from "next/link";

export const metadata = {
  title: "How to Calculate Age | Simple Calculators",
  description:
    "Learn how age is calculated using your date of birth and the current date.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How to Calculate Age
      </h1>

      <p className="mb-6 text-slate-600">
        Age is usually calculated by comparing your date of birth with the
        current date. The result is the number of full years that have passed.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Basic idea
      </h2>

      <p className="text-slate-600">
        To calculate age, subtract the birth year from the current year, then
        adjust if the birthday has not happened yet this year.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If someone was born on June 10, 2000, and today is August 1, 2026,
        that person is 26 years old.
      </p>

      <div className="mt-10">
        <Link
          href="/age-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the age calculator
        </Link>
      </div>
    </main>
  );
}