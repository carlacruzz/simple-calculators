import type { Metadata } from "next";
import CompoundInterestCalculatorClient from "./CompoundInterestCalculatorClient";

export const metadata: Metadata = {
  title: "Compound Interest Calculator | Simple Calculators",
  description:
    "Free compound interest calculator to estimate investment growth over time.",
};

export default function Page() {
  return <CompoundInterestCalculatorClient />;
}