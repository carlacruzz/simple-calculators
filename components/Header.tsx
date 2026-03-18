export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold tracking-tight">
          Simple Calculators
        </a>

        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="/" className="hover:text-slate-900">Home</a>
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
          <a href="/privacy-policy" className="hover:text-slate-900">Privacy</a>
        </nav>
      </div>
    </header>
  );
}