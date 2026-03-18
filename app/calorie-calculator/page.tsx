import type { Metadata } from "next";
import CalorieCalculatorClient from "./CalorieCalculatorClient";

export const metadata: Metadata = {
  title: "Calorie Calculator | Simple Calculators",
  description:
    "Estimate your daily calorie needs based on age, sex, weight, height, and activity level.",
};

export default function Page() {
  return <CalorieCalculatorClient />;
}