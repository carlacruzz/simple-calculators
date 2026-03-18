import type { Metadata } from "next";
import InflationCalculatorClient from "./InflationCalculatorClient";

export const metadata: Metadata = {
  title: "Inflation Calculator | Simple Calculators",
  description:
    "Estimate the future value of money based on inflation.",
};

export default function Page() {
  return <InflationCalculatorClient />;
}