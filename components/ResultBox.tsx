type ResultBoxProps = {
  label: string;
  value: string;
  extra?: string;
};

export default function ResultBox({ label, value, extra }: ResultBoxProps) {
  return (
    <div className="mt-6 rounded-2xl bg-slate-100 p-5">
      <p className="mb-2 text-sm font-medium text-slate-500">{label}</p>
      <p className="text-3xl font-bold tracking-tight">{value}</p>
      {extra && <p className="mt-2 text-sm text-slate-600">{extra}</p>}
    </div>
  );
}