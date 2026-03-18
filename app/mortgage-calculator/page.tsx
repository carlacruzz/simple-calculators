import type { Metadata } from "next";
import MortgageCalculatorClient from "./MortgageCalculatorClient";

export const metadata: Metadata = {
  title: "Mortgage Calculator | Simple Calculators",
  description:
    "Estimate your monthly mortgage payment based on home price, down payment, interest rate, and loan term.",
};

export default function Page() {
  return <MortgageCalculatorClient />;
}