import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Calculators",
  description: "Free online calculators for finance, health, and everyday math.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="pQ_alaltt7MuYxCHEVjGmCgPYBMMTV-kv3mZrSkRhBY"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}