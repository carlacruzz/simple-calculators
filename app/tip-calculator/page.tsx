import type { Metadata } from "next";
import TipCalculatorClient from "./TipCalculatorClient";

export const metadata: Metadata = {
  title: "Tip Calculator | Simple Calculators",
  description:
    "Calculate the tip amount, total bill, and split per person.",
};

export default function Page() {
  return <TipCalculatorClient />;
}