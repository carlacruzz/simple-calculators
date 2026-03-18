type CalculatorLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function CalculatorLayout({
  title,
  description,
  children,
}: CalculatorLayoutProps) {
  return (
    <main className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <a href="/" className="mb-6 inline-block text-sm text-slate-500 hover:text-slate-900">
          ← Back to home
        </a>

        <div className="mb-8">
          <h1 className="mb-3 text-4xl font-bold tracking-tight">{title}</h1>
          <p className="max-w-2xl text-lg text-slate-600">{description}</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          {children}
        </div>
      </div>
    </main>
  );
}