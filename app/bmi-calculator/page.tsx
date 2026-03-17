import type { Metadata } from "next";
import BmiCalculatorClient from "./BmiCalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator | Simple Calculators",
  description:
    "Free BMI calculator to estimate body mass index from height and weight.",
};

export default function Page() {
  return <BmiCalculatorClient />;
}