import Link from "next/link";

export const metadata = {
  title: "How to Estimate Daily Calories | Simple Calculators",
  description:
    "Learn how calorie needs are estimated using age, sex, body data, and activity level.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How to Estimate Daily Calories
      </h1>

      <p className="mb-6 text-slate-600">
        Daily calorie needs depend on factors such as age, sex, weight, height,
        and physical activity. Most calculators estimate calories using BMR and
        an activity multiplier.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        What is BMR?
      </h2>

      <p className="text-slate-600">
        BMR stands for Basal Metabolic Rate. It estimates how many calories your
        body needs at rest to maintain basic functions.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Why activity matters
      </h2>

      <p className="text-slate-600">
        Your total daily calorie needs increase depending on how active you are.
        A sedentary person and a very active person will need different amounts
        of energy each day.
      </p>

      <div className="mt-10">
        <Link
          href="/calorie-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the calorie calculator
        </Link>
      </div>
    </main>
  );
}