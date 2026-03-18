import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Calculators",
  description: "Free online calculators for finance, health, and everyday math.",
  verification: {
    google: "pQ_alaltt7MuYxCHEVjGmCgPYBMMTV-kv3mZrSkRhBY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}