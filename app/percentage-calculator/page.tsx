import type { Metadata } from "next";
import PercentageCalculatorClient from "./PercentageCalculatorClient";

export const metadata: Metadata = {
  title: "Percentage Calculator | Simple Calculators",
  description:
    "Calculate percentages, percentage increases, decreases, and values.",
};

export default function Page() {
  return <PercentageCalculatorClient />;
}