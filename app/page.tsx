export default function Home() {
  
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-black">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-4xl font-bold">Simple Calculators</h1>
        <p className="mb-10 max-w-2xl text-gray-600">
          Free online calculators for finance, health, and everyday math.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/compound-interest-calculator"
            className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="mb-2 text-2xl font-semibold">
              Compound Interest Calculator
            </h2>
            <p className="text-gray-600">
              Estimate how your investment could grow over time.
            </p>
          </a>

          <a
            href="/bmi-calculator"
            className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="mb-2 text-2xl font-semibold">BMI Calculator</h2>
            <p className="text-gray-600">
              Calculate body mass index from height and weight.
            </p>
          </a>

          <a
            href="/loan-calculator"
            className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="mb-2 text-2xl font-semibold">
              Loan Calculator
            </h2>
            <p className="text-gray-600">
              Calculate monthly payments for loans.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}