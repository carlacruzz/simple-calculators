export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Simple Calculators. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
          <a href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}