type CalculatorCardProps = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export default function CalculatorCard({
  title,
  description,
  href,
  category,
}: CalculatorCardProps) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {category}
      </p>
      <h3 className="mb-2 text-xl font-semibold text-slate-900 group-hover:text-slate-700">
        {title}
      </h3>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </a>
  );
}