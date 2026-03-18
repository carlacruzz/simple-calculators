import Link from "next/link";

export const metadata = {
  title: "How Unit Conversion Works | Simple Calculators",
  description:
    "Learn how to convert between common metric and imperial length units.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">
        How Unit Conversion Works
      </h1>

      <p className="mb-6 text-slate-600">
        Unit conversion is the process of changing a value from one measurement
        unit into another. This is useful when comparing systems such as metric
        and imperial units.
      </p>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Common examples
      </h2>

      <ul className="list-disc pl-6 text-slate-600">
        <li>Meters to kilometers</li>
        <li>Centimeters to inches</li>
        <li>Miles to kilometers</li>
        <li>Feet to meters</li>
      </ul>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        Example
      </h2>

      <p className="text-slate-600">
        One mile is approximately 1.609 kilometers. One inch is 2.54 centimeters.
        A converter makes these calculations immediate and avoids manual mistakes.
      </p>

      <div className="mt-10">
        <Link
          href="/unit-converter"
          className="rounded-lg bg-slate-900 px-4 py-3 text-white"
        >
          Try the unit converter
        </Link>
      </div>
    </main>
  );
}