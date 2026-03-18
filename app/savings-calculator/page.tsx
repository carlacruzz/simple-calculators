import type { Metadata } from "next";
import SavingsCalculatorClient from "./SavingsCalculatorClient";

export const metadata: Metadata = {
  title: "Savings Calculator | Simple Calculators",
  description:
    "Estimate how much you could save over time with monthly contributions.",
};

export default function Page() {
  return <SavingsCalculatorClient />;
}