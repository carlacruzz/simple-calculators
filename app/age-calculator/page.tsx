import type { Metadata } from "next";
import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata: Metadata = {
  title: "Age Calculator | Simple Calculators",
  description:
    "Calculate your age in years based on your birth date.",
};

export default function Page() {
  return <AgeCalculatorClient />;
}