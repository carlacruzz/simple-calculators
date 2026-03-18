import Link from "next/link";

export const metadata = {
  title: "How to Calculate BMI | Simple Calculators",
  description:
    "Learn what BMI is and how to calculate it using your height and weight.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How to Calculate BMI
      </h1>

      <p className="mb-6 text-slate-600">
        BMI stands for Body Mass Index. It is a simple method used to estimate
        whether a person has a healthy body weight relative to their height.
        It is not a perfect health measure, but it is widely used as a quick screening tool.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        BMI formula
      </h2>

      <pre className="rounded-lg bg-slate-100 p-4 text-sm">
{`BMI = weight (kg) / height² (m)`}
      </pre>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        BMI categories
      </h2>

      <ul className="list-disc pl-6 text-slate-600">
        <li>Underweight: below 18.5</li>
        <li>Normal weight: 18.5 to 24.9</li>
        <li>Overweight: 25 to 29.9</li>
        <li>Obesity: 30 or more</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        If someone weighs 70 kg and is 170 cm tall, their BMI is approximately 24.22.
        That falls within the normal weight category.
      </p>

      <div className="mt-10">
        <Link
          href="/bmi-calculator"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the BMI calculator
        </Link>
      </div>
    </main>
  );
}