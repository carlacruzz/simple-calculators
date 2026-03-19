import Link from "next/link";

const guides = [
  { title: "Age Guide", href: "/guides/age" },
  { title: "BMI Guide", href: "/guides/bmi" },
  { title: "BMR Guide", href: "/guides/bmr" },
  { title: "Calorie Guide", href: "/guides/calorie" },
  { title: "Compound Interest Guide", href: "/guides/compound-interest" },
  { title: "Discount Guide", href: "/guides/discount" },
  { title: "Inflation Guide", href: "/guides/inflation" },
  { title: "Loan Guide", href: "/guides/loan" },
  { title: "Mortgage Guide", href: "/guides/mortgage" },
  { title: "Percentage Guide", href: "/guides/percentage" },
  { title: "Recipe Scaling Guide", href: "/guides/recipe-scaling" },
  { title: "Savings Guide", href: "/guides/savings" },
  { title: "Tip Guide", href: "/guides/tip" },
  { title: "Unit Conversion Guide", href: "/guides/unit-conversion" },
  { title: "VAT Guide", href: "/guides/vat" },
];

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-4xl font-bold">Guides</h1>

      <p className="mb-10 text-slate-600">
        Learn how each calculator works with simple explanations, examples,
        and formulas.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">
              {guide.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}