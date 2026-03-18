import type { Metadata } from "next";
import BmrCalculatorClient from "./BmrCalculatorClient";

export const metadata: Metadata = {
  title: "BMR Calculator | Simple Calculators",
  description:
    "Estimate your basal metabolic rate based on age, sex, weight, and height.",
};

export default function Page() {
  return <BmrCalculatorClient />;
}